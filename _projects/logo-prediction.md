---
title: "Logo Prediction"
collection: projects
category: cv
permalink: /projects/logo-prediction
excerpt: 'Identified company logos on product images using keypoint matching and a dynamically generated logo collage for confident brand attribution.'
date: 2023-10-06
techstack: 'Python, OpenCV, Keypoint Matching, Deep Learning'
---

Created a solution to capture the logo of a company from images of products.

A system was used that captured all the keypoints from an image and matched them to keypoints from another image. A tool was built to create a collage of logos dynamically and compare this collage against any product to identify which logo it most strongly correlated with.

The matching logic:
1. Compared logos relative to each other.
2. Considered it a match if one logo matched with significantly more confidence than the others.
3. If no strong match was found, or if it matched everything equally, it was flagged as a new brand logo.
4. The logo was then cropped from the region with the most keypoints.
