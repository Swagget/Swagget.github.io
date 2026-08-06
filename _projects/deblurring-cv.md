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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBGEFEPI%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T072952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCh6RGW55LsXH24i1%2BNUrFTKMkOroRCtOtVw9f7nnFgGAIgazLk9D%2F8vApjlGgaCiF54T4g2GMcprrGin3e0tgCJbMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEAl8sVhfMfx31KOtSrcAyKunCucoHbS4BRxDRsvEVTfSRv7Gc50wyEwrlxodWjHw0qGNUOMeGNYSlp%2BTckl9yG%2FOVH5zgCNuOweEjs5kcPqOz%2BbthyDoR1d2%2FR9hlcmEkeWxgpanHp9RAJRYjBKqonXgGNyiDpnP3w6qm1y%2BcuC4R23FGZ5WxAkoSK53qhbAOvPH%2FYnB1DX2JGVkgsRrqCccmrsZRNO0wxYAuI%2FmR6TnQCCU2FRGfMDf80g1HzJmbGgcCM5iADE3FSCZiVP1UvksfeQoMmoUwA9mYNoiJvwcxjUtjjWBwBx1EnbOEyY6nCcI3kWLzP231wzwpQipwVsVYf1rL53LJCfXfvG4IGdzA8U0OHF7VuI%2BvtRF%2Fi%2FXf5oekIi%2F7nWrawnd5h%2FxuOI6pliRg3hcXg%2FumoW5koagEprecQtH66pSq2wKvcJBXvDkYoVSXrFryAfHNtTqxwDeacDuGewRq8ygwwSdHw6owN4vbgr2MqV7%2BTcs7dFdI3Km%2FBfgEMPhasf3%2Fsowgg7rp4M6nuuH9h84dpP7DXtz%2Bi25jGAor2fC0g2YNkC8KFWWkMuFesAm2IycPTFcdvdvyXZBwdddl1yNyLpe1FltgpsMQcJ4N7Tap7d4bYel%2FQnyj9Oh8p6USyAMPPS0NMGOqUBWnvIDHi4zOLLCZQBRZnkTIMzDf5cR4O%2BWaWejNRvjzOaqjIevBcJMId929u2R3KnAxsK4N0eFYMYSbpEFMb4W9qdLJ5Kpy8tlfXmhAD6mr%2B%2FcDyFNpENuXwtEwzjH%2FDjcZ2Ob9QKVOLtGR1swiUjfG1uzJv%2FMVN6kt0DNpkcMlZr1kGbBOrF4TX8P2199BpIENXV6F%2BulgoUKp5sPiZDfRooy3lH&X-Amz-Signature=909e0b79577e6829a57a236d83467f9c4f6d30e5baddf4d95c7f882a9e765805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

