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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXOH6QAE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T033816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCcJtAxBVFQHeAd3OEZW3iKlWe2i8QhhkWZrR7UUNvCbAIgSClTxs303lmg7sZfheqIwzZQCHZj9K%2Fthb%2Bb5l%2BiQnoq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJ6wwUOlIu10Ttjh4SrcAy%2BenhXy3%2Fc27gfhVjwyoYcK1av4QdJcHgAEBaPw1BuCQU0kjMIMyx74KxPICrVJhKTWnpNJu4wZd7mdaD%2BZMEQxxL8Q1QzKLXU2YErD2j9QxCg9c2lPasQkGtitNQd71B%2FbJ7ituDjNSm7aai5vitBwJNEN5nS9KCb2CSD4Y5MmvYTxz2HYR73Uj4GBD%2FunrcKBTe4S7Jftwu4hqCmMFxRhzMqmlXJDkdsYgZEKywmUjhxLwo33NIwET%2F64JWaN4bpk8e67CxMwC1F%2F7cfYt%2BlZoc8P%2BBwPURNUW2FPQZG32Wq6zXSj1Gec8v2kA%2FJL48OKdjb54AH5om4opyPbB32o8YLLfnco0pcpJH2tWOz26duoVLXOg%2FJ7J9ePuTF5emGCTJVSnsX1FAV0G%2Fz2j8XVRYGHKvyD%2BpPh%2FhsQl3msilD07DifGnbtDSlc8MbiinQroSLwwtxLPZqqRJol9EOBkSvrWazVgWgOtECkQVevlr6zE6r9lliiRjnwCYjDecyO6iA5AoJ4O3%2F0tyu4iGXZF%2BkjZho69ngKDT6S6pVJjb9Y%2FzvxV5n9h7SKABiFiAlpts%2FvTsM7Npg9X1Y%2BgAxapg%2FhPs6kI5WXciYE%2BQJKSEd4sjmWWDW9msmTMKziidQGOqUBVdJzNNDwygw5OUwv4pQlqA1gGXusJOsbeY3btSzRGLdrnE%2BfYBW7FoTYiSCAxk1tNUd7gbkCoBa0cQeAS13W0qNVI0u9%2BjstdxXSvMZPelepLYPJQMtsraoTkevSGEWOPiaF0SWrYfaPmrfHCiAIC6cJ%2FWFqcnyX%2Bjmkm1hy8XQgax4RJKb4OJ8PhEnMDb8eZPwnLvxyHhTkhN%2F3bIQi%2BowIrWQd&X-Amz-Signature=5c47ce495057d3ac4485337db106b66dffd59ff8dde1a63f98776b720889103c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

