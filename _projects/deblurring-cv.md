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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZKAPE3G%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T051340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFbzj0GhbmfkrG8DxJozK3AMYc4L1zIrV2vQykDAuPCbAiAUUCEWo1BiB63EBxQTjIrRZnTB9LH2myLcHkevMLQdLSr%2FAwgKEAAaDDYzNzQyMzE4MzgwNSIM3U5Jq7fmCEqlC7e7KtwDzkqLU8JvDfZNDBXY3U%2BnZlzrmW7uXvxyBgz2iaPfaG6UQD8%2BpV74Ea9Ex7yX5DKxULEAjFR4T1WOR2mHItlw6rVulrNXFFFS%2F7jGfO988i2Sj3EV583bEWHAI%2BZwVlx8SEx0vVMMAPUzRymdMQJ7G%2FaoNL%2FkNVdQZzt5eErPaQpKlr2z4UkV66IOcTvPM9xDFOvOMZCkOLHVZgs1X9IF8%2FEy14XYf6FrurHwR7sBQ55N20B5GcP75utJ9mtUprp1W2hYpMCope%2F1sFqo9vQUOsqtl3rkEXPgCPOAoFwjc7NOxpcZcHwOvLJ3dc1J26%2BGTUOQAQMPslxa5NG5SQv6G7R3DPMYUDdgZNCo2ipHsEuQiXn0sbsX2UwvWckOYMe70NXlVlmwxcUpB0kKpimzJOHGg%2FXwIFqRMYHAIj6BbsFDzCKIsyUVIQT5Iq2M1B3zRAIaX3AiZ8VayafJfGe1GgcbROtUHNOmIXya9fhjJ5FWQmLysKW17pH5jbieatRMDOxE4HtgpfVJjSYC2OlkfnatQAocsPgZImYR2t%2FaXhgU5kwzHy%2BY2edMaMn%2Fa2v2fYywwkPdFswRrR%2FjlHBCShAK%2FIJxLCTHTDwTJbFymI4pRHy1SKWw0R8d2EIwsP%2F%2B0wY6pgEYOuJbvQWcSXmASDB0jwwpX6LI9phRHe3idbXAP3X5Y8E2e7XSkU2UewO9kFhorIeZfSidwCPzHbric63MLeRrrlJaJu%2Fd9YnEg5UC1mA%2BAqWF3U9tvdxLpSh0IQunu23Fm%2Bd%2FWfr8jQmYfBCx56g9ec83MTT6KQrYBsCdMfWNFKSblIcE0up6ZYeY%2B1NGjLUUFNvVSrwqIt7jbKwHG%2BxJOAJqME7J&X-Amz-Signature=afa501ef53578922051b4e90b2b43e9fdb9b358df8fa61622ddce3192929147a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

