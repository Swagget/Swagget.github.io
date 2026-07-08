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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCC2N7O%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHy3rOYL3IhW9RjaCm4mA%2FfKfkjgF9xy15F22O%2FhN2e4AiAs5016OmTJ0lrD4ewosMTGq%2F0r21vXverhPqU5rJCeSCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM3y5d0iRWL2Bzgw43KtwDiBPnD2P1X5cMEQzSg4qj7uhNdLC8uiZDqWHr%2FijqGhBLPyY4tJCXY2gQ2IrP%2BcP6geuWAWE64pVdNnVsyKOsMJklvz5mdsqo311dfjIPXWasryyU%2BiBMV7Qfud48rF3M2uK5bmtXvbUH7dq%2FZnO4lwpLx8XzzyYUUAhEAu4nvPVSJ1ebAzd8HZOh%2B7FZKK668odPMFx8lOZJpZZjHdUYKAiLv6zEmYjZSrQaZyd6wKYk8tMe0CC0qsLuTIV3yrPqX%2BuX4lDlxF0Doo%2F6mFc7pNvQ%2B1t7%2FvEHIK4ySE6cpe8bIq6nw0Q756wSv%2FOMPKeHhefAHt%2FcvBi0G2gntFJRPgtovrKApudbdAYXhhXhl%2BfPFp57Ab1XAuPyRNdRKmPEzOxFhcQ7Lc230XE3IAIEIVSDBt8ihVLD4ZtEUdE6JOZ%2Bvy1MJ2oPiTQIzh%2BdsgfFRvqDl1QNQ3Kle2ZjkG4AhUgpEoymFkJZ9b%2Bo%2FVq5xx9tYPUjP8D7cFATiQ4SyMjaGzdmgswTuOBa7AdThdRCWytH4VO2JHOqiTFYpt7n37t5HNmH0IP90vowhbqVgFPNjkgnpPSPIybAFWyhGe1BdfcQY94sD2TD4KHhXGLkVscweL10zXoJATkjSakwl9G10gY6pgE9rcLSdkBbH6kGhvvSVXW4pFVcMZ7%2FGo3Jk02lXuhYyc%2Fp5%2BU6Kon%2Fzeq027wfiEByv4iKy0FFRXzCAMGz%2BS3DcWKW2f0RU90I2Hz%2BFwS9Q1I%2B12D5hh8yObPPzrTAFcP9Iavei7h9mJAiQ86s22IAuD%2FJvjpSdwoVnKvvXoVsz6gWspANyfzGPwfW7Yb0k5OQyEjgwqcQ0NJWWWJbwQNvfS1tGoOs&X-Amz-Signature=a71b24708037870930d70333dd05c8c4c5d943841d994fb5bae424f6badbf444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

