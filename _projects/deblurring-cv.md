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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR57VK4N%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T154956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD4P7ofYpg5Kl%2BrQybayQK1rEd35ow%2BkeCpEyJGyLsNfAIgaFmbg%2BEErjANTN4XTcbBXHKbQPq8rkkgZQHBHTubJ6AqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHv%2Fg2BsBqyoknFZyrcA2%2BgwZDO33OtxwqKhqQJKLvPywgkoy0tMkWDgc%2FCkzhuTz4axJ1EB2gBrtDjE78xfZhiFf56%2FMQCCknWxOj2BU12GPM434aqaSLS0L2B0CNObHTLAYuw67C80YzFH%2BEfyZ6F34YkcKtyAVK37o3omrsDTzDG7tSwar2EW8ON%2FO01FTiCZa5YJfG1CoRzw8Z%2B7T%2FP6RIvpIt85A1I%2FqvZY8qSZowgu3%2FvwCovmN4ndsgZ%2Feruk5eNVHfQ%2Bi%2F%2BWl7r0R5cr8XXrvdubyT0ii7njlqZxzSdOas5qrSS6S3MzJJLa%2ByRpCbsMoB5gYBcFFFrwafLtMqCF3afb2z1yQUIeCAN0Xw2E7OPJcs%2B3VSueTsJRmRziHAZqS%2BNp6g8n5VTcW6q%2B9%2BGEl6%2FKmPwyDKFH0pzaZuJZImXo8Jm1aNtAI6kC99UWn62tEy%2BroI1fJNh9ho9u1LphcWUQ%2FECbZ6fpBZX7d6oyXlR%2F1BoerlAF%2BFVtMDyL7NAjpL2Otx9FJJlK3o%2FGQnpDEO6TKdxJTGZtrF2hVz7QToNH9frSfmri%2Bc8RHdkpVqxkSVL48t1WNq1vSfbn78qXlyc9C0sK0H%2BDVeaF79bJ8zNDBOnaLDDPlGJQPwcUOwZDpRqDQ3TMPaQvdMGOqUBfPLLKyRfhobN%2BSBCTz4F79TOcfTmiDSnRC%2BbajAgg3%2B0K8Dyoetsciy7DEEm%2FrlZBhGBJnlWmE6bh6r6GwJbx3ohQ3qPsNubn0xHCicO9o8UuBoYVP8G2WfP8uuomh0P%2Fi0EnUuJRtM96sEFx7bT4zoXpZDx52Ysw3CnHNY5Ex5k0Gr2LhM1eSC%2FIgZDSesVC3%2Bm4mItskg2Y1Z0m2dvE3rWMf0o&X-Amz-Signature=8d2f60606a771be25fd9d663070af998ef5b5130302c23fd4b5c113f398ca2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

