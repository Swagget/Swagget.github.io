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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DWYOJSI%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T013025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFPTjEMzd7qQJK2bbO2hBHrP8sIp%2BHyhkdF2KmXJz2N8AiBA4BCV3TCY1fT2%2FXs2Bl7ocVu2ZRT2Z%2B1TBNr6%2BfThvSr%2FAwgAEAAaDDYzNzQyMzE4MzgwNSIMR2PZqRvLaHBBuaN0KtwD0OurV58609tqnTN1oAar6kkjxhi1%2BiD9nSAOc7Tfub5OMAMFbGNEG8relydraBu%2BidfL0H5Xosu6K2FIQ47kmzcWtzkoH8XztFg%2BANXBlAtiqgCnzLibGdosX%2Bw8xTewWLA0WyvhHd4OyW1IGWdbA0sKu%2BoRmMrViOx5dNU1tVFat9g2w9opX6iovsjO6Xq%2BwIQN5U4B3k%2FYkkpUSLlUc%2Fk%2BSdY4IaUiQScN0Ym1LvoD0nQQdExqQdfvFqnfTcFhsgFnQSf%2BBrTMmwQwBM9EhpH1fIFBGEQDTJBA9AH7IgbbZSeT8KS6IlFhiLKjJZGm9YNvFrYZ3j0ah9OU4KOSWbgpa%2FhudtGVKtsQ7c%2Fn2Zyz7VW0XoiaKnQXz7w1Pdbuv5FP5TiSHkuO4JPf0ozhD3Ur9FIIf8lW3bEzMJR%2FLyfNjUw3sm7sJwRyUVlDZAAa5a8omdQb0jFlw1yCO546i4ZAuRrKbv6wZSUxkd70zg0zf8xhRlmSDW5gfQiJzKqO1EBFc0QyOjJEYlDhj9p3%2BwFm0runG7RrccAS80KavugSm0f7EmUk8qJAg%2BrmKJOndS4DQbCSKkisAjS0rlnFaE6jFj03Igu0pEH17RNRa25IG9lguQ2X0A1XS5sw0NKb0gY6pgHKiST7CkZD9uH6VAKlBOfTzilp1dmYWSbL8Q5PsgABX3W10ayUC5F%2Brs9txC4N%2FV6uweCwidN14cr4URfMm4ZXEOkDOeAt8x9piUcJynF59PT%2FayYuMgEmHDoWllpLYZMqRZDr%2BqsRTQFXRE5YRYpfrhYNeWXh8Wr0GrR%2FA740JSbH%2BjwJqxmeF2teW65dHBrYQqvG9siFb%2FbNRgQXSqpg2G%2BWBudb&X-Amz-Signature=f3293cb612a898253d8c44e384cea6324065e0b0dcfb8556efeec3d0828eb251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

