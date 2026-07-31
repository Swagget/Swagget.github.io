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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5VO37V%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T155138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB4xL5%2BfR3ZUhbl73b4v6iiOTlyZCeer9UmbBSz5XsxgIgMpLCQnanVVD6PJGYPyC1almNoginp4x8q063Eu6UdjAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG9Z6OT2FmEzaATvDyrcA9DmGDzDLLBhvgTWlc7%2BhESpMU0BTt0olJmFxaGkKNri5wXB%2F7tfPSkTwrRFudix8j%2Fb0QwKqPukQGcrMYdzx5QkXNfF9iXlLXL4EzIKgWS%2F%2FgKtWbv4JOettVhTmdBSYrTNP17tvfQ%2BWstt8jOECVb0W0TvuesJYWRHZUt5INq%2FvCaHaTWudqcCvtGYMpF5JWENCWCL4jKtQscWp8T5fI7aG2LId9%2Fw84dCbE2O7EucNnNRwKTJRrTcE2wMSzlGIAgOtUf%2FJLN3StJmm%2Bjlnddm8mGVcy2fO9hpMVGZAgLDBpc0%2BzSt0K4BqAPL4bhDLrTkfjVhmt7rUpq50m4hvouh5H4w7%2FrsJRvQ6Ww5fRVtm%2B24bqyEssfgasLHD%2Fye52dLUBXtNPlhFkpt90rOpny%2BS4PBHhZB5acXGMK2rWl4KjLQQS7FzoIXeDnmc73628ZGGI73BBIp1x8XMexrXqWLpYfidNxqeth%2BYKZI5FxbgMmK7ugPuI%2B%2BPGYmiXNovYzYES067%2BND3AG%2BlAKb%2Fu5jRqYvXA1RpJjBJmlodLhyUDsZfFNEQSN2FuaQt5HGQOCLa0ANrXsAOixJ4fA0qTiELxRbs6daMVOXZTYcuFexkvL2X8UwmcAOM8UqMPnwstMGOqUB%2Bm40hQbU4OV64%2FFY0%2BgRA9yz4vE3NyVpWAMKJZHxns5V%2F696At3q56HD5ZYlb0dV8IpxHPKjBAMLzhuPjDvjeS72IpqFZMD5V2leCgsArpdcwt9gfOAUA21ymKwAmEWHZ7QYsFbCrT%2F%2F96ZlDTlFHSOvsB8s3iJ6jxY8CEmZUs2lKzQuLCoaQy4YflEUBSrHLfTxtvZxv%2FrzN76KBwnGb5Znyn1X&X-Amz-Signature=5b9eee088250ab2e3e2d0b5a236bea2849e1939ca3ce2ffe2c0d6728eda7ec85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

