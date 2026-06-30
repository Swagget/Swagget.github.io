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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6RVE2PV%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T020103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw7hb2vAwMtCDKyRmuAqN7mloahxiTsdmssNJ4oaY0dwIgWjdf03OX3zpu120yk3Ud7tur7evBSBpIRn4ylBcfYrIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnAOStvXR3jTcNdoircAzl3o82zjEGSmjTzGQp8rTvT8NHCKWC1kFF3jS2h5W4PlSt0LcVPdsCcq2mmfdy1KuwVYtbTtC3pDHiJmhOyJPoF70ZqT5ELRSQWKILO5ZCKjINnhaZBXSbXkHGEyEvR61gMYBFWoE9j4qy7ogYtnXeZ4fajox75ZxqA8uNQ4Yn1KS0uqR31wtMFlrqmnh%2FWwCQrp0rFjGGMLrJ1DyZdK7RBj1IfIrUFm31BspqMhecTjrODSZ1GMXS%2BqwifD4ASzeI2UEAZMlJ5qj9frkESMNLSLIjCfvCj5tOVJx45IKTbWgHFzl1D2OWxc%2FtVlxFwYuTVyDkEnKIqzOuFd3aCfLA1oV634%2F%2BjP3WegDbD1w9Ivn3pyqogEnIb4t5yrhlKHn9CPOYHRkfG2mbLKDQZqsPHQhlOm5PujAihZoBrcUTz8KoVhxm5j3Lx5eAnZ%2F6fhadDGeYf4KgZt%2BvGDsVKj3GMYiTuc1Ya%2BXVEV3SuN2A9h59U0UQJvnnTjP86t%2FMFB8rR4BEckYAEyRkye5F5eQrMDPaAGIEh7In3T5p9fzZNBfieiZ0q2XR%2F8OOCiae4ZgX5fyvk6Od8zCAXNe%2Fl%2FEUded2NQCrg01Q3IU5uiseDIeZqcGMi%2FI%2FXa0b%2BMNm0jNIGOqUBUskzju3saQqC9T%2BQbvtflto4FXtrMbNcxWdw7cNUfaB%2BizXmtLdEq3rEKg3ss0eFzqcF%2FNvUOxP3hLSx%2FD0DEgdhAxI93wkyeAebRrUOIa63MGzzI8RjH2nskRMFBv2hYk7m3MMkX6Cw4W3%2FIVnPsStfDM6aqOj4W3APbcfbHHgIHk%2F24T8KqzVrxN6yWvIHAk7vkPedUYxhqEZPweCVTwyy92Nu&X-Amz-Signature=ee5e18010396811472a0871e97a8c3febee9d00b1c9563cacb1b01008823247b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

