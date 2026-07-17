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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYERR3AN%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T094306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQPBxjnrJt5lFAEzFrfoKPh5egvcT%2FDWw0MKSg1YiaoAiBvA3TvFKe0jQHyynnl0erDvIDWgeVgm%2FjmeYkI886jzCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMtBmTn0KQJLr2MZR%2FKtwDZEoTr%2Bu0PVTOj1dSe0VFR%2Fc149q9rwIa1lqjMKF7Dtk7XK3Djs%2BqF%2BiYzDEY0sgDiQt02rgoM3gpROJzQulxlaS%2Bzc5RYKjoGqYTisurDtP%2F9RRLzgaHcOxag0oJqU6KZK5bAVRgFepdihCSnQLpbrAA4zYsfPQ%2FPhclhWRM%2B6nGNsuQgV9WmZ3zBOktvB9NxPXoCBpVsDstB13o%2BfwuytB1k2Sb3ba5p27iEM0YZd3LdSMKjxirLmZ3xugmDh8Ve70IMTKXw5GNlSkan0Dmd10Oqlma0WsTWhP5rY5RcJpeGYvG76K%2B72AZa%2BdX8ynreG%2BSTMyv4rnInmUsSFUiz78nZveA8KaDMCauvMZjnaWRt9mVKaWgKluS3QeWzXdQwGw%2F9uq1FA4cGZo5cZwYcD2X%2Fo%2F7frDCJBAmFNsDCtwYwEix29lVqKCzdIBgt1yjwWsiJeweN8QBqMEP2awx%2BVo2qeaRprlk4Kk%2Bt9mLu8B2Qrs%2BjFfeMCUvO3EXbIXXBIB6J%2BPSt8maT3uHMDot75fHoggDnSW1RuJuKuQv%2Fc6BK3NiLJrQBddk1NTXWAyF%2F4TAZmqG19ZorFy%2FUGxMB0%2BjGetJTxBmXPaXQe1rVOFNMQuPu1bsli2vkSMw9dvn0gY6pgHJVKZATiPYx7uJW11Iz7SUpXau3OKri73oDJrY0dxomLdvZD9SJfCWCNsQMEKXJ%2B6ZSlGB2wfOLe5iPY3Yb%2BBTByavZEb7QYneetxTcuTZS%2BWUFUJLKzaAaSnxqupKBTEu847Ww10kHUTppcjSGJL0AVEYaoyji2zpqWR88VIiwvjfW8%2FxpHKkYFjjC5HAYnNoCDC4OrSdAICrtV40E0XiNAjlmiO3&X-Amz-Signature=5b7f4b51c1bbc5a7e7d686c5a1e37cb2bf00ff3333802de447fe083e27dac38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

