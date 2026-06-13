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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRA7CJM%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICgCJDi%2B2w6dQIKp%2FHZbXtwJJ53Pa12hCDSerWt3r1X9AiEA0u13M9qJ%2FEQQ4vFRn66%2BlnzJd9TP0%2FadZk8PEQEmo9gq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIWbPUaTsp%2B3X2ROfircA%2BQvm3MjVioOUbRaGOj9BWGTrvE22oGnsNBKVT3bau%2FwkM5fb6w0FKWfW5geK%2Bzxow1x%2FCV1xTkTNNXq7zNUECOQNTOt69B0tllmhupeEJfWJ7Zs3jenecSAxbZCGTYXJW6KqAjhndsQhBA62o9R2%2Bd4i6ZCy6tgDjLwuaACCglb3OgcscHgdYp8Pb84h2dBqqy4iuHEl0vK1HyeefqoyE5JqGEP%2BeB4mGNqrRGNjBR7T98yObckvLpfzVMpGaRQOWQC63ZAxIcQbfpIY7088PgqePKBMDCnd2Dc%2BQRxuHnOxAy7xnL2tzUrPOxSeKNC9b51PWpMRgjOyypXugBl5sj2PriuCcgsS%2BPlEqL6912WVHYHbbDj13gk%2BcKfFclLZNaxE6gJ5ZtyDuWg%2FgwNBFmEgE7wfd%2FYnWKQa240ugnhBQhjOfsAHMnK135hjLwLgSehAMY6deGEdwbEBL4nMvLR32JrZpQE%2F2qbGB3Cn0GZnmzN%2BeMlOpDJcp7I7XdRTcEhEZbsz6A9lM7g29ny2TEzwPgpAk1dFmyYshS6xziNJqSdGl5oFbFe8hed6c4J6I8zcNr81P3gOl6%2BkHn34NsImsnU%2BTRfeACuPkmy10o1UndRwq1j9o1oD015MPL%2BttEGOqUBtcKyFcKFIY%2B4Du%2FZJIKOPm9VipcSMLa2PBR38qZdxAQ9jwqunZRWhcZOk%2B5SrC44pnURUGlhF3KU9xmStpSRl3dnJorqN4%2FQIt53JZrG8%2BT6SurETzAjkzdrP5vdSk0NajQZZKlOSGrDdwuxD7cFWNTxk%2BY1SCb3nXMha5XSdLEmBr0dScALe2RVB8bNRdVi5OONmr%2BRyBKXkDJoAQRMjmpB5pVa&X-Amz-Signature=caccc6ff19923256edfa87326da8f6fbe1f1b34d4cd9156ba22b0723395d4c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

