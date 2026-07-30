---
title: "Reinforcement learning research paper"
collection: projects
category: research
permalink: /projects/rl-bug-detection
excerpt: "Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs."
date: 2022-01-01
techstack: "Reinforcement Learning, Deep Learning, Fun!"
source: notion
---

Wanted to test whether an algorithm such as DQN which was able to play atari games. Could also detect when the game being played had bugs.


The idea was that reinforcement learning could also be used to understand game environments and detect when they were behaving erratically.


For this I tracked the gradients of the last layer of the neural network and observed them when bugs were thrown into the system.


It was observed that when a bug was in the system the gradients shot up massively, and this could be used to help with video game testing by flagging situations where bugs are detectable.


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZ6ZZWM%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtf6VcaHl%2BGA6g45df4KLx0PWdR9JIMkgXI1elnVtXgIhAPNt4BKj7JL7NudeayC5VcR5cZbuiBT7mUL25EDthL%2B%2FKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEWxxzkH5zD%2F%2Fpy5wq3AMFmV5L4PbUl8YV84lFZvqDw5UwC3dJSHZyRZpjM%2FZmIQ0oZhRXhvgHoE6mA16myKUD38RkMJKYDVMK1V39MYVm0fRlSrvcHrhaG5jihyAcUykkclLmHuwSYoN7qijhOgmF4nMqeBELiZ6nv2U28HtRdlJggGDHsE%2BG6s5BnjyobfBuT6j2I99KdZmwfNARuwS6WBX%2BOLLX1ccGlUXKpt%2FQIgFxcUr1O5A3OLL8PUVNSVfDimTSdgsEkP3ci0pwFyxZm4ZnqzVFDKPaOXXOoJy%2BuiMRRbLx1liS5PA7q54NafdgZ81hYvwXIBGDjjYFPq0OTtVu0T%2FhpD7kAUP23Y9nGMuhbDxZkQDYfpE525Egor8eGy6tOD%2BiXHp%2BnN3crFjesT3IyJyCVZLY6f7qRrwNo8CFagbDF9Qmp07IqJgziPY%2FEMoDbMvZxeA%2BVD5TPOLlYHZPe1WCgsQT7pTfzAWgBAJVYYBJ7U0pkqZfJR7lfsvm5JAcyBkLo65TVmtPwgnLCKqMsbFONzSvxOaiOViularPOE%2FIf2eAeUEjlpfQh5KnSJhgbTRh%2BucmufDk4GI62neVqVl7cAL90yVII0L8sYgjD1SYjLgVn774XQ%2BqruaPLhANGPuuX9K9ODCN2K7TBjqkATI6kcp2ykHFnD%2FdfZD4%2BO1%2F7KFMcTZjxLXZShSUQFGByvvQTZmLLcGsy1oqCSc5SGQWLFZ5Py3ydzud%2BLbiLeDPT8rfG094qN%2F2wuJadYLyWGGPRgOTBF2udGPMlDjtW5YevWahTM6kC54YeZGEKS3H1jPGgaafMKPzvr5ozwFNuyF6aHIJUdoYRCDLxvQOv4yX2XIfc3JOxQUlpFOt1KQZzny%2F&X-Amz-Signature=aa5039cbae03b0a78758a80ef9691070edb74ad6517ec52e4eab96582a4271df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

