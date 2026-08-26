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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ44IG6M%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T092757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIB5JqS2PtbN5e7w7PHKnvoq8eCVjhM6gsDik7JY3ulawAiEA%2BS55kIj2xI5DjX6rFN5YK%2BCimO%2Ba6SyvJvQPq9gzfTUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDL7ffUiApMqSmpRo5CrcA7P7zB69PaDipstl4Aj1JsfP2lcIamIINGkkWxefpjHua7A6vK4Imnw2bSxEIjVu%2F1ewSvrYMRFBtACPSWBxKK45dqE3nJhFE%2FNQXFmqIIz%2BdoHR9akhJnReGhxBao%2BGEraRWFIGQB98gUcb5Qp%2BRr4fX8UEqc12jpSgj73707o2Ri6F80a2yccc9dp0ggQAKpzr5j1wW8LXHw0AxY9Vnakz5e5K6nbB5hiSoveMC6MrXhpgAHogSUogHLEJHg84kliaI%2F1O0iCXQW1tmrRXYkDXfioVgDVc9A%2FDivEWE6Jv1mHt%2Fxtuycjgcpahh13V64%2BM2AIjNjW0RFKskQ8lrcygxovIwmjczDjtUjeVZlXZLyXQUSqaZ06f69psz%2FkL5bqPITSJqbls2nDXqRRQkLUILXVWvEc27bSaIz9G32wKNOfBMwKa9YzCmUvolNiadkLjFRn8Dut7l4cltpb%2B%2FVbAhyb8mZWgGpdk3iGx2dHRPCwrHbOuC6r1MhvWAZ6lkNFFNbxXoRGwTzAR7QJ3auu8YEe%2BwVzblstW2l2otOCgd5hBFOuYgBOfwr25kR0yd026bWsPqjrNhBc4csFmmGzC5Mcx6Y8LTVtG3U7Zb9p4ufxzy9ZqkDx50v%2FdMKq3utQGOqUBGzAD4FPqjrn53gLGg0sLKLvcvnyryOKxwNvCWyEjUuiZ5UXgEMCAUPMCMYbS0K4OlrjOsKbYY3OHOgv1oIGqrjyLoDp%2ButspeyGlLrIdCHrBQEJtvhaN6ejM%2Fo5UXwn9kta0jBO9x8AyE%2BxnGtnBJoGkaFhTWwGLFVIbQXdzcoq6XPQVC%2BfULd5QBBDtgLi83nZve3W1WxdZi1%2FVC%2FnWki8Eur65&X-Amz-Signature=b7f0657342d9a789954b2e4a684a1e1f6ed5486f535efafa66c359eabdfddefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

