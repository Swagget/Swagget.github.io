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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V42RYN7Q%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T133325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIGaTmajKOt9WvrxoPiGvHbb42G5qRTowdCzO9vN9HVfxAiEAj1uV1dT832MaMhJWGLBbJDaiC4GwrjMBd%2BOfU9gGcv0q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDIjJnG3tC58nSfaB0CrcA0hrWVnUK%2FH6Uqhyokxzd%2BiDitaB7p8AE8ut%2BWN85Slq6Sbjy04YNZgI%2Fp0SFfznXFs%2FtmyHNj1R6o6cqJHlQEwfmax1p1fhxKOKrc%2F1%2BJSTzTmjA9ULTIpHHuh52mt8SdhrShQ64g6XzuKCi%2B6hAt1%2Fl%2B3xBVNEDOFruJK9ufWPs5WQVvGRL2OZP3Inep1RW3c4CUkB4n5h9gc2ZVfwN1Rom4NYcbOs%2FsHFvsYQ%2BMQ8NKjGa60uebnw9mzEuHFLFw2h9xDA72yuTfuJYCqphTcZk%2FGbbPE%2F2gAnBr2f9s1cClJmc6gNsWXK9oy7MRmYhwipFv5g%2BnsNVdmyMvwDe2XSpysRv9jtC3U4QB5L0umUR0ndfz6t%2FCeAwPsYvjDMo%2Byp2qX7NPGyvrnBVfTrFPwA2X0XnglfcGXgjSR2CkkOQ2apnJi6EtESbwyDy72r574YhM8QUu6fKe%2Bgahi4W1vCQZG4k3RkS2ClU9STZ9gMqD7J3Z7gMTEPnLK567Pw1090anh0i89DRVUhVeEK7XHaGzYlkwYXvlVOZUtK1Imd7zPD6FuUcQLQFdnIyHwkjRvHXvzJ4TlpkTMTsvqUhbVpJ7SpLkhfWmFzae6B%2BkvTkvA%2B15YL3n8Nsn8jMNiS6tEGOqUBO2c9%2BxVFhfwn6IH2uMe8v2AlPVrsl06wROPrlKg7oKCJBvbb4qhmRVO94lm7Dhr1yVCcxcWc7p%2Fkjs2JEWAXc9iCmQRJZkKf%2FDGaRc2cSmvMCUIXTcgjl9ShiwGcJ1wr1u6q%2Fq621xTYUirqFx86S5a6nUUAu6W1zOSx8PLSLZdovy5E9y8OfRWWT1L0Qg1vOiM45cKvFRP3cTLySTV5Yc9X9QBe&X-Amz-Signature=0e864d170c9325bc58410d00f5ac1b7a86688f5c9bd3c2bdbb6fd87db02066c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

