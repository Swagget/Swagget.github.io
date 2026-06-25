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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625AS2VVB%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T161758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5h0alSsxfqF0CEghJar2kSUDcyKqu3DvDRNDbxVGdlAiEAyDzfb3n1a7BVsJvsBktzzuRI7GcGAgC00ZgvXG%2FFZsIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPhLB9%2BNJDg1GlG0jCrcA6WccA6lCnqJdK4564nEH8W5z5cIJ0ei3Q8VM9I73r49NfFyMsEWWtYonoAQhxtSydsXqd4U4BBFb687MBAzCrZwIyxnIEIdK6%2Fgm49ZHBIJT2G1FGTY7ho2TUgbdGJvoLbVkmalOr1VESTQgp3uBFzd1jpC5JLpK2LbwCofLqY%2FDunBnwefkLvZeJc4YVhScwRxfoNXln9mr2UPlW%2BvcpsDNPe%2FHM%2BacTCs2TwGEPw%2BXhoftminwWZ8wFeooVQhUGJmGfao71hVuMglIsJxuPYhSFIfcYGPDREUQqDcwO6nyuwuTf%2BHi61rj7EaIc16xlVgoST77yQZG2LrR2kBsHMkeuOuVj0YYZi7P7LL4ybsyWtG2Gmt8bimBQ4SmiXtU%2B%2BQytOUtDrflAsx8HZVYHm%2BPcjl1taRD3nnjalwsAj4uzyFTjhu2kJ%2FuF%2FE49xMe7DgTCEzSCXAcCzjVxca5TH2YMwsLKprmJY1lUyl%2Bd5k9IdS6L6wBfev%2FcvbG5l2jNRPsMCZhMBnTqcRL84w57Wcn9333WIrmw05EmkN%2Fyt16Ulz9SldrXvIw%2FgnpfFEjskAjNZmzFHo8CFe39R00AxB51Lv%2FmW%2FIRx9IUX7EI7JybvFZXPSaDg71BJGMMuX9dEGOqUBwV5hGFRDuDtqPl9i%2FB9uo6qLGx4fKa02YOqXs8KZ5hfgVgkATcOpuDI69Ewzf8%2BebvtusUV3%2FjhXPzuqzjkh6WF869UAQZf9xQBLzacSAWsm86yCBVJst2NvGHSOxSV1jPHsIRNPdM4Y3sVS7S9EmbH%2B2q4KaAJdQchZ4oRWrOWLd4xZycMQZfEpPssNVCFzSR%2BNgebx9Qu1yrOGP2figeMlA3zH&X-Amz-Signature=ad225180a9b46ee299b0d2d9e5ef026c041d8a66f5c88ec9104651b081ff3a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

