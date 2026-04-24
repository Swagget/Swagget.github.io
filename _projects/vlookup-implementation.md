---
title: "Vlookup Implementation"
collection: projects
category: automation
permalink: /projects/vlookup-implementation
excerpt: 'Generalized a hardcoded Excel column-matching script into a fully parameterized CLI tool that works on any xlsx file.'
date: 2023-10-06
techstack: 'Python, openpyxl'
---

Created a program to manipulate xlsx files.

The original version was hardcoded for a specific situation: take a column from one file and compare it against a column from another file, find matches, and update the original file.

This was enhanced and fully parameterized. It now accepts the file names and column names as console parameters, making it completely free of hard coding and capable of working on any xlsx file.
