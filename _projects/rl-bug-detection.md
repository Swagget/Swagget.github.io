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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KEKB3YA%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T135543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCYdus2k3tZqnMYUL9v7iNQH%2BBNYjU4YNE8UQkGYrnTWwIgL5yfqfMJyHleTG10MciOEHbPP2WphpgI%2FfsIIoLr5p0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImxcLS14g6XuflEiCrcA2v5KqsfiXjrfF%2FQ7oOcYvJzmYddp4IZur6kDo63vzELI3jQ30pHJLf8AoNSQszfi%2BLXtDvSOItFycmGNz2H6EyOWyNW1%2F6NFKlZmmgKdOqP7xd4fMfJkBqxrfdP7mxUlV6h9rC6jpq7O2B8a%2B60mGHqXSNcnNoWB7fqFeLZs4wbieIOndMy34Sc1S1WFN6YLLPWYwOEC7NGY1GbcEcsFZ3Sc3mzb1gjMu4ZkiNnVmS%2F1nYwDrzAM8g6JrjYkfBEGOIfL7NeV64swb6WBnrOVOc0GmMui7rRigs%2FTgDO1QP2PWya0AOaFWb%2BsEuErXg%2F3p%2BOkM6jqEskFjVk4UbSFWojdtBkjWjgGAh2BCX5%2Buiao8t3loSAgtoLh1si1vIEjTBNZ3UaPM3JklHZWpqsn9i%2Bzn7axIt4ZlFHYG8B5D9Kk9VRO6sGia3iWLMzWYPgwNYX2Cstxrhz3qwh0fNty93F%2BNCUIGDX0CFKvpaPQ3EzrfWwcw63tmnNSJ8GwzxKgtQKjCQz7j5EVKj1CGQ7X56Mg1aYzFFRscnoiacolLesahX2y08w6W1Hpv4t8PeB31Z8SXB8OOMz8eKFaF1zJv4dREmxCS7ojk6TdddYTEgPlzpdD7cJ316CvYo2MN6z09IGOqUBdX2li%2Be7u8aawDH6YSM%2FH34P1HDjpbcH9cqlpMmA7pmgEGHafkmsl4OWfzqpH%2Fx0qGtPq0QmnenTHmoeAVfLEp8nndzmyQceDWaPEM2vqGCX8btNgKqTNvvnBytHUklcUW%2FqboB0pVvqc9kEiV6PBw6PAxlsQRbTSTPwZuJBRNWN39Cbe2M7aNPtScvm77lNv3tKSjgSla6wFUy2YbPG%2Br3tfgPZ&X-Amz-Signature=f0b2566caad193ff78edc4bfbd59d0209e9fc6870d9dd915e7a93fb191ae4476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

