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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFZCZ3M%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T204148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg2Fy1iVLWhP8FyfXBOjoHVePrEtN9P491P9H4%2BDKJpAIhAOBVFcCzN%2F39CiNpPtApTXCaVHtjXBk0Ae%2BovDBb4mVDKv8DCE0QABoMNjM3NDIzMTgzODA1Igx42atExOsnp7BadZQq3ANPbbHBz0rGXXPvbAKFTctoKgkmQQgz455T8Ksr489uxk6sySGoVVSAbZkFaIYfLua1rNovrfjY42PymQhWmy1fjX7%2FprFNCvRIZgEiR9pLikP7gYkfCxgylV76Kpuc%2FBqC%2Fg0AdmEa9fAk8C7XXDU4mHKFMZRqPGKXMz2Rr%2BMVQ63quXge9ildj20dRCGrfyLFHgQhIwJxhOYWYe3LMqNel%2FOf1Vd6ZX5z2Ph40tEgCPf8i1Yc%2BT%2FZjLXGeGtERdEhaTD6iee3JNMcZaqtw%2FiA%2FUH1sF52vpDwjo6QbzSRtaCasoBravtLXi8kLQQMWWjZnmbLdzlgOWOsEkeGw%2BhDmfIwFQ%2B6dLtpQK9Dtm8laOtvdUIIK5ho0pNa56EiR%2BvFiDU3KSYS%2Fg4bL7wo50Apu28CAUcogmQPv8IgaiLYrQNiFmiHmDpJBp%2BIobEBMoHoWhUNHhVbWcGMmxOoomaHtIDR1XaJuuwY104NdIVy68mWuDITVML08v3pOMdJ1PKxtoQ%2BklpxQPwnQu6GgeQPkUfhUFtxWVuX30dmLFw7fWaiyHKv3Feg8AuygZUzgW%2FpNePkivGv66eez%2ByGb23Tfa0FdfLB1Hdt0LwTKEjRTSCB0zn5HRvLjs2gPzDK5uTSBjqkAWACbb%2BMNQRVeF8YeZSMLmXtWFse67Ctcq5qekc1TdhHjwVlGI66BjDQt341VJ8AzyGG6IgKNR11wsBX%2BYlx2WLojJ0fc4CYcb1UAcORvvkfqGUhJ4yTJ04rPsvG0ihFzxrrZI5TONdgzhGgcvta5DcHT1UQWm3zBIAitRlyt0okf51q0IN9%2BwLoK1ftBvV7nJYu%2FDf8UMS1xuqLUv35tG87%2BNqq&X-Amz-Signature=97c9c4e626ba586b55a8017ec119f13233721ac6908bd270735e413b8bc2ef9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

