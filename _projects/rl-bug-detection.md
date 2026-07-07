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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHIXTWE%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T055610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgeMHAS%2Bq869BSdZ3EdGsR9c9p7uvb%2B57jMFFtwm2uVAiEAjchT5SnK6MMlsemmIiZpR5h%2FnjvZaHeVO8W%2BOZbTigsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPL%2BMwVhu6zW3U0hhircAzRNo5ur6gnkVt73EbaQ63ED86%2F%2Bfk3G1ziEgETPYyeQx4v3EYo%2F9NA%2FpNRb%2BZyqZb0W9r15iLULdf75SdZR7MOKh%2FSf74zCOLkdxInmoacs76%2BookqydWH%2BpnOZcvJRQM6v%2FOcYxXDgen7Hq7FlrAr%2FTg2X7wZGU51oJB4tNAw7jdsxWvQkGr42u0edsP6QHuKREBjkQR8WjPVIuILSXmGRPEB66tVMiQ7CbnsRaQbQzaTkHusTZxuXjDo8W3UsaWqn%2Fq7%2BRulDXnwziVLHVDQ98aY872ZThlB2vqDVZrSVY%2BSlTP0P2iMnYrrf1%2FDOhrwz3OdnF67go0KjRHEz5McKnnIWvtUCCAbJ0knvf%2FQ3rW7lA%2FNTYoVoDsJZQyKWqwrGfKwQ1PL3m1fxhAHtfhAjAWGYsY1S1Xez8CK%2BtID1Zw35KPph%2B%2Bxtd9mQTC63jh8HlAAevXR9a4%2F8VORpBhkaIiCdgv1YdIMSDGUjG%2FWpZsyMRPhvl7UcO8OlcAc2Ko6x1rTM5NqCe%2Bd80eaZlEK5T3EvfqF6lfEgljjyeHGW2n1leh2sgCSANfVBQUx%2FaXK8FFANxi4r30cpc0M%2FuMevuAlRGuxwmIFGI7ZWkXrMUDw5QQzKKglcv3JbMOiUstIGOqUBr%2B7tNC%2BP%2F%2FozwixQ7qJTR%2FTAevaawcXCSiZYTYEr1qngRFt1bU4Ak4X6kucz3%2FlMuXao2gzdm%2B8hA21%2B3y8h39UB1J7d%2Fov0DCZguPPcQLpWbbTFj70%2BpSKVHAKCD5MbKIZU7BdWQkcT74jIz36HHTP7LuHbrV2g%2FwLNpGZnPnWMvI95vWIsEXy6hmpcZAI7aor7n5MGy2lV6H643bYfebtwdq%2Fd&X-Amz-Signature=a8c50ff595dbd524af3f27295819d709a329e2162a55453159dd60933c196ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

