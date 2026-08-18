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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQFMDRR%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T042241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbNKnxd4Ad4%2BNOjAigqYkEKHCirtj2FRiluRRfNeA0SgIgTxyRh4M27ImFNZqYw9%2F%2FL98f%2FwIBzhyd7VpNmpbx%2B9cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAEXyN3yKkh6vJgm%2FyrcA0JIXZhpZMh5BikLs0eLPov7SpbpvbGcY0CTfW5GlbCLfinLGnALPIFUmzwJq3AB60djm3I1uYcvFZpZHFpgqMjdtda7Sio6%2FPsLRj3hwjzuxoz2LZxc%2Bawqjg2fTrpEV1DrV%2BoM9p9TU4bUlIEWCyjemKz5my5gKI7K49YxWwPnRNX1VlXtzdABopQNjG4T3%2FC5MIO1YkVl2leRJITY4l4QsrmnfnFJ2w5C6xIWmitNZ9bJ0bytdtR%2FpHc4M9SvzQ%2FHZQ5LMuXN%2Bg1C4qLQCrdD5DX9%2BN4DvzT9EXRCjulHIKHRaxzgFacyCHNvB0UXqw6E5I4MVOq%2FZu63Zix4D%2Fx%2BmaQzdhwh255kYTSZHizKUdiT8ojEiWXsV7lwNAWQLOX7NKSVfNvYBiSmDyhLt454QL16lWsADCX0rs5o3v5IP9i%2Byth1nSQQz44GVDdcLKhddJLBVeU6bDqzEhY%2BfDvTwZ5UryZaS2MEOleerMbxkW7ldifsaARwYFN59AO6bXmp%2FUMyDx85dT2BXg3mur3n19s27WQvSTKZyHsurME%2FmPFSnh0tJY5gRW%2Bi1rSzsqIudcrv04riwAs31jdeNLhmBBMpj%2FVUUPMSbdnVmN5CRURsJi1ctrihgciUMPuyj9QGOqUBMGDr7AqLoFnDcj9BOr8Pe%2F45T5FnczA29WjkmuFYb15JpfDsD6HxyaTsAT2d%2BZBVjcuHUN7wNRUp4zwBaMrqwkWmMNTUz1Ts817mlIRMPXl2uAulDztpzv0uzumEdo34FwKID%2FArVJXSCVbVfz4IGqXWg5Wr6R7LZP%2F8sjo5abn6KTOxku5ul3UNfRyNBZdGMTWgJgh8GGD5iyzPCLFo%2FsebTHfB&X-Amz-Signature=78f8dc721d022a485ea73a5fcb9bb82a9ef7747a11764d67c882119432507fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

