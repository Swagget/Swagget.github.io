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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTKFKIP%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T124006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICnCMUydDX5kutpqxQXZR5wPla2GZG46HGouVhm%2FA5SJAiEAi3yV1ldrV5jXt1XZaWuVoxk0TQ1WQmqAKyhYTJlRNqIq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDGT8c7Ck7R%2FcHfwB%2BircA7qatfLCnzSQpX0Lva8vEJ%2FEkopvGf1TndTznDd1fw%2B%2FFyobBHHXj1%2Ff6PpgFBkMXsqgB8RkRxADtaU32LuzF9hOZfTQrUqwqbYptlFWjHddo%2Fd4YtwDbUvsGdpID1cKOiV2RKCdP%2FV%2BnNrs%2F9DkUUP%2FEogNDBBIB%2FxDv6cSzPc7aSgAZely9SxA720PqeNi3qVdAYD%2BFUR2nCJSLjIQORW9TfvWlKIwQ%2FZOt8P90NNJvod5RwbeMWqlPwCCUeucq6SX%2FGYX6pIw6PzrmahTB%2B6HVv98LsENQLNtfmaL6cKyZlqWoB%2FvFRgik7g%2BfdyezhOnJVDWVfx71muq9n67xaw9gC9C4TV%2BOW4zAqzj4s7NyADtguNrsokbeEc0%2Bo8pniQYx1WYptM6NXpePpOJA1Nf3NTgxKS%2BVUTozmYxOeqWqrZOGNZh5d3GAIHEKN8cSu3dUUrYOoG5wPA9TrOcs%2B57W8TpGig1sGW5o8ekhsA7zAkhKZps%2BPobzFYHSTdr8MtJDBw%2BRnjWbeN9UKsds23YJ2Nj3pHPhOaXgE5NGFPuVI%2FkgpBCtilXHLebR2Ts7XFq5%2ByZErJeXWukV7CUVlcV%2B%2B5b1r%2FIFBu8eWA4Sb%2BIfmERrAI8wLy50HcuMO7O5NEGOqUB1q%2B8Hu%2B36osgYMvawwRweaHVDnTTAGX5ijRoeyVU3Hyyt6wIWDWDgxrSOaK0gwy6iYp6iRM3RFIDX6wxQbNk7Fgxl%2BHrij0hXxChJWbcnbkoY0Vm3bzG1fAKswK%2Bs9SKXVKQhpT8cwO%2B%2BgQCXM%2F2MF4PyO7UGrrjQr6ZSC6aiShhwFEfNMVO9PkENCWhRJY41ju2sNbepxE%2FaSxJqhZFFgQA910v&X-Amz-Signature=f3ad60b918550df563940b4ec5d997558edfc67260c2447589fca0c348956e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

