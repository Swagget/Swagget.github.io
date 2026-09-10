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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPCO2V64%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T064346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmtpC%2F4phzvrXrIRuasTCM5Bf7EzvgWhNHbxwICjsuDAiBMlAEElRL7au%2Bt3BX3MTubLRaanprQ3kvdI9O60qMlVir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM1YlbrEBEeOmrj3DcKtwDO4eaUNmlaEFZnohiAlJ3N%2BAZcQO%2FWT2ryT6gVxhIG5hJSWGxuD7t%2FU5FaAYextpgiCNDx%2BL%2FuKPiOS6xuVch0WlJUmLJQzxZMiFXAr9bV5xHtgUaU7mxrr%2Fs1fZQA6XJ5jJd5qmB9UUzqi3c3VqeP3wP5We5%2B11HkipXi5190OIc8crqWigD2qaMO3zwMI1YpvJ%2Fgtby%2BFIcM6k63uxoc5RKhKps7sxvzobL7GHmwX9g37733hXma%2FXrcp1UCtyoAnjcuxq0ejSXSlNeXXgHGlFnevbEJa2nOwOJMH9K6EImQ0GbsVjEB33BcIPsIeMAdsYtsm0POA64Dd%2B3j%2Fub6ExlN4kkKhtTn8iieXacMHfzXsa%2F6xv%2BEserH51Yz%2Fs0%2F%2BdMCqRakZ3kxPYbpMbBH9hJBm7vt3GEvR7IEmEmv6RKc1egwHJ7WjEAFsTJToJrcOl45SbYZZJycor3S5WJwYezfZfpLhMVtZZR0j4rCWfD4XLIBZ9HuErSzNfkQU%2BJeQo18Q5qTnE2nYqFTBhefylkjKWxUVDRoJJfbTIaOjotaSFGlpUFkZrlLhtKpehS6td3Gkc1lPexiz3h4Rn74qCbUfrEFYOQvAujpiLUjMwKlktN5VjUtxmYm2owjfKI1QY6pgG%2FfAtgkJGV8iR%2B4IZ1MoWuDRTWSxrVrZ7vF5wL3Ym0r04T1v1bfKSlzttzv%2BrM9Vk9htEGNYeMeJ%2BMJI3YsuVbmJ%2Fi7FGIz8IXwsSmR1bld%2F1gSxu9NEb%2Fne92NXuH5YKvMSlzA1A5doEpkU0dyQ1TfFyo%2BiFI7%2FjppyUZmJqjwAN47hJZ4wU1SNoWEjA0cAfwD5JCAzW4vYAPJrdQqUZYFs3q3EYo&X-Amz-Signature=016beaf61b8fdce6856f86bc7f68ca258448a7acb6ed2a99f0f1f4c09a1dba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

