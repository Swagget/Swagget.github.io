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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBDBSPO%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T192240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKpRCPpTvUbizDu7eza82eM7c39C%2B6qioz6hpIMM1YlAIhANWQKrF467Qo6vLHdfpfhvrb%2FQwzhdDfwm6uxus5sd6LKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW%2FwAAWZkF3pc3U8Aq3AOk8foyej54NnYBd2E4bWD6Hh3TFRe5KRyce1CunBrC4VsODxj8WjuONlvqAswVvD9hipSOxtxEAuuj2jdO2RcAbAVg82b5SS2vzKG1j2dZV5dRDYnPjZcwvnBoAHG7vKAQxbhJwgYxYoeGMosGynRtzrqlZIu9CgFupZpSux8gi1AEHbCFEFM4oXhGBRwY7mgeRx7rWthU%2FeH6bJSSBchAiIPaP2uF5nE9WtRDhlzyJDpniVnVqHJvJ6GcvqB%2FMXJXA1VBH0zcVjmcWf%2BpU8COUVyRLFj6Bl7HgKXqZ50oy1zZuQLsVLtjI8f1yPP70VOHSPyuenTSKUqZn9qxLHQJd%2FXoy6klGBAy2s%2F7eQXDixwNH6uDpVWB7GmrwON9CZQBDb1TvhRxNhDN9undGy1a%2FM62Zewj%2Fdxe0JhiKvA2rcwRrr7p6KMYUpOLlxRGfY6eGm1L4lB44HXT7Rml6KIg4iF7%2BfxKA7LRgdOEMNQS4Jy%2BjWxVpuKECEnNkKEqol0FL1434SLR7x2Kdfk1xzi%2Bv7OC4FnJ%2Bz%2Fti5digBZiVnxrV15xA7zUsux4HhUlBEnXx5gt%2FB15KlT%2BM87i7nBwJIxKaR7lQ8UUvYVZti6vlytpZbysxIPuzcQ5njCAmePTBjqkAYPejoG1bZPRAC13IsZN4XWlWWgWIdVoX50C2Jf3O5hCa6qAp0goatBNwD%2FkVi1mLmrzqEjTGwnoS0nAtELj4a92pY16p3kljJJ31sA8ysN4TJHToRBxEgk5cr7rWqn5wk78Ar6MppyjWg8R1vBCTY5E9qLPdJCdYGFyExVkfqwwymZrfIMm6%2B28%2FWLYucwJzt9voZx3qyQ7jNR2A2910ZgMjk4J&X-Amz-Signature=1d4bb232fc26616f9ba635e4babe7b464b060b7f4ca002fc128f63b0662b5548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

