---
title: "Variable Multiple Instance Learning"
collection: projects
category: cv
permalink: /projects/variable-mil
excerpt: 'Explored variable-input fixed-output learning for 3D object modeling, implementing a CNN baseline and proposing an RNN-inspired embedding approach.'
date: 2023-10-06
techstack: 'Python, PyTorch, CNN, Deep Learning'
---

A common problem in machine learning is using a variable number of inputs to get a fixed output — for example, creating a 3D model of an object from multiple images taken at different angles. Standard approaches require a constant number of images in a rigid order, with no missing data.

The standard solution using multiple convolutional networks in parallel was implemented as a baseline. This required a consistent dataset of multiple images taken in a fixed order to produce high-confidence predictions.

A new approach was proposed: using a model similar to an RNN that takes variable-size input and learns how to merge an embedding with an image incrementally. Unfortunately, there was not enough time remaining in the internship to test this hypothesis.
