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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MESSB2L%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T045447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDHDONwjDYVurZ6CXYvRgGy%2FR7Jy6X7hs%2F40%2FFjMddg2gIhAOlOMQB%2BzWwetHDbIol%2BtpZFmelTDiI7rDt9%2F7oCJdxbKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmiYTttHZ3IChb88gq3ANz%2BPDk8MqReU0RPN%2FxWjWZyrMyjWGHeXynGLo5QCnJZ4M%2B1uAh4pwvWb2YUK85rJd%2FrsTGZ94sXL6ELII12GzQnmsLMTxc7DMdmOK65rho80MXI3vyE27pBWqK8Ho%2BtVcq%2BsO9CD0C%2BbWkMwwCJZXM%2BNQq7J35YaXc4ct3%2BZBSAE1HR%2Ffy0a5hNkKZCR3GC6iBqaw3YudSJ3AV6g4AWOk2Buj3lFijkJIk0NkbADkrbvRMG%2FaUikvp4Tt9L0J0NNPe%2FneM6c2LAfPcbZtOPG7YQyyQV7XfKE6rMmACPFsBW%2Bw9QDG40Y4f8j%2B4yQf84cznyHQaWrUr3fR01A92qjUvky1ufMDkwB2HZuX%2Bf%2B1Nrx8H%2F%2F6cNMccQAp8e96fEnnx2fbXvKpzf6PdQOVAFVlIem0pNb5M5oZAUAdSUf3W8IpEEKxBNwiCeRgjhMw0kAsHTVwLNAfqWQvBm9NH5YPHLss8lvhRNnKlGC%2BCzIhnbXMSwvqbRlqpTN72vdrGRFoC9OgFsimnCTrdeT6Ub9BCsXC6cxpaIiOsaE49fINuEb5M7ohMKdi0aX%2FOi3P2ldaGK2jjzAGJcYFXBIzPBbl%2BEfC0o6mOF6voMREYRWnoHdGir5vz7TP8OQlseDD%2B%2BIDTBjqkAZXdOAgTosDnDz1nK6D2st1dDna6M0rEap0tjv6pTsrW4ICSh%2B77gL1O0WqWQvr%2B2%2FllBWpxHgJzle92RmduXyy%2Bw7LVCbeJQBp0Ov0IZBLx9r%2FDTR2WyvmaqaoibJpucvQ5F5T%2BsmdaCnnhmUwbxaobY8YAQ8fT4e6C2x66h%2BoMKRMLOQLLAeBHE0p9I3joQ98aKNfldacAu9gAHWmh2pZ4RBZ%2F&X-Amz-Signature=07d0a0f18c097fc2561e4c1bfe1bce7ea5fe53d6510ece26a73db52b03afe956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

