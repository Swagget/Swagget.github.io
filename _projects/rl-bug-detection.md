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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7FYB3Z%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T014245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV2k5DC4QgfxTMEALmB3Yb%2Bvt0Kv0JClXhAS30qP149AiEA%2BpNAF9molX6Ndub2ZElg%2F5S3YSnCif9RKGKelqA8izQqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHPWcKWk7mjECLpUSrcA5ZE%2Bv1%2FFzGUvleZrCZ7r%2FpGLCXSHnXJZCoBMTYnzUt9c9Sjwb7uT9YlgFdO85rLi6ynfjoWIjfdlmyDa3gEkuLVQoO%2FC0I07D9%2B5IY28c6FaJVb6n5TWhpgXas%2BFMRpLWcFwx%2FRACTzOhWpy4TZICX%2FfAEBfEbRjFGOJRweD1xgPsfOK6pQjNm%2FEYDKoZEPkaS%2F9E22TR6Nhxhl50gvZ%2FiGiUTbQnzNAg%2BIDgmE87zquc3z2tafK5BN8Mx0tOc%2Fcxzc4LcUFVB52rleq3nXxb9CZFiJN4tLx7nHqKX6fGaCzbomjERh3YbP8uuOIlxuFZzLlUjr3fAr250545l8rJqKCsxA5UjkuLqs9f126W7t3CB1DSrKVLh8TzKLHelmIqdllACXjicafDXT77%2Bjl0kBvuNK4UbjKQrCASPjM1EvLSTzn03XR4H2CatDWHTzBNe9XxjFskk0eDiSF3oZn15jrr5K9Ao0IG0lOR9gUkc%2FWt8vK1Cqhd3pk3hptZlIDF%2FsrgGQYY858aTtLgD4JQE04x0JBfiKGDPTnetvvoHdVS9RaZ0%2Feo3MglYg0XDBTK9%2FxcVIrjfCG0e9%2FepUDeSdliGKn7Lne37c57qHHQ2fdbkBFKTGzSJOPY5DMNHwjNUGOqUBXjdAfzPBibe7Bvucp8YklqTUZPKr9Rv9vzJP68eR4YAsZzhai0O86gyWMGsWyFh4SSFcSt4lA%2FAE7P03DMktEYeCu3Y310GTCXWteVLIu%2BRt5ZH40UP13zl2TJx8iBnm61gqhXrINC6Wu48ouQn2ImgmHf5%2FM5Irg2%2F8Ml%2FQajpmCqMIZa6kQTRHbKTHQ23zOdgx9HkzztRNb7mb%2FFMTvWHWGv6C&X-Amz-Signature=6f3319c0fe55cffc659a1297ac4ce257bc7a68c924a8d7ad7f487ab9e32781e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

