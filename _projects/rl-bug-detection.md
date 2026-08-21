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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMEUQUOO%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T033923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4L4Ap7xLVzxaXzW%2F4aOmAXQCbVl%2BIJ%2BAfyT3jJTnGrgIgVPedK2UAE%2Fwv15ki9pg7vzh1kriP%2BiYPmSILLHbYTTcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9UnPpqXjppitweNSrcA4g0xiLqTu1CcEPGA1aKCMsFZUxxzGgK1ifek9Elu%2FjUjVRevoqyo5N4pxFq6V3sRSWgUHbMRBeDLCuJ9hrC0%2Bys027Ehr0z1DaXWneXRQalD24R9gwphQsmaNsTpidZwcESbF%2FtqstfnTWT7xgkfH4P6MLG22GTfl1NOMwZzJS%2BnKlzNMm%2FeWqrHN9AQYkc1bHQnuKss9zRS9JXjvzbImdPrKe2TFDe5kkf86V0fYjyeY057MRjzVXC39HCF3hHAEzRG321k%2BQV2G4t36FLIv1gUdhhd0T9uVLJt1AfkDF7JgSc1Olaotwk9XcRdvcsQkRyvsXm7fD5TaitNdho92GTZB6qY4XuF6TQHNmJUiNA2KER9%2BH1yQXJ1AwqmdWCoW62WLDHZd3cWdHs%2FtaMJ8YS0hcGkHY6DT6PRsobEYrzHZKbqvACIsdtwezczC8Z2pmdGKhULb1czeUKS%2Bh9BUUUe1Ceybmem6EyYk9jUuQZI3Bo4KLa0DO4GP0TUNK6jkzPFmiswBmKaMzDC3JlnQBWyVOlrH64JfwjqrgRyNLA2deENDS98f6UKRG8GpvyE1wbkAAD2V%2FkzqFBxBzaqwdQMYydOq%2BUk6ZYPl1pM3W0IyzvW6vK595ZyWkzMITvntQGOqUB150Ht5TA7UYCZ%2BfA3FmArEGLADhdYPXQN0MJZnvDA5eRcn1OIibpfoKdQfAEgJjmbR1f38XE7Khx7F%2B4AIQbj0Zhy0iWmwRa5MkTXZuyBGSmyJ4LEd6EmS8BJVIIxyQ%2BEwJC87wmMP8keSVpFC2oN7wdVG2bjRfd1hBjDLDh14QJ%2Fj9X%2BeQWzLrRORm2QcEod5Yyl4hPEcP4%2B5SQ79G%2BBk4qj7WE&X-Amz-Signature=ad4d63c6ec41a9b5aeee38c6f9a74894ca6a04f70db1256ac39f1b0e8937582c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

