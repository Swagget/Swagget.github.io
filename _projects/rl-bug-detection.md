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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPWGKRHI%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T150340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGP55N79TNqlCrtRm2UHo9nCKbwZjZnctabrrDYwMmSbAiADx6YeF3LBFByG86FcHaAgFIyaKq4sjGT6SDTZIsBkbyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj7xt8n3xLaNy4iLyKtwDkYekmaUfTc%2FPmuVZgANuyxJvn1%2F%2BuMpk2YhmWu1fQ4Kia0y2rId7vtNvlBqfGfz1q2K5lcmGqgPxfXQn0hxqXXw7wE6HApmYaEDEf7brms6sEMl27I7B9y5K7DZ2KS7blQJfg3CwhdxJgHtlK94DQMJKWI6bE0NTr1ubURoDWOvi%2FhdHe5qr5RrYsxOVpOLRcqb7QMcFPBHyhkTzQyT%2B%2BPKVsyO%2Bf1deO0l%2Fl79PABDqVGxmS4FB0FAga80q3HJUTmLTLms5qEyq%2BiXHBbvHDCwhzug2iaNJjg134j%2Fp%2FmHj%2FPpuyh7hBkAB1zALCLWdEnUiJA1pD27uN%2BevldJKPfG9e8ojLJiBzvpcaoClsY51XGDK3MGB2lUCoO3LH3tkznbDJ%2BZ%2BZc%2BHOpX6GgU286bMHHjLFW%2Fxfrk5fbDXglhVy1igsbC1yxCvKDPgz9jG0St3AZOV2yQJ3zhiWzrQywQSO6bV0zfe1GkfOOdAcugcFNVOcOX5A9tTSXHBp0lYno1ioqF5Va5Jj9Ex86Ex20u13Cgyecy1oxrWiaCEzoJTVjIp1vNJGI0D6yPTcJHlkcvVhzstD%2FVPQ7WpJopgFb%2FBPM6vx8AF2wSN3HfbDsewg7wf%2BxUjP82nOVQwnu6P0QY6pgHcOD1UAmyJ1DcfhPQ93ezZVKcHai9RbG7vTbRSmnKvS%2BQ3Wq3BwKOkEsNC0MqZjtrUw14uvmeK360qOlEEcAgn4vbcuz9jdZR48q9kCE0Y5HIeD8Q5Uo%2BqNuubXDr%2BYs8jQVTfzr2idwEQoRrbMrXzyDnH8LOBbjgVYtPXFhBkUDtzd5jj3SS6zOIVKCLtaOWYn1BQjd7I4vOHxMo6SKVINQpSmlII&X-Amz-Signature=a90a33872d1e5e2d40d7f83592c8d8c9f65b5f1a2cb1289c015a125c6dbcf229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

