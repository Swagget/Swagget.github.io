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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZVHXC6J%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGGTCVc%2B%2FYuz9sUPybKUC3Lxyf6aZacsSYEYyuLKzuEgIgNFLzkS7mohl9CFJU0MHrQ6%2F8Cduu8voAIph3T7oGbnQqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrajSmqUb7KW4xQzSrcAxjwEYUKn5m5qCbvLXQE48vjT4aa9eT7A6Q%2Bnem9AiJNquWI0zf5INYOos6KRe01ZAYIOkAg93u23mB9%2F00%2FRr6MqR%2BYAQn0jsnggpIdvKmU8uzmeLi8fcl7M4jN7ZmhS2ON0%2FCjyikqvkbfpWIl4MxnFtS90JOmB4MMjIKXwKGIg8ahwwUu1Gz5Azvj%2B0ZIdmY4ehfcDnelptJc%2BQ%2FneFNACv5UEouxusbWQttBxJ9sWIWBKQgoJRNxqc4tuwxG%2BKfWSAc5uadW1fNtVLbHS8cOXT57cDWaeuozTQgq%2FlDhdWRjPEmV5fVqaeJc31Y9EvhBVSbyd44j%2BlPgOQ9HsmfG2AF1G8RC0rueh1lvpcOLlZeKHFYx%2F1KpjRQ0nynB7RSN%2BF3Yb%2Ff2emiWfPTjRER2uHxWMwXqVShqhZHrB%2BH6cIBvNfyD8hbxWTvjyFkD6QKwzW3oq1iM2Q4jbNoTo7bz7xoj40PWCIUoXLDK%2F3FkMOpZipU8LDr%2FL6L83ibSzz%2Fq0eL9j0UHk8KDgUIfOoeexbvx1%2FIF6hA84SxawmcNcN9uCFiM7owvPVR0iotlar%2Bijat7eIxb%2FcULSuiLYJr5bDlDVfzO1X94ZZBz9xGnDgd0UAQJwyMo8QocMPThpdQGOqUB%2Bllj6E%2BRc9nTM2imfKPqLPpBVgd6oc%2BOIlTvnZ%2FB4NVv9zSy2pzfm8ntXBGRbYH3Eqn%2B9r6a6%2FWYFfzkICWQnoN30T0XakR8XxvJQVai49xyDdoMTxjTD18Uq%2FcnZW4rPnSGZXiQmHP27NvW2WeZaW4GkEHEygihXx%2FuLpL4iNQuJeiBifOE2bD7b7Kn%2BhqjtLpNDceG8QokynvU%2B0LgL%2Bhmah95&X-Amz-Signature=12dba174eef49d22c318556c0573e17ae587783ec3fb1d65be7fad55204a0d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

