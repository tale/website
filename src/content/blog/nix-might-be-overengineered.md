---
title: Nix Might be Overengineered
date: 2024-03-21
categories:
- productivity
- thoughts
description: After using Nix for the past year or so, I decided it was time to switch back to normal tooling.
icons:
- material-icon-theme:nix
- logos:macos
- logos:git-icon
---

> Hello! This title is pretty clickbaity, but I just wanted to clarify I spent most of this article
> talking about using Nix on macOS for system configuration *only*. I know NixOS is a better experience 🙂.

In late 2022, I decided to try out an interesting new tool called [Nix](https://nixos.org).
It is both a package manager and a Linux distribution built on the idea of a declarative system configuration.
You can define exactly how your system should look and feel within a configuration file and Nix will handle the rest.

```nix
# Example of some basic configuration via Nix
{ config, pkgs, ... }: {
  environment.systemPackages = with pkgs; [
    git
    zsh
    neovim
    ...
  ];
}
```

I was instantly hooked and I spent the next couple of weeks migrating my dotfiles over to Nix.
I went from a collection of messy bash scripts to a Nix Flake (more on that later) that could be
easily installed and managed on any system. Now if I needed to jump to a new machine, I could execute
a simple script which installed Nix, cloned my dotfiles, and handed everything over to home-manager.

### Flakes? Home-Manager? Nix-Darwin? What's that?
The Nix ecosystem is massive and it can be a little overwhelming at first.
There's so many different tools, concepts, and systems that you'll plug together when you start using Nix.
Flakes are a very simple concept in Nix that allows you to define a set of inputs and outputs.
When built, the inputs are fetched, built, and then passed into an "output function" which can do
essentially anything. Here's what my `flake.nix` looked like:

```nix
{
  # Nixpkgs are the packages we'll be using
  # Home-Manager is a tool to manage dotfiles
  # Nix-Darwin allows system level configuration on macOS
  inputs = {
    pkgs.url = "github:nixos/nixpkgs/nixpkgs-23.11-darwin";
    u_pkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    hm.url = "github:nix-community/home-manager/release-23.11";
    os.url = "github:lnl7/nix-darwin";

    hm.inputs.nixpkgs.follows = "pkgs";
    os.inputs.nixpkgs.follows = "pkgs";
  };

  outputs = { self, pkgs, u_pkgs, hm, os }:
    # Use the outputs to define a "darwinConfiguration"
    let unstable = u_pkgs.legacyPackages."aarch64-darwin"; in
    {
      darwinConfigurations."Aarnavs-MBP" = os.lib.darwinSystem {
        system = "aarch64-darwin"; # M1 Max
        modules = [
          hm.darwinModules.home-manager
          { home-manager.extraSpecialArgs = { inherit unstable; }; }
          ./config/system.nix
          ./config/brew.nix
          ./config/home.nix
        ];
      };
    };
}
```

Within those module files, I had access to all of the outputs which I could use to configure my system.
Not only could I tweak specific settings on macOS, but I had access to all the packages in Nixpkgs.
[Home-Manager](https://github.com/nix-community/home-manager) was a tool that allowed me to manage my dotfiles
and configure basic tools like `bash`, `git`, `gpg`, and more.

```nix
{ pkgs, config, ... }:
let
  pinentry-mac = "${pkgs.pinentry_mac}/Applications/pinentry-mac.app/Contents/MacOS/pinentry-mac";
in
{
  home.packages = with pkgs; [ pinentry_mac ];
  programs.gpg = {
    enable = true;
    settings = {
      keyserver = "hkps://pgp.mit.edu";
      default-key = "3205E18CEDD2C007";
    };
  };

  home.file."gnupg/gpg-agent.conf".text =
    ''
      	enable-ssh-support
      	default-cache-ttl 600
      	default-cache-ttl-ssh 600
      	max-cache-ttl 7200
      	max-cache-ttl-ssh 7200
      	use-standard-socket
      	pinentry-program ${pinentry-mac}
    '';
}
```

A strong benefit of Nix is being able to use other packages as inputs in your configuration.
Notice how I'm using `pkgs.pinentry_mac` to get the path to the `pinentry-mac` binary, which allows me
to avoid hardcoding paths in my configuration.

[Nix-Darwin](https://github.com/LnL7/nix-darwin) opened up configuring macOS via the Nix language.
It brought the configuration functionality on NixOS to macOS and allowed me to tweak defaults easily.

```nix
{ pkgs, ... }: {
  system.patches = [
    (pkgs.writeText "pam_tid.patch" ''
      --- /etc/pam.d/sudo	2023-09-28 09:27:50
      +++ /etc/pam.d/sudo	2023-09-28 09:27:54
      @@ -1,4 +1,6 @@
       # sudo: auth account password session
      +auth       optional       ${pkgs.pam-reattach}/lib/pam/pam_reattach.so
      +auth       sufficient     pam_tid.so
       auth       include        sudo_local
       auth       sufficient     pam_smartcard.so
       auth       required       pam_opendirectory.so
    '')
  ];
}
```

This particular snippet was nice because it allowed me to use Touch ID without needing to reconfigure this
system file on every update.

## So what went wrong?
You might be looking at all of this and thinking, "Wow, this is amazing! Why would you ever switch back?".
I had similar thoughts when I first switched too, but the bliss period wore off and I started to notice
some of the uglier parts of Nix. It wasn't necessarily a single issue, but a combination of many different
problems and a realization that I didn't need any of this.

### macOS is not a first-class citizen
Nix is primarily built for use on Linux via NixOS. That's what makes it such a strong contender in the
Linux ecosystem. The first issue was that even with Nix I still needed to use `brew` in order to get some
specific packages that weren't available on Nixpkgs and cask applications that I needed.
Nix-Darwin tried to solve this by allowing a `brew` configuration in your Nix configuration, but it was
still a bit clunky and would run into issues with some packages.
See my old [brew.nix](https://github.com/tale/dotfiles/blob/nix/config/brew.nix) config for more.

There were also some packages that weren't available on macOS, and any packages that required
Xcode or other macOS specific tools were a pain to get working. The overall experience left a lot to be
desired and I found myself spending more time debugging issues than actually using my system.

### Poor Error Messages & Mediocre Documentation
The documentation for an ecosystem along with its error messages are crucial to its success.
Nix has tons of documentation due to how extensive it is, but it ends up being an overload of knowledge
most of the time instead of being helpful. It's more of an API spec than proper guided documentation.

The error messages are also horrendous. They're often too cryptic and provide no context on what went wrong.
They'll be polluted with tons of internal stack traces and it's hard to figure out what the actual issue is.
I tried to find a good example, but this is something about the kind of error you can expect

![Nix error message](@/assets/nix-error.png)

### Things are Overengineered for the use case
Naturally a complex tool will have some level of over-engineered design, but I for my use-case Nix was too much.
Think about it, I was using an entire build system that ran as a permanent daemon and took up tons of space
on a partition just to manage some dotfiles and system configurations. Not to mention the various different
system changes and deep level of control that Nix had over my system.

It didn't make sense on macOS and it especially didn't make sense on my Linux distribution of choice either.
I never used NixOS nor the features of the build environments (like `direnv` integration) and I was left with
a system that was too complex for my needs.

### Takeaways
I think Nix is a very powerful tool if used for the right use-case. If you're managing a large fleet of servers
or need to have a per-project build environment (like Python's `virtualenv`), then Nix is a great choice.
If you're using NixOS I'm sure it's a great experience too, otherwise I can't recommend it.

I've seen both people who swear by it and people who hate it, and I think it's important to understand that
it's not a one-size-fits-all solution. I'm glad I tried it out and I learned a lot about the Nix ecosystem,
Maybe it was a skill issue on my part and I just needed to give it more time, but I couldn't justify the time
investment for the return I was getting. I'm back to using `brew` on macOS and `dnf` on Linux and I'm happy with
the simplicity of it all. My dotfiles are just symlinks again, using `stow` and some bash scripts.
You can check them out [here](https://github.com/tale/dotfiles) if you're interested. The `nix` branch also
exists for posterity.

I do hope that Nix will continue to grow and improve, and I'm excited to see where it goes in the future.
Maybe one day I might revisit it and find that it's a perfect fit for me, but for now I'm content with my
current setup.
