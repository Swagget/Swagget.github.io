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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3RNG6RH%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T215623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCktu9RPG2vD%2F9PRv8Nfhyf8Nq2Jee3lcmh%2Bt8OgopM2QIgQAH%2FRQkhJoUsBSD7AEVFQzruRhFvjdkL3xTHs1Eoumsq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDCRUrbx96qA61mwUiircA8OWLC4NE6OdqbaaAeNyw6JrQKO08QWN0Dh%2BNHkA6sHoepKgHAzyjx7HQiAiSGDPddOlrxX70DRroZMDDOY2HwsfSrtAaxkDvgeNpsCVBIKJ4M8tw8XFVyTjJStOBl1biyWJ1rGnNh45DmN6qqvGFmCrjCerc49D06uePpg65G5bz4ehfG6%2Bt3QcO52BT85ZOPzprekAcHTLyFzQDFblqIhw1zu1xIxrGAWycy8RVApFJFMSBPDbjObvpYeoQuSTDXP%2BCnTS3P0XKuLNU5E2ivk1UBzHP%2FVZz%2BIbBHQgJbjFn3GN6fbrUHKvtI0b23nOFz12P9qlqGqLjl%2B2tyPDuB0sdHShQB7Ji9D3TqfWIHsAl9B0BN3rPaSobeRVaARPHCTOkjIDVcdwM7GcXCDTN9b%2BmibQ4DVPl6R%2Fpc%2FzQSGIyobL9JuMvLHX7j%2BlT368pwUoiEZ90LFuhLnh7JhBPFzJvVD67q9b0PWMrbjDCRDcuhxGr8KrV8rB8uGlzdlsFXTlVfkVuUsKUmQ2Vy5h86bEYNeW4%2BxKXErwp6dMDZSdbstEOX1gzEKb%2B0vjPo8c0%2BjatiLYQqr9E6%2Bxg3SR%2FwhZP9Wbf8J80IdzLFdXld075m2El3mt7vFQJvEtMIDR39IGOqUB6K6paYK4Ds2SwY67i%2FT9KxQDCDVm%2BVK8gY5L2C9D%2FiWQRrz6uU%2FW6SHnBNyM4tvms1y04FMdKA0MgyETaGCo%2FeCtoEztfMM%2BAKiJfkn6vBXKyY5ljMRDnPDu5sTuR23g76w%2FhQKI9PbokPBGxTqfng6dueasLuku1K3nMeyMRkLlBolgQFE2IUjdEf38H9txyStGl7Hm2s7TMJLByHL%2FGWW%2F%2BRTl&X-Amz-Signature=0ad0e2937229694f06bd20ad8fd02555ea8803528864b45bce02738791444569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

