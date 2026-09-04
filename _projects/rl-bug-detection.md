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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSIY3P3G%2F20260904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260904T063724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCgRgNhCnU%2FcgAP9pJiS6%2BHLhC8bBh7AGcvmIrNqHjKNAIgPlie5glkm8plhCJof5SKmqqKRWv%2FjaA5%2FgKLm1hBCYQqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3Jad%2FYnz4WyjrH9SrcAxrg0cAOxaFOHpG%2FqV1gDKLjvt%2BsxCk7dUow9Wt%2FPiDlgiirG3vlaYhShBUySRcmegAkwy7dB40aP5DJHDfu0gvir11VJQibwd45%2FVJaGkVxAmtQmQD52BMV7phYRobH8ZaCqts5Cau%2BurCvPfOH%2FzirEscvHKArHMmiJrigj3YzFhbwsPVKasKmx2DtCarPA7K14uMyxh1MrrZkZor6CLai7mWgW00PJ02OTGvLQ6126U1D70uoSw4jsauFA1LOkkEudCcH36N0hwFiYfu99O3Q7HNtaI%2F11JB%2FutlvyLDNYe0r4tgFfo%2Fd76M13W0Hwycsw1yw3rPyGkDoCyylYZ8PCxathp0H%2BF2gkaCFpKaPhMvqphxyKAnihKD8Q5gFe1DWg%2FNSKH5X%2B7FpIgakLDGcIP6Im%2BOqcFE2AXfpAmbnuwzD3pE4DjTY0cJTt3SkIxO7mOtLqrQ%2FIJldNmZCHIBOHr6ahe2dGh6GV80bWBmYBNk%2FziiVQ4s8UOLieW1N7MKemD508fh2aD2vKXBkG9odkeD2WIJXEmQdoFBodc1FwAiAomslQaWQQAaJLCYc%2BN5WT%2F05CcRox15vP2LKPubyzM4OHMsjztCtBcBBN2H4LdESNjRU5m%2BxmuNYMOqy6dQGOqUBzBf1Isu03tTjNnwfji2SBuBidIXSPEI1Ktm9yj8DoPm58qDmBGu75Ar88VuREhvcX5OK7LDLY1qdtohqVlRxPuO0kGN1QjpIJ1Xq3GzgRCaS0IjlgeEanrpHMyE3vldyuVi38Tps2sEcdWG%2Fo1TXlCcf67Yx6hRaoeNYY1ndlypnZOOPRvKEOeyYs2qiLOPQTdiV6OaGewPQgo59wScq1V7Bjvkb&X-Amz-Signature=54416803abd26fa36f02f35f34cc141e8d493b145891c80f21bce82d4594a03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

