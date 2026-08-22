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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZALV5POD%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAV21r5vW4xj3v4ygodpyqOKSQR40GW3xS%2FvAtqHSz3qAiEAmXEMqZtQFnGvmfaGPlJVBh6J%2BUd8VzObUCx5qVLoR9kqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAR%2FtixSOwBDYfDZ7ircA7XarAejnDotKYwxkvgWWg94e8w0lUk%2BCCtZonlUIAdNxHKROfQDQxVdbJnwWQMsN465VSPHSY8C4wKxQUlxQXyz1Vwv8T0sYwC01yEf6PckrExET%2FM6L9ZCXeApWrp0rEomni%2BTlfMwmwbijCHl2tkYjepBbKbydP4ahmDfwMGbXcIC0gyXmHVlM5P%2FkN%2B4kdQgRWUJTW2RFSXD6zZYccFKLXPErIoWhG%2BUBx%2B0XRfixcy8stp%2BRV6fIh4Zkj8aKSqGCODbCaerMkHor%2FZLv8Sx409LEwgmtoXkqoFzZICbVa%2Fozec36J74WpqhaCx8bAjLZXdhCr%2B7Sf0IlkqptHF%2Fenv6mZVv1cMY%2FooXOr1pzFg65cFQN%2FukSv3XWlaQZp2e2zbI4FeXiSnYKJfQ79vwg7ZIYUEZ%2FwA3j5%2Bd7RBhZKlYAfPua2Z930FIxMe9sYXD9XRZZSzXU14X57UDSJolnv%2B5KnLW5AAemMSEQTYq%2BzjEguXP4bsO26HPb2LdSihJQ20hRDIRnlaZzpgDBUZLR17SO9ye%2BYpLhLJFl32KCEabaazpwcv467fEFKrnIP77WRmv86zUfVz1dG1beefH4nQM0NipoM3mFt%2FR%2F2JFXyGJBBs3IJrYZswKMKOxp9QGOqUBnFCZj3GdJcoAq0pqY3j5Ru9LeN3m%2FwcXu1859Z3iAPpbi2kGCXDnbXBmXcX4wQmbpMM6nWBs9q6SZ9uxkMK%2FLnF3mp6Ey1Dt5ulp0DsEjzMUYL1oDW18CHi9pQAU%2BkSr5zhyhi3XuohFtOXP1utNVJSlgjLIp%2Fj62QTTBajWseMZYionqOMbBvlN9%2FZl27FVRBAsySz28nY6XuPegr5aFyZnIuxS&X-Amz-Signature=904e3b20409abae20bfb4978c7483703625b066a8efbfd651ab9bb29b018b6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

