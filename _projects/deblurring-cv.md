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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJNWBHY6%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T101710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhBRPx2JCZ%2BPzWPli5GjnwtWZmjU%2FAHjT3Rmjo3FybjwIhAMSfLAvLxnI8O7bpLjiajjjV3YAMXbiRhpjxiEdmuxxlKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV22dobfHgk%2BY%2BPqQq3AOYYUE9Il07jAIRea9Hg4dB9mf2vZGxs5l9BXUfgwjLhR2KlE1ZgH1x4Q4Du7KlaC5Oc17VR8U8tl6eGny%2FusoJEscUKzA6RrBounaVqxu9wQybkoxDYmV5KwjSZUJG3BL6DLidDX7Hw02K%2BDZlt1texZ8bKekvr67IAGfXSiiajgwy27J8KUBLutRhhk8fRWjPg4DVpLmuRssKTKsr8lYs%2BV5bAIKG%2BrKcKFi0oBtmZBtTcJzMTcGn0GC9eJXoicUtmCfNcwATi6lm5qgQrO2A2JgtTx%2BJfdM0mIsIj2kalsxi1wXWaQY%2FZTBWlDolBSRe6aZq6QL7p%2FTym4a7dW8zx2P842ElaRMcKeOzYvkClo6RYAtAP%2F78BbvjRGZpGhPYqmBi%2FUa4TT7Y%2Bq5hcM%2BhhFeGFDw2SL49tFsrI7z%2BDnWokbZE5yYI%2FsozWdmNbNACUn6K8Pmk5P9d%2FU6JDo7xbEIHEYlA94oTkFFLgB3W20UQDya5htvLTa3VCFkU8dLhxekAGGDou8nnxrIzdQ19Mwjbgw5E8MmDT9d4XfHWSNFgzEE0ZNhpIlqfe6AaM1muQ97T1DCoCzflUZFZ9TnVwtE7P8jN2wSIYnTgNq0mxxw1dNk05KPXvKO46jCc7prUBjqkAQZnIB%2BTQ%2F1SIqpOUcDB8FbLEknoBsRvtR4OLcJVc3tRcDwrnD1ahuznQOiIY8T%2BfBy2gtOi0sJHCprpqNIaAd%2BOCzEExokjUdXjBEVaJFfWE3OMUZQPiIOE4vlZVM6lNt2sDVAg7Y%2F5qUPznik%2BjJPfdrdkx11bEwpFLz6TpOfZKVqCSzAoFBdST167WkwNRFOxvYo8ASc7jnHpI2rfZ3gG3GKe&X-Amz-Signature=a7d1b7120c4fb09b9c6cbbff136a172577b601ac7cede1622d4bbeeabba58c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

