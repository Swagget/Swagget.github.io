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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R5QLDAZ%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T161931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCjlhyaEQvz5Kdnm4RzbJp3%2FfcAy0Dm7Zg%2B7x4JBmm%2FXAIhAL5ilQd3rRkg8UxRQ1NNe4sPITSRYmH%2FkEu97HkKZsjlKv8DCAEQABoMNjM3NDIzMTgzODA1IgxCNh%2BU0jfbbAiuaM4q3APCHHDtGjhYWjHCWonNa4UgLp9iuLyyEYeo1aePw6T53D%2FahOxRHFjqYvgjatMsBsToUKTN1sFRQRX3YkbVrBqQCbUi3DMVHd0gF5DBWsqMALHcZWfA35MdSpb5SCKannqblFd6q0vtWMJYZ%2Fng3DRBews%2BcTy1emirNpTVzPX5TA2bknrz%2BJRZjr8qfaCTkao9ws1QRnUUQ4qCemVl2PMLN5QPhnOL35wnhR%2FdeqUmY4Khrc0SV1JoUIqC1MtrJF3Vj01OG9kVymk1Gfv8QxBglPoTLQE2M3IqpBT8QiL2eNHbW0KREm5HFrOgflZ8%2FXNK83A7%2BXsLvROsW1DbhYggyQQTuVN59mkCJTD6ENpacWJQbHD77%2BnY5YjaxygKFA57WBCbKc5Lg5xZKfEz5PjaCAtlxY9j5G3JvhQh9yhEqaB13faQFA1NAtQLCiJYbRXg0TX0NCM8gui6okLS%2BLb7XST6oSkVMT%2Bx%2BhO8h%2Bz6bs1NxXEoUasx8bcRfyd5nrfv43Y1%2BRZpA6lF4LuWk0HUkYfoyMF8CQIFgkaOWYtWDkOggXK1Yb3VLzhU2SbFkQZLenp3n%2BoyZ0MFdj0un8QHJhkwYIPYA75Iy83tcYShZVOIF7f%2BO%2FY1Js3hljCMmNTSBjqkATDA7RqRn3MqgxrjHZnmuqiRqQLb97HCyeOZ%2BMFOjBeE39%2BkjSjkzlYA364CvuspkIJ1wC%2FMjKPYMMJ%2BIZYnfdeGnABKL1ivIgT96YIjaVuqVLx7JOeBInvM%2FZjbP7FntErlVsUzPG%2F6Fc26KD3ja2Y%2BAKTRMDqPVpos59B7IbY0qOXmFaNJCg5lF0HqIr5St%2BOkRM6uFPzUPk5ARROBqDItJoIU&X-Amz-Signature=ea6b0771ac0052d320500a1d209f800f567cf28789cdcb2502e1afc67f885438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

