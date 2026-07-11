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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW3OZZN2%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T203930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDca%2FDFrTN%2Fy%2BbgwcWbUMJQXtL%2F93kdLdKnGiYiw5w2JwIgMuPwg9GqHQwcVGhno4GcY7TGK2W95qQekXLm32%2ByRo4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyOM2Oe3C8wfZNujCrcA1xcJiJs9rFhas%2FNFgCJ4G%2Bid1VUMBqutMrd49A6B2G1nfaVNUgxVWHqd8HhYIJkNhJCa4qxdadO9OrVAKXx%2FUxV%2BAZ%2FWRjBTyJXDstfgN7EkyM5QEI5QZLT8RRZAnPX346dOzuB5O7XEcTifnhoQUra5cIzdujbvqcw3frwyrply0i6q6UBTCLntzhyGA6xerbNdM3X7yUsJHaI878TfhOFTnat%2B7UaBu82XVMG9iNwV2t5BhYpe8vS4hcYXy9oK%2Fbb9LBT5ta%2FahzK431vv5P0OnDH3Ony26XWq6GOLOqVHLMu5YxvM07ySg7PzOv60RWjqYdo07YGJA6FvmM3lY1Vidkm%2BY2INQ4yLBmc0hGriTp0WHyabfU2DJvQpSTWzm2J2E7bDFf1%2FNGaS3HHkh6ZG7WdxoMX%2FJ5lgB5SZdMjMcdDVx5LVERqlcZ2cwdXr17GqGkjPKh27Z5SabZ0cReNBlGv%2FuxPWMfm%2FFIImdD7jvIjd%2FpKDVAsjCphyDwScIQxhVvmN%2Bmt4WyZjljskmJ82Qnh%2BoN6voayRZxxWhOxwBCbdjfnI7393qBrtiblZoRChEb07yriNND5FLnI102j%2BapXIriXlAPqjPcxYUlNXBHZLOYuCtzL68%2FgMOvDydIGOqUB8O2klcDi8rf5Zabib1X0Buza3fMvqlFa1gglm89Worc43LnCOg87RdGifR8jh%2Bvw3mcp7E2yDreJjirKz%2FO9VMyJKstVX7btxDLVrQDLUvrItishfqCPGXnp0fasH2XWJrguJs0Cfkv9m4bc8T3LXC%2BoSYTwbfaW0yHpiqUZNkv9g%2BIoDyT6SbLw6Wve4a7bgYMT4ecTnlPfdHYlCaoGAVfbCqma&X-Amz-Signature=89e2255f03c0ba517c873a9d4af70224ed610f2e9ec232c419adfac4e05e372d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

