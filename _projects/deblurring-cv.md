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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4PMPZ6%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T122310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGjvJ38PXoOnLMClp%2B7bspxyRzTlGGnheNR1O%2F1oQXToAiEAojOnIFWo9ZE0%2FoDlU40n4yTVqvBjhCsGq%2BLtAXynEwsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYGjarrks7MCQFOLircAwTSm3qCRGd9e7HuGOwxUcENOgM4cWLZGJWVaanH9h2isVx6JiwkNuppYFRA%2Bs88YyDKJCoeyR%2FmKjmTjL018v9mjHisilK%2FslrGzDuT%2B1Ian75g6%2F5zelyGjZRfDiUjoAFQCnQp6LvHyKlG4fr1Z9FaKGDOsGrDFRCmRWNRleF9rToOfvJdtJBqWEWbpCpuOsPFg2FK8%2B1qMdWVI0sEgEjaM1d8%2FUlPNV1KdbqIeCX4K0DIq7bOX61C%2FOZKp6mh6ieOiQi82TQetBvslhFLtycHqSu5z3spRmgb1q43ey0h4iYjFIcHajFbJVuIv3Rl8gOzgsBc5dI47Anx4zeZShwC6IK4IMERdRgE1wFghW%2B2ZAX1qYLhg9F6ObrToU7hg5uqlZa%2BGZfSW%2FoPaZ%2B%2BdcWDLHUhqNlqJyc9YLlDn6ebpy36dpFuvd%2FM1aiI%2BnUetJ6gXj8bwHG7gWZI%2FwZPy6YeUODpr7cSarW509hd7KqlyylcERXhjS5lhY69EW8%2FiuqoFtqc4fEvQYGAhYQSVz8nvrszsCSyNnOvTAxc6kedDyz4navLo6RVF6zF6K3KrjraloBI%2BkA0IZQ5z0dmEIs89Q7uE3PAQswuGAx26AXt%2Fdx77%2BuMreKZEwglMPSDmtUGOqUBPDJw0G34Th4cea1fyX3NnIdSWNdhRwkSnqcfHr80LYsmorqoY1bvPV%2BLOwiV38ou3fuIiXIIIdNBs3bOOfqfHCSqKJbU4ci2%2B%2FwwwFx3cWRvrCoL7vdEh7kFMmiNgAdEZAELCRgdsSpysxNnjTK8Nl6yF87LhBtYeN5fVRpn1NQmvhHfztcHCToxRubyG%2B9UXTMsPpMiaK0b7njKCsp3QBm90RZs&X-Amz-Signature=eb7718d874385a188d06886bcd210d827606aefc9688573cde4475986150c302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

