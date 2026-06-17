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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6Y36VGO%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T195513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGryZYvAp5jw7DvgIHcv7z0SZ33zguy2EWSjIfTMsp%2FtAiEAwl5zKlWroR90nUajv21i1oD98aU2vjGWKk6leWXt32EqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO33tUj8OFaL8YvHOSrcA9KsoFYq23pgy4hPMKBSBMzhobk6h8WItLiRmnJXiiv3zKRTy44gw2Zp9c5M0BybVzbmB4GUmsYXZDyRWVGPjVGROiq58acDjkm%2F%2Bzm5xmsIaX2m7AVrcO4JY%2BW3Lw5nY9w6HjJ3F0489V7nGmqIoX%2F7EWc1FENToCSQzym2lsLFiwVt7KJPzfHrlPu4KIeKefI91vb%2BV7%2Fyc3tdNPMQtzlJRBX%2BzXdpiRbDUnE1gJudeP06i6ykUZHq14SrwJSh2efLl55z%2Fz%2BcH5iYXgPJeJo%2FIWXctcUyN1lI6noSphcSrwj57TB3qzVrfBwQ7GghdC1f9PNXY%2BPCpTelQ6%2B5%2BnZXin%2B%2FAu6p1qgC3Q%2BEcoC2Rs9A0CmbKshOPVRVUNE5N5Y5xs%2FnyFWKjE4Wmy3hV7Z61%2F0raoLyATIEC5quuv6tNPw9P0490DQzikSVng1oOI%2FJ7KUo%2FQRyd7Dm0UTVPwakTldNebpQtZQ%2BFLFqsSoSI%2FMBfKVzaLGb7NQ%2Fuxml%2FbJwrCBAHbUhO7n4kysgpuCbdTUnhk3L7Mn2A9oHKgNsqOYeaiDA%2Bx7FCiSyUvExnPPrckRVyUPzJTtqDDyuXiLLkHfTAiWx%2Fxh7ekflBEXgWB9q4VuoA%2BpYUh16MMbpy9EGOqUBJhcVcVZp8NMtw8jwCnbM3aL92gOs4XnrQusMOaIccEz7ma60Phl7QEbHWICgT601jLgqbLRjohqE9PHd%2BPsDqDGrKz7kXVKA8N1xOeG%2BlgXRL9tzY6PWGrz%2BvDwWwxBNXqE5Zl3hYDDLj5tjx0YQNXfXOTqEctI9vuA87ODY6Y0Wfgi3TRHTCC8GcCjbOVcPfnpHEaMZdTmWuDwfiPiFUdW5wWq0&X-Amz-Signature=bc45016862c1653d4c87c2adfbfa0dd8b01b07087835236a667338185e0f2a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

