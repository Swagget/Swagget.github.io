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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPB277D6%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7PyIaZX1ZGVU1RR%2FuYh6kjDk4Z5Y4X50Zb1qCgdYFjAiA%2FUSVgivQUZCWcegUAjJ%2FB6PMJodHu0VHfCy0bYiqjLSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6zDNTGHf4xYA%2Fv8BKtwDZkj%2BNHIR4jG22QPQteJvGRFGASZMk%2F1xc1hAWazlT4F4jUGXi%2B4QI5S8nUYebgCNxSxocUryvYJPVOBJ3iuFZzGCO2GvqsMBAba4cZaJjw0xnd9yoiirwzfneK7P2nu29mVlCiBCGX1XyPlmhIxInIOT2qfTAWgaKBlGqkc6ZGldqhlRjEZVZ4lqULdAv%2FK0VZsjdWxCoLO56kYYbG0M0CCEca%2FBkOFK9zGBD4Au9FRWJARg7KKTQM2I0xfOMwtru5Calix9cKxyalU%2BURRgDanMYMJ%2BNKTVMfqRUicg0wnD4WbDFWzACspPL4eDqiqWRbNUh6TLYmT6Yavxh6Ms0Mv7kDnM11TqKSmweYv8zlZESevllB7V76ncGPlm1iWRweZFbbgIjppP4fKfjE9P0fYKAGR1WroQCj%2BN9FtUUb%2F%2BDj9gCceMQihkRrHWkJya%2FXnBu94etzgh%2Ff3UBiIJ0kB4FuMIN42IsUitylvti%2FzoRyd1NyE%2F3Cs8qzNEo%2FvehFpj%2FYO8q%2F2lRfgnDO%2FVaR9WEqX%2Bn4rkDnN%2BBMoecRkKyMY6nZhRm5hUYxXhWmmJwe%2Bl1qLOFO6CWWyGhVl76gNHrRCoCmQW%2BiUwMU2R2xM423XG8rWW6Vs5aOAwpcOm1AY6pgFXOM%2B9soL%2B64mlXLJRYcdogFg%2BVAXTQfF%2BMJpZgKadxt%2BwftL9erOLYdO%2F0Uq2IWq%2FvEL0BWIUNom51KIfG9reQjHXwLv3JKvcspap2y2s3Ur2BrCR5m%2BCz7IhX7mr6TuTU2DWkN%2BgDK9zdCuOXUg1r6eFK%2FE11snEN4ia%2F4vcl6tg84SRH3dC6ZvxJtlkpKCvp%2BQRg7v%2FmZ8mmTuw969J5QayFg91&X-Amz-Signature=365061ff35d024b83abe4918e3ef871cd19965359ab6f23cceacdeb069ebd944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

