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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP5LAPCS%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T191205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHslj%2B00Jbj3nDCGjGKAJQNx%2B8I3K5c1pfP3E9QBN2DbAiEAmzeIM6VMiopKfaw6imUxp%2ByEKusmCcOm1Cqfgi8eMK0qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyrNKHOeviAHDhGfircA9BL80qVd4Q%2BXBB6iEQGgCpdSSA4rSm1sRSlwE5%2Bz3D%2FYWoKhg%2FtiVBdxbS0b%2BPJ5k6IlRRTd4FpvASL9%2FkFQ7U2V%2Bxccq%2F4TMOgKGyFWbtPCc81aKdMGnM6Cfe6JB%2Fly%2FnPNlJvkuimolopVMwuWvxRPV2opnqCvLdrH9Sr7Ie4mz3IZ0liYBrYRZuPmVHMpGJMZOHT6wE8HbKIBdR5LcMfbF0aKwvxT6d%2FdCfJxqaaWQUY3d7%2Fb%2BuT%2Fx4Lhwzq1qDCTh9gRYH7cah%2BKbKIlYPxlAo63OaMSA3D2FHhNiIfEyd3s8%2FAzl7sGTeuzOKPMraA7nZPT2hIPLx%2Bxso7h96Q%2FghWM4WXN7%2BtERB2ASAQczjHSdKQxz6hlVLUJXHCP2VxBUWRmLHwW3v3ajtzv42QrIRQMKVfIV1IGT2vNXviff0fqhCCHjcI2iwS61fbn9IDCuzftcKCZQtN%2FFxcvJ3pWw7Q8o363N%2BF2WE1k5YTk2oNFgdqlsL0m0dXwY7MFj9aUxPxWBpe%2B%2FmWcxkvj7LzlMytr1SZgotNTM%2Fl73GOwDsqYuWpFUAm9RT1aRLrxGwxZuwXvhtCD9%2Fq%2Bwmnr0ZDh3NrL0WowwodO71mIMM5gDvK8itNdeOjATBTMP3wxNIGOqUBnBz8QA9QijwGkO9j5VEiud0Y8nzFTbK%2FwE4i2LY4vN0xz1S35%2FyAC4oj5dtCzlWtWKSUaX0eLPg6ThP3cKwf4pYQg7%2BT6Lk8omWeg4a2K3v26X5NJwVrdEeunnDx4Zk4GtsVC3MGrhfF8Xxqeo8oENE8WL1IA0vRrzeAv1kKP5pPYdiIg5iIr1YhiSrf9Clxw0zfhWOnZtVxDLZNPg1HIiZSpciq&X-Amz-Signature=34e55eb061ea563499ed9ae7a601f3198a71b910a089514691ab6fafe1b2e078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

