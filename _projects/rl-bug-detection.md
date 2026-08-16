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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TB55B3H%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIAtdjUzOpl8EWB4oN4tSQKUBLzl%2FnSkb%2BYJEvx374QPWAiEAt4UpYPrE0CiL96Zs4XKe9IENEzx9jDMRODAHfYPZQgcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBjt7V3kTuavIIDveircA%2BaVoH%2F1VlfO2q%2FO2fdSp7w2GXo8BwcADkP%2Bn9x2tVNnUx3LuQALS1O3WMojsbmXNbi1r6WiPJsJ%2BtBFbzLZGeXnoBaxThrkQJR0YnXFi0D6d20ikQjK8qvF08XUVmxHmJA97LjsvL%2FvxHUN4VOrK7FpbV%2FlGDcMZGtuHvS%2FNiJKPaHa5N8M2CA7vqsyvagl5Bsrqf85MhDLLb%2BeuogAq%2BMs0DMxU1mx4XMo3Oe01Xm%2FS5tvaKFgS9oPQYq5tmJ%2F6Wp9TwlzRtmajegBkZ0qstndPzqZ7Oi%2BcgmonHSPaL9bctbP1NdUbSuNRtc%2Fjqrn6425V0PGjkbYwuoQIbt7az9q%2FTKnmGndpftkKf7mlHTCaEnrXQ8TQzV42JUBI7U%2FB7eH8eOrtEzff0qfx%2F3n1bpBc12w2%2FZG8ybQDqb0mFN8BN0wvGK%2BjFnuyFfwoK5V3UrX9Y7LOG50IT8awa70Zjvi3%2FvY5dS121BxfaLvA09RUkxSSUKUKum6kFgs3KCfAJ94lOOxfnL2tCiHtQqyUndTLDHECEp6oXqsCZae3iBWbZgRrZIadF%2Bk9oB6WXXIzsAfLKG2JwtCGTnYAOULyVrW0619Eu5VWCzSLhAfzbi6rRm1bkKu0dFkhMDzMKPOh9QGOqUBQkm7z7isf5PMy%2Bh1UgP1ziA%2FENE9t6maW5SNCq820E9BAy3YVFvcki0fhY%2BX5S58tbEBXRDvKMnCn0H1GjbFcjBDDsJ4Di9w5Tavm%2FIJ7bEIe6FgRu0PGJS49XU6tB7mXHN6D%2BSPk3XDy6PVZ%2BBDef7mHSaewNrXrd7QhLZ7Q8lnXL2SpECGuM%2BeOaYt%2FksTcdV70BaC2mXdCvQjA8vO7xGGe%2BRr&X-Amz-Signature=cbd3195e3d4d13a3e7fcc573ad7331b20dc6e552e38325314be466d8071aef3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

