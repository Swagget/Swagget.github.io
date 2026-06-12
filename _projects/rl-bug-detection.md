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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUFGCTY%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T052328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGeUnhLyA5fWwLjz1B58kLGnKTdW2WgP6gA2qVEh3EAAAiEA2EYBbIvWgpAF6b7DrlcZy0tHLMbuY2x3cF3YezoCPygq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDEFElt6FmgOuDrP6XCrcA%2F304aVwyqtJCtAgSsZ5hMZ9xBGnr0YjoL6%2BQzNlsF8gM3nWfZ1N3uCxpx33YRV9ORtOzuWrvZwmQa2Qt2zV2THgSVcc6lhb%2F9wwlOJZFu9oMXKDL2d9bOKN%2Fw4SwgahJgNy8kngTsJ5kAPM6%2B3At3wENw0nZaQvw1WAnEmeahmKZw%2Fg4c9NfoKgDxFWJduvBxoN0S5VlnzEPjCKrhByN1TOTkkwLO9y412LBSzOS%2Bw%2B6q42LE9hxHUcxnef0CfzA09U4o%2BMN1lyjbLWCU6IHghBHF80q%2BmLtmpu35ABSBqmhiq77UwMY6q7JbLkoRzjfsErM9o3OkRYszp2dISpe858p2wmuW344zxm8eu%2Fqbp4diOxy0n31zeEC9GHQxRcFhEVx50coJbsWlwBhZDdMuDCT59XMBFdQWjzug9viCGj87CQK0tfogngcgKOmmIobOiw6NQs4mg4KKy0mHZ1o5%2F4Z%2FUTbIyZVkPyp7sV6v3LcET9hpWKQMaL4QFbnVO7nA3PvfxhzWZmNzzGRJ749WnNzAjx3Cm5lNswYcgjRykaGze7TiJ8IFfwx9SPyLeC5zfIA9Pi42DbYuGLIT4SN9MVM9pAmox8%2FwfUAEHB4zI2rIl4O9wL1grXXbh%2FMKSIrtEGOqUBzb52KMKBBY%2F7uhpDi2gZQl5by2TO7FsrKo%2BHLIfio73QZ5pDsJRzeLe12aiPfD%2FF%2ByX9LkAUDbebJr2lp%2BEmIS41bhNlKzrDRBfhAk4Wp5L40C1Q5Q71kk6SN7SmwXbPpeNkuLRZEzYQ%2Brh8xDIqwJJ23y6EqEkUmAwUS9YwD9raA6qkSnWkdn52IexgYOuQkU9maowL4SmNrMuqZQl%2Bg%2FdUbbmp&X-Amz-Signature=83354f63c4d042feff53006670728d2a578206eb8345d31e490aff548de6ae8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

