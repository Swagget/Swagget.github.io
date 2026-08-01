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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPNYVYJ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T224151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIGAxvEmILES9LCgzaiSwoqhJYSVEZPl2NpfqTclNNW8wAiB8AMWCE1fiMXxbFbHW4EmM%2FlUKi30OgweA1wWCsBCL2yqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkQ2pLSyOmxwhU2EyKtwDb5KfJ51h8w%2B5WTONSzzqWtOpInlsf4gs1JR1eieuqL0xOtABdndIg9drbXfbzL0AeSnPNm2l6DONgtKkDiKBgaEXkk3eZEV76UF2ytOsStsQHs6XsRkELv%2FJ0pNn8fnDAamvRIypk79uZDsdlrpLi%2Fe0STJoY09Cqket3LVaptJr4ymXilwWgCVuX%2FdoBIWmlf0HJbw9PeMKJDQjmfRKl6DcWhGJjUKxqbwxe6ZEKBpyNKks8BW9K1DwEpQfEGnBfOqpQYCXps6Zc6zzTlOQr68sskyhQdRQ1cuRpGAOqNqg%2BtVz57BTsqlVBhRaEvUkUuf562WMvqj9fd4ACET%2BegPboHSRhGXSS6YIWBTLzBOeudBsX%2BDW5sMUZr3%2FqfgQkwNM4yOKFTBB25uqgNyQkJZY%2FPmWqJZj%2BsdEVG6fSejDgqEjs0bGteOPXyUTUvI1sxcPfzuWyGcnaWnECSzdinjlS2%2BRJCcJHQCuKJNCNZLPARocTnLGpxkqo1HdI6Y3h30B2nCVBE%2FGXRaFrEHoIGSAcYbfJJFCp6rZHEbUC9j3nQnK7AsET%2FmSFwaJpSYJw1hd47h1Rjn0cbuRxZXD%2FyGVNcd1kdezOvlKRwJr0cP57wNJGBeCT6IzXWcwjNC50wY6pgH3jQveeKvPKdR3MCWSQU2NRBVYGBb6F7l9uVVOuyJ5qtkDxWbeJ83Cg0jcJI9zoz11dw5UOLVcBj6ehluFl9XIWlHQ7a3hSWg%2FMeSBbO7J6%2B%2FH5A98ma8Cx%2Bf57ryThAfVRnuPn68q1%2BFJJGzfu%2BUc6luDtnTqJQUDZf4u2jdbaZv1J09uf1xVA6fFK7%2FFdzC3jDV3IsIRZ7G69oQJ2LLHkgvGPiu3&X-Amz-Signature=7aeb0197aed26d11a0fff97ea4a1b592cd4f85e9ec017e032d8483716252d69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

