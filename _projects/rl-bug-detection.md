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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBN4JADY%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T155708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCICjVHpnjNOsF%2B3eGskiP8aspIG%2BRDCNms97dJ%2BvUQr%2BkAiEA7Uaa6tbOi7QoIzxdQ5uziMYvh7J6SwLNSOZ124yGEuAqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmKubNWhxrarYRYRCrcAxNmbKGOVCNq8dWbCczBKlHvvNKHwF8yuPpsZXFT%2FJWrFTmpZ4EBt%2BLY3yk1CRORTncifFc%2BpTrnbpkxQsddUlm%2FZaeko7mdkTgmevDIYyOcUBoiUgii5frDy3ROgWEbi3p%2FBnz8Ba3fdQ1tkRfEcwuR2A2fEnSSWmgcp%2B8%2B6XdN0F3Cyt3boPVGbRzQ41c8EmzD%2B8yTSdbghXAMyGHW3uw9XLwOlfG5h8QEVGu1Z058aWYyeWnys4S8d07XQqT0Gc6iZZWP%2FT2x%2Bvpnnk160WWSQiwa8kPEOqNxt3sMMLP4wy009%2Fz168JSVWYPSBiv4YbCGLZ0HqzlSt3EUrIU9B5OPdi8RiuEVpfd4x0qDKTOSQXVyYTOhg0P%2FxeSDNgPe8Gxjn29BrhXp6v17bqTPesE%2FwHCZ5YZ3sCQfpqIG6X2ZWFZ8zgehDGxeoySlHRe4eRnR%2BW5FKYWRbUBmv7ozbKLlJeyI1nxZxPk%2F22XuPRGziueJpU5YVV24bmhX6CR1EdoTROsqrImZDV1X9T3IWpRYSS6I8bLHwbnZ8vArQInYIhRlhFfDPZdSntLVQhhWfp7VaVp7qJ1FoYWXzx%2FjNoDGTeMPB1kGHmCte%2BecOZ8QUlfZfQ3Lzuw3baHMN7i69AGOqUBDOG2%2FcfRPMr1Vzw1oBke9UO%2F2i6y4dsqeGgjEhMR6Ojqs8vjlcBfKQaqdLpgNr%2F%2F1TZvfJYQ1Y2qwUInNiyFBoJvojZbYfJdT9gSToumtGmgNE7I2fLgtnMhqY%2FAF2jI99j%2BWY%2BZUEZYWu5ZsZZcN2A%2FJFjhkuTjcuzy1SV3luZ6SJ8ri6KI%2BivkPvEoF3u%2BnN9%2F%2F7IxxPZhZhv9MlgjfAdeTHAT&X-Amz-Signature=e955dce2e2eaa4b3540bf31012175724c840e99af8239688aee4270fd7069318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

