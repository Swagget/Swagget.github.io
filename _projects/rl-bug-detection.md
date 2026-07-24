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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BJ3QPP%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T235201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBLwnhw2u2ZbPU8OPM2OvRcfvwdpBS5LPfYvrTg4xEWeAiBBTzUouMhC%2FMz7hSRvSrSqymwhedz10oHIJYnP4lkjNSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMH2uvl1hmxskkoIyKKtwDAM4CNzzN83Svy6pn2cwnhLFFesFojeMqDBlMd1WmKvJC%2FMzDDQ1%2F%2FDZmMc0OgDvhhFJ9OlzQ864UtzDqzYdqzb%2BgL3vtxddiHudnvlQZ6iksMXXvnFALygyePAdPk%2Fj7kSPNAmrmwiwkCUZjGKBVAX0o1GetwzhIGCRv5NfJYnDkMYHGCRFQKmeXgBRVcl3OU4tUxlWNoH4JeLA419EG%2F6I3zQRkMRaPum2oa%2BfE7FldttT1Z%2BrotnqBAYOJqpEhWMlHSZwAoLeypJpwt3ogKj8pHhU%2FxLHaRk%2BEIMXNPR6F%2FsQx%2FLbfJnXZUdoDR0QQLpXOw3dq3xty29%2BAD7kgkjj%2BYOMQ95G%2FwCR2%2FV4vxTpKGS9KF2BKnN6QkcSm7G7E9NhdQjXcvD8qCoLBDHLRTf%2B3KkoSWHKgwdU5brbRjQfiMzxZhL0rYF9WHQSoW9FLp4iFmksS2485TPd%2BwkRvHsCsP2QEqLYxu6FNf6zUhiM%2B7xoR1s5JvnJm4pet%2FrNcQZCF%2F4QkLew37R2sDWaUlukYzLjapr58tx%2Bnw7FL5IjAgeW4TpLApveY6jUTwDcIuyjNtgwioJZq1ZfEiWGf4FIA3RLNhwL%2B2Z2PB%2FQGrueIR7v9z4rgur943PEwpeeP0wY6pgHyTj3W%2FmURGFpGeMgvn8Y7LdwVqsEzD2XFcNMooZerFWzzgISuqIAswH4ej6Bck%2BV7WVFQ7%2BPUY0PkIHOGAfWGze7qLIYI%2B2Q%2FddwRV%2FTi7DjNhp2%2FuWt5MVQiqYyUqrvJMK1V5iegtSlE%2BEJbJkQD8121T5yp1vzx8Or1fqX7OTRfcfg83kmfyTRVXAC8LPuoPeCxdAgyFZWv0QCdkuuEZ7uPnmd9&X-Amz-Signature=122e674d20faa6029b8bea344bc81ebac7075d07d33d72645cd56dfb5f8c2178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

