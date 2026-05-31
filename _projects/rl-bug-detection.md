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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZSHXXK%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T200615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUg56gPJO2jbL63CZOCJl4JT7gUd8jdKf9kdZSoW%2Br%2BwIhAJRu24UYNRn%2FFIjoctjCzz%2FLOizwpWpdnzcKGQsaiL7HKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylFbklbE739uXqbSEq3APYl92ZxlF4Vd3TVKpeSTiyvjjtfqhRTWaVV3QWaMuKLwnJS%2BLfhjgGb1zaLuw2keBbRJ4e4S1ZB31BeOzqdtbyt230542aL8U2CqZmY83sVGGftvuiLlk2zSIkhnC7M%2FeZ1M%2FPoB1o7zpH4ov3mCk7R7a5hTeX4%2FMvdumDSuZ1opeLJDjSq%2BuHSesJuIV951psX8wQjVhBAVHwOgMOlmgznz6gPeNETgfC0qcPGQSU8iyYBFHcQFhjxIupva2wo23haymL1EvLJ4lBYUXfTJFz5eEZ8hgW4CDOX2DWN%2F1VH3msGQD8OSbILJ%2FJ06RLYVRs57Fvp6loPM5VOvCSAqvaAeADdoj0UjatRoJilc3Zs8EhNu%2BNiZlIkpKJ%2FZYgivTVeJ5mUo9YEK1F1S6pGZlrKM8BC2tv2sXPVdl8RFkDM1jbNzT7xOkexDA1WTvpVBdB%2BlCnUavng8mJ61Vq%2FnXivhD9fC%2BGeoByj2WoDzNyR3y1DsA9ouUb%2FJnPRZw3BgiARf0V2F9THSpSeCk7W3RjYNz8Ueb4Ki%2Bf0apiBUsh66pheBQ1YF49GBoDBOY1WNINzGH04gGq%2BGVlXQSxbsvuTqA8W%2F1Iz24DKDSIvpJVlkhzsFznbfnr3GrpKzCRnfLQBjqkATt8lmYU1kIWT2U4IcTKNe7im8hTpNZU9GuHh1xuCMg89RmNrqgwTDvhzWliutz%2FECThq648gS60kQ%2FxKv0x9cmZSZrF3uDn%2Bzf%2FxzPu75PQm39eW0ZEDQYOOLMsnfydOY6lqW3AmGjFSJ6UhRZnrpMTK8pi462Kz4nTcD8kYe04uW07Me1gM%2FDodVdi8HRqdwP9O%2BdpOgK4dBXIV2sgghZCYfXo&X-Amz-Signature=f1a17024dcae9ead31c8a7ea248182f408b353b2085dfea5ae26c1163e156d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

