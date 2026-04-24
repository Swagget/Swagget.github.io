---
title: "Nutrition Table Mapping"
collection: projects
category: cv
permalink: /projects/nutrition-table-mapping
excerpt: 'Digitized nutrition tables from product images end-to-end using a neural network trained on synthetically generated bounding box data.'
date: 2023-10-06
techstack: 'Python, Deep Learning, Neural Networks, Synthetic Data Generation'
---

The goal was to digitize nutrition tables from images. Manual data labeling was too expensive and time consuming.

The pipeline reached a point where images could be segmented into labeled bounding boxes with items such as "Sodium" and "29%".

The next challenge was linking the boxes together correctly. A neural network was built that takes only the coordinates of the boxes and learns to link them together.

With very few manually labeled examples, a tool was created to synthetically generate training data. This was successful, and the full pipeline was able to digitize nutrition table inputs from beginning to end.
