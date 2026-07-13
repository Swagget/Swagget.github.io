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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMKKXERX%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T214150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIDOn9vzjGT%2FodjiOuqT2FA9bPqdAHPg4mSY%2ByMTKyApdAiEA2iAWkI6rGWbKJeByFS2iiQLyBwT32f9%2F3%2BnK23EqOAkq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDOHflkLNphPr0C25vyrcA1L2yG6x5zWTwfN9LFCjRJ2S0QtLgcd8v7VGnFU6FkUavu0LJptIRO%2BYd5Fe78WPqkwgVzsCgdtYxF4a7RbphRymJSdfYOe9G9EUD4rhDTKhORrUyimmCUszEy0XePyUdydMfkZdEQwylzcqnin6ESO1RLUnl6ASQ42YgmaihV%2BCgHxIE3IJjwJJu62cBt4J1ucg%2FFzIOduyksd97jiNawU3D2s3vXUYQErshBw7hq8jFd8I21gmzOpbn4PVqVVLQ6fGuMc01ybg%2BmXS9QwOSjJ%2BWYOxxdHG%2BjsPGBqoumiTYSr7DFbGMJRZs8GeTSv0DposEgg9qCmVpuNAApSCejck2Z8kQBgUn9Zob8NLshtfrEOTAWhTDx2%2FkSJnyHx8y5O7ZaMikCQqYmJRq9sVAa0GniAPtIiYl9SsKCugtb3w%2BvlijCsyEC1fBcz7v3rJV8oRPIOmICdzFfRgZ8aW%2BzMCd1AM3nEjVEVt5%2FfRBTlVP07RRja02LK36%2F%2FiMCPqjmG2jDBBG3i%2B6235h76eaBi0CFCGk5UUTig%2BoZu4Q5Cu0Kh3bNS4uM%2F41ZpEE754tkMhE0R35aT9BSDjmuAG%2F8gyWz%2Br4XQOfJYu%2FTtwAdiqQeXz3VLyuFdCUn82MKCD1dIGOqUBmqMV6%2BQ%2BeNAKq2Cr7O1f%2FIqTRzndaOUFE6EVUEternMMY5%2BNN79rX2XpNmWH2dEBFtddAXYZhoms90zlEpwTMiIym0SrlGvPOcO%2F0vlJyNo1bsdanXwiOkTzu7xshnOWx1LcRdigiFFZa%2B47HxlwvsLSTg1Btiqamc3TPqo2ZxlHcLuBu6hx6T8K9F7zblc2JQKl3u10HO%2B5fA77mwp0XkXNUQci&X-Amz-Signature=df500ebf4629927431830d98302261ee9cdca112bd00156bae4ee1b66e4ca783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

