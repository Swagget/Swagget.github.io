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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6ILFDJ%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T161607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP6eLCDnbsjvU85WCRKp%2Fh0C5Pm%2BKp0tmrRQRLiVszvQIgV8lEFrJCie127WWpkATEdNcAJMCtL8CJmW2Ai0upUdUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDNTisJwtTLz69SCaKircA2ewBESJswUwEBlFs5g%2FwyyusABw7%2BzTk1HmVZVwpeZ0sBM%2F7sc2EiukyVNfXkKUxypMK2gszReK%2FJKjca3DVC1B1lQUCPwaX66XVcr%2FTSBjfl71hZScqcz4ctrfcWbxyYd6SgKiWWTKdAby0DUfQg0Zujp3wWqRBwEPDp8dmZjUbCPjQjwkWITi43EClXXq2vLr76Wms%2FQK6eFb3nIcmDuhs7GYc2golFcfx5rZ3kT7816Siu2ctKK%2BoC0Ump3DOABmz%2F%2BTepODCPpTiNGQz%2FpYqJZ3ew7H4kyyVJPUWHcMz12AzrrzHM41JSY%2B0%2BpkCdrZxRxRMSHNr%2BkldOdQ5gq0ulWgCMjGjT9Tl9jKSDEGlqKH%2BAHcm1r7zGVUGSA0YQF9hCLz2ttz1ygcOFftvSPLdreGCbixbQ9M6RolzEftgWH%2FRTDOCU7LP4WL94kqHVPdNoOgsUGykvtmitrZAL2VVnA3iWzxc7Oxs0%2F7dK50T1h0Spd21JKpO2YRzYLPO4kRs88xGZ0Tstu%2Fl4R9Qy2AFmfHtz5dPh8PoYsgXWGEaAyK%2FNRAVXPpMUYXYzlTx6ycO7f5anuZvoGM%2FvY5K0LQlWBfmaiaLtvsH1Eqqz7DeFiDVZ08UZcjY7NdMMqbl9QGOqUByAh9E06YOsnESi7IrdYfc%2FcXjKPTsrQOiY3nGsHN80HYw0%2FWYJh4qdtNaQLFEjsaJlCP5tk24Ox%2F%2FujHAVZEehDYQBevCYCaht%2FAiSd18xlEr%2FNPez4rEMD1WitpZOnayWRDy820BkpSycp65BfnOy2rqX6UyaE%2BmICej60GlUYaGByvsBUhPIJrcAThy68wXnsmelCm8kWG9ziP1m0NUD5sbtdv&X-Amz-Signature=45712f5977821c1d94be941d49eaf04777347529456c78b25032d55e9683d652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

