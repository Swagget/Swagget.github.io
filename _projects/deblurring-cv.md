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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSQZ7CU2%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T105045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDFBLTTOaGIm4XQkXFYL%2B0CloQIOCACx%2FcXMgb%2FmDxzmgIgJx%2B0T9hiCOa0S6SP2F2tZcrXjt7sN17wuC%2BJYPvqpSsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNDqENzn1tIgJFjSSrcA9m5F3yYAokeGLDGpQoo3hum5Y0tWaFYTqv7HtzmvaXQ%2FBNdykRXpdIXbG7qYxFXsRSPnLCzCIzMaESVYmh00zmGjbtHjQfsrDR0z2Hz%2F5pppmSYpTdSO4uHzjGFW4r7gluqDUodAg2B6KQZigYYWt8jHdEUJlN159Z7wI4JjNoMBT2t%2B8H52dB3G5lPer%2BbZnMGhb0MGaowdnNrMmy7AU86JYWZURWPX6wGTHqw2AIjtJLeFu9JFXnfUOicQJLrIttpNHE6tZfyTIA5YPqpHs%2F6K6vqf7SkZVbky5xLlpjxqeWXsvo5y8HecOmsYX%2FqVqmR2HFGhVPhy%2BmCaFmqC9j9k6DF421v7hC2k2WsAdCjPaxYvZJOKMytc3XZtHE3nwBJOTm4o1EcQBleCvTlPFwOEA1cODpILnP7IA4EQp3UO9KJfQSCMiMm3OQJDrpwdSjgqdD0B1agWcFvjXr3eoPKlXtYiN5IxsTxb%2BTr7WcVa%2B0eIYTnyBKjBV2MDUnDD8B51KRCX%2BChe0jVycRYAIAwUh3cFLEzLzyiZeC7zWDfVN7KfsNqFIMx%2BR7UE6d7H%2BChmhBe68psuq2b%2BST1rCOLQyCjlD85akfGaER0wgBH7OgS98167hELje6aMOigyNIGOqUBHypMvKNxPQqi3%2FK2vGpLoNDyskMUceckLrr4omHSQIK572GNKhIlNXOtAlEUO5kJrZ1dFg4hrrWFIF%2B9mY689zQPE%2BO9MRnCPwRmdxAkgrqi1mz0B%2BOKm1if2WCT5OHCsfwFQY3aah6%2BDhcWsrWDD89jhqBhi9VQEukh%2FFOH0f6juthH3mE9Pa8351M4cz63J8zu3u8eUte4xBvdx2V7sh61u2uU&X-Amz-Signature=fc1dcbf940417344e199b445a97d01382f0e7564a660ca8a1141af9e903eab85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

