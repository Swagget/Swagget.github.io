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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DL46WKZ%2F20260914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260914T193925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDT0IE4cyNxsj3TegS0LDrQwj9wjIobx2lxlXRKvARkHgIhALvknvvmxIAMOuatz1%2Fu0CTBGD%2BJSWFOCbya5OwVyhz%2BKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwf2PGRyxD70ljmJ20q3APYyrbOlYMmejBN8U8uEi1eH2Dq5zkOJWcQ1N5zlZVONkm5Jt8BjcGSEgM7s4PV0dT%2Fhm52YLVMluEwYYoMuNsqqbPkPe7bF7GHwZeMy0Tvl%2BW5b0HmFegoCJFjCJqu0IyPAucoCyiCbLssNz%2FrvIeSXi2ouAtnGWrenCKy1qeS7b16kmuI6XeXWJXv0Nz%2BBAyTovRYH8MOBiUgdFilpyQJT9qpNW1zZCgwpfJoPnv%2FlvVSJNYSkeSfuqJnhlmTaEp7OAzOYT88WGuKvjh5xHnJoJ7rt9LL%2B0NWxUTtXu7PaReFYvm3qnjIMDQ%2BgKG2Sjpr7YdFzxjX%2FvpgnfGu4EfnXTa7bD84wYtinWuds2iAMrGJQeilwftKmWHLFSm7LwaYntKMxrLTUdDDNT%2FqrYyirtgreYA8f77QC6pkibEJbxdvz6QJtLNLBT%2FKidRhlWrSh4jXYl9sGwobw3Hpy4kS0%2FHqFwemMZZ89LyfxERQ7TbY2Rg7fiRcE80IFv5%2BzcDXhsrOBtcq%2Fm8rT96zUpCnfc7wWPhkqd5QuRiDVsxTbXNrJmwecviSGDAywd80UpgPB0l%2Fjk9onjvNkjsgKdVkEkLRp8iCTPkx5S99VHFCkhhYurjv7XWfhI0jXTCs4aDVBjqkAexaSOxYDpoV509XHvbpkiRHsOQ%2FwhE08BxKXbaSBdAYLVxXpDcguUbXvHwyvX0gK5Apffi5BKw6dXjucB9wglKfJi3ogXY4%2BDQLOmiG3S59Fc2b7E7Va8pKNnUWB%2BamVHaohXDtGmnnnWWKsjghc9Wsmz%2F0UDiITuKumNBfMKs0a5jzEfHfhvDYUTPafP4GhCEwFUYKWPKTJXVB9qFyFQS99HfQ&X-Amz-Signature=6b853726f3e8fb60c45eec99734f14af288ddd3d39c9ab345de38974e09e3165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

