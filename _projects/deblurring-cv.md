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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPVS2JQ%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T075402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCoOtauo1IEjHY0Yhh110Amu%2BrlCoY7igXAObx3gUdyYQIhAP6KxxiJGsxFDRDq7v9fCDJaE9atm1tFbgUgnmSTx6TqKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8FGX0djSBfdcYnBMq3AOVF3qTNFy2sQ%2BICOgkv90%2FdooSZT2bh%2FmjEjcWHaPTAnHqp3Ps7MjelWzRrk3bifoVdup71WViWgSWaOXpUYGYZaJHC3uEL8slBj7f7%2BuPTmSSFWKVikGxleuG97VHxBTnAgu9v7AhrxGLp1x10dMtqKDppVrfjK9qmyPM8Z7nGTLQv1l1qy3nlNZ6kelnKYffKn%2BU3A%2B%2Fm24ugiC5WyPWbKWzZATKQZ%2Fwekvi7NgLd41r3%2BGrL76MV92nJ0bVty8PHpB8UgffiMDcImXG30Pg2YXUMxzwN0VLwqQ6AfpvnxfPZ9uLxLtzswyiBxrpkLhfxo089gzSx4YQI%2FKz0sTW6Bp4oua3hZDF9udCr36rYZZqjD9ebfPiBowB7Jkh22dJNzo6zrTrfRHi3FAoLE340IlOPcmOJHGxOEuKnzxbvTcxD2%2BjAdOz1wluZ5oLRZsjghcsylqineX0OeiiHnfYtS8TKvPTtgOVhPjn8n1Atc4b%2BC6EfcKG9eVr5o79CBoaQiLNzG8FIC7bndhWWHpJTh6KHxDE6iuC4z4zFM4HOrzcye9%2FzbY2wPmDSStW38qD4kU5l8LitR%2FDrn0XOWDAEBi1juYUwP2QRHZKBQ19cdFfkG2v9JPt8vIDzjDyic3SBjqkASs2i7bS3nqvG6b6eUMpnkaXzB6EqD7oGwTFN%2B8iYDHq0lfHrmL524Q8X7USQiS1AZfCLpqZX7ieJSDigZCGfnP6UhXTuqo4OOzYfDGMJJ3%2FEmBOKFB8WJU1FwE00Q2e4X2K5DAm0ehpi1ODdRhp%2F4Li68tpSS47SAshCaULHR4ZhtlBvdSCT7ky5ypZFDa1gt0ZX69dh7H2ny3cm18NBafpzKHX&X-Amz-Signature=818d50f290a02461ebc5edbce01a452af88263bd6f705d854d90069b18771411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

