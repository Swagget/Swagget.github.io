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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLENUFWX%2F20260913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260913T065220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtTpihfWPPUDejD4j%2BFFaC2KrFsh%2BFskitWQu5lRXMqgIhAIK56q17%2B2ywyjXnUJ%2F%2B9WfaXe4eOZ5G2%2FFE%2BPLkAur7KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiDEEnTRs3DVrs8roq3ANlHAIFRnFM%2BzpS5D8KtVhY53d4XWDASjXOK%2FFMODAJDRuWe%2Bls1bG%2B17AqNjoR5zZsyt8Wc72Vutj2mOJDeFHtz%2BDViwA60Vn90KO8na0lsOdMJbonfvx3nOVpTAXYX5SwczCKbzXXRvOmGh5khTzHrilAjxnI9oCcwNxmWrFkG6Yhu91ZaBLaXtjPWl1cE2LTl2uc68NxeCKSLyAXKUQvjhmtoS0f4pNj7SFOVnY7xNefJSkZwqIeHtkUAMbxqPbOet49Wa6lwsuZoiuXN3oQSqF6yLdbrO92d7p4Y75SPQNKJ2CI2PAe%2F6uvWvki2yHpxZoAtAWpEIyf7h0avIGiRIJO%2B30eqVn9LU5Te%2BWX%2BjbXzNJpV4hBvXX6lr5fqIsu55psglbeJdrNnMLGfkhPo2wa53418Jjk6KKPFIJ%2BlTDgrgOcQ4hzU3iqqOkV18%2FVXwgordYFyw02%2F%2FrkSaVOfm9CITF3vv9SRhdBA23S8PLcUx3%2Bf7WQCNcKgLAMPaUV8ns13Xb939O%2Br8%2FTfFl2I%2BSSO9EyHgmoh5lBGZ4%2BHJFJv0yTtSZi5m1EiZF6TopZRctRO1blCLb7SZqw2vOjDrFFFbgiWOO1oOXwP1xyLnb60GbrEWlNjTg7RTDd0ZjVBjqkAf%2Fafi%2Bwxk%2F%2FLjwDyt3faGKPkHNPQzDGWMfaySWnBI20xrkOx7xBUT2Mve7JeEaV3g%2Fn6MmgCV2QUTG3k%2BKR9Zrq9OEYPo6SV%2FG4fGIQsjQnKCwx19ePDynZEwbcLzCMX72O6JupG%2FBiWCAQ7z92cWIYf7I7bpNrCB95sF23kma5OomQSHPhYquguEyt8Df%2BLUsfVXLuV%2BtWyWxZG1yJKMOMiV66&X-Amz-Signature=c6b6c7e594fd1535e50fd0b17de4035b45f1b0603ff3bc16ca40a06d0e0dd0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

