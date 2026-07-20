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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WOHPPYU%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T134205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNr4VVnZz7r%2BGTDrzTN%2FjLKNX0%2FFrNo4Hl6twAakvqXAIhAPhxQolqiVeGsswW8sG5IKnDkie%2B6w5gEtvnx6c6sWwYKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxcudugs6TZTRkYeLoq3AMjwx6wnkRnylHK4h6ZFmQor8nYl2gUvo09CxJx7HDC6cENmhXg2WZHaYdJD%2Fc%2FZcVMEclEsDq0dO%2Fx%2FjQF6bcXnOwHUU1YhKKbyPFeIhhauMwEk165%2Bm9Tc1Ad%2BUbXfZZLPMU2dD5JF2uwGUOEKQmxMis2keXGMqRf%2BcR3v6BYu1JCk0GImZl%2FfkuYT%2Fx0NTP8lDp7Z8U9jKzaTzjfXhfYIdLsJcConS0p2R9gBmtpvZ5zzV5lVUheO3LyRHHJaVSkNP0WsBX3IxmKINGFUJSIIS1s8qCSfeRcj6afhhGdjqW9tXt9bHtGjS2Ik8yPoECpSgI%2Bkz7G8lm%2BmRJWldCGKio0oYIVWf9ZmDWM1%2F%2F5bwA5zSTe7eqAA%2F%2FWsLZafc05rpSTeHKkGBSkG7UvRndu%2FQSgL5FZzZkCS3aSZWkGfYb3O58LbUttMOJdFlCORKsQJuvCBo44482FDTRnQQYAQi4vdRxGNcRnLyBHw%2Bb2gOViXtNOJDcMjQDNzfSucxoYg1rm3OX9RFoDTcMdjvt%2FNzF8znLiYlLYZSuXYZkFJ5cGfk7EdBfiK6QpQvPo3q33xfLsEeR8gruaYAacTmrXlE%2F2feLhZzRdky3HZEqLf%2FTMagzM2b%2BpNNBmjTCMq%2FjSBjqkATjUxuExj%2BADhLWUMluyqQCtnDW9o6ImTxW4LVAt4NAZbM%2BDFIGzrAaWLQlEszbu3IpQJHkM8bPCvyyErQHgLdG1kgUG%2B4%2FqVQwlhSUeM51hw%2BqXl14qPYfka4j4gaM%2FCUM3ycxTMty3mz02L1OdT3Ub6%2Fbf3RDJfUxidf7JFn7wpXE4pWSLi5r4YOWLqqdZ5gIfJcDmt0u4r1mr2XVGy6XsR7Nz&X-Amz-Signature=f51ad20bd788682b26e874de5cbedc33f72438f1e5cff8e1034cd1ecdaf1ffdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

