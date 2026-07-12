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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYO2NAD2%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T142035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCVM4IGRbYAg7SGdKNQSAOm7a%2BQWlokLyD5ETN%2BC7KwEQIhALVSdGSIf6T7N6cW5Aa8NxJegNkUij0%2BEXOYHsbjWdrwKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNB2XRxzUryRYS%2Fagq3APOSj4OhraCH%2FgqPCNWmRo9BNjxKrREMWwtvB9hY0c%2B87Uo%2BR5s2nbZQip3dBnVBnTXqLI31X4YMQsrb9Ak2VcN68n6tHxLO9K5U1ka0BO%2FckL8X54ePLobmd%2FeU7rJ2dWXqFPA61zydEQZfgpp6wMEK7XZaHy%2BBx8mpLRNlyK2Q4Iak8iOCD2V%2Ff2S6SN0F7o5InA%2B8YIbAPgKj1o7u3lfY52WjH8e7b4Fy2SO6vWZ0i1kw%2BJgitWaGyWw0uAS545Yz02mD%2F6x0e9PkF2MOLO2EP7gp2beVYrusBKM3Nx8lOjcO881w%2FRAgZ3uQwN0oJZAlkL5aqjxHzNYAOpvLbgT9HoBMkf%2BHziJVtj%2F17ELsoKOANjqpwlGTKaRTcQofNdiTO%2BGXET%2BnrirWoiRDFvqWR7n87NQkzWEcSQsPLzR%2FA%2BkeyQupOKPZYfsYpHojjelsRPXhJRIf%2FUnjB4TgI6mpnFCAcaoZn3iuNvItjffHP%2BJHL8LTkErCzcdVm8s5gmE9%2FoDQm9P5AHfyTi%2FynV6c2xR6nT%2FJcjXz0aR3rTQEcapKWfp0RcDscyY0m%2BAB11Y4eBftm4cjvTbtLJmrmvJozWn9rpnEgxb0ObhLKiG39u3MvE82lUbmtTOuTDj%2Fs3SBjqkAYy2taMxo7WX0ZPyniaJoVsOFSWZtx9g91wD45A3E50BunzfOm8oPdNnbaay2fYWF5PD3pb%2BeMK7mo7xQecLbwRFZbxOijq75Stuv3nVahhXlzs9jnXmwkqieBB7Fbk6yQl0mY7a7G6MsXi0tp1%2FfQKil3nKcaMAiLE84Bs2ZSxLK8OmW9FlryRnmHJBDLcqZUtjsXXCT%2F4oE%2BjlBf9ihMu789Bo&X-Amz-Signature=f3c98f6e2d04953c67480fd69e542c3613fba61f99c89897365446df50b7bad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

