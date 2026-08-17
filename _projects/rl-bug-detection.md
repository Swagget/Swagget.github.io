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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654Q4J2GC%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T002925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCEs3trlHIRVGfsayqUzNjALzDfh7EdvYdX0fLN68SH2gIhAOcGCr3%2FpCZ74kja4etHXghd8CS5hoLarcuvS%2Bi1ZGq4Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzZ6Y8fs7%2BeNkUucn8q3AOot8UYDpl4x3c1VsdLW8YvnrTZHVAjzL6XS3cM6f%2FZZpWjjxlcqkpdL%2BvXFtkhWQRa21u4aR5ZSRDUPbujMRPR0eRpvmxgHi2hX9Rsghs9%2FvmaZv6BlKgKHOkPqQkE2SqeHE9Y7xQZ2wzTc6dv0AeAHXcXKd9r6jYjLQp3BI14MIq%2F7cJEk92aakUYQh6BDWlNn2myZZbrxYhCTICnJrivskGIT0U%2Fl4tB4TXSiT4o%2BL9JBioqOT6SQ4KES4GPnEOTVngOJlzC9GHEE8TSD9i0uefY%2BvqPOsG%2BYM4KveptEoZF8hYbEjQ3SXcuyoUy%2Fg1DGWzvFbgyyml3MT3vzRdrLr5xlBQbnjafB5mCYAIFwo5SFu9iFsHoyviQTa7238NgMXS5IhCsaenXS96S%2BPqntlcUXpF%2Fe%2FivspWK7Pe9sGrWdvGNHXI1VGiIiY%2Ft4ZkbL6kXRqV%2FOQZvUj1Tp0m8pIyjKv0w8UHRJR3oGK09Z14u%2Bqwqkc%2FxXZEa8XXoG4%2F0qPWmCMien7mmbrXbhPP1PPjgyYhBD8G9s%2BoonGSC3WN1L6dXdhBihycMAWF%2BXKcBE7yECdc8kMAt9F3VK1xyitFCIoIwkEhbbfxXTHWnKWpZRZeS1u7yBo%2FZLjCJ84jUBjqkAYUM2n1vlRvAn6bqzdCQBgpfZBOsG6UwBR0v5lJGtmBvx4%2B1IQJRzqqT9Nv9YLqWwr%2BSCwvCnfu18fHbuQn3n1MLMhvpNR5AAV8U%2B5kP0gydHATC5LEMsWH4EPKuCMSN%2B%2Fy%2Fu1My1vzpDB3tgkJvHgSoN18q6CardrrB1isVP68VU%2B5%2B4crX2hDY1vpFOgBi24ZlOBqZAqhmIAuzYtRLelD7zwvU&X-Amz-Signature=4b6e5414217d17873842ca09a4ee39cab6e2bfdc1ca1a86de28d7f90ed433ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

