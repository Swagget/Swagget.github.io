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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVPH6YXJ%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T222928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIASnBtWjmU4nCLuVNo9Zvxml1SxYNTromakK1D4jjQrEAiEApAY3k5PID9tyB9w6N1nBR0XYAvONadlO9a4B8yAcc7gq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDAUgLWm6M9XEGp3FzircA1GKWfnzIFTMaIHiNjxRFTVemHWua83vd%2FpS1OySsTM3Dtgfayh3hyQ97qhCBx2V99wMl933vgcHp7Z%2B06gri0Eq1nmicvAGFvqfDudxPRWskRntJewEeciCCR1iMd%2FyavsoI%2Flx9jVnIZk%2BMpu2jwu7izLskK%2BVtsmUPPIQ6%2BQx2E50Qfq1%2FhohwIOpkWy6bTAqesgAWjIn%2BPtIxsHFVKSmXjRURdljBzViU9lVkvJunJS%2B653s9GZKS8M%2FgrGk2qMX2K39SV13t47aQJL%2BpxcfdREWH32tO2Io4dv8cvIZVLX0kR%2F0yC9rqbZjI1k5%2B3W94DKOgAR1XiZERLOCv1oZf5KWC2V0CjCYEhDfutyuT0%2FWxJB8slLvKBfqVOUfrDf9yN0XkUaRZ%2FJ4vZzT0S%2BpFwVKOt6O1Z7eButYg7y3BSkb2Nwhbg8jP703bfEF3VGrEIDbjj%2B5MpS%2FPzllzJ5THx4EeWSfyGxhyWT3zxnLHlpwfznfNL7V%2FImynDget9XudYRSGnWQt3NpHJRXlAqHRv2MdGVoGLI6NQLkfggFqKVgu20Y4s1XwU21r%2B8KLUqF2s5fpxGVmsevnZbgcXVBCgCQChbRBcyQHor2IOMImUtPxlrXM%2B8bmJdcMNqC5tEGOqUBsKUvuNBVfm0hgt0OMlU4mplzMk94Z6VUQFCrZnYDgr97RhHacjiWvM09txA%2BZjNNDHXKAuJmGvXEo5GqZ1chqyr%2ByvkEZIrAlS73H%2BKd3ZpVMY7TPyBW4XjmQGnJUMNwI1LHsuN1jj5dDK2Bx37DdUglMs1c2pt940T9CxRngUfQ8ztAIMrA8GsQyz%2FGV6v01TnTdIkbW7Py4Q05J9K4lcdPWFNY&X-Amz-Signature=e345915a7e2bed5104e49057a23856ea2e835f27d9f5d2c5123cbb37e36fb57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

