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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPQ65GAR%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T184511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCgiGqY2%2Fp%2BhEGPLFe5mZ6iWvwsSIvOJtftPI31L2G%2FlwIgLVknYRR4NXJPqe8ZoP%2BcvUlHzYuxVA2YWhcDC2eNuoQq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDN%2Fh9TT%2BwK7tHkfluSrcA0DqvllrOJ2oHsYwhtNbyCFu76n6Y28tFX7rcJKujgqCnJwZEu0bjPscc6YGc8GTGgrS98T6hpENLhtRJ6T9Y%2FX69A13K2oS%2B%2Flq58Kd7jdXVdEVIhNdXBGwKBpocKIIPtO78nL2BOyDv72Kmaclt7MeN4jonOZziqqmwGYIYeKQVY0akdMtWnlZ7Wp1Nu88GonxTymIdwsvk2ijj8Bsf7Olg%2FRUxq02n1m0VeAQoLKYLSZ9pBi9ThVE%2Ft%2FMU%2FYrGQ4GqMiMouwHb5C4sSCgdddfP7XKpHbgor4To%2BPVBb16ksII52eaNNG3fLvQbIMBUf%2FU8R4xD9TEsXJ%2FU8qsvMlv3CA3D6NUKdx933TTuClzdrSiYQ4aqUKTVcihOhPNOm1mtMaeoC%2FFhGGg8b%2BJaw3lSlvEEKTXMTyO8RFOd2BvAlRB4j%2BEpFaIPS0KKANemRd2nYC2Hq6GyD2gVaTj%2FkP2X61NZGTNnKz0rhW4OTv7xrPv94oBRC3lnvnFn6k%2BnUG8gEtCfcZdZNaJwCgbX%2BBRwsZUjSAC1FQHkcQQXEBqTbm4rAJjMyyH9M%2BO7QljwsoJdSgMa2FkAjsvKLcI98o1Q7Ii3hF93a993%2BnifC0QI86dX%2BuX1l%2FjxID7MO7wk9MGOqUBubRKRhK9OtGsd7oTFpsCV8xtewhh1EqeRKiLSRVnAYH3wer2yW88auEEk3pQG3zppQn3SBF%2FYdJrQk57Abrzn20Tp986SBsGF58ujuKkd7No9%2BGsxqvESUQYz2sGfeql%2B7QmY%2Fu0SFZMZ9MYazAvtDNp0Pj0g6Yq0Vc4Kbt%2Bhb%2B5Hh9pKsIvtwlaa%2FVQn0eDlFhXO7PTlSS478QKj3amAIX6voCB&X-Amz-Signature=d5d2d4c6f7a94ca549cfd9ffceb3a2aa92b07b02607203ea63d95f28487399b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

