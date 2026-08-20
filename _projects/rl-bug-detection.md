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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOKGMXB3%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T033557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9K6nPwo6vU3J%2BD5hsvDq272imJ5835HcfUPxJMdaS9AiA%2FOamzFaUQEWSz%2BccGEEOyaSZWroUOc%2Bc3%2FmZD0IRUwiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV2ikMZg8Tx5pjgcXKtwDekGykDtWCkrFV4JLmzLQNtOvSq%2Fd9lAseCWEKDc58KA2Jr4DPT4y%2BpAdYpdniC9%2FMtOEHHj%2FVFbnl8jTf9SmNQpuH6i72ieSE4uY9CwDCEYfa7My%2FZB0e3%2Bi4%2BZsSjuQl5e3qZR3QH5QmuRYRRXM%2Bp67ug0heqNCgOqRQQr5it3DCDJ4bzcUNRaiyxyp%2BxaOCzagUYQS3%2FAn5V9LKKlSgOEyHeR0btCskJrAfbKG9AgarbS4Zvti8iV4NQoKC%2BDjavRNwqU8m4iEcOlUaeQufZYHVcCmZmyl6uoh83SCk9gSBMhAi5BWpPQ7IFoV3il77Jx2K%2BlLopSI6S8%2BQPw9QrPJ0DZj4YYLR38BLZsNMBxW0F00no9WQsPpMllpDGMwR68anTFEH4N%2BOyIBPYQ39gTEu6zFCx74oxqec18ncKpKGT2snEhriWzCGwTTPZdk8X%2FFQrnrx%2BtcQXlG%2F%2FaYQsQk0ZXvVDFLflP%2BAdMFLjrBIPFPAXPjbwcf4Nj7qIY4EqEaRuaGV9hYLPSqlyRXfA0eCyxa70adYEqUdM412hWmckhwxE7DO6s89HIPyLc6r4I%2BWF%2FVba56LQnBVcLVrfjonhZYnJ9Z77Vn8bRh3Hz8Belld8cWMFmhboYw9OiZ1AY6pgHz6rqaM7f%2B%2BH661Njf61mzT49YwTjPaeZUZu1PaScM7KiLCEQwqejM2er99s9DXz3FuYVe3vqTqt3hwR%2FU2FHdt5unFxg2z6GJXYqBmqCLhODUa0pJHQmOUpOr8GAcEgXampXqkQxzviNrD5y90C6ptyWpZigeDAa%2BBqDJ1eJeGxQqJ7sJvoMBze%2BrtoAnp6cmm6ilPoGACmkAIkUh9WcLH2SNvEki&X-Amz-Signature=54f6a7e48e9e6c568e784d071ba0e2fa476855dd4264a22229f8a6ac6c3bae13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

