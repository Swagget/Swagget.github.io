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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEDCE5OX%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T211545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpV4T0LU4NKvlSxOhA6XEKf6UEa1TSfM0Q1BrHT0fsYAiEAnxEgnAC8djfVl1RjMeYCuDgr%2BXYY%2F4PTDdun%2BAHdvSkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxwc8LmvP3ltW0apircA7sUH%2FUARtd6aH8MgrBsUFzQZP%2BBV4aqOEg404weq7ujaWzbOdDSkF%2FoeQyXVUand0cpUEcDomabKAMmvYut5zez6pOh0AEf%2FzSotpYl0w8mRN0WVc7eAH6H6UA1ojNjBsjexXQsS1aOlXziT6f6TsS9rgoTfYbMpfKVHKo%2FpRi5Z7UKrUa%2BPaaMzIqBJHizWJ540%2B2R3y82hinp8sxB2tlxyN4vru033B%2FnDJf92muI6qffEVLp%2F%2BFLBT3pL%2FBoHv1PMOyLY3xzmfPzVnyvuU6IWnGQ7CMYGw6dMG4hRO9FFIBASSAR6hMb24FjrSdNKwml7oEuN%2BckQY4uMTC928ahQNKLevCLFt9M4CRYbjzg5kXppdRmIttclvXp8a81irSCvZYMVw%2B%2BwBmaD%2FFzu4JR3KbKdnajgh8vEyelqTiOv62ib8ILgopZjW7pkeG%2Fgnol2il6SJtR0o3Jx4EkPUmX1Op%2F6hDgcovtEuLLkpoqNZaOrL8D0MStZGt6djF7D6GkoxeNXzcMfYwuzdvndpcum7ivDu7q6JaYxhnAfEKkId%2B2IJA4%2BA41zY38Z0gs3EW6%2FP7AU%2FC3gUQRItatmwNBZ0HHHaHUrD7%2BG9p1G%2BRct1ExaHt0MXXA9EJAMK76i9UGOqUBGbFl6wVactJ6fRWdFiUgRsIX9%2FaTQlsvIIUfOBwuwaag84fg0ewNJBg%2F6eGIxMT%2FfSyfes5B%2BYB79DUQw3NOf8%2FD757h%2BO8dC0UGv3%2B6kLgeALjfEzb8s1AdEyUOjeDwdKdnl4JOPDbypf%2BF9XolVjIQ973LvWmkbGPhmj%2FrJ%2FUtbtjnLFwt9JeBy2Tg7dMKHjMWxSCKKCBAMaV2Zw77O95d0bkJ&X-Amz-Signature=71a3650c41ae1693d78b069900fe2d41e039f6dcf01df541b5e5ba29b5b28a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

