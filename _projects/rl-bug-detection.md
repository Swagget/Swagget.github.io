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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6MNMSUA%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T224646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPIln9rJqivTN0KhwcIE169%2BiqTeo7Zr9pooqvO7dlCAiB1VBmgJ2%2B7VEAhTygFXJz5OOuP99SicaQJRVmLYkYJYiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwrJBggWGD7cT2KZmKtwDXWAPUdWkOf9%2BbhMUCzVxSgaC1x8DfzLLvZ%2FJVvXd7Iv6%2FN0uL98pcTP6SpFKvVHw6%2FVtiBQrhoAk4cMK%2BbykJE5kzrFXb3TKQoKXFKeqA8BPc1q5A3rgNoZIPAi0Grpn7Wt6X2vIrLbMsBTtlTGOWQKYHHu2xN3hBx395Bl47ix8bNH5wo6twne0IOmjsO3Ms6AEcGzw0v%2BszzXu9Elftk9fZ222mnrbzN2fuRMtuosYzOawOmy4ql0MlK9Ta%2BpoIeWfgaIQSQz%2BX42UJ2PNdJri8O%2BfnTME9rt8nL0Af6TiD55AA45ruW9txPYDyvPmk%2FeGG4mx63j4Z6r86o%2Bo7%2FfunWvGe5oVeTR3v6C9JhON30pqzkLxDelddMj7S%2FUHQTNccXsQDwphKFt1LE7HmWEzoKWCZXnZ1fax678MJXMi5xKKlQ4keRVFCYcfp2cd01bSpLSfiVGuqYRCRrj5lQAz%2FtisFbcMLE1PRANiG4btHn9%2Fi2e1lcsfBDB3zAfep3HR4IBFlTHTn7Z3Ah2oeVt2C%2Ffvf%2BpqlhxFZrutDI8f4rnzxCwT2MpW1u70YDDQeD2FMasgoKP6fwFHZPyt9UEcCzr1Rqisjb4KoYQFbT3c8EixxhOBvavHmn4wnM%2FF0gY6pgG3EnXEvnPqiyH%2BjGgQXkDQs8uovANF8DmNZqPoiFBxA7rjQY0PvbH4FB14IPQxrE%2F4M%2FU2Ir1G8OkTjXb%2BZsyUsJ7HWc6aCbdLNbfENcrz%2FSOMDavmusfMvERy5xug8AC5y3%2F8J68fKlc5Wb%2FkcrGMbCM62SErENWzYbdmfkiJId5kfdbvVVarbggMuKlU4nMT4TNEv9ubb48q0uJ0Zxri3FL2HSjz&X-Amz-Signature=0f43eb1673280e9d03bac8013cd55bc0689a240693614b31ddf0b2e9da13243a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

