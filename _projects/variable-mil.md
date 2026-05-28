---
title: "Variable Multiple Instance Learning"
collection: projects
category: cv
permalink: /projects/variable-mil
excerpt: "A common problem in machine learning is using a variable number of inputs to get a fixed output."
date: 2018-07-01
techstack: "Computer Vision"
source: notion
---

A common problem in machine learning is using a variable number of inputs to get a fixed output.
For example: Creating a 3d model on an object with multiple images at different angles. The problem
with using machine learning is that it would require a constant number of images for each object, and
the angles and order of the photos must be standard.
This problem could potentially be solved with the implementation of capsule networks however for the
moment they are unfeasible due to their large computational cost.
The standard solution to this problem is using multiple convolutional networks in parallel that takes
various images in a rigid order. The problem is that this requires a consistent dataset of multiple images
taken in an order, with no missing images in the dataset to give a prediction with high confidence.
The solution implementing multiple convolutional networks was used to create a base from which
improvements could be made.
I had the idea of using a model very similar to an RNN to take a variable size input and try to understand
an embedding while also learning how to merge an embedding with an image. But there wasn’t enough
time left in the internship to test this hypothesis

