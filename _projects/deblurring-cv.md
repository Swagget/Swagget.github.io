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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7XEXRJ%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T065119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHjFkMNQCyTLYq9%2BfJchcuIZ%2F1F1fqNE6LQD57UhmSDZAiEA3Nt6gqQYdA5wpqYxBza7ohTKiT2NM9CuLNkuO6GbQP8qiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2FApzAu4WXfYLIsySrcA99998Yckjtsl%2BP7avTceooCLkkH97KUhdijpwC8jjGCcCLZqGT3tFt9TEZvJY2h8x5Do94c4nsSCiMIyjg%2Bvckwa1mNW2pQ0DB2crfRa8SDY6V8wSq0Md2fZD1QkMtECK3sbgirThyGXxcNipe%2FBlovBkS%2BDxvCpTVbheVHZgtx3vpH25LuZGOkgiDqY3IhIWDY7M8YPbqgjEnKvjYJNTUWn0Q9p3AvNsKfNLWbZsbJnuv4ViG%2F%2BfAj0llbgxZ77r9bJ1akO%2F%2BMggoeeN3oQg8SZvdn3xTUNP1nytTm2zIk1Tv5b2j5M%2FROVIlNh0kvARSpdZSD%2B8pnNiph%2FfFg8ZWL28KryKC%2B0ZTBn6pMWVh7RlwaGO2IahFckqf7gtwI5zd7TsDbBucdqNMaKW5qJsyacJJ%2Fi698r9U2StD2ULfpNBGWyQ1FDvigN2iYULdOBe9Gd9rfCcJR1y83mD%2B%2FI%2FrxL1F0qJUaI2iGnCRmTc1ANhywnuOCEAki958%2FyI8o4KgoUzTbon7K%2FX7pSEiOuT1a6g7LFsaEjEd%2BNt8p1v6lAFXJMvJOWc832Wrfchdyuge1a3UnKJmoOHSDHPENnO5VZnFDpLEMU6jAFBU%2BpV5e266ETHUX4keQ00uXMLSvo9UGOqUBZl6aaHzFJonEm5fvhOF56A01Wq5q%2FXCz6P8J5c06OiDyoOq8DezksTIEvd9uv9aupEhrvJxLDemZcTbT%2Bi%2Fz5tH14Beg0gPBYJ3lN6jGFll2NzSJ0FBqTJEjZf8hSbGWFBQM3xfh5AUjMwNkOEDEZd1jfl7vgXOAk0nVg%2Fs6eVi2LnUXXMjtoqGpR%2FVMZiGmZzbTzbfV%2FuCWK1f2dMsF2yu06J9D&X-Amz-Signature=c6d320ab645c8a244a9e25037c032ca471b6b444a8bb425b8d8af574fecb7e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

