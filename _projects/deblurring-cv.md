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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3FXJHE%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T121013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIGUPINnU6vJ0xgaAmQ73YXSCNh2DCKeRtIoD3RS9hdx2AiA7RnPugX4nZvW16%2Fz0tMLXylSou3LUcyDYt%2FuaW%2FfZ3yr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMqug%2BcQGh%2BbnFNuXLKtwDJZXEukVxwBr0URw2FLyVvJh7Gkga7WOT36FnvaEmcheccMf9GJUFjJd4RCrcYwlsdhgfZYQT7ebtFcEGxcimBopEamwiDyN56OrfVtSGQnNPwIt6OPpwb12bE1C09lLXpIIqiSddU%2B4eBiDU4cOr%2BoSC5HPlSOW762U58XGD9FTF%2FwHtyLpRCm5GaVq9xwzjGUidxjeA6LM7aI4R5w2SGIix7tWqS8OUjRbSfAknF%2B2znikv53vpZ1mZSIbNdMOHu6%2BNznbkqIQKkKWqMT02KyIZ3rdz9%2BFFl76tLfOeAyU0fZtzSx3S7GDnJEYZJU%2FNkLB39AqXJYHRMK2hbpWNDPuPftuGSUSZc2cZZc7f5zSydCPsmLRCOvBF%2B8ucBYAhodv0rr%2Foz5VabXsFS9jzUOVON2Fucw1eRZ40HzxbbXJoW%2F3SJoKcb%2B1J8zg3jKBTzv8gWkXiprQeTnYaUgTO0Ouy5%2FI2ApugGD1cu2CuNd2yDYlRI%2B4BLVPeJYazuwc%2FOYC3brG%2FjnO9QS%2BnKgkBGf6gq%2FNweqCcCJjv%2BEUQqwdRTpppZnPfteky4TynKC2618ywRrFJimYFcDC7SQaA2sromGn1S2BOSuF7NAG7cjzPvQrnwcUytkX30yIwuviM0wY6pgGUpZrjzue%2FguQ4rmNOVAQ9srTsCuUdT%2BC2pIUx260IbraeWxNtETEDTUXgltwrThPPIWJPQYplsYZp%2B1quktbbJsqnnVDCNnEWnUop%2FQ1fsuhivn9gCyh7es3%2FsL70%2FCaMbc4U62k905WVkxmj2qVSqgroNMLrEyCRweE6C%2BpTa0LAKzhrVE6JHuCCDcxHoWFKoFPBfF5%2BbQGLXiL6EK2bsIDJrTx3&X-Amz-Signature=3063fd45eba27534d8796ddf6dcd928484a6507d13d8682746be03272a9c1405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

