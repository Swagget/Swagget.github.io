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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYOWZARK%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBk%2B2h6BCy521%2FgzZagClRKmEIxattRV2QtZAWiXwbc7AiEAwtdaTLN%2Bu5HuYu6fNDcC4pCYFeGTdaGearw4Ha%2Bxcp0qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDaihaUbRu015yQ76ircA2TQoRiaMlCVn0AEj93tGetveNGHe94cOsqYQkqeBVXcvvpP9KGGGpheAz%2BQsIfGbFipcNSwg7PL%2BNGUpea%2Fyf9C9Pmt6UwLS55NjMob1GXzfnNvP6NYEAvZQpgpRhiFSdsvJgEkqxTeEJmdvGej92fjnC1Dnq9le9580YeRczKJAR1k9b4POVRzNdMEy6gN9gEDA9Wf%2Bahh3nae1uJTRa8lJdund%2FzYjDtIiAtpRqY8UGEDXN9YUQEky4Jn%2Fyup4okS3HWf13eLI%2FBQkP3UM1SpHi6%2B8YNsHGdF07Lh4MIp92%2B9nuEjQVaHkjo%2BalUGfKU7UXfq6yDI0ZZd%2BzYaU9fVHOXjLheJuJH2lEzduE70t3YbcRfW1vIqu3wAcEbiO28glWe2Occ82J1OlBYOEg0TkAtQ5sXAkWmeVp%2BVXsTcz4kyMO4Tv%2FudAHhVDvFUaZDLCiGMLT6BhdwPd6JuscvsomglTagUaQfmW%2BJThF9rKdXQdhZILzqOUX2TjQJHyCLVCYYKQIAPcYSeuNKQTIYsd0m06lq3E3zS4T%2FDb3hvWZife7ojz5sJc3FHH53NyFi%2B30oSHeBSY2J%2BBllYPx5puJNL3NktM%2BerfZFhk4CKNhVmArYhJHHsiNDGMLPr4NEGOqUBB%2BoDfR4izZtAxXMNd4LZW5%2BL61wsc6YNNXq6IcEO4ruawjpN05OKoG9CoX5zFNgyrnK04HxY1o8tsVlAQjfRLpkgJ%2BRn0CwcAef2Zz5uQBmH%2BTvba1OiyxkTr9W2vcDz6APQ2L1yPRDU7XaPhMtow6dDl%2F66GRDYKNgr9WDZZEioeTAfCzwWuTFxKrQnDAy5qw2zeADOO3Aaw%2FnCTbfF0dWNakGX&X-Amz-Signature=54012dd476785fc83a83ef56a59754169a13fd7b919a1d91234a778a4355129b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

