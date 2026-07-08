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


[Project_Report.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/14214d13-69a8-4ddb-9dbe-e1062d484100/Project_Report.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRKPOMEW%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T100337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkR1fz8Uge91%2BPICSKIYx6Jj9fCQXuV%2Bvpr%2Fyrz0YopQIgOe7zzMD7e5uylldGb4pPw%2Ft2Z%2FjrhfnT4uI7Ss8tQLAqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMOItKixlTnKUKFIfyrcA2zYqUtEalbaf3VolTETbyJ8Ne%2BzrhOPOOastNdGgXit3S5CeZ%2BE1%2BSYZVdWa%2BbKswzGIyuVF%2FIZu3ht3KQ29RFGmjJvIiwjTq58zGpssvF5llapQ4F6dUkaI%2FAWspu74%2BeeXVGQHy55tUg7DsKfS7bjxAHKzNdgkvlnFpkQNjIeTDGYfFsvMmtysiAsx7FfUPIP1AG%2FIUxgRuYi5BkYWWOeXmkk5%2Fn9vIWHm0GuBfKDfv8KlXgzm0KT%2FPWbWlyaTS9iuGWfDwnC6zgK6lJAA1zNcpQTdlVSlupTBiGoV3ZWe5kWm6zkh%2BSD3FJAjP7TQyGN6jjmjpo6s7AeHY6N79Wr6rgk4TjXJw5nPdzVBgFqDBA3zFfJ7a3UEWR1QavkIk5UnksUjhtIBuIcnTnBgNHNvJEH254IPLyIEtD14DyMfLkJzar2paJrEz6tvp2MuFmkD8xwQK1YEyr6Ew3mBoBA3lx%2FrZDTZRpTFxOG2yVaE6WxM8OEx6YwMf6a3Dsnkdnd%2Bx4trs7GnFSoQN8btGGgQp9fWMJGa1dkXWos%2BC1Vj0EX3XmF55fr9Yir6RXdrbkKxYdWIP%2B76AB3DFRLp5Aki6JlsEmqGEGpZbvMJUVy2iYu0UOuqB4qMINLMPq7uNIGOqUB8xJrve%2Fc8BRj79iQ0NvvYTY9HL8DneLAZM0g7r0%2F5hyspQmFu4knkbkiSow%2BNrsGvQw5%2BQhL0ydFornsFSx9PPx6j9mN6Mo%2B8wqatQZpatB0ifyYRhuHmpvfJldk70ft9QZMiRUIuiMuIxvL9EvE82McG9h4ME0ht%2BtmvpIReGlUdQYAeV6rzU2ehNQUtsTMTf2UfXy%2BhaTlENM%2FF6ZAFiVas1ip&X-Amz-Signature=ccc7774a413b0865d8951bc8b834af3bc0a718b286cd5b827a4c98650c7b51f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

