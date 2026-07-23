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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K4I4FHU%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T180503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICH4UwBGwd88p%2Fs5pXuVQE7Aj4pnLZk3ORLxo3Z2j4MxAiEAnVOJ9ycF%2FcVjImYlc4NcKZ8ILFPvgDKS7NMbrTUAMbYqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0jG4vW4iihJl06fircAzY8WeMYaNdcrbhGJRiWx16Fj%2BycTPt5zKhioGGmnAPMbeMAumPa4eG6lk2SVRXb4oBr7nhhKw4PgsjgLBAbvx%2Bd0k0OLwiE%2FuFOg7G9zng0thpwgukdev69rvEpRl%2BA0m6uGbGt9zW4EfMsSDoe1hzPHyLChE9gEdxi5lBEaDcOTBc5iuepL%2BJTa1iKhj8LgMz8lSvOnBHYO6V%2FzyKZzpxvRMlbcTnHHYTvytEyI9pUEBNKfJLO4BOJSf2DgQ4l7qQWT4%2FLyUdGEm352Ys2JRXRnvtefIPK8%2B4Phrtl4%2FBjDB7sUT4nQZdVcwmcA7vnI3x11c65VZVwNuj5NnY2B9HSZBfUgTGkXHAgXabMVR1pKLz4Tq1veLOIIgspnJg9axT3OuVNYhNYdig26%2BGcZo1Ccqf5ErERguPe15LuJoJPmkUXeEdRBflOLOasUx%2B8cLc8cUYD1taEXZZ3JFb2NUy5wlaihswEHhBQj5XK8ES8l5e7Hk59ecGGayH1zvICK97a3H5rkgcoeF29mEKNXTdcC8njvdPt45S4las%2BjN0m4uKkt0Lpsus%2FcWMN%2Bc6PpjolOB6V8Mb2GYbbNOObGq6PVHaFLrQg68L3QQprtofUTEDadwuF46Bp%2BSvQMLiKidMGOqUBepgY29nN5Dg0%2BPC9veNk8r5QhAZef4ID8m1v4ydaXIjDjzI0uOmgvLg6yq7PsQj7w2ygUDH0hvY%2B5IxBXRv6pvuiZsTLcwdCpf8MSeyaFdAoIxvcbI6DtYUxBAEp9CUB4TGAoZi4r4dtc4lY3fxIdmq%2B%2BjbkPqN7yQGu5UTRU2RESptGdihSrgM2hJseQk6uFdJ%2FBCk7BJYsgw0%2FIK68mtw6vmqq&X-Amz-Signature=f3642037e40d672a2fb9a5803f5a3981cd38a0fdf66ad8c65de1dba044c5651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

