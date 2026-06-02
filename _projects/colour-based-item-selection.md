---
title: "Colour based item selection"
collection: projects
category: cv
permalink: /projects/colour-based-item-selection
excerpt: "In working to detect products placed in the cart Detecting when products are put into a cart. We wanted to use all the information that we were receiving from the camera."
date: 2026-12-01
techstack: "Computer Vision, Machine Learning"
source: notion
---

In working to detect products placed in the cart [Detecting when products are put into a cart](https://app.notion.com/p/5490a21644004622826dd775dff9c883). We wanted to use all the information that we were receiving from the camera. 


So I extracted the top three colors that we received and matched them to the top three colors from each product. The “primary colors” each product used.


To seperate the product being placed from the environment we used optical flow to identify the product, and a skin detection algorithm to nullify the hand skin color from interfereing.


However this turned out to not work effectively since different environments had different white balances, and the colors of the pixel values didn’t match up.

