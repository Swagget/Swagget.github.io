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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDJ2UJVV%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T053541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFXEl7gwFROxcQhRUEWZZPCNJ5rVnZiqk3wYOeskNbu3AiB%2BClIfOYaQiR0rHzt72sLw2tPw5AXlTPnenNWl0T2qSSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMNyjwd8IMDWdOQBb7KtwDc5Fv5aT6L46lX3PnXaZbjirEmu65MURp3oexWqDj%2Fkcvge2CG7SiGNFGZRcGyHexo8%2Bngjv%2BzhYPtrE7TuOzgtZjDdzt0Jf86z8mLmAmhttX8E5cYo0qjyj8DeDOjOonll319AHAAX2KSZry5rCOrdYIYBk%2FP%2Bx1OKUDOXbKigRfBVIIYycmeOCELgTUYFtifDMZvpsLjAjwmGHVySCQQ01bkg1Us78l72jgOGXlsffQOZGwYC5U%2BTF%2FHE4p3tCfi6XbDIDC1aGvbEksb%2FkFXeVa2eLfUyR9pwMMhnL1s1uSzLXJ5epDMcsNqHgG1Em7N8O6SFldrOpVcxDc5FxHKkuPZVU3ihLdMW8WkefgdNcKSzPXvJXPa8mnSXR8hemtiicvhtabFwqPfmi5NzmKVs%2FDxto6ER5vr9wsoGa8Yw8TxZS9wKcZ1XSjI6SvL9blUbTid46MibvS2s5JFuO%2FVNFQCoJbchtgvW40mZFY4CPFoliEsQmyVMUdoANytJ56Y2uFfyCmn8tGTX567rYCg42YndurE%2BMIqkJu094qK7jSWmuJSaq%2FVRTS1VpLmHWK6psCoV2D9K7tBs1J2ziUM66jknJ8QYiawxzj0s%2BTZpyNahKI821Qm1%2Bi67kw6Myb0wY6pgFECHQhOsDk2oIC%2FLmdd8ZSSDYXQY91c1T%2F5YR%2F535nmsXEH6KosBNgsftxZ5yFQPnV1LApukomHPZqP3DFPP2QkuCWkrPC6sQwzNq1qcRnIUV6bo1V2Hzw7tdMuYZP3xG9xRHGnD8MwJkvmMQSzLFNM525paXC575%2BdHmon350SgQI6U%2FUR8RRKcEsC3KwZzBBnSrpytlLoHMtpYjhQXLQTVdrfP%2BP&X-Amz-Signature=d8a2d819b41a66f615ba2042d8cf80e56543952f5ed83dfda0707bffeeac2c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

