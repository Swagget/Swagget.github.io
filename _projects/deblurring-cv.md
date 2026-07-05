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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YWNCRA6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T014603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCkNTv1hewZTL31dUeKEvUosFhI79npREgAcybhfIA%2BigIgVPknaVVw4QdtzgGcUA%2Fv4Rm84%2FHiO9jYVTuIpGjjEiMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMgcGYUKy4tYZDNEfircA6KxN2oNdu3CpykC%2BUdb%2B3Bzqe1Fc%2BOCYTodvXefUcN%2BXr946xqgAqBxXQB%2FPY6HK2ZLoYbQDgTnu6jipYdRgEOpbWVk8R9B50NZx5d82vE73c%2BhYdVG1vLfOWW9FqfdRlrBHdOpgjAT11F%2BO23Ap03FJuDrkvAjCRP%2F9iXLstPr779%2FZbQn7nlG89TFygAbDd%2FNfXshLTzns7JCs%2BVdXnq2%2FUpvaFq7UcyhEQQfBLhlDlTXz%2BMmOedeCMVV1PP2M4RIuWtjS5qGZDSnpPyzBBkvX6yw510t%2BfFrugV16FLZ3CElPoDGATwIqczQwcMPlK2jo6KTu387XDZAQ%2BAziNTptxRJaxZ%2B%2Bz6RJgE%2BpK%2FtrDyFLzVlyFADmJzdif3XKHCS1YAXgcA8cgadlesCKGnbFrN9R8jsm27Hc5tty%2B9PZFtO7hR8wtuJwRkLgCiqfyocFFEpkQ9uQT8RhEnjJvcILER0qpmIn8jug5tFfrj8ovP3lr8ueWJcXEVJF%2FvIJB7bnjL9uR1FWb%2FFts2TyCwan1h%2FFL8N3zq7v%2BgL651ubfDNT5UbeelS7j7MGsu3L2Q%2FOSyoirBWs6OgrOikglpVN9VS02Kj8TBpx7CbwfCVdktrUmrUnSBCaohSMLfaptIGOqUBaqd%2FAEcEAzMG%2BPPJ6vjhOdROxD6XV%2B9wEQl0ui0m64PtuuKabuP%2BB%2Btlx7gh%2BJ9%2BrQvXYQY8tbzO%2B%2FTIfGLQf3Yd3z5GL3eLC1zcW4jq2%2FERs0bWyNMHntOEFmJgU9AwiB4FOURbnpVbplSU%2B28BBWdXqiuwpxbWs21%2BmiwY%2BVBZk4GhxGuRPHqHHx6dyxwuOC8b9qEOgP7CB8UJ%2BxhJg0Vvi2SX&X-Amz-Signature=9fdaa341a62ec9d6acb157629bd8a0d300d8200ceb4b1d5e639cf84b614a7b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

