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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHDEW6JY%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T042727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDup7HrIzClgQ0snPkhM5rATFKZzqWi79VC2HtIcIa7VAIhAOieoPvGdYM5eHCxBUaJq4UU8%2Fni59OpYbvSOhQKfTWgKv8DCBUQABoMNjM3NDIzMTgzODA1Igwqj8ZYHRwOnqgMV8Aq3APcQVVOv7MEfNzkf8KZMej9Ef%2FObOZAMO2EmN0XzdtFsj%2FC6OPaimlUy7LV2oCt5fKXYwwwVWS4Dl2puRkZp84s35%2Fq3ZpfPeNQezMnawDD13aSzxEmt3%2FrajnwFLLgZaRaHFHWX4TT8R%2BqsGQ6%2BgW6%2FZGui3bkt3%2Fe8CKlGFWPaRiOIZQX29ZA8yRpvM%2FQX5KvS2iTPuALhUfu9ZTnhAzB4spKMzAayifLjVsaJP%2FpHDDZHKkDJRv6VjD2H24HFikxxkM0H%2BMNKk7G9L86LYLYK%2FRCqh7AMbCKdLnh594y43KGkUddeBdkKq9tyW1AC5Eoc7KKcT%2BjYUegHFovdFQ2Rtv0uXzhonhbM9XmibLQLSRGmT6SH%2BD0cnZQN5SF36nyqGpplEmcsEW8SRWnS7wdpFWPnT3oTWLnmVvydzYLmDxuzD6iMG%2FWKm%2BVPuqw4nd8yZ5X44oQ1uNVnlwJ7OZFU0jteBuQxQItqGgtYTfcKZIx2IzA%2F%2BJ14numeRxcANFsffMIENqZPraDR9IA4QHvFf6G4ZgJDN%2FUC4zTym3787N3oR0Q%2BVza0X1ILNXaxkS1I%2BQ98j0Gv5zaK4h%2FAemM3H7xPAIh4fZwL5O15%2FK2bMXRXge5DDBZqjCQrzDj07nUBjqkAbF0XA431m76r8VResvlYQkMyQRlo4Ej8QjXo%2Fmr3cxzPmjhD%2FMtDyrKHbduOeWN2wLYc1r6tSbkKEzlxFwUMFmCfZsSzA%2BMonw%2FCYcszUqhYzUhbX6%2BbVwcFbHonoay%2BbqyPj55C2qNhW5%2Bp038aEovHI8dEawkM90O%2BBHkHok5PgaNdLC7TkgE4nSHJp1tKg9ZaRuKZcvI8HZk%2B9GCYISsXNxQ&X-Amz-Signature=2524a5dbce4ff5711d798975408ea93ea4382b146f919d98287e04c865df84d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

