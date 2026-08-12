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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZOHZDW4%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T052103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoeYR4genFjwQaRTu5L7BVbKxcotpoosHXYeTfo04hYQIhAMRACQc5W7lVYnTye2QdHKkdm1%2FX0NT78nsKPQISRog3KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxVjT73Gm6DtMw8MQEq3APqruRY9IYMm7pNXHFYiiER2QxupXsc%2FrhyTNOyiyLWkr5dGg%2BaBO6eDjpV1L0BnZYSpwCidoOBzmNl38CBFhlLsxyaLObaxCAbdUxeojq3JlUgyHtfKsa7CEA2ZvR%2F2VRgjRTSEfJXJMSb%2B6ArHyMQQ8pCHLO1shsxZiiu5ISbIhWbv5Wpgf0UuA7lWhig0h8b0N%2FRPX%2FbehFHgveoY6hTsesi2UlxrVk3XxmeJCjyp5zMdGJVb%2FPmkV85OO2qFwUaWmZrW%2BoDKtIH9o2fGGJgZgW7SCYc1%2BoYSqrB8Csji9reBvuy3a%2F0zqKE34L52t0ppQZCIRvT6TvqU%2BWYYRXseowOjY1n2kjlgjQ8DD1OKZFN40YWgmwcuGb0ZWKYWJf8YqHTz4Bpt8C044%2BUkL5CDcg4X0Gvts8dmxW433js9TUZmBdLT5MGs70XKqSPVxv1fuMTWjgGIId3xpx%2Bq3V7IW34AtEKCtPPOBSGelWlz8Iz%2BE5%2FT1gJyxaLS8Uh8ndFF1xrNEwqeBCVAFLXgSEWZjcc281s2tOoGKXuji%2FlThCeSpQTS2VhUf10Co7rzeR%2FhRlChehWPjbUYJEPI%2B5LEV0%2BvVWKjB3AtBhSSf%2BhHnKewXz2GCSTXzhTnjDY3u%2FTBjqkAd0Qe5b%2FbIHnF4%2BH1RbPTciAPv9uE3Ot440aIh8IS%2BtyZvoE3gpjL7HmhawwhJcwKhWgVVIWUQ23gZY%2B170gAuHaR1f7bVmy3FJAe4vG%2F69gHKxzcWN3FEw%2FhPjoVNRGfG8bwPsG98nq4pexwEFdswyzIldwb76%2F6p9AJaNbWk6s9F4OO%2BKHPpgu8%2BDBhuL442N40PbDYrAMICS48nioSQqOAiGx&X-Amz-Signature=5c4adf9d194afebb93457a6ae0b4a70fa2f89514e2db250caec19a52e8c24d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

