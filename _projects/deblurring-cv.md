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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUTGAGF%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T105124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvrBOkBWoM6vmi3%2B0NmoKLFP0%2Fp3jahzNF%2Fw7UJFtSPwIhAI5bkkou5MJSd36o7mxcM2XUouxv4wFQkNNKMvnx3rbZKv8DCHoQABoMNjM3NDIzMTgzODA1Igw%2F33kTIUruuKeyf9Qq3APYniurDRkHUvuAO1yKPoVlk%2Fop6UUt8gchYSO6aNREZZ4%2BaD0qBF73zyhjBTcBNetbdKhhHbCWlKpIWe06pPDmRRUft%2BZMqBsjzi4UydbGhkqJ0BAUUTZSOhxQoStUQD6FcIiA68OUyv6aRcUKF6vGdC1egS4SG2GPd2vS%2BQKnrLwlpGDsUwrvq7laZpLU0PlvwsNRGmhkdyQrKq3kmlrt%2BuTCF%2F627%2FSF9TsCPVBzQkjjKnh9KNel4uWeocTgelpd3lmjEWjtLSxFsJbTTz6aQjwBGMVur9QyKx1Npl%2Fgx8X26XuFftRmCcYhQ8V11ZxV3mpgnMfc%2BZj32ZxFUb7G9JdD4SMVK1X073emyDFREggBUps6LjD1cbH9HYvCi8lPGKNKxTDXs45mH%2B5KrePC81dP37%2Bz0OEeafe%2F9K465fHIWM0zIr6ZRZ%2B4y%2FkjTwCPVsykbKFN81yKyL5DFSKQBNK7pSeX3lAhxFi%2B9iF8kOpA%2FC5iDPFxU8MzSbkd1yDE5N0f%2BGAPshQ9z%2FG8tFdUSEJNw%2BFv7qvxXx3ovSKhdJhxjFzBK7isRJbfjiqxmEKCw8Fd%2FV3sEUJ9vZ7fsMgqzMz%2FWlzUmMbwUNf%2FuTnwIpETfflXqw1y1tOOBzCcsv7RBjqkAdL2vE%2BjXi7pUiWJmCKagoXLhMi%2FO0q2vhFs4S3omLbFnwmjN7zDOkY14LKpMd7fMDecU1UOwqlK83PLwohayEkp5c1Aof5I5yxDOCA598wQ9DtFWf4E9jMqTwdO80rjPswOUGLcnO8XHC4ivqoDKy9Ad%2BSdka2xEl6psinBfbJBihgTnObApH9JuO0rR4wUsco9PFgJ%2Fy3rCUfuc%2FtVhYsi6RWj&X-Amz-Signature=195ddcd0a94093f3c70745e39dc1498820b00bb8455f10c6c26cd24114a077ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

