---
title: There is no Perfect Note-Taking App
date: 2024-02-09
category: productivity
---

As a student, I find it important to take notes during lectures.
I've spent my fair share of time looking for a proper note-taking app and I ultimately settled on [Craft](https://craft.do).
It checked off a few crucial boxes for me:

- It's local-first, I'm able to work offline and sync later.
- It's markdown-based, which means I can easily export my notes.
- It's advanced, I'm able to use LaTeX with a proper engine.

Craft is paid (however I'm on a student plan) and it's not open-source.
To make matters worse, the documents are stored in a binary block format, which means I can't easily access them outside of the app.
That being said, I've been using it for over a year now and I'm quite happy with it because it's suited my needs.

However recently, one of my friends recommended I give [Obsidian](https://obsidian.md) a try and I was genuinely curious to see how I could start a potential transition and ultimately switch to the app.
For the uninitiated, Obsidian is a note-taking app with lots of powerful visualization and backlinking features.
It's free, uses local markdown files, and extensible with JavaScript plugins.

Once I'd gotten my notes imported, I realized that I was missing a few features that I'd grown accustomed to in Craft.
Slash commands and a "focus mode" were the two main features that I missed, however those were easily solved with a few plugins.
The calendar view and integration was also something I missed, but I could live without it for the time being.
I didn't really benefit from the backlinking features because it doesn't really work with the way I take notes.
Generally, I'll make a new document each week and take notes chronologically, eliminating the need for backlinking.

I was also trying to find a way to write notes with my preferred text editor at the time, [Neovim](https://neovim.io), so I had a crazy idea.
What if I built an Obsidian and Neovim plugin that allowed me to edit my notes with Neovim and use Obsidian as a previewer?
I found out that Obsidian has a plugin API and they're just simple Node.js applications, so I started working on it.
Within 2 days, I had a working prototype that synchronized scrolling, editing, and allowed pasting images into the Neovim buffer.
Honestly, it was a great learning project because I learned how to write Neovim plugins which are traditionally written in lua.

**Here's the kicker, I never ended up using the plugin.**

Yep, I basically just wasted 2 days on a project that I never ended up using.
When I got to my next lecture, I realized that the plugin and Obsidian as a whole just didn't fit my workflow.
First, while I heavily appreciate the vim motions and editing, there were a few problems that I couldn't solve.

- I never used the vim motions because I wrote my notes chronologically, I didn't need the power of editing that comes with vim motions.

- Having 2 windows open on a 14" laptop made it so that I couldn't keep a browser open which I typically used to assist my learning.

Finally, without major configuration, Obsidian just looked "off" to me in a way I couldn't explain.
I believe it has to do with the appearance of the editor, but it felt like a knock-off to Notion at best.
So what's the moral of the story? There isn't a perfect note-taking app, just the one you make work for yourself.
Craft isn't perfect by any means, but I've developed a workflow and note-taking strategy around it, which is why it's hard for me to switch off of it.
If you're looking for advice on picking a note-taking app, honestly it's just best to try what works for you and what you have an established workflow with.
