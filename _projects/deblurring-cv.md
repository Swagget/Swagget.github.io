---
title: "Deblurring Computer Vision"
collection: projects
category: cv
permalink: /projects/deblurring-cv
excerpt: "Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving."
date: 2021-10-01
techstack: "Computer Vision, Deep Learning"
source: notion
---

Implemented a research paper’s code that de blurred video content. However the code had an issue where the output videos occasionally had artifacts in areas that were relatively still and not moving.


We then used optical flow with a threshold, when the threshold was crossed we used the prior method, however when the optical threshold wasn’t crossed, we used the frames from the input image itself.


We then wrote the methods in the form of a research paper.


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHA7YOB%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T112943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpXKQ5z8%2FUA6Wji4he%2BDhaMUYqbgprh1LiggkOkOYsQIgMSLv0tt8Lu78Gh5lNkBt4GO415wTAmk%2F1nA2AE3iBQcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FWjwJ1Gsb3ptLAAircA%2BaKNReJ8ZOM6Rg2OftIsFsU23OwJXAl8bmhPXxlp4s8AFU1D7lAtd9UqAUfBbCXmyQ%2FNp7HNllHpH7hlRaoTPr3UpwCxkXRCbfMtBbZmdPaEMca3W0zuzTB%2F6Gzn37s8S3wahVA2AjZZcrGUzUPPni52ZpEOCwFeRvH4YlQjuOes%2BwfYxIwdVhGimSaoyzXuxuya5NanbVhWgYpTFF8raUXYPLT6FzuEXLgLbvoqgH7JrsLMGQ1IELZ%2FMDCeaX8thpg%2FigS%2FID6mEMg7JXUrlpHE7qiSLKrbXtvjL%2FQZ02i9PcE8f5uNRjTNEjgd1u7%2BaqG2wMjo1ZqNdwXcGyivQ4JjiNqFlXN7HHhxFbDjlvdJhX1RzpicD4%2FzbWThN1GrKkkDwX%2F41z8%2BUchOWnIkIByBM0RXUIGDEVZlsF6bqZvWYtw92gsNzk1p9CiM6yrAxA9OETTcIg8Yfuge9AzkzfNmPlxKEU4R4erLPNUF22yd4HIb6yMtIMCfXxCtBHMmaIiFKJ6LUWC59q64n8o3xNN3iQpTuO6Kx4zX%2BqRTShb8bqmRL2OCBnlLqbB0nnR3IQrmtOuU1wX1PCm8e8S8gsAMWCSVkpS5KGl1zP8mA0ZTYlbpWVvTftOPrfJMP66g9IGOqUBpaj36CQoyY9tPMrNPYedjjKOKyIdqJTO6SzqYIncNI0V5T7tjDvNkSs5DVAHe7b4RuQ9ZZAtYqARLnLq5rbJPf5BxYxGo8Ccsg1ZejOSLnMhUfG0PTNdrNhWJVISxWlaCn97TLtwuge01fXO7Lc7LXMLbnzduFQGwiDZdP6brjUYP6XNOvVN1wlD2Y9YrIL5CS4Ilvg2NbXy0EqySg5oQXLbMzKs&X-Amz-Signature=dd3e21136180894df711b4ccb10e0cd7a22bfdc001b091e01135808b2b1b9094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

