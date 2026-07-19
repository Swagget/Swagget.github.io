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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q62EI6Q2%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T195959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD25Jbk24%2FcG3GuYDItn2CamJUxIWaca4YYnu4wtxlerAIgbXMBIqQc9Rs9s2SU04NxyhwR8KFc0x4FV9Kr70mGT4sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5wfgJSmFoE08GWQSrcA4R7AcqyYcD5bpV7SMa5jNO%2BvKf9qZ9VlOlYzYQQDHAEPVG8DjNNw%2Fpn1p7X2jPJ3VAWCzsFLI41tsGKWCj2WZd2SgNSvEl%2B7NqA13f15uz%2FKsdtyNUYyCACLKryDlsmzKami%2F6Mv6UsbtsTlYBjMB2NpfC0qP%2BBN2jxvgYEcW6pTfxR%2B4MassxnTs8bYocwMajiBnumwD4EE7xZpYtVtxekanWMm7GiPj54wWOXs0V%2BJ1lQC5vndNVpTz7HkdoWExGBZZcZjh3h4rAV9DlET0%2B2OMxfN77jY4xxH%2Bvgyj1h%2FHczMtc9kBqzGHq0q2C9MR3I25ViUTweHC5t1dSDnRuBrk1An06Ph4vtXLRvZxA5bBhvG4XQMOWRkg2niBr2zhVoss0EG57TM%2FLExT6M4TYGwEKZwGwERp9GoHWeBEbYjO%2Fww34PXJ3vwO%2Bto7Z6mn%2BzXTIIj0fRGlL6Dr5jRJRN0RvKXslzvED7SNnnogjDPF%2FKUsLLoOx8cOGvNFNV%2Fj1LyN%2BhRLOZR25mwvH%2FnJLFqKT%2B1tV1jaz2zEdnfMcpEJOEJV9gY1%2FHCXaBVWRPEj%2BWIBURMIxh7Hg3L%2B8pttSWpNUBX8lQFvHUC1Ow8sEDucFYW4OV8rNuoSwcMODB9NIGOqUBKAj1CILK9zye5wL02ik3%2B6aYVNr1mxQ0UH9Mjgc5rFklXdg6RjtbJy1vBO1Rg9p8CsBXok%2FHfA8dEMeE71hjewCAtXnsuPF6pKcnPnRhEWTIJ96ucVj0y2O%2BtMI%2FDmeqhnGBPCaJP8ateJbGjSB1e08FGu%2BN%2Fag4pF7A1Y11bi1FYnoXredWpb3w6%2FkriGXr981SyOL5Q5GHpctZ9uqjyqVWh7O3&X-Amz-Signature=25bee274b40e1297907406117e6b92083268b8bdc529d06862053fb8c3a61946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

