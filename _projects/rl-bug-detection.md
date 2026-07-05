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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMIYWC2O%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T185603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC9ZjtLARZH14%2FNT8r9UJJoWO6Mv6sIZUvOcazKnVn2RQIgKZpkGK3YaQaa0qZzpI4IjobLH5aMXnO40EB4e3k%2BGcYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPWH0M9q%2F%2FdTTAoqsircA5yEsd%2FjnfLDWMQnvKBZTKVhS%2FFLVVbBmF6A7K9bkLciePUGWfkvpWFfnbHx5Kf1BfaUKzRA9mLm9VsqEiGDz9vC4Exl4Nwh%2FlJP94%2FNmDVfhKu7Tk%2FbgpMqhVR2duQMypFHbSZbGA%2B2zpEflrhxyVDqgo9VoGHGDAXb4o1q%2FLOsQ1Rn5p1W1Y60Li2g0mLWFMwQ%2B3LyR1laNvEBiky9OivddHToADCnZF9x8981PgVFBFhOr1vQ57FiqC8s1sgmi6KPCxj7Nwv86kkdtu%2B8xMIlsN4q5Gz0R4iDDIQBL8e9Cpuu%2BDBtV942o2fB%2F9eCiyKFFiyZu3uRrP6uHNVNs%2BMVPgcH3ue%2FsiqxQvFcexPw94F2t6zbqqMjn5IXkoCVXm9v5o9soGtLZG7SS%2BdeUCeHxcyPfMJ6JUYz7FE1hlTa0MuUH2dj8iCDysd362DxtZ0R1K%2Fvq4FzVynd3%2B4tW5bo3rKWfm5G6e53Y%2BbtbyLDkXlNox%2FRKKrftt1Wn9RfZQVRq6ZrIBkxUgOj46qsFFwDqnPiFIvW2tlPrUaox1Pge7OTY5jvrqeZrfr%2BQkFo2YnJ3BR%2BLTONECU3Wjt73z%2BinPGd%2FAdoRHIg6V9c6hDkcfo%2BAQSb3aAmSZgEMNqgqtIGOqUBVPReE7o%2Bk7tB1gWgfOMyoSzh9u1PG8vKPdvnbRKOlSmMIjvL75UKF6TUKnsMdAOv4IcsAjag3P5O0YgXVDb9ejSiFGA2cV0Q30eFvg%2BxMrU09dPYAuaYblESiciCJoWXm1%2B0pdq3grcayq1Apl2e9ADH3QZGmCs909ZiEADzJhKqBJa0iTPpzHkqowlD9eDLLJaDADf%2BJNUwtxa8N95F2sumShdt&X-Amz-Signature=5686edfce60d5684c13eb01f5f33a6612e48196457b7da82610da22f3e5f3672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

