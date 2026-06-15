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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFMGQECL%2F20260615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260615T035508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChWBbrj4CJ6RLt%2Fp%2FJdPD9Bmu%2FZHKCS5gPCA%2BxPalPXQIgSe5gJ0khBD%2FbkMRFS4C7ClOcgUnPu%2BAufGC%2FmODDxhAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDLfm6eB0p8jTCT26oCrcA4Q%2BPCzDWQFZuADtj%2BDJYcHzElJRrYpjMCYegquVafMwyiVKJ46dr3qv5L%2FHj0QMlOXGwcYZyDAVT3EKbf6PoUvQSPt4SlaCz59AAYXdlcLK58QvJspPRSlOLk1qR4boo1S2loMrIwN4LYkZX8Bl3x29gSR%2FOyhdQsh8ckvkYKSaSOrugFK%2BcmIkNKf3TAk%2FcKQQITcWr6wpTkw4Vn4x1WcWi0Ts3htEeAZa7DddMTisOrxwaAI7W1W5LkMQyYsuUbwuFOrYWbDxsMoQguDiIWdnjI1mxkPVebkL0AlrAxyxWJs1ru875PhShLzSl0LlPqIVVWVpRftM8demnpDM0tii3uzNcKva0x4E0zpwJyI80iO0WTtIHCwBU6fYx%2FFreR9U4T7mZguSI3uwXKs02c1Nhoc3N845ErhUBjknvdhUyu631VPEJ4h5wWxPJcneLJ5YA3Edj%2FsQenpgoFErpxiXXrTlIQA8HBgVWJHWvNb5r9nuRLZ00A7NrBArJcBGZ94DvmcodZGaKALnVQ7v2zt9JM4%2BD%2FnC3BEhLNchOMhoESkaMg7cjzQ9WGOdSxRiyrExFo08ebfViKpQQS0sPrM2XaLJg1IGXAtNotaLr1bEeqTK9soLYvc7A9UHMNicvdEGOqUB6Iev4tJU5Dn8q7Zfmn2yRkFbWJGdMgKzHy286fQzNa8F4NVbVe1LsN9wKfkszzcagbcStHYZV8awxDBSSK7oDN9EkRI9MKft8VcX9Yw9VbGAr%2FnYRlkGd7AcpVdVkSW443ajXM1c7HQmDKWDku7fiQ2DAQB8CdzQLDShGgiLLDrV9UiWsRoMAqebBJE9WbhNKZBbtqrA%2B0cCkDt6JpyooF%2BWJbeS&X-Amz-Signature=e08cd2f304bc46d5abb5511dca966b3c469c8c100eaa7bc553afbbaffbc8124b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

