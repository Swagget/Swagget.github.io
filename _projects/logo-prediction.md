---
title: "Logo Prediction"
collection: projects
category: cv
permalink: /projects/logo-prediction
excerpt: "Created a solution to capture the logo of a company from images of the products."
date: 2019-08-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Created a solution to capture the logo of a company from images of the products.


I used a system that captured all the “keypoints” from an image and matched keypoints from another image. This project was initially designed for picking out key landmarks from photos of their images on the internet.


I created a tool to create a collage of Logos dynamically. And compare this collage of logos any product to identify which logo it most strongly correlated with.

1. It compared the logos matching relative to each other.
2. It considered it matched if it matched with one with significantly more confidence than the others.
3. And case if it didn’t match with any one or matched with everything to roughly the same degree, then it considered it a new Brand Logo.
4. It then cropped out the logo from the region with the region with the most key points.
