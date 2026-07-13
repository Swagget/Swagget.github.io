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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI72L5LX%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T234017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIElNDgU1RcLbty2DWx1bNuMswa%2F0zQkoszTLPOEO36yEAiEA8ComiYWDHHXi%2B0mKwY1rvHohnMcp%2BRBZPRGerAv0dyYq%2FwMIBxAAGgw2Mzc0MjMxODM4MDUiDLKOxuvsqcHIFro8BircA%2Bm0q2DJOrCkGPKUwrGXcMRl3L6k9IL0kDJWBDDDs71Bn2BueYPmhB%2BOtfSi2ThxkEC68DOdK%2B8F7iMLXqm5RfPU1dYMM9mRAk6F9bdXyeeu7AqZ%2FsVO8KqXjPfg6Hsg3ZmdN1cGTzABiXiR2DQDs7vPQm3s51DYgPCrG5MsxBpmOSgcaFRTv76BTlWEVoTRf%2BcUEwx4NvZ%2FjBZ3DWkCLktV6RvSfwdMcoaDRVEK0Ux1h2LR%2BMrtiEQSoRPeaF1nPbHsv5jQuYUMykSZ%2BEUBo2oMfkivcycxuHLzXkCBszsnVY%2BsyRzNUErO%2FQrM9Bf8NDtA%2BSXt4JM9mSDw2TbzYb%2BnxZ6vWmV8YarbJ%2F9Je1CtL1Q%2BbppfKf6xOFbMWVJELVqYwDHwLQHDwTk7FyrcPyFciUJ0xaQVuRKsBN6sFrvCEdXN5cFCspFNO3FF8WHecYCftsC4gk%2B%2FfdMIUFIkOPGfBIZwQkmFHOEGBsQsA%2BM2liIVeP9IP24XHrkEBLD5UUQ%2B8%2FI3hvsuwzihNfgiZysDdIQNg7kFB4FxBqLa%2BbYYqo0q8HMSTccnUWxKDvNHT9DyZRUtwrJ9hrQRnAJP%2BEDeMPwZL07HL4l2mMGEMAgVjvNKJxo3vxKn%2BQC7MNG41dIGOqUBYwUs%2FOmrfDT%2BMClAn9qgj%2Bu9Aw4YrLaVjvyuMLGvbI90c2qzfp%2FaW6iEMV7YK4s0v5HjXKVTLEvaGk9nCig%2BGO2jIG3tYtHO0lWVwIciTZvB5PwJy5j7daYQrE9vuEWHcYwqtw53Ba0qcnU8TfHq1LAu%2B70wCM3Z4hHq6IogIxxe8GjlOUKjmJW5DOxWGbUejBm5jYjX0O%2BwOMGuvOjSwDCPoZBJ&X-Amz-Signature=e20ae6a5cd20edecf75be266ff7b4396792b84bbfd845bdc56dabd3f3d5276a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

