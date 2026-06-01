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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFWJCISO%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T222810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGuESSSsBWUbhwG2q%2Bksn4i0VoUkR4rWIpLf2pbCqp8TAiEAyTN0F5Sqa48NFdsWz54Ob2IqvCDV6gCX4F2mN13yGN8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDNO1FZZmZLhs2Q17VyrcA6cVpDfAegXkrFkWKQ4ewp2xA2Kc9TvM%2FU9urvJcA0dPV60nTf%2BJNNvio%2B5x1eq%2BBp7cv3ZwjHtaze6CC90Di6%2Btnn%2FDIdWHVMklOFc%2B0NDCRQeuJXGsfGxXmvYDkX4wsuKMbxRsAEFenFESdZpPXV88M3ArIxGoRLo0mcjUSFMd5mP6uN35k5Oskye4B4mVH7DtB9m41dsuey22Qlz%2F%2FIrvZadiyfaFmQqLPUjhg%2FAZ0NnwnSu5j%2BNSHWEt%2FMLe6rjDRvETiSn5Mo8%2FrqXtmt3P9EN0u%2B26nmSB0MTOEPiNCW9KCBq4U%2BL%2FNMuzs6qps%2BnH%2FHfwFcyv4Hzsw4vUP5tZjQrHYTmGN3DBG%2BWCkXDIxmOkM11zAiy5bbca50lD7eO0uFUf6U82ScR0lmYSdbzfxSwBLZxJ4TIeUEpbpgthYTB%2BhZgeHGXja6LbrWUrg9YPKmM8FISa4%2FynMTQymlepnY4uO31G2ZO4SgWix3c46etexUTPKBF7Nd9qGN9SKgrcZkukJgxbxYgllZ6qvN5vlYnAZ1Y0W2PyZSdi72E21rY6zU4c0Wx4LtIVUtNVT27ODPFdzXHpIiSsqCC5GhYs52KzAIbw%2BYTDEdAciQGu%2BZyhf1lKboQKJ2smMPbp99AGOqUByhn674FCUdD%2Fl5gshGnyzIVgkKWTHGx04EHve9mWbyFX%2FxbX0VGTurLwxVFNGYq8HVwVjO5lH3Nn%2FB36PRnkfP%2FXxu%2Bw8o9PW9zVumuscp%2Bz3BuESH8RbJEfvIE%2BpyUBQMsaeBNTpJHMLulHMD%2BsAlB8OAvaCa1bv%2F7rep3YX%2F0MuupgAJtgVAdqJHcAkMoA4O8ZkoH2s4CvSf%2F3VWd5onWX5uG6&X-Amz-Signature=0de7b3492f3a9a8af0778d0b840de492a8a228dbfe54c7881b10e2a48d29c2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

