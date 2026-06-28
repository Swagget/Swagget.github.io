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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFAOTKP7%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T065057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC1QsLXQMoQ3tHxHsjsgeMiBH85R8IDPL8Y6bFe5Ha3YAiBe5k8tkUv8IR2VzxV5SgmgBV24nAhVld6JE2YNjovzOyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyj1pIiklBEvaLA28KtwDceGc%2FmSK0RGRPXvSUOWeRpuDPWKZ%2B3zimjMYs7W9Gl8EbZ%2FmcMx18i8POs4ko%2BhLqNrWZZ%2FRFJuKGPbnji3J6Tz8BS7Axt9QlkufYIzZG0XbwfvaHqPqWM%2FyoVj5icH915srhL198%2FAl51teeKODPzmB%2BocpHPNImNd8T3jciNhZRqtxtSpUIQVT76QPf8cpmTpGhNUfKbd9evEWdK4sZRVBZrzL%2FmYOUEjD48mGMd3A8mo6MxOgeWCK1GnMVMR0%2BRlJ%2FQ7OQbsxtYeWP57%2FCjIWe3PWhSIS5xSyX3PNEuON8sOedFIdo7B8tHbtxqgaXhhnS%2Bxh25tgo%2FpVLDTBTxOhxUdZiOaLZAM3gbclxcfsxOK5jai00EbKO2YQ17EXZJoJV5d7oDKExDp1mgDHZ1IbJoTyEPvoLWW38gmQR0BSsMetIMjDeb020L5yqDyZ4kko8pO04vH40N6sOjkvkmYyG7ybuYhooH%2Bn%2BYRxlN6uX%2FUL6NJy%2BqV2lpD%2B5696Jp9Kx%2BZUsz8pnfKgFI7dTujVRq9hY%2FQ%2BFRXsmuPjSuTLa%2BTWVS%2F80hLf%2FKgNjdg7VHC2W2KDMK8OxWIrI42M6EOfSMZRRqnoURugt4NVF2A7xqH8mhzUBkEy24Mw7NiC0gY6pgG6XTfNC7%2F%2BPi6aCQkbaRKynKXFhJEsiHv40MGa4odo6tw1FvagIHQtZyqd7cBm1JDjxRMufHAH3zXVXceHT7haahTs1rIHGCoMUHC3RK8oZjeS2AE1PXZR6LxDf%2BEh1wXAXI1mJu%2BMngnj%2ByxwJx5DtH5Hnylx7D3AfouoA%2BNbfFce9k9GDG77ORua862Kh%2F3YxbL5HHSOHNcYfR2fQ%2By9AG4XUTzQ&X-Amz-Signature=edd70d54e1d97fb8abaad9a69a4ab00ba32df1f50ab6e522bf45afe533924322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

