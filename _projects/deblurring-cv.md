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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643AZ2KVX%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0PuvOqEjgPT7cLqCoPCpua3dw9yZOWzYy9VeZvZ4EfQIgXm8RcEnSWHUSFYfdHqtxXsEcOmN4U0jNE4oHLFFHem0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4Ld9t7DVB%2FBDrIPCrcA1Wdvmk%2BVSbj9BCft5z1z2sFs2pumkpkcPHHMgjqK0A6aMDA%2FN5AUDRMAkHcBSiZpjyhWtB2WbyOxZKELXsZv7j3x56AUcPKkxBbwkoeWL36EvOf%2Bqfz8k5st4sMuWKmNS5XiaW%2FaGOBzi7VCBmctcSg6Gc%2F3uB%2ButymhZHUkcXHRxpyFtXt8msjRlMIw%2FvFV3WCbOC9D2cUpze7ZgA3X6ukOgDmGuCTugVrUcuB5O3aBTJuBFQ9tZMkPJkUrXFBE9ptKMZUDTMvZYgcR2chdJpU6RgD8TKp37kG9x%2Ff9f8FVBfEA0DYSnH5A8A%2BBNcnfh05VZ8Y7XnLp3QxXRS4r28ALMcaLz5T6SN5V2VNm0mrzubN3v36IZySI64dG%2FRiL5ZssBMR8UUgsqC0icwE4CbG1gRleJ3iFRuykRI1crPK26XkTjHTRQnucDbjt0Auc%2BHnW4Fu0oQ5YTOh3gsBhFlHMyXtP2sEnIOAKj22G55m8W4O4j0hlM8%2FsWHK8AShTHB%2BfE2pxmOzKM5294GnBlxZ8k753CBUX5%2FpGvJ78bxrhyDgKVL62K7nAtuh8K85KOKjx5N7VtUMjxosMh6ogV2v40UBE%2BVp%2BwCjEual%2BZOuZ1Vvj3Z7c%2F5Z%2FQDNMOywp9QGOqUBUFnbGGWjdMDpUn%2B2xN%2FalXhu7vRU5569rlxvNuOxDI6prwTNtN2KRVs%2B88LZm0rh20g7uxU3nJVZROWsGobReo2M%2F%2F%2Fa2uyE%2F9UvgCDcK6V%2FlNSNZs6NNT0Yhb0%2B6eCe4tZz8C3lnP8%2BLOhW1j0lKLiv3wxYY8EaBjPMFUnFMAYbLg97zoxc7cLOj4sjk6tGA2SvxclasiKOvX%2FTa2QT2DDfqeQD&X-Amz-Signature=f85adf5343c82679e11c94c36e7351ecd1428130e67433588beaa2c793034db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

