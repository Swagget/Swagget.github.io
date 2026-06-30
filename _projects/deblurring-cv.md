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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VGXQU3Q%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T102132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHPUoR4NHVL3HUzkf5CRTdXey6Rm6iMZivI83lA92PRAIgWRwyuVGrnaJXSmEpn2dRq5YCrJ9Jk0v63a%2FZo5MPEH8qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGOns3%2BzYaSpzZk2SrcA5j11Vba%2BukR0fQBCDzjiSoKi8DCXIOk3%2BwA4GJ9Hxc5pAY23ThvyWZeQTTGtAvC05s6PN2%2FGwB8nDXA%2By7wkNWMunK586%2FzP6RksfUPw9Iuv%2FfzzVeVwpJn4muVBAZDm1e13g6rL%2B6nMfFAmYtFHPLtSXJW5DJe0ltzjqrxLE%2FzbMoE6bxVAZ%2FU82vyaqz%2FNhkoZacmhT3h9Xob6g%2Bg%2F%2BuS2L2oMjdahTKPMVi0FbBOOmU8aHAdtDNInDlIgv%2Fjx0YShSLStCJgcodEcFohx44t%2FSKher3gDs30uNxfDdc9%2Fvvd0awQSNBevnKr90PfFA4kRPahhoUkQK2lEIUSJD1aLVoVhAlQw%2FjjqQSTNXm2ZDcetCrjuD9Zfx%2BSJYoF8ttIEw4NW9yDvwqw9j5dJJmxj02bMNvtu4X%2BDVEe%2FKSDOUEg2cVE8Mg6q0rxJ9RmLNnUF8m1oqmk36zDddPlyo2Jn9lTmZZcScPPPN0c1zM0HkW27ruEBSj6DKqzASxUiMYA%2BqpDyiNBYLHZmpNR41rw8JLD8tJNmPyFlJwsvkyuodJVgwUxTfcrrfRmLO993fgYVr38LvWH4xzQh15M3KEiPKJPFmzAZDqdXSAhCS4PDjNSd7cMOo1PsNw3MJqTjtIGOqUBF7VPhx99VkxNDftDlr9pZWnI6tkgiNdd6lzzvKp%2BvK%2F%2BOHYVdnvpkHs04ycN9bUC6M4pstRDwUZiQx2sLHdE4zGFVxedhLbFy8X6f2yMavKaVDuOwDva2knC63wjkbQlpFAyoLHQPIEkA7GXZ1u0PUwSXi4F1Ppt%2FRf%2BNbktIcZMXCJyeAi0yQdilVsCS4VeiCgyQRiub1zcWI8pQwd0nQsMpwfs&X-Amz-Signature=20b1f4d01826a76410f2fe2bca0188b9c736e0b23f55c59be39a3b824fc4fa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

