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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPVX4EDC%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T132321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDUPUw8WVY6k5T0tqQ2WUtt12nAZMSFdDFEx5wt%2Fh4dAAIgSzfqfJYHDsoPWezZsXuwTFlVBa12GXKQqtvJ1GwIUFEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYz%2B8ZFVpB0tT524CrcA7N3tVX9xrIdSseSZI3U2Npgbz2SLB%2FZGEWRPB51gjaP1OBxDTJCZKR1ysxqzIAacXifCXr4leK6ZucnuIWh3lyfAADlG3zIQUHcispV2CInOy6bHlnHhlISXVufOSGBq0Ppo2aGR5Yc67gnkk8DuqSlxfCm5cr%2FjCWS2VaJhVKClqWtJnN2ODTTUAOz4IZamFsfxzlcfxDc%2F8RY7o%2Fcu9grz0h4Ts64%2F4WoDtcXjgTbze7dJxeLNz7FXO5L1XL6mEkZ6PI78Dhkxb2J8dHj6oVppo%2F9EWlJv3%2B8QekyqH%2FAqHguG2WwzZ5jw%2BbqftayIogUDEcWskbPI36%2F7UQIkzJqgWrbBqe%2BQhBP%2F4wAu6JViTa7Ff3MC3p94LQ%2F1ow0ubHUNrn8kEZx7KHxP5lLkAR%2FHoB0TTMnnaJmeq8PBR6c8pjIoscmQDHHUtL3MymOX82WyHxrMJif7yfAAfWm%2BUIBr430rOAG8YvzUMmqUtPrtiJZUKzasmRd4R%2BH3hLemh9TglcbT9Fpy9%2FGr5yH4TbvMFpL7oshywtOk77cpic4v%2BxL5NrSBiMgIWMy53%2FphmXA44jf7uei494w62D5UZwakioyk035pYC7n86Fsqnpk3xNMJG3AAVPIEFpMPrZqtQGOqUB%2FtLjA76z%2B90Tuyiu15D8d0q3U71Eb5DEijT45pV9FKqGROjJ91EALNobXCwzpSalzTAluR%2BKvV2tDTWRtGzFhAKzuYH6h0KK7S4mXn19WNZBV8cEpLKlK4B%2Bc6rd%2FvSD8q9PXJR21rHuHvPoteZzq%2FNFLowoY57nbCkW%2Bts%2BSAqx8egRlWD3Eb9SXDjXqpwlNmxsbN5s5VdydPa7sFX2dRbZAwt9&X-Amz-Signature=6e7176694cfba278db957e5afdf8581b7a83183565e515aba9fbfd525c4e3131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

