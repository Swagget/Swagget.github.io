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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFDQP3GM%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T090051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi3V6JuZh%2Fikd4p7cfGmKecpZpvRIzPvPMfNJ5QFQfowIgEnSGQLbi71zwkVPmzztmTP2KtaMN0Svpn0TJ4Be0HBsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDGuiBtwjYlkxs20npircA%2Fra8rxT4lHXfM3RT6uDScW14kncIbaK2m1i804evxoUn7%2F8QgH4VpDi0fA%2BWXhsL2%2BxsmaNcojuLcH8kRTn3uC1jfDsnwEdA6IY73R2NZrIbZ4AlEba4sMULJsuJ2fzqKRHkgr0kKxN9SXGnFSNoCmzPRcVLiDn7ODEjnf7IzbFCh9cV31nWnhOraWHLdaMPdsG6sYRdTL4lDpE%2B3iRcWz1hgKTMa2euuVe%2BLZG1OaSJfPd5UJXKH1sDP39mHjkZJGkHWUZyzE3E4E0Gi2vyeWnbLTGrmmPDjEBM4JON2dNUwOZBWCITNuRH7Lh8NFHNrRJRcClkcOKkng2bAsuk5LT629NEjP%2BbN6B5RqH3e%2BIZ4PnFNbwAixdExf7Y00N54uvgjGoREaqnxVqz0RAtwXRmVuDXYTXsFvVCWkAowRuCE9c2I4LwAKjcfSjHEx6tWCpxFEa8skttUHQBdBWolBxuPpJMUOxB71NLEg5%2BRkeFhfI%2F1NRcGVg1O%2Bj1guFv%2ByccFSZ4qmZ%2BJsTVL599rZnaAFvf3uiPTj5ggg4ZhFYQ9Kbq8RW%2Fyb2OkeNsYXSN05R6d9wam3vela%2Bcp34QkOPVaQlrLJM1Y8zV4RxWWFF4TzvAfCz6%2F9Vno5dMJCditEGOqUBjzwHCgBGmCzQwkIvdhqJQe1cbYOr38fZn0vUbTJamwyjfkjSRqKr2P7Nj7Qx0beQjMw8XtizzLbqQk1l1JfKzvqSUbcjG7kYr43%2Fs3UhdUHOQVSuntXFzesvinh7YZ1nlCbVlk7vJ1b9UKzRfzqwHPX4OqklRTOyDIVp%2BljBIVHAjnv5bsEm%2FozwS%2BY1evY95rb%2B4Oq2FaNaWJ9%2BLKjQM3w0kxcm&X-Amz-Signature=d2d4b327ebceeda291f775ccd5f02a043a261efee2907023dd2224ff34c48cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

