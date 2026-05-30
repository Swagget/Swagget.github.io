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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7CFB2SI%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T142607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHpAh9JSoNZ4bgSYSDwn5tL6cIQcmlyD9WCq9H%2BLAVXAAiBfRvaBRHbbB0WmUaVXZHnvmVWgLWwIw9cEOArNuJtBziqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFTDjxEgU4Ptr9sJKtwDhYYrSgPc03imnwlcHNpYiMhPeMLuomtnrpPMsxLGAEivzHCrc9oDvu1BHf%2BbXdDzlg19HhK8SW8Hy8kCUn1gkdKw4mRR%2FhFFB%2B%2BeT0Y27nvofg2TDGrL6Xu67%2FD3p1yeFmEDJXN%2FrD%2FGvvceo2HI8MqGuZEcl57xG1rnT6Yg2DYjbfQHoIAFPWiVcSGDPBWDO8%2Bb0awpVdGBmDTcnXpLu%2BHcO7pZjGRgj91FlwBxBpnZ4%2FBeQXzM5wzL5mTDW6JQFss5G%2FKHJ%2BhfHsIv4mK8YVDlgcVK7qg%2BXufJqWURlugWtGByHr%2FmFVNB%2FSqr349WhIkyLQ6WEHq4HhwHp2W0KKcU9logqw4hnVxPztDLBUqQzP%2BnJ6joeZSZThoUJjMLngrA%2FQjEzlUpNTKZUB3F8CPYFy0PUvqZCMmf%2BjryUOkzmNSwK49fgYsG5PJzgCRhohJBOKGF%2Fmj%2BWOgfoqkyWvbf6qXxmiwftPGvfXsxZVOdRY38eNbo7P5iecKFeegq3SECB1xAWTpaaqIKxJjjD45qwVKQpzOd0bIykHHyuk29pHjVacfrilaJRTdZEd7bxbkPFmawphwfA9krU%2BziQworIpXA7u0USZJlp0DVlnXL6NWLzmdi0EIGUmIw8eHr0AY6pgHYZV4cG8uIRKgPL%2B0Artdsy3q3Pj89nz9FcjVJdkY0xqzqOV%2F03ffFq5RwZJvRPg0gaGeX%2Fmv3uDuyPfncB2coOM8kr0OOrTSxNDK6Kxm0gbnEzqtd%2FTu0th9CjJNvMBsr9QuxtNLHaxOCDd7orPD62UCDwPHxjxG7QC2bWSyjoC7HYB10V6csAp7YfZpMQL4ypwmf3EPmv7pMuCIviJ4WiMWBWLcv&X-Amz-Signature=9f02590907d209eb1eacdffc0a955cc5bb8c7207363e60493a81efc5e5fac314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

