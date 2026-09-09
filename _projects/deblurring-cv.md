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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UFTCB47%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T004657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDl3bV7c2%2FfbM9CRDVlpiQAaMVIai90gOuiPe9anOiGAIgKFMiq0t0jA1m2e%2F8Q2eO1h3S7mrnzgRLaLsPCquvCdYq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMteMdddQZkxUQMI%2FSrcA2RRG57QAkU2v0A1mm5%2F1ZSlPF6yTI8EAk9YaukX9jtM0GAF%2BwANYk48ISm8aS%2FHuhvEgwj%2FSuH%2B9%2FoJb%2B8aoOC9iPmmDUQZLQUanYfgXxdOo6t089fZPA6ytpWBwDyvATBVpl2BoCWCOS7bM1WLnbNeLtOBKQk%2BqDvaMWR6nslYeBUbWmgULzm32fRDaqx8uJbEZu2AMtWcSxUVptGTgOz20GMplo9sJNKbkrU8qn6bpzMFOy0NC8naYJsXg6FdmqK2zWP6U73lTukEWHhmM2qB5QrW3yxbIazQtkQjPvyXYOXdJVH8nzA8qjyNWNJ1tsBDJKKxuGL3BfAzKteKvabU120HPWD9EF3d3dKY8emeTGBNlAi%2BEZJj1P4X64ruWQCqR6ppsTER0%2FnOwbBC0V%2FY%2FqGm%2FTlhmSLjSyP2dQuH1Rzlm3kiKK1XdiL0exW2qU6MEnO1znGsfgRmpMG1Y2vasZ9TkSqkeq20FNBOQ0q%2BU9x40WtSvJCARq6CrCakbo3hiUMB%2B1MTy4Lh9ziaRCV2F%2B1T0nE5hL2R4XN9DsNsowQs79l%2FIW8aixVzoiQQI8jHIiTWVSN2H59x7RQYVA2uGpMU2h%2F9pHtvf0PecESNW74yNCl5SZgq20rmMPKmgtUGOqUBRK7QDC%2BNTg7UYIerNdIpfnX3z2Q1oyi%2Fu9rrFFc2CGc8MU0U%2FTEJKKHhkcCTxfvb01t%2B22n8T5r1zgut2FNhfqoe5MKs2q9o347tQQFR9QO19C1hmJc80nJNwhxZ%2BlxFG870YzqCHF57Trm8alK%2Br3qG%2Fo9Pp63lIoUkHmcb1C8OyPFM6sL0iQCsH9GIJFrop%2F9hyIHe3rFCl0F1TQi8OwDlYGlq&X-Amz-Signature=92664c70b1b377a87c53c4b65b42dd2bbab763a2ac30081a96b94d7babddab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

