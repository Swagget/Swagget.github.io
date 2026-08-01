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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QJN62Z5%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T224152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIA4OpJ8Qu9BA5AROwN5V4ugY%2BseJkvB3VK3KMm64X2M5AiBbB%2FRbyXp6vzVB11j7LmID0Fx4jARgwPqszNvSK3NEnCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH6dl4Jx3GX6X9mbHKtwD2GvY7lDP3hhmEDOMvs8G88y%2FpsAvlSnHEgHNlJAErTbO7SG8sCZIoDvUhofWqfpNeGcwT6FkOTu3Oo%2FqbVuF4MKNvrNq8Ka326jIRrVAcEpZhxEGWmAD%2Bsx%2BKrZfEj%2FUBFVFBAmkFxR1lNqc2Gm5oIu77x7toIk8Qd%2Bpv%2BVVia16AOQ76GLNK1TCAyBKvL384YKh6XYPTHz%2BMFMbEadj56guZqqM%2BPgdhWBo0qwM%2FuwxfGcY1QloHO6Z6JeOhqShHTxwI%2F7vQpthI7%2FGFMjHRP9CvMM2Rmj9I%2BRtOWoLNbCeGGqxuEVne%2FULLxg25muGKn%2BpptNr56v692bkkALleEYBd8ECs4d3nO1JFSf2CqJa09vjV9X3%2FpsxWptvzhIMEKTr4m5Xdj05I6mWy7oqHUmritGxpkAUODE6YlDqAGbgAw4qDST%2FCHw12cV0F94L4NVTyXVUXVPlWy3u5PujnfnoxEQtz40ptj%2BhfMOUibRW2q0VeSKJx7TmDYvRepcY8d3Q2GFRgi8j7HDULMEGbE%2Fu1xouMYCcpN54W0mJ%2Bjs4w7di%2BXUp7ohFy0bCKqTB9D%2FCqy1C15FEdD4v6uYfImwmOQ0hguP6flTehYHhyXgWnzd2YkZWPS602RMwstC50wY6pgErNFgQD11p3gFDntmR3XPy%2BZH4TqE7wHJSYPC7cNcS7TbFtQqeelcrickzZj9w35%2BVq50iV1hnteP8Pkf%2Bu%2FLhZmkqRS9PMJST3i%2FkvDrcPX%2FIHxShxdA1dCBdW71BZTS%2BK1UQ9VIfHBlYDadWcZiBgHBCGnDZbLJPNvN6M4dxoHFORoLlFNnd%2BsKO9PhfdJuvKC7%2BPpPVQFlW3kYKVbWagOJV17F%2B&X-Amz-Signature=4e00f952186ce39593a40eecb84188c581aa7c2c532cc688aff927f15f3a2a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

