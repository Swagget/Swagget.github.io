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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E35YCKO%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T174145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0pUxGr727mcPZBlwXygJL6mivCyK4eRuJs4JqgPZi2QIhALa7piHkeJcXbB65qctOwgsZGlA2LfMZHt2lcREcQTKUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyZxtOTK8FHXRG%2Fx8q3AMV5B9GRMqxRvcBXH7ONgVKxxWI%2FH6CeNd3x17MAmsMwhPwXGSPtJ68IocRGjUawT%2BiGWAF%2FYZphWS4IqTxrqSh3sjK8j5UW1I7MirtloLn7%2BTWrb60ZP%2FEkhLQb%2B9fYOFOANwl8Emjg%2Fzvg9pNxLzGShVRmL0ttz14APLejIwaxhuHbLoX9BFaLmM%2BfgN%2FipliTs9aUAHNi%2BGgjpcdTCNFpo335stjPE3odONKb2T1iit4ZHh5SBRkAiNw42yQYn4YVZQnDmtLzrkF%2BJTkFqddqvBuXmCHdTF0UDq19qP9zUCyTjz9cl69M6Sj38Dhy1VjUFxLul%2FQo2KwcybR8I%2Ba7voUeN4tGBB7iotwf1zzVIlMHJCfPAnH1a17GXw00uTMikkHcVvZo%2FZnOGYqQkP6B1eu7A6acJ9vvgnR8zM3oO%2BAGktwKVX%2FZDs3vegxobgp0hVoPsqhHyFVJht8EC11AZGLmxjaSqVXL6NjPxMKO%2Fovd7dpx0AfB8SokQWG2ZZosATHitBRXtpSmPFXOunDG%2BAdN%2FghU%2BhlC4KR2wjB0T2cZZvPcg%2Fp7LgzJQ1kkBWJdz5eZPvHVRKIF1a7j8TnpNkt%2BzcVQjcic2HHrPU1ToZDuSKuGhQPOjVvKjDYjcvRBjqkAeT7iCA%2Fhf6T8lCL1ZQ3IHlN6n%2ByAnDolTZdOwO4RosUuHH9spHYstHbEkPc8aff9nGwRLHGba3ukTJINyG3Tz0Qfp%2BqXjR%2BbOotT0KNwj6GOK8CCVF1OaIoWNbxmAkIzucYJTC3sz75YutZPj4QNp9p9ET6nHGhrgmh9lPQ9dpQOgGkUO5S3gTzU8JZQP%2B2ItSsLay4zgzMXRDCNxVOPT6MuR%2Bo&X-Amz-Signature=071c4ccaeb2b1bf8c8602f53e7ed1aa90dfdeb748350bf0c2d0cb05620e91446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

