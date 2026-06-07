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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PL7S4D6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCApsvPzCqWsJPkYUh8TvjibGxRQYb64H26AxBBtfwhLQIgbawYxTAH%2BlcuGDE26L0hA806rj3fvFBOvI1K1g47%2Fy4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwYptsSMEbU7V4AwyrcA4LpMpUqdKYquVoNSnRrf0nddVljtfuf0OUn2Ze%2Fz5wjBFSRyPu81qpUy1GWGI926O%2Frq7Evu2fJJp%2FhD5dfsap2fMwtlgFsjmM%2FB15A1CYuyxQv%2Fi%2Fz%2FQGr5YpV2bvfAVqWp17Zfl22nhnG%2F8NRaSrb8VcAoNaxlFKiEUl2UQK9m0aYEJATSF5%2F8%2Fy49%2BrpWvT4vcIwehwtx9S40x%2F3o6fWE%2BA4pjWN6IhXvRbPB0d2Rdxmerp%2FUjYaxeoQLpuB1DJKSuj73C02hRM9eEPwSSdam2LjkbKd9kAeQME4c47NaWMqFaKYm0DqXtkqH7fvavV2mXY6U8C0Y74ixvv49g9%2BOnq2s%2F8q0%2F6gFwqmMp%2BvIRBp8m8UCqU%2Bv3amK8vGz1EmHkk0n3PsJevvEaYEo%2Fa2%2BZyv1fTZhoc%2FLH6nQ6wwyfSiNmH7agIjTNCpR8g%2BQkT6AVLxHckh2evBcG0EGa7hGJriap74MaHrX2ToZirnRIa89ukvGRXrUY6JmoF3NMGJCssjruKFGcO19H0r82DftRJOurG14k4mmoyX6CL4HkftzwzzmtgFRqn06Ku5JI2ZkrIHWVy9KyF55%2F%2FrC1%2FICbeZVLRQO3MCcRIiAWuDgD7CbeJqBNKFLJK6MM%2FDltEGOqUBTtqAtVL2UzTXdMs7e%2B%2FmxI1OZJ9nJdJdpwSqQRxwMtGiSo4O%2BF23D70H%2BO0mC5fASy4WONsgmpGzPVn0YLe8Jq7Vu4TIKMI8hqcK5idewtuiy16SEnlwlzcq6DkpMQiMMHUL%2Be%2BPgP1B0f5AygLfoNTWHMWf2F%2BGg%2FQnq8ty9ktzzSekOGGGcOSD1AjDZkOjgg2vF9xmFjlp6vxwQtWLHlet9E%2Bf&X-Amz-Signature=9f8921b6de6358c276f226665ded8db481a2b41fb0eea13bb520ae5959b34db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

