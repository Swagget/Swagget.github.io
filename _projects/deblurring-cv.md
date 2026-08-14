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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672K26E5F%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T211317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEUmnk5pq%2FPyDc36RNcgpR3ajnACSOr1p4eRuMZi2xtsAiEA9F28oJ79oX5MUWsmTiIExBz7Wlpi96NT4xfDuamt1gIq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDFVKzNDQY8nWfYAQ2SrcAzb5%2FefZ7gFi70FqdtpMoov5srnpJHeKRDqKAx1OYLn0wHa8t21UBJpUHMKQMR8%2B9PXrpO2ONcpX8Ygy9ECqP6Q99NKDZ%2FHui%2FEkCpGA7p%2B%2F9oTVm8Xa1kV9Pp0tyXeFDmFxLmiu5EpYUXUYYx7KCyM2koW14VmMjwnJcNk0po6tBU77TIhr1ET6mMZGgxMfj0vSA9hnFgHjkWhU3Ba%2BTmUI9TSmr5TRGbsodBTn1b6zkupNoKi7FYDmFi%2BZ1TQqjYihn%2BNLR3%2FPlxvR2I9DhUKkn6yU3r368xmuUTrRS0XZm69cAoUJWuGIK79Voi5DdQ%2BGfd%2BoJbndU%2B8%2FG%2Bi9H7ITJ4%2FBNxcwRreoSlWIiS6ukCSpSjTO4EuIGFLlT98jUrJvvMk87chKkcac7OMuEk2zyvC5p%2BjJOmI7go9W1GZM1XMoR%2BTmP3dAX3j8bCf3vMdYm02e7yVgO2vdehVpuDPyUMhWpEBf5tp%2FChLU1d%2BiM6X9X3%2BxLQ9hywfupoSHwgdvV%2BQMHHNGUPJ6fZx%2FAXkTGd4TK9vItTtI201FRn0d4l7%2FCEFfgQwgM09hwYBdpvodjdwJ9hIQVElVuxLwTjiOpPtrSk3Zf%2FbXVXR8AwRGsd9GwB1YKs18QymsMMnz%2FdMGOqUBjaltLMFSoDcTbZ49u%2Fe%2FEiwrp8SWlFvjHH4JCUlmj4F3ItF8HK8662seO8L9TcYCEn%2FuoRwOVfK37Iw9lE8IOQVfLgY1EgcmDVs7p4c1d%2B%2BxhqIph%2B2S3efh6b%2BMw95YCpI8%2FoRish%2BWe%2F4dyLWhuDZRseJnf7YPkdy%2BzKrBMEkEQbThmmM2LIYCHJ1NPEGThmxVcpub9OgxYGQW6F%2FJxXPgIIWD&X-Amz-Signature=328a2e15006652a868b8e1c73548f2ab67c722aa7dfae03a23d4f9ad50f178d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

