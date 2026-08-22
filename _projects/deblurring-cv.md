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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFU7O5R7%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvWWs6ANQAA6IYwJCtJ5xbpQp8wCvRVTGMcC5z1RXBmgIhAOGtkMmwOMT2Kw9JGca%2F1It%2BXgcQkbHYvG70c21Q3i5%2BKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfoD84Xktk%2FK1O6eoq3AMG5SC5Bwg1t9%2F52ogML9E5juDqmov5yWo4J3pJ4iZgPK5rSz9vvPLXlbZN%2B8RAf%2FGxsk76GQPK7K%2FGf0qs48vtnv%2BhB%2BrQzebaL7Uk5160Mdaw00cp7QfAZgfOtTta%2FchX5fGWmQVLMi567i71vPPfUR3P4fefuYIaTor18EZqkVmh7YZMKsf2DJK%2FXQDehD6HRzdQ1qej7sW0oqzn8rtDXndlzE%2BFKpMLBEk38CfrBOucJ%2BvPVs%2BScjqCujOI9wqgyoNi5H1S9opDhd7iiRNadfLef6J1jq0%2F6wAFhnTwDGEtg7zU2MdPyW8lv1Fb%2FqF3nzoeDvtKI1Xrzpb4u7BcSi7IePGDtx99BP%2BeZuyDNTlQmw9BK3r8aPHeXEbU4X9kQTdznAVUjlETSmKFJPwEs1DfrU%2BMtaOGN%2FBisqPf6tDjvYN8Zmd%2B%2FkawIvZqZfprGrFmNW%2B5Hj2ebTSAhBIujCVnj2YlqAFu8P1G2Hb%2FvS3V9i%2BIRJgASmJlmZ0Wkr4MhTWqmd00S3LF9zVh2lLx5lwUsoxht0VhDdYrKY8ZB4YIvYDSlTzwWlca6J78akWc%2FEz8t8WYLaKlVWIoskIFeq2dXI4q824xRYTERWegRoR8LXdQyKxIHljUxjDWoqjUBjqkAWanBHjbU0mKAMrK01rAyEDBJzlGNtygGyVoUdh3j%2Bd3aa57lBZWDICxYJpddY3%2FUGj%2FsolMc5daBUAar7wInXws4Tk6CYpYJ6yyvMaLMm8gJhDMy06wJrSd99vzLpn7kpbG5ii4T8bGuKgrhbVDx70c75WulvVoZ82Vpt9WibCny2i7BQAmj1lFsEpmqezNT88%2BgHsq5Ni%2FRXeyCKQtJSOuEejB&X-Amz-Signature=04204d1302214efbb6947765f9c4b4a95ef5efa4ea8c36debdf38f10343876ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

