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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRY6K2R%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T132056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQD1yy%2Bg9XxFqdV7ZM21zHS3ipL%2FUnuSHKNZr5D5nPy84wIhAIjISV9MfxaNKdPeK4%2FYL6j%2BVQsXtIGk%2F90vEq9K3dk9Kv8DCBUQABoMNjM3NDIzMTgzODA1IgwBk1O96B8ovze0qYQq3APokHqQMNeeinwWxLT1Jtys01dabUKj20jasH4RKAfBb5hauERQ%2BKgsZpsOLgVPPlopuXjudqLYwlTikcZtqnmzNZcrlX6P5kGWGC4NuJ0RRK5y2DKadm70srdlSARffqYAVrMlYoRzxFcIEzxIC15%2Fh4djcSnSsKQnyz7lVSHnCecYTSa%2BQMGRtwmIt56L8KxOJjXilOMz0FJhnTup2YHr2MFQjgBBCyYI8GnmipfobDKdh3%2BEniY70zePfznqkBUMWDF24sU14bgnDoSQhdVst3dZH8VvervugVqi0pLN6or9wRBMY2kkNwmpWUwUcmyq4skqflIyP52Oc9qLat4d%2B8ZSSPNXnSOKKFS5M6bxhz1ZonEZ%2BbnipxM7ak59SvF1ZaG9Vl%2B%2Bo2AiggQ7VQSNvzFchrER2pxGibwu7at5qSNxdG%2Bbkk427Qac16i%2FoMS8NvtljmiM%2BQpXmFhJZwHzvuz71EP%2BCDlgJIAKx5ZUGz1TSFT7wV9zeKuJarEsvspqZ%2FYagdgK0PMCMLSk%2FZ8Z9fQAYOzcg%2B%2FESpOrmPyp9NyyzVXnvXc5eGehNff8%2BBCNwD3gjgeSlbtlyS6IHAUCeqHJHOAdc4tkgku8QNm8figWP6VkKHyo6LciSzCGm4HUBjqkAWpERouZBY98H3rSk2vtwEuYs%2FHmSMqZSz%2FUYM0lcXgiedUm0hnchefgEseD8xZBB%2FWGzcCbkmszbhwfA1UW5vuVK95oOfJvRmdw3pTmJeWZTtWR%2Ft8yWlhoF2I1%2B384%2By1n8CrdXA%2BFQPzS4kuNNeuW6nIUsw9HZY6VNrCGkFrq4acxTvWBs16uezMmp1VBIzFWlJnwXrm3hRT2qKY3gK00c%2Fkc&X-Amz-Signature=8de3c95393e92013aea9a053ceb736f1f28d8869cd21d1cd0e5d0c509ee9d210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

