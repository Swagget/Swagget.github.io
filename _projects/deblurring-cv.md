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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQDOS37%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T225502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDks%2FaNf5Od5j1mIupekk7hlt4l0brWprZuH241b2PkCgIhAIAMIIBUOKjKJQ1pD4kcBb0mySgxGYaNoYDhFcaEH9E%2BKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyvvD3%2BhVfdegRkMEq3AMeVmxbLcH7XQekR9hrBrK4zYk9Q%2B0mjAkX8oyWHZ2DiooJ18zk6isie53EtMqoKLmzC3ZYUDWyWYuDViCbMVsWyihnqBRyI7xeX3hWvvt4%2FVIXA1mjBnao6fmVf5lK1iL%2FS%2FFyzUz08sgXlG90mPsno8qXcSAIlGNQDvj%2FfV9kWF9lKxTsOaiy8YejxFt2nRBihE4MwYcdmFEb57q0VuxEJjykN9L2uKn4Mk%2BrI7hknx3YilIYJyVoSf1l7rELz6Jx2M3SOb74OFhKyRW5tOk66mOI4Zc6RtHzHI1ONSvYK7noqscKvFVB9iYJWqSgzz1Wqq4vjgMrXjukryTVoO75GzUWuY3M2rfzzEz0ozl7NQjfepsXlrXYkdvwICG3BCzceMmhOxchljoIO8S6wcUOLr2fy21EB%2B3z6eMOD06Ivaw1HOft7cOZwpfLnNUFT9kS%2FNcSCejQhxmCa2MREArIBhX%2Bc9Kn4cafK5ps7Dg8%2BbQLGuXVhqFqJLaLJAwNdSiLYEmwYedlJUPhRWeph82LRxycExO4YohRYL5gUOEdTq8%2BdmjzxvIw2LsunPlD6CMiVYVW23d9G5HZxprbJyu06cqxTMWZavlgJIeojN7pu%2B9XcjK4LjMdTh887jDCiLvSBjqkAalf3kWISIwh4LnuScjW7gcZ6NKHpEzIYRFXbZIWnDy%2BLiryZitBnL0gYh1n84Ra8HoX8iYQXOHmhvqt9hrELeUFLp6s6AOXGm5gehMHATWZoFhqYRMgOhPamQqyRq25VlL7KG7sO7vebUmioiZzS6lb77ZnrKL6UssB%2FAWRwAJL3wDwYyk3%2BUQ5UlnaC45xsBYPnnFO18jU%2BJHjBxMBjyAREFKD&X-Amz-Signature=39168a1195d6a8b661d06b99da5ec37ff11df17c251b5145d67d4b51ab3a5862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

