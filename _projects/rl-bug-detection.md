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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I74LOX3%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T205202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9crPxjY1wm9deduW0PnnYF3LBeNqNoGQtsaYcGV2qJAIgAPJy6NTn%2F8oPeAKyMVDXwRPiPf47eWgF09KYNXotorsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmDCRLGmDawFQQYzyrcA%2FRUd%2BlVn88s9SCIikAUcN0zkspYGrBSeKnAHUIrOIXobJ70kklU8%2FGx61rjnTP7EL49kAVuhEdctZA8yuFhvh2hakj7qAKqfRZF67K%2BgqBlrm8dsMd4IPjnvagYRx0VFIo8O97JvaUtLCjmVNuXgDzh2AFbdOlfP7ZOVSm%2FmBub6TBUU6FOLJIclATAk%2F8vkWzHp82QP74NKAeFyLO93KQ2lZaYC5021Qez4oiw0FW4JNzaFbMGi3VwkhY1GDSqU9pYAtkwdbv%2BtkOGpD%2BIeuUlFaW4I%2Be2%2FztY4jg%2F%2F1bp70FYjYvmxvjk3VlijD9cwk%2FK7YLKkAEbhyql%2BEFps8xUgBjZ%2FRr36N6OB0g6IQR9mvynw6uXwLMtSRywEVsXF0suGCzGSHGwE1jRvOfFQ5vZCuNBNMqes0kI9CZKGDympX%2F%2B55OJYIkye3e%2Ff9TMmLB52%2BSH7jJDuuRghytyVbEiNNC111NsiXykndAH4XAlC27JR6ScF4kjPiQd57WbW7fNIap2QqWIXdrmKfFjBh2y54xFAi06pPERCL0v%2FCuQYw9bWHKSJEOBDL%2BvkwTpXDNGVM1E%2BoySOX2v9hwXMOVI8aE4thovFYTEdUfMTONLkn%2Bd8%2Bx8JVa4DdsKML2IktEGOqUBfInFF1D8EoTSPNCmxyPa2wi%2BgbuTWDNDKut9KJRp6NTm8uYidQPyWYw92jVMSVtN9oiqq%2BdrPe0GCsrIA%2Fg%2F4bzkrUwA9Se4YjeF2hLUBpCH3Im02VfIpLh2PLKmeD1M1OzgPKfx9%2BEoqlWSsp%2Fv%2BHxkLb5LfUbbB2UOvxCTpJRlvi8HIpjySd8ivFunkWTUEbV421w4%2FN8QJ7Zd6%2Fyv3sEFS2il&X-Amz-Signature=4a142a204ad9d3b2b59016904a7ced06db1f488915dfb3b43a624580d5474898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

