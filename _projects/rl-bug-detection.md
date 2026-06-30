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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPEGZ46A%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T020104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2kJ1jDdQH91RzhuFGJ3jkdwl3ZWeVPXygwvyF%2FaoA5QIhAOnn4peBwNiBTBgT8r7kTgM8cgRvzxNA3smrI6hTcGAeKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUu833OtCWWQxP%2Fhoq3AN2wNTVt2PolGU7DM1V%2BrWWS5%2FjOZU5ZpZ30WMWwnSKJks%2BioVXx%2FmsWC55uMjhunUx45pyoUH9BdUUH6LFjGRsB8Rh1B4lBGePy4cXGDcBQNrhFEICpeSNBz9Jt2edRh9pwIh4LIQzeVldhX8L2%2FvwToo3Cd4E956DavT4EZ8RQquYfp7uq8L6deuM6NpgsjklZo7ifkcO5YDAVqrMSEwaNMCTyK%2BfAIdjcSlNWJ5C06yi1IcShXunmQvhFrIjDt3G%2FY76CeQIx836UAaqe0kxAfznlqsHJtzeIHmItiSf6HmFbkM3ziKn9l5ySGa0TnOyzQYwtVRD9qyA%2F3eHGscuLUeZNMQcnd9TH5i3zMhO7fwqHwAXh6qiQCFBCT87Te7Pxj03xq0rwNoNULBWDREyQT4zyyZGdblYZK035MrsYu0s8g2bvEXbz9Yhfl0j7cfdXyUGMCCdzVwaS%2FxrsRM5MZ92Y1btCIMvuvlb3YfiaCcz8%2FgcT%2BkV6ILd96825%2FC2Jvw5vLIFnzlptxUQr%2FgmmGiFQo1G2wd2wpUeH7hqsj0B%2FQKFBEp8QRBBf72kJWaa0ka9m3%2FTuK7BIlVJ%2F3f0FcjyMqev%2BKWtmcyYKErSbrr%2Fepu3xZvZK%2FFo7TCHuYzSBjqkARAkEZ2d7JWpRUq8UfmJZAmGNIbKzZAmx7a%2BPOHU%2FGmH7WKmtOjVUP%2FI05oWc2i3R0DxZPDAgKzfhB6lPaYwAyXs7lBLl51dDtN49GjMQ3hHgQoBIKaQ6mlBOIV6bgQnrE7glhiHIZ4snRdkutdiY7bM6QgaxADF6%2BLVZlY766iS%2BEZqMtmfP%2FNUC3YBtyZNejCw3%2FV5RqrMs1Y9jXJTOMQpajdn&X-Amz-Signature=976e2d4930b6fe79dac401d7b3368c8b6eb07e3ace06a10fe1fe6793f3069625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

