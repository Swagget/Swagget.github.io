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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XV4PWU7%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T093440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDk%2BhjJrLcHKVRAkm%2BvDRNlnqwBc1mGXCFRkrJyjBnOkwIgd2bLWB03sfUlG95NwnhKXPJMYFb8OAYKKziqSw4LRVIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONsegkj5R9%2FhSNKlircA87Y0oWcPUU4AGVHFpqM%2FIg%2F5fw0D0inIVe1J9iO8r8E45V8NpscihFUPg7UkAstsk9p0uEBcSXnq5iHsg%2F%2FO%2BKHwZg5KWWsxCO%2FTE91IZM0DwBx67RSmqiLHwPGe%2FOlq9ofgzZqSvWI3Q3%2FsnRCTYtQY9KwbDZYJwnNxyUeB4Z%2FqcPgumdnuNVsavNllhde%2FioAZGp%2F0UgcgiVHH0GAD57%2FfsT1jgF0Syg62joo9O4Ra0zhpjduXvmvvp26%2F623QaRkReqi7L9iDvIkI1p1rQGEtLyrIPgtjzdJoKfItlCK32ba%2Fkx%2B951m3NaH%2BTjkmezWEk99yaa%2BMP3d5GfvadT5JWONop%2FH6xhLqIaNGAzG6I2O%2Fg%2Bo2rEhM487rDWkxvMpO6nhsYHl7YLB82CxeXHvmDKMsAkOIqouS255jpzWpnvGd7FLsyQPO7iCp%2FT0K5BX1M43I158AHIw3Z4ItSYW0a4lcIGEZTn93A0ogpYrj3lMzx9FYB%2BvWqTKwA4J89n5it0r9O3bmraXPGGLHzALvb3%2BYqeFcYvtQBy7GTFnbtiE64CgU%2FXDDCC8KthjMLg%2BzV91Ma%2Bw8iBosmRDfkqWJS8doDoeZbKwC3hyQoiq%2F1fpUMGk03tJczNKMKmfn9EGOqUBu0zW6QB845P0HPLfURQG0W%2BhG%2ByjfHMb9hfDa4QZvkbQhjuuxLUmPzm5ZeAquO4l86hhBRQHsD3hG5lK1u%2BXq33oF8MsLoPobyx5sV6q5WoK9nQhxwQliK4izZbQWJN6VNk9zpkaVXq6%2FSudTx6yPCOGNa%2BwJjkONn8gHQLyF3p%2Fyzypw5HScMfOAx%2B95vQUnYn%2BX4r0XYVwVgLVzLfFUB9JydbK&X-Amz-Signature=634e52be011b7b127901094efe8fc64095ce13b0f314d2c6e06c7a8a72e7e0c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

