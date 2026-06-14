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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MK6OPJV%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T190424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyVdAZJl%2B9XDUAO%2B7RATwqoGmgCIFs%2BAJIh5Q5CEralAiEAt%2BHEmDpIVE50lIRP4gjHZUVaKAJ%2BlGs16DyfZpxsY%2Bkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDD1dOoMP9%2F9umaIG1CrcAxVd44xpdwY%2F6HuhIvgxKKpfDfDqTCJLle6dHPKBc7l442v2wB7VNpf7ivaVwfY2Z9C1cI22dZ5v4Z%2BUUx37%2BpP279arKO8REZ8bqkmALeCAraHTxSVkZXoPXJGjg4zPaBMLFOmPjtSn1v1KNO8WLflJlko22LQpM7McHGeGD%2FRRYpI3rwPFAKw1bQFj63qF5ghbcBqzPllyptVVHJ10vwENjzVIpb3qzvLetqwN8iCntus6rOI3qZuGSHbc8L8zHbDaCNAX6myDj%2FR5k%2FQNiiXQnJuVIftEUQjerICJgfT15xuMQKQVPIpqFocvP7RA8ylfYpfBj%2BvbkN4f2s9P8u9C0W%2F2YhTYzzunBQ3RS31otiO9v1ddEQTB%2BWSKDEtRR7JonC3M4n5nhdXeZ4shzPjJiPxLYFfQzf1OsSuzaH%2B1H88anRHF0vOXKUxqn0fP2y71XAY8wzRUEdsVYHKNUjDi8oZiy482BNVlckvmu4HKkc3omm6GQ5gy99IgD2aWid7d16yGHuKft1yV74XagEdrWpJjEknFmAZFaR3Li5mm0d4TzU0abRa%2BZiY%2BggmfMhHFfvK%2BlT32xTY%2B6%2FvijHJpcPgyK3lAyyc4J48NwVjASxYzgJIEMI4U6IjUMIrhu9EGOqUBfmUNLKco1aSSDWHpzTmoIlIFSfki1Jcp0d59z3cfdUn%2FSYyYt55pB1XASOLYjEobXNPc5pDIJ8HgPnjc5uYKdrahpEbnAAMg0%2Bn34RdtwNy7KbUsL6kBk9GZ3V774IQTQg155Me7keHOCGfSBfBNdBQyJKZTIcjbWTC9DnDNtzsBV8S6G9C4uHVv8NB0NLiUhpEOV3OTD0B4TMTnhhTJG7u6u3p6&X-Amz-Signature=2a8ab09a4860a042a7a30abac9c3c8cab120a5a0ee981f09af85ef7aa999bede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

