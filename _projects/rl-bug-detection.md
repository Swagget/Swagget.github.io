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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UE26O5P%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T233850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIAXfgSGJTVzS1tP0KGbuSzteOHeAJnzeeO7%2BUjLbhw47AiEA7FCV5iikN0MfmwZ6NGLnteRBlLlolnhzf412PkxmVjIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnNbbPhWKXVOuE3BCrcAySB234TdeU1kNQ%2FAOgE7fICmGaZuK3LHKK9vbip9WAg7J%2F8aCF1fyj%2Bo9Qxx4he7XQyjzYtkI2kah9%2F4F%2FDu0uPMus2u3AOlIuHGiT9lItn9F6WI2PQj5kR9ETb%2FWVP3j09Y%2By7lcUHuYKzDW%2BjjiD3dMHPnqOXbc3nDbDy0996%2BP%2BvY0JqIYNLcuHxPFbwFoWivWKMiAtrS0KMmP8U%2FMvlApJ%2B91K988L06Y9tHiLMoCKNhS3ApnWFoRUvDATmuZL88r5Un1kIVjGr5wL5362NWa16W1kMkXiQ9wMnDaO9kuG4lnjRwLPy%2FUuVkCBX56OwPkN7x19haV6vnMBzOQnUQ8ahVSRnYPlPASlEa1S5xy36KuTRFpvbLDAWg5tXQzXmvaUNr%2FAVoDG59T07EZTNSFripSU746G2aV9idg1k%2FUe7486ts6vZZuNetc9JBRd46x%2B6gaytRTYOtX1aN1Eu%2BCVQo%2FMCohjXYxptG6ExarSFGe8Pm1%2FWNA9AB2HJkcokKvNW98YnDVHEHXFYTg3h9he8fOW0pSu42MMR2k3snQSvz2PErSiL0ONC0yG77ReGGZLpM%2FXZbsb%2BRGlj0NnPj8s9vl0149VqS%2FtSYtqIEmK%2BOIzv73ppKhj%2BMM3L4tQGOqUBGgB79snGYYkDhy0ARxKwGUcOIe40vsw1683YWqD3ZmyRjpc5lts4Dd5PRa%2ByrVusewNPD3L%2BIZNe0XWqdZ4AAg63%2BK1sBfHtP3hpHprTyeIyufKGoR5lULbMrj0Vd28LQqoJHBygFXdsefIAiUo5kkwpYMv4dmqeMfSDZ4%2FcJzcXo3Zm1vBKCnHN1mM8%2FHSug0ujmRj2Nwv9rADfIlXrfefL6%2BC4&X-Amz-Signature=1ea0af57da73fa698e6786b3cc4f56c876998e8fda6ecff7cc9e2e48c744f69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

