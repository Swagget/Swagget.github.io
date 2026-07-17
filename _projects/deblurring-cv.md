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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652YL2ROX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T045018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX9DRZmpPEu8RH8i47aXQq5Aw05xZDRdAawTt8lSP93wIgJnboKprgHGNQH7wHqnZ0CBWJYTTZMny6bVKV3s1Eyhgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDKe3vjBQxhZ3Bj35JCrcAx15C5QzsE4yf0n62Df9dxuCVBvzwQYg4Yqb8qz89ktBBytX4sOAkrTtbGov%2B%2FfaGv1GrVCLHhmTBF4j5TMr4STe0Js3CZEkZsvoQl9ZZQMVTDtsFlBlNmf7RpCaYASeJkxLuRA2DUWUv9LoM9ISV8uCukHx9WUwYlZ04LNRw2tUCpQRBvTKzRHfd58tIeklDUeqYzVAUt4qz7r%2FRayX9swrYAJkbKC96g1x9Do3Bn3iX5fcf7wpY8YZAp2Ne51J3%2FWGHi4eGkjfrBqzJZpBmFBXIJ%2BVQHVg68DSalJJv2jv1ExYj%2FY7vnKAJMXmNLiCoCURkPVEZchG1Va0aVkBDmhdXYODoEP6TNXQ04tanYtn0rg4waQE9jQYdyB49aYP5%2FHss3ibw7MOeW64tEhsXc1R4LkJti5oWD14%2FTHzUiH8K4Gg%2BNJrlXPqgwsznKoHbqRpyr%2BMH1Bmk12MTZ%2FDBYjx%2BPQ8u9BDnkFWB7UWbkqSaW8Ei7odOSwflAytDtBQqEwqi0sXQTdO%2F88%2BA2XW%2FSAZObHeowOn6cBL6Sr95U8cs%2BdgH1Mx94TJ5NnQwhGMiNBGmFLmQhnLZzkMyzUvM84LT6PV8PsJ%2B97KKwSsR9FNbeTOqNH92U6eVvOIMIXY5tIGOqUBt8QZ%2BllCQxYr%2F9IUlppVCQuuenFFx6d8QFlVwC6ZQKVSYvnHhi17UqAE1TmrSDmGBZT0eiPNogZIORH8E3uJjsk7Iu1SSHCDas%2Ba0651rGODzzuRdU3tHfb7Jjq8zMWZgQ8At8Ods8lFg7YCzkoxNG2mzem0Y4wTOTTaa2%2Bd9P3P86xl5HYIai6t%2Bs345mppqwGhJXDM1LjDl%2FBVOqO5DXff%2FUg2&X-Amz-Signature=4a6942eaeb49853f894cac08f9ecb150ea7379156b10c7eca5d9541d8c4dbce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

