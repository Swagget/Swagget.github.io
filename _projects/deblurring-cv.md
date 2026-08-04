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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFNPF7H7%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T151329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCo1hduM7CCADymkmE%2BiIhExGBK%2BXSBgaldqnbXJv7ADQIgLf7g6DgQsOrOI6MHbGwpdUeFjNjAR%2F4bpEBl5IOJjpUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDG%2FfTSHx%2Ftuhnde1qSrcA0i3kUqI18ME2MfMAmbspLslDO1Izurau7pbuj16YaRlVvq1uiDvHVyMEGZWqDqZxo%2B7u9jb9aLTYgi5oK5fR1G8sZgPH4T1Ijai9wmE78N2S2RYpJBsT6531rd9UjN7DLvxTZzZ%2FpzswP4q9lZIQN7ZVjWXKg9054G2udfONH7wyi6lfIrNjTRE9IZMnQiLbgIn05HxL%2B2P7%2FXcImC7zlHY7B2fwLWeSA8XRHxsSPvFennxHQiORWsT8ixTQefSTpJkDzde%2B4eO9wnHOqbsjQ2arZEbwVLYqJ54KOauf88NvB5v5Wvn1bjOOmT%2F9K7EV8OB2KSpvQiPRBjdQ%2BqL3PXYCRQ4PoLnRvRewaB9YOuT1bNgm%2Bj9B5S73EXB8CIJy0TMPY5I9ocfyCCzVwCtYQaCyZjjBshxgsBoRFzcfRlRRLdzNcLjrJNIPjDHqvNtATfOjakLxAC8lkUoythwy4GYRyXD3INw5RJsHx96w4N8icJRqV005EBs0omOkVzskUAGAOw%2FlIKrXtaCh9m3jDYo0P8RF%2BUOGUgXjDNvm7q41s90c%2FmpCZ%2BBspB7riTiq0N4eVUkUKERyMby%2FPHNiH2BhMhil1Z8JTO6uFlv0sFVN7pr4nfTZbFh08K1MMbux9MGOqUBLc72DR27PIJ3RsveyWrVPQsBeuBiPrB6uds2aFDI%2BvSIMZtBTFWeFEs4JhNbeDC7kliQbwYnd%2FklbhOdc%2BMSbLE3iFfDXeYXyUOF9%2B3aCArAzW6FOWQvHtKtKqKQnl0qwxTGI2IJoMA0RhwC%2FnDsF9ZEbJxpn8yRdaWHajd%2BImiKHbeE65yhM7v9wU%2BxcwcBwdnGLEy4Y3ca3rCD6XzMCbO%2BgQlr&X-Amz-Signature=f50f174215871464309948c85c4c65d661f4156687ecfc4ea4fb9e12c812501b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

