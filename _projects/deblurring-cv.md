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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466447XNUPW%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUYzXkm0mT0T%2FkX9P9lbA0ImYu6I%2F8jOTHCZTLa0PugAiB0bDdr%2BoxlgbupRKt0D2j1WPrjN0bLbzCvsYLuF2ocqSqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6pcJcwkIOKu%2BMK%2FKtwDS02wVAqzcrphjQr1NeJMOj%2FDCB6VHNOO3AlDzU76vHf8y0Jvs0LQr9Hmfvgzy0woO4zm1O6mAkZyjE3VPKy2Pz1lk4KBjQLDIEPCHUDpCmPLecyWZOBj6aFgU02KmDPnA9NY1o%2BiDOgQHiF5NALRQnP7YPaQ6HF6Sj2tEpcTpWkppfUDQlc6yE8WnXj6vMGOQiASsYo0DEgzAf6Wx%2B%2B7q0BbqW1uCvtrpq1UGB9yEPZXMxJL4ZbQXbpFE%2F3n7d2XScSQf560cNZReXIrr6GaoQLJsf7WMwumFDFT1bfTlmMMzcqH4CChxH1M8DvTMJCOeKJfbTG07Dzgj5gXnRsG8vZ%2FfAAjD5sWrZr5kVCFG1nFS1CEKi%2FzhHJLNrwpE5QgrbZW1U5TyW8Znxz%2FtjSVr3fWfVSedbSSSK4Q8ER1DdWTQxAgN7GRx75bHiCU5ZD3EztAkU6c%2F2kXHF%2F1hleLU%2FzADKdrERuy7ZlxT8IyaAVtxfyC495RasbU%2FhTQWj%2B4XLaCI9m%2FTjXO%2Fs1oaB6HVfDO8E0PzHfHglUb7fWOKExqgJ%2BQ97h4BOl1M4E3Ub2mVeIndcFgEiiSTHtyCCIFs%2F8Tsud3vOvjmrC33lNiy0D8vriAXqkc9xXJEL0w8t%2Bl1AY6pgEdsxIdVrfeVGPbPBJCHF0kbBQMAkRqP9pftjKHv1XP6qi3kZvanLrpOafQM5du%2BD5Gj3u%2Bc3QCmMzTeCOrXC%2Bz%2BegVKzDzKGXnitEkKuxDPAA72Hz4iRdZcnhargZynznS3Pe7qlSV1qG127kl319wq%2FDk6Argv3ZTNDGNsANWuYDuBgdi%2BdVqgqVyFH0qXpXv4%2FCStGSnUyAA1%2FtpE4tEca143yiE&X-Amz-Signature=88f09f8f04d160d5be4309b96a0b8789723f5f87cbd4b49711274d5f5c5a05e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

