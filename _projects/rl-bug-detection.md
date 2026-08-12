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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDKWV2HE%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T213148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDL750oOpZjZmLCSnZRS9xUDDivU8gh%2BZInyh%2F3OTOLIAIgYEX1PNB8y67gUK%2FBPHlTDNT8nLu9wkwUQr3kowu9i30qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpltUps3Bj1P%2FVd7SrcA5njymhR7cdK441NIea6D%2FY0D4NoeQSjD72SFkXZ0AZ5ORUF9GV3cJ4jGMBQDQ%2BKNxuf18g0tKS01mY1xo7nqps9DT2sDnfl1StQBig3sSb0IiyA1FQ%2FB%2BYMnhZlhWAnlScwbItyGXR12slKgFeACtLEtIAkO%2BzSLBWE2zwDgUHS733SNlNJzjIW4E5g2U%2FRdbEkeW9wHka%2FJRmkPCqfX2LyzKXWjsiEg%2FZskwFq%2BcwY8jlOfvrSlsMfpYi7%2BwBmdyHWZaYHGvqGawTuixRteSzmCh3YFpuO%2BR2F0XZPQaFqWEWr9y3Iv3HDjCjdIopddAPF5Ot1jBLaQQew5g5GLtZ8RbyuO3fCJhjeLYE0whjfq6d3fHtjRswelKgEmCPID5EggMNAxH6CDFcOBaE%2FzXmHExHor8Xghepl1RGBb7Bf%2FccJ%2FqJyRN6nIV3Y5HnVNCUuuQyPq%2B24KK8EtjhgT%2BwoIVygkzRIN6147h9P%2BBTtg8Wi1%2BsiY6euFGfzQngl3Y3myqBGMTVUuvIuCUqg46qX09%2BVT1LiXZ1Gn9NBp3x1qfN80U60qeAYH1pwLnh9v53gaefSQfL9I14CRrSzOC4hUPiiqG3traOyxm7ow9%2B4%2F%2BHCVR5FqKn05xlyMLyG89MGOqUBQcPqcWczGEIN0j7Hw0NCKCo%2BVuBoxwjxnYt8Ol4xRXz48LToL9Z9f9W7IwGX%2BUwTTFIRlhDJ%2F2QC4MRMzvZhTdF0Hnamdwp3nxnfdhaw0qkdE6WdE%2BlIeLJf9fMtYDOxE8fjOKUPykZEGLXYOeJxEi2Hp%2F9Y0s%2Bi1xAde8feyZJ%2BZLl3YFr7U5qAXjbyszr1jhbUYiW9IBwdXPNlZ02B6976fgce&X-Amz-Signature=33ff062ac1aff000b3115fd23a3c7c4448c21a985efe844bbe95484a537b10d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

