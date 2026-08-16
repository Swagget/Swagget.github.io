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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQ3CC4N%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCslguBMhMpI%2F9DY89c69qc1AxsVpk429cgngdmnloD7AIhAJmb0gQO6x4vRtxUN2TtmTMOVVkaLwNjbCikDXNgqcCIKv8DCDAQABoMNjM3NDIzMTgzODA1IgwY9eymGFqxA9FSZuIq3AN7Vt0Fy3i76dQ%2FQjKegi%2BqqNeVwnNVmauPXwi414NiO7yDnRz9AHsyYycBmqBkW5hQbD3tPXS7ieIuqGqirS63Uuq2oerRh77r6P5uUh6ZWzDxjzuHdSuZZUqquiDA1y0y8L8S2kHBzW9V5e5Q74PDZvwYLKTle782BLNawl2z%2BVejK3cOQv2FQSDJyLOudAGUrtpYfoD2rmtuK2MFbWD9dsT3BKvnqnZeijigjgpvuhwTJ4kTj%2FN4B8AGs7yFtrJZhc5eiJW8bKCJQHIoJJGayaGGF2EX8UOm3nZ4bxmSgU9pwI60Hf4pqxpzVaemBlHBOUnu6vyPhUN07qsXlHXDb7LNlcDmLj9KQ44OyUlHtMJF5ry4EB%2BAutLSd4RikDzR6y2uwZDYZccxlRezueoneAXVAOkt0f%2FPzIefQH4szPRP3mbotoUIpqcLH8VzAXFAGsXuyfQaMwDOisE%2BYNNqHMFOJDEspd%2Fe2ppgtZAYMi7B6Rm5I5SkXWzo%2BWgWyuMDQgDyER6h6PzDV5meYgWOk7%2BysfTW8C6WkdDI4HEGj7VjVOsQ2MuBtKEoTL8RdQd8dlYp8sn8moLZ9K6fTjqb7mg5Ysawp52xVqjpHfPyBQaxc%2BmqO7RHVfNnNDDEnYfUBjqkAWRmfXtT2lefzGm10Hsf8EFdGuXDbm3pEXzwwsL4br5849ADmX%2BksrEkqCdk2Zruif8v4G6XIZ1taypCiL7KYUYPWjFce13gB%2Bo7zbClM46oC36%2FZLckg4JLgS2dLd76eV9Atg%2B4DIhN%2FeFYVJBLOQJ4Da1%2B7WThDEv6sJ0r9uFInTQXF%2F1CfDdpgO8T4usJusKLrIRf18VipOfFXyVK%2FvGNfNOA&X-Amz-Signature=7357818840d1bd3dffc3b04e429d023c5a03d34b8e851a1a7dd0b0d0e1a25a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

