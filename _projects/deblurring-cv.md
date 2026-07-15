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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KJTG2KN%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T234627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIACaVb9SoyMGdbqlOf%2FFkZ6AEu%2ByDwQxJ4CwnxVRM9oJAiEA9HWqbogM%2BeTq6VoXv9ESSIAugG3YqckOdQ%2B%2Bf%2FMYxA8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDG15H8rjtCbeYzDMSircA8PPp1Crnc6D3RrVRvf4XBSvS53mvjVRT4Ea22vLCPBKfwHNOkjWlRVnwv8F%2BimUVlnbdMdtaM0TYNtodhX5hgc7v5BYXs%2FLgZV%2B2DUPM%2F8sE4trQR7qMw06UsPNMkbRCr8yOFrvgTGi8dLnjGeb60uj9iGxH8JEavp6IaA6CQxL45DdbitTrSMsvAUKfpOkHal6nqZKQCeY8Tv0yoakGIdggG7KNfNNyOz9XeP0JqjLgx58YPUa0YvIIkXgfkAcLxxytpxtjYf%2BusJGg5hBvs4mfHGke8AdMmxUlpnaK4QmLHsVbPWRMSeqbNKLaSfzti2bvcLi%2FuCYvU09Nq3Ad0dgAT4JPcxshyZLOG8dT57pQ3fum5rBCpujwNsk5GOi84yF4cJ9ZbMV1iK%2Fk4%2BshvgdIATDy2ZxMVJnR52CFdGbdHJtkIqBT9HgoFbcU0xjBDw1B9VTXFmiP5Q6lfcLNq2Ze00way9OJzcD6tY6fl2Fsp1jxrO%2F4r%2FDc7y2k86DdPTluPGeKUMSgm%2BN%2F8I%2FGSl6%2FvIqkZhkjjUQiEBhQ1wA0DF%2BLwk4CN%2BcccaxbUnXnAWDF6qkB6d7A4rhNcs%2BFNdhPEWck3rrrAZ77bwLJa0sT2eLfyMNxHOetS%2F9MN2E4NIGOqUBWDrGXgalZ6lpV1wuUdrDKFVekGWvo6KE9Q5Ot3ViTb9X3r8GfqCvIvJhykRdv5x2WubTJdVkN2Qlbggz%2FSeT0qQWJ7xLDAsP9QUdhhEUzHjIZAZ3SFfjZHAJ3OBKAS6ppAPlcmGTUA17%2Bc0T1f6eL%2BoC%2Fh%2FsXkRVjv7ewXP%2FZcDHwtHZR%2BwG4Y7u65ERGTV2FIWDie%2FqSZeoi0itVn62s3%2FYMfK%2B&X-Amz-Signature=6fef1734e918a276f2f14646d90636ce9b9dd76e0a4e4264717adf11701b6f7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

