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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622SUOJVI%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T012157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCFDPhUDu3OFIJ3%2BTASjsQufMaGYqDyrqtHrf9lJKOwMAIhAPb2mzt38Y6mRp3s9%2F2R%2FgjCvV9O0m0dzVt6BEfVjYKWKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKXC3dUfEIRAy0eTgq3AOXzDs7EqLZW9%2FsiKqPRdv4qJgq%2B15y5LvRvX5UJBrXfaFQLUjCxcJm1rmuNyaHwsehjB89wyF5Y2qu5KgYnRgP91SJkjEde8vlXFTuq3OJPlqIjSOLdXEi1MsIDH1RQHBJ4y6TlfJBOzNL1CZILLLG6XHM8T5ESojC1ejF9P9HVVa6WulWuZlOchOLfw2E7zfy6VxzKzrxWZLhNAEkvfNYKZ7231KDlEwEevH%2BYkRwhozmcC4VQ4uDpj0f14UWmOTY8AcNQe%2F4kGM17gGFOq38RUMBRxv6VxI%2FpMsrCPnT0CYO4jAmG5GQD9hvxG39giItGqJqbWKAM%2Fbq5QzZtLkF39%2F90Uhco5XvV7Ca8cQRgUAqe6jHAS61V6CPveTUMPCSK5Njwb37wZvM7YCYs7vI7nid%2F%2Boc7TWMKm4Xp%2BYXK5GP8VjJ%2BTnKCT8P8qi%2FCBBxPwQALPrgnAW7MDgcZRc4GGttzEiENsbI4wdIoBg5%2BrczIQVveKeRza5ZSZZeo8rQd6FrOV%2BNiY6gqamAI6iCyu6eL56ZtM5st6efL5AM0k%2FRs6fxiiPPPATTaKhU0VP8fWO6B7XXyu6eIBXppy0bAezeKoLzN80TMdfP90Hb8X2C3Xc47G1rpJl%2F3jCMs8vSBjqkAZeLA8LtX5sEJ40R0nFwHuKFnMxBSTnQm5%2FYMLdLojo11JbnjUBym2qWOpHDTPQrT3wIr%2Bvbyrk3Mj8Xsj0x%2FcWshRlET62GLoaGoy6XmczNylqJnfN2EnJX8onzGU9Gs9j0gZ8xPWTRIr4fv00IRBk0cVnWRO4AgImsYF7fvqSB5C4DYtP%2Bt4nyr%2FuaZSw54AlhlCIjos0mCqd8TcCfLevyKVGM&X-Amz-Signature=c78176680f75be3f0a7a0cc32984cbe513543a67513988885fc973d58ae19d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

