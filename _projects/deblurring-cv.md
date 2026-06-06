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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NOAAGI4%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T175944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXjLMihp%2FwZS2nGpGASJXRgPj6pUSE2VgDVFw%2Bm13ECAiEAoPrhTBSTnqxK3S3Ck36lwfNcxSq9Df1HP1D%2FraXLJv8qiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTtsFpWdBNoWePF%2FSrcA%2BKehll9wUSVaefti4Yq0QfiD1uH6NLqN8D55DiTzYNgOOmTezn5ev0u5ZFIbzsnjG1UVNSkN7tTisg5TnE6Cf%2BdR6KHh%2FruNRBvV6z4caZ9N7rk%2FPXG6VRRs9gHWstW8u4gUqtuPkX2TUe48pttEcdg9t%2F2K8f%2F1VoqIt2g6%2BAWyOT%2B95INAhWeSug50JCUeXFf0b2f4djaYhOBQjTffDQV9l%2FiVydM9j9iqvgpl0Pg2P07cJXlTmGNLWlixCe%2Bn9cXBno7Hd%2F7Pwql0wUPQ%2FNfFcJTLCaQX1iaNmbQUd%2FloZyGRefQq%2BGi46PP6xWaiDeByabiALUJarWRfBY27crFss%2FIeygQmip934zYgSbC0p4uUc6hlROBv2dALO9nbVjNwPaAqwyMwFTCAyDnGVwErr2TB1Xpwb%2BExow%2FmeWiZQQhm0tFOcq%2BCW75K8rwomqDHHJzUYpmm0aVt8a%2FX9qR9C48343TpujwzH3SXheYOUhP8Gw0EakKKpyzzo9U5ohDDCFDgoNsq5bdUdxRGtPetijQzUX1BdBX7hDxLr3tjBKbnTxtqwURItZkhzt%2BBlRoXsMwOQSgKFLqrlrG7tHd%2FTyw5ug7cDO6mX0QVNvouns1foObkuzuDLJvMLGmkdEGOqUBqR5IFh85IBnjb0R%2FPzlP5NrcSjgS7is9kmWcT6SavPUEEJ%2BKC4AXHveG5MTq4s%2B%2BPkKVxLqhNHjtf2ymEe44mXqPVJvU1AhoT1%2FFW1grbOgrDvQX3XQvLHf6mpviImK8IQIG8xYb65hLbszTGyPzjqyJpVnIMWPkZYlrXLZgsYeE39JrO4vE2EcYTYseFYwxeRUCyz9HLNtnK7NI2n%2FwOhRc3CFZ&X-Amz-Signature=ff5461f31cb740f8090b1fd3db4d710ad2fc72f7cfa7a754a936683f51178ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

