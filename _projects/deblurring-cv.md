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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZO6MNEE%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T190542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQC7%2FgtAlN1aRlgHfnPn1jRpu2sCxk56QObZSa2HpmuaxAIgKJ1LsmghQE7CYhIUxyDFWg2EpbSaoXYzDt8xJCkFxCAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOB5palpR2zL8xhP4CrcA9l7GkdTp%2F1xMKH6B%2BMC%2FBD%2FwYnaG0D87xDYod%2B5O6C%2BvoXIGWKKU8vBMm0dOw%2FSR4vdQjvvFhQFRCsrDY%2F%2BabFgIruqRFtTETqpnAM80zsGSHxWE5e5t0ADHRMyRk1QhYdL89lQOMTp6LrFChBjmAGPkNMlWIB34hU%2B9mgqOcPT4hGCYh9fBlLgDo5UEPTC14Dd5qm8ik2dPJBTCi6rEWH%2BdEccXkZDmW%2FTu3fL7ZtI3%2BkAw4rXJvbiMM1hQIe6fBKTZwBzglvRmzCXn5mhxh%2FhCuDYGcREmU02z1tDWRFcmAQwfdg8PTNJ3gBu8oZkSIwrP5GK3trXnTqAka9ksvmQ2yAnnh%2FJmbUGdIo2lsiw8SvvzsVerZ7TVedfwfEmmuFUjJd6hnkVlwn2oAIo84n%2F%2FIGM3FajLGFQHJkQHep%2FIni4WGfsYACyWTeJ7aFiiEjuf6Pn3t1%2FhqDZLiizLSXRL9vyTPjvHv3uA8cHSUYfdby%2FOSjonb87TV%2B%2FMlHZmnnSGGbB%2BcT2MHIriroip5vnvp3hyWqGkm53FE4SeRxwcgH%2Bvc64c%2BvaMrXTr%2BFnv2M%2Funnt1oCmwQbu%2FpS%2FZImMHL6ZuIJsVNpN4co9KLUGbS3XfsNql2%2FApVt2MJHH29EGOqUB7tigGqGCaWeR5CDiz%2Fok5uUMWRy1a4Ha%2BTwuxGMSreZcYXrRPWojm0dyOM4rpw0elnM2sE%2F4nrrhwgAsPd9VOvaIKIL4VbuKjMcZAQXdPTFu9NDnQQvV5VhM8yPSiFairsxyJVWwjLtD0mL1gErnRbS48xxpDNxyuXkMNu9RL7GsCeNC%2BBo1HlLeXucBsCnPz%2BKIvmIlk9lNtaElArc4wQoSu1S4&X-Amz-Signature=6694406cab4aff82999d60d85971cf8259cb31c8f12677f09e6ae8c93caf551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

