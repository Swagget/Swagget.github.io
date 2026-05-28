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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WWPGWIM%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T031938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8aX4juV9H9%2FmwOhfmpr3asJZ12BeSUNheYWSV%2BQnOsAIgEDdCbeF%2BHk7H8gh9%2FcCFRD%2BkVmO0R7qM%2Bpy5NhDXlK0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGen5VbLmgZZRaitjCrcA3RgvIEBd766saJLIrbTsrTEhYJImMPftFdg%2FuThYA3qCKAtm6G%2Ff5ZpjhtwnYwOCfJD26XLPyqiq%2FdATI5Kj6qRykKsSDGCUimeil8ihDdNpOP0uRMfNjiaMMLtPtyo6xNmEN23z0o43e2LAzG6O87N6xOcqDNF2Dxa1SJyQm6HFXKVpU3JuS3NyGhY3cCS%2FdaE8h0VJPwAiUr6v6OEqlQ7kQ7QA7EwjX%2FRYN0CsDPSAtdby1as4bNn%2FhrJn6PKKSjHYoNM1VXSxehgNh5TCy0mKcDiPxfEVZSF3k7FELdLUQ10kvW7PWJSNool9EgVaL9sXiRncn1VnBrkTQykkpJLaR1pJOaqjOamZDzfWYtxcW%2FIo9ChfE2Fkgd%2FsOLj1xbEnA5Wgr%2FatHojF%2F7NU5qGyg4iCnbgeTRnTylfRIFfSKzD5AzffKdMxv61DFkxWgNfj4JvnDG7Vvf6Msg3Kc1srRhosfFgctV36RH1Z0wRFgmHy9MFLYP08rqbs2nwSYDADf1aIpXJV015AM5SzSBBgfdv51XVo1gHM4%2FzcjV5wd%2FO8E0Ugo%2BpkOihf6Atigi0Ea7nkruvgn6nPzRw18Cbt6yGzqZ2OKORxeyRPQ62qVRwkd69pHgwu2DPMOfM3tAGOqUBP9gb79WHsMaVUs27cJ366MdDdFmzWEGFc%2BDe5UV60240dQ3rjUQkma2tukMCAiXTm%2BmTsHr3XldpjESyhchpyyINDjj73BBb9PW%2BZ5ogcsmoVZB%2BRe9gx5yEQc6WXW4UjIK68tBvWU8vg9nYH94RqgjDlsEqrg7SNdO03SUZXAPvN%2BNi91X%2BYSyexW3kLBr7HcCenwzwwUS0EdokYKLo5AHpS4PO&X-Amz-Signature=1380d983f0e38e35b2737b459a374ad8f5b0dd12384058ad2c77df3fbcc78b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

