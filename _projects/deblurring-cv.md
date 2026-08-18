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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SPEFD2I%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T020726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBu%2FitdxBI346PtHNf91t9aF8zm1kwodTyh1BGZEGDrMAiEAkI3%2F4JJvDUOxoIsCJTYTMhMD8GG2m4hjCnpceP16RFYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEhB%2BsPgtoc9jvphxSrcA1GxeO8I%2BLJY7JpLJ2RWPZqoKMPHuLUmM9u8%2F50FqUqupj2jgkrgfDtnQMP7jil6EFWG3ogxiynzk6DWtVPONzL5%2F7em92VfwwL3kAy5soBz04hNSEPLUTKojj48YbElbv1%2F3y01q%2FfytpW0MAQi0I24eLlUhbYlRIsBWnGeV4k9k8af7KggX7ws6QyfT1Ws8AkofyNduuS%2BvMSBFQgVlh%2FGYhSR%2FbxndjDvjhiug4uok2vdh5bN4TbmI60SoZVHeaR7dc2ChelfodVlWegxnGzgBx7HROaWCNd9GYUlFg2AopxzDNbhNdOXt8%2BNXcH6aHQlIIo3g1YbbU9WacaL6b3sRkOc3eC%2Bj0LVBBVLFlFT4igR%2BBnavb8I0ycVqCFk3abbz0D7Cjj4drhgE9ckucrq8cBB7D%2BcfEEA11%2FhoDT8iRNRZCb4bkTrsng8btkr%2BOPx8%2Bk3wIC21UUChCn4TjZNSKT8q8UXS8NZz26sQKmR4pxGrvheuGRXC%2FRE3HHwymRPO43HqcDwZP5zQcMHbptGI8xIwSiGPds8IbLFVChFcVaAvSmd3mGAKbYO5ZguBV%2FFnlpxQ7bnTyuxjUms4ufISfGPZkcfhV6St7aNfjfRsGECTPukoeW1frtfMI%2F0jtQGOqUBBcfxEAXFHqiP8mte2PG28uHZhTJ5%2FBczj000gnXwTkiqrM6RcwyehFtI8cBQbljyb9l1xvyxOECYNJS5vpQ1l8dVeGEc7U3FX6fqT9LEiH13WcggGCARFm%2BDvHeGOeMt0mnoT72LpM8CeBsE3JWepj2SJsoimdzh%2BNkcoy4qypWdqarKeGAWjcsZNz1PMy%2FmmhPpge1R7BuTBl1KA%2FtmRqPlICay&X-Amz-Signature=0edd61e2e507018b8e2b8885379f3f934f2faad4d137db4f7f552a94631f6951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

