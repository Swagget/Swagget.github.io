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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4IFM5O%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T184221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx6X46EHIaPoTf5pEy6UzMjzxPwHvaw8MZz2%2BX%2BoHGrQIhAI3Q4EctP%2Fcd3fCnvpu5XFTp8V2CMUIUCVjYgIEjCibdKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz19cvRXWj4EuH8tXoq3AODnO2PidXsol%2F5%2FplrylYazATkdN%2BfEtODLt9fiRF8lOvkXXF8dIfPXIr1ILQ6IgjvQdOwCXPECB0GmX6EcrgQ098GOaxQmvVumN7ju5ronTYugaqBYEnhWrqDawhftmZtzV%2ByTZNENlx5ZfpdbMbxQmr015nguMn%2FLWklycGUvQg%2B%2BPTlxhMX4sPx%2FuGfb56ujpPasiZrtArv2VJ2bl5NS6%2BfqCuLHHvkEpMUSYzApENjjcy29RSGk0Oe0g20LCdnFdN4p1pmpG4JC%2BQ9rD6l5DhayCZqfDraRwnwuBKPH14pnRUZEsynYRNai7CTapWnkuhJHdS78AEKd%2Bgqn2EekUxc9RPilzjkWApBYQ1JoxLnK0lrJA2t9EqUsvhvsq6TEtce%2BGjSjAxRWYh6IHfuu%2B3s0FAb%2BSlzVyTs%2BDj73ULu77DKPiT3T09KR5%2B1YSYPuO1cJFZB7oZs4%2Bi1rCjqqCTdoja6yPWYJDuJC3cTIuDwhnJQ5G8tPg5ico9DkLIlVdQou3Oy6MFaVBF6WtGOVfRuh9%2F2jr4ZWE1ikqkroZe6YZqgmdN4rG82wOYtdSBgXTqTEOnDO1Fu6%2ByFcqPxio%2FVIezjBSuyUGb11YJW3o0n2V0QnEU0dfDAiTDV0e3TBjqkAd5NehMoeXIpuo774did0ZbJbynrxKepwMWu8TjihsOMOaU7qSfX1s5nbaxmWDs5CckbsDAITqc2uZ9avH3ZlojMbOQO%2FIVHfkeCnznU8XUx7yW3mf0TB1%2BJ044M5CPrJRQwPhwG1XG9H8oLNJxG7AxwtrkjkOpccOCf8mq8ioqRLyR%2BbLb7bsoVuTnnoy0OLV6VIIZkxmIY3RiMLBLIlknNUpqy&X-Amz-Signature=0d459181dd047584372cf714a5e44b4ed20378ec724449b1239f7f9a02e96b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

