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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRSWSFZD%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T072550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoeyKYXyEUiU2QqXSJwMBnxX7cYWVfNeMdr8GI5v4y1wIgfGJGjJKB8NrJIWCKpxS%2BG7Nt1Yj9b9iCCrVzMPOqSdwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgX6tKIdIPNhHXAQyrcAzfe3hGd%2Fll5lAAos4RNf%2FdFmP02mREciLMvyEptJQdQdjK%2FoJt597gqxC467rZhSb2wb6m2IQNjYHeG3aQGDsEch6UhFHtBKAJwkjK2NtefUBj6a%2FFJCOnEKLq7GMKMpQyAqQGG9YsezYeZQOM6snmrcY8Ej85Yv08VymWPAnbcgiX%2Fq914XcdjzESia%2BeE1GUGLDKnbLH%2FGCeczf66RDKfA%2F6aKgH%2BXDxlJNE2LCajEy3%2FwqWZEK4P6OvG1u8DowYvjT1EAO9XdURUTQ%2Fti4rQfcLdKz9akf1WJp5ra9h2jq5s5iASOj1Ji%2B5weqNnUVpE%2Fb3M3VTX3ebPAYvs4wCAQCkv3euoccD8jKzIXjAD1ehzvtUd%2BlCxbFLydJAFVJXct%2FHCIiozg6e3OYsPjVGklP3cBm2ZJ6n4NKtBlige2B6BKHBzPl4PJkF0mQf2f1zdYjEuvX8pm%2BfDybL9haBAmwAjbrXMlGFM6Qc0yP%2FTIZ0MxbJU73vFCOpSbMLPd8K8jaUgaM%2BI1p5kplh0vzu6xerh3p5PMRkw6IzdV9HS5%2B1J9j8HxuTFuTVI2%2BRO%2Fm%2FKrtY%2F9vohrDBvls3govIUb4SvJFHIYtEgsBr223EvD2c3qujyFwA9E3J1MMqp%2FNIGOqUBopKv4J5rd87pKFBLXO%2BrKL1n%2FEhPJ2hOL%2Br6VF8HdedzinBZLCVZ63A7zo4CByYd099RfMDf8x7dpldYvxj0GLOZnxbqRG6vfh6mzuurOOr8Eb17Ak4kXKwSB%2F%2F9l47fldBQv1rviNzNBs5f5ISMoRIJAyqlMXF7WpGu32FGn%2BeJ1deCud%2BQMxNafhI%2F790BV6sSkjIsjYzZxpv9kaa2VZHR7ooN&X-Amz-Signature=617a4d187fd6b706f4c21ce7737368815cab09bcd9c3f7444e66f66cdeed6397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

