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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYEYPET3%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCICGuGSJcvBccf01KER%2FbYCX%2B3vWaqPUqQWv2mP44ULgWAiEAgzw9li%2Bj9N8HcwDqWry%2BNfOa0MyUPCc1bSloIqIRVNcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhDEzVIEvca%2BMUp6ircAxgr2sdJlfcLFQVNaDnUxT7LC1OhpTWmOPXfGPOlcLr9n028Sooog7X%2B4UB0rrIxexWPA0qaqJZ96%2Byzuo4KDknWF21XZC%2BAoMs6p0YAA90APdOGzbzwY8YL4GYJeGSWqzBXG2VLFa%2BrE8beGfiAjEYBU5H3ggzOYbaishRP3fiVBmWg%2BT2Cka9e9kS%2FacHdMyvJTfa7ipfuQod6c1W6Vn1AmD3BY0Rot8qnHzG866iixTlwviNV%2FHiARw7UxOayVdIPZNsbsYnzXcdEiDQPGgOuftEeaJKpX9fFgEaCr%2BGAMjF%2BmXLALYthRzd0JzGngvtloEViMDlqZ73jw%2BvTSvuHx9DDnOyhyMajscISOqHnQv3SIQLICm83pESfMn%2FKveSG0ZY5Lnau7lT6Ombf3nyql7uGgchexNDXkD8%2F5imh7pB1194id47uvnCFBaAyAusURwKjAKe6X64vJ4zrqX%2B9jUS55g74LNMSynQOHR34jNnrMriWCvwjhdcaoGZe%2Be2SvWXLXc8u2D43JNx3Y9ZnhjRGDyT9SZi3FRf7XRHoms1Fp7pCB0l7tNpbvneyhasIYYUlBAOU6CVBRAN13v3g8xza5v1wEl4OBMpHGCHU7tR00s2WXIbpYSjcMOeN8dAGOqUBjvvk0241%2BRSeuWC6G3B%2Bnv2vYZKVZpF0Z2bvkBDSGcY4uswcLsOl4uL08bh47bQzGLROiJLRmHawMV0XIQUMguBrDoPbjM7wkKDJiFNon5%2B%2BXSx1Qk%2FQqnrGn%2BtU%2Fi7SY%2FCjfD8%2BRvsee90HEJaCWcT9EEUHfHg5fs9YyIxQFQHpvPBizB4Y70VV%2FUNFknWsCY2GdfkbvyjNXkVHVbrtn%2BLJNsRe&X-Amz-Signature=d47d105d8dffa95ed8c9df56a2fef3fbef06c3c0dca8b69a4ef23766664c17a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

