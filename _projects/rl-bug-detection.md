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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IPJD2IK%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T145215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCID007RqUQ2aZIu%2B9FNQsPtWj%2BwRUPSpPSloZm5qE8ORaAiA12fiP0nxV5UTrIsoQadsMcvBbQe5SDFaBU5ccKYnwMCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMviqeq28CnxaGv86zKtwDoFFcTObRHE%2F%2B6d%2FOhHBPDaiacMqjd9PviPjVWhkwOTZEQ5mtmP%2BDE4urW2zK2I%2BDe9PzjzhURQGcSQqWjv31OL7uV66ZZeLK6%2F1ghnQEcAFbyHW2Ygf1QY0JoRLfPE5nN6N78yI4tDoRxI%2BNx%2FJRbXVtEQ0OdFLeThmX33Qo7uMvKoXq5r4U%2B%2FvrkCcf5yjPhkLTPun99Gnz9xlx1oxtlcWX379cmxD%2BFac4532RXdeYuYp1mA5%2F4WLsPBM2Gg7Y6OCQfIDQaG77%2BypDiRVALFu7HRDdfi7PydwyTB%2FXRCnt596VupBAP7N8mwdEpofs2bZWeNROJCbGVxWPsJ5m2%2FRDutH1%2BUBpy8aFQso6z4OEXM%2F6efqL6dAIB4tYD%2B%2BAJOKZobhh5y8V8tQ4tseTbUUhzKu8Fv5SSzqWIguWlnQXCC8zHbXsZTnZ2R1ZY7dc0s77M8XefF8eKaY5XKnzUoW3n%2FMKSgVBDRW26PwvT6%2FaGuV75pZEHsnh6QoKnxBAwjaAM6p4B21z%2BBKWWZ6DhjynEFWSZHNnmG7y%2FFGaNOwXOx%2FCOS5cHoPG1UkOGD%2BGzsLFIanAHRhIHvDsDtZjx4mMxF7J5rdaANETSljYr9ewIR0RGsK1FRruELIwnpGD0wY6pgFErFnJDdVZVvuOcKKtUr2lL2WKCtURkYqUVFZ4PCa88cBN9r2GknC3R6SgiNo9iAUzduyDrA0zFfvnZMCDKL25toz4uZTavx5SwJMnhq%2FTLIn65wIIaz%2Bo%2FfS7TCVNjcaqi%2F7JDMBp%2FuEvMQQmuI23uK9VsA1eTDF%2BuiT%2Fr9HPG03R57CgcOePoG29c6ip6rKSrL9Py3r%2FV%2FGEcl8jvpWMtFyMhSvR&X-Amz-Signature=ce3dff3fddb9e65a4493a9913ca6cbfd93c9e17510921d5fbd1c74ea84587ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

