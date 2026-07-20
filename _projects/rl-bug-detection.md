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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKORKR7%2F20260720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260720T134206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSpmN8d2GHdnvZV%2FHW36EziqMUj%2Bm9qbH6v90e6vPPpgIgSOAJT%2BhV%2BSYdAt8a5NPqDJU1F%2B1%2FwiC5x39TfVKZJaYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGby9qHA3eBDmJXlircA6pTfLj%2FEeyxSYsCDOyxcfF9UtYydoeOnmoqsiRHK%2BiGZCFN8BfKyIuz%2BV0eMPRr3nfSC3UStUmiab26KJ%2FBtGDo7p2rvEQHMywTtLVQKH4IICSG7gcyNvXQEqjeHo%2FOyJ8PIOpa9UE6876iuY7DhuOfKrLV5%2FZY%2BjDX89lHk9upi%2Fpa%2Fz8y3VueDk92cPymZC186zw3AW22w0GOIOwJOFCvfh213HllRMnQRUzy1MMJ1ZDYjDS7hxawKV88mO1czckdvaF7fBZ9ZxN8WKjfQuy8vKjGlj6%2B2gd5Z5jjB2R77enn4NyuAcOVZV4deFfBgR2En6%2B87Cd1BIJJtN939voX5Q6WMFU0lJAikRlJwiMx2J7lpfKtrWghE9s18eQlMB4%2FnCGbQF%2FQKQ4qXvInctijr1twH8C7fau%2BhpuGeX6J9b%2BW8Nigzb1DgUtcbqQszJ2fTYkzFi3KCgKhbRKXfhyQfxHHBURMLSpbDorizf%2FHIIAXwdw8i%2FWhJQeGQQTzhP%2BEsfmDF1wWdJPjJqQFIx18BOJPT8RnmtaxvXPKNe4U3U2F2SJ632gB8SMQEbuo1Ym%2BdQDKktthkEhUtn1zThzlU0tSxnDnz6PlDzJrhht4MUmbx62EX%2BhjZOs5MM2r%2BNIGOqUBOgKnzBVsfwnFG6e6XsjU%2Fk5OdWl2XOMsdpj3HsacVUS4jHy3aFw42oeIYng0RU7MSVggDDUmiMkaiYVofEEc3D146iGtGqkhKnDOpO08NiHxGf%2Fm3ai%2BgNcyovc%2FbVte2z9IU8xrhiGueej3z09ZRQXuRaJ8Di6%2FsnYVc4PoQjLVLfn6k94rCN7Rk6Z7Os5QQT2xRYkarzs7%2FWzNHBHKt36VX00Z&X-Amz-Signature=ac57744ba9d4111796c72690838b6334e411adfc7cfa54383636bba027b34196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

