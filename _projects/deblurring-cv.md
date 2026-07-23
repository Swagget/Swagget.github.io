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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654S52SBZ%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T105550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHfYjBGhg%2FiTXoew08cEZgYFtQPUxyND4X545CVmqFHAAiEApQnwZ1AU40MGRlxhYzJliXk%2Fe4TX8O9Bnl6ktxzhebsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKPtPNvAGrrdiifuSrcAwwy7Vxr03LikrejcJX%2FNoZXBoVj4e%2FQRtHODrXSWGqn8BRhHlqbDdLq1tKe6JZ2gzntjyu%2BCvfuk2EWfCFYXZERmvid3pg%2BrcjVJnY5Nv2IIkIxP3wECbPOLvkHdxIJj7xTvRKHGCkJu3tFHp2aFH8xzkZpv1xEK1UT3QfX6yMWmkJszfGf9WS8FGlR09NqdZyjWaeiJV8N1FgrOFxvX%2BkMIess7sPBIxCuRune%2B8J%2B40oNtmUrSoouAUOrwpw2UbSNWSKIs8E1tjsEGMZk%2BT5gX0FqeVXMZ2I7SHiYWKyxv4M8d%2BY5ljRn%2BHue2sPg8X3MJKnuuzB%2Fo48nm33PqlWZUeUZJ9WG514zvV%2Bc1hJ%2Fssq3ckMpxV%2Frr%2FJTKmY1Knksqqkd4H5oXhXpnp5Asc2KLjOhBbULfJq7jUs95p4%2BQ00f%2FPbHVkQW71uqkOGV4Fb8RtKdU5tRZGyVy47QXFhpVUZXChFTwhB8jNfRz%2FUymrCaczBMOJaTBW2jViGhmyDUDYHEyAMECsMdifS7Ex1vOKjM8sueyvVsostFTm6REbDMO49TQuKp12fPVQaTireww3%2F25ogKUwdniTCWN0mk3kYcDdGYZkEjQgxMDs0fMkGDXwPIq3fAf0TzMNzKh9MGOqUBfwC6TzhiKa4sr0hBFFLHLCleJCokFBgBj%2F1FmSb%2FpFy9%2BA68pzoIn6wsl2YSGDqaFrDm%2BRvdNBcnpUr6MdFfY1bIxUFgA0m%2FozysxK3bp7mcLBOKt7z4z98EAibU4pTIWXnGmwQbuab9bkUmqM4KckI%2B%2FE2JW4oW1%2BHJWmlvoWEqVJzO2MoK3ESAwRun4UHELbUC89fEh4%2FkuWlLWqywM%2Fvk2xR%2F&X-Amz-Signature=f57039e79a277a141fb9287d26709862e9229c9846497dce7a20c9c3d9b0859a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

