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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZEWGXF%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T234511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDrLQl15UuH47QF3NTFWh66hr1dEsT28XOvBl8eCoPujAIgX%2F1izv6ykH%2FExyRn5Hm2Lfnf6N%2Bza4TxH0U%2FLXkK2BEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLe0ncNkYQnkhFomvircA30iLIqOu19HtFaDv3UjAfSwm4%2BViVXdVQADLi1t1VpVvTKP%2FSxOEjA%2FhCUW0VMRYXH621VsoFRO4iKwlgDhOas7iGFwBa32AE1VWprt87SC06inIIlThw3rB7jdBpmeSxGUOViwGBIStQ6XEUpfWwORces1pA9Xw7cl4nf%2Fjg7FHlkgM1S0VVkC0Bmwbime71eqxg1jdFnBjwfbn%2BXCwkNYfMq9O3wmzHaI7tJrvPgXT7zZcSHLjHKv3rWYdmXI5aZsIq2uSUNoC%2F6C3eMg1YoILYCrdnHmTHxsLdzEELP6zZI1dqSNxyP93%2FW2rBXcLqftzFC%2BFfVYyalUVduPWDXB6XiDWHV%2F1q2xTZsMpYD6FZgayP205Zt10MClj6KEeTdfFdOxvGrjA00KVHyS0yhUYM7ByBU7hp7ut%2FWsYL1EbPox6msPyHpP24s1NkNlh1JIPkbhjxexKwlMi7hALgmAY%2Byhe1D6mq0xzm0ULMEDf9XcBbMZ3hv0PbtoEsEFGMujOY2IDY2FqxXdwQchsjcgKjHKDBAlWKJMOUi%2BrL75Ip9T54J5Q83OXFWk9F1WeoyQktkU1yqbZ6rGO5E2%2Bow1w8sZQM9qpw3vBPXZeadocssV9NxasK9NlUJ5MIbTudMGOqUBTkmhxWQQcVzL12bVM9dPUb7r5n0IwYjONLxbBpq%2B1uq63%2B8YQ5nCt6IHzP9LMhByOPBuUkasYbRlQ76Sfb%2FNOZIDHQ7WeNxnzKFmptqlho2QC2YYgKqfKpGOffmFnY3EJs134eR9EHWKqAANi9uSWiARA6utFmwUUjDRpafzPhdJF3Lv28UAziOreuAxdScuXGR5R14P%2F1rFIgkToVzLDP%2FdV%2Fgd&X-Amz-Signature=6d5c14c102c09c762610b70b43c20abf6455f6908c1cfc9cbdebae2660ec7c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

