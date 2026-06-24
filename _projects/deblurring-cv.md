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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KHTS5O%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T225749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGm%2BlMqAn6aWiypmuokRD0GswxQ6BBaStILfwTU983VbAiAsLCFqTrOAPnBfCedYHD1SjGCEbMmMNzz3%2FB0HRbLd2Sr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM2vemILDlmqR1dxaDKtwDlXazlmEEcsMSr0iBJL5Bd9brdeI%2FVvIPjwSUiXP%2Fs42xqHSIK%2FDju%2Br8M8%2F%2BL31zU8hZEostmWT7hWxcxizrUjB%2Bn33jIBlfqRgqgOX6w7SfeU5cmCs5Ibsf0xOUP%2BK6szt5BB2Ja9KpFEKxfRbaN1A8drOvhmEe%2FG2EqulKDoVy8MHyc%2BN1XDkd%2B4RHXCLyb8vhF8uJKhiaNWG%2Fsn3TOJLDxdunxpgheJ4rCmRAvi93A5gaF19JjGg38k7fOAH%2BFcMYs0T2Mq7TT7GsVFxJJpB6hin9fKxMgvujMFSVo40meyT4K%2FD2AXxI6%2Bx0g9E2ZI8J35oNCjMHGQGnI3pgaW0%2B5xshxZ6O8FgTpUmVpkXTrK9QiitFs3jipPAcFIheUz3Rb6pVhtY%2F9ww11CE7FDUimQ0qVnm2O3FDAfqW1nhz1%2BhBtTfBJYQFs3iI0K8dQ69GBPrSbFAWT8DrujrI0mGHt29b7UOWwfK05yPhV9yr7LHhX0x70du%2BoItXBMagkw8693gm64bS108DUak3%2ByqALC9Ws8gxeRz4wIY1Bf%2BEfMP4TA4tdDJ1Q3mc95CDO8rfCBJBtHzuPStePeosb7Z2oP6IlpcThV57r0Euz6Nv1fTYcJ%2BTbOyCZ7kw7aLx0QY6pgETzP6GFGXoiWewNvrNAJJ0OC9w4otUwsKWRFm%2BePzcjPYbFWtWAE90mHd%2BR1IBxs%2FbMuQgkZJeKq76UlKng3tvDuZs7kYbf16RBOMtTWm%2Fn4lHKr1Cc%2FBLGWWO8%2F5rOy3Gx9eDovrIrl4Z7xgi6XnktFZ9FvSveDAjyrfDsi%2BNAni3FgC822miQafRR77hVjPqXp3nh8%2F%2B4EumeH7pXNiU9fEzJ6pB&X-Amz-Signature=e8f2c3de0ac73b2dc2d7205a25020c3d4222adc40fd85bf5374d5d3cfa36baae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

