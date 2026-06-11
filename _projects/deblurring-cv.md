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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5SNQ7Y%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T173649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIF%2FHfKjk9NV5uJGSTV2ipBr8LJIjZC%2BmU%2FWdUNWY0yzjAiBycC9LvnOUptsldEmCPiY9QhdzXdKtxzhUR7Z3JmVUiCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMp1jGAf3TXEwKH8ArKtwDU4Wpz%2FGkzOJoKLJhxVg1uH%2BIJ%2BBYONM0jGvTsa51ba760Gh2%2BxQzf7c6byALomeCUKEE5Edi53COYtcZ8%2FzgP%2FfN%2Bum%2BTOD8QqvlbQTdYF7B8r11J%2Fsbd%2BWM868nv8t3e%2FMUm%2FZZJfq3Xmw1WwZcq%2BxIgNxniBJ7XtDUEjPlo9NP2mhr5FSIhs4pH%2BpWNgsz6QFpI33%2Ff5a5ejIdtDDxun%2FsD4k0S0YZNuaCyCX3Hpg6NkfPDCva5LFXib2jrP1u%2BgE9dQI%2FXcq30vMxraFmbAF066SjMlAzHRpEpRqVZx0LEBohe3M8FyXkKyK7rO1ai4WRltT3a%2Bg1q94POBOdNV8EiCYIh836x6rI1D7h8ZMqst8V%2BBuaS4KyE7a5hcJ8UrHStnOsLxYsJUy11jfgwapLUff9trCcGa4GOli68jNR1OJS%2Fw48eiUJHR%2F4esn5mN%2BCPGTxGNXxPxmrgrhtP8t7LbygwNz0JV3xO8ugu4kUoN6gxI%2BIQOJ8GRD%2Bu4r62Rgbj7XwNnDVOtvmeTc9z0flMG50MjPH%2BGLChOR34RjQJ60GW40LwI0RkQmLmcG09P%2BsDBkhz9nuNEbT6l8MOxCSi2MDXQhVQA9fxEr4BCbCagZPpD%2BXGHjDEn0wvc2r0QY6pgHNSkDBVgk4xoXSdupxoFxmscdcTugSwCERDWTmDbSemJYDtYpuKPlCxhTHVV6WeqjHUa5%2B%2BK3FM06h6MbJC0B%2Br0yy020VRw1lFfSyuTK2qrcVpYFeRgpj08CcYnn1nhwKZ3CWDyvD1Af6W233xOfEwYHa7nAdRN5sl42euL%2B3CQyEhoTMvwEYE%2BCSE49zkN1ojNqA5eVOOohsIQHJBS4AlC1pR3Cn&X-Amz-Signature=edd1d133c16b9819ebb56fe53e2da54201c96776edb1917fc2cd940187aee210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

