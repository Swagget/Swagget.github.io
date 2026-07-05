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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHVZHYP%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T214717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCCXi1ccqbh85RH3b8yTtPo%2FwJrDkhz2nsU3wlSVxjpIwIgeV%2FJ8TdDon%2FAOZqhw9AI4gesbvsrbZBCKXuuqQz1yAwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHTIl7U9ZVsJM8MQaCrcA0fY3PkimP0FrBDAJfTjszaJbyABnKO3HUEZNue7%2FrtIEcC67gcVQWzOrIZ1jlZI93G9zTnUccumV2xPb4g7epvtwFO9opH3a3wWUTvDoSG3ZGByJUVvSnrbPvuzTw2e6ZBjbQ0iBG82yLCC9grXcPvxVpCT3fAt62PCAKi4ax%2FRhy4JZu9O%2FglUcgznfXIXGCfFpnZCyqYG5Y3AFaEPZRgoPTgIwS2ReyXl0RZereHcnrQi6SVzn8g9a04WZgaV8vHUjZnPjA%2BfjSHzf0CWsGqJpm2FYt3g6aKUXOa2InaqhJ6XeZPoeDLoM7Y%2FASaWCMsoK2tUVKNYVfSSQK3L6MjxpY7ukcT%2ByPwv49lT01NVtvPux3%2BLSNWC1pxDHq3qjyWqWTl2Q3j4ImXFfSVhi%2BKeen8%2FodFDYGUGASYTrFF2RuYoyaykM%2BsOx4v%2B9BvO1Q7S650W6OfKtQFFJBS0pIDLqDQpeqcQGPTxBdt9jQ8GGHXsQfOoxRTk5Q7IruxJeeD6jrChFbWP8%2FnRFhnPfhkHi90DLatkJxVwUf9%2BQkhwQHJpOtpTI8ACH8lo7m0To7chofTCrt5DVkWIx4YxEQNfUl7RXxJZew8oPpPRVRw3CtXpbO6768dBmQ2tMOqAq9IGOqUBcEf57d0AhaPrnGV4xiGWhB1O%2BK3hXFQgXkCCSUcEGMAyR0MRc9ctLFsmdPZ8Zlp9%2F5HmmndoKZ1uaEv4G66IGouotGmhIO8k79aNx6zF%2FWlpdnZtqTq%2B33MbWttYCafBVUe%2Fq9jPhsBjk01RthBjKE1rFwu7mohY7yaUs2z37pLGHRZlDztBR9QgR8apZXAVOKeX1KjUyLWR2S0GTx%2FAAVPLPL4T&X-Amz-Signature=dfcf28dc1a6f86c67053eea02c738873a2b7594ee7bf580f7a9e0bd32090a0a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

