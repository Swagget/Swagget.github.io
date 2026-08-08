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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYCMUDO%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmswsBuxkrnpR9%2Fb%2Fud9De%2BDSx%2F5DihXZcsrWkQjPggIhAN1WCksD0RhB%2B532v1VVu1LmoJrrco0CWxgtY%2Fpp2aOAKv8DCGIQABoMNjM3NDIzMTgzODA1IgwX0K96zerc6%2Bdt8L4q3AMdbW7S3NMaLGEd2CJIFWg%2BzaPwJm2%2BCBokpnICNYFWroyVAOp9zQHW96z8kHW9qNMPDXkrLF9mHdHiZkWcq0HbGhFvQ0FbASmJqbZim%2FiPmlDwEViIXiDW63fTG8BlsCky1M0vtbWU1EK8dx6JG6RV79drTRbnhnSAoTAb4jh2ve7yWHzgDFUYhhYol1Ju0SdurgCMkeVfxpZQRF8jPfz8vbhx2Ns7OLkfBpOpGKAe9%2Beu2Z6LNJV2kzWjSfdlMOncxMM64UX%2FPK%2F2%2FjC%2Bp6c5Onrl7gi12IpgQT3EUPkz11MbMk4SxA4CC44%2FjDErQR7maXE2pPSyEifkEYjWZ1vWzXMUBmMFNn7J445yGcBOET6HQ%2F1%2F4DM%2BcBAneY6N8e9K%2FbaIeg5UOT5KB015KDhlqnHzyb7GASUCveFS5E3cywACnopme7ipgqcaggZwENng7%2B588wOhzWseT0fyuWaV0cezNPHuUvxOWNQ4PgthDo0yR5nE8NDvorcePX08QeXrbUb8bhNG2TlxR0tBommiUSYt3QDxrSljFIf%2FwpDHxv5Gj%2BC7G3Txj1dCrlza7Pnd%2FRe3HZ36ICu1k802sQ9S63hjixrRopjbvu9W34tf0Sw747m0CdT9N5%2FYsjDa7tnTBjqkAbRo4ucTyf50hKp7BPDgcsN7WLVVZs%2Bvc92AOGxklqIwyaFCejPlfYptdW7ErUTufAdF4lb06IfyN1ap4jR8bAOs5wlXco5jRdPIK0g0deD5QHDIUPqmFxbEnMBj2WTYxZTU%2Fio6ntmoMofx%2FvTNZjupic%2FJHuRMk2bqs5VAwpSqyykTPlDa6uS26yH7UZ63TI867Khw1Dx2X19aT48HnNslpnBc&X-Amz-Signature=8aca1d1d7452c82a7d4c4e917fa2aa837b87255a475d6cd553f3e3aa7e0d9295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

