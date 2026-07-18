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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOVZAC2%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T124325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAz72LhMDYjKxEotxjj9KjIoHLD5HCVlnVMIbgUxw%2BUqAiAEO3euymsPj%2FHKDQ34ocF661uJRSCzHOoCC1iSIhGhbSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIFBbwW6M%2FXlyUQ%2B0KtwDOGJW7Qwa4M0iBSTjZycm%2Fgb25%2FbUiLpDWtQTp14V%2F8KAFjlMn8X9ZAvoOu9ZfMST5uZ8LMz%2FyC%2BtsgVieTA7byhG7KCyuUg8Z9PSBQ3jLWTTEHNuj7p63flwALmaU6i6vE0qMxObVagK0trzXvm40oTWG6mY%2FTYMrE7JkXwnYnsE0XdrH3CwgUkt9iWSTa3bMQY7Gu7pFnQYWkTdtQq2jC5CamI%2FiYRsL0J2%2BkUHcm84tKsp7nMBtWwux9dK9ykKzxn3vMb%2F4x4Om0yXp5SJ5ChAV3q67mTgYUGKTI9kSY15NHj6yqoqQvIG%2B7l4r59LrruDCRl7Rfv9bLIGojlAaxFndkMdxX5JcRtTx%2F9nLo%2F8SM2mPCFFgdP4AV7sfA65Z9ca2AqZlIivdYJxBduCn%2BZ43Stpdq09Mk6YTmuSnsedIqLtrWqDtrLk52LA%2FBzvgQ%2BFa51huVknmQgEvcV0Ophcj27aSXlQ79ZA9MVbYCsXq%2F5fsTt30J7oAH5BUz7t9%2FoCOVlCT0sVzeoROI1UO7uH2AYiale5RQ4vKQAJvDSoY%2B6uMJFDCVb9a%2BdUTfBKlgPYNk3CNVm2YOrdGz4CIZw2HpoOQFYDzsQRvplpGjmvdisct03OMqHX1csw8KLt0gY6pgFz5iNaq4rwgGMLRDunrt1Ge8dwupOkucg%2Bo3Bp6pcKWndlmywj03IK%2F5UmOS4Tw1n0LMqnNRCYNVND5M4EbNGVKOVRuUbfsuKNr3P6WDaYkW9ndh50ron4gk2qoQ%2FMW7TF8vzOdTcdLnMw%2FxmYU6N2BlXKeqmByF032Tnoj3xgLwnuAlayIu7LT0y222KCmjH6G8hlGINzvwd7A2kNdZcdP%2B6JB6HC&X-Amz-Signature=9eab6a668875db7273c14241e6cfa6474e737889e7156c682f71ecae5a80ad71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

