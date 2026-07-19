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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4D5V3U7%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T223836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ3tRCrbjHwDxO05tIE43A13c1X4n0op7HGeUycFFrjAIhAMgqKKftYNNMZdoA60uhs46KviMMGKf1xR%2BAhMpyGgAaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSISHLHeNKzVFYrawq3APJYzBqIoVeciCt33y9MmM84eLdcMw9ga3RiVy%2F62PaiBOzKsZpnMwJhYi7KaDoUcTGIDs860nWRA%2BtkaE5NzO1HF6gBaljCPWUKp0T6XwXFZDqAIcQi3sAg8QapGw9gp2HQ2GEJ4%2FzzzPBC26z8kCSFyVRmW07q1IG8QBYy2cDFDZJlNnc5IGvwmZuHChr%2FXk49oMlES5uYans9As8VYoGkXyr5Sk1Dw31iZJ3cqQLyP5pfk3BW4ExkFiDmyVykbVF44irvY2QPvPQX8MHi%2FoUzcvqzlGVMDiLgk286dXX%2FUHr17aZ6cWVbeuNxg%2Fq9SslY3Q5WiQnZucZIetI5QYx3mDt3SGV3NeYLq2qJFpl3j%2FF1emXS%2B8m7%2BeoRu3ehzdob911csKui5qvn0aXjFtSt57TG%2BDtP%2B%2BN6mqDsRYyt5PtdkPFKv%2BwZjKXPpwisntGGyzHsI4nBNJGlO%2B5I7mAEX2k8UJGfDEzRPjCPcc5MMOZtS7I8gxd%2F04dAvGFVdoGwbUUX8uj3QloqWunwdAe%2BsTu1XQL%2BPH%2FH6Ucz3dkA12fXVRTq5wpeFBD8Mu9u24nC%2FbrcRwnqUiZlEubNepSCRxMJr2vUrcOBNIKjSOhgcFgQONIa3%2ByKm5BCTCbgfXSBjqkAY21YW2kEEtoZL45YkGZGmU51fQOf2my7TD3z1zXOSUwOne7QXl68lBdxfUUuCzobZy5QvuOGYUcOHQL4DsTXfvqJFkpOJx%2FhIDgFi2a7ewq22BfM7VXP06HaZ0thjhUiXAPER6UNtfpi89IpwIniO5V9%2F9s8TC2wlYaQX7oC2AGz8mkCqSMWCvUjNk%2BErLLUJmv1oN5vTJ6TnifyIkZJcc59gOP&X-Amz-Signature=46ed14fe6c3b220844521fbbab4f0fa042b6145564e503409d53886335fac824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

