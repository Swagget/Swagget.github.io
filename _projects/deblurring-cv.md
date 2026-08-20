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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FODF4CP%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T092100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo96EEgR9eWMWwme6aqPJa5n2DKLotbcA5LOOP9PWffgIhAKTIWfuPPrxS%2FvMqciRc%2BwMK0Yx1yLQwzqwQiXFOGkBSKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIOZchcx0yx%2BTd6MEq3ANAfpwHCwo92wlVpDUd1VYR922x4IggDJYKIEkndToQz%2F9m7SB2gHB7WAcJZqjj1MEJIDTgYBS05YhafW7qHdfWN5xUhecyL%2FWW2yYEnAW2LJ2Q8OkHjx2VhLUpmGc3LkUHw9H8UwMffWqGLLtej9%2B3rRqPgGiIsw%2BUQd6B%2BGixeBxB7XZdS2bf6C41iSqA0CkCcWcqfc4YxkF7WqJvX%2FE8iA2BIuxKGufaYIybk36QNeyYqqm%2BXrzw%2FmncpAI2SawchrNv1vZw5KZxfSXAty2SvGxzDlUa3omD3ONr9YkC5%2BxOemLDsAWlEKz2y4RJdbwNmCsyO%2Bm0PRTYgf92PzFgZLvJsQGYD%2FfEjLgxjRFEQ%2Bmjt%2BBLokBRbdc70VJfkAawnCrj8Gk6UgTGY3Xwk%2FuGwwtdyiN%2ByojGx1PVxKB5PgrdYMCgp4J3ry%2B24qJ%2BjdAen%2B4RaR5JbLvGuasxemJYGI6E14NuVa%2BLWWxov0QOvIpX03Kui1tsjcdSZTlFWdPqLXN8E4bszA0Ik%2FjBKY6dI%2BAVsgPHJCLs3SM8jniHbFnoSDK3PP3IHqdLmEGsDeobWHiAnnvrWWXRotKEJjmmZhi6l9tUKfSbZalPnoFfuT68PrLweJEaMYlzQjCl7prUBjqkATTpng17Jg3e1f7RtdBil0F1sJ5Rmmb4Y%2F7WdftGXsUDsHyCeALj9mY3ruMCm0Gg%2F5AbthPNOmGcdbFSH9nCQwCSrpgEeXtnLw42mDnsbk1NFvXs2qcG%2BkmveDAYHBYzJ7MmHuSN0Ah2gn9At9JRoVgk2dITMg9zV%2F%2FrgtS5J5w9Fz7QZ6es7s76imGQY73a3YIy%2BnYiXtMDsGuKR3V3PYBPSDkM&X-Amz-Signature=38b99db9ad2e750bccb7b54e54053a841a2df965a7cfe4042720e48bc8cc9211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

