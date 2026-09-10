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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HC34ZXI%2F20260910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260910T232920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJ0kTwFzcVW4zF80woQDilMXy0sdviMLSQsglpTwNWuAiAaN52dXUchEkgwWzK0re9xwH5QDXSCCNO%2BIXoo%2BhDWayqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwn4uU9%2BhgxQY%2Fel8KtwDyoUxWxUz7XpjO6gAKom8e6l0Wfhun5b%2FDnSDOhtygHLKqieB6TvXD7%2FMkUu9IJFRVOp%2FjH%2FdtuPLGJbh%2BALb0cwwqu00NlS4SAsjuaDbdkuV85M5FZuD4vqM9NXNljJFdnAqR8gzKA4OYeGOUf24SdHcbrZgcshpnK2NF0Vgjcao%2BGZrIWt5BlUQ%2FWiLaI%2BRHstteQnaT6SbRaaMkc%2FHG%2BJCvDm%2BSakIFylSDvcx5xdEu3COlXYhHws021PUFK50JuaZ3yPv1Kt%2BgoWqk%2Fx6WWQ0qHeEpVOH9QRSX5llN1Vo63jT3PIN1LRJw%2BJcZICHhsyK7jJTUvjFwks1FqYFnQZD2Ip8yXFC7rx76TTK5xClVUcwvCrF3%2F1lUHYRFpnr29gP68Wn5YrMvXv2rRR8YLXSD7iJvjvFDTEqUiJw%2B%2BWDiOCql%2FItbCKjmQck7JdrBnH5EI%2FtoAb96fKbARvmPiMwR33sCG%2FNkLmN3jRak1JHPdIsvGfiDNsPDQXEwbUndF%2FWiJo%2BZAvwHbreeSa5drwdaEYbmZc0cKos%2Bt9qk4%2Bf2nN%2F0W9EqIZcMGwykgD2iEZ1cFQHZLIgaBr5VeEnhP%2Fl0mQosy6rMe5Iwo585qk8ylVbEmdiQvz%2BTE0w4e6M1QY6pgG%2BrlAzgdyrNrpySdCDuxfNhRkd0MLP2X1pP4vdyB72UwEdz0v%2Fn30Lhn1tPYuTrw2Y4wq11wG6dLwwmptAAS83Jni9u65XXS0GgsEX14WOCWJKuyGZR0JL0lsw4BXueanQAsCMSjZUIWyF0GbdkyjRfz2ZOkHaT9tKyVVFdxpzNWtpJBSUtdbFOgJPGkvp%2BbxKJGC%2F55ILL1NpUC17aiBzEmNGz2WZ&X-Amz-Signature=26091fee104e84b40d5f36517049ea46e6196a61aff1b0e9c2f9136576e2702d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

