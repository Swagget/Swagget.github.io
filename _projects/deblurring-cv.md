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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXIWTY2%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T211544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDALc7prJHtfrA34AHxVjl4GY%2BwE%2B%2FCyB1AL%2F1g1FSs3AIgWn8eO%2FwCWSwVXKm5UGhp5bet2%2BLeenoeh%2F8hVaK2eZ0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYn4a6hcPqeg%2BUJDyrcA3D37d7g%2BdOFBepiB6x4uJLP0X5XuCdnrx6bdJTWDhSb6eUlEBp5O9L2a4BZsSby3ScXUYExlYelH5XUlpPR05IKlWoAeKCpH7GbaLpFKjZoND4R4OuXlFo3EhfYx1UxR74thcYKjoQxvnDyIiPb%2BzugB6TXsee95gJQPhfXtdY4Oqf3QcGQW9vxMJRiwwlIwu4am%2BcHFFLIOC1DfyfhSNQvgv6tIFegaceS1g5NfV1hTK2nHsy9LoHfGo9EnYXuFQ%2BOyenikwiOv8CCvi%2BEOZhIgVOv1Ezcr6VSn%2FLBtZW8PfQoNoy29T5sdAPpo21D4yg26ccLcB%2BWNOsvrWCrCjd7bvAE%2BxgcebgHJELuGz%2B0h4e%2BjAtKS2tzsvY6n1RRi1HtNJXEFX5Uyx0Xm3hHNP2DsR8du4TH03eKG8%2BORx%2FyWegM87OAm%2BjDJhnU9UDppHsW8RfrbfI2BK9y6hE83ITgbRjCQYXKEIX%2FMdg%2B4%2FTWhAurtF9jg204WrbxInPc7viOcMA6InJY%2FvRSI9FlKSNpZcAo%2FUIT%2BvCWpdIBoNqnwkOaYTwRc2orwdBXF2hVME2iCEBKkY5BjVNW7ReGz4ga21eZeKffBPnhdYz0hBjaXghJZvNDj6FUzHsBMM%2BtjNUGOqUB5xbnP6KBKMpB0Qa%2BxoUd7ryDEiCKf3GqF3Ufg7v16ECBjdDtvqpE6JdrkxJGOPQpBPnGTRT8DxvacVScMlo16MWrpVY92iJamU9KWsumFVw9giZkMVsbGixdTqtlrDOI8H3D7hvGTwYry7pGmkJJsbv5Fud8jHK16NPHfsK23qjSTaoGAobD%2F7pFkXKge1xHJ0IkVI1WTrbfBsh3Df%2FXoonh%2FdpR&X-Amz-Signature=a8ce9c36ecf2b0436a51d93ae84b2b7d6b6ea12f4eb829c9c96084e74783474f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

