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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIFB3EH%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T235712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5me6lU0MDUoFDYvGjCkrALRKL5dehVj5Wtv1wr7chJAiEA7ZKAATDUAuNXrpIqk%2FMq9fbFJDLOopdbTDleA1hAg1Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDgLZMlz0IZjTHMTWCrcAwmnRiEUe8owiX6P94M6iP8PhF%2Bwu%2FdIvUYJmEBsP0CABv2cLiqnp6J%2BfsbLkKE%2F%2FUnu7x%2Bf3UeJ5SmM4HK6Hzot6XDbkD%2Bw33FbgcN7iy%2FbaD%2BPWtlkoZ8%2FYcu9UHLOBqCQItnOA6SfSGBpsuuNraZxrjf%2B%2BTOmk0WehXu2fpHdU0Oe4x1yP5MC1iWmOFxHz92revsYaDLqJbQtvU7ztwBwQK6GdA6tn6gCF15Fd194di4plZwmyETAU08FAm2K7Xv2vsq3ADgLecKtAY2%2Ffnq4gFzErGknYs8LptQFY%2Bvvgu4p3HWtL2%2BHKouRn9AeMYMmBkHRZgq1Khr701nSXWdy3C9IyaAJ%2BTfEAmDKAjDT1IZev1axv7fIRReavezcti%2F7OaJ1Yf4fCUJqEF9NB8H1Sec9Lr9b9MaOGqeGLXekFW1WQDQayGNYKdh9Vor1lKhZZZyGhrrLMtkP64eISouctg711MKb2TAtR4i9lo38mRM6NVpvxhiy2bGj7tDqiwXCeGORm4WHVXI23E20tjrcQVec%2FqI8gHCRyM8TYamRRQV6Hlz0IQZKuVwqifCKtyhvCJkWQIC7I9FR%2FGaJ22YK%2BnuhuIxUHDlIPKhkgbso46Jj%2FsEJ0BBk9peiMMWyjdEGOqUB2ZDMYUpuQasedIZNCOCeeAdbuk9ALjuZTI9baG9aCUP%2B%2FgvH5zmzoDLCHuyctuh2yYtxRJTYPtv5qluG2RiwJnp5uYcXPpaQr8yh0N6MRUna5QzX4oZYjjs9pdkcopCSy%2FW%2Fsd0G3gx4JVFGwXXstVv9HnesNyThzJq5AuzfeuwMhVHMtzbaXl%2B0ZSn8VuNTYgJ4HmaKkIp%2BPVJr4s%2BEo4dvqwPf&X-Amz-Signature=f5c30e648e100f12ac5068567a31273b54028036733c46faceee17e10da922ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

