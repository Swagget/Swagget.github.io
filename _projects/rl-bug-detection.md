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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M5DKWBS%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T161741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBIZUlMo15Am%2Fg6%2BIEJrCwmRo2OFV4V4waGyUdiVh08MAiEA37OCzp3SGKcDb9m0rkTDoUnPHVhqhiOGyM9lGdk6ha4q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ65h%2FGBG5Gg3mkAfSrcA6f7OcBH7w60MmutcBKZJ3hqJyX%2B%2F6qja6xvl1uy89EZ66DNPJ2lKA3NKTwa3vKpJ3mOmtL%2B2zWfT5lo8ji51FtRscU2LHaqfOLjjEzjH34Q0xP%2BHNjRpkz5scU9L%2FlCe%2FWkQFzCy%2FY6zeO5WfMjQhf30W2GsYA2mXnHvpKahzMgEcvgyyuKk0rC6V7TIEcIK6rNRPIpe2P9HTvpgLjITs6LIQHmNiBLoYTwX%2FowlxGAI8j6KOlboVF2zDZMLz8pWBLJtql%2FzutXJ5Tw5PQ1CDNNICk%2BkXSF%2FxKSzQfsbbxv%2FOnZG682eGH4UvY7F0seb8MV6iNhWQU4klHr7bSkzZuCaaEVc4b6uZ9ZFymCyOHruZ4XurFk1R9iMa4HeeA2Fda7%2BCYArpebEFDyf2cENssi8v%2Fa9Sj4%2FonKsmQbrBdMghGN8Qc4Zb9xX%2B%2BujqhOskAxblLUBJ%2B3hGNqu93rIL%2BegM2ENHL2JPJdY6rzieZZGmEzdOuprW5w%2FQmJg%2FVaCMwNI8HcnObP%2BgaK1qrnJiHvYmxnjdTrXfbquU8g%2BqEdz6Y%2B44xVTEn3G4wfSbzM0R8DgZm0j6LUKIYYCvxKdxmmJ3DFpLkiIh3WaVNGMJmFd%2Ba49aiZBHJg4f01MJu46tEGOqUBki5iGamWxMEt%2FbMTapeuXVYQQrGqpuWpde2GYt1iqyad2wfBNp7XuRTIlBvUHvDTIG17cGfHhbxXmfiTJBJwP1VN142UKJZ%2Bu1bZ0CpFmYc0I0vodG6aM6KKS6pM0%2FgwWX9BZndLTj491Bk4YuwJFdQuzjZ2prjnZVDmgrsWt6lzWiy9626%2BD2PTrkrFt5WCaInTWouoRsafosPV2TM6yDAzsOQG&X-Amz-Signature=05e4263dc6337805f9556e3ac3f5b2f82f5bbad1ee72a52711d38d82de16f242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

