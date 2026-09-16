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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJT7IYU%2F20260916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260916T125304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDzPB73NfhTMPPo3Lt5iZ2E2nyeNxRrE%2FWQcZpd6QmAwgIhAKFGXSuEIY%2F3oPdwJwjhCq7IEc7doaZFafrDtIu4BqfBKv8DCBUQABoMNjM3NDIzMTgzODA1IgyKYgrP4oClxzAuARMq3AMKtig0rdA59Q%2F1aLmKtDWbuR3bHQ5LuFsm%2B%2Fv4geRoO7o%2FYM%2F3G3YaxNH6Cf25UXXRiBRXi48bzLz%2BK52YYh45byWv09BJD7YTOR5%2BhBOq3j512RcpPAeMF4BkTDpn9P4zFkg7CVToI%2Bbkru56DBHghKJklbNHNMQLsdMj7CLx4Wwd6WkNnYl%2FV1LXLoY1jHlogUWgHyXKmzYSHmMF%2BCO9%2BhtkLW4b4kyIQD1Xik7MNONyC5hUnRiAgipp3zsdnTX%2BIQAayz%2FA9QduJyMYKWnHCHNFF%2B%2Fx1evFQaxrCtH6I0sjoPz5OSjCWdi5yHZUUFQsBhgvRWgn37khmPvfXfJeIoq6hMkn8CHv8d92PxoIJRqyeAY9BQvbN33Q5cyIaaB%2BDVeWz%2B91H0U1XIZgOxgd234Yc10TeYYKtww2GJIJD7h0OL%2FKckY%2Fuvwb7jDL1xK2FYen9jA%2FvWzr0JNRQ1AThxTxPTRKm%2B6KkmBvw7EJyxN36LfbNV1TlK86SuzM3XzBL9dqNXYi8I5D9lKnPGhAXs%2B73OkynYle7r1ZjYjmIuQqeghOLbPp9f%2BoXYdQZj3OqSP0p1IPM3OLwDwIOWTFgzjgI4J6fQdo%2BMVHe7%2BZQFebWByN9HfDE7mnyjDDiqrVBjqkAbet2vEY3j3p2f5n%2FwnlfLgzH4TMTKrOPkqz%2BQR6F9Xa7o6hSwcIKnwZVHr9gkm83b34sZKCr6fLGqp5GyvBV16c3uKfaqDG71qRCUvYbzDKENupTm4697g1WkbVNQbbdWG9QtcVWSTxHqa2JVC8eYU7U5Eojs3gs6J0vzWXmWVybQ%2F%2BYma7hUBDP7s67rJMkOA2faq8ncJp2p40x1Xdrq%2FpNLcZ&X-Amz-Signature=40aecf3649408073eacf727a672120372ff22cd4cad933adda52f5616789c7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

