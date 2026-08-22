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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH6TUKVW%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T020638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRe8VB8ZYT0%2BmH3Gauj3hQ5WqkWF7XbBU5PXl1shgaawIgeQWhTVHraTY%2FecMnAfZ0cej%2F%2BYVug8IDxRfCz7zIp00qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTC1nsp1iVNQSSXYircAz2HaGOlwv4SJiQ3dEIuoMHuee%2BjDcl%2F77x%2B8PbebcygvB%2Bw1W4XGPB%2FlUbHx0T1ao7Iaw1YQQd%2B5x5%2BKOXACO8gKibQzXZOlfFoZlFEcnYeisIliR5DEXl7l0JdN%2FMg7SZrlknBGDUuziLf3H8nlgUGZut3IR4uuFqUnUIVaSDa8HMElRh68VOn9y1YadaP3SkOCdekmc%2FDN0QeFfNRisws6SamQusKtmkrWLgdt5wYFQvinww2o8LxxBWKvKax6T6RP8gPYEjNw9sEPlBN7TzcCvl%2F3LEVmrACHPVSv76dvAkX4Ajs1dc5vjTQ1GzZgyCBIJEMjSU1SpT%2FWAeLM4RR8YePhQXoCYei%2Bqv4KtQuHwzpzpBISlRk1x9BXJFIvi5R1Ste1iTmZmmKi%2FY5M1rDb%2BakV40BMX35aQWNRsRrzsYCXzFycFjmrzGIm13P%2Fkl2gY7DH%2Fb9X6zzZtDuwDs38kS7QOzqogJgchYRAs4Y%2FQoraCuBtRmXxM3d4yTCE%2Fdc4g7asBWoD9Mwgb7yMv6wIGBj%2BmGRDuArArIjSK0UYnOy3yVxSqIcCcpQMUhGPYVdNFcercvz8VEcP%2F%2Fj8rGHk8HBSz76p9AA%2BaGqwpAQgMbhmlsavUsLpTmMMMyCpNQGOqUB5xT0%2B5ejLxZL3MqqhWB8LNuXxK5dNd7xfxmJo89asEHays9WbpYIH0%2Bye5r6Ba8v4DA%2B6Q0uESdJDbe4fAmVUjC30YsMneDp1SYZ6vpdcUlkoUZx%2BVArrYgknCMa4yO31QCOn0Yc76e48POrMdjjCH2wMnBQN2VGEzLC%2F2fcNJ2A8KbQTu2idA%2Fkd9dzN40aISUuyzIdmcRmsP9VECDb46cH4rdy&X-Amz-Signature=0e9821cfc2477b00815fe821a3373f486fa49ea7a2d3eadb292e414598e1cc53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

