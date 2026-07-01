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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYMLS7R%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T105938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIESMEQFUaJHFEscOQc5aTsdMamg%2F8FusvMhb5nDk1nSeAiBXOLfaEwjgY5e%2BGF9utuwU99uP9ovl%2BIQI56aqVZ3fOyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6L4DLR8R1c6PhFRSKtwDXdx5OWUOqZDTt%2F2U6atmVU8Mvci4ZbY6wQdRxNj0SSuTU3YnXxxD8ECPIoKaR%2FTG3HRqxykg7S51alTFv2pueXlCDx6XmPgc2hzotwadvjOj8eXl26RPTFUOaTsNiMmjiDIG92gwS6DIPnmfJ%2FnxuFBtnLUUlkzftLccqhdb4q3NT3PMnUQvFSezw%2Bqy4WQOXxGmJci0l7cE5EbmAR7bd%2BR3sAwQ3T6YYfJEXyAPz%2BQBtPlotu4uzgPOiLAYBNoGwqaVGPO3eONMtKdeg68BxqFGyrhkNi%2BqU5tlKQNpqq4eX01NwolIJ8mDfPKgbc3LmQMFFvO%2Bnu9pGIQ18ULylVRZ4ntJ66WDnWytGsugk%2FhY0gEZflTTEqdXgMUTNIat%2FgkxcbKV0F3ixkiMdxT12yw4EuOLTYXmMxGujGLti20uESNz6KIHBzdp%2F7RoWb0tFOhDTbAyH2ZyglQEaD21O8DlfCPU2LtFkrC%2B6LmoiXr9YkEuwCxFw9ci3kS23jJeBC3Foz3Kn3qzJvYDrvyfS8xp4duDX6SyCGTR6FEPDa2wRIzPiiXyOIc5WY%2BhYTb7JVs8El3CcuOr5Pq%2BbJJYz5zaDE%2FKCX3276Emdxau8rCakx66k9OqefXKbuwwmqCT0gY6pgHlcmFtnseB16wAfe%2BHEuYmfGOUVwoJsYIMAz8XGQfmDvn9mI5N20LZRxYbxRjmDf%2FHPoBwceinYcdjCZhfWUjjJR%2BLdevXiTnX6ePB4EP2BM6f4S24%2BDkpF1x5tUiWgWvqcH%2F829e5eOSLNtAHnpUyPJ930IEWFvHXeAdKXtoe2eYNWpj4VdQiEAy%2Bdrfd1PwOQxEJP4iS7N1Noe2ReMA5NAk2l2DI&X-Amz-Signature=c8e094fae09786282d7285765fdade119ce466f6c026803cbd55a32e5dc65420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

