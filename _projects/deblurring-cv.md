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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3AQFY2%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T013022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEuwMl2Tv5HI%2Bh0doe9Syz7LSSFcQS%2BLjBcoO4WNbpmcAiEA7NAt71HnG8t9hFqsv%2FsniSqlKszemQQD0m84cNQth7Mq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDK3nddiQDaw2uBpe8CrcAx0x0obKQNxef8A9EmM%2Fr8QvkpKMBLuLeBgprnn2g13EdhCqzQ5K75cc%2F2ZVSUK6ByXUFsZoox76%2FRKEibK689%2FsMGs66G%2FjW2TM0sTY9%2BStz9AhwAsloMmwWr0%2Fqf63CyRqcJpGNBN6gZINnKEArwZJOlkRtrZTrywt1AQZl7ZzELfyIhIls58NDkvhVjhbXdSkFK2KZCM2wxO3oKgpW6CJwwFnF5LBByM9Uo1nFFVi1mjWsKLgV%2FNSJ40AeLmMq5Xs%2ByAuS%2FJ4BAN%2BAaE51NRDQ0c2cq%2Fbsa5Veinv%2FUggvWi1ZU69kijTFnjrS2G3wCtSkDgFYfGdHFiDyI7QHS7sjR3g0VHDKd8RN7Yub20SHUwCj2D%2FLYOU8Ov6DOrqEbIfDnqvIqN5kMc5WR%2FgfTRw8fRY%2FFe2qo%2BFXXjdxssOgCUDvfp46T4jJJIFpmAQBEmtPCNtrg4V5VXWV%2Fcnlndj1JjjB%2FZywEZmay1ny0ECdjqG53ulsC3734lG7FzLfA2KXFDi9ifG7fvAWsNFDlJEn6tqUl5nJRau68V6bQ6T2c29Eedxm%2Fd9A7mhf0o%2FYR5O75bMPDoCwTMhf%2FmMtMxUBsJvBLPvsBNBMzLMjlxfoBU%2B%2Fy16ZWbGhlx7MLC3odIGOqUB17J5%2BO8jbjvUSNv22JbNgvUIABfJQlfXgm4VcPwRVzqo1JU%2F34hSZKEr1OYElLsBbUiXbYmexnh7%2Ba3JPlFV8jy3B31Irspz8Xiyet8U1fUP%2FGfzfWcUqqNkbTepGjaHzv0lRB%2BWUJPa4Xaztrvh0yoIjrhNH62ovWpQWbW8%2B5jAw1cEQy%2FiJ%2BnuVXnCJp9jUvWu7hP4PwX5Edhzgx71n%2BlqLha2&X-Amz-Signature=3982bfef2b529b2ef50769ff390b3067bdb8cf71bc76c3c95c56c6e3b45f5774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

