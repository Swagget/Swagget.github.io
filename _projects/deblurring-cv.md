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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7Y62PQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T184438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRcKbWI0T%2FQNSZEaK8P2Sn4LyhKnlJNbjunIxBmjqn0AIhAO6mM8ZeC0LeHHu9Y%2BaGnhs8g5hCrgapQUhkadPcgLaXKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2IoJwX4DhNULDYG0q3AMbMp3%2BY0j1AprXaBO9XOBL%2BhVzvOOlSxw%2Fb0nSWoaLwvqtbtnxdi2lmecB77nOLu7A5NEL5dp9MxJ4kKCPbqusJhKfV9iMYO3AMAGk8Wprpivp8upPImR%2F6l2HlVTqhpkIEcqxpxFKktmIWyWVUHzdaC9IrkCLl4QYwvMHycmcf4Z6Gqs3cMpuZDCLQ%2F%2B8pwmW%2Bx520QmHyQpqBNaVcM9xkf%2FWw1PoTByEJwI8uWeheV44JOZYYO9YkiNaH81VLRnUeRW18upUjqDdO0vxYDwweYwgXPLzq0qKADWPUTgJ2wl6IB9nP2qjXsa%2F%2FBY2wEBuHMFijQeZMHhPLaX9EaCQZK%2BjmqEA90SjTABewfBKMczoYdcurISMN8E6T1d2EokIC6P%2B%2B4od%2B%2Fxo3gNawOk2K5WBgx95gQpbL2xqisALQqFEKRrTXfnnLsdtCcOVXiPHf90XoSZ4GMJY6t9cvp%2FiM6wV1th7N38an4xvV1A%2BgdafQlvkKA9K1RdPUgoOg4qrnIYIELrf1XEmOARfREf2yvbI1UBEYoukoHqYbizuHccj4lSx77G2XRlvdxOB6B553RnywPDLv73orXFx8haUd3vYTVGiBNtmudQ97b5BNdRIGbuqSNDQsf%2FwuTDmiPTSBjqkAaCICEKMlDbslK3eoXUTY0sk1luedUIIFn7IAYrg08VYfOahl5FtYBEiwXhx9W5NhFmCuVmRsp0WTTL0vsRtjO%2Ffb%2FsdEbkp3mTtACbrr0WxXTIiuO3T%2FEZlAa4iSdjFPbDJ5vDjZF0pDfDh%2B%2B5oAOKSfil0g1pf1M1qSf4of%2BqwJKDN96eZmspjPxJGYRRKVu3bvFZmUlT4hmxGNu9WFSN6PRKu&X-Amz-Signature=1dae786694807416175df810863585b93327bba117cbe2334accf276c9406522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

