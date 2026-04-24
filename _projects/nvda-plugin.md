---
title: "NVDA Plugin for Spoken History"
collection: projects
category: automation
permalink: /projects/nvda-plugin
excerpt: 'Modified an existing NVDA plugin to stream the screen reader spoken history to a desktop file, filling a gap not available in the software or any addon.'
date: 2023-10-06
techstack: 'Python, NVDA'
---

The requirement was to save the NVDA screen reader's spoken history — a feature not available in the software and not covered by any existing add-on.

NVDA has a built-in Python shell and a speech viewer, but both turned out to be useless: the shell had no documentation, and extracting information from another window was not feasible.

The solution was to take an already existing plugin and modify it to stream the spoken history into a file on the desktop.
