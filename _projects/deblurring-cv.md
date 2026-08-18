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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VF5SIC%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pkNYEv4kFk8OazR55277%2BocdFEp1d1RDUW6ZoTpWDgIgSJ7z%2BsvX5TgbuUdfUrasNEVLsQ3SvbbivbH0HdSutu8q%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJ8ANCFGYlxM4Ju5KSrcA05gTpPL2TUfTYjEtDzYPI%2FtCye0J66trYvHFdd5KOLMdW3hanuLvnsraZs3Z8WQfLg23CwjKvicCirBKAVZFBd8etj%2FUxLz2BtQGtVay6T5F9ZvIPGc4OGX0UfPOIENPQVNGVIwNrTP57hqtz%2FnHBSfzr%2BXxd%2BsRp1rn6sWXJktC9oR4w9kvECM7bhb89%2Fdzvl4xNQwVWByJs9W4qKezXN%2B2Nyr9EDd1ZD%2FzIHYvCGiLuge0aCQJVDLsEcAhIze9yMisa%2FJkm34bPPc1yOD9yRi9uyZOgvxwKiuUKJB86eIGJrKqeVpUokYVQwyUBIA3iZuJeoBzwQnbEbs8eW0UxvPBvMreJtHcegT5v9O5CKY06iL6JsIohmrifYlSctOlN%2FZhEVYX52nmGSAYhPiqMengyw8q3xxoXY%2Fii8F9r0fmsHSzQpHYWDAgaOz79KsSA1TO6Ga2KgEp%2BrdJfyAj2Vgs2WCrag7lbUJ98kfFvXhfKBEAKD%2BjudkWUkbw2LsGl5cw%2Fh9zn28M5SzbYbcQeH%2FcUU6HfXYuvKBHrsiLntdREGUBg5oE8kVN37MdSYhevdZm4xmTmt6eJvjJDU8wmnJjOqtLcfun1Fbiu%2FhZCUSi%2BLbxrGwE%2FtLw81wMLL7kNQGOqUB9PIlFQGbdVevy4y16LGqmV%2FfQcn7SC1coD%2BoaAmB9drGbVjApFif0cJPLJVzUAqihw3DIDcwgohX02PW0k5UkxL9qRTdqaQzNso9eu6A2z6hZpPXnLBK3bTMEnUCvgs9DzE3eSCL0jPgIrfUx7YotEYRCwfuoEY63Trd86z%2B2OD0x1Fk3xGvl074Y%2FuCOUJDMLVQQlUau8CvBYe%2BcM5UB%2FvF6TRZ&X-Amz-Signature=9da9bdbf6052e5be8e549e9fc461ab1e103e38914b8aeb1258bc77b5cd924179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

