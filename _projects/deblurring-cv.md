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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2QYONZE%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T215623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDZ24Mbkq6BeV%2BuPOd3eHc5kajD9kdDoFJ%2FNaqcAthPMgIgcsq8gT%2BADMBFfV6XHh0%2FFLWZaxmDZkbj0R7L%2FosAXuMq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHvS95NY3o300%2FivpSrcA%2BnK7eHySf8mO6imCnXSR1SN%2BiHu1qq0ioj8fuYqVoFvPheW1CLWaZh1pAS9w2dUCqD%2BMXfrecFnx7J9wAXwtNTYFKJMygtaH%2B0%2BcBFPNYh00SyarJon2prmoNZN8ImMXdz7xuo5iTHi5bcTw6Ck3QVI5yaiyR8pEhTkhySA7V20V9NT%2BthPUDVD5Uhsfj4dryn9PNIVv8zuy7stDSJN%2F%2FH860YTA465PPY7VSFt25ApzS8uABwA0z5bjo3FuCIiVK8wLLKiFACs3qx5p34BpsumXo7SYkPYak6ESqH6xhDbQlOEyC2yvIZh6i6Tii1iCaf5iaeE9QVWzYGV%2BHKTFQTA%2BJ%2BJA1b1jNjyhWoHvbjM7%2Fzw49uiKXoX3Azykpl3vvA7xk%2FagF%2F9BVAA8ycLMLWcvNvaZ6A%2FQ5LHv8y6RKSp%2B51efkh36O2iJI0QZRq%2Fzip0W1DylYig%2BcWXulpjbiLuPAlHiFX%2FFUcPgl0%2BIdVsnqYodVkkea%2BUl0tIqK27gNg%2F0eisjLPRP4SU8IKkHNSqkk%2BLGTe%2FH722KmfPC5LR1GVdgihaV6U5PXoFC%2BWHfv%2FJixp2iuxXzevvbI0xIelmt5mIc11vlDQ65b2xq3I2cqNSsf%2BVlLj8vIm3MO%2FR39IGOqUB4lTulvB2mKuor3iRDeTcv0kDz2N%2FpqmGSYHZsidnHg%2FBbTrSzcpo1Sgf7EHp3V6Uk2h9OWe%2B%2FAGs5pSz8xMkH6vazuff6j320U9NYd8ZGFoUS7X%2BF53mZWJDKsku6sU7pf4RioVtSUAqrhMyq96hEa%2FFN%2FQ3CpDon8s7JYS%2FTfHmOgcZWJ3R6IpUYZhfwO2zjPdan0ZCv4LOa4Zjq8e4Ixrajtmc&X-Amz-Signature=af9d3e3c1239ab38f2366c4ff5536cc3494d4132594c2f18c7509a2300233bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

