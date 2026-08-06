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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM4OU6AA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T072953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDrf8tuC8Z1Cg99EJnIIKKu3jn7KKi54br%2BhHjSwKmm0QIgGV%2FjJbOr5myHH8Jh3yf6OHzYCyDYmLQvDnJgYmA1Y%2FUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLcBPQTG2xnJai5xwSrcA5QQE%2Fe55lNYw3GuV4h707Lg3%2FwMQ4dnz7%2BCR4sv57NOH%2BAOQsLpznCE%2FU6XI95SsjPdNUgM2431Hy3%2FiI%2FpCZPsI5py1rk5aUyl%2FMot1BrcrLMS5R0jkgNa25DYB2ATLEbjKVvjwCmkl1h3jDeNdq8mu0fKfFSBeM4LyjlOzFb13VYrSe67%2BPOg1a8p37z3OTfW2txpG%2Bu2XjI4mBJo%2BJ9XrRxNGcZ1fgmdWm%2BfUVnDh5YENALEgcAJYXRA0iD3AeW%2F%2BSS2cPmRUJaZOlLn2P7XuV3vc7WdmdNXRuVORcVgwkjdR9xRUJpei%2BRRG5FjAH1KCPS2iouN7kMVkrHORCcFeKnpsqznn%2Bp6Tn6e4ZkTgM3GDd8N3SFsZz%2BC7KzahWRHSrUHF%2FwPUX%2Fta8gVACYkYZC9yg1NN3F2V%2BhauXEtcpFJCeSxa%2B70h1d64mMKCIVbAk6YghkIo8hSRJz%2Bok0Wx1nsPhI8xPbT9WjgbY%2BhlAwEKEF1DTZEimGva0UsVQWB2l%2Bv6o%2Bx16SIDfagC5bjcG8Bzzm2VpzYaHQYl4r%2FMGZ661s5d%2FAiv0RGC3Ln2%2BUpsABzwga3VBpKkl%2BfldLjG%2FtVjvI%2FF%2B6q113L7eW62gLta3ShIhwWXLFKMLzT0NMGOqUBU9SAA5UlvNg5m54CmSqvTLOq5P3E73lBVHPGWWOCCwux1liYAaEKRzPXTiXvzPOGjMhKwhIjiYO5YM7%2BFRFcUv7FvnqsNv%2FrSIR0PtpG9cLlypSTYxiiG%2FIndw8BYF5%2BvLQoi4ROAawtG5v%2FeiV3PrNmFQbqbPZfLRVyzr%2FQcIfcVVF7Mtt4F82Bb80kYt7gYrUKTRcsx7nGh7Oyp2E68vgyL1sG&X-Amz-Signature=5936966656a9e936fbc86d5f0c5cfcfc57c448dd35d1c98078198d03dbf1f4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

