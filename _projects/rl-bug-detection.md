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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUMTDR7Q%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T115939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCCY%2B1ImssheofBR8%2BiT4KyCHvIl0iJuSfH1xVKg4BMIQIhAIvE7tAALiEa65Oxt7WgeZ%2Frns6%2F%2FRiqCMycMV8ehVnZKv8DCCIQABoMNjM3NDIzMTgzODA1IgzvLOcK6mMxDpl1yosq3APU2HRJHfRJvjV8dRIrGUgVNcIuSBbIgtbBHFO82pxZFYIzmhl9BWHAt2X53FTk6ZW2xLVJrXEg5TMXeSClu2o%2FDSTYJ9aMic94WtPygJtIakIcnXctvaDByRFOBHi6Q45v9zWuoDx%2FmP8k6epL%2BmemMi4MljiWTY%2FfVPGqd0LJvsZIkBG6SBfquRJCKNLOM%2B3xP8EpFryaIybUBBaMgOnTq5d1EXG%2BXSlg%2FLdm4YCAQBRV4WpI4lDygm3aKAduDqf7WAkyK0N1MCX4Ku%2BtzftnW6KO8d0Rv7m5md0IvysQ920ow%2FrigAY3c9jjNPsOE8zRd%2BdboJGi68vF3eW2P3EOTZeu9IZIpzOBO1NLMJNPCWBKxwlO9uyMGHt8DCARt0f4tHsubzVERlHjYrZQbEb%2Bo9GETcrp0O3nKxhb149Qbp0Ou4NV0yfDuHbIdwy%2FCkd6F5qJhhKAPrkUkc3aZkALs4t2RgqasWP1JbFVLwchCCTaFOY%2FzbNYdqTrmJGBVor101pfCo4ZOyf83S1ItAfBBK3B4mfjwifE6F7f0GMwEFYF1dpJI%2FV01Kll0OjvPd5KRceLpljPBPMASYtMBdYOKk09h2%2Fv0yjtc5GNgJpsWQJORejxoZ8cgpmunTCHn6PSBjqkAT%2FjBvejMtzwL1Tlo9JSNTFnjJqExQoITeU8tYhYuc%2BIq51umugSSk5Ia1KyRZaeDmjQB4qCnbfJC9LH8KB78m5%2BOPlOIBQVvmz7q5J0d81nnWpYxaQoMaOaDdpxbu2M%2BLtdp6KX7dXFQ%2FZFFgSPTr1P69AsogdRSVQZPzLNSIKUQ3NBxDwnM%2Fy%2FJvLNsYISWQ93OyeX5UL%2FOWiVWo5gLHgAFylK&X-Amz-Signature=f4851de83678f0a24a9bdefd74c6cc37ecd53fe12908f984c6bd413668b4dcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

