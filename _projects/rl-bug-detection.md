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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAJSGXNE%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T211754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC409gS2F5%2B9XRv681jLo7wx4zLHFVEgiuFV0UX%2F7ZqVgIhAKiEZbEicvfLsouol46E3JuUlWPcY9RnH646cEWCYJscKv8DCF4QABoMNjM3NDIzMTgzODA1IgznWwVT94S2zjPpJsEq3ANh3TSIJeeNxqmNRnVzU5YWHqhpTqPaEiOM%2BF3HhlJiJUm9eXfzvhVSDEAWF4NNnE15B9jsGRQHhVJ79Q7Sbu%2BIL2X4Ch9XWRdMwFiccF%2FGREgn7JVWH%2Fbtu66SQxHy8mi6HDEdIxPV7u%2B%2B3TiDnRRmBftHuFSjrM0ZiQgH6%2BteZouaEYa3wx9Z0TbR2To9X%2BVYwDoXQ1V45Uzj1DwZESLnnqmeN4OKVIPab%2FnP4fXr0yVjUQH0ZFO0bDpCOxmXoTytQK2Ym13yUJpDHhwCaWfNjwTmN2z5uMtCsUdYBO66zRNEY%2BAwnQmRkRI5EzMvJuMsMyFtmP5xAo3Z%2BDcK%2F15kxLpd6sO1NfJ7i8V4DVW5DIS9bPoboVNYGRsCcyXRzYjF6LExe28FASGsFM7SpnbpOJ2b%2B3i%2BHoUxPUu5vCD9MQJ%2Bm6JABjeE6GS7Fiud1KpDWFH%2Ff6o15JyZCWT93k21ruOY5vHO7pbtxWDir1upDTzU4Muvvd2Jh4ZMQPrAVFpgSN9EKicIfTOwEmX4U64xJov%2FSdrePFYXjZF2fqOhTNnSygGry5K6idTXxMBjWwTlAO0TBrVJj71gtMrFFQgL%2BYhHQ6MK2ekinQ4hYNj6rdBJlHG5T7QNG5O8ozCrsLDSBjqkAYK1KIqJxBK8zdSmhWHoENLCJg%2BQPdLbV6qIIA8IqMmz8nB%2FJI04ZPvzzErEO8EEWNOWWI%2BPOz7uVONwulfn36ernAz%2BQd4ia%2BQTVpZOnVv5y0Y6xgIkRAHqUYP3BcBAlhIml3OWLWZBr9wbygawQvd5l9KPpmouGgI70vwbzyeBfwC421KisV7EUSYbZMlqu7VFrW0Ed1Fyjye1wN6LnR%2FBBcrP&X-Amz-Signature=36c5c0eb754c9c973ec73388e663b877c3599c0acf3d7c5593c0d259f08e753b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

