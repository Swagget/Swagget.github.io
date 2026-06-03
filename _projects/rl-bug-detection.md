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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQCDUC2%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T222151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCkjJWeW2jDbuJO3wQ69T%2FdjEFkZRdYh3B4zN9AiobNuAIgDltpfkYAOeewS7eT5scMmP23uG91jpvVSM3C3ltg3H0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDE0tctXD4CW2sh%2BHCSrcAz5Acs%2FCQ6HF%2FVGB5N0upUI1L5DrDb0RWHDAl7BxIzP%2F6v3Fc6%2BX1lS2EJgBF76NOt919ldQF1HJWz3Glk14YoQqhzn72RsN18Py5G7hsk2Qr2skZ7lzzk%2FeDZkD0OF%2BVGD6egLdwpzBwyguSs4viGZZ%2Fni%2B7hXCWToQX9L7Mf9VjIL0C0jqqUDYe%2F%2BzoMljk9oQ1MFAmbNF%2FRTQTbkGsIQyLVZ8qKbLNPgKTJSokuxD7H8jdvy64XXpeX6oJTzn8ipmbcCfyXEItgxsQ339%2FF1KKb2I9znHF9JLTxg7S05AE1vD2fhf%2BRfUe8IpqUaT0HwVAVCZoOtlxBWs7ig53uvJtbJ%2Bn8y7KVjdCx0r7gGv468itlT%2Bh0tcTb9cNAu7PVDZbMVlLa%2FHcA0ExWsmz6ezoAuEdOU8saANQmBIVGr4DICWWPmF9ZrK5iJR6MSd%2F6bJnXDs6ioEGotFN41HQ2QezS9JW1z1Ahd60xyB7DzZLF0CoiYTpwGXvVG6P%2FwLwl33Fa0YrSq6H%2FEfqYT2e6278i9EMhke8zdtWHZz7glK8gi2wxmvxo0JZ2GYc8cxGWcbd8kyYUYXinFvFfHSdy3SyRgkFC6eLZU80PdCsb%2FgOfcqFGU%2BHdt5W4QNMLWYgtEGOqUBfF9F3nRDdqPY6PnzPBXMZvBkfK4kvtufT8lzNPRPn%2FbI9QTkYMQaVU%2FX36uH4cnJTAeWdoc2nRNXzDoNLeVDoR6qWM6O5ysOCIpmdIgeJufOEh7ajVY8sPjqMcbPVltTwq7Q42qMexPuQCtOoFga1%2FBOc%2BS668miGWmPaKNiKP2Lwh1ZGm%2BfEAr96V22%2Bk9XzY5xvbsoeywWnM7ixgrH3Xtzd%2Bv5&X-Amz-Signature=67ab06d598c593621e83bef551b22e8a281defbdf1761c41962f1ef66e5de7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

