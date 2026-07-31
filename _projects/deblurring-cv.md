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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVPF7UX%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T204947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1bkOw1OMm%2FywdBZ5NhJE3AhbbMRZ%2BVjO%2FJ1AUXNNLkgIgZ%2BIQek%2FGjLSg77%2FBLaUSi3v3G%2Bi%2FrhBW8qRvyyP%2FDtkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3Uwpvl6woPrGfwGCrcA9PSWF1n6RnnRSDxTwl60ldim2ezz1OmB5Y0UfaI0j%2FqDfCKlzbCF0QvLAUrR3N6TnfZK%2B8rQXS88DzrMgj3BHJhIG5ALVov3ndkLBLpepu%2FFvVFLo6vv76V0yXZqX1OGwYy1MVGOwCcbP%2BRQAR2%2FgT6v8WjWg4KfJlYCW%2BuK%2FGxDrhk%2BktXl%2B8uze91qr3qPaNVl7CEYpxrrD7hNLjrRP92iqKK%2Foo4D7uzeyEy4ISUmYE4z7fjgEISvLhWLC3FtRSsOK8JFv27btS%2FhcjQ9FpY1D%2BFdJL%2FHsR5P%2F%2FkgF0CBMP8qqzpnFWjzuJXzeJ0B3bZsEKMOlRQf9k1fV75aItAnVwwaYFcRzGsAG91W0LcjhIjvuDaDttrxCy%2FP2mx5dma%2FZiQqiM4ZtMqTzXMsOM768GsPbYYRZal095ILrekvXO6hkfRS4RzhS8nZH6nTpWH5aazyene2bRNAGZt4GlGS6ICzivSK32AAg1OfU%2BbeG5%2BbS7e%2F82cLtCyulNPg2VE7%2BE5zys%2Bubqcmm%2F7sIRu2pzW22X%2FLcisoNqzVN1coiBNXjL2HwkPYlay0lrO2kfmamfP%2FM48oukomsrhPQ3ABgw1HmnN6dvC3fdjXYuTiqFjHDRnk2qYWz8rMJScs9MGOqUBf%2FZD%2FS48aRvjXMVWiyc1fbehzIGWQ4MEu2YVMuTCN2dag%2F9Fxl70fDFT8VH%2FdwQ%2BF9BJXw64eqAjCpq2jWX0lqX2EKFjUROD%2B9hI3WcA1F8jy5FsGpzDSYEloHi1QC2PwWTBQ7sWKk39m0UqNYDpG4wxVCcUxn7%2FOR1f56Pp474JQjrxdiAaGPK7En%2BzadkifgZeWyV0FMfa%2B6Rb9CQ6THPjUMC1&X-Amz-Signature=06f091a121ebbbbb7b0d44a8d6f116bfdc9a573b7d6a9232356c46fbf8ef2063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

