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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGX32T2W%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T070417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCYB8zUrV0b3utlVCe3mqThP0ZYuzaC9vrTIuV%2BO%2BkHUQIgS8%2FeSFbSlcPxYTEC9Sw66h5c3wxm7M4bpjYUKqVzKMAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDMJksVcpV7BMP7WB2CrcA%2F4h3ZGpf6ti2BjXzzQK%2BuAevSbKVXIkWbAc0YyHqMvarZRnsEVYK5doqSqDwndLJ5JzT9Q8a4yUaliHrAbHOWz9J%2B0kztaFR63Bm57He8zu8y%2F8KqXLdtqv6zNdmpmdCALg%2F%2FDs0bOJq4vGVVJ7UcU%2BiHxlwb1AFRVasQwYVpa8PguShccp9nLnal%2BvjoK1OH8IJgdYzhhnHPIEQuYJTyhQFPspOB98h06zS8ItAEsor0A74xCWH9GprGEwSYRJ%2FJZwmSLhANVIhrIp6KdSegxyI4U8jgx3RDx4CMlB%2BzSht5YXisVj4PRJhdK6SRXrf1ISFPLI07T%2BNLHAHs%2FWnq71eVfaTocfl4ZXVMzszdAqgZXuZifCREvaf9gVOGID%2FtHn%2B2gjWBpRVmWCj3VHrrwRECLaxWH2wH98ns9jyXFxa6vogfMcfCE9Lt9DZLh8AKEdIiG0ZDO7rCJOGApZwgK2mRnrKRCpnOBBuDxVSYxzmwpu9uiQAOy3rr9wElBBonRcqlvHaiulkreWb9AMWLSX%2BuKFLR8emVGKxLF%2F7Izn%2FohkXyAi%2FEKEoWfA27DiCXRZuNgfcPyWL%2FRMXiGzOPEhb8wi0D8yoccCqGwjntxzQcbYdPzVAN88vpRrMPKu3NIGOqUBqPL0aNFxgiMOH90r3fncNJmGm10WSkd1RLARI96cAmoE3Ayq9ESiuiqcPMD5Hjy9%2BVI9QruxhMKDl93H8s6tAkq7V2e3FQ84a4By2UjjwLgEujD%2BVcZU4Fd0ZBKZndc7%2BK94Ufavw9B%2FGQOjzbV52lMFPpKyXU42GBFyjGWT25vSGInMVos7gB%2FRriYZcWrPgpgCZXsZ%2F6D0p%2F6ldFwbIAVbJtR3&X-Amz-Signature=5dce42922da0047891445bde5bf547f6e8b948134e468e29873a02ead2cc75fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

