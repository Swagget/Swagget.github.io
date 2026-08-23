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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HSVSGV6%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD88p5lhC4AFeiVKhMXJ3UEu2TmZe%2BC9htErtv77JH14AIhAOyBTz6%2BEwMt%2BH23It0WmjSkLwNBTC11O38wfaSph4sWKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXixCEniZqlKYc%2Fg8q3APD0xF%2FGCLyW4xm%2FnoEZlW9LBbqKGRNnI8H7StZRRDwCxcLzeAAFU4KPkntilb4T%2FobU7cZVB2q5t4UnqueRsjDtxan0ruWeQ4kuluZEmlvgk86Rx1EDuD7W83BPh9sFHLxhunsG0eMVLKUmNGhzRlJtu%2BY2zTZNYodRZG2tVx020OFjS0F1kOkr9PJYic3E57d44ah8DJQX6u2fc%2F9LcH2bBDKbut6r06PmIia%2BNVMgD0AROsRRpjREpZdLvp75QOY2iOMhWzyrJpcMV3ZjTuQydNAk96G3YpJVsWdm1QuzXVSMcZ3mdobxmY2ldM3PUh5g%2F%2FqFfB2wBhSi6viLK8rN1IJrYaRdV%2FBfc1KMEol2m8qfEHinVc%2BsNLEx7eyV%2FkLMs4lo3f0t84MRu8zJHrUH1YeDsOGc1s7xfFDx2HouD5mv0KJ614o82LRwxUb8UaS6SbSVMmXVQVfFs45BLgDaSDl9V%2Be8HLcHJPfApT8%2BBTXYb8RtmQafCML2Vu5UvnEBUIFK4VVW7vdBv0QUVY7jUpPDfgs03fiTDTGb39%2F5X6E128mEPYz9AGz8UvkvzAj4QWSD28a8tXl8hihxKVODH2VKcqCCaXSVVDv0M2Sq%2BmLmkjiv1YCpM2qDzDLm63UBjqkAe%2FOPUhbW2%2F3K7l%2BmZqe6h2Na2SpLa%2FgUYrm2vJhIRuS70nEdY21HpaxVpCsP6D2qPn7gYhdh8MKmUvl7u6npCibh16wH5sgqmJJeduQU6PIEPy9l8G7F7lND4crBLM8gue1D5nfdnJOjFoA7NbuyYcDO4i2tvbChO3nzjVDBVn8UEOZl84aWIUk6Q62IBz7PEIJWKlYKfvDHk310lYoNbSnqghk&X-Amz-Signature=7eebb2c30c83ffbfd300db7ab0362344b04aed061e132d0ed2b3cd006f75dd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

