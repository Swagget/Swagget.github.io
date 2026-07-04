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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDKVB2J%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T145601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCmZnDxWe4%2Fbwrjerva7%2FJX%2FSLMCDgufmppZMQVc45wYAIgEhAVmdESZNwDYfhJxVawhYAOkU%2BB3XeBzHHbmIvFCMgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJWI2OPCEGzNiwtdfSrcAwcKA%2BjdHCiQ%2FzKpkBKTdFnxN4l1SnRuv4VNLniG7K9quXekeuOBaDmkoBr5wyZ%2F1OEGZwok4wc9v1H31yS%2BJWOkeQIP3u20OAmuiaxprpDNlcpieiCaUrsPKmwTxUBshn1A8FAxiCNMsiOFrV4VM2xRJULZDl7NdoRA0KzI00DKCp6Nf0gkLOdCOu5Olgt6BPhtbiApU8ZME0Dm6HzwstUe0xdADjhVzwgqdD14xzU%2F%2FFm9OVKjmWCyjSImPxWOpL4FIT7VKy44SkG2pQYt60b1nUGs6j2R6GJRBUVuUvjTS5DV45BjjPj7F38XgRPW2cRMR9PBjtNMEdHDnn%2FnpgJNoCSfVbpezdO63Pd5YNjXbDS91IihNkDGaWMFPZ0qi7GciucaNCX%2Bu7s4WTssbnzn9Inc7KMdIqh037e9kteq5ZQk4g22kg%2FOLtZBcUKEF%2Fo8QARvf9ZfQShlsJ3fNGzQn0mk08kEacC0uXkWA%2BCA5%2Fhub7S5PXn%2FYjRuyFvwDKY%2BtLdmq5wKwA4O%2BfXHFqki5Nr%2FXJ%2BFNeGS%2FlQ5MfnLiejGmf9ZXgveYGTfWhs257qq8S7zOBnIn76wfcYI2cnGsClSPLlh1FeOnM%2Bt8ZZArjikVN1vVt3yAL9oMPqeo9IGOqUB5IbGeehIrdY%2FULwQHja5NgFvqYo%2FrBWMsGlaoLZxJgzkNaMt5VtZfQPNULx7Txt%2B8MhGK%2FzGR8yup%2F6UHK7R%2FF3FqbqPUeamh36xgYtGl2bxYkQHy6Qa3El3325QynWDU26J%2BXFcGvp6Rbexz4hcwIPKANR%2B%2FhOMSzsrG5p%2FaBbRH86nGunx%2Bnjc7WJTT35gZHhvm%2FyaUMY%2F4bMb1LqE0ZX6AC1m&X-Amz-Signature=5edffe46d21080fbd0cc9b7e2b733fe46592077bc2ad944da67d3eb11d4f4cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

