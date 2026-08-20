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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO3XR2W%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T051910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD793xXKAEJ354F%2FFIDFLl6SwJmznMQXQMnz0hVFjxWywIgSwSGrPu5fTEDUqnUlCMAoIN8MNDLPUGIgHUPVWbgSDEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAhBS14BBam8S%2B6GpSrcA6q7bFdYkugvu5W7UT%2BmNReI4GGBCxsPbs2Z9ILG0hBnUBMybNS4AMQybkMDkQMooxZOG4MOBEnsVjV5L0jD%2BFrrlcNLRelcKpmHrISH7YqkeETGRneb1x6edLSVkcAUuKHiz4YBOoksAOuBvzSfTiK8ezC6wHihNdVjS0Nh2kOqH19hkOYFR6Dm%2BvQADyTJo%2Fklcd2QghSpC5shTgVvvxhcnFJwgyuKxHQ7EiEW3duxgEkA4eZv7fR1dLUEq9FMmy5AzqSO2q3Nrjt0AWpSGn9e0upxqzsxn%2BEClN8tgPODu0HkIsES0C0u1P8FlimWOIoA5Zb2b60XtiaW7aLyCjJ40VRTyF9F5xXlSc1AJnz9Vlm7b9HAa39vT4IQXKCuTC8kKxRFubAN4oNtr1ynsD7lSHTwVssVVQpIXdmYI12XFTNcE69TA2nEAln%2Bcb9mOXY%2B58bhCRuxy7E%2BhULaeh3cHcfaOmsCGhcqi2%2FOTVVJuGGAC38jFx%2Fxzpi1ligp10%2BCtmBj5SHbRErPMgUsZ4CZq2tgalxKVibgBslok%2Biye5ZiSwaCGKOfmSNsvyhxSrDiYbRmNmaQynGl2bpdrpLn0IxoS9ruR1G0cP%2FxZFgVIVKSHGVGdG5IPIg9MMfpmdQGOqUB%2FSn6zPPgME6mOUBZEPBigzwXrRc9Jcatg4KWDPlOsnMoxWeqzj9efRQJ7PCCWDKByrEUxBBRL5nPUzpztE8W0soL%2BBDGHSMVcIbz61m5BUGQjkM5ZTrCOIdOW3C9A3roS2YvmvIIi8DuyNykXaltaG9JIkAq0MsoNU5bmgESXUFq3EhPav2tdIguVuS2E2JfddoMoM9iBi4jumEYaowgUqnNQ1OZ&X-Amz-Signature=7ba66b47484710df6e2ab77bd84f5e96240879416025fe9650242c1b81d1536e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

