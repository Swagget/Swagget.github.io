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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMK5HMUF%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCS%2Bni3inLS0kPDNuwau8X0ciZSV2wLJGMgFe63ovb6igIhAMnitQ5ypT4R6CVjpwOq7S0P%2Bkm6HxYCUVVegVfaB73YKv8DCBUQABoMNjM3NDIzMTgzODA1Igx07ZJc%2FUyUF7r9NtUq3AOoEKg4Lvi%2Biap0HMxl2KgYuvmKz32qxH%2BksWiP6DjNGx9hG64J6N1uguk4HiSE14xPve0uYCH8qz6DP2UJKImwBq1nxQwWu%2FJaCH0Tl18vjpNJb0qhukZmJmyrdjGyz1isoShh%2F7gKySVem%2F%2BHC9lOHAbP8llHSGd%2FkwIJl%2B1RIT9iwxQ99MIMQjSgn0epHALJg05vm3hKgj3DaCG5ugpQvYEGm3XWcylNGvZM%2FOK08Mj%2B%2BvDbiu4U0MNydJ5bBAZCfxwNxQcwPft4PqygwI%2FZ6bildseu0eHmj7Y9sF%2BJSDD7V8mesXFBR6qkRczOJPgbWE%2BQeQ6KK4Zmb%2FBHFfXvEh0mEVMc0eNIK0LpSY8b8NLW6fQ%2F1jDAqpmoqW6CnJ%2B%2BXEDwyRIV7sJ%2BY0G8Hfa6X9ZpWRvtUNyZSm%2BFukPeZAqjAkAlcWbmqft3%2FEB7tZxJrI1ocVmks6FMD1GNoYk27rgUPG3fl96WSVX3AHDmlEsKl6gfUjU0fjPiqUhHSd0FeBLb7pOzr6UfzYKZlRh9bd1J4RBZ7L3svxd9aJV7bUG2gDPyDS47jLblNyIPg8utFJnWPNMEj3eKgp%2BunLD92GVitZZBe%2F2e%2BFET44BHSOGGvJlSmxE6zBtFjTC2nYHUBjqkAfDFjcjYaeODxVgIL%2FllTOy8l8SuljL6aI5wfTrwQTY%2Bjq066iQ%2FuB9NrvMzvvTvrr365U7HY2wEToSw8crzMqmDt2sECDnfyB1DChxfAIWXfFtBJggscQDYpOFx6pRDcnDOp34ZhsnVub9qFSLNMY1NvP53Y50HgA1FlnG63lXCmFiJISMjx6SDL6K80rZgeiUpKWXfLDnSbeQWKB%2F5fMXK39Ew&X-Amz-Signature=aeaa9656a994830bafff95d6cc920680d1eaadf32bdcc9d306097bc400be0333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

