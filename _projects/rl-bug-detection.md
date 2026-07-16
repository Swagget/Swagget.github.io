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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQG6FO4Z%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T071242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDZOLWRL%2BCkyWFfYaAoDvweQa9vBdHLbQZHl413RE5VSAiEAxJytoWrJaEmQx8iuhioQsYXjDjB0KUGEecctekRBT%2Bsq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBqXYmBBNTmO58QPMSrcA1TMEn196sadmCJX0sOKeFuVVnnuMaVfCr4GBfXoXG94lkWYCMxdtUScHuD8SduIAeHiH0gM7l0Udk7UrnHbljw4%2B50UZbX0tff8amK8dd9GM9fa%2BNsziZdCiAPtFHhS%2F5%2BDMxEqyQnts0C2F3IgAF9eO8R7Ou%2BvSDjyeH7JBNKuy8Prwa6YB%2B%2Bjlx6dBv3yA3tOATugT5DXErSfevoKje0r5qys5v1mNfwEpP2V44flsJGMXoToOCZKXEXXJcU4pHRoQQJSOAIzv3YOHqAbfPggpVBvdkrnJGsElx4um%2FQaeL527vR%2F7VdYep6CJ8h3rT8tmA4AZDJyJRJzpoENSAAtFLBE%2FxA6bGDmvK3CyS6q4mZ%2BAMsAIiJF1Q70nYUboZ4xS1Wlt481k68%2Bs%2Fo%2FuEhEQSNJzOEzw%2BvINY%2FVg%2BfwkdmYe%2F0WFHaCypan9yOU78eitazVpzfUN90OLPhKW%2BEF729a7%2B5WJIzMhHT%2Fiqp61jTO4KGn1qpamAHZ7t3MHVCOiqP%2Fd086q%2B296rM%2FBTuf5kicf36OnLwHlPJqirHCvy0%2Fhbqp111xGBO2%2Bd8P9Fx5USua9HpAfwZP1PR%2BUw5IikergzsCHvorIT6ZI0g2TLXV5DglzXGDgB%2BtMMfy4dIGOqUBilzPAeCEsLP8zWEHJLLcOpxklEfgTZ9m8DD6jIRw95WvqPTQMkHK2C8rKmwfOojusHuU%2Bwcr0cRtUMzqmUgDQlYwnX01KnD2%2FVudJa9Z7PkLiI%2BbS5GfPlmJNvJxi8kYPtzO1mJYE6nXCnK%2FvihOASNYGTTzFjzbbeEQiHSyIKgJyoe7Gwk7lyxV01WSJ8wnePyIYcSmlZCf1A3c0PH1zpwilAuF&X-Amz-Signature=1237b946a3f83b75ebd9b69d0a4a03d73b864df7f5adc4787c05062dfbd0204c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

