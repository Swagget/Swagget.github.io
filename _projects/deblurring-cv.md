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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZG3HJ44%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T020838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvMFw6cLyszh4HiKfI8y8hGSMA8iu8Q2HlVVlaFWgIOQIhAJOENHHg9iLOXcelPLAo83TEPqe8%2FeoPZjl551IBSozYKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVexfbM8aRMz%2FxT64q3APH6oAMN6wtEyXwsO3i2XVBLYlwRGEzjQD14bynFDwArzgOxvKqCZEQBGiiEO1ofP6d7vWipBIxBdbX7UBYeOu%2Bk%2FnZftLlcQiSsT3A%2Fq4bkKwbKMRmxcJgePgefUXrKPPNqtVmkkIpT9W7EKL5hi9L1vkcEpoQ0F2xYroXw2e3xSYmwgeRya0vbURqh7Xaz4E1cZtttAWOmyYPwEQFY58m438z2%2BAGdTkurWTN2iDI76DRmNROBpQClh9i7Dov7%2BJcSMsL%2BWbWrSZ5np9dflmPn25aMXweu3wwzIGoq2GsUgzcs8%2FReZ5dIq6r9fAC8VZJbkZZawBfvoWxi32bQOYJ5Mu%2BWMqo6xfLKDrGKE3M5EdSQ5RgNEy%2F5z%2Fu2%2B%2F1iNqyOAsrsduHngqhxo%2FUdhwAX9gX%2ByAUHMNdDzv1CWs44RGoww%2BqVqYOF5bCehitlyFay7mVjqypoqMFS04YziGfTSHihr2yaNLxytK6kkaWhwH7WRySt0f%2B6PIRDNWSDke7eBSjPLNwgb8PscPL0d%2BBL2mBrLn%2BxN5NK8FUk%2F9bcee77wmdfI857Qtb%2Fb63Mnh0swddaFUHK5iwsZSH4RyXqBQ%2Fkvc61TrzLea4H88uIvJTARe8ZmAk9jEw5zC%2F7ZjUBjqkATKcOhtpSIdmDgAlYWAFbRE64z85GAAWRQeYiQp1UjDqXwfBCyWFVNu%2BaoIblGuHVkCr8jSDCxZoATjxe3D6%2FOPPm8GBSnarmzf3LwLQhTQ0%2FtlvDTLj30mfWO5HQAfKxaQ%2FM8yn22I1VzUo8usRiAmihzyIVtQOihLPuUliubkVcfH27%2F3U59MBMbq5Ia9YMVrRNyQQzyZ7yJwXZ%2Fx2iu3hzVSC&X-Amz-Signature=1c4a431e5317e4aa50c8f6b4a0ff7741a4ba5a4c706375760250be556a2f81f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

