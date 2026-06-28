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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQBOX5A%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T095018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCljCF1ErBv2EmQTo3KmsF5U7ktingaqNMR0VJyfe1NrAIgQ%2BxHBXAupr4P35DMdVfNzMBUSh6%2FV4oomEG2hOHqsNoqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgoMyhVvTspojJEWyrcA34GIBXlM3utEIDaJhVe5T950CC5kBDrA8F%2FEhFF77xhUxs4Sda4oh73gnlOwZ0TM4Wy0qw5h1vZ%2BGnotqyyx%2B8fmnJf%2FtHQ1IDobJQcYzTpTag9T1YcA6zPA7GpND%2FTgYQzEnhzht%2Fq0IuKsQzIPuukFgTHf4jpfJtKUmR9OgrQkqybhpO97116t%2BJS0WS%2FLWwnAIQlMC8MYZxzCwmLkK2wySKpAT5XDjnOxY0WUcGPaeyonOSOClBk0QXu1DzmL6dglQQDOOg0zSMW2SUyYe6I6ILZixtC6jhvQnUuhWGaew0Dsksz52DUZs7gNsoRyrTlFcWIf5oSSCkM7XemyLHpD%2F2k9RhFt8WWnj3%2B6oqsRYvNZppoSHMyiJf%2F%2BrOtIPWr0PzFyDhHXh7I4V96qO4JBAny%2FCE0GeEs7%2BtXunnh5BhY2jXiBRoce6NPcvrgASmnSv2j65hWzq%2FFEfh6YzRsGakJC9b%2FU13tIvi78r6Pap8s8FHnyVmrf40XzMF3LBEVJgGnaF7j9vcCRIvPmXiUs8EOwyvlnaW4RqqYlDXv2npIg2BY5HLtB5KlUI%2BFV9R323%2F8qrDZGAWUVb6%2BBGKERKanykh2WX1OwZ0Y7FJhY00SWIzM1G1R6srrMLK8g9IGOqUBE549oOqkN7d0aSqZhh9WyE3RWKjBeJ06yvsrGkHkCiyBXugRudy4mwRB3Ox%2FzGRDiNmKmQxrRuoxZVR67c10W8ymVtAklWVPOIS66XDMxQKl3GI%2FiNU6AJRRld3%2B3e%2BBTdKmQ0hXcrHl4KydhUPbjxgNX32hUz3dwFwpmbsHIv5slEccK73zDUGJQEhGl1TFvlKJkcjwK14lkHJvy0lfyT4wZFCF&X-Amz-Signature=6d44c9a55fb15b624f6f5731034ae98f29748876c9838b1bd907e5e0f7602952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

