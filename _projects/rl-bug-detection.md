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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEDRNHW%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCOeWPy351QJdigLaH6cN9SKl%2BjB1k9szPCn9KCGHHRsAIgSRs%2BGFViXMvWZ%2FbUVJhTfv%2Bkn2qAY%2BfrRwcxgGq5rggqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6hV7phjsYcDq27WSrcA1mXtRzcvMf6ZRu7MiknC%2BTzitaz8fHouBTBoI910zswGAlPIwjMenKRv9VPrGDJaetN9XVYge7pHR%2FOxpaLvLIUsf1yhPV%2F8stdMlw%2B8oCMK0f4DXHcdRy1LC2wZHA4weJj2JQd4xl214UmsmuzZ9DKrqfykfeTum9X%2FXlg3fXbEFr5W7Mx3L8pbHBVr9bHIV7iWip82%2BmDxc4rTS%2FmLK3sbQF%2Bu2iFvAB%2BlPcAYAKoAZrjfcjaJnlnoVq2n8UYa4XtFA7npxA3%2BOT5W6BH0dTbPTjEg6bKLFKb6QdKx34VSo3ZCiBjj0oZD37yrcsR5TDgvWupsp91C0aI7jLpjc7%2BCIE0xwn%2FqZkVj7jRXoBju87XIkFqaMtfIoylWSf56rD6q0tazpbGt3SQ%2BBz8uRMyEZP%2FWkxBJVV7RU%2Bn5Qv2MF%2FcEfRbHx9Ws43nYCIM0Ri%2BnOgu8U6C8pTP71B5X8ZJgvGG2GJ5HCyDxbFKM7KOl%2B5E%2Bu3qdb4%2FVlkt5tUKdDtWQLHngSYMyFi327LQ7vCdZ6Elu78FFpFdOriVLSq80dauOXIVngVM8ROOHfOtKtVZ2PmfAA84OezJ1VSvUvwjND4CVTrMjwl9%2Foldra%2FQzcUJeEjW%2FXldhdyRMOCcrdQGOqUB3gc4wo6LCYFuMxqzlDvyiOgvBTkOPOyBFOV%2BhHtsW%2FQ%2BWoqQ99oUzTQQBMVox35TNmf6O%2Fr0om5jpJtpBM1%2FbRETH0J023NCK49CQm8SoLXPcSXcx%2FvyRxA0BRaKLW0JJmbTs04%2BPmpHU7M3TYE%2B6Up1Vp6aLcSd9szQRLnvHZOAKfBX%2BANRID%2FMLC8bPxnlGujQN2NBLawSTWrydabc%2BnNG4BL4&X-Amz-Signature=fbbf589880d4eddbe25d110a062dc47196747e3f4522402d00f4aac7e7634b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

