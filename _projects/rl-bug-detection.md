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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCKW2OOG%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T003701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOFBX7UOetCSlYBdAf6hVZHF5CuKbIGRZuxj%2FBqlqGzAiBGYogjfsFLy%2BjWrqTaFMUeB9gCPEWWF%2FV5m3jtMxzO7iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvI8LQr%2Bx7Lf60%2BDKtwDUmzsjUZlpGQnLEsdOgbBK0ApA3duAxp%2BvcUKsZG8o2MC7eA5e9VF4ZDVw%2Ff2%2BT%2FHXERwUJdgcrhRpx4LPDcZ2XFwCtVK4UB31C%2BiPR5rLoVCY5X4%2FIlcHym6Mp3kvQy93KckTBnZoIhX18pcvGdslBqkgSONGQzYmH%2BgNmfKADIN0tQfpPCWpLNUYOW7%2FtQIz%2BzeIK4UMIQDAy0hGKxE0woWOyj3GBj5zSXp1B3hj0RO6aafHdU5EGVZ6bcAIdcIWUxlZ19gp%2BXkq5jF2auvAb4dBydotCuIJuxjQRNSgiQLVRmr0cLSkRj7GmTGWq5BNAyVyNdUETF0XU3G8Lynojl2Pi1xD1XhtTBvBLkdW0FoTlRzm4GZINObe6HSABn0uRdqNFbGDsXNbr490Dqa%2BVUL1oJx9%2FQbEXwMBfkgC80wSaTbHSJ%2FrJpjk8rbKhThu237iI9lJx%2Fwtliku0RwpdRJ67QXL4YtTEsAaOpGIeQD1FUlUeb9mMJJvU0r0g01ZPNZ04tr%2F6g0%2BBEiWg8YL5RO2%2BimLjwWi1266XEx%2BKnpyMLFMmb2Ep12qE%2FPGR%2Bf4hubA87UEPIJNY7ZW14ZQWRAyVuQajQ0k6xYocV1S0gihFfNR4%2BxF%2Ff4waIw%2Bdfd1AY6pgFdW%2FtFdcZWXCt6bojisz7JhdS4yoLI6iGlSmXEWTVzZgR%2FgKTsnI6cUW39HDLUx84LyYxYdXG4xZGKweyUFHyQ737w63Dsl5fSFawiu5SDIBqoU%2BnIFLx%2F20F5riz2FKsqZJJerqP2LfscB4pgYIP9xJLP18v6BpaIbs6fzRJllcH43werT7oC3%2FX%2FCRYwcJI6FD20VW3GGj0BuRoN7m5klLo14xye&X-Amz-Signature=afa0e170bb15ec45a402344ab16c42c903b3e1458f8014c6608210ee0e488128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

