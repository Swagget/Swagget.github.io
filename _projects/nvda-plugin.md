---
title: "NVDA plugin to store the spoken history on a text file"
collection: projects
category: automation
permalink: /projects/nvda-plugin
excerpt: "The requirement was to save the NVDA spoken history. This was not available since the Software didn’t have that option and there wasn’t any add-on to save history."
date: 2017-06-01
techstack: "Automation"
source: notion
---

The requirement was to save the NVDA spoken history. This was not available since the Software didn’t have that option and there wasn’t any add-on to save history.
However, there was a python shell built into the software and there was a speech viewer. Although that seemed like that was all that was needed, it turned out to be completely useless as the shell had no documentation to work with and one couldn’t to figure out how to extract information from another window.
Hence used another already created plugin and modified it to stream the history into a file on the desktop.

