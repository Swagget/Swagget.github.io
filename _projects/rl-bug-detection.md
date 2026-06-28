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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWNEGE2%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T020551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk9Z6OEdWiFHKknl1m3jtFf1rkUH87Y1%2BIWxm1Fn2E0AIgBW6w1jEibwRhoAmnXPMcVuqlOyzumFAlAfHH%2ByZj7hYqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2bhpKfSXM7RU9Y%2BircA1XbXX6%2FHRsnZHj2%2FEEyDvK6N2kMjEnPA2tbJ0RwpI2cANSWgbMP8ejC52Xs29Ce2JLIJfKmb7LEe9kpBdMkPnwnOsRE8QdATedDGZGhaeCrWruc%2BECNCjPmnaGv1O5kVhmEOEiIm1PFy7nvNY%2Fz%2F0EYyVoYFoOZaqw%2BfB3bLxxGFt%2FQR2PgZugWlGeOQogTsRs9KXRBUv%2Fsu4E3Xd0f6naKraz4d6b1T0eMVrkH9Eaq8LOZb7ZRQA0dA2EG0FmVfYkFsqaiH%2BUhltK0F503cdlXdOB9Ft%2FOaeKXoeR5X4yzZowpUjrbI1V5yIcvHk22cwwgf09PgQRPBFztjGbsbRWCo8Jt2F2o1VSEYHw55ak%2FxUpOrNr7Y%2FuFvVsW91B0RxmNLQ5FI4hCQmaikMTK9Z3wnEPujMCcAD%2BQUhlD8%2BhEUhZ%2Bv10ksEsvvM3eGEjeu0l3p6IAZS3Z9vNMipRtwb%2F8SVA2qcLZ54qt5zPDOcYlLzoOffYZXE8feO7UsDY7RpSR1cut5WtYH7IGaLwu7dIYSCwHcQAQRWrMbtM8CvXfgmmF3D3PhoR%2BdfqQERegYBjtxZMVfVZwOEdLRSFi7XIMyq2EtYRxl96OsVgz4Zuxx6mOjsd5z7i8Ji8rMOyxgdIGOqUBP%2FzEoIRqkcCBCQvW3d6oLWXme1xCxeMHv5Ure9565qwoxiH26GfdHy3pHnLGCpxAEkIt7Z4THjT5PYkw3IxlgaP06uSC7PMtM1YfsybLlb7WdQMLrOBaYbb8pbTOOtLZN5f%2Bvwb9sbNWJigvxmK0tw%2BDELHLz6sHa2FhMh1L9Ym19Xf6vw%2BIl4BKqI%2BHIU%2F80G4ynARSf8C3fhG3VF6C1wB7ceun&X-Amz-Signature=6bc29492136455972f796445cd6829de0531c013cb6eed46ae1f2fcd274c2aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

