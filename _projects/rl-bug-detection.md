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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCEXQFS%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T175909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDNN2RvSxboXKqi45%2Bm%2FKk5eSi4tBQqFU96EIFKitlP7QIhAM6RFTESuHPgAKpogHlP3Sz7ZiX0lkK69aIG0GyZBlT3KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybaBuThVlZn2yUnOkq3ANChbQOZnbnR%2BzeMD9UjD%2FMK4s8ntck5NT2YOi%2FybIIHHuBAD38FutKsOzS4ZAoKOXj7HW4KuZvLlDl9jU1yAUIAufKpbb7bZmMoohQ%2FPagFdr7YblemjduV16AxmEDYVzVv8%2FWq73rBe%2Brbg28uxIMEqERiOWKDc6SPGTNCHqtnqCXHfdYi1zO46iRanrVW1jnJWvAkKxYpHof0jckEfjjYLdj9lh71Du0c%2F1YnCqQFoFj17Jd8ANWvbupkrExRsxdR8aGo0czep8NPC0CrHi%2FFvDF8H%2FKko6%2Bif2Cuebae1TEpjopudLnz76QaVt%2FVchyeTZVUwTwJ970fWMPOsS838d3HthL7T5MN6kFtbYpDrzzDvudTI1IH44T99yYZ6eYtOTkU%2B5689lzVW59NprUPlV4J2W6xMQSpv86his1N9Bz1nkL%2FsMxakDHy8DFWO0p8fo%2FPoHrXmfP%2FqQEfjUfFEWHwuNrDhhsUJ6chBtpScN84JRJvxIqegqWpT%2BoVMAS5MuI8CkL5ft4D%2FyYLuwnIVcKyFO%2FB%2FDo%2FH%2FfJB9I0hcUk65Y3UFLe9B5YwD9OS0lFXfAmrPstLXZ9q8Q2ScUAnc%2BQMfxIQnvNgLQptdn0IazHpecMNx6tGLWMzCY7oPTBjqkAY2Y9QafjSlKcU03cUJyEiVcGnRGzjPXCaN7Hu%2F0tOVAr6vBHB0VWWnscDZJbRfQ9Biy1II6i2HkKMeU7ma2Qv2bGVKYyx4Ts%2BHVWtE9OrwWprGhIZlgTN1EX8ANJDI2whob%2FhR6nJF0jdSgB9NZoN5%2FOR1UiBTGfRPK49DeeK%2F8W%2BjFqX8cqyD0E3DrosP4dZFY4Tw8D8eP0NdnCexWzZkq6WK%2F&X-Amz-Signature=23d47a5bf862ed7078541a18a0f651da70e0f21bdc6914685dadba9a8fa02efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

