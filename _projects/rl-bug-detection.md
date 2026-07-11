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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3ASAS4%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T141542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCE2mHj7WBevco2m55hUxCG9aD39XFkoy0tt00GtB0P0gIgS7mi%2BN36UTRqLdrw2DWVaubfjGna0Cnfyg%2By6wMrdVsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCiisG56iElFjpi9GCrcA8IxHnrwZFzi1nWymWLhtmGjjQDT0A1YJV1NxV0R4l4U3QBk%2BqrJAGXHYOTzDJTuRxImiP448DruMBZAuOxb10eSeIYzuuVaqbzVKXopkSXyG9EJ3jJwIiuf1oh%2Bmjj1FyYiuD6JIhyBf0WfTtMEKVW%2FEWuI9WbNi5NYMebBqqFxSkQFySgpis0A7E%2F7ZHpEHjXUebGwcPf8U8ee04m6rWWT7z2j7okRotVXG%2BUa4N2gw3TIsCj7%2FRsAvqKKkAfbpbMYzU78SZ6dzFxUpL0nz3Pf9XK%2FLn95Q6k4bILM5jEEvE4NF1xhVbWPlyvXUKe645%2FvVJdRk%2FTFzIgSnJREQBtpR1ewOh4XzJ55%2FAInUBA%2Fak5E%2BhbWlmBojyfeJVGr%2BLMiszW9D7L21oiJ12RdnZKlnAhpiRkc3fYxUvLAIy2PXY97nge2RppeleF9LbRjP5Mu%2BhMPNwck2I%2B59P3PFX62F8cbXthRUW%2BYU0PYKPAHahJMpSC6L0LXEKehey29plpm7fSmVlTeAYDsIKv37vWQRh0tFFCUakHuw1RWQUJ2pZ6xrr6eRIcollg1mBTIlL30UxzvxrCtebQBjSSajPinC40G6PvsnJEnlPCP1LkFAzSAwaQrR2FWXudVMNqhyNIGOqUBfSslJ6%2BUJ1z3mgZiAPFlSTO0BBtWid5qd5C0uV5Zn8hGQ%2FXXhsNIX0bO5gSd4RH3%2FGtBu0hWrtdkNus75%2FXyEtKs8kkYcoRDQ%2FikhSU7AR6yHwkukmdnGCbgFESjSK8%2FDC%2F0zlAUYgxHJCws8pU2LJbQYCEbCcs9iYcorfNwdR4ONq8ZUAUuUDl012cflZHZvpl0XB5zcG2zI%2B9XLCnFyOrDLxpr&X-Amz-Signature=b71fe0d9676b658ecb231ab37f1eff6eb675886053dceecb8d60521198d47795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

