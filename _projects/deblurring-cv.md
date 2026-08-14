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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXDYBAH%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T174218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJFMEMCIDTWpr2CHjshyliKWZGMMS%2FgeJAQDMF%2FAidDdHDN%2BcReAh9hujnr%2FEcmx9z8bMgzn9LAPw4fHVIY4e0k0ahGU8AYKv8DCAEQABoMNjM3NDIzMTgzODA1IgxHy0rw15QUF9lsna8q3AMAy6%2F7uYH2oZd4MM4nNXUO52uJarpMpLYrQOH9Yc6WlXY2vOTMFuTbt4SivYwRcvekzrQhH7um4YLtUFYyiYtnE2ru2fg2RcLdHy9pIdHilbCX9IidKaxvLZ4q3N%2BtwI0naS8xTYsD%2FX8MtVGM6HeRHI%2Bun8%2F%2Ft%2Ba57I1TVdYhhjd34ch6tATQiuQaa0V9W6tCqksJ87zo3git1YRyyldkuZPCnoVoq3PgNePKPX14b0vzQZdY%2FZyrFcm1Z7wGYPFhmrEqvczv%2Fx6Tf9FggpTSaZ%2F778sjQ6wYoPwp%2FYkTFCvKEEIWbe4og4iKIOdhG0ccCCf%2BoiTasGRI8T09xnwU1Ikjw3FrVIxwcyl%2FTfshF1L02XAMjbgqcWB4nA2JXXh4ISCajHt2P%2FxAOySb0urDKPJDr0tUqBySol%2B6m2tQK0OnWtbgKYPRdxIu9Dh%2F7e8xmDXVabeUpEydpaCfHw45WDzHatmB%2Bd7bnym8pf9FuLIlkQNiju736WgSpm7qb35lcO0oeou2tHGKthMZHUIJFACnqsbYXcTeGb%2BRk9VAahKq%2Bg0wLe1ZrDXfKcmIXBFJum5sXdsHVfFq2932dQ%2ByzXMhQuxvpY6Q6I1Ann9KERA3cwfHg2248EKKajCj%2BPzTBjqnARqwtOBt3ztXKkAs%2BpVLZeGe81LCoYUeRZNBDWXtHg5gLbXalGu1cvEB8zDLkHsTa1lF6jTBXWF48yf7LR1QLEl%2FAsz9vcDKHTgrH9U3BfD0Hsig1AXQnqC9vpGQ5QkFRusO5iVklSWGIccCp7q9tDkn%2BBP7vncQHXeRR%2Fo6bo0HnrZ3YuzmUSfmwNmJcdzTEwuCS3ljFOXvEchbpqXH9mZ9ndw7gs4Z&X-Amz-Signature=3ff8d05435e8a568125f8cf06a376ea0948895397af5d532cd5b4930f43f4f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

