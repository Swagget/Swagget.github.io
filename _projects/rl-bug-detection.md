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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNC6COAK%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T174856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs4WCtUepSFj5lJ4MIan8DYvO3cnu%2BD9AMgNzXZI1W0AIgbjMKp92%2FUg2y32%2BOWSOQz0tlCMPOdmBOTCP4aZZpLK4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDC0eQI3sxfeF2Eh7OyrcA3usF%2B3N20DtwnZ2y%2FMDsrIYcq8ryqBdALYDIx07sJglsMsyMwW6sOji61fEThMtZqYQsK%2FoM2hkivhItvOuLASacWUtKbaNsGrya9jc3UUYUf1ZxxP3Ld6JFg0sCNybi4KdhBRCeZ5wUfzwh93lytrtBA5aUH1Bm2IIElaGuHcAd9IVc1C41iz72h%2Fxe%2FedWzLxo0DfCWmNzrW%2B6SFMQd%2BaN%2Bp4SrlLRSZn6gXDcutogrSdRBKGIrQU99nyKnZWF99osoST9miL7cBD3QUednbnAgrtDwJtGnD6EM%2FuygjD0phDh6u4RneuLAfxvmfyfpGr392GqFBCl%2BfLZ64BF7T9mnSZLte7v4S47DqMc1wxkE553TsHBwwcmzVSmdbQn2DgM8FkrmcJBxZ7AalLPpcIfPFkav1%2FlCJDJGJh4WsennqS3IJdDhRZOxHPzmIHEHhoVSks2WppK5Ys%2FFZD1YIuiyiVliSd8Gry3Od8KfUoqWo4QJG27kRNuOer%2FhBHotQUu7vS9bHYXHHUfVqviGWvkPeH6GIaUK6SZ5sH%2FD%2BXJbHtHBhX2pgXN47EHHEFNjx5LwyBLOh3oDGQcOo7i1OQfFKdkflStB%2FmNjPfTCZdTwxNmp9knqMdIdGNMNPZtNIGOqUB9yrzYKK6ln56K%2FhT12PclfV7hJ98VkKLN91BMtORw7r50GQZ0idF7yNH6RcFv8eWPOvtDSbJOKWiYlHp2%2BE2O0lcB9bRzLrB6hLLtQIte6tTq%2FIQ6aNgX6si21ywxOCFM54XKHT3YaszYiWo6aV9gnGx7h2xsjffB9NO%2B9kfmuK8O8U5yk8DM%2FlQePi%2FDGBKpCDBlghJIgpRi0Sk0fS8NTu5CfeL&X-Amz-Signature=4a593e412d7b246d30d391da280278248c4212ce87cead9518146c1e70194107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

