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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOHM7JF%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T231148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGC200ufKWgINMc9oSjA0U5FJMPVurfI5MWJPnaAi3MpAiAfmXOUSRvuDLwHPrGLMRVesZtTU7GxXNlV3BaksXUU%2Fyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMjQyNGS1GfIRfMz3yKtwDxXWhHBjwX7UGwQNzcQBcrNFojeZDVAyxrB%2FxsBSMdHJWBCO98xMVw6ihye%2FWOM7byRG1iueRM6Y%2Bnuu0%2FD1EmV5J2x6EC89hVURpT0SXrl4wkPr%2FuO3GMCt9DeojMILXv1zMrO1sOhkG6w%2FoXNXKAeIIJJa1uw7nNsjyrnSlcC7Vmtnv6bEOMsR84YXdePGsRhLftkw4WwtMfPHnZ87TcMMhHnoOFFql%2BhxLupi%2FfYE8TonDWEHVhaioIZYKcMpSP4x64GZyupU%2FiPAd4AKX%2Bz2SYECWeh%2FVXnrfZ7LmdfIvxYKf8D%2F3Jg%2BJy4hEnNwPR5zKm9w81MXZAvbyTa2kL4BZaZTqokLTQjqTYsmD6v41hDcAsWxH7YsdEbOrl8i82SzcSqQiurlaNrAdshEwKdGI1qm4fHD%2BnAqDGzdUgCaRes2e7q%2FoSROpsj%2F1g%2FyFKB0vtK2AiARkG3G02Yu0WIbHpUE77mTVMNvrlb9vzjqm9EGKzmTaEgH7kECKCmnoJeZIROK%2BYU4OfgVrvgutz4nfMLsP6WKD%2BXh9XR3M6ajni4WFoNjbRWcMYMWVNVFlbmoLm1SYw%2Btz0Kz3g%2BsKEuW14A74Ir7VvrKS49nRZh7FucZh8D2KKPBphF0w8q%2BY1AY6pgFVKhl0Ga73Y33Af9OK8j37lV%2BDfUJB3mxMk8Y48aNBSMqC2mBPMZyOAK3WAYYEh5GRN%2B5qmuVOmNvB1p6zs%2BosmUcssR%2FQ57P96SA3Bd%2F9SrgcXotBUruQsRjGD%2FMBDdqb0coRW%2FPtv050H66KZ7oqhUE%2B3XlwKP8PN%2BiFrspLWKr8j6xJQyozdS3Kfgiwj68TF2h8IOJ71AvSctxHvVMAZ493Q9aN&X-Amz-Signature=acd5fb00b0cf9fd75b2d6120b80ddf7001a812314f3af1687a025ff115619c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

