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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJU7IGS%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T033816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICSl2tTF6pa1BFqOX6I9385HP8CJTy9Az3pmExi044TBAiB3G4uqPBQYsdlNaigO6WilDqQmux5cObPZTnM8eAF2CCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMx%2BXNg%2FxiyLBlBqUgKtwDxvb%2Fd%2BgeJFYE26rdigHwyzG8ix%2F3Z%2BJKokpsJhEnJ6Q4v4SdBPoBj0FejakmS3c4Z3Ywh2ZKitZFtunyv6a6cLDPpWgSD%2Biy266TullCbHTHg1s47rOGHu18JLfmd6gT6cctY9zYXurcn3OYeGSEj%2FjO%2BdwJFcSV9Z2HGSuFqDEVyN8KM%2FFLBFwEVbUfXV2NSYUOAsblVqxpetbpY1Jb61rJKMu3h4jZl4cVS6RuuJOIflucjAX3wmE9WbTReCGkk%2BoHaMhC9aPHSARFKvR%2FAgXMTTfyq%2FR7L240D7mWDgTTwhszAQzajSoTwfa0TiptMfihZVXfu2xWDVzVO0Ntt%2FOzIH3eyaZdP2FQZvZHXyyksEzRpV8LNLEZDb7%2BnNXeAwmlhmMA1U5yVq%2BdZDspGFRFLDNdZFKjhw4vwGQNGfnFW8cm1tp6bzenQwYHO9liZvy0Vr3I3ATMJFsDf1KyoYMpX5BLueThUZcx5pCW%2FRzMnrO643ZV2Ocnw2m03u1ms7dM8gViXPpBRQW9l3B%2FWRCgV7x019NlBtqwv2OX8WaQrupTr15NRZrT5nptxR%2Blc%2Fz1sJqFOLrVtJl%2BTrkF44x5DByGO3BqTd0Mzl19ravimpVwDqx9EeXnlD0w%2BuCJ1AY6pgFLwKWs2GAJOfwgNPGstz104mUVIQcrg1D0ubljjbY2uaBAVXc%2B18jJYVKJyfUmxotqTe1%2F14%2BsxrjSsgkvAqc%2Bz4o7W8fD7E9fVX9NTQi1aL0cvN%2BiKbdBWyk8y1EOS10%2FjFzypvyv8SxzehrbE%2FMp2HX4RoL%2Fv%2Fmo8lRdiV%2F9cYuPhTvemUVixMHq%2FNmgubj98iBR75JAEn6QZ47LWMKklvXzpwMK&X-Amz-Signature=e68a95b6d49e15aea4d5b965c32f16bd84c55ad3f93d7c4ad2e613fa1900e3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

