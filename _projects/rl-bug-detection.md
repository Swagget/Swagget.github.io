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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NV33SPJ%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T072755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbACEL5UROJooBi6fbqt%2BtJNGwfjZUPjbTdU0nemhbjwIgRadrgA7gJzPLYkzwHbqlpJsDogkrxwl0GZiV%2B%2F2sdYYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDFbNUvmVqE4gZngChircA9IKtv6EBTBnmQenFsPl%2FqZovV7wG9q%2BiiuHyLAoLAor5wv1er4ojdOqjYc1wRUMXs3krT0FfN7bPZ5BnDb7jyj%2Ft0cpBiYO9Qgzoob3xqG2Lg7IHCLe6gfI08y3YGLNTKE8xuDhOIBnBqou0btOrabnG9sUtRRei2JgKLlucM54LuHtS22e2l3DSzCvXe%2FU4jgWAPYeKzHKItNaRq5NW5ZEM5zo97bxGi7A8dqCIOAaU0I6KkXlIbQolYqE909ni6psDYZyZ5aoyK2tYeAgkJGZckFvHiF3j68eXOOJ1xT9L1dI%2B009npUpCdvqlKaR0R%2BlftiIbhjffazIe%2F1Ae%2B92wFVWpL%2BAaGi5zFFtKwEo7dyIChuNvxosHalemYesCveYOd3nKK4LIXGPlGw57R953JwmjXJP7l7rfX7QubuW6cA5Smk4oidCwpbc3CnrbzJWbvjh1jpAoa74BDdH42SqGng%2BnxSTMz0Oz%2Bsohd6qtSO2zcsM5SdHZqgiayUd7cfr9zVgZQ4UXpUJZqKMAXrUpkyTT5EqbXsrzDMCl%2FA1DR9v1%2Bo4rlN5Hx7ZwwKmX1r0cKNj4uWCGZy1viEzXo%2FhWxqmfe7u0509Ze3AZ9h985YgRtiaTMNOgi9CMLqildQGOqUBDIrljbiy%2BYaU8zZSoEyxrKsPxGmpo9a1Y5c7srgJAQZPSrsLreWDVeX1DbrQ4ye9U6vc9H1YyJ2gSXpEEVleTGfXtTbN0c%2FSpX5vWW97NuR9fVEief4dnC5eaJAxdBn0S9tsg5fXSAPY2MYsxn9q%2BtnlJLq%2FiP6kw%2BZZkHW73kBeauQjGZUaMkGjeA5MGOVTFO0b1MZ5MSGFr8%2FP9GHszqZei0%2Ba&X-Amz-Signature=d1e6601f736ce4a068d3942f63653ce338527a144e78e663dce3dde7ac0ed2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

