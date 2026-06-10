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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MNTYC5%2F20260610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260610T065533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDixkHcSGA5%2B5vXrW6UKnOF8bRLGffmdMfcG2DFAo%2B9IQIhAOS9sHaniYL62kOJF4WaTb28Vd5BiX%2FjYNvtVqwwydAZKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgjaGKWE7ohIAh5wsq3AOWAMMEsslN9BbC5RPLBFhqsLJg5Af%2BdNruUWPaMaTY6t45hXNk5gtSA%2BbRaMFRHNUAUD8T4tgtr1lnmkxizkwMWfx9edpocR%2BDswzh6a50wDob2LIv6AwCY9UEMxl%2FaXlQsO6iJgSHWdJS3mGfSJ4eAdeHZwtlGa%2B38lxKtpTMcoIrTKY85%2BQPS6rKaf0VWAjpg7GdZOglwLQo2117R9iY9tdvoLTOOFEVrQSRryDUvEm12SkdnbAc%2BEuOq5V7oqdRRXv%2Fsh03miTKLNXJoa4lSjGCz0VEPCVsnplIZ4UbVxWP2I8%2BZfU9TZ%2BUNhrRfH2xYf%2BP2UPwdAHNxscTIh%2BcFJQd7foVWpQuY9FcN0K%2FyyHzkZY%2B6irSgUSgQ8poYI8%2FhAl9NZ52cjYxcXyVqpt8wW7uBYlcLbdmDrfTPi8iIGKJfRhdUOR75opWuUrahPnZLiYl7y9PaVzl%2FrvZwP7cPb4KZlau0f5G19LLP96E3yvwO1ezMF8FMVSq49lyr63dj%2FakJWm99HxOji%2FvDMABEcRw6Yby7OEvdcUnTlRxPcUbgFnMIWZmPFxhkhk%2Bdi9QlIjqz44VLDRzrXU9g%2B1pxeL6yuCwpfspCvWFy%2BS9a49sh1XqsCce%2FtlmgjDa%2B6PRBjqkAWqjDpeThWPik8hTZEBFHoKgnZikpMaBlhhiV09CpnQr61rXQBZCvePe1n6Mombloo2iOu2aVvx%2FcnRYDupi196CTDShJdHGJAbwyjV%2F6GM1A%2F08QcR3qMkH5qia8ZRKS49VYmlbNLD9wSWEB9x3HFl5IMepYqio3uXyjGYGC5K01BdjuWOO5YHJ1iY0Rg5jJL0yFzV51fIBy7fNleQjG%2Bh6dk7g&X-Amz-Signature=6bfd4a66dc7c5df8be8bc8e48a529def8c0acf3319ef6ba012d2bc1ff9ae8518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

