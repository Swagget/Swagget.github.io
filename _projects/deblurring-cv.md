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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5OTRQF2%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T161848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnO2th%2BBBROYi0VpyH65waie83YfmXj5qXAXpee%2Fyx1wIgWeP1SNZM%2Bod30uwxyD%2FuCDPFgkiWtY%2BPTaHMUF9j%2BTQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIKuB3Pn7eE1KoJlRyrcA2ju%2BxB0K%2Bnga5H0k%2FwN%2FK8j%2ByWh%2FvNQR36DnZRf18zwh%2FreNcguv3YN1T1CVJ7iiWpJmeofJq7EmZ%2FOGS35tPWh5zpPd3Sl9I3TI18HKrXa1x0qdsX1WI1B9thqj0DyoS66YOQpjtZmekr5jsT7N2x%2Bb%2FMlQpx0h43In5%2BjTxqUDyrkMVYMWPhcw33HhJxY7Efmri4uXxk9pAWTJWy7sRFbWDmyq9jD10CpLV4zpbmURGkJNs2jtsY5aRrG31VPh8M1p4TmTXSsUt6dk%2BkLkqT4f%2F6X93%2B6pyEx8w7OiiwW%2F8%2Bq7A4CaD2AyY271WiQZsHGUsh9j4TUXGM3TJY1FxEsfw53GFlLK%2Fv6m%2BUItTV4jcYtcPKYDpxb%2B%2FNrEk7qzJm%2FdNROoGJJygMEU7zZiZNk8G2GURHLc%2FtPz7noyGb4aYpTvNLaHURwldr8tQWXjrKeZirlsGFr2Nbmd0PI4o%2B5Y93DXJDvcEsVjOv5ZWx9r8pFW0nUo9LSex0ZOtwpri4PusVsaXAkD1bF9%2FtXe76c0qlLIDZeMAYjCnHxkm5IjMEczeNOGizJmlwG68eYatiQzuue5BLDA7A2MmQxjLywdAY%2BgswACDy4NZe7sn3YXKDcG4dakUTgXLSqMLHD4tMGOqUBxbnKWPaLtV9i7HWzheJ5yrEt1fbSHJUV09KtK2WZTOd3JfMXh%2Bb50RkPKKBzETZQeM95Ii86W8sdnq9szdIcXrU8gsjm%2Fz33R5qzcRBh4DQhbOeACsxZObs%2FLrdaT5Bt2vf1q4XE8nLzu27xgVABDtLBo6FG9BvO0RAM%2Fc%2BOmc0NwkiDg5RL2G8qhLo2zFfGrBpCsfzWbAodn770mstx%2BWvRIKT%2B&X-Amz-Signature=2452cedb4772dde4d71c5529cb0e225fae598e8faf4dd89a651b9aa9ede39ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

