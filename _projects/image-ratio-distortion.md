---
title: "Image Ratio Distortion Fix at 200% Zoom"
collection: projects
category: automation
permalink: /projects/image-ratio-distortion
excerpt: 'Wrote a Python script that automatically scans HTML/CSS files and fixes image aspect ratio distortions at 200% zoom by setting object-fit to cover.'
date: 2023-10-06
techstack: 'Python, HTML, CSS'
---

The requirement was to find and fix pages that distorted images when zoomed to 200%.

After investigating the HTML code, it was found that overlapping images with "object-fit: contain" (the default) caused the aspect ratio to change on zoom. Changing this to "cover" prevented the distortion.

By the next day, a Python script was created that scanned through all HTML files to identify images, then searched through all CSS files for those same images. If the "object-fit" attribute was unassigned, the script automatically changed it to "cover".

This automatically fixed all image aspect ratio distortions across every web page.
