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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXJNB5N%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC5bUKXkvl%2FaiVtDF0OTV%2BIk0rh1QNWui7CCKtgkUmAlAiEAoQSBn6CaFU9TSrG6JSkzqDnscKWvFnJ56%2BZ5uQw9I0cq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDDBWH3ONyQ0WcNasGSrcAzGuUDkfQt7pSir1lvTYzcOOlazqahgBWQEn8MOh9mlv1h0TnW%2BenXbQhOTNnNiRtmQHnbwRkX8E%2F6tvPjDbZjUh8uVpQkliZYv2DuvXVH5IRIdPrQ%2FoINM5Luukr%2FKEEmhsCGzMT7Lc08Bx%2BjThU0jSdNawehi6U213KOLqvhIqkh3z5tB7HV87MU1izzKDojL79mXZahmGHIfC7tlU%2BPJPlkkqIDpgJfKya9paDk%2Fs8M6XSTbYbqZsLGy7OHdrkCOUePfJEiEd%2B7sn60lmu2PdUbm4tiuZ4zGsXE939x6cjEr8b1oeM%2BfoSrkQdi%2FCYOAt81RvrwPSoWAuu1q9tzAq3CxHC6IV6dYnCxSGtth0JeSXI7OsdBASFg4kQL3lBymDNdpODf6tAmSh9GLLwoshJDze%2BY7FwzAbjkSA1tifGmTbWuWIZU1aBy%2FREw2ykwpZj%2BuJqedM55E%2BcqbRIancE0BGjUzTvNxOz3Q3a4MPhXS8CIG13uO%2BjdAE9j20v1uNl%2BTG3UHxbFMGX8UESva8A2wcnW7sIE7xqQk0tR6AHNvfS%2B%2FeCzrOIFlYnz9T0vqWiVNljgkLd%2B%2FDppEJDL5fwhHhdpk1vPyTnGtyqbD1W4Qv9AkbeyFMKs0nMLe5iNQGOqUB4kbkcDbGQReKzqdDJuyQydnBqhuJALBLOsHt58%2F8ja%2FmMYW7xFuErm9CN0lJKCU%2F7PB3kEclaOU9T2w%2FTqroFZBvEc7EVacqBG7m6tPdoouW2AatBq%2FSFjYjkwnHwNKtpuvzMQsglAMM3%2Fl%2FFO42wS8n4yfqSpOzBhuszXTVfeCCvkw8273a6m8y2hJHBiBOT%2F4bO4MtOyJ7X9FBTFPaGmoxZgNX&X-Amz-Signature=251bfd2f94c86c521f35e3f140aeb5b01fe18018e4538b2954a630261f30d740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

