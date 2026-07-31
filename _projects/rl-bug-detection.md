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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YADL5DDM%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLbdHj2jUYoDD6BUX1t93CrHBZCWKRbcoe8GJQ1WNZSAiEAyCHjNz15k9BJHCXuK2O7arkkBp7G6a%2FFKayszCoT%2Be4qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJz4rIPIUjqdhI%2FJySrcA7oX2qfb6c7S5FG%2BRubQ52xmcWjEUtRfHF4mywMF7Cbj2ZJVvLpGkAqIzfDoBFiflf0UXdtcesJV7MahngnYsoBeMYmgY7%2FRzAWc2ve15HtlS0Sfw0jhTZvWRde3tkVXEUtnxuwoiKSmOCtL8mJQEUy7lFsZn7406qgBXKu7iowI193aHxl5toHKZAQM97f7fdgmodiD54eXZrb0b0QRYAy22FFBMgD5BA%2BTp3%2BNdn1Ey%2B9bAKPZ46GbISgqmJftZQDtqMskDuAUWFaP%2Box3hqsalYvugSgkpcwS%2BhrboyB7SllFJV4%2BJMOb6vGXSlfphGNO1AzcGsJMoeu3gOkDmgxMMvleOE2n6dH8wU1hSfo59kASlTs1uvk%2FT7xPFtx3%2Fcz5%2BY5xGvsBbIACGM6Mgy7AOaor5%2FU%2F8d%2BgVlNPS83qWSJfmY%2FHBPr%2FwdQNibqLOPfgSNpI9fJFkPdcydgYnim5%2BFMkhWPUIcJ3qXVCJYeLaQBsh5vKS3gLFiPFYwFMUSOYLfaSD%2BExnCVBP3RwJWbT9ZF2PECZUo8q6gN%2F2Ths9cxGZKqC4Jrf5z7U0e5qMAY7Y405B3a7GDMgOMFFCXvxMIGLox99VlJBi6oIYXr8u8Y3OSaRQ1rUgl8kMM7AsNMGOqUB144Xr9WAbrs%2FIxWpk1ApJqRqhHJWuQFY1X3lCnuNXAKoNEwTmQiTKvgMEelO1Pd%2FQ%2BxkYmmRjxbYjWaEA7Tx83tbOBiulcgmtm7T5o%2Bs45n67FdiCDdWGM3TU6ipK5N7j%2Fzf6N5hcKSMkrlIiC7M%2BBOvBGir64hLlTML8ETPyaIpYFdgnTcWvH7U56TiwM3kkkmUabGHdSGxq4QTQwGkxmE%2BtIhW&X-Amz-Signature=83f2fac8330d0ed68bcae52c34552f17225ae879281bc08d27e72f0cf3d1ec62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

