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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FUXC5JN%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T083313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD%2BBl9UP48qWEVXS%2B8IbomFMg1L9St1TaBl3royc0DaWQIgWYMHQrd%2BbLsYfNRqxausd8MM5TBKG9Sd%2BXF%2Fto9sGf0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDN6NQmxXAnVbTunSrcA5xS9ySvECdmGayiTjdNZSVyaShLV5B8KVikfGYHfGiHGBMbu4y9CPim%2FGVhohNzmQeDtB0VEWN0hKY9uTf9H6D8vDg%2Bq989P3WJ5%2FogBNS1zcx74ihExqcciUYTXSQa70q1FKVtc90rbuS9WYlbRMswXnIgd7437bdskEaqU%2BVmgwMMJVo3ER5ll1oWqnucox4fSevn4IAxcC0IlQ%2BFOWUXqNwGaTtu6sl%2BicW63uDp5Pyzt78x2AHgv9%2FeAE82rhLfEL6ikYTMYqT8LYKNjVd57NypuGcK7f%2Fd27RNUnPspPmPaQHbsrcp9hbPI50QyIJofc0stWSCOH3Ka1snc3ICSUDcZ64ad%2ByXPTAaRWkMR6KQ6xwPWoGdTk%2FpIH7stoQB%2BiM%2BmV7YJOkSeKIQBzvu18am5wua0IfFBV9YPzDLpvNLVvlBEOwPdI6cUTbasqaeImD38JK9zkE3nwW3GEYHSIRs3JdY5c0e7rAjRktFLVhODK8EjFZAFWkwisaphF9phzbiDvlcuxVLscATeyN%2BgpImA1BbKcnM%2FpW7Ih22mhgcobvtqFhVWndmmYJ0ymBRhdIMvrh92qGXXghJvdSmlvTFulhF6%2F7V1Q5Xj0R9W53Ac13fG1M7CZSHMIXlr9QGOqUBEMYR8duYUx1f8Qt%2FJgmZDv3QwaDbssXFJDbyfzY8470wrjpEkmZZK6opSpboLCxfeQPQCPivJRheiygDrUK%2F7fYH7cULly%2FMSJArF2V33reGMyD2B6%2FTLy%2BzWZTF03dQDzxw%2FKUe2l7Q%2FNCsRiW%2FDsS%2B%2FhxHB7VHSc1o2zzldEDKZ5Uxy820idlshweNdur13mdlEKKXuwDJTlIBXsOqs4GIcS2M&X-Amz-Signature=4d7227faaa9acb60ca6877f75a2cfd16a86c8414c88f7c6523c9a294cb11b075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

