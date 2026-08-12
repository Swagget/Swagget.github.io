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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIA4BXE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T113631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIGjA9ITLNqybdjqDa1X2LoqEQMqZpZ%2FmYec7oeF7xqyHAiEA1i28KpoLB8r3s9G2jOngVr644%2Bmkf%2FhljweLRxUnOLoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDevJVymW1rJRSUVNyrcAy3jGL0SZ591adsynWfB7JyrxO7gUt63NqjewoS1Q6QpDg0lekTPQXY2wYmTRCJLcYqqfQ1DGCah3oeIs2oXA72ekb2Ie5G2pVtT5QAveztXMbyV%2BMlcukbQa9eTYNFl2n18yOxP1S6nANBdVMPR%2BdBKuLkIMA7nVYPrcZXdW20BAtBvsqbx%2B%2Fk%2FCcdq5JXkeVsuC6bvAExf1BFqHUVqTAmqTavtSg1jsp35oMzF9cF9fqbmH%2BKPM%2BlB%2FFntMno2LY%2FQHzp61NyZiNa3SRHVI3mXWPtf6Sx3KQ3O0%2Fk3Kc4J0HzvmMKZ0nVxyNzcxSWb1E9kQd%2B1OaSksOheBIzvSyHctF%2F%2F39FKAHGAxndrEAUmEOfMBRbVofloKcl3ubh2q9ySPIAlRftEZR6orn0mID76mpMkfW14zfjL9Uxu338jF%2FiG5jCiLNQuwAXVCxqCsxogK6yN1%2BmWqeQRZxtbMsI5A5Tr5wWFGogX4xQAlTNrqVdxCLHimJcnBLXb5t3qd3RC5qK3dYUqkxrPW69xmh07q3wA1uxhTtaXwyfuXlWCIpBn%2FGexXtZufzMg9J%2B9si64FQ1klkro0YQuBNcGMkNvQXAQnGeAt7MI1hBbgtuBZx0dWT8bzuQOjKcXMLqe8dMGOqUBfG4u84ve2qAj6BmyRHF8nbkMxH6mfXg5dHu7fMx8nXU3wQP4TF0J%2FCG3Uq7j0FFkt0pfuFA6KSGJAN%2B%2BD3GWn3TptMZeW7Pt1wBpstjpFaR8pP77KrNUWZ6g1bltUJuFcLFYssB9K9BbyfvySOvhQaF3FIPJYgLNxdzI1YzQrKiwibBY59SP9M3dsjL9DcGf1NBh6DYo%2Fulys1JdASuqyZWZCt9y&X-Amz-Signature=4eb64c682dc63eb0676267e930960184bf75851e0ea8d3a3f5a8265050e794b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

