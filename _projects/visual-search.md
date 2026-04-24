---
title: "Visual Search"
collection: projects
category: cv
permalink: /projects/visual-search
excerpt: 'Grouped similar products by visual appearance using VGG16 embeddings and clustering, resolving mirroring and grayscale issues via spatial pooling.'
date: 2023-10-06
techstack: 'Python, VGG16, ImageNet, K-Means Clustering, PyTorch'
---

The objective was to group together similar objects based on visual appearance alone, without product titles or attributes, making it an unsupervised learning task.

The process used the ImageNet-trained VGG16 model to generate embeddings of the images, then applied various clustering algorithms to group images based on those embeddings.

Two setbacks were encountered: mirror images of lamps were not being placed in the same group, and grayscale images were separated from their color counterparts. Pooling the embeddings from 7x7 to 1x1 eliminated spatial data from the embeddings, solving both the mirroring and grayscale problems.

The result was 20 groups of lamps where all items in a group looked visually similar, with mirror images and matching color schemes consistently grouped together.
