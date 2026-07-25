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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQENIZCB%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T120139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHWgiQn2JDHlHGnjWdH4bP5jkrWwpJM6IJeX07XselZOAiB26DTLsyN06mykGX%2BfUrhNgAic6a0ozqQugU562TsChCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMxMHYSFYQaEzKRC0vKtwDXYycHaRo%2BtsdwCFq4ypTurgSiBfmNgbGEfLw9lgxbSQhfldc5W7FW2WszQEIKLpWe4F3Ds4gag19MFLNkboRkCB295ZjRPL5%2F2iliWcRFyhYg%2B42hNBLPsLgPmAotYuMigsbN6FCWcCiE9KQw2ZEPtCWzO60%2FVSsgRTqXvCA216%2BaxyVdZhGUjk0VpyruNxvoXIrodS%2BVrKV0gaYndIhpKtjP98WrsWRs2bTR7cRUdnP%2FhecC1xrRLTV%2BKLtoC3LOsTV%2FyBiSUSiC4tEz4NTFDP6%2FHbpnt1VpQclYYT9deolrDs8n8YbybW57L3e6G2iXqtlW2WvC4OgC0%2F88gRTOaVri1n%2Fc4aKTHXZ95MdBGdqhR6OpdbkPVRLiPcSZLp%2FhljQye3oLPCFDIO3GaftrZH4f%2BIiNQVsLjUWE2Uw%2BZ19lcWzZgWQwfmqzcPeiKkPW52uii1xKfj6rS%2FPqPByvJuserTfyuKxDmwWcRKdd9Xz0aJus1sZFIJKOkLVnnTCTO0kCUWaoLhTaR2Spfo5qAWaoyPPkiZc337BbTiC08%2BjX6rFIARwV0czWo%2BsEGuWMouuW3DIwONM4wiGhLt%2FT3mRtDfckFnlLe45AkU7sv0A%2BhpHrzrWRsxJWi0w0J6S0wY6pgGcBVpOiZjno1uSHp2BBiJbdFEGO5zNVGZ5AlJnzcs4E0pDIXbrrhhqHcKONEloVXdv5CXnxtYZVQjEd%2FEHG5Wriz9DhNZ%2FZv%2FpPzw27P%2Bk7O3Ppts8SBPyPxTzCcNmeZ4ZpWsst31v2fUuUOtl0eqS05l4Nd1sGyLafbfQ9epl3YX5%2Bvnzknk%2BK%2Bw6biRw7gacMYDd%2BVYz70nH3FD7P49vhUeKS1xE&X-Amz-Signature=b9ec563c00b727726a317acba14d70387620c4970257830710637b69e8f257b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

