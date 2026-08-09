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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2XXN4A%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T142214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTNrqFY2zOoTg9EwFlZqtkC8T6NE5qsK3jGef0uGTWfAiEA9D4BxMUCv%2BQyQYIz%2FZwRBeUG5UrwlXdOiFWVKJ%2BEm9EqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVsSo1CcIIXwDI3eSrcA7MNTyRsTy8Dzvu7tZKH689eJcfTArpVuBh589%2BKW1WK%2BZD4jORaFDh7lZmOiaNpQtoouH9R0Zn15STp6YoWbc8bU2iu84jN6dCkWeMzgYtyWOGrW1JkSnzoTSCAYtrkl5W%2F%2FsWfJCWdTh5xr53js8gqx2TmN8NJA7P2VzzmZhrV%2FUyo38nUnK7Rnpr2sf6XLbl3Jm508wBHuQZAq3UpN2zglzSu95K0XucgG%2FAoMrIZipflqZjX3%2BjEPGruxF9cI4S1f5c2BIPLmSLFT1Sv8%2FWYzN0OejzafDSOCJWbfqypYOntigYCzwlpKbGdYK6xMI7VXKWs6hArubHUvaQsoHr%2FfwYkTtHTA6sJWoNPBPF5X0gCteTtQZXfVIoJEPotqWVg5ZUTc8VsE8BC1X4VRJlJeVMT8nEf4Xv%2F44p2XY2riVJFFjI6OIe6NY7BDaRDB64x2qbn1YYoE1dUSaB5N%2Fa2jBBaE%2FJJUXgVwN9rrRLPnEKkq%2BKUlXfsIGzdllctoJP84Ctx1ZUzqPu1wjDGcFLVfndZxmRNbezWy8WuDDCLFGmYTLwUC7Rh4g%2FptWqvAliDR82K49BsDr9HdaHLW%2F83wAemkjY7TggYaMi36g4w08btKv0fHRIP5WBxMKCi4dMGOqUBs8r09XyuVuv41cqSR65bI5YQ1Q%2Fkbu90jj4TNafNJFktFFT7Gc1kHSrCYvlBKhw%2F%2B4V4QcMAWj%2Ff0KyvKZoVd%2BcQ2KQs5Fwwmb3bB7Yj4DwAEeEMhnQF5iErRbVEHZzRUajfgG6gT3FoiQA%2FrHyNyFK7FPwj5V1ng0Nme6plyQo17jDoLEpimX%2FlL8gtHYvF3jmjOqGEOfVQe8AHtZAmFglQfMbT&X-Amz-Signature=b2d4b65a2634813bb1c2b138fe1b732330c3d9f63ec1e6198fe2632764e1c428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

