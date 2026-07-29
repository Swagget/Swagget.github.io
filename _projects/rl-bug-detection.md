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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBP7RRL%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T235050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ZLy0NfXmwqD0ovcpoHJNrfrGpwrhZTLYgegMI89KfAiEAtXp9OZ4fWy09wqIvxKc5tWSmSnhOssoI9ANxmZrowq0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDokjgp%2FsVdqtyo%2BnyrcAwfYodZw607WxKeKoPyINv7PRU3i%2Bcz6Ig1Ud7YQfT%2BcVG2p8PIWOuHMD0Nhvm5IHGsLmfDRXGkyUVbtmLnZx4gh%2BDIiXl1vvENkvmZ%2Bf1CbvKRB7zw2Adekt9Ooha70G7%2BhuxmBJlYlzLka0CNDrFbuwSt1pk73HS6YnYShmA%2BmjTS3ntEja3VY6HLZYqUrWr2BDNvIEYZO3Uxg8ndVh7cfn0qyvmmeBSVF5bisFNHlXYjYKjrAiOKgTNcB6oSsNO1YZvr8Elmy8iCRRDJmVDmSadpzU%2BJnjo6%2ByXfUfXahpK%2BnD2Tv%2BOQ8MnSeNgfgI%2BJqgfSMZk3hRqljowmZXl9YYW565eSUXagxxsmYTVn0PygzfinAHts8VsKjzPTWtSYetfgxTVnQ%2Fjxrc8rI%2BViQeXLEn7shNLMEmfSkPm6%2BnLoyruYao%2F8%2Bp2KkkCGr%2BWQRchz7dg2SqqZwWczTUaygZ1P%2BcorH6F8mE2%2F8cGLfFxVOz%2F8lu6F4IA8ISoby2EeFEENtdPfcNc7fUtmFcxKhW0gIous7%2FVHTtDWF%2FcckXO8Vn7BImT2TuTv63B6twSyvY0kB3Gf%2BPGuRJmtVMyb2ZNprSDPxFzJk%2BG0lh27nEmeilVe28YPzRkrxMNv%2BqdMGOqUBbV8sDhX9GnGgJMWZ30F3gn1e4YfLL0h57CZZQiHgdtpPAzcfhCLecn%2BTgSugExYTBxXcAtKZHDQkXD5zSiR%2FDpwE8Elw6kVQnUd1C1cEd3QW4bfsK0mXyca2ViPNAcMPbX83QsAD7IePfMV%2B7PMr3otbpnmZyIbaB5%2Bz6JuqsJz40KG1OQVB1swQhDZWMqOX%2FYhHTm7ZVOmWdQDLTpL1JpM%2FNA7C&X-Amz-Signature=b93aba81c966ae0835aa143d58aa28181648941627aa601f2ff8f037cae69ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

