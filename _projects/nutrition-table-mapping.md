---
title: "Nutrition Table Mapping"
collection: projects
category: cv
permalink: /projects/nutrition-table-mapping
excerpt: "The goal was to digitize nutrition tables from images. Manually labeling data was too expensive and time consuming."
date: 2018-07-01
techstack: "Data Generation, Computer Vision, Deep Learning"
source: notion
---

The goal was to digitize nutrition tables from images. Manually labeling data was too expensive and time consuming. 


We arrived at the point where we were able to segment the image into labeled sections with items such as “Sodium” and “29%”.


The next challenge became to successfully link the boxes together, for which we used a neural network that takes only the coordinates of the boxes and links them together. 


With very few manually labeled data I created a tool to synthetically generate data and use it to train the neural network.


This was successful and we were able to digitize the inputs from beginning to end.

