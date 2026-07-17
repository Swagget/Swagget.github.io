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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4YXD2A%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T175457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBS2ylAhKbpAf6O1qM2utuHJGaVs0iiuXpTnyCRkph5cAiA2XBQSdtVG9zQjgVT3yYFIfkxYuqhPKKPDheeBxAKX6ir%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMuw9N6PAxqkWxfe3bKtwDMB0LEdWa1tkyqzTsoP7STbBXTHcmcSb0mmSkdoSua0vnAfIuDBjkyEuPW3nCp7kx%2BL3mAahGel25rSfJ4ZgYmReQgV%2ByLhn2kq3Cn3nfYEeZKHwNerCFt5Oy9EPrFLnk6%2Fbq8aOTpC%2BqVAhG4v3fA8VeonD4NcuPy86SYlro7HFLphXRoGwpX%2FA2KawdQ8EI6v9QYZmrPPRR2elrwZoWpAmiXr5mOZ9OWkjJKpsinOEvKOEPQlJ1VrKi4SCosFgmxvrKwVDR04IXboYNreohkdMUN10oxgENib4FQ71aB%2Fbvpau6WOaytD4aiVvWUJs3rO7QKCQWCJjX%2BRwPFvx%2BEAjeqqzV4IG0PwiS1pzA3usP0KYqFJz3uMrg9S%2Foz5SjK2nJZj7pkL%2B2SEd2Z0teD4wA4pfMBVmQvs2SjfS6fqMt0yD%2Fi1FxMDOZgz9sJVEXM60dXxFgC1gc%2BxKUVadoYNrAG7iVHWZ1mDp7htsPhhaCuxzURreT7Ih3s%2BjT4pZwKJi3lnaIDqJmhDbGfFEYpzT1hfYuUjuMwcvHRaRLJNawAyDsPfF0RymT67L3qW9%2BdQ5HtLWwjSWgh1%2BxpYii7YblnQjO0wh0ozfxDf5wWdZITA%2F5ZEwXeIUNx8Uwp8np0gY6pgHFWEJyJsNBDA56ypsQChfAUsO4Sx%2Bs%2BqyJ35u6funun3ovXFOdaTVopGpeXAwu25UIkKpgyDERXCETLZKaHCwJ6NUh%2FwkIoG77Ci825LN4Ns4ZvJY851%2FHUOzIFc7kHNGuzP%2BIv6EkrCo9rc3SOU5ks4P6DbwuP7aQoH7vuxy7uqvko1%2F3VG61dz4cRTH87lNcL0NhErRDmdx%2FkJp7Bslnce%2B1sbhc&X-Amz-Signature=b20aa99f17f262dd747be50fcf3704440764351e167dd9b1d98c8ec2bbf65abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

