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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P4DVLBH%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T111305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEoNy8yhTKfkW0xJb0RFVm4XIOo62YzuhlC1p8X0M9kgIhAMWcWcvhd0Ede%2BlGUwRaluhnHbXWhIyq7PvhnztHO8CiKv8DCHQQABoMNjM3NDIzMTgzODA1Igw413YE83X0O8GyVAMq3AOjhbsEyzcF0vq0woK0lIAKGkrM34TZCWjl8vVQeJcJKazoKmgMfYeF3C9BoZn%2B0KX7w%2FFaKvTkBQa36RQNCxbxqTVz8DxGyGiMU%2Bc3zP6Tw9awmMMlioNTI56gvyoMjvept4B%2FFBSW6z8UaB8yIRVxsh%2FtVMYKMSm9nqHGjwovMzo3aX0Gkc1dOtXwmajna4wYx404wFerp38JQx38FR1JYy5c9zuWfwf4vptgLMH%2BBOtOE0nerW41sHZydBJANfEJKyzXhGq3LBAETLr3A9IQadmwxUSIjKsfWiDkJSm3Dhm%2BoiR1ozT5qOibpBC23P95HcHQayHA%2FiZzkgL%2Bn5U2SP2oCF0CUNm7xwhE0njaGmhomEs9Hb3WCMMFp24T3pCf41ZqL6um5YqJ3%2BnvC5Hwvp1T3k4CD1BHN2MG9pcxu445VGhfS1sVPtOTxx2eLljgLwMepBVsjEpqjgu28FOb%2Fp76tII%2Bj157luJyb79GQGcq6WNkMec35fUmfedqASMRxdrdrYpKInEPO7nnAiBLUowKghmKFG6CjQBUZebndqMH8GECLsYJVEaHxhZx8vtovXcQDgIjpHZjqq0xJZ1YK4%2FMKuv4Et8jys2kStnezmd77LpK6JB34BFabDC%2BnpbUBjqkAVHEGHiqnhymNAvh1fxYDYbV3yvtpVbYIL83jW3mgprpKCQl3AwgZXkqTsY0lhEMejM483Q867eY7erzXhmAV8xEb4iveM8nEZfbqaX2P%2B7rs5K5pNDV4IqVifuaaLdNSSSVFmMP9FzwJ%2FxjuTJ%2F7AbuoXg4wgosSHIOJAEMkj%2BlpY%2BF%2FlLhvQkEgJs0Usj%2BxXAVCllKv0%2BJMLeZOquX73zDO7zY&X-Amz-Signature=8b5a3f1e7e4d5a8c3047c2455fd1d3d9558d59ed38a8e21f95eddbbdfcee7b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

