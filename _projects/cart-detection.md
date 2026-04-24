---
title: "Detecting Products Put Into a Cart"
collection: projects
category: cv
permalink: /projects/cart-detection
excerpt: 'Detected products being added to a cart by sequentially analyzing hand and hand-with-product detections from a camera feed.'
date: 2023-10-06
techstack: 'Python, Computer Vision, Deep Learning, OpenCV'
---

Images of hands with and without products were gathered, and the system sequentially analyzed whether a hand appeared first or a hand with a product appeared first.

Depending on that sequence, the system identified which product was being placed and used that to assess the number of products in the cart and measure their weights.

This ran in parallel with the visual text-based search engine that identified what each product was.
