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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFCOOAU%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T185714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICiLQBGDKJ3qxmNUokoUutD6XSe%2FZEVk%2FGGOqidFwPmKAiEAoAK3H7Acnr2itWZDHTwCv7qvujboNnKdIfsM9%2F5PQ8sq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDDOftL%2FOkaFhDDmspCrcA2A2kyCv%2F1G4IUPd%2FmslsWphyMz3qnaPc9D6NDODxbCsdjLGmBMRqhq0lET3JztjmwznsuGcjUWv%2FhLJDoY15gllWUyQg5nntpA2VzwIOPG86LotADzMira2m0%2FuRHFe%2FqWA%2B4m97WKLZd5h39RsS%2B5xXss6qItR6cUzWUAr0eazbqlN8hfoPGpvT7r95D9q7Ed6fy9iHslyBd7pYo4Is43L6siklS%2F7hdVHQ9rn%2BgEpHAsjEA0%2BKIjIaArBa0d6PukwRTwS8burD7NxKo33yTCv0VVj5l5tmFrl24mxlfr%2BPPXM5XMHEz4eaHwIGTBIO76hnm0FpbTE3sNrptdHPj%2Bf8gfb5eDSBq3Et0UioyYLKOOX543%2F2ER7JhwziNgZGPWiu%2Bzx3%2BOmqf%2FKrzhXe%2FGtvHAmYZF72SpYvMzh1r1U5rx5YDR9h%2FoXmPQ7gRoC91llEYeDefNbiaC3%2FdqFhk7L7nssP036kOEgGk249%2B784ybJQbZUahJh%2FIPQ6AxoqYhOXcQbrar8Hsrw7QxA%2FwJzLv7FDtEzrDe3sl%2BCiizuJytzfxNJSKDiy%2BiGa4XOPCVdL5YBDe1c8oC9Ilie72wkQ5TPt7qU%2Fd5hEMBZmV0S3bWas%2FFh%2F28Mg9FUMOWIoNIGOqUBYWMJNYr0foZUGQTGimi5ewflNE56fv2aL4FpSPxxS%2B73paa0q%2FmwP3HQLsmJ9ASet6sAQKpdin%2BZNIGnFtndjF77RFCkHBgy%2BiuzQgPZNfN99Bb3L3%2BFDpxSvBoPSOq1g%2BdTl3JqO8fPyb0%2FZN6x1TG7vLJJoskwFQz7WVYUg718wsSHJKqcC0o5Y2vHqZaqg68TTPQsTtZtGrySK5YXNrDSIxjq&X-Amz-Signature=f3cbd38e8d6e6942fa391be1baf52ff09a91b175e7cd931248e9136c6362ddc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

