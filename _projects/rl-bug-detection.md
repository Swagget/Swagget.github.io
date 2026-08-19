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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCOKKN2%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T082042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwv7wJwDhgOIazXYPvSRRAEPanBgKPF9OgHXwosWuboAiEA8sMSghyLBIN2tMy%2F1WfLA67pMkOIOKiM2Jr0Uuv8vMkq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPfKd6IPWinCLGf0PCrcA%2F7XYVGn0ceFBN44%2F7cR7oF2pVfOplX9pWamWxZ00LNHZX6yguSt9uuzlIlTdXIV0UA9ZcbLBR6vWsZ05xjQwFmRwmikhhN9bG6ajmZ1dURjOdDhey5dJS5wJ8e6WNb7sUtvZQ2wC5a%2B3f4%2BvKcvtOArWv12q7CMf1RMp8wmFAaczxnoTZAC%2BtEly2dgopdPe5qU7vXpUx8QNPNFJoJuLGlDgzz85vcDn4ZzwtE80gtczoymO4uu4TBmptbYXxtVMDxrPDNwFjM3Y1FKWUnhQ1LXIoYtpNncpW1XMRZ9hMbLSAHzlF%2B6hOqOkaXtq6TkdFCAKL0MH8cA8dL%2F9KjXq3%2FRD5V1kMqqP3IMkbAws4vfg3B3EeSvRJo2G7iaPDeVH7HFOIKY7ll4k86UlZXbhWkro5ASXoTlYKwkcXxoOHs3GrDSPEYl%2BlrM0NeLXWEcyWkotThafSOhp7UzED8CZL22MdRfKYMWM5rcTgVTtLeUFd33zNDl%2FKONc%2FQ1Uf7STR5XCYXlCJboqYGP6VPL68nPNgLfQ0TPivBI7VZrJ%2B8gwV1icYPV5xZx2boL%2FTepNbf%2BUDSYL4Z63dfwC9zjp4Z5%2BEmxhRqwK60lFvcPPIOCwdIwBU6oCCHhQlQAMJioldQGOqUBSyj0mQ%2FjtdJKtQGP96YlF4wvaQomdE029SeF%2F8uBzcnRxk0COjaXw8P9hvXxCOBPBEDvnIiWrSuXzGOmA7QpQGlCUtIk%2Fk47CYrscGifAH917YISjqzkE8UUjM9hM74qBISbA9dRguxv1bPeXlWi7j6crNg35V3I7B0qw1lBMGpZBLeUo6nZqDkCMjeLOkBrodQbee%2B9Sdmm5BqhQjm9hhv5C0sg&X-Amz-Signature=31681475ec36fe92ae388a866adc5cd4d7584bb96cbd104b5450c64d9ec4ff9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

