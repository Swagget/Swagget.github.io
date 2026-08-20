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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7R7ZYB%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T152121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCW01pJnteMjRyWD4T3wH%2Brd1JOvgDWFlYpZ2L0tUzXDAIhALZS8dJCvfLUBngZD89zyw33j9Ls%2BuENtShms8DiS49GKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxML2UuH3cdlQsI3kYq3APPfBIcXHmN2SectQjvC50YZXrITSTH81YfhKS6D0qM0qnTie%2F%2FLcx%2F4FZ%2FGeD9E%2Bw4HnFSc%2F8dRWiS4uYoATTIyv4JWbSQGmp81xCL2gA%2BRZjFE8CmP%2FlbBbM23W8rLnDX4a0RWahe7%2FVzqVVbxb%2FSO8x68qSrCgy%2FrAAnOJVAQ8Bjb6vR19Wtrgd5Z3XWj0NSPylhMtS6HQT7IymFMJe6IWLBNPVRJa2c72HROXGYEl%2BMG2ZHQ5snDzRj%2BmsAeiLnq80lxCFaXXK%2BLQoCL8fj1wXyHsYO%2FTlGM5BD3BONY1Zb9xdvUD2kVT70vEf76HGJ%2BEZ6RxprsxgXpaxuZ7AReVlMHHx0wnlPrqbl0z5GE6yhyMt6YAtyWpoqovBJwqBBUWb9S94Rh99bXesAdh7n5QRzJHd45goNS8%2BUh%2BpoAgGiCMUy%2BjVravcze2k1wM2%2FMf%2FQ6XxMY8c4SXGbHKRE%2B57EK9fhQkSzZU0EwwRxfojJxzlVtCOqspXDR65vPQmOUtYIreuwHYZKm08G6cteeVK8Nj%2FH6MGIj%2Fup0sw1vjqZiT9qPS607f9ZQyb14Pu88%2FEAlEioHRJWU2dcv5XToBVr8%2FQDJ%2BWYBJzseICdG4jYKhIqmtT49UzqYjCTqJzUBjqkAYXLxqelC%2BkWHlaSK3dzmR7Djxu4XipI9PUCoEoeNki%2Bo6ctte9XmUlApg7CMRqJ5udlz72c4OFRKwVCyO5E%2FsnKUCKAwVqmhKbkiZn3b9Mdprfqj2HXvgOnYhUAZw8wVxrHDKDhqGtTtTFPLW3P6wick%2FBMTQWHnbTcbWsdJRfLys%2FUucgjLwkgGohzl9KVEtOzS%2BoxLLjUTfS8DRFJF56YU1Io&X-Amz-Signature=ab87ef16f2f687dfbe615e6cc34082ab24f73eefc4e17f1943fcf1a1ee006a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

