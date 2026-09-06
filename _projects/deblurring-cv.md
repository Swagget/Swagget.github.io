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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4BD74A%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T131351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIF27g4XxHVI%2B7YwawjZnJNoJtaZqzU%2FNuf4i%2F80s1rrNAiBDpBY9Y%2Fp2qjximAguTSvq13v6AscKgdIsGTYQBed9CCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMXmt8vnHVWRPtsChMKtwD9rVGQQw9LDEIezijfk3od%2FSzY8vSsWmkEoaNid6IeCpdPb%2B4l1yxQ4Nu51GrkQJ5Emn9L%2FE9rPn%2FOkLqSoFZUWVagZWx%2FNvWVzWfMfW1X6WVxb40vPBEe3CH1uW85YfCxzg1TuTKA95Q4tBVb7IMYK0CFiGXaMzJl8gqNfHYeYPjzayNgn27BYAXNzXl8JQ%2BGp6ig1%2FmZ%2FFKzNu8I9W5YYk2fg%2BgTLt2EkPAWS65uUy4hp2Llm1eHvJELJMBFKK27O78XPZ26VhmJT3Aohiteettc3f0bFZqZd2pb9FWYo1IeJc4Lv52kbzt%2FkmPS2NZsUbIGKpuQRxEGzhIjk4zFwAMCSBje3OU1SaK7nIhp%2BZu%2F5HaRYTDj%2B%2B7t3qqpCt40MoWXNIeSMiSvkHbSrxwTfS417MAF6nFisnlm4UN1XQ7fi9vm%2FbH5qmGsKQouDjtrauRssfIPQejXcRAtBx%2FwTaKTc9hSEi1bRwWiakyTKvkmARn1lC2vmK5kRWs%2BC0zwgDH86OT84kFYgLHUxTP7tLy8gRbR8rzh806dECgpfPH6trHzG4UwjXeAld7PhHE4EL2nTnNHhKiF9Joj5hr0hBuIjvJeBnuluGfnOlSPx0qh0ID9FgmQDPtSIUws6r11AY6pgF%2BCgXdzwFhj%2FgxNIKmHKP4RmWTVDEZh6M3pOpR%2B93vu%2Fihyk3Fc8XnwdW7JcYBBrtHPP1Hg6SxL1DM0ihu9N9ilu86%2B1MNY7sAQ2%2B9stXB2LdYLVFskBfFhFGWzhmWvXoRZDOz0wV4uMqa6jOSNbUF%2BU8dwvwoz8rvhjdMwB9yAvve53IiMFo7lSVr6SifPpSQ2JbEUQL6umG0ZwSMtFRngv0BQLph&X-Amz-Signature=a99d8efb428c0354adfe85d78e7009a073e17d2598d57a6f70ab1751e0997a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

