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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626LPH5VL%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T073357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCICbQjNxVwyYgzSaPeHr5TbgZGjRK3GudMUV0dCfewZIVAiEAnIpvhz02jqw%2BE%2FhZmo9gUfFQ2pkKZadV3rDnAbbIJKYqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMchIQJ%2FM9PjuzBDCrcA6F189GCjRKWJ22c3hyMw3xJQWt%2BoiFlkuJnJ4U3Bss6CpnGlXHuY6PrlPWFyG%2Baa%2Bs%2BiaBUshqY8M1mJZYgJzIhV4Y%2FKZRkA7YiUEpMUf1BnPSFcHz11lHIgmuwcEZgTRqeRpPpV%2Bcsd30pC1X3%2F1eVt%2FJSH4RLZp%2B6LIXH1ECZFWS4no%2F9jfevF8wtlYRI958Mkw7Xm9CZocWUcmmg0HI1toGH96VMTVN85y9Y1gPmuxfQPuVQ5i411P9KnwNu%2FWx7hbIXkbBLpFmXOFkQUxrqoy7dUCHB7yCvYY1o3jeCGLIn9XDLxPFTfoReb26JHW4BQNE08502LuiG1yJhgL%2FkMiFWNYIm6LmWFLc20y9e43nsP4GTD69rDn6JSKGIITLn6bAwapEJJi4YNk9fQHkNmD7eo66bTctZwxNmsHF5SbymzXg8%2FcHWrNBPq6Q3EGpxAzT0FG5oPU50dJ5rpm0tRRIr5%2F5fQer9nuTzoqfWjR8rQLZBEcJJWHTCYaqKvQkPu7pGBeTMB%2FfHAhJas0Is1nB8S0cX1THVzhVB7oJCPgsNOPNNjqFt3zLPm%2BcKlAEGuY4tyvyVLw0FX%2FXP3sp9TWRRtKuR33VOETSFE2bP1BaNpJoGB3IQIAjwMLGP6tAGOqUB9OypMJQ7psoR5xhRxjQXmCn2HeFKI9agtx9P%2BFMw0n6mmGkprkOIPLwCBfxok6vFRU%2F%2B2MEA%2Fe2RjLz6ahoiOTT1VOKis9IZqOJjfZQuBM%2B3y8w0qc%2FyjygWr%2B0ntay6ldft4l4OfSymeaByWWr%2Ft8go%2B0qnziNjcykDOEW0z40taIqlsFla7gVQ7llk%2BWkrZhxjz7AMtqtboL2oMAI0z4%2FNwC%2FU&X-Amz-Signature=05e4a91a2e6b00de385db39d8527b06e3d501e66abec58e45273734e4617ba3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

