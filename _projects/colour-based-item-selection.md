---
title: "Colour Based Item Selection"
collection: projects
category: cv
permalink: /projects/colour-based-item-selection
excerpt: 'Identified products placed in a cart by matching dominant colors from the camera feed against a product color database using optical flow and skin detection.'
date: 2023-10-06
techstack: 'Python, OpenCV, Optical Flow, Machine Learning'
---

In working to detect products placed in the cart, the goal was to use all the information being received from the camera.

The top three colors received from the camera feed were extracted and matched to the top three "primary colors" of each product.

To separate the product being placed from the environment, optical flow was used to identify the product, and a skin detection algorithm to nullify the hand skin color from interfering.

However this turned out to not work effectively since different environments had different white balances, and the pixel values of colors didn't match up across environments.
