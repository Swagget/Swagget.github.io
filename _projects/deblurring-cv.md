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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXI4E4VS%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T185601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHYax1%2FXMhUlbZEkWshcYbXumoHNGIt%2F759EYiEH%2BoMpAiEAyaE3LmLWmHNji8%2Flka3MBm4JLSQFTfpF2G0cyeWZy%2FEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLkYGdL%2FpzLVsRaJ7SrcA4k0Y81FXTqEdhJEBweFnlbDrkW3IPa1wb6NdlmcFyxJNAR3puQuIHWB1%2FwwBG1IONKPVI2LBU9GhajS%2BQF63N9w7JZGCp0VkZq3aeRPKc8OX%2FvrNctXTyzVPzkyX4wLScTpfyap1i0JNqwJD3ICveysFlW6dYdXfiyC8VY8shjHtwKYZFvMGQnOwAcaqlQDhvHGkYUOrJ%2FAwTbPptgyuuXG%2BzWF5vU2fZJ8DNj002C%2FISGo%2BrEd49qwYWQIZFwI8B%2BFvDu9luoqWaDUuafU30bYYb7cev8JZV5kf3vWNCKBsrCgJhgl9spIFXAQVkJnO78P%2BKeq5Ivc%2F7ZSGwhCcmz6rI2rA%2BvNepROm8VLievaCv33pc1cu%2BE2qEH2COCMF7gfr5gqzYBGX5%2FIDDweknOuT1CMWrtwX0AXNRFaznRDJdFCpl1JS2jWshqpE45AdUrFmlPJBDqWQgLhppkEdw54YxxnvajIXuQ26KJtAG%2FPXkb2OBWub3cOoDBnIdpkamLSye0ZG1plutEHpKGeey%2BumRRyVvU7%2FuCwnTHvqZRPotpCUfGCE4bXntiL1Kc%2BWvJpcBQZSLSKdHHWyvxHsGdhjngI3sbfCezohqinA%2Fthrp%2FDy1wwjiaplwrrMJXQqtIGOqUBrTpnDlVM0vVtCZA%2BalsnbDgyi2M9ZE3NiHntdF3zhTP8H0OOUSJKpR8BU%2FYnGBYOwsSNGvDx5eInHyl1JdBM8Z%2F%2BVsI8uSBbBTZt%2Fw5%2By5llmkrcMHdr7dhICaNXHIbAJ0JoXSIaPNvlab24DVArufKTq2lFn7ePt1dpDAQBtTfO8V%2F3O3uM1k4S2VKut81EpgLU17oyY2jxCh%2BTPE9hsP%2BYnZxn&X-Amz-Signature=086000ac489bad065462c1467019c0eadfb59d2d749df81c84c3d52e2a06f4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

