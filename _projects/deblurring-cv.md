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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AG6BQ5E%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T214152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3FXgB7547%2FQKhvhvxLuk0KnZq1qjrbl1R%2BYE4RKDU1AiEAxveyouh8fDyVjdtNKHTfdn5KPQ7vkW%2FoRsz7CevlzYgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJp%2FnyqIPl6KN3OnircA9WXq0xGV6h2Twzu2FBCfRJonEEnwVtflXPQXK8vu6YFNs2oJCp4ueM9buMiC%2FXQgtI5orD26YAYUiztvy10SSlhyF1eNpVZpU6Ddl%2FFQQxVSn%2Bat8R%2BukDMiEEF2TsOQ7NlsfZuruO59SIc%2BYkPEZEybDB5bYcOfWCLpIBjRFlaLYc4Lfx9a%2Fjph%2BiXwPb9v7PFJF6eA%2FCGr59uPhBCLjFqXiwfyWhfh9Q%2F5vkdAVHcTCCIKLW4nd5873uIN1dl1Q8EclnJAvsULYnZ7oMDVoG3gdnUFobLhrGF8DfdrDKlHYQJF3W3l5Zf7sq4giNqvr0ZOQlav2tThkUiPjJap6yaXgp0g9ZBWBE4%2F1wSt7YYNe16ZOC%2BU2kPH4UWjOadiew%2BE5LBLcBkLxfJI9EP9U40jd8D0QGBWgFER%2Bub%2FnzL13VbBooCyt2VlR0VCdNUsNVVbzDIm29sxvg53u5IPQH7%2FCyOgVTrlKWy6ST22jB6mwrusexnmFTsHCvw0s%2FLrfR8%2Bv4kbU2cieSwEi4EUfVDkvYvBOYZPciWh3tUo4ySGKA27bVTY9FZP%2FSkU31l2Z7spNjTzo70i333v0Y4fAy2IIRJmkH27Y0mnWuZeNkA1vS1S6Htnx2LcTEjMKrE0tQGOqUBttrlOjngtK7nFi7P3h3VE5ynPvNjfPnWDkNEJHjZIzEPyH%2B1kFSFFu9KHb4uMc90ncqp1sNAxfCGkS9PtMCUe4WosGG1GO%2FFf%2BSkzS3kbpDNYEw7hkthOBupZiXMQb2pGsQqgwpj9E6YYHRoYyXn%2B7JyM4B3W46%2FlTswr7bCgkNBCJbT58kk%2BhQsEyB6Ea0UBYCqcHTMGe3SRlKc7ro1Lvs6iYQk&X-Amz-Signature=98fc5a633b329708b2c977ad5fcdd51c93f7d00980b736b9645da56e9fa23e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

