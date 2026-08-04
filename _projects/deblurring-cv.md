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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FRKS3HU%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T045126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQD61BVyLO1rXPNnVaHhBnl1gHsE4zreJGtmeseSaWqWNQIgMHVH861P1lfXMxoimCVpWDfC08PD9YNwDnAxZYQLNKwq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDCTjus7ck1a7MimckSrcA1RHfrZEHwp%2FZzQ1rgVZIG9dgsioskD0uZTnUfIz1pgDtr9kpOivgjpo8IgRO93rlk%2FBjcrbv%2B9WSsovM90N4zowkd5xHEB%2BTAQ0230wz0M8yCJM%2FE%2B%2BRK3UrU3rZyBr%2FPIO%2FpetnOn7gG2TWlyKQXYVbGq3dCI9Pt2FrElsU0zbqtxHJAoPI4rLmYlDtE8Xg5QMLAsF6kXl47Hzn9KiGPI2TE%2F%2BWWlmBCbg8hawJOcO9sT99OdAXewoH3oXGPHn6Hs%2FAO5DuV0ex%2FbeeBTDb6t%2FeIiLZk9HOKtAdE557KdMLts7%2BqEEVq4YWwbds3PHciTIPnw66kMdjj59uWdam9%2FukYRdIOpLk0pbvkl3WagSQUcVRUTUdL7gV%2B%2B3gzIkXfhlYqaqUjW%2BvLLZKS2KdkxwhbJ3c66g5QaOfNRtEZJLR523W%2FKtfy%2Fh0GHmCvYhenC9C%2BFYG2q2b1x2QyMtfLbbPPfzf6ZdrruZ7ejxPdijpNvJk0L76JK8tpXNCosv%2FIkKTqXhe8CXdmzft6CzxgVaEipJ6fH3TqgM2w0LZpJ00Dsx3%2B2frXoZDHBSfm05GQURC1lsZCiF%2BaniwEXqqgvxzttUYj5heW4Qt%2BJ4DsBWDVFmt4iKOYkUDtdRMJPlxNMGOqUBHsxmEZ%2FM3T27E2cH2cQyNo0EWFtqdRn9ZA8LZZZA%2BBYaJd2p1rzazmOOpGcCxramdPa5GLAp9xI4DaxaytsyUHltDIxUPwasAkWK1MsnpHtiNcrTaeCk7UHjTuUZNNOIsRZfsYqFDd18Pedf%2FyGAE2YMQlviPNQl6WnYp4ClSU8qGyBK6eQ46cePBTNB9E1VeISRm70grUt8TY83pwv1Xx7TcRt2&X-Amz-Signature=bd67e1979a8719e6ed76a76edd4f3713d26b3154cf5041839521f505bf9c4f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

