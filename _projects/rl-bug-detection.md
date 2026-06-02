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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXTXQ5UZ%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T225342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDG%2BTq9D0ymtsRr7ZPwFJ%2FmjVn9PUpcS8LmeFnjx785%2FAIgUKHiWtpjfU6qOYAM%2FUJUQJC2KkclTRap0yXdZTgX6SQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBr8iOR31FkAdC6aeyrcA1u2ZT5vkRuN7rOFkCf%2BRCOTgpKy%2F54Fiw1UsLbMMilB7dYJDsu8Nbw7PJLUAjWfyiMP%2B9LchK0Q6hLgSd%2FWAVXQT3XZnlhXHCEn0HqbsXMktDcHooE%2FHUbvQ96pdNrfimipUT3bkbtiNSCrMDzUngeRKQ9yp2P5zQbpL%2FosKLMSvT2fMgTfrOPhVG%2Bcm1ueZ9aDGGy8fvmZB4OcQbGsU%2BdZSCiWOS%2B1AC5HfwJgWyl27dAODI9P0bSh9bxxDHpSV9Tgqi0xB05opqPr2L23daSl3yYIwbtD442XsapOrQdNHkTC2%2F8%2FzTp50thiFX9Hwf5AI%2B7T%2BzCqqOi4XA1b%2BkF%2FGUIpqBIoOye4JzgsNNwTGSsURQk%2FNCzub0fjcV61ap6x8R9CMUmluaXd5J%2FILnFAr6i8iRAZl31VymkjjqDZdKnr%2BRU9AEv8jvwodphEpCpxlfwa4U87CCOrmHtqrPbd7%2FAADHCg%2Fs5%2BmP2%2BeK4SvUAJKKbQ5muzTErjQi3XxVcWMgeXOFsv0N0aoxwVrL%2F4IRi7PExyOQVc5L8D1g7kFuSjQUvQYmmfB6PoobpbHFdX%2FQiURrzOpVF3Osl9b4CEneh9SAhqfnZdn4%2BTs%2BYAPksIwfKpte7EYxRGMJji%2FNAGOqUBvcdjfd7B%2FaYTOtme7J1P5dnMr36bsLvSKRWfAq7myDAW6Nw6t47fz3GnnAouIpscei2DWO6UsLewL9Aq87rSykThLOZEMf%2B%2Fueenl9%2B5lKOS4e5AQjtRc2EfalcnaE3ennQvh%2F%2BZgZnqq45LT5jtqUe1nJT%2FYAckPQ9hGBjWapUt%2F9%2F8xYptiBl5qeEpGZdSXhwYvYANNMulCDZb0gfKijIxcd85&X-Amz-Signature=f8ebf78bf9d54ad747e9471172a4ab7aafd65bb4e31fea07b48f85e73673dd27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

