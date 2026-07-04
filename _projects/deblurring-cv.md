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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCO3FRO%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T155410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCoVsJ70YY%2F3YzK3KGDa1rlWNaCK5HFfcul91It5PJXfwIgDMoPQ2sgsM%2FqcUU9WOggnkmq2W%2B9xcIgnibJibZ%2B6Poq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJh2JB%2BUcw6dENWhUyrcA33zHs%2BRhmZx7H5Q93Qf4Xh%2BciZ5S45mx2c%2BBmicdHKh%2FvoKT59Vi%2F4UXBwk51WtX1iFI8JUJKdnejjnndH%2Bhzw6%2Bu48kYcWTF6ywe%2ByzFNzxxF%2BnGZc6SNGmchpIGyZRcFRDu0WBhY4SokcOKhsZ0Rqrcs79lNWsc%2BWRwRLZZGr0lXQQII8ynNLbDZlHJcTdzzDRw4ze4yMPHQdEJY%2Fzty%2FslqgiOMZG7%2BlF1nXgWF6U5EQk1024w8xKOdWBe4hywA%2BGb7qcY17fydA0b1FKgq%2FjLxgbo3XHjb3M766gPwgF1WR55%2FVPYIZfXmDsgHL4Ns9cJ1%2BndIEN2y5U%2BajnoGtKlqOYo13K3e%2FIcCJ%2FFtvTLFoOp%2FyJTnDKj4Ek6KO%2ButvsDVAkyhBbU7W6ffGFaehpJBwgz7UwGfioEpfDJlV3%2Fi4mJafBQW8Qp3VXpr5SklfPvGgyvdx5syyel%2BAvYV59z5bpYTRXZBz%2BWPocDuxbaSyb2fZwy%2BvntEEnGxt0ZWG6NDr8R5Bfj7aslyU8REqgWZQdzthrtf4buJ5OpHt7vw0GQ%2Bdbsi0fjtTrKVZ%2FjsRP0v3sWPEzbjoxpcDd2ZHwp342dFQZ06cHLrcDO4N7d9dEEDKsM9YRTWIMJS1o9IGOqUBj8FFeRp9GUTavYAmq4PQJFy5Ce5pHVz9P9HtBfzmgTc3UaL%2FJMzAVeJTDnHOwrkM8DspNWTYRlbmUByyb29Ciwp7VDXX%2FL4TJeT2HFUZZXBf2ZANwGoUqWMYFJXMWJQjCsoM6uI9xAhvUhtnME%2B802cN7PevbX7C5RfYAKbBgEcFDbh9QwVUjkYfT0oysQN1%2Fl%2BK5%2BoYv5cgK2vgpyMgMg5BF0wz&X-Amz-Signature=2d8d6af12b5694f126e2fafa2ece6fd4e85856a6b13cb361b6aa7693cff012d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

