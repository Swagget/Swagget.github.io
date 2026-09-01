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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7H4ETBZ%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T121004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1HoaoxGDhb3SzP4EEJHIIW9bBVygrZc7O0SRFl%2FHiqQIgKSZAcCD8a%2F%2FrA7hhfko9pyPXJx4XGCLeSCGye%2BKU3gkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPr1Qm7CoIhhS30hCrcA8r2fJ4jTJOE6crrdRuWHiabLGBv7yQkQ4XgC1n2S1hLT8OBWpqS5e5pQN1O2kAs1HBUPf%2BcMG%2Bc9FudmJBXzGSH9%2BnEYH%2FSxKn5kRBb97m7VtUZcxRVyfkRx5A4oKlknvuC%2Fp3FPgMcx%2BIWWk09wZJ1Pkr8xphWMW4yeNQN9E8Fi3d0zzW2fx4nvsVoNDxKzpExEtrcIlUh%2F6a3jtRPTPOM9oJFTyTP8gEOPfRBbfF3UzDTM0KipoS3fQASe5MuJKcZDaFgVOD0d8bbaPCdRh6dG6c8Y%2B7y3JsW4srOW5WmiCn5VyxfpWDifKjtJjinPvTG%2BYn4CT3QT9R1CvUSK1OzpqeUIlEGiYq7jd7MkpTxjvkVBfnCrJCFsLm0dPwPQI5GuxNc9im%2F%2FX2lXK0jaIpWFWk%2BjHX7XwkQ8RhC1OW%2Bgd83qYqjN%2FvbjnoMATL9y7DFZu912ZlL4NBKvhI5rUaG08CgnwF7gCMCaGLyFtWqSwcVvI5zRpGFUL%2FNQILynYdJd5OPy%2B3mnuR49HLxTfoL0cYEPRTz3pdtCPagySkDI1CKwA6yJhsNFf0VT3KNehZKXkPIt8g0uByeMa6M3WlvswntUwLb%2Fd%2FYWEckIEWTGShqjIu81qKSuye0MMPr2tQGOqUB4rmcf29UzOuHYic1CropO8ijjznJzpQBaX2uwn9wIHaLbEiNj9Ev%2BY4xKGvKAmP6uKyN%2FrOhfZqs%2F4Da5Ijt5veVhRIFBHhXiN%2BMrEnU%2FOoWUfx3nTq%2FgykXLKv3wG64O7d4s%2B1BuOnI73r2oOYg7RMbK%2FfD1XzkQRn0Tf71v7o72sPdCE82qDJccsSg8FSu3OBelzVFRnb0atIBI2aUqDkSxKTJ&X-Amz-Signature=575c9995ead0172863fa808575daee94df522e4733162c8cb8f5da9282d61754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

