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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHCI42Z%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T171229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIGZjkXWT4fr9UH%2Fen2ZZu2YXjoZC6Xi3HlDhDMshC9DXAiBVVWJwkLJbxQlU0XIGDZskwdPFOjNdlo8x2rOlNi%2BBlSqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGZk9qfbjGcmfMUOvKtwDDVmD8r4n1Hxs9wGjEWnZ%2Fen7RNWEm%2FouZy3Yne%2F5lnpEiPMWt4IRPLGeK5DPmpCVFb635pvl5qLfoP3HNwijmYAURK7nfo0uK1wshCQL4hHJZbuRwZYq2yHb4tSl40nm1%2BigXKehyLAkCj2Gsmll%2BKYq76hE5VRAHTGmjiZUE4oRuQh6dUr74VeiSN9Z2Fta3XmenZnoEpZvNglBoIdFT37cUEOazEdy%2BA3T%2B4yFZ8gmwkH7KkKIqV49fbQxlweGQGwMB0jimS7UM7xtqXyjdOcW94oM0ACMoklFD9d%2BoaqJjWMuyEwXGpuGHt439u9R6dsShKeEaKZoaIavX%2FCflMj5%2BgiPft0qvd%2BUU4sAkk3OUb%2Bw1Z%2F2kVHliArWyiftCjvNq2ObQwqK9s22NbKYyiYfQ4eAw4VMJ1lyZYPpTm79Sukfn0n0WBTCLLnYfcrMS3a5YluO2LygpCAMa4p8ebteXbbUv724tQQl7awKLZOfvD%2BoARBXYSfismbTrgdVEMoJme8bRYctUH4beRVx4ncADqIB9VqgMScIUw4F4EqakKove41KOgfMKMW3ZGo85ljLp0rbk528sGKiHzPsE8Wfnypze5%2Fb%2BRmTtUdLltKrkTv3Jy2HeZJs7cswyfTa0QY6pgHWDg6bVJGDOrStZcpn%2BZnn2Z14x6FsBUXkVs9usg55ZysYEGb0%2B6nh9hItNOQw9bFY8aG32Sz76FQZO7BRUCApNT1Q%2FPbpmq9V%2FINvrXjlP6Ldu24w%2BnEm1K0VesCRllRN1UBkL%2FhIsIo%2BWk2CVStfIDHk5LkVDUmKlJVQq26bwGE7qpIH%2BuI9K7Kpt6WMceWIqNcboWYQIZlXeySuXN1fGMsSitXF&X-Amz-Signature=eeba486a546f0cc9d7e9a5ae074a98e99fd4363635a40dd0241654925fa78ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

