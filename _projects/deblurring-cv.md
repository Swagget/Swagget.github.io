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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDE7QU7S%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T051242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCQwLZ8JVY99d4XTsmPFHQnxbuLT2F2oBrn2ThxilZSjwIgH0lAvVVW4XGmhPwdh4HfqgTthJsjiDaVmLBs7E%2FQuQYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJR7n%2FmL2aBN%2Bx4z9ircA7l4ItEC%2FX2euDMdvI%2BTq7tfMl9kN0HalS239J9flcRMpNh%2BsqoK%2F4MJBrE5%2FECF37QIarGYI%2F0mLFU68Md5Gsiko2sI7ohbK0PzW7EWVppMrTTN%2Fqe5gThSsB%2BbL5ipZLVdrbGHr%2Bc6ESved4ZZzvotmhq3SobLaymJSMv0bKqSkPPwvf8VP4p%2F0Msb%2BSC507IxfeyeFh%2Fv0O0qglIeuO%2BxbaKd9vZGPq6XEQ4BIcQnMPpZz1QKtKDlfp9t14UVJjhO3fNlARfFlFUoBpRiYWBxfH0Jbj9PcJbqNv3SvSH6hWoZLKQS9kC4YcS6G%2FEYj0Nn52gGpVKcHh4zHiuxSlg6nTUzNkjGDcLLodXqCC0o2i0gPXOIOHYLYrkn4xgVvYBKv1UZNC4HPri6Yg24kvw4m7gzjQUMmE92pGADfYfbO40mo6QkMu61aOWaSiTAYrv0TBHg6U97T6KlEgjrSmSBB%2B4x2RG7ySZs4EVy1BbkxuDl4YychbrBXtwQ6o%2FUqRpeI2TANp6WqgA45l6ITb2C9FGmmET7SZucHEsXqtX16W%2BKJ8n5sFLG0K1yc6DOTbSe6n6jUvTjNJRur1NcCfCXHmc865gSCJGSR3lK7meHbHQRIAvKkrsVjXYQMKivzNIGOqUBJab7%2F%2FR2dZb1NvSJrXybHbQpBSzQqCIV9JMgwzJZrAEhTJbPVyMdbB9wZdZ6Veds8z%2Bg53NO5LyMR6nUzjsu2gS1kjbkOQBmKFeO7dZPHJcK3XHskD4WIo8bR3cDyWZ%2FVtBLoq4wgfxgCRkkjS7lflyCgn4oSki0N5PmSi9IYZddgAdz7Gf%2Fnh6G9SvbQF%2BiqWOiDQdL1nUx%2F0JtT1fwVHsJvCJC&X-Amz-Signature=b9210773d78f36cc2c81c6e97d4b7d7203fc709f76f123052924cba1173deee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

