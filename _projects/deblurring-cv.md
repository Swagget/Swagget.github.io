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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZDN7VVF%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T044708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIBT54NrpzVkru4lTR8XhZg5DV2MlXzTYxYmELjfoVcQRAiEA3r24OhBporUPLE9UJmi1luOj7lKP97L0cd6dEwtRtP0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAutTmLzMhyZftTTOSrcA4u4EVBPejhCREpKWhZPH%2Fs5A2Cdrk%2BODfnN6DPjykNUYVsfp%2B1WXVQ%2B9E3ULEjTKQFBEsJNdL6Bdze8AjP85hO3Dl%2Bf31ra4TS%2FtQKd2lTDH7ua2dV4%2B%2Fb31MNSUX69eDdThcfAZcE3g63CEAeAdZr6FIOQF7GbvBIDpy3M1xoW0IuenZsoQOAF6GCddosQ2zvdrTcBWRfT7fbCzBV%2By5J9sbHss4g%2Fcc5NZ3%2BHbt2PCNdiLTbCFC%2F7sL8B9ZQVeeeF0WHnU2shCWu98xfhNdLaJ5DwyhN3WNHtIXMuvvGBxzJ1R%2FAr0dmqT6zBQvk6Z9g1YHmB0f1QxRYyZdLRvNQu1%2FvCMFLmOzkBBZy69IywE6JEZn%2Fa85RGwgWSeFFA6py6zPKG5ATycVQ%2FpvpH%2FRt00uDXePZa3wqHBXUZXCUFbLjA%2B9zVpLZ8wQMC91ujWAT%2BZvP%2Bw%2FJGO0s5bnAvC4PwXjDneoj9ZqIyCduXN7TSMaP6BFyXMmq9BHTeuWe5mbPWONEKmfdgeCEyMMXLz5y8N%2F5vRpVxBRcZ66LpWILH2Yn1cFPIq0mJmzHb6kTfrg%2FLXf5UWiwskKhmLhmmeFedtS%2BjFOCGEXnR8fc9w%2FFW0uIT%2FX0V6DUGJBymMJjB4dIGOqUBrtKvCQyAFZt%2B2CIyyZYpgiQycdV9Qz9GysT2VxTsmxGcyLxGcnuQ%2F5%2Bk9UePODi%2B0T68UdFtU1BDGGtDw1cB11az2NhbWYEBAB6fjDULmAIqDs4kS4Ze9qpVQAX9TdRdZBZT7rz7qc2Zkw6vH%2FG8xpZChZwS1b8x2%2F%2FT2hY8J7zTDyEYjyHbRgzZQuOQu4cmhuGfgNEVai1LeByMsSh9m%2FeOOe03&X-Amz-Signature=f45041c6f487dfa37f502ff52fa55afb3029cf299f04c50728b29e50ab066bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

