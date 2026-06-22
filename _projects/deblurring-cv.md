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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDW53SDK%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T124004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCctnYZk2Dxw4c%2FhsO8ZdjIMv9I5ldoik4AODL88CeB%2BgIgVtLkOifx4EAV7DPJsyubcuFFjcOzytraYGdEjjN7DTgq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDEnIr8jGAb6TH1sejCrcA4I%2FFuWO8AjehK0sBfJhXFmnN4FlYTDNkSrmzPOsLb29c8JDl6dy97XWJBjP7f15SiC73SKD9dkvo3hYBFoACYi4hiswqkxQp%2BPeuCUyhMHhLau2DPpM%2Fxiq2HHBcEDY593JNw%2BgHwKF7hPSW1HtHQCTFFDNbP3VEy7lO24QuSNdTa%2BmnvHmCUcmsI%2FDxfkdmjgQwZldP7TTSz%2Bq%2BX7CICHDm%2Fy4fGPkaQMhMnhuv8FnR5nMPSqtroea6%2BnTlmphXcEmfJrNVlOnDNvdgBHQALlwc2Swn1%2FwCCnAm3WY7EraLH7YoppEEKXbIZbhhzRTYp2RsUFtHbcTuPFgnhrBSdvZgpP%2B06Us13I4ugVXRN%2FSXkoiwhhfFYehJsQzYzKLTbF%2Fa4yKEB5%2BtHvkn%2B8WCxIhX%2B2wFwM38z8xxuuunvLpYyausDjnPoDbOc6u97L4iyw82CMx1EZjWquhSc%2BrKSdJlld4cBzJhLhk01p1cx1itgYkuN%2FZ0WSx3ZQWH%2BTP5QzkkYUl23Q9zWLk1t8IyLhYLURHWjnU7PtVR%2FAJY%2F7dbtybz8%2BMovTqsCCijhaqfpnYgp6bQoo0dqc8Y1Bx5SpZ2bVO8BbUoPx9GxEQkqwOkhPy7VFAYaclD27SML7O5NEGOqUBzOjnbKIzUFN5uvE3709LqNNUO9%2BYGsjP6KT771FNnii34CL23q%2BikV9CXKW4zZYqudujqoxqvU4xH%2BW0u7M4y1Nu%2Bv4%2FHHNgl9hgt9aybfjWH3an0fSRY7gqQcedKZF0B5BOaYn2iUNMIXNB1gyFyygBsU%2Fnuyc7MnRqOQ05EeTjdtGh8enKGoSxk7i1gIKd5gaZx6mHDlzD2Gd3J3KNjbAUsfp9&X-Amz-Signature=836f1eaf182ff71d71ad18e4ac968192831c09331c6156df80f1dc9b3688734c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

