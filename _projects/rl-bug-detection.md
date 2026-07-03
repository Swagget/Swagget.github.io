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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGOIDZSY%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T215346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDnkj1xUTv95PhwHshPgjCPTuU%2BwLtfhpTz9wce54a0ngIhAKPyLzCSC1N7DT8mNmeXKGyxVUALfdG6iQeovlCTJnmPKv8DCBUQABoMNjM3NDIzMTgzODA1IgwyeTHghZ4gOCdmsBgq3AN1qHcf0S0xEBei2JqTTGsWWuk1j%2FH%2FI%2BGezQHNTNDcinofT%2FJ4Q7RdsOT1PF3Z4uyjTpYtN7oMNtVaF8llJwGr53tIvaTxYmFNgX9wPqiPDgLQCVD2NXe%2FQuoHEwdRHmqJaS3hWoFOzL9xqB3XvIcmM0SSmdzSzRp2OOcF8sYmjoloY8jZP77CFVxK7aM45zeauiU3EnTOGa11hVgqGz8Bu%2BXFGRURSFhOYUG8s3XaF9LJJvCr3RHTbP3%2FGj9bPcxGSCum31%2FylKYSfWgDqa%2BJ8eDKQ7B1ts7%2FBAfLbF7ilk3MRomaN0rbN7%2BlXvPgJUab5NgU8%2BdNHqlI4NkTJ35aqqx7DNYSRU0T%2B9emEC%2FtwzvyY%2FrH8gStum3q7Y6OHoTjg7xlkc7C1AGcxOLBUbpieQMlkfJ2vweKK1mhTxIJ%2B%2B%2BKm5HM7XO1Dhx%2B7xWR4rHdXjT5Br1xlc9QKJsMM8DZyOS7%2FZ5%2Bj80MQhyB%2BXp8H2Ifo3ESHCgPGrmvCICHgWnz4rFlzU7SYc3Z4Pz%2BxF03KzEYcGpm2CVdgf9HT7uJNvQcOydo5Vk6jO3RB45NcfoPTNAVABqpXWuiRYsPVk%2BCdMvJZZKA4zspDXyKGkVyklnQCg%2BMrQqAl0DfGTCCtKDSBjqkAUI7ZRx0I8j2cy7HVdA16PcxWA%2B%2F2JXbxPu9ygDlvJvIusEgfX%2B4K58tvfHCIu56vDS%2BZBBbVJvtFIZj2UH21PrJbOxwBi3baluUhhUjJQgu31vnfSkUQcOrxn0kh2aEAh%2FB%2BIXGndvbdxBTy15PFVjF%2FDsUFKDu33GIfem%2FhqCQHuDW%2BIOs8r2rLCtUVQ%2FZmKYjhmkXCVBglbZLCbarDMwWE5gW&X-Amz-Signature=b8128d180e7fe4449445a0840e15b9e2de2c83198eed2e930b68853a6b8ef2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

