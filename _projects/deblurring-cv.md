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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBKUWKJH%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFnWou33vB8QdKEbRXZTbdgjvIhlmMaaAollF%2Fu04UddAiEAtqVCVQ9SDV%2BHun2JJ0LVVZHnjRSeOlC9DnZSV2WOrgEqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKtPVfhUoiu9cGIuSrcAyUAmsxQoRysInB6NbzKN%2F9ke5TqwSzrnxFwkF7t9oZl2u4JQ3jd%2F5p4zWmVJQ2GN7fVvvuXH6WBjqrDPqGz68V60e9Z42ednGPWt1k0lGrkJ0NgsGH4UWimn5FOGrLPSpuKMTdYR7oVv3qhOjt%2B7rig79o69lEj66mqW76sZuILt4XJwcSjfKi9iLuyBOhNW7YIPJA2Wd%2F3dbHoXATjRvzHTVvVjEmgJIWsgpz94o9ZWLkcHQvhwrE8iYcgEbe23jQjC%2Bd%2FtyBMUDoyUXLnHWOoyfK0rJTyzEOuMZ4Fpl5o400CM0SfbwlPqH2cQ0YuvFHXf4jJuPBILBdQeFHelG9AWNn6LRWOJfuWQ3TbcAl5PlKdkW4r8AXFSiMZmB0jSiuCGCskNuSlIFdCqG1tYaBBh4qxXU%2FaA8N8b%2FPqqHUMS97EZiSJ1kE6FNVRyOAqW4EKrpRXVwsizoqquK20VS6wlSzV3%2B96lbDtMvWTJiZNg6fq%2BKHtlaBkUng08wwKusDSoyniPI2S%2BqhqKE7nPt%2Bu2VnIe5zfekzpcbSaiS6bJd4urlREMC0my3xVCwb6IdH2wICYyf7T0RrsMzk4nPIfYxy%2BJNPg%2Bt0uPTLSEZ02zFX1n6yz27LqRq%2FtMNSbrdQGOqUByf6dCxwa1DiO4RPCvvEVfMA4gwoDyhFBb0QEId7pOizTclAB6L2mQM7plnxJYOKKJ5Ut34hhQDVEfMBDV%2FLh8gN6RVg3OEQbxqSeor%2BMdAC26gv5GbZb5Z8S1bfseanGjfCszr5w3UFMTDmp2d5T8E0AxNBPzyxvKY4wThA4SoZ%2BFldVz1nhAqyVdhFVgBlawSTBH7hzUGG%2BHr8fcTYVu52bVZAt&X-Amz-Signature=ece6fc73ff94240f2ea1ff67a0ca5440acb1df60954e49fb2d63212d978f28cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

