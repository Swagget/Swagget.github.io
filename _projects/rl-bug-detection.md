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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CJJBC4%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDxlbqHvQ9wqGfPDMyt8YRpW3tLqJhhfnpN9NDOvLeBaAIgKeFzLNq2pwHfRc8bKT5SjzvDSo2HX41T3%2BZ4YWpsA8wq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDKGu4IDU4B1GxnXxaCrcAz67O56lALLnxfnsk3b6I2Bu21MDO59XwB04KeY1NY89ADuZiGj6YYzFzXFXS%2BZVWQ0CCafZinknK1sMFB2m3fF5pK0ZfhvsJygfvxspl6tFP1t1%2BnVzY3%2FaVSjLF3Ft19jW3BmlYSHbMyHP3KNgfD8Rb6QyCCQ58WYXOisw%2BgelOyzkE%2F7alDjQLgW6Y%2FyNiI2oF5ebRXpY5tAKKexMC8Yhs2jit6Ns2zmpIsohj4hfyJC1Xc%2BJhouQsO7ZTJKlgyjG34vEg1NSumZYCWeKHu518fAhVoQHZJ4ez%2B5mTFZRYJnyb7IHHmqEjJuSMBiRFLfGCqkNXdjwfGEFxSmj9ozMaJuhYdmkXYpae18ki5u5KFcPMe%2BCX%2FJIbxbhFDGOnXh6Ojy%2FG7iLVUrDW7%2Bgr6ce%2FcYR9%2Bp6RVQbK6o2UxyjD1W3wF0ClH7wx%2BWsnLiylxobsvP7OUFShLwIIErstcKpRz8raZmL9SzXRxbRqgf5PYEXlrDLeO1ISx1vmD4Fu9t0kSxkshtoiRkoPpAJHgxUY5R6um8L2JOF4Zfmf%2FVriYxGGzTeRt6XkPDXMWRopYghGuaU5xF%2B4V4fOiwPnib1jIwsaAmEBxvYYusLp5yhGdrL6n01C%2Fq%2BYp2SMM2tjtMGOqUBfrhAldhulgeydOxFsu%2FBA0uGBQNTMpd14jg6GWUYazP545KngFBe0zvzuoHQ9Ut0%2BpHc3UA4SZoBbyM%2BZGfiMed7RAeb6WESNnd76wmCK%2BgojIFHu4sawQjrfC7z4jgmGy%2FLC%2FqD%2B4WlnIvdHKqMHuymz%2BZEahb%2F1bfDWYKrTOpRh3taV7%2F70dectRB0izHVF8lyYfRvb9Th0AS%2FwcG%2BjpNGefe1&X-Amz-Signature=b04e8fae37f60678034b14e53d13f1c30d4a2e85c09a7de1b495a35cccb390a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

