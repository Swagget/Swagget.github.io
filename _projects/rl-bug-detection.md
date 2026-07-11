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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IIS4BPU%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T223441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCqyHK5wM29uMX%2FYmwAv3m%2B0zE04DAXVROZsCF4GCOlKwIhAN9KJvODgmmYn9hdIyDFzUpyGSosXkHszZ33lXxpzGh2KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxsrGwmGHPp07Pqijwq3AN81YSMNAorxgBr5EuyoBrlTt%2ByiY1PeIPBWWCfpEjDrfavGhR42JgTHhMTOtyeGM%2BqL70J3ai9Q3j%2FMp%2FWzqkRkB5YwK5CdBzGEnx8YddfiGqnm8OEnNbnwo3v5OO3Z33Vm9Klbf%2BC1lhVqI4e15X75dCk%2FhMWu6UuWNtCrPuXLxuCE%2Fcge6dPV%2BG650PP0sJVcEL8mLT8IZSzlnq3ry1wp%2B5bQf0R4CjCrDAMAoHcp9XSVGZnNkJh0wAOT28wihU0u8veIK52d0GLJEcNezcEo%2FxcWPnGA5l2OBNHHi%2BMRnqkOv4VVtOYlJdHhfoMIjyx72K9SJumnKaCQEOyquCqyu2wOXVh%2Bj9YdIyZQPc2HtNGduQKGpUCd614EO3zY6GLkbqIM2%2FkTpBDFeW9xTjUex7bAherFC1GDDujOEFkSRA54pqH43WEbllkejgXHlB7gOmAVZ0mnSPkW0SGYsi3u3E9pg0cl8CyRjxovmAtq0ouUfKJJ6R%2FYZZQxgo9W8OGOWZSitlNqPj4Hzk8Ldb7uDDlLeHTiWoAjx8CViBlrIxagPOiaaR4Vfp9L0TKbpyje5EZejKiepfKioFQuGaYmLsMEqzTvmTT0YgLHzxaBttgnG477HrYE%2Bh12zDc5crSBjqkAW1aDCGsBpnNOfe35zOMppTxcOc0AOuUswUXp52EmVDklTCvojaer4849QrsLOE54sNgcjd%2Fg989v8Jp6DMCUb3tAwjgAB5fFc7uCPEXLEObmzS53WRS610s2Z%2B%2BSlGlncppV3bERfAzSEzx3gPgKFKPKTfN%2Bm4iCKPUexc6gBMlyXGHh1T%2BbIW2IyRf45boy1Uc2yju2%2FAnVlpflFp9mUQsWDJU&X-Amz-Signature=cf63e65172f276ee6000c1d6c6cabec05f1aa4446a34d7da4ef1d2e9053e2aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

