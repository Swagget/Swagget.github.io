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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZEMLP7T%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T173531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FcCjnkFnCrcReFnHDWmLgv%2FwtfjmkwONlTVS7KMCAuAiEAlchL%2B9dBzrObEvwJuvQcDLfLF4RXeCCUU7OTln41%2BFwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDF3uwOBMchA08SqwUSrcA6Z9255bPJZM6vlVnKSn25YsjRW%2Fy2mSfAoCK5J2RcBarqi5Kq82tU1dhn6%2FYsiyh188m3KIUEyVBMLNVm4cD2UfTLmF%2FmXVslRJI91AHcO4d3p0qNw1IzdKm%2Fa9QO4wV%2F44FW99JLgjHG31xgi7pJtrntuxeeHu7hRIJ%2FjAEYfbl0WItoc5ITTErFS88bcUuWd%2FQQNvcypLN7mqtlibijKyR8xSms2pPAWhQIjuc9105%2FeCVAvTzfTrcCvAY9RAbhWSnJr1JJMJxLbjcwuZ%2FR62OGURPQ%2FxqT4BBmeFjxygCmJhMdSCNDz9cPae9Pk0N5IXhrzvXJOGkmO7qc0cVYi6fCMr4fYqCXjINN72%2FNq7Xj%2BBpe6lTpRE7dNF%2BqJsJiuEc6ByAdru3w9Mdks2Jo%2FoEyvdGwhIypAi15YJdG5jHXqG70CJDZK4M7PNgi0dC3DUaKnPW5FSZyYJKd2oLphOC4QIWYLxJ9%2BeWgGEElhKeGEkd4b3UUEW8UTYcnmI0flBL8jvdhq1W%2BNz5pgPhWRRUQcdOS01mtW8QVlH%2FrTa0Nrp77ITcN1PIOqy84KuSCRjj9nKVn0yYoFkL54NpEeMB1nIw4veZaCRuzz%2BMUl0ZQX9t2VA4KRxlI8LMKyzr9IGOqUB0EOZ0VeOqMbzZ9IgVsphc9OXPlIdPHVuF58l%2B%2Bb%2Bm6JDOOhet6pfetGV%2FflVXSIUUnFTHThumtKnkZRMOe7Fxw08mvv0vy4dvPmMHwehEJd0QCgZTcxPKReN58lYu%2BM%2FxYHQWJrDXK3JBTdOh8719SRuPbvlQwh7iU%2BDpYYqKEz0slsVBEHPoqr6TdYEMVoJFFfZIraPPXFIb6RAf8UgZa4nwKLf&X-Amz-Signature=3806f2922f9d79f0247d59256f617b2bfe7d8c1d1532df7dc4ceaf9e7d8f10ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

