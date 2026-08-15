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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I76B7SW%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIEbn99LyhP2ZqZFE0DRpYfc1xqngCChYawlivUgQwkhJAiEAvxHO%2BxffbO0czcdhrjDVx9cAY6N5F2GKYqBDR1NU9NEq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDNUO4yrWso%2BfWMHqlircA3Xam8WbX3%2BgO90%2F1NQtEkX5iNOpr3O28Q9IDsaQHzUKV0LYQxs%2FdlbIvHmnpX%2BmIeiXUZboab%2FQwuiWxMklxYEWMnHqGYQymK57DzZTSlW14KJGL2ORixTUQI18CFSPoU%2FhlNa8%2BK6HdpH6uWMxeSXJVNZyhM%2FXSzFMbYXAuA%2FnXfxkT8kMSZqZ64jAo%2BUKHet5kseSb3aW05KAQltmef%2FVDk7Nw87dKkOwOVOZanUilsZ4ZbSANSj2TTu6gjcQrWUymO4zty1ys8s6nLfsAuJi373r0Bfo6Lkkp7dcde0u2sCRdSOUNbvJk0bwdqHsuyQVYe49ZzRme7rcQ7hlNcmda%2BxnNAFy%2BuZhsU%2FUOnnZs1rZ2LpnBby%2BcP5tAPM3ez%2FZZdgJCVTg4XcBRKpYyn0zrU0ltP4iStX2iyfBHsS3c15145FaLo9XfTVNDKQ0UEMK%2FopqvQhgo1X4FnY%2BFJ8eAOj48IQCuzH2qjQVI7keGA8k96gk5sULfQZEC0Kg5AwA%2BIo4Dio2GxZZJDI7%2FJlpKys3FyCl%2FkJRDt9dJOZLuMfTy8e7sT1%2BUpfRPqOd1V%2Bs%2BShh76clEHcSrEDO%2F9pLjIX%2FUm4XPe4IgfofGWgvD%2FdFBFYEFAxROAyTMLfFgtQGOqUBCEm9nvAQJfzVBhysXOj15wOmawaCgUtNzRZdvXgoSHMjmjy1ISV4wFptCM5fQCPAHpje%2BALtQenx%2FQVY5hwUWsK2ZFb0eTb1l6yzIPOFGlD6Q0BOBiplTTGVl4tX7BRJ4YuCwPq52KHa01CE%2F47w01oQvhFhBURwVtHxLOHDZCMeYK4cqGRNX%2F91XR7UeNUy2sbhnkcNAmVWnMNuM%2BazAzf%2B4w%2FC&X-Amz-Signature=e4fcc1fbcab7af778aea188cc3b7f3d63d43cbc8270cca65694eee30c06b7b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

