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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FE4JWG7%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T025439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICPvQZPczRUMiFkaX2u9Szg64xEfcxVKyBScbHkT9oq0AiEAhgGXlzpBBq0D7heqIi%2BeeGQde6TqLIr4qHlozMQOx%2Bgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBrwAST0XUjxq7fO5CrcA0WzqKvtNuhhBJmHKm%2F5kZqpiayyZjj%2FZ0WbK%2BCG9uAt0%2Fw6Q06LFwO0GMNd%2FdeCFHPULnU54mD8%2FGzukr7cbVOQUDSq4ac48wCkQMOA8zsSpYH6pvrZ238GjKUZPQNwKmQAMSRRYNAMgz%2FWZPvr%2FkF670RgS2VqvrNqe4u%2BnGkWsRRhRNFE7jyxysQGVhfS4vR7Tp6UOYQHTQnemAySdSq0o0vAeHvBXfJxjk6ztmUaSfUOlCIDhgiu2Q43oR3MTcwtAwUScoH9UAUk4KgCHjYeOA5twssvTA6MyFpyq6ZT9TF%2Fi8tLnxmDM3QHxeolEdgjpPyUpDypE1H3zYtRoRFLo3vNTodjZTCJfxFuP8oAI2K%2BAXaG35wJ962ia0RQurO8%2FKQgin4ov%2FocJin8e34RV%2Bb%2Bn%2BBM7SgrBqXyIFA5xHonZiVJCinub%2FzzilEoExzex3G0rxSE%2Fv5h%2BeT1snT5jKXMbdACnqiSZ9dmAqkoImMU%2FwmsxvI%2Fhbwp4njLUzO4D8vihl8hu9I4R%2FglAZhjjrtAavs8I8ULyrV0B%2BQUTA4tx5259r8kG27Ab2daMS01I2GdJAxqtxln%2FUitEwtHZPFb9ewHr92Su0uvgG278UQaH2w1ODNDSkpBMNXT3tMGOqUB%2BbFig0pkjvQzfMbjX2T95RmSG4XS%2FnAU2Or70iEJNktrnaUt8Fgx%2B1vzNfMbqSWyUFBSm%2FPniS6s6vVf4LM7lq%2FHhnKt2mVEYb8vOCdRQQSooTDZUL0C%2Bmrr%2FTAxuS8QdiqzmpaGhfMI6e%2BfdO3Dxr5T%2BW6MX%2FrTDH2mZ4aWA9i%2B07LH3ZF3mB%2Fwlzp893sucZqEAuC8Ni7MJwzK%2FmFHJA1kRXeR&X-Amz-Signature=eacb89b165f12d7fcfb64eb4b0296e0bbce2f03e360bd197f1011297135e68dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

