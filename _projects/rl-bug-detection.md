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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKFUE6K%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T170924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFCQFU%2FdSfI9t%2BmZRG6aooIp3vr%2FuC7dVIcu%2BPfUY9Q4AiEAw2MHbWdTex3mFrXRLPH%2F5sZJqRofJLOMliyxP7%2BaX6cq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLQT2Ct2YgfjC3EYcyrcA%2B6GCh4xE%2FvZHkUE98W57M7Lcnar%2FdTELLirsbpAKv1g8UfDb%2BEKlIDIcBxxRlyCiSqa9qLx5fNJhufCm7ojRDu32YF7IG6PiqYK1ld3%2Fp6VMP4L5lHrPfGBMzVxs4fVCgr9TZRrSVR1508ZbtgExGbf6mhHgTnvo3FVmz1ck0EwBjuK25Zpr%2FkD5sG3%2FoiIRoC8yrTu3MIuMwUi8Iz4T5FJ%2Bn29XsyPEiaKqxjUKA2b9c6GovZMZ0deHsnPMGSbCCm%2B8K%2Bn%2BxvZ6GWTg3WhiUfLgJ80QwHA0hYHWnGqkpKverdrX8QxwBBBbodRT9AfoEyXAioqSXTOcJ2JX%2FjQtQhM1b6Q%2B40aj%2B80vopuj6RS3MkZg9Yf1KCg%2Fkkb627yhGfgWtIzHLeXjm8qh98wTg4Rqq%2FlkJDHp01nJPlRiroTwSzyc4oLdljQT8UD4l3hJ0Z9Ta8UfuFqvk42CmL8x3EFvfHdkmmEBIBlxqk9hh5u6ijwdTDCBW2wblJRrhOJEJNNlBeT4O1ltxu5G%2FUc4vR6jDkYF64g2nY5X30J%2BPXuL4nB4n2Rk661T1Hf3yMVgMNB6ZtmOysCnpN5ax%2FhF34dskYKY8HlH99UP9slClHz%2B%2BAYzrXRo659Q29FMPXPh9QGOqUBwxvRoM6u30%2BIW66CupDFjXDUTg99wIbMUSfZQ1w7iIGq2JmN9ZqTZXtBYyUGFrZRYVmnvaJTNN5mjklrTdZQfFZ%2FG16T4EEkhz12v9BaF5zUzLGfMn7%2FvlEqLA63Hfa5gREjlDLtiAtrO63%2FmbAlHzuyBq3Ue9n2WpeDHrD2GLMLp8Ap6NiCDsb5hUYVAnIu72uii7UrLbBczhgs7Yh0vDh7jRv5&X-Amz-Signature=4fff835b0ea270f28f9ea0dca60d6e7092febc7eb05119fa554bc69c3c8041c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

