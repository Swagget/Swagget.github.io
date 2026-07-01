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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2VBGY4%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T235933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIG01IzuutgY7r98XSx1vF4KnKm68n1xOGxMzD%2FgaQApQAiAL4BPihu1V2x6UojY7%2Bic8GdTp2v7rT5rO16xuSoNsjCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0lHxm68bWgAAf%2FQwKtwDHgOA%2F%2BB5nwbvYmhd2qD6XSg6iaFvHX4%2B63OouBnYuMOEkOZtrFsZdDl%2FwYwbzHteqiuaIWNsF6X5XRks8lazkjzNF0RlaujleleAz%2BTHFkBOYAP8eNH4yhaUpJdQQllH1McFJjkaLn0Po%2FihE82K8a9K2yzARM4O7YsVfD4Xsju8BfVBmuKx4A%2BPbVhYnzV2Zuf5qygmtSP6qTDt8Tzj5k6KqbfIbQaVah6Yk7JkyAdhJX7hX%2B0YrLyfTOmoAFDVErGvbXwFhbEIwH29yAFYOhiFHWG9WEtsGW%2BltEYbpI6veAEfemBhDQHqJncUTTQGAQaGhwMSKMxlw303%2FrlVQR%2Bqz%2FkQwNPEdmnHOiN%2Bi%2BF3SlLKgmKPkCFvEUAMgiJqaUfno8v%2BlZODDTSihij9pCrr7CLXZBrokkBnkhexrNks11dV2ESzv%2BUXR7tWC0albJOYpl5ARtwiqWnlHspbrxrkxxilTDcQwrHahvVZupgNZBq%2FcTx14TD%2BEO9DjOWZQL5phVrYChEYB0RnON9LE5QDMyWagQUDo3lfVO8tAN2s4QH4RJ1wlpdplW7pNzKmdXJmUZrgEj5r7mlk4W4GVC5bZBlCDLSYEn%2BJx2F9jbVBebz7P0FSXkppB1YwoP6V0gY6pgFdbHwbAnfWcXBKo8tTlT27dHKhejm%2BighruYLx16fnrUlRNml3jRKuECR6txTemv%2FzLGenxk3UoZ3Q%2BsSImn4IVuY3XeNujRC2TO%2BA%2B19duO9udZrGd%2BkT7HmIDrsc9GSNJLMw7R8CU3wgRYwScDxexysvnfr5NdgM2fOhMiMgoc1Aw6lDMi%2B4spYpWYYfQmNY4h1anE6kZdhn4E48kdyaxTo7WxOJ&X-Amz-Signature=4ed34c12035100fe95f21e236acefb0a1e79001e960a6db0a10cc9626bdb8ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

