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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R3ABD2V%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T205301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETm8%2Bm39X0MbZ36XA6fVESda8fxStF23icsq446C9MUAiBN99r%2Ftwnh3x%2BNBcC%2BpdJ2oYCUlM8jBG0yHUUWhxtVYyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCrvaIOLk5FxVGg%2BKtwDkgAOmoRWxQchJkPPsttKeiyjMKXXoR8kZaWv5eE8uv3OE4MCPM862I1t5Qb8UCQOX84vwgy0uDeewDuMkAZZDBAddO05V1ox0tdiaLwvqNzDIf7MHEaqGaoYn%2FXdOKhoIpzU7DUiu%2FCuX3t6gw8iUS5wv5AGJTpIptfwgvZFbLBq0%2F%2FYA1SnSbnWCGD9P1BJ965TNNn%2B8la1jCOZuLQWJq0b4Enxlwe7I3idciqA9Uqxx%2FaD96pK2%2FNBteCHeA7F9dfn64%2BLaIM8zai9Ft49TU%2FIBYsQB89OoxRGdJLVAcxgK8IR86Fc5xmvjP0jSt2sGo79tl1%2FGuIEbwHkzg%2BHB5YQ6e8DcOXCcXPlMUzK79CExLB%2FXlpexcrJGa9E7NZOx14IAjRWowD%2BBjs1w8Mh8IY1pL20KS8Fbwy5Qmbb%2Fpf%2BRZh7ZLsha9HwJgqBOsdVlSjvvgl4vh1CWUAC%2Bx4iffGuOczfH0Vgjp76e8AGjCZWknj1bMduUSUjXO0LWnqxkc4aYMZ6D8%2B5o3AvrJVStknOghL0tBKcP2W1TWN%2Ba%2BtDWAn%2FdMZRnSpg0gat9prLZnowh10uXL%2F1M%2Bs7rFD6PM1Iy6FIxt6yEisPKkRHd6v%2F3wlz9Bljrka%2Fvh8wyMe60gY6pgHswVbhSBUDwG85HaiHFglXRvu8bPT3F7HlXyyIud3qQ7CoL9cD%2FJE2YZOQVHJcor0RwjiYSyHuWzs9O%2FaIV5L6Fh7bTprl7FN6Y4iXr6Y7qauzLldYOIuIA6NZJx0zizq8HQe%2Fnp8h5fo9nW7xt%2FoQnoxB06eIra8ngLzv4lVa88Yg0M2iRk4CIjx5KHiDQsaWRFuuEkuSntArjOEkl6yz1JNIkZFE&X-Amz-Signature=4bbe5d4ff8b1dc58a9eecd2b4a60a6b8c41229f66f0c189dd7677b82f9e5841f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

