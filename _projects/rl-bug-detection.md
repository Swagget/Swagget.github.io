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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FKKMNNJ%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T233642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2B04RyK0iUT2%2BNeA%2FtDv7BENlPT2Vx%2Bltz7ONBjxQf7AiBr634PwHKMBoUMo3%2Fm2zeKg88rw4Fc9BWFawoJzLpTtCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgTXOOEG0n6hycjoOKtwDCPMhnkxcDR6rxP9y7kyzsIrjIpeR%2F%2FZvjCT9fJwUA8C5W7v%2F5%2FgA4FBrGdYhm2feN%2BUihZ3l86FzNZwSCG8N9ziijbWIC8O9Ru4FMpSTmc%2BQBMnOwgSUc8pOsQD7CUwNWBJI3YCYesIt9wPkmXUrbWH7gCZJ8iJuTmTVc0utxtLM8uBcvV%2Bb1tI%2FqILp4mgUpGPqzy0jkNmxQoeZtP%2BSqps%2Fea5s4Kkg1hkiZVcLFfBBRCJPv4pzV41lJ8AmEMRuBXeaNaQUwv35xkjxDjapgimiw7XvRzWV2hFIKDmfvEszCv4OjyPvBGc8rtFTIxEMeJIXJpTWBD0TT1xNYmD85u%2FEXMIPeJLMMpDWU%2FX1sA2q%2FPXRbMRylTgd8Bkv3N4lwopwJkr2bsPbdO5HYxOfQHBfqBGODyVCPHtbOQJsy2S5csxLKTQTSQWJPIslJ0o5%2BouAFcx7bn2rTHmsrw6qc8Sj5kEPm3NAHyQadSWZjnPVPOBfTFpRBHJov6UBJ3q2zyCLgiN%2BfBYiJ%2FQYWJzNV4RZyWrXaPbKQhYA4jZ3DnOKsSOlM0zR8E5fnnaDFAHIDobBysrwWauhTsjJqH9KDiYNy6OWuRuvNBZ9TJ7UPvVOvG9PhV48AK%2FBqh8wyvmR1QY6pgE9p%2BzO4OfxOccV8BKpo0cF1OdA9k6gyHtCnQrPE2KodHHKdrkKFIio10SKeEyfxQsC9NpyoIZgp7mb2cF8yqDodq02xW6%2BFqqCoNARoFzC69KgkNeQLjeXCgAwoiZFQmRyxJ4XPcztYawjC68S%2BLGZ3BWWHlyeoW4u8hMEBaOIDZkYViQ4F39pkKL%2Bi19a7c%2FzMwgWB82v3IC7xVtSFH9UOCK3FHq2&X-Amz-Signature=1df6c80e1b1a72780757ad3d7f0823f3d634ab4108966478d114a553491cf4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

