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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSME4JVZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFH5TiWhxT%2FsYJmNdoMSotgRVNaQlwzR%2F38UlutmBWFxAiEA5csoo%2FptJNPp%2Bvy4joDFACdH6WlXxkCnNE7TWyJ91Xsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFRLkcBhP4u8t9V6%2FCrcA47hjQY%2Bu4m1nz5SSLS9XKx6nkJK8x5ILL6DA48Jt5eVND1HbmQ80yBlJX7U0LQ9Q5xwlZX%2B1qPDvolNwULrtXZCJmzy3GoJghnwdIM3Qt1xj2yzqqpYbRE0oTfR3hjNE9Iz%2BB0c3nAVOoZ%2BGE2bPfDR5Cmv91LXF5NjL7roBLinMuSR62XBuA6ihJDT5PykjS6aPIRAisPKyKSkqJM6PzXZROhD836Smc4YivtZzdHOWUKIzmfbh5UWbY36%2FKXAXFUOTiDIZSOOUERWmPbrBbotY5CEqu3x0gAVr3Szso%2BCXbeq5BZgTotzG7mC8NgwFiXDZ%2FU%2BBORvHIMMyfKc5bnXfKs7O%2Bo1NJgWQuGaa6dRCGd1OPJUSpolQSLyy9MyzG5qMu8WWyGdkwx4Kev6VzlWoxLqayss50IO9yC4cWZo73e4gxIpJOtzj7eA4MPhyaF60Cyf95RiKs4SmvWj0gDwxeNLYB5FhXt49AQ28pBihUjQKVUWJbDAXEML55LBSciBuEk0Akw48C%2B9vtIiXEUIAiFe2QEpMNpO27rPOFwOPQSmP%2FahkHtd%2B6MciQ2QOEuo6IM9ulWx0qVGXyWrdYXzysns7Ca3pGv6jlPN3ukGXgr07aKetyRicZs3MLfOh9QGOqUBE%2Brp5cD149AgUsOBZWjqf%2BhYO2%2BRLMY8oyqa9tsQGTs%2Bro850m3%2BjGUrrCEVBSlPnPomaLKfTstLuW3kjuJ6INAvU2paFvhIe2SlkOfiYT%2FuP06q4Z%2FPbiWrzFND54sGWq6%2FBaTQ6639rXFW3%2BKUk%2FpdFl4RMgFqnNp4%2FzxDIRQvOSw%2BB5iXzRatHxjAwrROxZd2ojCKbq5rqkcp1bIsuAVJlPwZ&X-Amz-Signature=edf018719ed02c493407648679e03b56688562cce9e21691327f9906487b01bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

