---
title: Nix Might be Overengineered
date: 2024-03-21
categories: productivity, thoughts
---

For around the past 18 months, I've been using [Nix](https://nixos.org) on my MacBook Pro for many things.
It handled my dotfiles (`~/.bashrc`, etc.), package management, and system configurations.
If you're interested in seeing how this worked in action, checkout the [nix branch](https://github.com/tale/dotfiles/tree/nix) of my dotfiles.

![Preview of my Nix configuration](/posts/nix-preview.png)

This was just a small preview of the granularity and control that I unlocked with Nix.
I could customize system settings via the `defaults(1)` command through [nix-darwin](https://github.com/LnL7/nix-darwin), a Nix plugin that brought some of the deterministic configuration to macOS.

Just seeing these possibilities, I was hooked. I spent many days painstakingly learning the Nix language and how I could port over my existing mess of configuration scripts to utilize another crucial plugin: [home-manager](https://github.com/nix-community/home-manager). The idea of home-manager was to make easily reproducible and portable dotfiles that could be installed and managed via Nix.

![Preview of home-manager's capabilities](/posts/home-manager-preview.png)

That's what `gpg.nix` looked like, when I initialized my Nix configuration, it would automatically enable `pinentry-mac` and configure my GPG directory with the correct configuration files and start the agent.

### What went wrong?

Seeing all of this, you might be wondering what went wrong. I was able to easily configure my system and manage dependencies on my MacBook and it seemed like the overall result was more portable right? After a couple months I started to encounter a few different problems and they stacked up over time:

#### Outdated Packages
Nix touted itself as being one of the biggest package repositories, but the reality was a lot of packages did not get the attention they needed and ended up being outdated. If you look at [bun's nix page](https://search.nixos.org/packages?channel=23.11&show=bun) on the most recent version, you can see that it's over half a year old.

I ended up creating a `brew.nix` file including a bunch of homebrew formulae and casks that I needed to use since they were either unavailable, outdated, or flat out broken on Nix.

#### Overly Complex System
The Nix language is a quirky language that has a steep learning curve. In the beginning I was faced with very cryptic errors and a lack of understanding. Personally, it came across as a little overengineered and the language felt gimmicky at times.

Here's a good example, when I rebuilt a "derivation" (this is what we called a specific build of a configuration), the build happened in the `/nix` directory and then readonly files were symlinked into my home directory. This system works well in practice especially if I need managed reproducible environments, but an entire daemon to essentially make some symlinks felt like too much for me.

#### Half-baked Ecosystem
A lot of the Nix ecosystem outside of using NixOS feels very incomplete. The documentation and error messages are outright inadequate and a lot of plugins can't reach the same level of integration as NixOS itself (at no fault of their own, but this still impacts me in the end).

Nix has poor support for Fedora and Red Hat Enterprise Linux, my choices of Linux distributions (required many workarounds to play nicely with SELinux). There wasn't anything like nix-darwin which could manage system configurations either. And I know, if I wanted the deep system configuration I should've just used NixOS, but my point is that outside of NixOS, the entire system falls apart.

### Takeaways

I'm not saying that Nix is a bad tool, it's just not for me.
I've seen many people use it and love it, but I've also seen many people use it and hate it.
Maybe it's a skill issue, maybe I needed to give it more time, but I just couldn't justify the time investment for the return I was getting.
So what did I end up doing? I switched back to using `brew` on macOS and `dnf` on Linux.
The first-party package managers and repositories will always have closely up-to-date packages.
Configuration? It's just a bunch of bash scripts again, but they're stupidly simple and they work.

Maybe in another couple years Nix will be more mature and might solve some of the issues that I outlined, but in the end, some bash scripts will always be simpler for now.
