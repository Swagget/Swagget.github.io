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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XGEVZG%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T002924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCudtKMd6Ue5s3jMQvkTQ14A5KLZ9b2QuNUPJLjs8Yl0QIhALrvYsfy1bulJADjD1Wsg0TpJhvlKh2cGQ%2BBAbJ0KeJ8Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxouBbrEfMUovuCpyUq3APrtowxrFqGULoopM%2B8IhWGjBbqgnrSQTs8vubjl%2B3rqtPV1e8078JhJUx7PS3cQVDs1krqpRTnfateU3FRF8NbcgPg0iZiPX6PXL5KNctvWMj7Op85w0V19wnrgDgP5rfXA38YqZt%2B0YhUMhCA4XTFSYDy3NiMQgpf4I%2F3nUDWIsLKfilcSwqGirpM%2BLA0WsQjNdvabxiqr69xS6LIjWviH3DTdAP89iowMhCjzxR%2FwspVL64Lrv8tkeUTmWq1R7RnRgPfOY5eJj9S%2Bz5qwxr3V5K5TMQqfuQmx0SQ2ICDpJgVJzBArkJROSfhCUtInulA2ENNtfUf83BLkoY4eDqKK77Dm9vY%2FOa5a7Z9Gcto%2BH9xF%2FbW25%2BsfwFbpNBcDYYwf73En5STuUTE8x7kesnnPnUXgcPJQ43Hi26AygoyCEfrfJRuw6sQwBGfJLdr1zHjnq7EknLY7%2BmWmXkyeCEO%2BkgheDdLAn5VNPzaK3iVjfhdQ5VUrFJRhxtK0MICfxDDfPB5vBMBPwwLfljcQdHIaxnmyHdqNJQM%2FQcPkdP96N%2FPIeUtt3cPDKbABWjpgaOaTqz206ng%2BUW7zOADSTnKPx9B%2BtswIVgQswASea5tQ%2B1wiQMu1syArNNsOzCN9IjUBjqkAX1H07fkxIuhVb2zOEFLXwGngV4fg82K%2B9L3myGPqgN6487vRdF%2F1nI0kxwmWJbwrmkEKPAfQr9Tbhx%2BJ3oIuQ%2F%2BKAfWebxFwkjwvpuccC5ZUXVSDp9lrHM6to0YH63iLWEDM1O5hlUKXmqDm0aIxln4Dmv54vDR%2FQdVaMxdiP4AMI5Z8teKzXAJQSk1YSzE81NixPr%2B6BSn9mBT9hpGTiBJY9%2Fe&X-Amz-Signature=3b922b15944301659f96b5f23769d40ef887c4acd7e2891e934d2c90c5fa1e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

