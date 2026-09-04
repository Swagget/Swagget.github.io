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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3FWWDP%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T013711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDQfhx%2FISGnBQAzYJqeO1ZIiCfFdd6Xn3BWVpIE0uOlvAIgOJBItTxrcHXpUY8liNZMHTRkMy1BNPDp4skJFCqcC%2FkqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpdyJImtpu1UK1XDyrcA8vjWxFIMYzAGi%2Bn9kt3v5dpF6K%2B6VeJgjjjC6WZvgLuvGoMFLKA2uZvu7xcEw%2B5WAFh0C3e5LoQsav92d%2BLE%2FiaCYPnwIDflSSlgg4koCzmKaPiQxZsqagTT0dHgorTXLNH%2BIx1hcuChD7awG4xadBz9LEqR7MBuDx7a2Rt8JwjGUCaFfuLsqRNFBu9QlNGZBQl8n55wun891ALydKfb5OFsNCwYJVU4PZMm%2BR4qOkwq3A4AnwUHwhfbGfu33U2aiciX3PvUObxva4Sl2wxh3eBQuCV40TVKaFTMcEaS0YZ75wY8IcbHWGQLnOS3mTexLimaSfJUX4V3ljlTCtEWYcol1HIVaCkYZSlD7oFKdXPwhK7vCDEHFbo4RNYinVUuhfqQl4PepOSQJhNbXKNNQztCiqYf%2B0ffpxZNTdnh4WZIyoUhgSv7vbgCJVHZI9OBSUywBTbY6%2FAxmMGGZ%2FjHJOxyrai5cRSHF4BSjLoEgom4shZvQrwncRuPM%2Bqyt8jDIGkCuID0E4M5689Olwy7seAIq7hJCLjnJweYfQix2Hcy%2Bf%2B3nSDS%2F97YqjZW1pBGwCGtYF%2Blro9PtoRHnUB8Tw0pQhRQtSJK%2B1DyGp%2BL3%2FUnPiWQgN25jGg4KjxMNqo6NQGOqUB%2F0JBrqCLoWri3DEK1aO033SB7fxEaGduevMyyRrFaOYpJ6hZ5hvodUsHsj9veBafeoJf3NXVCHlc7sTAuy4z056%2FMIN9AFOiB0cKYaiTpbsRhjRpuI7lKwlhDzjYQVKBUWKbDq3Re1kFh7JNJfxLkPu9bamg1APQAwLRgNGSpwbcrcBtN%2F9kNongG3iI6IdOkSwiNLc5uR002cgaDrZUA2XpAXYS&X-Amz-Signature=290e4f2906b90fd27068e12193d846f1648001ff11ed5e8dc3f6d01a108d5283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

