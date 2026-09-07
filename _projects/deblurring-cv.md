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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJ2PVCQ%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGGJ%2FLbWYC%2FyNzbOCUo772Rd5tJRv8wsCzgE1SpEX%2FPxAiEA8A3biQs%2B%2Fk1IePXUKIpouuEd%2Bt1CCD2ehW90NOrd4hkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDPg%2BpzaaU%2F4srQh7eyrcA0I1JYtqiBPpvWHLmf8yzuPuYeNVFtaM3OrQ2r0CnziWHWDLLxdRSVTQAhwlyNoCKjQyQFQ5Pu%2FvpJzGMkCa6XutsmW%2BVPormaHw54D8HEJO0%2FKi3oFFf%2FbtxQuNxm59aJ08SQtdwF66dO6n%2FRdzykP2FaXPAE3BZ%2B9Bt%2B9UoIpxIIvbaxn3HWXBZG3R7caS1d6U0ykKTG7nht6DzgqmablV1U3yLhMS5g0%2BwyfNlE9U8oCuCLkULrbe%2BHcFD18jUXg9EBdn8IxJo2pyGbIBSxMgB9J9zNRz7oHqnL9Cmjr%2BwlZXh%2BmUW2UhD%2F%2FMZLSGxzpyL9uRa8bQr2dWSkRBDJzpk0TyR%2FfpXnppI7JHs2wSVyrOu8VWyC7d8qWMDkrYZpum8maug4pQFhHb6KjcbGjhnp1xlcvz6Q6GYku0xtwcLQPP9HDb5RZ2IbzkjxuclYJs3T0edbak2SOFtmjyJ3g96koNDnw80itV6PaE2Mz5bD%2FDkRVqzMcFckEGjE7amERgvthILsmFScXiP0yoIcLjKsGH4DHTEv1S7dKqGbPtU7MhearUPl36Qe%2F41QdIX%2Fsa0qMA7gp6swnan1KFCuM0XrueAfQVqWTgvcalhFI9mw7uAqWpj641mSnsML2l%2BtQGOqUB%2FUSLn3vdyfP1W3fD2zhP3pyEC2%2FwNntlUB5e0Lzrv7CVAHaH4U96QFkHcbyTnGje35LYJxs%2FajF3nva8w7InUwlCF22c9hgEzCRPEhnGpkf5U4dqBVZwaaUXIXT3KaSYeSpJrfoSYhCd9E9zXz4sPvkxF3hnF3LDv5%2BQyFpiFXICuP4z76aZp65jwieV198zcmUD5G1fyOrbx7XD3Xt%2FrL0eqjPL&X-Amz-Signature=159ef5b74fdfc3d711de2ea6b418471a4b1b841b722d51add58fee9556d5986c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

