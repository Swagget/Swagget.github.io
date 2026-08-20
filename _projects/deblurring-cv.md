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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDNNWUR%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T042323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzk7XtJgWkuSjB%2B8ZQ6sGjyhiuKovR8hOa8S0oXIy%2BQIhAIH%2FGIB48oA8Imab6YuC1RZqSzc1b0Hd3heXRDyziuvGKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAVxgv0AU3cnjqT3gq3AOC1Ec0JHcn2YB4v8z3LyveTxo5MRdFKCrMTqBhQEdK2%2FEm0MGUbYGTYPs76T12xGnMSoSrQHxq1UdHkJQI9WRxf85S2TsU2wMGqxaZSItEwlTicabW2leCBkbLQ0GnYyYtX3M7IGo%2FRirdWgY0HM%2BFlDXQ8bOhgDsy0VgKj57ct6vt2rbH0Q4lJCUCl2U%2BGHIMtcwiU0l2ce9K%2BA1Gqxjm6%2FFvuNnp8bXI0mvIwpSNh0A2sZJ29dJKvGQgt%2BYvCHcozdmlNfapC0pvS5m2onCfKzPnfXsavtqTnh6Tj18tyr5tMpaM8B1c5ZYnyz8z2zgQ5Um4W0%2B6gXNI%2B5eQHveN%2Bck6jPQ6HsnAZm8wxZV6g7c37FpClgMpdVzWfAgbaekMCG3w11pWp%2FlqordzWeCwBgA%2FbW067XX6%2FgFMvdjJR3y7dKyKTJIizlKVrAAjJuVpv7b2TQU1gXl7diiOulhIIfrrafwtDSWqCZp%2BiAXNLdhvG4H368wDaU0m3X%2BN3%2BR4p5tS6GURuTRK5qaxdxW2NthCPHNVSi8zBoUeeg%2BJHaUKbTdNdob0ZaMbPnAbCNfmfgRX1mwdY8psCNo74KPXpmPgG5oYVPSrDCiJLRrprXkOlXk4A3bfr%2BEsEDDg6ZnUBjqkAXNa4aoJ0EWyZuNC3t3wMip0SBbMn2uYQH3EuQ8ilUycTX%2FqC5xGx7vsEuWan9XgJe%2F2vYuzYpmRBbm17mBtdQRctB1oVZhmfBW%2BTvDtC1fGP4GrVO5MD7Pgh8pwbfbmtZmYdVPhd%2BCPMihzL4%2Bu3uz%2BUGXFswB516l0zZBAIM%2FPA2oxLTnBByU0mE6C8s9%2B0gxPjyUcSRtjuY%2BHwaNg0vlu6Rdi&X-Amz-Signature=72d6b16608e5605664d782cdf245e3616c77d0fc98f2059428bf4f7172f09df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

