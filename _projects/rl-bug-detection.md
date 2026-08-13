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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNMCCHI%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T232827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcXfTU%2FWl6o0qeYN43i9ewegj8yfmuOqTo8cAnvZlznAIhAKwL7WGSqFRxDRFktRDwQpyW3CdpY407JPD0QBL51g9RKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz6p1l0p431gkXi4gq3AMefmGrOBEJ%2F%2B90aqdxr%2F%2Fa48vfyO%2F6SOvYnEYN7SOM5zzcOnDrjDONf1xqaqPdPQ46bsjcZF%2F6jJG2PrdZRdVne24CcNZO4DBymZPNg5co20fyywfc0O34mXIWyD2YPjuIYkIbMlnGcQaMt1Eoqhq5jCllbbSscDb4U1eQ2UrX6kzB23G2TPavRLCJtK8vSUag3TKp5Q%2BalN6AxQkKORhh46Ke%2B0O2l2cz0X9nTSf1nX3k2Essq0Ud3vg2BJ29mgKZ2FIiLvwiuA6OUt3ILhy05V4n%2F6tWKyQcH5Rl4H81IsERGzROvSQh9%2BD6aWpa1mgYl1DrKbwb3bzwPzjPpDFlCbupq7Vu0C45VS1fK9vibq6uFKj1VtCqckEq%2Fbb7WSgdAinusep5C0Wq6YM8x5QWtijWaINOnMbjdB7P%2BcD46GFt25aFArq2v9sy%2BhtNIFa8GPBDtlbMR8iAmHwjFk6HbeieE35NYnZGji2K5ycKIwJ610rNkm4kvzcAlNDv6wTVkb34XF8W2ai55nGFfbZndD%2B8u3j6oTRAxcPAdoEVFbfQwpkOprgqw8ER7thXOq9D8ff7dUsfBOzg1eCzM%2F6K275WamPSEv6cRSq5B4JL2xzr0Ul1ahLlzWttwjC23PjTBjqkAV2YlqIWksxOAGNRWDlV7VOPAzooRmIS52Ydh6O6pjjVe5Fpv2lEjPzSripSIPOnqUNUTEwicHVxP2OMr9TTUrk0W3JUOlpS6OouyXOaqurfZbXAFGCC%2BtU5Auj%2Fkh7YqS7JUdlxlFAitnZsD1buCuEvYR3OF9pGeHPVS0vQw2aVp7%2FIE4MPjQBLjvG9rj9rJYFCjGJ25PRHQ0DbfuvluzXEdC5g&X-Amz-Signature=daba46d9785ff8864609c5a1ade0d8da8f647d805b990cba0749f60b79a91424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

