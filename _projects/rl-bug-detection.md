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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CAWEBDK%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T095225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCf75l1Eq5LjCNXX324%2B7QkpM0JuT60IQogUjN67D%2FTaQIhAOeAPewl9UH2f3kwm6OAxQXs4pFVdPr1ZmNDQQqQH6Z5Kv8DCEEQABoMNjM3NDIzMTgzODA1IgzLDJeAOMrscXKXmjEq3AP1e9vIBynl4iPLW8%2BPxM2y7VHAwzZoJhnjo%2BKBIVqJ0DnZuOrw3%2F%2FnrsJA09xWfs6tHsmjJ3VNsWRb9MLa2N4W70XYWgB8cVfUccdjXp0Z0jABef9snOdQo6vKkZdED0PRBQtP4oa4yFP488DjoMq%2FPEJ5gYc2ag%2BvFoV6PR8wNs0rXjPBHwpjhWpYoLvw6qQyUSv3zbJ2vwGlghNViSkeYBqHzkfr88do2gUEvRuuSB6EROSqqNvG5H%2BZNpTntNaMiP97VFFbY4rS7PXFmIfYyp59GlucmVAQ4h3Hw7zhBTyLVi6ZzLlzHZCW0fA03eX%2FGSCoa1m37ICluYvaGk9jWgF51u0Kp6YDjp3bPnXr%2BXi35cZXV0bex4PG8O8T05%2FfUVd7HnyQcVJX2Dut9bFaGYkTdjgGMO26gQZhcP%2BjvSjblhvGLKrWgYDf2kna%2Br3U%2F2e2ukr07WDdRtWG9udiHkUjKC1%2FqPFj4ScHLT%2B5VZaR8Cz8zlTTfsmoT8iiCkqT82W9RfyUmIY%2FcMAm3TTXM%2BYjwRCT5TCbZ6xkjv%2BEeKvPtLhGCVcf6BypvElaqbTTSrWTywLknFlciN5ia1dHGamlqfbB0l2r7siN%2Fn7l8jirm8t%2FhyMYuOmlDDCVp%2BLSBjqkAcPeE7f2NTRbk9TIYduZ80YCOzkRMpjSfaLq7kFIHJnGci%2BacsyH8kYOo%2BLwyqpO8F0LrO2SuWiI5thRHDjEKvGuAe%2BBCsQhxysvLuVRvLjskTA6s0%2BoMPQWo4PNi0RhYf63t8xn4T5U%2FaT3jInqpxyniKykORxpovSOuLg1dD%2F3qMq2bnqECyFV4MvHCDtFcTFeIOVFZ7h4%2BMfStxZ3FthXkGuM&X-Amz-Signature=77ad284f60c3d48b17e925c3ff17ac5c65970173139385435e7ef216ac0e81bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

