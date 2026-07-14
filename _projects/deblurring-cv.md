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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZI5NEJ%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T130010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIArcHc4LkebF6j1k5uxhrTmFeKDLpOQhM2QrS5KgRqgtAiEAiaITEt9lJtJhnwiag%2B7BqXseDj5v9fc2wktj5DO%2Fot4q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE8S39g45hurRPmuJyrcA2QeMjFBkhXFfmA%2BAkNi2aKZv8QOMbwHbyzzIpxR1QiCQ4terfwV753lgZTac3j%2B%2BUTZbl%2BP4nqTg%2FZuboVrsL24meqKY73H8KCiT9z8iNa0k7N%2FzVPLtRjFEws6QvAcIeL%2FXuC8K4ypsEZaaU82X6SbFxLMg6zBfRZ9rcMTwLQ2oj2C9cjSmCTZD05DSCBXPz%2FXyGeRKOV9UH%2FMkIL2hD%2F2YYUTf2oGRqYQR8efs51lnDgBal4%2BgGI0H6aAZFSIvDa%2FPDJYCXqk70MVSERryKegZ3n8w%2F93uNjKWgOboICqkXbSq4G3Fz6DTJt9leaimfTXPg6Qi23LywTDz6zo8fZweyfy15so%2B8V9XDfUcy47o3sWIeiQUBiUpe7pU8ioWj7PrsxTXYZq9iJsNfB5ZyQj8vJ48cGUSQ2Jh12L6LCX8ndRiBaKNf%2FrWKKWigxTk1qYae50Nl5g2D5czabk%2BteBpiPxQypLIKzoGy6C5Y8%2Br45%2BRdsBwHmHWGTmzM%2FSu7rF43OL3b%2FLwKLB0V1Z4f%2BiFTZ%2B5O2XonpNZatlnOYhnZQd7V8X9ZSgm0ZMtZxDrWkIVuVzvgKtJ4YTF%2F1kLJWB3lJx862N401HGGn8Q4e7VP3Ah%2FBM6KbdMt1oMOLI19IGOqUBqkOuZXWxtcZDqRxMjiL%2FPg8d6NRm1S7H4fkY19MKsi5zV8J106acJ9iucVoBU1Te7WqFRgSMCnJ93rfjUIblLJwifKZ%2FQ8nC4jC11qoFfjbVd9Z%2B5XIcM9fALeXtGw6O1DwFXzkvkXh1wFAlzbYw9u%2FDlxTWFRWqvhGtnAQy1VvBbWImi5amIu6ZLfJtvrV0FlBLaciJbRZS8fdvE7oXL8sPAQSL&X-Amz-Signature=faa7482016bf5aa645b662ed95d9247189136fd3fa0a1d21409ba443decdcb80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

