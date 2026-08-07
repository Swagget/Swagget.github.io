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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRM2DKO%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T113535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZkTRjDDcXustoNU%2F68rtgmnvRgEvp8GZlpMe1ORwP9AiEAumsmx6biQMyLvJ4uZHpky8ZPwwQZ6UtlV%2FaVSPe0jscq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDN08JBtjBIqrUxVVlCrcA7OaRhImgZx1w2MoD9rURdIFGrv3anR0Xl0cHlBWfLompXzjPR7BDkmWFu6QN%2BEA%2BrFTkJ%2B7U7JRnZUM7l4l6yPufoE0%2FMDcDEMpuAcUzKWE30T8aBLtgQrkgwkiPeLyQf9qHny9ZKwia3dnW1BOrDcvR4SXd9PwWpSP3%2B0PgvPRaoS1JawrVjSerL42e%2B1p%2BBYbsZP%2BGdgZENrpiGmeBDc3Nu4tCXj5keLQjFkVwV80YzbBmSonFPiOYJDK6wkDXE0gUZmXZFY9ylW4KZAQBgUWnaHOwUNlsr7RQfBcAAFpZxXqiFDBubv%2B497lOT2yaA32NMT7aDfeD%2BUv5BnsaoEQY1vjHWzCGz5JaX6UgOrNMRBixdZrAkZb4qog9Zr8kWVf6bhuG4ZRNaYYjfGWTmpG%2FErjqb1UNO4puXFg%2FEyvEVJV92mbWLcoVMH8gEjPYl%2FCqF9xF7bR4XtJtTd6jUEKWZwRKM70Cj0QVF8vzBihSbgVfKfjDU938%2B5KLc9wPmpfzUF02t4RsYHCI3HuCSZe%2F0isNCgIXPLqLDxQTSZh5HMcsOeOQgQbOSpt%2Bf7dyNETOuM5XSbsvWwPdpD%2Be3ucJTsEnkgYupDGfuiCHCOj8StN5J5BxxbhBkn1MPr71tMGOqUBn63jwxnrvIRrbZ%2Fle%2BaRKgfEEo3O6p9aWjmvaHjRhAmO586xR6PXKXOVW8%2FqLBjywG4v%2FPZAYp4L0EY1dnk4fcEuNXFSO2Q1DvIlXHTbiSy67sIneIP97I50%2BTfY9oZubcmZdtmouNXvm0XArRTy4TCeEUV8UqBRVq84hNOPBkL0kEEHq33GR3ndUPOV00rqV8ysUUESFHYBvFMUvIMn%2BCm9gJWK&X-Amz-Signature=8470a6f3298e3f6a6b17f772decccce7c3938e0d2b7eafa24a74d05b2e1f2bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

