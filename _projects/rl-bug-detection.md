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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636QJ66AK%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T192059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCDlRwUwj0fQQFYIT9tzPbLh61Ye669MBiukpBChgDZ8AIgTTs%2Bkg15rhn%2FvHKKwy1LyW%2FwroHdzJzq5qn3B0Fwo4Aq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDAB4soeEUdZMot9fnSrcA5NtJIuImbSG5IXMWR%2F5z0O21TNpHyC1WOOXH5RxhZLBqwGzgVA4f6nsRgssjcaCdCPeik7IcWTgempUUKa6NSVpo5d9Rmz4mmWOIf4f32Iy96ZzGTLBSbVcpfIzQi2MSqdIJs4fcROmX9uDXjLIY5kbnQgCLZFpSfKx1Cd15Vr6OLBjrNH7WaXllqJwEsYCyYDLB0bcJTmXnbKbhFy7ksg7IPfVGuxLdpUckY0YeNFEoGOEHeES%2Fb%2BG70ywCR08xCtKChGpcDZ2P4ekR2%2Fs%2BRDzPEGOeSf55CNigQV4kfhRTYoWmFHJbwuWVCKSObX2%2FeFQpIhLZH9CA9cDI2vCDOEBs%2FcVPYF6rQXmUhjGzZgS4X57F0zPLsp46GclqNL2mTw%2B%2FS98HJqWviesQ11OAbuKPm%2F6YypWi4qeB1qbj6j6XKl5x9QDJK8QFqTcm5IQpGc7hgGcrdc3CE%2F%2Foc1mRy%2BxQ92dvNo85ByPNAmAbjNsswirD23q9A2ZfzJZ%2FHI7vFBRHfb4SBdsmQ1VGp9Y93Os6sojzpCueF%2FvVsCYdzunR6WP4hOUSSV0TCyIK9EDAYg%2FiyI0bk3nRG0%2F%2BDnzJDHZ3MJyRG50YbE1gC57z10XXn4wZF1M%2BxFSfZcZMNGSt9QGOqUBufHQvH0WDIM65TFr%2BPN42ZaZK6ADCE7DduiLyOvJmqkmLmFcFi1YGV4iCX2CPmtNoBD2Mwo9Y10JOkDDO6WEebGKetIhwfLpES7dtyw4aSegPm99%2FANTFGrQgPIyOAbegaoXtMe%2BJlWxU7dYb9HdLRvnfMscuLMFaS6EPedQgfrLOyE5iXbgPTzuvaFaxWDlliXYSIjem1n4nwEGeZEOFj3cKyJW&X-Amz-Signature=52eb64a25e4cc0f24f8f4f819df5896b023453c7e3fdc01013cffefbed825fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

