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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OZJWGZF%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T191915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHczyBHu9oUgBzmdyL%2FaKg0nfDFAPRTBEaLUV%2BuELPS1AiBUaLdh0QswLHAhYBRUBlRC%2BpwmVTSkpwttNFUiPon%2Fuir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkFQukyAxTI7Es76BKtwD3CkmUtYpFaqyIEePIE9akvVJVdsMSayPb70MoUi%2BesARtFJF14O7KyBtV5nc4uGyq3I7ZCoDMJWfIJ94WHguC6eAR%2FR1E1uYDaXoZzPzW4sRqFLaHb%2Bf8H%2FzTtCs%2BceKRUkbDeEpw3L774J2gewn%2FcYamtUF%2BqbQ1n93qzhwCrwGY1ukTD8Lsjnjny6OQ0LLOGC58eAvcSIdQohY8aFYVIFLrkjgXVOpL0Jt%2FekkQAGYyNdsIm%2ByfieZYYlkGKGQXrfEMOVz1z%2FDbq6IfsDCMcFg2dADE0MsPof8WIqWDRo7yqCsTbn%2BrjR2v2cD7GjOrcNUMMtPykf3VniBZVpYcFpJmSXgNJCuaVSdezETOGTxCSVeiMvJy%2F4UOBwpbeZiAkEsnxD7WppviLsIHzNcL7g1enyEXjwh73ZoUNczN05vrDueYeyq0ieXCetlS8ke9QLO%2B7Ml42fOvdwG2IeZygqMFxg8x1K28iQL9gKcZTDWhQoRDG7VnFTlsPUBAGTbwIqsf6tlUORCyx5N5QFVU5TkCIRsHS9hXmc1CXMlxr59iK6e%2BlqKPZfA52INarXBKLYvU7fiAM3abfYT04NRc1ADF5S6vcaY8wXCGn4TIYkNGbEVnAJs34CMMccw%2Bb2S1AY6pgE8PzQvuMDmwdoy6lIFKGYzC2hXxyKKoZ35nVpcZfpbZ0M6Vtdo9Veh8YxA%2BK0PG2V3K677RbhiR8MK2gvcn6zO57f52%2BUbCJ%2FS%2F9C0seRxN0dO2RJWREMgG1DrbVi5jNOQXcxkzwosLENjiNRO8eIIt0AayBGm1gTOXcOPzKsPJJSJAjSJ0K99YO1zbKGVGN60Ho1LPuKb9vI7rooI0FETtX05jCSa&X-Amz-Signature=5fefd0f1f4db3420b06b547c6cbac97a750644922ac6bf289d6fe0925431e064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

