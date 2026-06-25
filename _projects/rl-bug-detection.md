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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L6FRYFM%2F20260625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260625T045554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIFk6RU3xpoEPw9YyKn3qKMfWSJIdeBAOhRk3WrbG3lKMAiEA9fbhsf1HBC7g%2FUy8oC1OPH3pYMfMvLhTszHE%2BoMLMvUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDB%2BIxuxREmOKzfqqQCrcA%2FtF%2BpzSHbb9I0Jmb9kUqNdx3ki3HKwMIe1Wt%2B84kVafrNuLnEAy92kWWIXDiDjygbDfP27tOCkCCZiPimuKzvYL8S3V8kEVyc4Ya6AXN5JmEKhbt3OvBAPHJfsJ90FmhqWfdw57Sty68pavlB9RjJbw6nIyrnuCdTf4Q4P1PY5B5c%2FkfEGRAqchvf2A7D1%2BpM8%2FrYKbeTOOwEfArfxP6ZiizDPQ%2FYrjE9wGJBoNTk%2BDJqyuiEX61XCB88uSZAIQV0AvsAvz7965a8x7rXpX7w%2FOU%2F%2Bx4OUd1IGmf2kokMuATASrzJKvbwvhSprtjJk3BTWr0qNGTTeJvnLdlEaQaGB7lA1zi3lfcEBcy5MFrN1i9CIxyUjQiswckmzHAcwLK59XKmqLA8DXwr50OkQ4JV3%2FDeJCzJV8T%2BIcvpYjqJ6hxm8G%2FLElE8uABxdguh2LT1icblID%2Ft2YUn8639EzBYbv%2BdbjydVvCOTF8ac5cLI%2B%2B9bAR5%2Fm53tc%2BBGTKI7WgxLWzxI5AmGBVXaO0roWN6%2By73K2T8uuX219rzbWwsGE9yKwIyCFw7B6xXaD0iZunyW2Vp1SzqPhEFe%2B4ucZ0CDVmgQ%2BIoioSqBdv72zYqkZyz7fWqt0JoFNLMjDMPi88tEGOqUBCg1lLhChp6pIYVwPIw9z48x4HQ2y8ci00zBl3KAQm4DxH5r%2FjQNagdQm%2Bp2EZ9IcqkUfEbRcs%2B%2BZ5hg0dcH6Xz4ablbfp%2BU5PunIf5HdayEmRLbuOMDITDZ5rrCBsetJrPjYmAv10nPvM5HonOiw1xfediis8PD5TTMHVeD1eLAMhapLNgTjlH462lcVI8jfkjK7HJ26e68XKY1lYJFat8NHt7%2FV&X-Amz-Signature=c9287491f7b0d34a03763eb9dd05caa385d83c5dc8b2fdf0ccfd3d7dd0888a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

