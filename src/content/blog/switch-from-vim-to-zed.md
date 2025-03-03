---
title: Why I Switched from Vim to Zed
date: 2025-03-03
categories:
- technical
- productivity
description: A graphical text editor that might be better than Vim?
---

![Preview of Zed](@/assets/zed-preview.png)

Over the past several weeks, I've been experimenting with [Zed](https://zed.dev), a relatively new text editor that aims to replace
Visual Studio Code with a high-performance, GPU powered editing experience. After spending a few hours setting up my configuration and
trying it out, I've decided to permanently switch from Vim to Zed. Here's why.

### Vim
Before 2020, I was a heavy Visual Studio Code user as it was the defacto editor which included all of the bells and whistles in the
modern programming experience including code completions and AI suggestions through Copilot. My only issue with the program was the
absolutely *abysmal* performance on my 2020 MacBook Pro. Working through any relatively large codebase would cause my fans to spin up
bring the editor to its knees.

This is when I decided it was time to learn Vim and gear myself up to switch. After a few months of learning the motions and many hours
of configuring my [Neovim](https://neovim.io) setup, I was ready to make the switch. After reaching the proficiency I had with
Visual Studio Code, I never looked back and was happy with my decision.

Last year, I found myself working in an environment where our systems did not have access to the internet. These machines did not have
Neovim installed, nor would Neovim's plugin system fit well in this environment. The outcome of this was two-fold, first I stopped relying
on my code completions, relying on codebase and language knowledge to remain productive. Second, I found myself using vanilla Vim more and
would ultimately create a new Vim configuration with a minimal amount of plugins.

![My Minimal Vim Configuration](@/assets/vim-setup.png)

### Zed
Fast forward to November 2024 and my developer environment had significantly changed. With the recent release of
[Ghostty](https://ghostty.org), I learned a lot more about the terminal and I stopped using `tmux` in order to take advantage of
Ghostty's performance and features. This meant I started using Neovim within an external GUI, similar to a different app running.
In other news, my original "developer workflow" I'd been using since 2020 was crippled. I was no longer quickly hopping around
`tmux` sessions, opening `vim` instances everywhere and I only kept 1 thing open at a time.

So, I decided it was time to redo my workflow and I started looking for a new editor. My first choice was
[JetBrains Fleet](https://www.jetbrains.com/fleet/), but I quickly realized it is very unfinished and needs a few more years.
I then stumbled upon Zed, a newly popular text editor that leveraged the GPU to provide a high-performance editing experience (oh and
it's written in Rust btw). Time to give it a try.

## The Setup
After playing around with keybindings for a few weeks, I finally had a Vim-mode setup that I was happy with. The editor offered such a
solid core experience around the text editing experience (albeit with a few missing vim bindings) that I was able to get up and running
quickly. Performance is incredibly snappy, allowing me to open up large codebases without issue. Code completion and LSP tooling is
built-in and works well, staying out of my way most of the time.

![A small snippet of my Zed keybindings](@/assets/zed-bindings.png)

One of the best features of Zed is the high level of control when setting keybindings. I wanted to replicate as much of
my Neovim workflow as I possibly could and the `context` system in Zed is so complex and smart that it lets me tweak the conditions
of when a specific keybind should be applied. My biggest use case for this is being able to `ctrl-p` to open my file picker, but then
also use `ctrl-p/ctrl-n` to navigate up and down without re-triggering the file picker.

Zed isn't perfect though. The vim bindings are still a work in progress and are missing some key features that I used to rely on like
the `:b#` command to switch between buffers. There's also some customization features that are open issues on the GitHub, but I trust
the Zed team will get to them eventually.

### Remote Development
Zed has a Remote Development feature that essentially mimicks VS Code's `code-server` functionality. I'm yet to try this out as I don't
particularly like the clunkiness of using a remote editor. So, I'm still using good old Vim when I SSH into other systems. No more
Neovim and no more customization, just plain old default Vim. It's good enough for now and I think it will continue to be good enough
for the foreseeable future. On my local machine, I still have Vim installed and I'll use it for quick messages and any `git` operations
since I still prefer to use the command-line interface for version control.

Overall, I'm happy with my switch to Zed. It's a great editor that has a lot of potential and I'm excited to see where it goes in the
future. If you're looking for a new editor to try out, I highly recommend giving Zed a shot. It's a great alternative to Visual Studio
Code and its beginning to get a proper extension ecosystem (it already has themes and language support). I don't think that I'll be
switching back to Vim anytime soon as long as Zed continues to get the frequent updates and improvements that it has been getting.

Huge thanks to the Zed team for creating such a great editor!
