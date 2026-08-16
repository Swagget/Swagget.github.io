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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HITMX44%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFQiZBCmEULfLT8BuXUdgmDe6a78V37QPeAitWMneNpKAiEAirk3ADq%2BMDHydnJFd0ZA9Kh5sN8Aq5UMU%2Fjey8kBxtYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCClbNUZDxGq4WW0%2FyrcAxrZvav9v5gGJmYe%2B119FjgEQuFu30os9uR0bIqTmN4tQ9sfTygG3yW63VefOWMYT41kfUDTmNjVDxKEVVOxfZzJHagv4uy6fjbDC3ediYdqjxtR1PZHMW9qi00uKk%2FVSW9480ZTzXoYYap%2Fv4DI0H1w9C3HU%2BQPPk1oWnJ5c2FqRP7ejRTx%2FcolUQ8e77CqGEN%2FBurBMT8uGY%2BDm4Qowo%2FrjBi84e5OOWkXbEnDj%2FI5D5LPLtjDbN%2B7hClldeEkk3JfumkFI7VH9%2Bm%2BUD11uKA%2FuhLbGdbB443qd0j8EQQR2IFP3xMwUnepLGp7nU4MXirXp8k%2BRmCQts7cE%2FYu2NPMM2GVNlU4RbrtBCeEO1ERGgAwrrWPRVMMJp%2FOyowGuUuCL4Zvr1tbvJquqeerQKYp0xSQV9VeyN9vSQj9m%2BB86qQnXWrkfJYPgjukuGf2XCOc8%2F%2FDoV%2ByeB6j%2BNK%2FyYlu%2BpV4ZL1t25Dj%2BcV6Nm0eDyhMeN3Yfo1WAG8Z9iXxmkNi7QQ058lc8GzKlIMR%2FH6VXMZeuF%2B8V1dFMTC9CnVL2lkJBPb%2FzT1jCzzBrXmMtdDsniXjOROt7A9B9I4Qyvx1QcNUcZmCm3Ro2f4BsedccZxhZFakbYUk6dIxMMG4iNQGOqUB81mOu6ZtKM87Qi4iCI6U6FbUObRG3Fb72UNraxYyCjwOjXcDFUFaKYzofcq8AWdOCRXheciA%2Foi%2B3M54dyiwMSL3%2FkEM3Tz2RUCQjL8afwMWT2Vrf3FcdrWS%2F0%2BD4VX08D%2B2FTNcs6fTCiaHZj0O%2FoHNV0LoSplp%2Bmi2HCZE3LCFtfMQ0Dv8YjHsX4r3hJkh1RVHbJfBdHYxUhiXwPX%2FEyayeqtF&X-Amz-Signature=aa0e4f1bd5c977031d7457e93481c10d167edc006178426bcf3ef28a2a483174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

