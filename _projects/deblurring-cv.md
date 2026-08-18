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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXCKJTK%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T191914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEk0tj6RF9YnEwUBSKzSDWpG4JfKBTj0LU8jeQ9oyAmsAiEArUzQuypBozHLrPH72I1oIRGJbThEXIGElLA24f%2BFHCUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDH9RWkkZ55z%2BR8ZiwircA%2FIvVRuiQ2JqrtzZwoeZcTHo8iuWdZ7uX98fZ6laO8vsduqxBoStRzSRHTox%2BZo9J%2B4lPqCrxQGiZXK8gqw6qBeO%2F1ONNdXGfrwiwfpMO75wVTe0wPuxtAQpTuGoqUn2sl1ekRWS1g9c%2BqY62zmexiHTyxoTB9jgfxO6OFEth3gLpRq0pn65CK1c6LRuS5aBUEu7jMKVB6Mejv2V6QMRg3ZMXW77AfOzqpovKjlCDdB45M6JCvw1gBPFIZh9JVF8U3pPQZpwjwTQoCLkF6egfJUpxGNKB0QUZ%2BiFx3EqI4KL6gvgLVQRYMZMIjh3NGi5wL83u8RrBJtktwhxyROwoNJgygNQovWXRPLTOerWWg95iwZC%2BvBpOYok73swb%2BQmdpCo3nrSfufPC3WiPBA0NiaXLMBC9NZPQ4i5VA9zQ5VNCT%2Bcmaiit75Z0SjT%2Bk7JvF%2BHjXhse1bkes4ndQM67Fm4kJaDSsfW4e2u4GRdYzMhNK0lgO%2BTyBGnPa55CUonJV8VnkJaaMsipxykXUf9EliYkqIWYvWphAxWul7X0aFQgEoFUMIl%2BefS%2FD0kRhEstjJG6stSvtpGGofdKFO2wb84ddv85PBflZJrsUbujNj0dq1mcPus%2FVIr2fwpMOa6ktQGOqUBYFSy89RzXKiG%2FR4hOancvCkQtGeHw6Hqta8SRHy4YYN9z8vSTXW26tOu55pCpfJYkBUIzwVsi65ykmgUsTK3WocuEE4DE5s6gK3dJemOgk1a47%2BzAEhV0ngZrc%2F%2BgdJEUTYw%2Fam6MXxon%2FI4FOzJQI%2B9MKgSFebJFWbenoau7VRWN8BFwbrCHF8nHB0b6nHvl1SJTJpxgxtot2jTBa4XGS7xb%2Fk4&X-Amz-Signature=69aaaf96c98b92a8b67cb4c15f1d8a0e3feae8f412ea34ffebc16eb71c77d476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

