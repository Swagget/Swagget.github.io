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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDZXCEL%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T163122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJGMlaKuXFHMqqwgEtS%2B2vvFCv2O%2FJn4mLrGj5YdBz4AiEA01HhrBevGNE%2FhT3m9%2FmYGK57uca%2FK6yAkG3Tiq6sQgkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZiNliXDEFzKCCPySrcA2rO0lFd7wmvQteDTOn2pvx4VskFLF5xFdVJbFLlah0gjBIpwODui%2BBNRKptiOiRfZ0qzT%2BC%2BkVWCGpsGJPK53oa6tsbkiPRgyT8gEicsS5rvhecT9bJCRHJys0Dcy%2BOyrZTFoV4f5gCifF6NXOG2Fm%2FI75s%2FhYbavrWrZ8jN19%2Bkhdv3Y97yZCcsJMLVhxqLNauVrPym0FZZODg09Wn2VGM1lUyqqzXA%2FBIJN1SV6NpchkZQUJATWgd9k7tWYSS4kkaqdw2beAJ6%2FONKmUXSTToUS2Em%2FmBKOSL%2B1pSUK8%2FBO%2Fw3e0ZUj0neA%2FH6ReiZbcIYC%2BqdiKJVzV0rIdlep%2B%2BN8QrGqOHZOlpBAZ3RGel0892BoXqD4MPabh%2F0fcAm%2FMQSdDML%2FEj4pf6oLkXxWm6LXa3tKjy%2FXCEYWMwASGT0rOpEEU04JsHPkQV8qwM6W2iMc1Q43EMY9Sh2%2BuL8Bu88bdXFXSCuKCRDsTJVv%2BhUpaVDJIhcUiltFfNmf1vaiG5KpvC7EAPF3lKOPkylAAPvuZiHYvJbjklXb1ZDhJ4ULHhtH9suPB7RtvOtrRc20XNZzERgTy6T4D1f1WPVMSdSxsJCB%2FsQTx8AMAglHvYZYmFbxAxx8TXfj94MKititIGOqUB204JB2QpAGn7Z%2B07AnLJULPXvEc5WVj1f4BD3C6f1p%2B%2BW4%2FMWL2yuRKQUX4TsbkI1A8qO286F7HMLyhxhg8bb0en3ZmHp%2FloNWCkqkviQmCz3HEMFh9ao8Dq47FK0PLL0xUijlSBQKpCN%2B1tDRq72yBP3wgVzkNN0ysSCW06j828bUM3Ky2cqirotkO%2B9Z7kTiPePLzRbJLqJUdHFRW8vCtH9vtZ&X-Amz-Signature=1fb78e88ad650e57ddfa800e612c67274bfb2f8afd87a43e56369cd95ae31513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

