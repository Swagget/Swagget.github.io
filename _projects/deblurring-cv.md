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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2PLXHZ%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWyndadxLZUEeRcAYnTmQ6UVaiNmDT0i5g5FPI%2BQKTXwIhAIXROKg%2BB8v6FPtv%2BOmSwUKz6zM72DisFsO9tZo6rAquKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJLYtaBhyWmCVeY%2B8q3AMSCpwL8s1%2BXRCl%2BpJKK2rp%2Bw%2FRCBlByI74DBrq64tvMiqYtqPQBL1q%2Bq%2Bo2CPsNB1H3CcOabCoKczwLKP6m2N23LB3RD1NOUo7bYGwM6MQCBLmzVD5rgaP1GKFaaW%2FQa4gH3zFoH7ZLvbR3cGLyb%2Bvi2Z6QIGy52vUa4Bvac1caiwO8GQvonvFLFAVwpckSimfNO7QNKzjpZBYDAtrsbhkhJtQXdG6pansgMTwqhW26PXuVzx74h3z6r3VngH7QLAmMxQcJSHqazfwhCqND1Siy6HbPSN6pPj5HGRcQS54PrOfcUvQY6k%2BKxRZdLNB0NbzivuWFlB8zxsROUeIeXi4JRVqithijw3fUasYz5mlKyq2OXwD6Qw4%2F91oKXL14W%2F8TirHUb0ylQNgg9SHVVmZvJ%2BHS0CWSd98s8y%2B3c7ho4mpH6UmDbtXMkddqSUblzw%2F607Uj4DzTmTvNzwH7VA1QiXV5GqAwhtlZwkm0hEO%2F2CN3gF0CN22CxQ35UAZsUAeVoJkJtEAmBpLOYALOIVDAG%2F0ZdNS5ypbVixRcuclJdG0244gWYs0eguClHDZb7tTkQbgWKmtEa2NSPlv2DTZGiR3nKbiObAcAjzCFGDZf2whJI%2FmZ3gKwzV7ATDpjf3SBjqkAQsx3JIVJAhk2y%2BgVNdo7NLc2%2BZ%2F%2Bfh0EECIqzm6fvyPFMprndD%2FOh64xMU9M%2F6WLB9v9iajJ8f1jksX5x9De2FGjnDoqv1BWmK7EYCK0WVzsrroK4gj2fHuSRmsEdf2w4rfJoRC4VlkqVN6R%2FZ2SXxrS47ZV6TLNnAPshIGagHmOqBw1mkRbJr6OIu8FiX7hdsrLRIr%2FM38ur4JYT6BOGkFfh6B&X-Amz-Signature=b0562a0e3d952bed0f859abadcafd36ad3b4894e67684b6b0808f9615d1cb528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

