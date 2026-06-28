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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7Z5URT5%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBH1zSYsqWhgqe7gq%2BRhCqdfG1xoTrIdxH2MbDSzKXJwIgLNGav%2Fan%2ByQovhGy3jGHwmdh5kPKYwORNPLX0%2BDMxEcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVg9tFVIc6P0JvheircAy0uVEZe1jz4iZbJYiZkvxBhLBpwOFHLrKbfn9dV2z%2FyJSyOUDyRWjKZsuOHD8DGp6WJeEGGHqSLz8z1ihXuzMjdaU%2BSOvLV7%2Fx%2Fd1isvcTWm9HT1z2jZiFKFRZUtbD%2BSftRnu9DwtovJgmjUcFcjemLor3h3YTeeucir9Tnxt%2B2%2FCftob1EdDTCFD2juP3uAg%2BCNTM15FF%2FPPCzYH2F5eTaXFBIqCsm4FKjRlmPnm64Vg7cRznjwJA4DKrNMOsVx1IG521XC1HCML4SKWhNrchOqCtugKyjzl3z0n5qtD3MS7ELRWS%2FDD%2BBDfPyDglRK1DiNBy20B7V8d5Dosqx2LmT%2B3pHulfW1emT22NC8tXhjIW98TMz8jXMHkv8%2FgJvoSWsrAUAuwL249U0d7EL0ZfoF3TICXJPwhIPbpFE613xuD%2F3K16voZnnFqFnBhmeeXEuXOK4qOwI7PEqFL4zZOMEw7d4C77fOsbubl4qjDW9asaWLBeZ%2Frlz98AJZHFsop9DoIJrxNIAfBeR%2FsNulE7E1%2BiQMZSsvfVclgFK5aCexH4kwnYzwLquk2qvDnWP1m1SAJlVFVfjTuaW7k8VHFtAFQNPsTX5TDK7i1KMVjMOCdVGJ2MlsuONf0YOMKDihNIGOqUBJ6b%2Bx6gai4XbxDgeC6kGsKZhXcSgXMzUaRzWrcIzF0Mo4ES5yE6hEkaRxMAqQnpQ40k3Cxr4g4xW8KMR0riyTSQDLK%2BzGlcgwFNW1pAmaMJ%2BkK3rTAFAJE8UJtbfSvDP28E0HTW457WDsavV%2BNMlw3TcuWYzX4AyjlStUVDJCF%2F8RZqXGcDD1T2GrC9ota6D6TPBrQASRcqo3Sj5Jhz2kg85kwT0&X-Amz-Signature=722d49917c3ad229a351d465a51940b51f1d9b3e42eec0c0eade7a81afbff624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

