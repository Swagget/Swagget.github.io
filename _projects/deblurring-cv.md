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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU7HI6OD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDufD%2BEymWFc%2BL%2BJOuzGOgSnQvqkeAnzJjn6AlfCtfdVAIgT%2BI%2Fl0DOuMtADRHO8E6H53u%2F6Z83wP5UmoGl9PS3%2B28q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEEARj63FmPLdSd0YCrcA7pRgDuw%2Fhyo6qaf01CoNGLJXzwKHvwzF1wH5lFDlJgeyG8TZuzTHaPCf194HXjQF5SynEOSdnfvsZwEJrcaxqGEtsH3FVQ%2B%2Bf%2F8ke9NdctCfs2c4Sgw9OFTzP6k0FJquKfFaNiTGvdw03jR8eZSxrrVKsqfkFEeSpTE7CCZEfn2MH%2BtHcj2HhEZwzqpOZssXsqGWQHfvEjbew%2FIGqklSbFd3hCpaHaw%2FJGCxCOkCoQAI2VeJnpsmxzDJuhgW1eBfZIz95yga2xierFxgppAwKrXxGSYbaGSmATw5dcMN86gHLaXu5Ouf2%2BrroS9LnTBcWJTtIH%2F%2FdWwjMsSpl1HPjkFBwDYo%2BnI1P%2BpYk2teoCgbq%2FcE%2BX9LIVF8%2BucCT74twVNzcnExYNUkpYfoW2hXtowXlpq8rBHl31C8EZpvkJToX7WusJZLoNZSGJgr9QM6LtoVTHgxxtq2NqilXp5o%2BGA1raD9hqB7DFmjKRcBWZMafXwIQQsPYDCRJnnXS8J89GPe9nOg7sxFnrtJYhTFxPb3AgiLQ3Lm%2B14zE62ZOcvFPL3RghdaDGr%2BlrAN9kKvX%2FtCeMWChz%2B%2BUdbOIaEs5Uro68ny2jBYGcUNK%2FMgmW7xdSNin1sYI%2BfyU0mMLP1i9QGOqUBevo6DlHX5gJkulv9baseofww1I1oVVXqj4jTyVtXUts8PFue7SLP7HvI9zP1aI%2BYwCI6QT4UVRtqIqBtVso%2Bkn3hmUFMm4PemrnmTAToWnH5U3uwTIJ%2BGvYMO7Q7GRuhsaHijKl0hXwKG5nBsHXzqFQn6NT4KOV5uW8J5gssOEEKrFx1R0ijZN3UdUhQlhb10Ift36F%2F2NXueOPzAbP2%2Fu6f0Kqc&X-Amz-Signature=f81a314e3fa27d60516a4131f864f94ec375abed786ad503b1b4a2ac4cbceb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

