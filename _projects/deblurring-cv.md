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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623V6AQKS%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T071245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDeKVatYyCbtUkprt3DA7MovC%2BVzx%2BFDZ6uwOv0OksxyQIhAPYalAjyK8GJqUXlgvBRpacVIG5Ic3S9rUrPUh%2BoxPtGKv8DCEAQABoMNjM3NDIzMTgzODA1IgwMb0oIQz1RgSZZt2sq3APtunEPX78yrCEb8aEV5bzhpDZDtjKIKZmVkBKzCpEbZANQlW1FncOw9Xa1a4W1d5dNcW4%2BONrZ2yBItWmsVJH8gEGRNTiUu%2BAjeMIOt%2BvpojtP43I1%2FZwDQerLkFtQj1U12ZSHxH45EQB2XYtCoUeEtdSIZqKP7VXcH8e2GwBds%2BvaNeRBGsrQxGDrznL9Z263k5ScFj05gQZH8brWiN4eUkz7JjenvisQv08l03aj0eKXgWuXl%2FVGypeG2Dt8ByVCW5yXOhcM1aAdPfRJ%2FLvcK10TzKs%2FlnhvHbVcYLDqtfxTZg9O6BMuEOf25pQ0wCpqV5Gz%2Bbhkx31YwVHDykMdEY1VM36T0XLrDZRUxlPVHIC4KDT1fS0kUd%2F97Le%2F8LHk0uJkT8ik0rGFwXSHnagLPE0k5nKu6AmoFVuqFcQ9KUGgriTK3DNoFxHiNJejMYvkWOZdNGCCI0V0edxbVLwLGcV3FblZcOPlP90Qa8x7Lsc37YRAnyZNyW75HD7HIVIDz9rNGX6biY6PYrNB2%2BAm3YZK4JMg1XSwYC3EGJyymuUhu94t7g11ocMvwC7nfKgqoZnzZKYfqs2pZBWQ8MQdAipXZ4cUfXUJwhLB4j72jbdJuvJZpKnaIQyNdTDqnLnRBjqkAfE0D2w2xpDI6xcqLxmBt0c3rU9%2Bb%2F68Ji7bz%2FFf7EyE1GAIXRNynw7%2FW6Hy9l8m7vYaiG7FLHHaLmXQGfl079BIMl%2F4O1fkutMO3UfkyJMU%2FjFVPxSr3mKKS1rsS294fqBcdR2wSEVLHUw0G9a3pcQjKeitoKMOetxqLf1TiRhpsP2rZJ3dqiWNQhZetU1T8SxJyR3WKUTQSnMs78KqLNlMs2aG&X-Amz-Signature=db5dcfe14d8ac37bf75e0c38523bc0a445eb32ab6e3c09c5132ac3b5d8a6e31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

