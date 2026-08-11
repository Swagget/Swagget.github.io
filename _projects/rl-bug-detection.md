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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVRSCFJ%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T232641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPo9Ijyms%2BSXxx1Ky2n3guLXud%2BrhasOFdVdpoaNfGpAiEAn8FayuKVkdy04iWTsrDCcRjyzAPluxv3s3URKfVHIAYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIi2BsTg9YsQ7Hkx9SrcA1EKH5QcIGsxcRShwBdCU2UtxUEKwZ2ZdoC102tdjAcdQk9BvwkpU984pI4112K7j3EGBfs%2F6P4PhHI1aYVRpBd99SNBxhxQqXiW1Gmr%2BLldv05qKBWt10jLSEuthH5UB5u3W0HzfKKIGzdybCQhApWr8HRxtPzP3nP1p9x%2B1BF%2FHiEtI2YGGUrOwFK%2BFRciFnEx60GC6dRW6%2FVY%2FkwG1ge%2F9J%2FXpDhO1yrNVZKhD7YTywHjDr70UURLV7K6Zu0%2FvtJBzLgJulDzrI%2FBUiqXwL5Cls1NjI2IylStDjRPoXAmekdkzpGfN9S3zYxy%2FOLnwMj8uDJyma7Lb337tG7kDygOMZXdfIA1tQKMBqmLcPsoHA02ydPEMWfpdmbUzdIGT%2FBBKs4v3Dpqamk0PTEJkpwJM4zAkHZXWC8H3CBIBWtYfzQX9T59w8EfPK%2FeC%2FTD7ONJsweimFNkS0PdY1C4DUGfu23NXDx55mh7N8koj4LEKf8vsvLuqu8OK2WLqN2ROG1XmQFxtVPaPXlaTQl3mQpeh3c8j9PPnfy5P133cT6MBwGbMK3QgPYBgnj8h0zOxYPAIqdjMTE4Qm2WjWL2ZWsWTCDY4PSZURF1QZsaVtKKFM6pOYgMXfoHrDYDMKH77dMGOqUBa2A10Q6YW6sUe5v0zTtWbGub%2B94y65lHUPO7iiMcNcB97ItSrVsKePXCvvMx8CapyGDPkropdaXTWSXqDKJE%2F1FqMozRa46b%2FW47EWu9k2lLemi5%2BUgW7xXkH2VbFhFtLHHqchgxRNBhVTCBdPeHncKSqpumncgFRhdt2aCOSrMdsq9BnTZ57mpBCA1mof9hbtCimxBM8pzIfwYR8kMkzKM6nO5I&X-Amz-Signature=8d5669a1a8d209a885e6e9d5377d1b127d1e110c4111fcfeeb09ec5e533470c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

