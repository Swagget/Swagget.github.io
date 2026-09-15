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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EA3NJTA%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T231438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD7scI7RqgDMNRJks4rrgirBPkk%2B9aX5G3lm%2Fv1XCiujQIgHpYTf9SnPARVa%2BFMA6NbHkYV4gVnP%2BS96l7GJZvj5oIq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDLA6iEzGTMMDzKXAIircA1qT4St48HeL%2BzhODPFY8iFCftX%2Bvv7OEXutW5TS56WbX22BdxRwgwUO4E1H%2FiQYbobexU%2F3fDQh3uYriiSn8KY8v3II9xM2En%2FmlMsOgDf26vvEWTb071zaFqm4Ri8i5l1qyb1fP4H8id5%2Fra6Tf6V8Cf6zgVJipffTgtMviVRaP0yizN4OqckCjb%2B8l5mZ6OCSJrNJBlZ0PITgCrmX6F6r9YULghfstR0JCl44DwxrE1Ifs%2B5Ug%2FmOLmNsinAblFCxVzp5mcefx%2BJPK1UdBG8YupcLlnSGx6zXRyBIdG9HiNHdiKnNkuR9%2FmeID3kzf78H7QvXAmZetVTt2OdazV8MaZKeH3zfqiVfZM0opZ4JjYcN%2F6wnmFSSy0IXmNOhhFKNEoOk%2Ff7XBP5sVTiy%2BCoVaVw55879NWtdLhIQH%2BLddarZLrC1kNdnFDOlIEZQAcpuVUKNoISmsok1BaifboKDP7n7Wnw6l5r3Oq9GMqJlekRFpKHJ%2F4FC7QgLrQFs%2BW0r1vFDugp8bFAU3yJciZw0VNmDywxVRXZRBT2MM0872kpMuVbnqoklKmJ%2B%2B02hjIhmrL5t9jC0fku8tjsKdaEBIXRlIWOgmk%2Fysh4QMUeByeZlWameo%2BmjgCYSMPeOp9UGOqUBzd%2BLUIbjYMWY%2BBlWzUiDaf7ivM7C7kNqMOr3mP3bAV2QuXRuE1T0k%2BV3A2h%2F4gMQAQuM1eRyersdsAlNjq5CV5l8yBtIbyJG%2BsC%2Fzc1gsGPGbykExl0kmgle%2BPe13Vmv9KTNDuDaoEpwtegI%2Fh%2BE7X2Do7rYeBLoJv3frCHgArdq1zCc9TF32%2FQSM8BYcQmT9Ie4pLou%2Bd%2BqO7p%2BQa6pVAfUVaF%2B&X-Amz-Signature=8c2a841df4bfe307537c9689cc35b6419eefe5d76b5eab49b93d466103f8c3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

