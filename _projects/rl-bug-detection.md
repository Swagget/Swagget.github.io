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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BD4X4E2%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T184148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEbjExr73PMpkz9pCK1ZdylKcxsz4%2FyJQqlfxmHgXCRxAiEAnszRI2sjYhEMnB52Ve8f36MjfNpOpI%2F%2Fmf2eIrBI0dMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDF%2Ft3HlIQSHxxTKBlSrcAzbDVOw32b4zdCz9%2FVZ8u6dyEwVS8UHKTVTm9TweyYZ65V6wV%2B0nTWie5GON2Vaf3oIKZ8M8ds80yA2DSBetx%2Facq33sewc5f8Qsx99AtfB2PC9LGOBDwdErOFI5KqqF8z1Wxb4E14ppi%2BPd96UpNNUkZR32FfHoLl8BNyh2hR6BKV%2BcvXZpjfRz1i0VFQdlA5DjWujXTgdEW4W%2F5EBSR9x2vqduNYXuECCgOxEiYi9vxpntTVfwKV34wdKfSka4IFb6mqjI0AjUkISK9LPeZiwr9UE02Lec5v%2Bt6B1KvqYF0oK0HCZBqPm%2B2iFTspjq4b3zzv70TlvluyW9VB1pzztkspzzFwd3YG72%2F%2BX9WKiB1UAoNuJGsqRArwqz1S7g5fnHNs4XxHGyhnPLz5bh6P4UOFYsv8jgrg1HpA2HApKAIRpOvmWzfLaEcpnD%2BvgoPZWlpeAWnr61XZ0auB%2F7nSXI85%2B68%2FxQNhs8s1topZqAlq7PE%2FHhOY9C8gWNhhbemw64L6SaiBEs5XahWIv2SrZfmAiuaHH2FV04GZMG%2BR3qeojG4Dq%2BgyTb7o1vYFhwZQV5EYMQKKffhfPKLr1ZgUsQ69ir39PYAVOA2c25eX9l6QDK%2FrdJyg4CnD26MJS89tQGOqUB3xfhhOtpiMZW4kutK0V%2B1vM0t%2BmxvCAK9Js2unX5jQf217s0zoneYNayZjAzJzojJRWV5dRnc6K%2BN4maLaYROedCkgwNi%2FVQp310cVeHloAriGU3aeXbAjJaeoAX5k6Qh8o8AUr7v6rkJaY265q6Ohhw94buEAls71vjePJ2ugv4f5JMk%2FMm%2FpKjxUiPuHHXhJOC3P6mtweXIF6hzaFocnTCXour&X-Amz-Signature=59504fe650d41c5ed8cd14cf7692efe65e878b4839c0912cef0ed4b1488f1a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

