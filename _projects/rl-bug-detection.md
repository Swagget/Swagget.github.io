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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXFQYCK%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T131436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjKCCc9ri4uV6pbGAd2pNCv1XV5vDFLzKx6GL%2FlX4MNAIhAN2Ep0AFUatIxiISzkPT6bgtmxllSimdBi4xhCp2gHtGKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFGsr2UL%2BTg5txjxAq3AMs%2FdeZ%2BXPrgGz%2BsnF0eMQYEsx%2FLlUIgGLzJ0Wz0NLCkQrA9SRcfet8k2NFzidOjG%2BDEherRldsNv%2FgsLZFrO2FnFh3qooXtINz8MOXGGUAQVjQ7HmBvWCC6l2nbjXuRaD%2FQcUDXt2fS79z2l9%2Bj%2FN6KDD0NQeQGEXP0wskMyAKWS1zE7Bj7dcBkpTvSrMfKUpCaugl9DDSTMgt%2BrH4Kga%2BVAu0sHZdXcy4aUNlkVLnb8qGDkxeYhslZGjaustCK3%2F2yAbnJ4dJK%2F5CHAgP8dRlg3aVm6j%2F5niCzjqxPsdM9zpnf4SH97yiYjDhyDZimjhowc25VhcKJ7Uia48JsiWVOh2Lzl5CfR0c9AqzTZsliMMYuWmtImVjnXj0dnAEu8aFC0SR2N%2BBI28Chcv0QpJAYcwDerjvRBlqLaKvd%2BErjdFQomigIGZ3MPCgYMhA%2BFxOlzhA5yWv27LcTQ1X56F439oWzNBUU0CgbCaAEzSoZNplDs01ISlo7wNHtq3mL7ED72BBuiQEDjVVAvd%2BbSZFjZhVV6v1I4h0dQvegKZ7dU1BlOR6oZ2TBp9kaBo57wbpNzWsLmfnAZo8zY%2ByaUzz4sbSa5rE%2B%2FuNwJjfoAEFI4WL2vXFKvKRlGCf2zCuj5XRBjqkAU61hhOZw0zUpC2R23s5dC71sbkL6AyQLPtkNJu1CyyNwZMnDna46Z%2Bcd6xTbboaA%2FBtpPIyAvFQ6WeUeh0xsZC6MoRS0snMFAc0z8kz3ur4jLb8OBILMkN3qS6kBAWxc8f1LQ3xeKeL7PSxZAhMLNYfk1wajCReySfGH%2BlcM2z%2B6WnkzcYfpP0dHnRK1fVcd5a3tVHbE%2BQlmYLxMxt60UmNWLjs&X-Amz-Signature=470308c4fb980d212e2ea18b032de85998b8238921a8c217213d3b2c31e6dfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

