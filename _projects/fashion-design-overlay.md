---
title: "Fashion Design Overlay"
collection: projects
category: cv
permalink: /projects/fashion-design-overlay
excerpt: 'Developed a system to overlay arbitrary designs onto clothing worn by models by mapping intersection points of a checkered pattern to simulate cloth curvature.'
date: 2023-10-06
techstack: 'Python, OpenCV, Computer Vision'
---

The task was to create a system that could overlay any design on top of a cloth that a model was wearing. The model cloth was a checkered pattern specifically because it is easier to trace all the curves that follow the shape of the model's body.

The main challenge was imitating the curves on the cloth — for example, the sides of a shirt where the design appears warped. The approach taken was to use all the points where the squares of the checkered pattern intersect to map out the cloth's curvature, then warp the design accordingly.

However, this approach was limited because the edges of the shirt could not be mapped perfectly, and no workable solution to this problem was found.
