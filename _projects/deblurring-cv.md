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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TA2TJJL%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T140553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCCPrviyKGH7UmvJF0lcjKO%2Bghls0GpzDDPdxErTA%2FXVwIgSddefr8H1BaKObaPc1wVSGat6m49uz9SGh75QZEnmdIqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKGS2wXcimVVzEKxSrcAzry5by5TND8VtrLHXWiNy3%2F%2Bs3z%2FF3zZLP%2BRw2ltUHVD9j4ZowPs34EbGu6SD8aDTt0jTIVefTjtqdN8l65x7t5VbSHzdDKhvgsGQinH3QWMMq0xqCjGDgdMTct2XLOwuRfrHCHViOUI8pAU4iz52xuktTzIv8vqx7Pblb4XxFpWRtC%2FRzRhM17yjlyKtAqo5q0lUFvlCH7KEkAoBMROvZczELUoqkzs8eKqGtK9Xxgdj0aCVO6PF68hpnbg%2BUpQMH0S0NMOiz%2FEOWLyi9y7bF5xyUtORzBASrJiqKEbDJh4HPTXnjF%2FIA6IC4KIqyNriHPKlayAJ28sJSWwrkX4%2FptitMLC2DWIF10RMm8rOYcOuV5YAgfwKdzy30PB1tAzBtvwKDNghQZGu4ALXourT%2Fp%2FiaE%2FgX3XVeR0fNU59nQeYwpY3sfbqpKeTTi8VLJlbtOqSGK38COeS7NlDwuqO5a%2BiANvddx1Nsw67zPU4KpHwjrLm6GKPHUEW4Wb0%2BLiRwYo0ubz05APZTkL7PupwzJE6cw3bEzxc9HJmfZsSxiZ388bGg%2F0aLQXkisREem3jOYtoErYjDqNuIRS9JLRE8Z0acGsS77ftA0kOvbLG3AALZmDKWdiwWBEj%2BdMKnt%2B9MGOqUBWd458oWYIfD12yXEgGj38lYOJP%2BvoJam4YHwLUwvYxn8yvsdmaRKXjUV7tPs91qWtFyru3LymnFtVzlWc2GwsCnMaUjA5lPHE59YxIAJj7XaSXQduMD7T17b7XErglSOf0u33Z7gwaghi04PQC0mUMAqMcRMqjBedxPxlnoncO4IqHDuMvP3dVXNwH8xYI9cK8T4K9l6JjX06yuF5TBNYXxicb2H&X-Amz-Signature=2f2d9ad6dfce7e37a9805297edef56efa9942653810785b187d3e4a2187d472a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

