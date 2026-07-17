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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLZAHXCH%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T012204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0paUiU8lOXhAx15lcNIAHgMLtFqO9NV4AL9uRed38VAiEAzRwHIShyF3UGSenGh%2BLhvM%2BEZUg5PxNeeXX2BQzb%2Fe8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDp7Mijis1YWfMGowSrcA%2FG97EfRktAtGWhReG9Tyhxkbc4jZ8g%2BHkZ1UL1skcR4k%2FIaqF%2FZapryOonQX3r542pUmf5LHXiLLPLhX82I3oJFmey%2Fxf8V3uLrBfHHU1FKeSaJ4eoKyJGkhBSpMcGOoXVn21SUE78pB2WTGPo5lnYFvAQNZ3H32ktF7%2FtBug6vvvchhW41imG3%2FGkTyUjBqqBt5tR5XbHS6cEn0zhzqprEASKhttuM5PbLJTYo0yfMaEUWgKvl32hP9cb4X2yXp4E8RRW2kVAkhhJtM8nzkORbEIXI%2FhQ0ILL4GNr4EXfWFr%2BTOJ0QZF5iY8pAxOFdTd%2F7ekE3W1FCZSL1KP%2BO06pCIgSkUzKcjNYLl7fTKH7rvW3bk%2FmFBjIvm06rxroDOJ5xhJx%2BPr4NXppNp2WIuI%2FPn%2FBzW5m2vteQAffT%2F5h0Vx%2BVZvmtu5VayxRd3244BVlceMWfCEMT9bEOG%2BV2EXgOljJHkLX03pDWVxQNCLW%2B7dZwDPYzRllZJtrSyBudAOX%2FBats5kt0C4l5V10w3yGLjOX8n1wzXUD06S2MSsBYec9TDOyGfbV872Z72DCxEefd33CISMxQsTdrgNOb4YJDid%2F3lVjXQyD2f%2F%2FMq4LmYYSx7AFa6kcDs6OlMPjy5dIGOqUBoz37JPpRs2J0MM5nIWq54KcTVlRf0YXNi1dOElBIDDyR%2FrR7TmDPcKwtGLcVGLNtKo0xKaTutw8R%2FRpulyIR5k3JjjpX7yEzfZTd2%2BAgjcaBkZkNz58Dbh%2BXxAcgMapg2NHWhlR%2FYj4d8x5jFc3oN7aXKFI8eONiBs5u6N8LeIZpAeUHlgmyHp8PBDTIy%2BhH3s7BoXXN1NOYGtUDuHM5K5jzewKH&X-Amz-Signature=db5115994c3b732af3c1bcf7544a8d8178f170a36bcf8a71447768ec3ab806e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

