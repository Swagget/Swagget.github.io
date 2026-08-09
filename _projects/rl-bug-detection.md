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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDFHBJ3%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T082707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQGO3UYNaIlXCGyA3gwSm%2BzapelTQXN34zurwEGXNf5AiA509Aijyr565MCr8jAr7bXCVoyJmu0YkZOJeuaSmeXgyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBe2xyNgcMRD5LqizKtwDdqTnIZ6fDcbhleQdguqoBdCZ%2BPq4ISEcA0LXPDveBjPQfakq3ZJbKb24nMIf01S0y0A%2F8ZZrB4XGjOZvvIJelhRpgKuWBh5F4AV2KrTyYuKp8E%2FLl0OkMveA6ynP9mAzBldzYcwpspbjoFlzF1yvkQloOh3o9S0%2FgCIfW%2BBiMaLj8l3OdtPHgRKDwvnLktE%2BgSVobCoDQSQyI%2BSqBYpR%2FBqFNTh4Xt3lesXUmASCJn8dCnzJbM3GMsr47EWOWaRWDQ7S5GWDiJ8xmtWacQb9EgGW2sAPKrKevLIrF8Orj2pb%2FyvV822C9Zozt7HbsmBhfRwcKZ2a8GzHfCYZjSK0OW9RCXv%2FE5CKD6%2FetrtpUBTm7bJtXyAo4Ji7InvHXBm7LywVuCeyeOMAe9Gp30llnar2mOLTkS7OaaN7ogvba%2BdEsUmhWFURysNF6viWKeF45MMGVy2sYeNPpdYx5vLLni8BmWMC3XXo%2Fm2K3ZC7F%2BQbFcaxs8pfIAph0vCufFKdcVLpR5B6e%2FzJ25JzGzx4Q43yDtLTzt8dGW0GcEZyLG4MqvT2SmsVVo5BrnJmzOM51YwJAm06W6CPWOmjNBgVeLLRytbi9Bg3I6MOD%2Fr5W4BhgPGBBYtYMGRDR4cwuvLg0wY6pgGXvVYmKnfYwrorx9P8%2FgRCopi21Thjtk9yAV1FGTRo8cZ%2Fr1pRmKoc5X0H44OSo1M%2FMkdatzR1Rjoa8ixJn41Ta6Bilhh1Y15dcw%2Bj4coHtBo%2B9uaWB8bXIqskML86xwZNT%2F%2FEvLmqX2Gz6%2BidnwzVuzhMLexxA3w9jc3beT9DBilZgjoJim2LMf2ABmUZuoUEVCsvfDs1yZK0hj85JQ6BdfpjJ8iV&X-Amz-Signature=6eb02285ac86a805c02369589d049c3c89525f28ec2e2a5aef97adfbfe45ecd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

