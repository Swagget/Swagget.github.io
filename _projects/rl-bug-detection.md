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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHBO23OB%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T053542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDFLDwV56%2Bt5jNUpgbaqLscWed8UutPzu%2FScBQ%2FXOZzTwIgTsBtmXzbbOwi4qEUwqLguBjgp05fZBBTDi%2F61tN9fq4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJP7cjymLSSI8gu71ircA5oLYu%2BesVyDi%2FZ%2F4MPqYKdzNGLTanbP6NmmeN94egCFQR%2FUPRdDatjlQrfC9OyqjO7qD%2F6LmD8kD%2F1zK9iJmFq2xxhkqcY3JbQhXBcxHrXnn25k73F9fE1a%2FjfsZVzXMwejTISyL%2BtGGSdIXp4zagJWiMcflxV8TNLeqcytCzGdMCE12nZMQQlcyw51a0Mnk4GLGTDvPYSy4wjVgZWt1%2FFFcrVulDX46v4UkMhJ%2FGJrHFq2ClxK4WGoaH0TsfqU1xhdBa9cjV%2FZQaOf5LjMzK3W3b1ya1HRn71ADOM5Ap%2FSmpb%2FcwX5F3NQxToZeDxGxtIIk81HJqdciGS7bp8S9KeyvZ%2FjVTTRMo8Ft0pCW5E7efa2ZmDlxrhInwfiaUQs7C755MfSxfdqxPSRx65pR6M%2BO1eBUG%2Fo6RGBQv7NuSM0Jp20a9NlU84xsMuC80c1hTbfdCiqj4%2F%2BiaPtSXIBQ6TKRpZf8EEHp5IDTzmP1L4nday40G3t4cOurMDteiehTEb0EJoeWAAbqf3Gur9yz%2F29uVzCV2A65RWBcsJYio14JroCZqd8xo7N8jaTKrnoBGO7zXfvw9nDioQTJnGV1k4WD4Fzhk2e1RsyJ9uqhZ4Hh6wX8GI8yBEqMc6hMIfMm9MGOqUBuWQFpW%2FZZBJNiraex7NfVGhKB8iQkBngYvE8GKP303U42TK8uND4VIH1lWGtu3Ak%2FMOWHE1ZcJUsDMVI9KP3zExRCwKTAEPbDaxs%2B%2Fk01croD6XSma7oaLTwtMgU6%2BMW0G1QMNY27x66uu9%2FSMP7qDH0q9jPAHNe7DS5QstAfm63%2FF%2FBaavtRptUSZhuQjnkUa4lo51XjeC8VGrSn39j%2FlHk%2B59I&X-Amz-Signature=1ebc5f7d7ade63d999af0969ff8596dfc4a0d1ee7678b3892cece2c248b30ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

