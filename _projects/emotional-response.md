---
title: "Emotional Response"
collection: projects
category: cv
permalink: /projects/emotional-response
excerpt: 'Trained a CNN on artwork to classify the emotional response a viewer would feel, achieving better performance after simplifying to binary happy/sad classification.'
date: 2023-10-10
techstack: 'Python, CNN, Keras, Deep Learning, Image Classification'
codeurl: 'https://github.com/Swagget/Emotional-Response'
---

A deep learning model that analyses photos to determine the emotional response of a human seeing the photo.

The model uses images of artwork, trained on 8 basic human emotions: anger, fear, sadness, disgust, surprise, anxiety, trust, and joy. Images that evoke these feelings were used to train a Convolutional Neural Network to predict the emotions humans would feel on viewing a piece of art or a photograph.

The results were very low across all 8 classes, so the classifications were reduced to binary (happy vs. sad), which achieved significantly better results.
