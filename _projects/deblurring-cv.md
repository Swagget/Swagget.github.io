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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MV6L2ZJ%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T205338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCCFSSVTR0gT4jS14d9Z8%2FRNRloxcNg316sHyeUNegbWAIgPWULrTMPgzhdXxRv%2FZPktMA9DH1WqeLW%2FJaacdcca78q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKXZjo00L%2B4TH%2FK4FCrcA3SKyH8oSMH%2BQ7uR3zV%2FQE2T9%2BOVXko0CFXoB7sdVA1O19UJSbFbkLdS9yhfzIDXs91joxDfB0KbWHX7882BsVIbJwZsEYMXQVAVLnqp1QDGmWEJrDsTwq4F28%2BfHiZ6EHRNnaVd6bHOFdjBFYVctjKSJ55dVBdlKmtKsMFAVPUJtSXfOoWY1YBGnckaRpPr%2FsrjQCNxjkejUBZDR5SXHOE6Vk9edyeAIrftUlq6wrx3OrlLDXLurKcCrebdpqblfxyfShAdWC6lWKxH9Xp2PtkecnSKAt3RMDuQsNy9lMTtBu%2FL3o5XZvK%2BMa4oRXbTed62R6fUUkkDGhp%2FOqsfoFZ%2B%2FZlMZFqF0%2FDDthbSu%2BYEYIlOlS6uwvZ5rHKtKL18W5tbOPMBEQ%2BfYcACQUXhYDNxVo%2FSlhZ2faHwsidLah3qsbTGmNQvgYlmiSuJpleIjfgKnC%2BN0YMNBPNMAsMtSwB2z8f%2Fdxi%2FeObRIkmWqwkHeo4LT1fuwhCoT1AsfhLNywe1Si8uvj9YWzywFMtDZiESo53Ef1%2BkzXv%2FtGFPMi2BhMinteQwSsPOFH4cClzR3y6PYZNRz2N2Q2suWJtW76uzFDIqwR3T%2FgikIUK1QbUzd%2BJbTruuM0HMzg60MNCpztMGOqUBunbDzwQUEVQYtjpaHdcoZ1BHIsvC60vhaKsSs2bz8d9SB4dhHthTjkRHgNJuBbuipmnfna1dF6HZdizY16OoRsbmVWso0ml0x2ESKZTYaC7Iun%2FLKGX278CaOTJeFJ2nIHSVDg6k%2Bc3SlKPNh8bewg7ehfp3f5L3s9%2BeOElBYzcYwZTV%2F3kUpHlekIV31iovc4W6y8ZjGgl69ZigtQtp4BcXYywj&X-Amz-Signature=c1e4fcfa3b00145feb6b75e639a06e461087e055f12296820966e9b6a73a37de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

