---
title: "Visual Search"
collection: projects
category: cv
permalink: /projects/visual-search
excerpt: "The objective was to group together similar objects based on visual appearance. The main"
date: 2019-06-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

The objective was to group together similar objects based on visual appearance. The main
problem was that this was based only on images, without taking the product titles or any
attributes as inputs. This made it an unsupervised learning task.
The process used the ImageNet trained VGG 16 model to generate embeddings of the images
and used various clustering algorithms to group the images together based on the embeddings.
There were some setbacks for example, it would not put lamps mirrored images in the same
group, and a grayscale image would not be in the same group as the original image. Pooling the
embeddings from 7x7 to 1x1 images eliminated the spatial data from the embeddings. This solved
the mirroring problem while also solving the grayscale problem.
The result was 20 groups of lamps, where all the groups had lamps that looked similar. And
consistently grouped together lamps that were mirror images of one another, and grouped lamps
by similar color schemes.


![](/images/projects/visual-search/e390956f34b6.png)


![](/images/projects/visual-search/4d799e3fc41f.png)

