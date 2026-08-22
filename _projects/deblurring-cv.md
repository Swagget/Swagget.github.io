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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPSR4QXQ%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T051525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDITN6cZ47p%2BgncH76vB5Xt%2FH9Gz5clw5XsYQreKE2HWAiAx%2BmWSdjuEg2FNHv545lquIokoef1h1u8bozXWMdPjiyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9Hfsey7mpueY%2FdCeKtwDvJ1ACSkkdCzo5tA%2Br8YNHlJ61RaQIXfty%2FPoeatUOQE%2B28b5fk2SSrjislVPjUZVbzqPgHa0VlkJNjCTkxPLKg%2FyLUGeNcA7THmGNysrVQmQ5Je6q3Xa3KmwzkGGwlioAkzbaH1QWXbGb2WQ9PNMa2a46aGFyqdHYLngfZkPG%2B%2FIFLDp3Fmm%2FHMhVNN0ilc1v%2FCF5nouKD%2FZr2%2BgsDOpkRe4%2BmUKKFL3L%2FQ2N5kCKwz1WDSr6dA6jSkGoiUF8rqQpV%2FwkaAvCL1myLaOQcipzoDp62DU0On9KqNGOMo8TxPguTvGL8BRO8gtdynKDK883s8KkU5ZhlTwlgq5sE%2BmeQi0%2FumKhSTWrOW0FbkUS6qTjBKEpTCmhnn7zvyqmLDI8EOPw%2B5sZoppNiPag10aNOg1zd0Gh1oXBXkwVedoE5FjynArpnNuUbKGc7CTkXjpj%2FoltBGt%2Fhm1Q0G7Qnbk30hsulKtCVK3IV1aTS9yO6VA%2BrjnSaS2ctb5RHSato2O0lpssMgBrzQF7BKdA7%2FnMo4vxooZJ7RXzuY9U%2FbpUtnc3l5C62mJinBsmrhSJE5SRCkh8%2FimNQF2NH3xxR2nshmoo6TYH9oZQfBeoW2Z%2FgVMuhRUMSTrYYnimPgwjMKk1AY6pgE4KBn%2F32WBxPEoLWZ0ghOnHBOvw6OkvmoIMPica2eoIf9Jvii%2BxwH%2BWv7WZ261TmG%2BAhDZgJsRw4%2BkzXmxdNe6fhRiOV9H8y07Y0Z1gbI9rGG%2FWazAiywsEuM5dN9%2Bij%2B5Ip%2F4KDDWxut%2F6HU%2BBBCF%2BwG93bPrG44rucTQZuium0LkHiQ8ySNJlZGkrfu3RkLfKS9JAx7YTttnEToegzLHpeeI0W9L&X-Amz-Signature=da33ceffbcb4bb93983f78e564a41cfdba2a8db20bd7f97fbc204e639573f8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

