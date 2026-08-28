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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N6SQ7XF%2F20260828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260828T194047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDziwuXM5YfmKzShVF3NYA%2FIsYuPqVp%2FzlKZphalJ1PqwIgN%2BHZlAkjJC8rqHobV1V3Gxs6BJwEgKKbb7O0r2HY5x8q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDZ7ay1T8KqfEp%2FuaCrcA8sef1MnM4TIvT%2BGs6ufFS%2FAZENhOef7kbZBwDfVnRI4jY4fNQ6OvuODrQ0Ls%2BnQR%2BzfItUsjDuGkbExZqHpavtHfcg1hbJkQgTaEBxOVK4FelECnXb6SPfhj3HxyaLXiDOZCNx5AIydVeAK6vTIvgphnGvOMX1FH9CVTh9%2F4oo1cUPSWaXQ13qAtb5zAwZvBtUbXjL7WiOoFaZ4abuBVSRBKLDCzkisVvYolo474CiDn2oBOtac5h68NJ5z4BIrXwqs87Af%2BnlNt5Mp4tNqEiTBLXI2lLsIsqi13sSGIvECKxE6XwH19kxldI%2F1fsLfQNZNCmuYQQOFUAd96xG1oja7TC94tzMuPTWXBy2Dh6Hn0ayxmvd%2FYQK6EF37Sf5uLZgpwddIlxhsQJgovpkaLNcW%2BOh%2BNJfi9BCfmxnYcFL8gHOU%2BxeZFWDxqsoGSyBYW18yBCy3oA4Bmk%2Fdp65ggRWDxtTKm7uwppDZu2MXnt7Umu1XBtXKzHILxYGIGCTdORxy%2BOTreORfIOveCLVtAHVpBIJ9swxYByKhb5ImgZImK7O%2BqRm2OjWgrJpNdg8tMa5c6yPqfb7%2B3rgH2ZSBrz7niEiqXSvF1iVbbulUQU%2BbRQ8V4%2Fc3rj1Ng3OrMNikx9QGOqUBGVDsfrL4zRTth2P85o8qO%2FuGUcsmsvuhafi4ogb%2Bz0qRzNx%2BVL1Ajf2CQYNf2s78IWo5SNok%2BK%2BIO%2FpG9YXSVbrr6HC3dwZ0vJ9OBGH6YJpLrqMEfwPwgPpSo%2B%2BzzswVJ%2BLgVPWkjjkvz9yxJwa7PjZtus7NC6VZeRQ%2FRPDhVz4qK09VnU3qyA952mKDzyglhHgv0rU7BgkcVgsEUo12hw2WXU3y&X-Amz-Signature=17cc7293a5a6edaeebb6691d1d963f4e60de2b282eeda5f2e9471bd757adc0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

