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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRFFR7U%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T183707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDgXhZQ5yu7oZgvpvEJc4NQPVTpRMGnRNHIMPL8haCEBQIgZGJYfndGpUN8vXC30DElzRf3RH7jtESPGNfLI%2BCSBzEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDMSYoxlL7666mm1W0CrcA6TTdz6Z15W1Dxfd1Lsb%2BZnDr9afAuxuIk6VvXkieY9KW8xYBklyhtbtPLwdmGb5no%2F7QxtylQlzDbbg9C9yicRzIb5gFxy%2FsXVZO%2BRrPB0rHOIUHGBxWyjc3u%2FpX2ez%2F3pzp15kmTplO%2BX%2BM%2B97rYQZfoDTAX%2FTYlCCitxsCnMDR34KpXlvbN%2B1vnExVMkUojIZFkJTsy%2BwEEcyY1B93B4CBXTq%2BYm1UeTmSlNWY49yenC507UMjqAE7Vlbz5la88PIfNiihccrtCXg58VKZvJAwFBe2I%2BGIrF0Rxp43i83E8R8OmoJTcWj2sXGTgpJsvoPbgaqt49ciWZbSDeItrFH0DIQlLrT0Y9FoFfGv6YUbWL74vjKf1aPf%2BtNUm1JuAMhKdeNb6jR912vtln%2FvOZ1V%2FxRNUd46sUduvSDhDq9pFbJWdRI%2FCqcOxDiFZyCAgqKGwYegb6duBrOD4HjkQGtijnfIrQDof76si80JO8A04%2FGpYt%2B1T0v75mUfRcftHBTxL8NAPkYcBCoXdhSxlIKr505pqI27Ug%2BheME8%2BbuqpxLhOR%2FpuBFn8mazLY63wnyXtu0MFTpBtriPsEjOUU8ehZg%2Fzs0xc%2BQkP3BNKkJOvUr3jVk1urMI16KMLm6%2FdMGOqUB5WelPr0E3W9k0uzy7NxbTYKWMYbT%2FSTs0Swe7VyzTLu7bjd7CS2j8TJQthq7LagUBwsygVASjc24AvA3cca0Kuv%2Bc4l1evz3puhodLhIWedM6cbxT2esb%2FGrf2sfAbA6Q3VOS49K7ICBYzf6FFv%2BqZcs7sZ7Flqaic4ZJ%2BMQEvE%2Bp9LD%2BOHJj0WYcV1jBZhOfC8u2B78wW6X6pA8TQU9PmhBOmtu&X-Amz-Signature=6e92ee8aad67d605f9d072931f3e0bcc5b7548d5b1d985e8ee502a5aa70bd38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

