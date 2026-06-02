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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGWY4WGU%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T204810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIG35SJyIX7nWEEKGFYHN22ves2KR2OBRtVt1ABi0b3qeAiEAsNcGRNZ%2BhxaE3I3F7jDO8GddidkdVfrX6T9BhWqzsioq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHuMzOkl35ETkigJpyrcA6ZTDKE0WZQY6o99dwKCsA8UXcIaPYpX6rtniKO0%2FvrDKKQDTFW2TOhfx9hUum%2BpyAOwVwZ87sLv5%2B7uD52PqG%2Ba4wHblgIqHdQFc7K3EXXQL4T9vQ7tznpeFrPTNlfwEV%2BZrTlsvk%2BGFTxwAlfeR1c6%2FuOZZqii2YEVHj3u4D%2FerTvGHBX88Wy1NDlp2zv9YimxG%2FoFiNloqgNUBVru7MraIc2zX8uDkgwi6DbtpCi7s%2Bh5QSq3dC9LecPGeknE5dNzArdtnWuoSUxqc1%2BZD5nqnQal2F05DJT2tUYl8iOEux3LWlNAKSOyaOydvnieHvoYy52wzXnOlOCAZdXlT1DyjySqTDsh5s85tKFNZop2Y5R%2BYzo95AVPvx95SeB09oBcGN1SpjIvRxJSbJtJ4y80dffmHinvCRAQRSUDKro%2FXbJsd8bJmsCRUZ5d%2FzW2zILEz12oeol8z1JlXwqY1urjyvmUAvPOAt4bx4Ztrx3MAJFXIxLMOpagEXHj95ITkhmEnM%2BfKwPWHLlZqDi0stXmdr85rTKAhRT824hrcgagnx9J5OFcOiivDOI76T4voHoWr4t%2F27EQ%2Fhc1omLevtFEo4G5fROOQgMaToeZ2PM9pa0HgS7hZdvbub%2BNMKDi%2FNAGOqUB9AucFYAMfNp9t3SygLQCTRn7Bi0k3pvwXnPT6cYffcnHkKlUndrgKTyK8QUt%2BgeAmaSBEbx4IuF0IGxrMKJmUgLH2d2WPsbqn2seqqDscPTGcveunVfnWTzX6KM4y8enanD4gK8u%2FvaUIGRS0%2BmnlJUPLKTwbsUD8IZGbeOITylNAMjrBZyYLjwUDK1vIAA2yDzS49drpX8j9ZQkceSbfNuI4H%2Bv&X-Amz-Signature=7837f613cd8d7e596f90926d5a70e9cc13c429f6b120637aec51813c3053f776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

