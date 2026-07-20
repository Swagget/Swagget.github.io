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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJTGHCYB%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T192041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFs86OqLLdEAuYL7kMBTFPi3myHqRnqc2ox1lfYmN59AiEA9CT8UwzgMNoDo1EDVNl83g7%2FD%2BuFN3ozVc5DbxC3k%2FQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGssTksDQNAontj%2FjSrcAxMcPR5di9JNGPRfsTu537t5ZoX2rRdM3XkHp9izDt0VcX%2FEJQw9coFgvmGP%2B15e7gVio8qJhwKqbj6bIv6oFiaIpcI4pcKRaZF9LyapzHFurZzKCzK4%2FlhWyEIkJ%2FYqquucY0N94ZiERmQZQ8PJ9oGImkYm9OYhJmSBjGUGc7vJBwA9vkRHbWMjL4kVmhk6e6cIZmkQOi4tPz8TAj6pHnCTeR9Z9%2FzkwXVj9bAhTeh2xgwfuRB%2FxR7oJ6EjOEkwc%2BxyiZmShd3WY55gTY3cOhOsgat5ZMBRP1EiQMm2cpyFv6ClwPUUS9GozuFOQPXxIwwPRfAW%2F8EbA%2BXPydZg5ZvAQvTPWkOtNHqZNQ1d3mvllMmmar7VeoMsMJaF6BT2NG%2FbjKY1HgsJ%2BtEpxMH%2B88IkyC9xPCnwcOfZTEesk7sbFUBUnvAGqcuoUtuwN8FZBkxZRYXzp85yTZdV%2F4PCDEXyQIbjJIV9mV6%2B1BnOSHruvibJSFR85V1ldQyoKU0Fm2V381z2c33Px%2BU6TZGstBaoXi0GDwwz36UCxIruxXVpuIUp8MkzUT2Cxpp58kpv2tamt2pfJPbDe5nFCdnP5dJHJlYwHcOpZaDIt8ZG%2FtyhJiwUtKdrcW%2Bg6VOWMPfQ%2BdIGOqUBFMgy8HP%2FxfujJaemnVFAd75WpAv8kKXIiTyVwg64E%2Bj%2BTf5gDsCD%2FGTI1Rq7JxvpKIsKcAvVVvGFh3mVWo5Ee1qwva%2BQNoNg6rC0BTlb%2B3euEtKtXWZBmbR4gFwWCfVSvlKMg8yH3L8s5h6Bl9chtXckyRKo0%2BU0eBfKE4%2BLYiV1JaslIJ2HYYfWaqiA3nPp%2Fv1rydPyc19QGv07hBUvpIp6SAj1&X-Amz-Signature=79c5fc67af49d204a9709ff2dbf23711e96d526e45ad5437b475bd2228ecd43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

