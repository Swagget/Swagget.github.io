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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG7WK6P%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T003103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCA0dBxr113yIX0rDMk2%2F4mfqn%2BgB5wUbDkpkbS0hwMYwIhANKR%2BRtB2q6h3WYIfNQtPA4qTJSBalSTDWrIXN5QXu4RKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXzPy9jod35KVUhAQq3AMMEchCB83qvy8wDN9m5SzhXqd8KTZULKtktoLkeQpGSwFWNkROhkQsgC3bcugM6tmg8hgNsB5LSMpWbf%2FDPMy1CW6%2FwI9qpyc%2FlztMXIA3w1IWOsj48Z%2B6Ld5c5BqxBWSe%2FGwZVXTeySESnatK5yWOvXOmrsV%2BJhOn5enSt9C82jjU2DQFZdCtRb3EULJWRkFhQXI7Mtfz%2B51jyujRQw5FvxyCeuCvvsvR2zz8thGvpi6FyDyOvHMzNeTuf0HhXkfk%2BWY8vSfRGeO%2F2e5j4kFwdu3CuZ7ha0u1xYtFYbwNpry6nBClb6cJdITVX9GwupEU5bPcr2BPoPt1dOvEZ7nfdFKJe0U5M5MUAzjAgkBRqzmlv5Y1SSHvpvonbevMwW%2Bq60HwOi9Nm0uIkBYM8tfKPswnbDLSi1J9TIEi8uGsNkRhjWxI%2Bfd4EbjhBomhTz6lbJR%2F3q0D0tMiYSCEUMU8DVIEJVdSBfaSAWCHDOEQw77cXfiNV55NUjdsnFr35n322uM6GHeaCEVY1pNiRksEvFFUC0b60twBZcSX4x5Cs9dKEzDLpvKgd1svedxBebVKgMUdSAC18vHwP4Kn03RkzPAS6A1f%2BoM%2BI7QvDl2YlCFwaSNGMyuAjHAIIjCQhq7UBjqkAXQ8WG%2BpJ9WkBVbrAfNaC6KwQ1%2BwAzq6bxV12Igl7PuGabggEcs0pG1X9VItd3qGawKcj1%2FpLkrNAaneJxVAEOHblFJPpbaBdVpcCLc1JYbyq6ponA3pqpljvVKtyG1aCUSJA3%2BvoKi3YZ67bQyf57YkG51qJC4Zb4oyytbogJdLLAH%2FprDfye5fLLntFcWp5w2URSkkee3W521rOSBwEu7ykWgO&X-Amz-Signature=cd2ec395ef2a62de197a9175c08ef7a25415e1260db76979fdef7709ba9f30c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

