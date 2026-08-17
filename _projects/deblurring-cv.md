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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZO2P3T%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T101901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCF32gu0CMWqLrzNLznLMG4FOYr%2Fv13i1sAFy6uB6aR3QIhAPP3%2B9eUnNp1gB60PDyaoSs%2BmxKpQ%2FSlYszrmw5dZoLsKv8DCEEQABoMNjM3NDIzMTgzODA1Igw%2FSWUSoeXT31pCB1wq3ANiRDqhIjR0dlv1vcVDcCKyL8Jp3z%2FxtSf13gl2rXjikrUguyT4bpBT7LI3BI5dxna8MMf4pHzxFeFrImmXAzkaeQuRk07CRx7k7jC4QgXaoIr3D3YT%2BqRXerZnzRg27Z81%2FFGWDmUrsX8OyNqI0cWOvRjcnSVoMW%2FtTXe01FVKbFeVpzQdAyRfxg2f0N%2B%2BvuqlFqKFtcSayJMCbIDyvEHzF16WZjqmkHOcIUVy2y9i2MaCds4hFnMcsDsnNBMh3ZG4%2BosxuRcfCoV087oYoCkYrxsXeOmCRycfMC8P2qvFP7jtrYnyhaHy7dw03mzhTSYYROYwDv7Jui4ipoIskYP%2BBnQhk4enRMiw1y4RBRFMR4GUsjR%2BbAtry9Fm3c%2Fbp5iAz%2Fp1myjbARt7FohBC7PjnjJe%2B7w%2BlIV4eKnDMfkJD2c0EaIQNh3e4HEDg5B5wEggSQJbubE4y8yg5iwubwnJbSKihcT8pz1sDQGQ6WBiKCGVLLmNztsC%2B7kg7YJnh989COtanUWtozI8DTabNVKgwvCr3rwgY%2BgTVvATxZGaJVCKpzDLCT0pvDStQYHawsUP9bmMfn1xolcZ1JbwXqbD8Ud1oVyJmERJZjyUnDLfNWmqj1cOA4R7uaXMHzCWiovUBjqkAdjIjR44Fnw13Sf2mbik3bZsNh7Vu9KUxL3AcDnM9otOuNUuiXILDxrtFi61Bar02CvQQNYGN4P6VKI3AIa4SemAwXv4eOO%2FpWhRoyrpkBkq1jPkhIZBAZKltj0meti3CwV80JaszZg7nPJG9PQa5hWsdsMotzAAbs%2FcL4hKzkJXdk6cK%2FveeguF6b2QMb7obNyx0lg%2BY9SURKjSKp3TnsCmsuUd&X-Amz-Signature=b0217efad4c28720d60328b53562354cc847789e2c758be661811573c880d668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

