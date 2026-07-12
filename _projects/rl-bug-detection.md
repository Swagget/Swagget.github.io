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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPD4E4XX%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T184437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDoAbkhsNwgrvv2EId%2BupIIGxGlyF5u1yWGhu0mNK95bwIgf4syes0r%2BD1jMgRxrjaRzS27nBo3pWhcBfsAhVqZOh8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtXPMuoQcOoQtTW2ircA6YkIaVB9iUXRyuHEZ4lSucJPjhLKzvL5QNEqUqclVR7VQLnQQAP9tpiiRpcR0N5RUp2xL3QXKAVDatGX0dUjpJd0laOZOZy%2BfA1EbqP8oDllAg4SDD%2BhnGkXD89A%2Bda6lORCgzr59o8%2F%2BX4Cey3Bw9%2FpDR8JV%2FagtBlr79d6YcI0L2F03RHHKz2UsJFqEO4He39lq662XiGj001CNYVyq1OnTPSlC9EbB0fKizUnOwTGjjVdGUBSVEDyfXjZyNJItO0MPhYsiNo2ftOpCdLO2y9nxsTVmckHLwF%2BHNpynBPgXDH1IQiKjCNP85jCyAo70bWJNJIz7NSJ%2BvYiJ055FcVEEI7xnQi5JP5e66g4UhAHt2QRLYPeoW2FNvZpfheeIH%2FulsOxzJ5a3H%2FgBa4x%2FtyU6sRhmdYM%2BL6KZhK5VCGl6S8NcF680oVERvKtfcCpiq%2B2RVWq88pAmmGQPmJFspcrDcRucOpr31idDpCmAH2j9lh2zeyk59RNqH5nf6qSIUF1COvnkfVRjeBj%2F4upwXiPe%2BvKpbf91oF%2FcFRrkCRHAVEGzuVaSM4DWzTK7cQD4ZI1SNJgCMNIo%2FdLNct5pGNYcV%2FrWrEPWtlVTagTt1Aq6C%2FaD9ILUfeRzvxMIaOz9IGOqUBrFVWFfKDldmY3bSNUVsqODgnCft1t8SclWrpfOndgVS4VFVUPZpBPMujuILuAnhJ2LibY5Ykf1nVWbXrmXtFx64ZieQJxaXtxde%2FeV031YSKNTsth2cV27fyxA0%2BeXZ3MLnCGTiYo7oySG15qQ33orLqEdlEcPQ8%2BofTkTPL52Txi%2BgIAhWklY2qJJRHRwLopHwDHzK0czPQnt0OrjvLnmyTwJ17&X-Amz-Signature=0b106de7014fbbeee0e7ca1380372ad1fb5ab0d8e8b1ccca9f424fbf25b5644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

