---
title: "The Image ratio distortion on zoom for 200%"
collection: projects
category: automation
permalink: /projects/image-ratio-distortion
excerpt: "The requirement was to find if the page distorts, if zoomed to 200%."
date: 2017-06-15
techstack: "Automation"
source: notion
---

The requirement was to find if the page distorts, if zoomed to 200%.
Most of the overlapping images were created by intentional superimposition, created by client’s web developers. The major concern was, upon zooming, some images changed their aspect ratio which would result in distorted image.
After going through the html code for a few hours, it was found that the default value of “object-fit” was set as “contain”. If this were to be changed to “cover” the aspect ratio didn’t change anymore.
By the next day, created a python code that scanned through the html code of all the files and would save the name of the images. Following which it would go through all the CSS files and look for the same images, if they were found, it would check if the attribute “object-fit” was unassigned and if it was, the code would change the file to change the attribute’s value to “cover”.
This automatically fixed all the image aspect ratio distortions present in every web page.

