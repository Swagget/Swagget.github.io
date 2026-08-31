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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRIL54FD%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T220602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAti%2FZrt53JPEMEYvewDaaYtqaMftHb5PnvWCvxCFAWBAiEAgbMMYS8g4vvkzjb8CRDKmaHYKI7WiG9ttb6%2BnlgCuNEqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRfzuUGvhcdFRaUfSrcAxLEgX1CzZvYl1Z72%2BNJEEoyy23P3xY46yCw3TCPQ7OQJ4RWI0Dcb%2B%2FQoCDZMiU8igDt2UblpxWubWcF9KRpFp7sYs5DrwMaLz2wuNbz9sAo9nalkt%2BFDsMKUKapxYqvpW3SFz9ov2nA8SvrIEhxoVlrwgXLNCSfX0jp%2B6XitfJ1YpCMjBwAF7WqAQ%2BHqSJWHEqbd5W%2B%2FXBQlGmX5FI4HW6ZOEwo8oUxoxVr3h8d%2Fso4Uh%2BDRrjJPY%2FIoiD8aT72vJ7z1IxIfbl%2FS2lp%2FxSxYj5cShNmulFEggGmOuNC5WCWlHiU%2FtRwLSW%2Bse5HKtIB3LGjv90Iwxg9wHBfCcHvKw%2Bncc1IyP4Hoy6Wp1T6SuJpKut0ldgbZZBIVo5UJXZgqg7c6YAN4yEBOftZSPrtC%2BwlCMxG%2BVVBxSBxhtZc%2FhAabot4scYBUnfKfc6%2FCk2Y4qzjBjs5kMxKP1Je8CsE29Y0pealpGtWva5HIGXHrczuRz4zwGCExAZawth7DpP%2BB8z0AYH%2BHwa2M0A%2BxL2U%2FE%2Bi4XPXn6cM6WLhf9gR8xKGx5ncrrrZtqEKpHnxp28PJywjQgiQwryqIc3mhQJ1oQbWnUzKT94soNXvf3diIrk3yos2SqBnPeewu9wpMMXy19QGOqUBtxmsv6oK2fMB7cO7SZPRVxvpWLCCQ4g4TcRU0VDCkP6GmP4VZPuqwlDbVqKLrQhY8bxoI%2FKC3tCZCLj8bZxbVJPEfE6OmeW%2BUzZKAoCPByFdbfp5M3DDXWp8Dt4eWA2rfmY4LOF9%2FtBXRBSlrd9b15NwxR5ed0uRxFqbDKOeUcfHHj%2FMK9FYFCkXqfOFTWvUG%2BLMoBQgyHq6WE6oVeRPkhp4zQKC&X-Amz-Signature=f39a4f9a31729b008cb20479540429ef6f0245f796c117891053c1436a23fee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

