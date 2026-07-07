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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXM4T3WV%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T234255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcywsLMykaAS9VEiVh1QvLFriswfLU%2Ft1GlkAHRTC5sgIhANXzQeJyM9FURgo8gDUAeyOw3NSKFSLtN0yfBIvtL3aNKv8DCHYQABoMNjM3NDIzMTgzODA1Igy91rFBOKh0MvSRINgq3AMrchCzDw3Ei4zBLZ4PDsOawcDnPTayoPFhBpvXMRngYzzf2lOoJ2VslFWwLv%2BxEE47IMklZJu0K3BxcdZHIitlMwQOBnoLXxSGm6c9WXne8zfKReANPbu8d2UIGPPrghKBb8UmraxQ8tdQVBbq%2BlSSr2JO3KqFSRj1HmwLH93tpEECLyXJgDx9BH33lgfG7g65UVe200SmfN8V2r%2By5Q1oFNJtlWJtSdjp%2FeI0rMpwwsKtQ2FtIvgw8xhULEp7QxHy37wsRvDNIh%2BJw1sINT6xXJoth474wvYkM50F47X72KQEbZK6zbIYibmpLRyblcr3rFpCnpEnlh2PcnCpJr3yY0I5LuX5b1Kz4ApQCY8ktwmRDQOdh0kYT%2Fh64TTYvgynF4oAax9KLMdPeVrj6EWshRSOS8Uj5exeIsVD57kfGply7kQemH9H%2Bot6cb8nmZkg2TyLr5eIOGZcGYqkhwN01bP27tKtvO1ugiIVCAExYnWwQaaPKs4M9H5XLZ3IP%2BAeKiG7C91FyB%2B8UNv1NppZfRcHpogmyFgL6OMaFuSqdaM4xFiAbokesIjedZQSV4le26DFVUOzvKrSdH4q%2B9Q5afR8BGD1E4R4TFY803URSU4%2FBdB%2FZNpImaAv2zDY0LXSBjqkAVxXl0%2BoOrYg3FONcmZ2cLfkLy6Kq0johcO5KZBwtwOch1vu2VO010LmCHb6wFde%2BAheHd%2BkxCo5meWkTABIH%2F%2B8cIWgzQdplsc7hritX5MLnfr0u1NE1QQgEBjibHNulyccvMjy0LOWR8SmDl17WVdIdvjMXpFMYxlev7xrYksTZBZCDe%2FdCaKNIMhTiess7MhOCsqzts4wbeDkZ5u5R1yaSuYd&X-Amz-Signature=5fee61e03aec8e6164d8a4db0069502feb7446f3ec68dd5692939c68608fe5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

