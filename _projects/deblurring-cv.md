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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74AQ7HJ%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T051326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCICxmMv0HlnKWxqlS2ch3pCrrzgNh%2F4nOHM0dyYF7vXPyAiEAwA9K1%2BR1%2BQ88Yi7uQ61SE1OHZj735Eu%2BvPklbF4vYUsq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDB3gp8JAk6xdt3%2BU6SrcA9mHKI8sLSDfmVDRHakVVL45tv%2Ffnhiw4CBPFOeJCVhj7KX%2FRZl3cov6vermudYqzYq8XoblQRbKIuutqEP%2FBapwsjBs3uwhUF9quGUegY0cruuDh%2BGfHFsU9vtUyo7ZoAOKkm%2FeAYCNWXA3Hx8l4P%2BcJp8hRaITLbpCZN3nYy%2Bu4X%2FX7nZKfnS2u4BFAL%2FvyqYZLQ065TySl1IIqICFRhDXlzELWosLOr7P5zRYmYSGbfE8YNBNiLNN%2F0cAQwJkomAn8n%2B%2Bu2Q%2FP5KFrerz5cyUscYZqLXTUoRPz%2FmNCZ42o1ynEAI5W5adjExfMFK%2B5S9B%2F5NN%2F8BDHzqr8ExwBmLh4OYDFdx8KPCDhBqF2%2FbTlkN2iRAv%2FshZbq8reIs1EoOqeuIGncicJy1gkG5g5FjMah%2FduNS4FdJmOzGLKHCUDT5Uai5E8a32pzJDvfDrLTU4svVFCXP2zlpCfki8WMbSOBBilYNsY9ZL6rA%2FJ15VBRrmEnZFdI%2F3sEJ44iu1qgFR2mltTzNYg1GAjijUY1Bi%2FcWYS%2B3WuRjJrzjY0hDTSBlWU65gdKXRHcad3i3qJVXYAPpxRikjN1hwMNk4eX0Qpw4n5A2FyBULqCiPY9gzSWeRxRflClB0IZpBMPu689QGOqUBCSoribR2cchl0QGQbAWmu903QoGd%2F6QehIgQ5k9tICWmpkz0nIDskBcfLWvVGPH%2FJO%2B%2BgcHKmRyzZpwb9Y85WTFRf87Sl1PGBbZVzDgDPf5EU8epG7WsCwYmHgjh5IiA3%2FoRymUQ7IJSc21zH1HvjseegBJHPSQmZl8jIyCBVmhinZwEuF2AXK9%2FOjfUS01FqjZzvQKYFZMztsB%2BEOPAw%2BFzUjqh&X-Amz-Signature=16b5ed0d43e6d5d98baf3b33a04ceea2954d398dc45e64f19f90f65b5e2dd373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

