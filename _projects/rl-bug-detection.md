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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQMYGUH%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T055334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCWH822ftbArQuVorXv1BPdArCSz5u2dk0h5FPkedE%2FPAIgLvMbEA1ZbkUg2TNgaKRgoy5I%2FR1h3oKzx5l5488MMMQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFWE5QwSQAQgDkUzzircA%2F%2FJoJpc3Jq0GY0IydaWGwmO2rNlgzB8gOvddxS4DrGC2WpsbkjUgBAUdxtRx%2B9d9iMNreA8OQ1KAuBYkzbezYgB1LK4ehLPPbn63Hvnx9PqAKv2KunOOU9bEY1n0T2PLKMp3TJvEm5pph4EV46VE4oaNp7H98jigpjAJ4eXHhrkDavUq3VLRvi%2FbuJts2ELGIkvNyPTQhUbzSCgvIT3cW2brvRBdp3Ei%2BxhRjMcXFfcDDAwsb7IgB8lpPvuwhGtaI2%2FWH9ks3%2BTL%2BHawrnecwxC2%2FU88cKvMoj4SiRpUUWXrOQ3%2FY%2FVKfJSMX6ce2BCHkVmmmBoveQED9bC3OvR9IM58avSvwS20Ry9BUL2QN7aBWanjnWZsEc2XhT5MFfuqvMxYNPe5XvVGKL60qYP3Mp60hKakqZSkea4zMItjHgGfayra4JPf77ZnlvvCERxZMBhsgSkwM%2BuhCG8L9%2F2NLiCjJCksqBSCoQmpensA4nzfTOPyAM6cGAL%2FP9532xiNgrkHGWWrtaky8tfo8e%2F1kB3vXgd%2Fqzw2ITMuUpSNXaCMwAPQI4BOeZfNwzLjVkiwWLVC6pz19lSZRYjqCoVbDUWaDAzh96NFGFtKHbnuFfDgkUPomqIuVy3hMKNML%2FQ%2FtAGOqUBGnMp5KVTjhx3V%2FyWgStoN4MN2gGXRGeGFvX57NrbdjDr%2BqxgHuSoUTzhrMn%2FKgH1WCik5ltXhixygnr0%2BZT7mpYVEbnrnSOZKTT8lOgDUEdmuuH4RbU6BrOySPKISJ4L0ZPRdll3G9GIqMuH9VrGFoowcSU4LLQs5J%2FIDpVUbNxEP%2B7xN7djWsLHBqmlvxwn1XGed8BLZxuyRJzbllM2N4eFfUcf&X-Amz-Signature=a688bd6f158d2686f6d9c6824ec8e3ec06ed9da7d3aa1aa6f3b565c373c07a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

