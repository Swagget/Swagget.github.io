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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGDCKJF%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T111729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGinLhgoj%2FFP6%2FfO2UcHCUYqgOqjbo5KNueifnJf%2FEayAiEApaKO5%2FrsmAfpudTPesnPKaYrKnt%2BsbbzLUTbkx8GVkIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDLntFjrj4QNLSvEyBCrcA5F4zoXA8MkJ%2BRi0CfSGxc7thU0ll3z%2FpGWOS0mMij4IgcLexZ3u86KW%2BdTxMHZWL%2F4WgADiK%2Bqf7j9FHIbjqbliPeQYs52GL0sVH%2FBG8kUe1YWQfSE2R4IDBDfP%2Fo4gaW07uan%2FeMtLFAwf2kabYnQhhZlvDTtwPNTENtByDzhNSEMIatuMochrey7Kqe3cbv7iGelyQLr6PQD4jq11RrBJT9dtayYgHl4lH%2BUUzlUGDUcQpvEi2QSjHuZW6%2FwuUJ%2Bftr5nQxZRGUIiCtlTQQg3ZVkAW0NjmaEW9ly0wI64NK86c0lZfdX%2FezPxMI%2Be4Wa1UfKJ%2BiYwfPyZT4uKZpqxYmIb%2Fsu8W1dDaFnSoLMyzqGFWbB0pZbzFnPxL7meSOX41LYBzlWlwE02fj47dky9rgloM8K3lyjbj19xW4x8BZ99MFsWOin0zcCLgwNZ0bViYT4D8GMcM9JGRxl%2BdaUQYue5RTgtpRSp3OUCA2AkUQQ66SHvqTuszg%2FdcrpPMcMBOSBuH%2BrmIwAg%2B1MpZ7rmFkPLI9adK1lDG1g6UVQDrXwT84yD2FMc96sm9StPFqwsTh7jbQUewgtVW9TEOTIFUxH562iRgsOwglAh53WMYPYKZQNc3K57JY%2BlMIXU29MGOqUBDpKc%2F0zE90jelmc%2FZ6kQXvkBG8sWmijgJwKlKMT1WWZASJjFmSfjI%2FLwtBBkgQzvoP4r1wUWFkije%2B5CzXRrf4N%2FAoK8Cew11YTDhY%2BFxUmZT6%2FIaY1Vr%2FqdEbeaxFJMVFbJ5qKGoprup3iWChLPxtHKjVrjZTvmve86sfVqJlafjAzU2DuBcZ%2Fu90tbKh6%2BEJVnaLlW%2BxXe4Mn7VL3E%2Fatqf5bP&X-Amz-Signature=8071e8f66b45372ca3989d6b1233ecc74f95adde744c18177496147daf9d67a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

