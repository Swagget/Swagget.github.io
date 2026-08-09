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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGM3BBYL%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T122146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASNH2XqdF9uXHQa5X9eTZZRJmy1iLj38sih%2FkzfXe3xAiEAioB%2F8OiLt5rFv%2BagbBYrYDPTOYdcMicLJSaWILcSTkUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3gKwZYCIQw4FcoJSrcA6HJMGTfTRaJ0sqss845UDBWSHmtRYZqo1kbDV5qPflgZywNFoXh11Qhrd9yS9H%2FKSZxCzT0JZSzkaR2ze534W4KmRP%2B9BAVBpyTdfR0RLjUiXMJnIO6VrIhHj%2FpgYu%2F2ztQhXIOYn3TyzMRcGJ5k0wYR84LkAj9Qr6WVE0eOLSQnFEKPT00fvlLVKxhZZap7n08wStUDSwKEvBuqGe65XypHuFQx6XpvnLn8mv7GgNI1VuKS%2FmAfT2%2BMpuapvonRyJg8RUE0dXJqBVM%2FNBpeu60gJvyVLTYJpQDAcANs80e7PB%2F5FLX3VJc3HxtjPldkg%2FOqOURuhKNaiZuOjWUTmnd4lZdp7whVoCJzC6O1ZvbycpLw9W2flbzThimOV0d5rJHQUq4O8%2BbO2F7BapOV6twUISbX74uyOg7XRwYWUS3VOlZoRbKfsNSCj2kBdNr38E5z2DBk3yyEQXDpi5zTqsw%2BGw63QUH1AfJEXs16dIsJC38MG1M%2B1qPDwFSMpq5bWAbgpu5fcfy0cIaWSUIGSBRQ4uQDKWvP0N0oKYGgWWY8AU9ZUdFTdgjRV67fI2RyFAdoFOU0uA2RzqsZGe%2BmLrDl2eJduQN2RwuhWa3fL9%2BiGG0skGp53jrXECfMLil4dMGOqUBT4v2oH9HZbv60%2BsLoQntaOJ4xs6VyZtPqyXq38X87onsq1YNhsSyyGo8xw1WIRs%2FwWDANzm0isVsDhYB%2B8yR3exiJSaRk5r08FlyPuMLB4IY68VSBbNFo88nfQb7T7awbnaLpPHUCYiagDcoGas7TCYu0il78xtX%2FJiXd2%2FRdxxzm3il%2F796GT16CpnTolA6mfAOvNtTUg%2F3WT3mrMA3m%2F7NDDVo&X-Amz-Signature=a61909e8b9b760bafa27a18805751298e493166e23f725a08efbc763bba0da12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

