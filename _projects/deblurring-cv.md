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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X6YMBCA%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T215222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIHABEY8ZXqEsrsPkRJjQKDxdh0O5F5c4CD2aw5rsaCGlAiBRvPnsUKLaozPdySpbLwhb%2BWa%2FAbq2dDhKw8VmBsdDzyr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMOLxOOc0dI2Vuz0OKKtwDcndfgw1hzW6FbxVZRhc1pa8Lu4uxPFJGxfleBMxJjcrtUOYQKVQz6MUxR%2FNmiIf7yY9dL6sRAKuROnO1jBqaUyjXr2heuDEhd190pYHuwojzDSOtQ5nSeEdMq7UvptJZLXfrh6AtFgG5D%2BeHfqjLIS3LGcjbCKk5wyM%2BJCkqpgNYf8yy546WOjRjgpDYLKVDjtQbZcl5FGWeJpxdgRHghH%2F5QEir2%2BMStsAvUvDexiY0I3%2FNdckcpeLyeObtUl5hPw0twwY3K41nEuAe%2FMjpBS8CC0IqWdJeFKoccPM0XklMkfX6YANaareoaPcq6Q73tGN9Tk3dP%2BliX88lF7ahx0qgCHYLwzLsJYx0jLb8alzWyLOjgnsLrWzOwwozm8lLXLINgBqKCCpu2JBTpkiBG5treGrg%2F%2FHC5jQmm%2FxMYNMneWxMrHqGrvNVjZuGwEe%2BliPd7nnv7D%2Bz9UdPsZott7r0WkyLJl5QX9LkDw0lzX6u%2BS%2B%2FyCyzvkWEieFaZk7B8RbXC0csJ0DoaHRQTTtD7Qg99BBVwW5UVjoX3wFsSBh84cOzyFvsg62LU8p7RKdxUxl46OZCD%2BHaMfVquMmuPRUIVLo9OLXN1Jh5truTqdGrR%2F%2B2VxQjhoYGCJIwx7SP0wY6pgE%2FSpGxZKvWCpRA56tWVZKC9J0Cqr1CdPUuK9MiaJlmfKCrNiZ7PVOk8C%2FdCX8gEa9uHBDJoYYOBQkX51eBJUMiuXZo7447hbZtK5tM66uZrz%2BPtGrNkjO6gfm8%2BDao7agRZUE9DZ5VlKez2fBmGSBX%2BQ8LllvfnFe0sUVhnfYdyN9d6op7iKDISEfrj%2BUd9TsS7QIg6gnvnI%2FYvC27RJCaCLxDzvs%2B&X-Amz-Signature=763cd4c4120f495fa5d0b65956c35bb2a80581776f4fa09dec8562d317cbf207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

