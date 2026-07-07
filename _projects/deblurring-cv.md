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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKR77UT3%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T174855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRSWLXZecXr9mg0D6bgSdiVl7c5bkqiKEzxNzHs6xYTAIgWNRgNOUfJ%2B9Qm9hRN0UOQm8ipxNZQVb3adcEPdWG%2B00q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDdbcVCUthtsTjL1lyrcAwHdWeuvxE0pwEsjoH5Wjy3m4TjiLBRTB%2F8oBgb6rvD2o9p05OffdrV1%2F4yD9zoZwCqypSH%2F56MgtAano5uBUHL4o4pdUaWY0QhCT%2FYpEnPJaD64L5j8Rd9PVJ7ghSoGVCfL%2B2s%2BxToxp8qO1tjl%2B2kOps735ATRStq1D6vA6HwIjcp5DkZSvveIpObW%2Fx7F%2BRq8VEfQc0BynSFzcBjUTyVzAN8jY9yo6LVR2w%2BECo6HngaCqsPshOltZctlWLSXooEcl996FHVM4VZob41FCb0US5hR1kDHru3uLm7X4owNiki%2BJ0kuRvEii0evH3dInwc6tSkNfyRtfe2xoq1toAuP2pRmiFjoJvh%2BB%2F2jcNQftBpEjTBO%2Bwoql%2FvlqwuiG6lJGeA8NjWwjiyPjJhWxlWLImjHWBVPPMfmM4riXG491PAvP6vcG%2F7bweBc23m5MmBdJilUQ3Urk3Jx0AbMEVWhCpjv%2BUwWrpPP%2F9Dp0zPQhhtXLFwTy0rS4waBSt7apFwUZ6MwjUcRKW1IW8Jd%2F3hMcr7jBrx5anVmYgexb25Kw%2BRB2W8ar2gW0GM0TI7xtDixElD8TV76ajmXiwWswRue3izmwqmqqm2G5q5Vu1YMlldPvYElsGwm2w%2FtMKPdtNIGOqUB73N85n0JW8wYdQX1pBGV1%2B8I4M7Z3zTK3Oz7waVItYgJgtjbfPNV9e3IzAEGMKh6UASJLlnDnefd9NOb8vE987K92PfUoN1O%2BusL0VCVUgIsXsmLM85hM2gG6APt1YqYTUU0Agib1S0fU7ywbBXnrhiL2xvr%2FHDBtLaqFGsbYi9qvuV0AjejcKzjr5PZsLaT4sQYPc67kSFK3lWLxEC8P5%2FaFEeC&X-Amz-Signature=567441f9e299f08068d6d0475fd2d6de84d79ea8a9c1132ea128adf6b1862020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

