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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMJQUXE%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T230608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMdEhepQTlK6pZx8XpuAUOjMw26FPlZZ0RYdeNf7tVfQIgbLeVQKgxptjkEE%2FqHtMMVnw5UGK3KCLvbf%2BMWTGoV%2FYq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDFMLzQhvBAJNsw3yySrcA2l%2FzRKKkg0ICfm72Lx5rRRIbU8IX362VBsSqBKpxk0NaAAs9KsHcLtaY0G9iRA8lKctV5Wb6YO0C717u6MnLCDkIaiVWJFgekcozH1XXcSZwDj0j%2BqidAgfPaWo%2Femvf492E%2FgtaVKzHpmvd%2FFbeS8C8S0Zrv2AwA77p5K22EKx%2F1yKSSh5%2FBixMsBW1Kp7v6wbOMEgBjW2hG0k%2BuSS%2Bhm2xx%2BmYAbWxCF89jFTVt4XoCJmswxbT50CtSvlt988j8kdbD0Wd9%2F0NW%2B3dRYpH7vxUn%2BwPISvl%2FmxndSVGvf7qjGoc3LR9bgm7nCguR0%2FYTs5cRFv2bnDSQSCQKl%2FqBZcPzVkLDU48ZFrhgzyAHo6%2FexL8m8AavhPa6KGUKYQ5dCOfCXweln89cR2ECbqLQ6PXo2tIT0yqIQ%2B5CqZjGhtwjLTzPR1I1kT0NiPsDXGHn0twVTUMFXXIPxWZtKeFU4UqxlmNxjXqjkKzvtwnBV%2FHh0E9S2aVpwhtschHWWIIE9nTmHl4acQeJ0MvRgen6%2FJoDOFNAL6ZRh1NkCKi5tPt4yuKYpSmoDZ1h%2B3xUmETb5tHOsltexX41wHuXLYGZjLyItk2YslHS%2FLLP2Niw5y4vISSUv8c0SnVUQiMIjP%2B9EGOqUBxh4VVD%2B%2F0Zdfb3nRdV6D3rP36JKPf%2FR9c1JEfP4lNv0dQwxAFafnB5xoMTROve0rLHAb9aF6ESU8UN%2F%2BMp0Z%2BeNlp79Pd1LVtAgYs3PtR%2B3tBEAP%2FLjc8EF%2BRB5QBOYwfuIqiWl4s9EtbYnwpj3ur91UlJVFt6lpSIFnHV3DgUeiXUN17QQaZ7aaWb1CDQr1z1fjcwFBn%2Bvv%2FDnot6QoZ5Y6FCfa&X-Amz-Signature=b67116f648b4fd59dc88ba72805a2670c57621f8e1610c71b2a637dbe64f9259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

