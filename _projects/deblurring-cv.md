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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK4VFYA%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T000748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC7bRnzeQX7nPM2vJzKz%2BXiDjqh7IKfnJohGkj0aFBAgwIgS9UugGwx0W8jbRSy0u1y3uB1Y9Ehqy%2BCJmXSZyG5jdUqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8f09CE23uJewz5rCrcAwuS%2Bbkl8UK702cE4RtQtWAf0RUpLu1wq%2FFH1bsDzUgvPmp5Jd3Z5tfKtTmeup1FuTuRfQYs7Dc0JsiSYJs0Wmhp78mE%2BIVoFulxwPaKTSBq6N2YTViktJVWlioYDZBqMBsw1sqWLsFi7La87FJ8VQuA%2B03lsQIi3X3P9LCmsQoOrP1pwD3aneoL9%2FgRonKiQGYPGbYNYoZ8SdQl68qebJl5uOhQ86LoIRuKQ1njuqzLnuf%2BPgBsH5FXlDOvGoZB47bhtrcmEvOfGFSDrHr40WL7LMAGOvX75aijt%2BM2W335PP%2BRyTM1pT6XSUF64b4EuRWaaBfFkwUeBV84x8rGVTederZfB5gL2Ax%2FQN1t55gaMnFjhNBVC2TytGaeV7Hx7p8uN2Ix0KkWepXnRW6X0ZZYxDu6PWEasLxuBxC8Tp1ibP8W4I2U%2BgxoGOmLlxhUzyduS4onOMfg4KzmVkQ5FdYrwi2r0q3MIPZtG4oQs9yFKrBkx7WJgYLpN6%2FWlSi5J7oIKrsBJDjI5f2VySzFiA2kZ9WC%2B%2BYEXxGD0YTrWaBHeAGtE3rjZLWZoDU2EiKRrIgqegOLsL9ENQbxJgvm94GY%2FC7eono%2FpXBKFae6Xk7iOR4LvlUpCAM62auYMJ6t6NAGOqUBGCBuGzlHNoNQdnrwBVRo4hzmBN9t7%2Fxccv%2FeOFnGeOP77IxvbXR8WwLnMUdiI4vwcmANaDChPQMA1jbUkfPkjOgE%2FVgLp2dMektp3EBhDSeqjfyvzJplUE5hSmxHgH2zlX6jU0cAv14NIHiLXhdYY%2Fs3YQrQmIPYRLm%2FU5HM2Jh3k%2Fa6yODkWGOU9rlJjqWCKDJBA9BLlRPcbc67I2dKla0mHYI0&X-Amz-Signature=061e09f195042127e635ecd5ac66ffce797a41e7596ab4de04dbca5e027752e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

