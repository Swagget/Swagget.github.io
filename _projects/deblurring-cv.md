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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4YMTDA%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T063505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGYhnpQl6yKWEfa0SGqUXiKTHkbz%2BDgl09LbjXN1sRJDAiEAy6hXfL7ub%2FURkvyzfQ6tJAOgpUpWLtdA2lbDLCoh778qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErbWKvwRumcUEPMcyrcA4aAanvVsgrk3Zt6MQQBQE7c7HUc25HS2SJksaXxnV6kyC2ADe1TuM7J%2FSRLooehKH%2F82qDuJ59vevhN3VvrUNeSWIciodKts6PtmMx%2FSOf3GK%2FfyrApqWi0QuUGJToT0JVSuP6qnnMaHLxE3dDtNqYDAM5Bl5kYhR7rhNH6wSAAvH2yv94SIx%2FzZZd%2F%2FxHnkSoW05Jx%2F2DTO%2BlSm6rnG%2FE3QL5z%2FSvUvoJRvZYenYo9talvXS%2F23y22W361cxqhtpDkmBw3y9hWYW8L7EURm3F98yyWMN7pUuxqJ%2FLoYzR8%2Ft1k1rJnbtkb3FxI6Hs6L%2Bf5O%2BRCXjrUJkEA%2B%2Bl71eCFEL6YaRpTVSoCcCc3rS6GU45H7exT8Iy9V0UgDcgIUnxA%2BM%2FqJzGFlkLLSuIrJcD45aYrjTzx8v7GD9X8MZLJeibP2NNj9pndXHDB7MgxncPJPya1Pb0Nv6cYwbjNzRDBQ8KlUrLmLIazI2EmJDsQBzTIwMqWk9dP%2Bw3LZKB%2F7yPlvo1ofAZJ1JL16nATYgjqcT%2BP92mkZW%2BFNOKU%2BcSUYvcfcId%2B8GgQenma%2FjlKFB2L5TS78ttNpwLyHv2t40f1wFUlJdhoFmdBD5zRq4EVHY5gw7k6AqNB7VDSMMm949QGOqUBc3YLxa1t1OwSQToMC5Y6Df3jPSfKbZPNEMJEva3WbBKqNw5M8xxGWX4Ggz%2BHUY8BRIovLpiHCrpj5Pd2tKTXztNEeuQBy6kkwNesRsiQLh%2FGC5MEawGQXp%2F85kZzJhkXegFRTovQ%2Bl4A3e%2FgkRBCtAtsae61JW12iBGPW2l1S0byHS43LtY0zahfrr%2BBnWXPp2XWl7gxQw0afhqhXo3zXoLTWkUy&X-Amz-Signature=93f143e9329c0911b87468c60a96f5483cd406e9197903c3029b1ce6cddbca8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

