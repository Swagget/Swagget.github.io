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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFNRI3DX%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T192138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMd2sZzjsnmtny7kRkN4xWc9%2Fwi0oLo64ZNLHIXFOB4gIgU702KxKssENDQCZ%2Bd%2FZ9jTlK79h0Eq9KSpCOjXVvFNwqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg3668pAJ44C%2B7xJircA6OddhnkxaIrDDd2LKQ3ZEVytTOb2gX0B0KrE9uRBMFQEffOrop7CphJAX8s3iqGo64fLek5gv5pPrp%2FopsPJhCKr6akSH6xJvjDQw5opxBq3mR4F4ufpfLugrw%2BOEGiT3QzT5zRL%2F8ayhujick3ImBNe530Iy3P6q7xvBhqxs3p2Ipk%2FJYs4grkJND96kim19RxtYSHdYWh7tiYt1%2BwudgV7xrjYA6cOLbw9%2FSSpbOuzcr8OA%2BPWln0rsHTX6YZAdkhd%2BBnhWPVuqqb4ooSjKBTvWK5Kzf0RMGhz5B61pTDLOvRUtkYUvkToYAblNdPmCBtEpQeXNPMaQZNLyC5ypu5w2vv2Rq4JRIDSRNvxT6Xh%2FO7k5GoZkvDWxjjJYDoLl5LQtIXgAGmSsq88eoKkEO2WZlUa89jwiTkzHMEz7GcdHerIQTxUbCFCusWonMTGX8Szqri80UjBHoGBl98qfTntcdk2ZqE1imWoHe8aI%2Bz3EN0nQrlOIBbuMRAvQUtBZqHg2juSQkgYA9fDq1GA8hNNacFH%2B4DhpFT%2FJhepx8OpZyGvC6wjGSeTcZSi4i5aXxTeeKVGC75DgVx3b3898UC%2FTOCtW%2F8LExqG%2BxOwzx%2FmZB6iAheyjck2%2BloMMSp1tEGOqUBuvB8qPsnK%2FSLbqasKF6SrUCQ8H3mLhJOgu8ofEw5MBTzP%2FUZMZwAj2cvF7iduyXIZUHJhOJa5szmyL%2BYFl%2BeuLVLgoJWuSk94B8m%2F6s287AKVOLjO1CFyoiMHBXFkjtYv9amP%2BV4txai414fHZNloyQD3FUaNy7HALifL38nCb8n%2FPWUav%2Blkx3kNwBsq2NYrD7YNCZSWInhrBA3tPZIDOQXZv%2Fh&X-Amz-Signature=309beda63a0c1fa79abf34d2fdd89691ff5372611cae83b9bee00eb1c8401f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

