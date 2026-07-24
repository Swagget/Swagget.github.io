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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SU5EGC%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T224955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIEzUyFgDQt9zwZaIhpKli7Kx0GHnOWq0BB3J2x%2Bo0ztVAiAvV9Kc%2Fe151IkWIsuFXG5bC5bIs6rz3yfwGmgg5FV%2BqCr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMuwUNgzi8bQUOMs8PKtwDc7Zj6zVlMPAAN4%2FEoCiT%2FOPMSZqV68CMeU0frqT6s%2Fo9L5IYf2CkLzh%2FChQ7CkkeOo4AqxJsHbpzf1yqSwsiQGZKmgAq38TPssRGbnxiQXszyEBuQqssRqMstk8qs212VgCEe6PZwkI%2BtgCQdRzx5yw%2BPmKYb9v9aGsp4R5Rf%2FZ8%2B2LtyDOTuBs5QDdO%2F2o%2FSM7M%2BuZu1CcT8YpOhlPfy8zsWcQwzKKjxynIzKgCZnVghXDodEnDdbGhhEMITNFjpr6tD%2FWtJZaYvRFW%2FPw8J5%2F2u39B8gFB5z2OK%2FeRlk%2FL1oJ21Yt%2BsT7ktapM4%2FuW88%2FE0QpfsO1KE7O56%2B57FuBTCxD14jILA%2BauhbCVNVXICVWYQ%2B8EmoV14dGZGzszFBrmAcFEDSMDcNResWS24IJvZMIVjqXPU1iAFIKkYVqrwNETLi7aNlaSLUEzlpipYFRx0MmD2QXluq%2FNsiR8oQrk9znNO8r4oSvlCCorzV6Pr6ONmOJhmQDpA2qHqYQshzJremQPiJlt8gGiOz4LtS0OmbX3u9QvHa7Sj4%2FIxO2myD2XjjLRPTkZ4mLXu%2BBS7VViTsXid4KoKp4reY%2FBokzcBtfZ%2FUonjOFys7BmKeWhFw7RimFi2HM91kkwxLSP0wY6pgETxheP6QA6ctTepUg93A3h2pB8lvROwaIPST6djxK0j4faNmUrbGbTibsOi7eNd5yIIsvPF15wZPb%2FI1owQASork8FecChK95PYbrfLd9XWJxiQCdUNBWEd1ngsKj4KTaBSkGWtI0%2FPEnvaZ8Eq22qgbnpjQmrjdRr1YzYC6SYzwuuN%2FGa1dk4JznpDB%2B3VsPOHh8sBLW0z63LC%2BuUiR1l8lVLBGj2&X-Amz-Signature=34cf30b2fdb42da51f1bd7ad5a27608608ae4c60e3e30f5f6d3e298e8bdb550f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

