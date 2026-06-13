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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYDGBPVU%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T205918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIBqsiderA908h8H%2BoXXyOZ98%2F8dTL3tNfADS5gIV6YmdAiEAsDMdB4Hafnm6xUDwNZ9B5xzc4YP7ENQsf8NgNkw6EdAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDB6CzLBvjctYTzIojCrcA478cHr%2B4yDQZR2fWM7dVZVe5bFp6t4Z6Zz417L%2BML3jW%2Fnmk5apIzMPxIST1fg6zCsLYRpSS8t9tbxpcuWvPCqMlZ%2F6050RFe5Iev6pp6hplrGm8Sk52C4TOJUKR%2F%2Bj0h6Ri0%2BntCoHcHtHvhO2LTpOmzzetij7AEgSK0kuKJvGbzbNXErWes%2F6uLjhrP9vn8DY%2BiZ2n8p1BOC%2BCCVj%2FbOBuMchGe4BB0vlC31IUNYIbpuYiwHPhDpwUTigcVo66Y90xPf2wPjvJiL%2Fn0Ui%2FfrD0DeeSFNh%2Fe51yy4Lz6xOAkbMozT49YB1SqRHQrcs9pzm%2BL5CUDEvGscgzYB9N9DoxbOArTJV1Pd3nAkyc%2BAeNv5cR6LxM9truJQOdZ%2BI1b4fxMbz%2FW0BnIMLBLbf6WxnG1BNlmKjrj3l35irAn9%2FSfUrgjFp6MCPxAjyOeZb7yH6yzN8f5KAY04opfIXYYkA9a12h1MAF55hGj0KsooAo2dNqisW830gCVZOc4AhkOf9bh1Jjpzix0y9eIpTpRM%2Ft9AF7WuvN%2FQG%2B9Spf%2BzUlwx2uPSMiiJnKTXC5AnSrLbWxENPaPAlG1HXVuP4Ll7arOtwrddq%2Bb%2BUee2Ym6WcGZIO%2B%2Bm6HeAtemi5MOb%2BttEGOqUB4Wt%2FjqG2iQDYwllYr8iX1QrfgDRSJN%2BSnyPU8386yophDHRJpj5Qjx7tVHCqCQGbC5kDmVD4rPPUrYZF9I2nVyh1N7wg2QA7ul5%2FNhqUi8JfBDVtZnn5MYypHz6I9UF4OA6xCFJzVuMBz7MxteDJ5XFrsTGk13PyZXcml8lVTG5GO5rx%2BE7bBMtywvjH00KYsDnoYV9SYMbeWLH4EDPHpO5tj0So&X-Amz-Signature=08038a77946d43b4cccb415fe8ac58c6a9c2d9f5431febe392054f5ea9d1b14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

