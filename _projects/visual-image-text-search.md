---
title: "Visual Image Text-Based Search Engine"
collection: projects
category: data-science
permalink: /projects/visual-image-text-search
excerpt: 'Built a probabilistic image-to-text product mapping system to identify products placed in a cart from camera captures.'
date: 2023-10-06
techstack: 'Python, NLP, Probabilistic Modeling, Machine Learning'
---

From the images captured, a system was created that uses probabilities to map words to products.

Each word was mapped to each product, and when the probabilities of the products matched up the product was determined to be correct.

In hindsight, a Bayesian network would have been a much better fit for this problem.

This was then integrated with the system to detect products that were placed into the cart.
