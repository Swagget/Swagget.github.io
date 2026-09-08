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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3TGH3A%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMEOEIOHdci9kzzF96NSYx84IDp9UpjdgxW4lQ0RQYUwIgSWXY8lAzuF2r%2Fc5kMDmrNlOsM1Z4xJ%2ByfLXgZiTlBc4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDD2tUyRatp3b84AdzyrcAxDurJAYKLcP6wbqqCDFgZve0pUJg1iybZqg4YI3VVpHtri2WlsZwbNZhfZ0%2Fvxj%2B%2BWCvdDu5QE9rKxmzhxBRvK0Yaw%2B11qUTPuO0dW4PO4dmCJeAg7Fohcun4PMbGq9Cvlrwjsle5WzhDA06wvvH5Y5BreB5eguM4MXk65cefIcnD0pZSc%2BJHpOWKNjNM1JtnOECIv%2BXhe6PYUyCc0ekVarQOhxdsLwNSdLKa0piBE47Io2brj2lKOylCRv1SRvflCE7sORkqtjWVG3L6Caj2UxSNT4T6f4Yez274GT7GGGZ7drbqFe3364u9OsVWW1EKfZTxoxXSttByADnybKizRN0qtfbM8WgFbJ04x5F5ZbbAU33ORBU%2FOkEagy9XlIGZKVaDMCvttTc93KUlGBVeCT%2BJ3VSqy0IiWzz1PKOsVeNThiKfSAiinP6tNafmUYAW58KDXm4ADoJSQUIdp0BQhM1mNBzVCXnhcLLGZPgB8D8HxGMZ5%2BXbM%2F9tmS7gnwIuTK3jfKQuQuwdhaQNyyBD8en862Dnu3qPZXscPb1ax6vNJAraeNosmLQNM5E1hhdF%2FBtYZ7lYtGeWvKkYaIpn0Qy9YVEbnDb95yliSDjujcG9JH%2FMtXL6Nscl6pMIyCgdUGOqUBYfXYozMTm1oCQNnl8Ea20h1I5Lxhf%2FmGPxKG1Ledq%2FJXfDbJlxWTfscCHfN%2BKIwXdMS2qHVm5UtDgKwASR8mPD662EicxTikKEVA8EkStZhfgtpFpI64FhgvP0clZ3kk%2F6z%2FzAtTI6PuOXuD%2BpYKy3Vr05zkCUBmUbMBSGQhkHuCc29o3dDmJ0zsYrQs4M9Rp6brQ6xXkB454thj4jTV966p%2Bxqk&X-Amz-Signature=bf46c4199c86014c12b60df4a35a832295c709c139dbf92af969652c1f58cb8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

