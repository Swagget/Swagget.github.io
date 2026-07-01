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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJC7EGCO%2F20260701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260701T235933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCgWGelrGVsy7YbFOibLUnUQp9%2BYappTbdsaWz5uyY7wQIgM6xq9J8MQIa1ktBIELWWBfhO4k18vd3B9jWhLBDSI3MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyQf1Y%2B3YFpVd6eMCrcAx83ZlwfbfWOApAiBp03H5jHsfo7D7ZVt50d1nOp4pNWdBlk1tMThpY6uyqMLaBijiQ6SCz5JnbYJr9mLFjhxetLRBkZALHE50dG6y0U3XxUkbFAVvnb6j4pAWKyBNr%2F8Vvktvp2N7jlmDqZAAt46leuhEwj4Dgc0Il1RKWM%2FxZ0x2YETmydq0mzcGAyRffYdsskUPG19xqiBdmLxKL0WJ2fYS74BTRK%2FopGkQk6vkeTVvyTM%2BS9CqqXQaHuU%2FXN0Yy0pp3R4PX4o5ws%2B7IBhgOzUpbRrIomILsL71K8kyoSxR45%2BlXTnNsmNPfu83CO4WWwBOVfVbpSQLBTDQYUYnXFUvHBbv2cBGW7A4QzVSIOESd%2FZsdU9bDv%2FW66yZrwxZKtuPwLOpx1pQK1sUPs%2BIyjSqGFns0D1BbGHiHyqP1wnNW5PW1NO%2FsaBQUn6hpnZiFPLLQ5c7H%2FxLxCN9JakHNIiadPM6CwvgBS3jL6m8EKDYEy4m8vOJHaizkcgJT8oXe8fkrAR0bsJTOlv6RCBBQJo7a33qfzCPH6p4cAaTMA7kuiEIHxtCYu0YMbjGKMmF%2FTmZPJs9kvSP9icj5SDvTmDcChTHPdEN7SJ9l5jNJSAUD1HpxXyqFs19F6MMP9ldIGOqUBrjzylrRqzpxoHNfkmJ4s321ZisSoIxU6pd6kwH4zMrApQ1Xj%2Bo5ak%2BOIVSpItCnz3W0GwwTKmb%2FFVLi3%2FXQAaq4gsQzthlENpnlTPqybCeXHZU9%2BADZ3rUKd5quKhnnutU2pDUumKx9uZvnRe566YjpgfbA%2BDNblLJ2vcX87jyAMTB3aYUFoFVkcGCG%2B2lqO9jbx2anA38DgxmUwD2K4QmrM4AEk&X-Amz-Signature=cfe1f9848275904e8dc82a3aa8b0fe207955db8f139ac2b51702bc6f01180096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

