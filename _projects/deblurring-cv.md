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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UTXQAHA%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T161224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFKN4F%2Fze5c2KQUyVyPvNBK1QE29L0WxkYwqvnompZZAiAUUCmcQDq48wOK3SER1u1rX6CREv6xqMrebHmJ6JFtcyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlzeOwinmItM9I8ZwKtwDK8mY7LGmDLeOHsKnXRRHmuRDOpU6jkvEdmrEFJTlSyuqKUg%2Flvqp%2B4WJ4yGq%2FV5QDsazqzaJJCgZrNSE0irbyE0Yv02%2FVEWk198uk3hl4ybJveiuRVXnIRN%2BrYFugr2P1LXW4qi9CzMDfLk1uMppvQnAwjIt8%2F%2BDFbkTMeR2o13Xty1D%2FblY%2F9gCF4T8onBJWBnUuEaO8fgd6mw0WqWatd7i0DA8gxlT6RmUo8%2FIUI%2FxwxD%2Fhiec40QOE9ZdX9KnddDyFeRvomsYaNeJVewDWPIO%2BGbU33DIvKPS2JhthOnHjPjBsXDEqVxe%2BSzr99f7gAyhnyWNyo9D9SPO72PQaKzqd9YGPHJxriUBXVhw4hT%2FMpGMaVSEgcHZfY%2BZL7T4TicMEXP0WEJbKrO0UWODLR00IUPxvRvZWRkM3NhmIIAVAL8V3JlvdUjUVGUwRI43elZCG816uP0AqWCrSqWqJ5Q%2Fh%2FLlGP58ZZnoXlzagclnH%2B%2FKZeoacgx2%2FJ5ngBJI3QDhTXKuLlWdRutQAJcvjWNet%2BrS%2Be4iLqldCo12z3WCgKFroyBWmxJ4v3SGAJ9tGJ5a0ugI4vU%2F0qWLN7FFbZwHhynopCk%2BW3F9Dm%2FThR4J5iKnHbkbctfmfoQwva3%2B0gY6pgGn3K9ROdI60XpgM9jBnxEErMH4dGVaawCBDVxZ6R4TlqIp4seu5%2B2qkXYYhhplpvQjjGX%2FgTlJ3vzISKwnioFeK%2Bj6by9pi%2BYvtw41AzyJx1QS9sOQOucqImGVj0d9%2Fn9UXeIbGzwxKgpwGNHCegdhyJYeorgmE2cR3UGdpLtCcOQ%2BuQWZ0HzEzPvpGUAAApCzQmZxHq3o0z0%2BKceHtGO895lY3nle&X-Amz-Signature=8738709370e0582659466f5b11147eff2eae6ec06813eaac73bdfbb948ef3ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

