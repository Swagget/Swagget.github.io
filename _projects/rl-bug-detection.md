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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM5UHEL4%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T083323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpb1QkMifIqV2mhzCoA9W2ayl7PtPj5eF5ALBPntY%2BWQIgI0Hlk004SetgNptAJ%2FF%2BIN3%2FYnAzWqri7Id3M98xE4EqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVxFp5BVC2EZ4eajCrcAzPf1474EhVdwHvIVVS1UimMkdRSuyd4IHp7Ay1LXLiK4KhwbrqD%2BlzABwyto9FdR4IvG5L2iHGcKBansW%2BAiEaXxCl3QGrmlJhYP5sTd%2FYrYzz8tV72FUNTYVIIXmBxDbBYg1N%2BurgrLIMptwiNTzUJoUXI6vUzsU3i%2FrqW33rucEHYO6cYQvsV3%2B1ZiFXwyRdkAi2S0gl9VXDjOF8XGBqYDV%2FE6pXX%2BWl3TQBy12Lx2M7sQoQELv93LvzSsyBgCuAT6vIV0b6alN9FUH1cqJi7CKN55YitPA6OoD1jlcmCl%2BQvlBrFzjpE%2FxU6PKYzCx06rCqydt%2B1UaO0Cwxaj%2F%2BSz9b2rpwkqh18syMYsbxerNRRK527ZTNVynKmDFmP8fpoHZiJyxAxE2ey0wDKgVNdanyZVJlEFV90hk6AggZDjrdSFloEQ3EvB20W1xHFc9rRujhWEf%2FnM5moxDJV02Ih%2FhzOYL7tpYV%2Fnn83B%2FMMZPR6qvgTo3NgXmFbdDlv3Ukzmoq6cHKpI547S%2BZc4e4%2FXKbj62N2i4jNnue%2BLoyvGtlD5oaQBgyJJyWY16S8gwRSIOwVSLh8iyXU6vANQZaJ%2FpQVEg%2BFJYAzgUjjVNejXKqmfcJnWwIqjDVNMNeX99IGOqUBsg70aWhX0rOn%2FhGyjzLR5vnKtGJC5in0L6J8WA%2FrMDF5FGA2JJR95UFAh%2BY7PkAn%2B%2FD3ugYzy7qmDf7hBkgKNsODp3QI66Zc8FWBrLuaPPIFUiItLoYeltkRJFUaSsaOjKYx0y7Rrfi%2BUKhl%2BYVOnfO96%2BjJVVXqzQixhoxM0OKHm49O6C85i4rDs5RAEy3nZoNieeT%2Bs7XgHKhAUlp5POyIkY8Y&X-Amz-Signature=50f03df859e0ab0e9003ad3173b10efb4f19ebbffe42b5f07b2122008d67f41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

