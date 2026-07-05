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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ3AABBC%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T170501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDTB2pNUArl1pVIZmRBUPNeHgpC8%2BOc5eJ8SZg8PahuQAiEA4YE%2BvOR1QWhoihA13OKrovIzdAwC1%2Fa2sZRVnDyKRH0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMcQQqMKgXy3TODNOyrcA9%2FVOLceE%2FTxtMRB%2BaETdLySqpv6oQrZ3dhwIZEPJVkSPIKoCSatfJUt2nD1rFNyzWfxQmz7Da7n%2Bf7K1an%2BNr3T0I9pKp8EwMbeh0RWbj3zENxvVGf2TrpjBwolNgTlmkJbmOlqRQ8WW5zvKY5fZVnSWBsuF%2BMBsczvxjhRiKV7xxclWeABxywMrODnB1uzUb7L%2BVRo7ni89b5ccNe0oNlM6ty5aJrq99utfk%2BpVdd%2Bzb4U6tC9FIflNPmBR1JH4%2FBSBwxEe5m9pq8PjTWwAuw4MJE0PeF9LgMR1E0bfvcSprWMzyE4kYzh3srtBie0nAlFnhdg3AD5Sv2zSBFMR5YCtromhFsXRhiUJSvo2jG6iZbfqnWXrGIxa7Z99w7Ns7dGdfqQNIeuM5Jo3muyPqSGiLFc9%2BInACCFWRlAPdjd%2FokL5oWuDdclCVdaj2jehjnBOPY8y4vk0LOlX4OP%2BA4iSI1tOQSH4E86cPcEgCwdLbyWIMIEgyeCI5RJEFVwe0kOL8v1bX6eC5iRBgrejHNFdeY9TzgOqHNq7aCwSrmiLd4uDU%2BMlsbs4a%2ByVc40%2BUSFxkELFyT%2BIn7J8l%2B%2ByWJjTtG0vSxYEA26jfNQOgRS9Igpu7FCNpYXZW5SMOmcqtIGOqUBamFDq8WVtzdegKd4aAuzuZt6LBL%2BNp1XOru9jDqP%2F%2BcgD040YM8rVHZfmesBXTGsE1tH1OM%2B01cdUvVHdm%2FzcdXKJHR3OOddoFEkgZMiu033oiXLJbpb1RJlBpCHEbPU8eo1n1vuHFOfL1UGvUxDduyvCtP4nmQyWnhW%2BS6n4NvZnvhna7Ew71XGiQP6u%2B9lwIUWb7QBdAMITn%2FFEqhH0xXLCM1D&X-Amz-Signature=212444142c5b48a75c03748734f3756eb7a2ec3dd78b10d69907b4d8f6e8b92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

