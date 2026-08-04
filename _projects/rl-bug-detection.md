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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MVXXPK7%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T191519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDC0wGlbrnQ0ShNQabMQgCOPXhapzOezC8yu3QfZqspXgIgaiFb4tBui6SAlBkQEW5wntSaFcj2rxzUI31llvAXFCUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDHl9T1p45F3RAalZgircAyUY4WnuG21%2F%2BJz5U1DoQu470LOnkxpeMZDlrefXykXpXXlba25ZM2i9Zkrb1d43WCsgj5UKVVMg9d9IVj1UltdQe5OkH8n6Z%2BUpIvnfkcyFEyxumCs43fOjMKgrsvBiS5KK4A7MbRCui9yUFj2YkCOr%2BJdmCz4BpOspT3TD8u9bNnyw%2BN9MWQycyp3WaSRzx91BF9sOhccDtGQM%2BYa8301N5a6dcwDHaWF1uhXsz1%2BuxzJ9yN58eswuTvNVy6AdaxcujyXP%2B0p13hD7XCUN%2Bo%2FVQ3LvBPTi7jbR9WWVHj%2Fm8goFapws2xaDy9yySOjiSMepeeR0Ao5Km%2BFIayEb4oSCchlnaDBRliok%2BT%2B8kOLXp4F%2F0ezWmqLFLRMaQYWUyiGnsmgUROO7X9zJsvvaYrJtIXHS6JgpiYxG8xUTcLOuZS8P9Bia4w8nca4PlBRYHB3aJfKAsYWn3Xs5cUPJCLXgLXx2sKjJ2jrxjygm6fedwsMHdqDypvXzO16LO%2Bw3LhwOwycmQs4FKOPQfAgOOXEi1SK41PCyZF7eAIXX3YiDesI1Y4rsS9KQeN2oEnlIZx8YI5W0shf9Gq%2FXVykXGUtpqv9rgrt4Bhn73%2FmbeTk7nBcYr%2Faw01FLgNjPMNyOyNMGOqUB81AChC3lI6m04QE9owj8Pvc%2FSKG6Vq9iLagBU0vLEFOlB%2F64%2Bo7cnaLH1Fz%2FeUsSsAOjtZv1WLglp5Q1VFOhZH4ILWFH%2FrIRs7nsCxssqSju9kcNV0XRGvBkiuBT%2B%2BO%2FrlciAVal7tYt0mCU7DrdjxVJLyHaUnRO1WkpdY9DxqFML0MqGOjVvcp56SUlpQ1UW4MLsHMeSrwPgAbz4U0zhALVTc8t&X-Amz-Signature=2629a699319b158193cd7556ced4bc2c1f3245485b6137f604c813ef9ff23cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

