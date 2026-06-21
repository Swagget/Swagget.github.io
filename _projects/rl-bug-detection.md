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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGCWTQIU%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T190948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCmN2pg1rIWpDh%2Btv0bPQl30c9%2B4sLDi1NCqQIvlU50XQIgMfnF%2FxZK8%2B3AralC0Ixm50DZDxo9iIvRo%2FywMatxz2MqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGaK4gCcGy%2Bu8lTgircA1e%2BNVe0sbYqQu1N581bNxjCYhU6Kel5pvq6KC2ky6ns5EWUS0sPFPLtJfOUQcw2pfU7vTetgzRdhYNPKk36pHCxbPghKDfNL9H258lovIq9N2FV78cPS1oqOz78xzlIi6CkTnhC16qpoTMCQfXDBumkRAHyn1bzZwPMt4N78BEhiZCc4YlkBStJXzpBr5SgnABMbFCd9Zm4wES3yGjuo6rnU0tIhZmKDSttV0RoQ5Rndm7BXK%2FSfJJZTS2S7Pb2Ygto1Ksi2lvhTL9yCmGfSsWRA8h3YHiY7xpvZnADlDLNLMugQbPRyd8FBb4qbOEAY5aPS%2FAkBPwanDYR%2B03fQOpHUS9kZEPGIRBfav8G4vfdbdKZG%2BWAIRvLwdBJmkwDe7FvSi1asnCjBRh2SO6A7ObUSDmeQTRtpznZOcUOm3o9SiUujI%2F8yHPGY6QzciNb20IqZ3v3lRv438FPL6oCRWwO2bKwlHBAWHVM3w4BdCHZj24SwzYZksW2IVaLHgZHF7NIv6Omx1v2fKa9ZlxNM8EGGU%2FSzYDTSODhPvzN0%2BRc5CBm8f1dOts5a21lqGroy5GtsNfllodECSse4jWoEswgC5uzPYY2ogHTVgLuSbQZud6VWARoKcmlEiquMJDq4NEGOqUB00K%2B9qLPxVcyFgt6e5KelXybAQvpj5BtI7kTwqmBtBIEIeKAvH9GA4e%2Ba9wQs9lJFBs16nayMGbr2Afu%2FDuEsJ7PDzDsmonJb2VipL8bnSSmsjqBmjoFDco32xaDdaFYUzghBvqIPu4VURjxhInMS6IAelz6Z%2BPIme628mC7PnjT%2Fd5AwSunoyiDDw8N8mJ4PcPxPwkbsNEzQKqReyQQ9Gt7kR9w&X-Amz-Signature=62c16ac831d2909a08eb6616858cc308542c9eb31fe03fdab88be4737b4dad0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

