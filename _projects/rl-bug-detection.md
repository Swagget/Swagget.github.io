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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3CT2CP%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T041729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQC2erZDjLVCQoftuePJoSBjNveSpGhYNJkdGcpHdYe7gQIhAKDhlEAGU9oBuhH%2BDBgVF4uPu2ATG7FsmbpfbA79%2FYFCKv8DCAoQABoMNjM3NDIzMTgzODA1IgwO678L0b0z96ozZb4q3AO0mG0dfzaKIHINu0sO1Ekzlr%2FSp9uW43fiHOMi%2BGkJCEpcTrI%2BYOCkhNK1FBbaFU98G1F1QJbrA%2BNSqjM%2BOkUHrFsz1riZjGVut%2B49hKGVyfroEnRdYu3dDkJPqbhTHnAQS2VnuB%2Fnw0ewHQv8OLI0crU2n3cIugdG7YZtRFOabW2dKLKbabm3WASJidjOyxgQs6qt2%2BEsKWM1KjGsfYi3mklUp65p0vq1gOwEJqCj258rP%2FBH%2FUZm3RiALltLAK%2BriiZUlaHRXTMpbH9Y5QHMcsUKZ25oA0dpcHj7BBVVCYg6ljkeym0Ara8NkHVJyjW64zjGcmK8E1tfcf1oWnHDfwN3nJoIIRmzSOHFM97B0IA0GyHRCE8htCmFWRKPU%2B5YLM7I2ZZadTnFeFqz52AdkeaMWDsrQCOpvX6cWIgN2NN7ipKbOWjH%2BDqUWZKRWLNwclBUzAyR1GQX86mGb%2FkuCI5s%2F6O0F%2BDxNcC9K5sXfYvG87qKsQuAn%2BMGLmH%2BgN9j2PpkjLWISkh28LBhCmV2KtCytIPrmwYzSYTGpQnYQGhGflTMK05gTNWwQn86IRMIwFMsQgGHgEujBSl%2FuhNClIvtw7Hi68h7b6kQr2dbfX4RsolL8vTgnrddAzD5%2Ff7TBjqkAUefhKe3MUYdPwyrwpeSxkDgpzfDp5QnK3YWBKsHclq5C2I6flwkTfdgeeDQxjmLP1ZJ1SRLufdUKOPZmZbWQPzMYX6xgSboFNnC15KrHdnUwkOgqQad%2FTYaQpy2Awh21T%2BnfCZvLvJ%2FLkl2qKtXFI9bFnmr6TT3d%2BmYPVT1jKTHMGZV0YthDwbMwQVZvFtq4hjO9iBqDufovXN4UOLFchHpfQlo&X-Amz-Signature=358dafad629ba16fe87057678de625d2de9ccc073d4c70cd382ddb257c121908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

