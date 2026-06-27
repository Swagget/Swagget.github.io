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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJROVXK%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T142100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBL3e6ddKSrP87ZhDIWBlfFgbDLpXg2thhwv1of91ZJRAiEA40FHuMfZVN393%2BZzD7S8w8KjJNwqyMnVP8K8eeu0fHwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF4uomGOZHk96Vpb5SrcA0Awl8mNC%2BF2tNXbgWYev2u1m8iMEmufB8oKnI7SpHbdoPwOtArJkxyzaIabNKCPmSd%2FSnaTHj%2Bex3wZrHmnJCB1c0g1icfmW2A2uw9kD2dr%2F2Jj8eq7hnVHEm%2BrbGdtxnFnj775srESrnV7rqLIrN3KrvldAMLMMGBYibvDtUXzDY3RASL0CO9iK9IETGlM9pWCgRBoEedyNqekyIckoztxpY%2BxMjEgAm%2FIG%2BduVpJqe02IwUqyGt1UYcck2nFrV5LqDuMRRI92vk%2FjPXW4d%2BbSjL87M5kiCA8OYrrYiq0QOlvRzN88kcnj1lIB%2BY3C8TbeFMWr6q%2BEtQV54PG1IC%2FutAtgVhaPQ%2BcN4nil6olY9rRnTRc7FL9iQ6kSshIp%2BMQlKneGlr%2FDFtDmEVuxnsWUaOzfy42rbGqzb5Xtv5UlbL3p%2FgasuCdKrVOPqvQ7Qy1vYRJXhdNsFvMm789D7mdanIM2mrozPdutlaMtVb8rRGEypiaRxvs1fZQbinile1lcZf8urW3eWmphshPrXEoqKV%2FgKMr7tCmw1nLkgd4tFLVa5cHWTxEiR6EWw2Pl%2BgYvbbOHsJSZHbcx8ndAVvSTFwSrwsWTpyvChHCqVWU97MU0o7OcweeqY%2FKGMJ20%2FtEGOqUB%2Fd%2FKPWLuho11iUogo6myvNV0iIN6Xnf%2FCsInBAxrhjav%2BmhwjxDhn91BexPcITu16%2BLtvB9XlWlMVXh02xmzpzew5ZHi2m4d%2FSRpMBjDQSX0tmhfzFg8wbPx1ShhRK6rkZNxTnbeFBZyUZjewL2H%2Fyyn1I17K5fY5UbgFBLyozITCH0jUZM%2F3cS7J7Bd%2BWM8yVxboigrAsLon81DMmwlrcpD1f%2Fd&X-Amz-Signature=548996c82bce6a8a34750694cb7b9b6a350f4fdf31bfffa45542f5486cc73d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

