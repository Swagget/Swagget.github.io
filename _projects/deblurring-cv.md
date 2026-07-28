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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKDKHPPD%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwjSBSfwx39qGibAsERSaSvJhxqAYog0tfg%2BmJ%2FXZFYQIhAPV6ozlx8wjpCeEKfkRzXl6olDsew1vEKGRhLlqFz%2BDXKv8DCGwQABoMNjM3NDIzMTgzODA1IgyorrZG9H7RyYJJU%2Boq3API%2BOJEum3QQ%2BQaEW5S6VGzRyULFdUeIbxrMip%2BSu0ws4zeZTg3FtkSSZSfw71KNu9I10FyBlzd7vs7kggWgnqW0y75vCrxwyMQqmPDJwhpNwnWdtqOCxayfECq5Yiie0M2MJzRZnULdlo06QZCu6aq3Mv5rL5EXX2ZW5QxaaVKA7lg0jMgAmTu5ZGT%2F6scfFGVXSnqv4QHGGFBgLFFLx4bPCuZJOI%2BKupWeuv3uSpY59KHFJGFJozAjNPHtBfRIfnl95ygVbDK3jNoxYi0BAmYfQjlRyQL8J38hDLN%2FtOiPdLm%2BpEb34%2BjlRLyWCxCus5D7L8rmTW9hXLtBYY69xDVsUv5C0OhtQ2UzxAJEnej8aWHQL5CpsMaGRA1hmyFFsKZbswIICtPYsLXj8p18gDTE%2FCBponBjMtIxCE57FCYxI6Eda77fLNRDXPIgR%2BakGaGpt1z3cjUvYxJrEt2YSFL%2BPeJQssOqS7diJ1SzeMkOo%2BFjCpjBfjHhKE3ph6DIk%2BHm1Z1%2F6%2BbQjHQgT4OSLaTt9%2FurpDmfquIx0aWKXGUZES2d6UYK2Br3Xvx2uO8axsjE24J1WgJl3MJNzFwYQogGDUjIipeK40z8OJiN5xRC24lfw2o9JavYZnIdzDM96PTBjqkAfT0JrUYjmX2sl38vhgLzs4vb1r5XI8xvqVLYyStplZ3jQnDtlFCWra5LXgTZGOWc3zTs%2BUkzYCgYjYM4Fjw3s7VVUwFa9HhsRMSXGSzNWuLAOL9l%2F%2FWbn1MuzD7PvZdCo1MMlnwnewOYZL9Lh1qkDZ%2BnURCkF45L6QUNBConald2dseGh3m2dgKDdJdEi3yII2OJ1UrAdIsEpEmbHHvo6CNY1ft&X-Amz-Signature=b078a97e9a8c267ff1f652aa7f85c5bb79b7e1204513e69a0c411c8b819e9732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

