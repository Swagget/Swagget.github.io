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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KHBOXFW%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T200508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCaAFg69KSCEaLlhZj0n%2FbSsB3O48QavaFzHQTXh99DoQIgGMHjfcn%2FGo3zR4m5IOIWODthBcMVa6605PoPsxRlCvoq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDffEMaelEmuCY9V1SrcA6TodTXdlvw0NKyy02KOAU0BBFnOop%2FepTOTMlpZtDM1WSEtM7afoP4GVprzLrvE9D45S5Xj0u4hZkzFiopB3PK9tZobXXNKoVnI0X0VUDCKR8iXtJtuAss3dfnkR5v0jNKKKZ8MBTAP%2F3irjqj0cj8i%2F6A62K60P9oRQCVDBIcypjJUixfsWMEUpGbycYs%2BgjTnxjx15ZmlBizOycuvLvQWjPzXQhiaeHJIdIPFkE%2FDUChvq0dH0Cmn5g%2BpqfKYt7u16%2FepcRsFHmTMuXBLKWp0hIZAy9ush5Ohd40bF0g0Z1YMtzuDa0m9337ixIYD0dBmSB6qDhzplmTu2fNvy5ZdN9hFPn6F2LlO5p4FmDc%2FSyoB2sGm80PxyIcAcDEa1v5R%2FnkwmgI0vPW6wMeA%2BG%2FoMrZPru14s0yeaazihH1JYrh3kEZHhwPt6scI3xtOa1UrI2DsSgSeXTgeRN3JClPsKg67rnT2lFXa7ZJgXSBwYF82sJOG3slubZrK828Gji%2Bg4NdwxQIDVnbzBobuumjzzVNjwWHcps1lawSIXy5rKf60CoWSRDTxaeqIKio1QaeDF0T9qiXvEbUtoB1M1SVYtnCj8fahyltF2PvNzmbFVRlutNyu9by2zXhcMMyD1dIGOqUBF0Udzdh6gR9As3NbOtICnNcfosrhI6D0tbJZfdzll8J%2FjRm0ftLNpv1akWgUcj8MQxHzw3gJFoJoqjFxAlcNHOx8eGuDErkGIc2znHqxVr6Y4TeunlqHMyb4oZMbwka3HRXz0o4rebUYc8%2Bn0VtB5Sw9VTxfSURhD%2FeVPgsKP%2FdWByljP2TxHdWJ6fFIFeFO87znCmxo5EW7juKQhcbVJoA6LRNT&X-Amz-Signature=a4345969ba6c135feddc517f7e9dd679e7caf0108bac151cfd3a80c03915d2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

