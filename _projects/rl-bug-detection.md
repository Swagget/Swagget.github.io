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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZVIXDBZ%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T061817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDKaXOMgoVcprtxEagmZ2NnXeWgSnMFwosqSDkZt84rsQIgVMYjaP%2BF110eWnz3D7DQHum987X%2Bng6mx2vla%2B%2FLi5cq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDPE7oAIf3w2oMxpRzyrcA70jhtGTCvhmqyigoYlClNM8CH62rI%2FhsBCBKTlVRO9KNC4t0FAJMIMgdXSnVumqjeBUMPWBQxkxNopnZ6QTuz8jjQTt0p%2Fm2hfHMjgzuWMuOQ7NgAmSQeGKRnGJ4H%2Fso4g5E1CdL6jPRysuOCIIR0hhnOyh8BMyc4euNOI7Px%2Fg6nLYJzgr9fHhXVyARaJDyKx0HR2jR36hZY9qbM5LGh0%2BKhHbSYXMVrd%2Frq3Q1xQ2B1u1JzGByyllY88Sck3Q%2BR%2BU%2FomSR6QaH1XeTRK%2FLf%2FVZ4qIeQKZ8v0dlYgyW5QJZFwVz1%2BJM1KygI73ywgUdSSKwLId%2BsV68ca2Dz6sRGHUHjCaE%2B84rmOc8m5Fus1CxkKLK8eCO6O4ywi0g4vkaDnq8oRezJKEiGWXsh%2Fd0wRWr4UJCs9XiXZ9%2FBPgnaj6gGiiSP2sXWfrADp%2BHynq0iX%2FVk6qqhzkicgU8t59v89BnvblocadqINwcilDcIBWSXMTnoGpAzVQlpkI7SIKk291hpowJN1wiYhBp82LULP5DtGf%2BFc2Kai4ApPmdw3WRhF55roxOaxAzE7MLkseJJh5nXTuX3OnbbUqz2j1O75vr3GDXHyryZk2MStDsLyRa83WzD0J4aDNrU2HMN%2BAhdQGOqUBxtQBfd%2FXhwZ7hNjfKX3R6FquYaAnxG6BUrAgHP4RXqyeBozCvS9UIBmebe0Y0JJUpRCo4Q%2F8XCkG%2Fxqd68FUqpffYXKZRgmvVkXgNuZNvjrUtDtVhxyqebqSdFTNz2YGH9KmLrZWm%2FO8dQAJOoltb4U7Itt2gD%2B5jsAe7pOkUWZuOKab5V8iiits8DqPxa6DtqLC3dsyNrhHFJZE4z1OUreKHwB1&X-Amz-Signature=b0d5b2e10ca92015991b9c4f0a3c68559ed8db10c174d8978cb53f14f86a8fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

