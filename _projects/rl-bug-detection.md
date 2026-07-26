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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3FZKOBP%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T185052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIH5ssf%2FsBuHhLkXENm7HLHsW349Riovs26L5%2Biamh8ZCAiAlHSrW1l1oIW3%2Fdp1DyP9%2BLDA13prfq%2FfHb9HB%2BWNS2Cr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMuk%2Bg0ijIff5Z3fkwKtwDVx%2BBlNhIFcnha%2F5wWo8aHc%2FtY%2FZIyQ4rp8NUwKYxVCoFbA7PMcFB5G4r9JuFh6fo8I%2BPDrptXih6Q%2FTzL%2FeLmMEncH4DlYacYvHt6C01oEtMs4GZPkKS%2F62NgM2idM9V2W7ADaWj3ewpfCMbbeV%2ByWxrVz2wvRm%2F6XSbDPYFwrL3C2qkFZV%2BOcEwBukRHywvVMQpH2DuuidwzlMsq83dFTuOPcw88NFEV%2BYg4vmHAE4p6fL10Z71ARQ0wVPnhDswnhAS%2BRZJKIvsDoTFvlN49%2BzYeV47RMUt6tBkJ4Co94iE1LKsBV89CUN2kT9zgq6VjiEOrQ3UBYc1v32wAuyxKjXAuJScy9kdiSZ6GdQrpBjx0l%2B18HjfjqE5BTvoZO7HpJYCnjuGzU6h92a0lU18h%2BruHfpA7UQFlonlbcDAkI8ka%2B4%2FlDI38G3TC%2B3eHwnbKPCi09TC6yz5TFCGhD73n3cUqa4lTTcBugQAAGJAtZBymHYjcDrncNgZ6BZ1o%2FAj6Ww0Xx%2FlC2NGolkL3Th39dKjY9%2Fx5eXElUCH7DVQLsC3%2BCkeGKNpPETAH%2BxYVsOzq9esuOWtOv3gtAzLdyCzezKrQjKqQecR7gAZZFLOZeU5QlwEG4PU78%2B6K2Qw5OiY0wY6pgGhhHBgLuEnh6CPnlTDjEUw%2FZkRJ3jno%2FOagOVUIoywHK9%2B0H5vLSFBiZLi8uVaHHwxsZuo56eRC9CyS6%2FW5I8cOvhkORR57LyoMOvWtEmOmQ9AoCPvyv%2FPK3lpoRigYtWFzeUHZDB9Sg3RYL8F9hjc7BVyGvBExGTFlqbPZwNULr3%2B0dobuaD5x5feKNLAfsPqJ%2FSEVq62m5NQPTXumhell2JDfcRZ&X-Amz-Signature=edaa89707a423ad2edd09f5725222f89a37504eb0f6340d6a9be07c75ae014a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

