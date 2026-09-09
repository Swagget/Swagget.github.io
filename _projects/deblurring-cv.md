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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOE35XXD%2F20260909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260909T233559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoj%2FWTMLQ624hwdaTxBgZ9aBm9d05i821ZCG2xtVGikAIhAPXj685%2B3YfAFnIekloGw0NwQoV5LvgD6qJTgYTONZ3XKv8DCHcQABoMNjM3NDIzMTgzODA1IgxZmw0aiuUDWZjGIisq3AMqTeignIlfVOxKAhxoG%2BccClwya%2FVyV8Rx%2F6XavIn%2B5ESCfY6SmBoHN0s%2FNxBoQGLOdCyWi5avGlhRfsrQLnJv99%2BKT5%2BG4%2B%2F86R%2FRfauubR9etxxmZG3Zh%2Fqy%2Fg5jH8KohxE8RkK8gPvox%2FXIndnjmCo2T2qx5nmsp3SAq144uoNIdAWFgJgS2mEs%2BM56G77gdezZBcVBhDcpMS1akO8P7DaoWZvEIDv2GpUlkEcogXVJybpz%2Fq%2Fyl0mndyNm950d24Ez25NF0bLpLlFXqbZGXBEB9uLcmDZYlYfHIoLWm9TjoBqUJz%2B3e8adcjs4edMdHi36KMUrr4%2FLWatNy%2F%2FzRd1NSp%2B3JVsMoDCX6v1MRszKHlRgiVYDK8n0nh%2Fj75hbhHqI6rchuWlKNKtmNt%2BeEYJMGeEmBKizX3G0DX8fzM1jMQK8zIPFuue98CGyhats1ITpMbgJgv%2BiNx9e%2BOyU6RPv93pLDA4Me6GFUjBDQgfOiOTZbS4lfp1wNrIxNEF4gtWGmS2KJK39kfKfnkjctQsOx7yMNcXyJRbFxVQUGtg86UkldBi0055TjVkG3t1hJwYjaZC3kV%2FKw5Oopb%2B1DqcEGqIlB%2B6LdibFNCup1N0rsZjJRcfS34xR4zChs4fVBjqkATpm7%2F%2FeQkIugqhmpk9dq8abX5bk4s8ADYRtPEtqZ29GEdJvCrM9%2BuAY%2BJ%2F%2FBMoKMTyRgtRYeE%2BGSPNZl0bb53b1bi6GSm9TDBOP2f%2FXMsaBFR%2FzVJaQjiAONos5Tb1aLUsR%2F5LStvaPM9AD2mg90uYH1F708lpw%2F71G4iZsnvZUbKJPqT45qYJlabOdIomx8ttscUywh7Qf1zlNlaCTXY7cbd0L&X-Amz-Signature=085d146061df3d546ffd84ce4eeb43e307f5510f2b71167355e69d44b4255029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

