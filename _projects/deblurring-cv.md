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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HFFKMWH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T052103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2Ba4DHvD4c%2FC7qxVo%2FkhXu3p7e3%2BOkm8YAz2mLZ5SceAiA2bw1qwSxMuKDVniUkIeU2Sg1rOg1gSZsrWFUTcIc63CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMekEaaMaj%2F79KD3fkKtwDOE8sWPmjWnL%2FvxdSkniHXq6WkEm%2FmJa3nUu0xvEaelwuUD6trdgMiINJgJTCQ9AE905Uknz3vGHBeviVBUr6M%2BHhqMagTtjbMP%2BmGFlt1I2WCpOwXCybXSV0qVtgr%2Bfzs3C%2BS%2FwjNVBfO89A7Ga23jS4tQk4zVYZfLMhuvpMG4NSHRCBxBWW%2BIp%2BYrsumoJkDW4gKVu%2ByujLueLnffbwCMiAXN5W4H%2B%2FdiIoir6EwS6orXolspMxD3529NZV6gv62iabu8MBCSXTpgo0%2BvnTFODzK4PTDaGYtCY5bdbZIjR0QDafXFjkWMUKLkKvFMx5kYfgUSgUikr%2FCeKTVJnZV%2B0BavwiE3K7TDBiPwcZwQhy8AyJ5f%2FD5RRsjd4lH217Oe%2BEr%2B%2F9SLpilOXyDfWPMYnjixLJa44zFtbDLCC94upcv%2BWYcqIIhVC2s2aIkXI%2FeVAPRomB9L11dPyyL7joEV5ewSmpfaYMnEjUavsYIQ0%2FSnsekN35e1hKQcAVDzbROnBBx20MfW%2BY7UN2Mbai9ibI2qNS08KoDNN3dYzWa6ETEzcBpz6IBp3L%2BwXnntNQVLlDa09mH%2FEJUMN3psovw0NjrPp0PqS9RE2JQXBs21G3gVTCoRNq9E4jR0Uwstzv0wY6pgHWkrkDXXmeASUsy%2F%2BUqqlzYtUyWNHhIXwdSZBPzJl%2Bl4DyQexNr2vFdXxKkhUMAFXkxTXPjdeiW82y0%2F9sx%2B%2B2MXgMjIHmwz7Daz1ovVUhYD15%2B6b53igmJ3Pmy%2FZWfHh1XJ0Xl2rU5IfqrNR%2FkeYCAHzsxAuvdb%2FjPAX1pl6uk2jWgF3Orno2Iaw8rlxjmxD9W0elTKVtx8j2uFNyzQm4nPw3VKVa&X-Amz-Signature=91dd9d3b438e33141a72b143bc97c8c8bb985160958659ab8a19365ec661f975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

