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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SSC6L6C%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T204902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgeQ0y6otFbpPWFcSYRZvOMmqQybuf%2FPf0XY1CqWKG6AiAZcA6Qzx7PmOCut5iBG6VNvnsvHmOLBZG%2BqFJLNvP8KCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1u31Lx6Nt5lgcwhAKtwDikC6SY6t951flYDGvNW8s6I2iELXOs7hVXU2DOGXSSBVMU3C7baJYOyxM3HUHxZ5CnXg5Fz7wP%2BnoqlVDgS1DAJZyEYtGSz0tRQa7GaWku9WDAhXSQRlyxL%2FVUy7cEz6cfemfP9l2JuyhSdmlGYdDNrzUKSTvg2S8ek7OIcZuxE4gEZYv1aATwAATwVNvBdFm1uM5SdxYNip2qdTYZT5I7LBIQPEDe9uMDCUQkhWHXwDXimWAT9R7QA6nToPsq4KnoOvSvU94mWdhPb5xo%2BKhjwVL6DbbhopewIPGbVwaxJ8jDxcgmSNfdCOLTOTL2s74Gwwx1Fg4OSmhCmPhRnQ%2BQpjVKPoW4J%2BVlNa%2Bpce69SPH4d7TJnfxnYgEdT4VQvykVbpOPflTyRZUjdMYNCxL1Zf1nujR0SvbdkXNaJG7AWJ9%2B49v1yrF62IcrGsMWpUhAqEzyDEtfX7T0VVTTi1g%2BvVVHqYQ62W5pUiUPg%2BIiQRyECwMQubrgpeTloZAlfSe9o778gMIQK%2BbElQ5EHuDPXgFfMa1xp7WlfVNBwj6A%2BXKKFCup8AvzwMFauZtzv%2BeIQ5D7Xlwz4DHeOQTlhKS96hpZYkR9Z0hU3%2FMuB1znrQPEiAnr6kTi2ic94w04uG0gY6pgGFkaDeYufJRa%2BXNdrDqBgVH58wIpOLyqKOtyO9rZ6zJTLguGFfrUEuQjgttfac3PrRQHLSY4oT7LispnQ%2F2efT3AfYsxlUS8nagqz125zQe79eakiJ1w9c%2F%2Bqnnld2rrcm1WzJNstMCjwfbzvoeZed3ipf%2FJVzy6jU889ISSkjiQP3sVPAeQetbOvCnNiEmUVRiVkp11Qhjrrez%2BwN4kKmIUY7RVDO&X-Amz-Signature=89d3a9e967a0bd07e57debc5a470e7b93afee5c82b79e8842906b6759aa47bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

