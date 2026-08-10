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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNZNGKA%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T030347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BsL4dNKCdEppLzskiII7n0gWvcgeVt8Ba%2FabnT9qBUAiB8CMYHmxlP2wWjyPSfYo9X0QHVLfcn7kE14g3nMtzTHCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgirDOyy%2BL5584ICSKtwDGQ2K6KSaQBp6ek%2FNuG2deD0IMnwAxnMgKF8i%2Ftz4irADdlu0QiCwboLyRwI673%2BPbSv9T89fJilEFAnEGq3qu4v1xTn1yoPEl7%2Fa%2BYkofUSDuxX4FDzJM6V9C%2FPMzc78mUl%2F3mQuaaXAZPN4g18Ji7jFtCSHy9lhW6X4dnMNT8GLqi27DzwpFEq60QdaftOUmvZoqnyFr6Mns68LjT%2FNlvG8xUp5ulaKYwLbSdSoGzIgL8ii1pBVVjcefbvRz%2BYsPdWSqd1U4GiRvHWO%2FtAvTfZiz7U96fIR6sgH3oGaIs5fiPRDPXap7IfOTMjx%2FdJr23u5CNkI9nZm4NgYZBMYUTBAQPLXOfZnYNSqmMhYttAKNfTiGt5E63HP013ckrnOHDVATspIM3Kj5UsoCNXBBtjiSQ%2BXhvrYitKqKv4X6ZPRFBav6lKWkgPvUjJ6DLD0E5z8o9yhP%2FcMhkrbtqP7glU9CASpK9Q2YtGVshfkL%2Fq4EhQyCAVAOZ%2F8BtBTUm0Zk9lXeo8rTpu1GYtRDbNq59%2Bf5APUq4VT%2F5Jf3oDNyB7X6ohilIXKhgmjgRN%2FDDN1c7WV1oSnwXjOi4J2X3lkSAzFi5Ztb%2BD9eCte0fhRwKwwV47T%2B8VhUxyHEy4wmuHk0wY6pgEpjKmcvmzRUhjMfwPNPZZNjfYB%2BbIgSIRRdxPrnPofI3lXhdj0XdRqbwk9hpovVlpmhKNpVtLwpmWFMCnzCksYNEpISPzB3J%2F7rX25d3bswbLHhrLa80z02mbuvnxL9FvCEMFI%2Bxpvfx4ttkLMf%2Be73nXSFlDGXpNWBaNtv1hKDyFaT2QlKV%2BOUk4fZH4ozPDZ9BwDakafiqizfE0tuE0y0VIMABOE&X-Amz-Signature=8a9fe064dee0493ba3b8a3254ad0a1b57ebfd935b880ab32418407a5f130af1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

