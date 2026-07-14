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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662422FEU3%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T175437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCFcAwvmGX9gIHDeOkzOc%2F86w8EIWGfUA0JnCRMAxBdiwIgaVhDuJxEBltO3YIA%2BWs9pDdbu0Ad4dJyy2z05rPucvUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOjq%2FaCA6nlqs82QWCrcA8yPX0pMNutrsvFKYw7d7XoXOrEk1jtQg%2Fe4NVsqPw6wMBbf0%2B%2Buv5jWyX%2FVzibLYt8r0ZeLb5b6ifr68dzF6HV%2B3CHs5EWAz5ZLMJMStnn%2BZiymmCdmvwK1EKv%2BBSrDuLaz9TeJ0vGlpy9fUseA8Kj1zNeU5zvRG1xTIy5%2Btgp09HW4T1RhTGIUeV40UH3Vu0HS3Q%2Brb4Rx3RjPnSNOSW467N4YBqzL6dbcldHxiKXTtkhT2jrEPjFwyK%2FFalcCcb4WjmEEZJTv8Gw3nSA3FP6RS%2B%2BRmEOMKWtDnNOj3I4n%2FUXHma5HETzE33TsrS2PNxQDHKBKJg82xEz3gt7BmLI5jf8dsR1f6gJgDfv0ZF%2Fq60cVstAri2%2FGhTTWm1HvoeFeSXSij1EPM%2BMA1WWg4AnrjCDy0OcHbpPLo5ORVUNSGgu7BqpIVTPerReHibMnUJHtMDPEefCV2P7WaFQhVqEerVXWH1uxCq0EYxFqpGVajvFgOfnZhY9MJER0yWpbHcz2rR%2BPfFxv%2B%2BJ9UX3Q44%2B5MH50rwD6%2FyEmQRZ0bExeN6napT%2BYGlm8Y8E4oJrN8OVHYW%2BuyiKq9cYZIBRO7QwztkYNvyqiwEkTzZrv0OuI7o5pJokv%2BhyuN9uFMKHj2dIGOqUBIb2R1FVNWpc6eysvoJ1FbSVikMXPU6Bos0aq8cxHkKh5OY61yw8YzJRSWimKwsHu3TkcvepkR1z2cYypq0rb8KftJqX4WQlo%2FC%2FTDpM5JFmyggXZ9yoLxiUYRy2Je8vdHThm0J3pahj0D1A%2FFr0KOYJunYKv1v2pJxxadq5d5Zrurs3%2BSls7MkF%2Bp5ftvPGaLdLnovOJNG1lbobxEmOADL%2BExUrz&X-Amz-Signature=d546dbf87aab1f9d365a3df2dc33c8f65b3c5fd868b65b33d81c1cb1d83f95e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

