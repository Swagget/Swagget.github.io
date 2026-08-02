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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673HZ6ETR%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCWRmzCp2NY5zjqOOI4MpYe4IXms7QZ4%2FTuizFfeOBFsgIgMBD%2BA4EXvduN4WeXwhZUm8YYhKKHovunqjCCw36ZR0YqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGF%2F1trHd84NhdHMjCrcA3rGvIiA6twMWV0zEKDoWBVFP%2FL2jVTIy5E1g4TfxTd69QSV0DAM%2Fqz74hfcAJPpAoL1TuJkNlsq9aWmxsRz0yR3M65AGlisO1PqRtoGgliWsZxnj8qmHyPpYMGrH7u48GT5gbsX30WgjYwslrF7HDstTdcNYshbA3f7p53gwvf8b%2BLW3Sc%2FOiGE0a3Zqd%2FALCAEOmV3yyJCAEzua5ZZmHNG4XrL7Q7RLKN7nwF6qj%2BmiB35bTebjKSV3CrNr7fuw68jhEE8pNMvlDBGjGC8%2FI%2FJM2WiqcUZOPemQTLMiyaa%2FgI5eJc%2Fg3C%2BPeyyHmWKvNN0YZdKvXQQ58rMAYCIfMXaSqFkHAdGV4pc7dVQpYjul6dUo2wU6f2gjcpy7C3otfrqTZsOCUpixRSOx7ghXH32WSWeCaTwWxmaHwF9BW7iFyk39YiX1vpgEZBCmHTOSUvNNNFK%2B50Mq4l2TwEcDyOiSVdD5ZC1EWsEKf7YKHjv%2B9SrVzdnIvpNRt7ilNHIf3wtbA0jaZr7LADd0BUxZAOzOYPt93FI9LC14MZAuh6vAhEqap1a75rrBuHKYJYVUWWztcwjsDHxl%2FPI9vg60cxf%2FcpcDzJfpEqpuWOIlzRK5vVGkZOouheN5OeAMPLwu9MGOqUBo8jV3rs3QRvF8cbKYKSneSsdHJDn7zmeeTdaxpbWCZt8WhfwtxzUuByEXyMxPPCUnDu9js3BouBUOCu2TcN9pfEM4pYUhgrX0UYDEZE2DUqacQQ3Lv%2BfzSUm%2BctKwd53woQRHXIT65dl8ggLTlTf57zYAVE6zHJX1NBsQdAx9z9ghoq6H9J29oP7U4XdnXhBbK4EkoRDaS98GrYUIh%2Fx6A%2BI0csE&X-Amz-Signature=6dbfa63742d5cb7f0ff815db43b98dd146b9737807f07bfd1c15c8e1475351b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

