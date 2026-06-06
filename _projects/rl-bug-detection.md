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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSF6VKN%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T130210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt6Gp9xJ9EqO5Mx0o4yH3fWpjNGfxfK4ZboboUT7aBpAIhAOQeilfoOmou9sx%2BfKFOEy7jo10KPJhZbG5vwTydImq7KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwk2uESHWSDFsU%2Bipwq3AN%2F3QgieUB1SMdYM%2BEdxQSAqrapcBq%2FqAeWOmlGjl0MR9zfquzHOuA2ac87w%2FCTkUWcuyn6XMXQ9FhiLV12yl7m3GZVf3UQzQMwJCJY6yQt9GdOjjuvIH6R7Ht9tggFnvR45p0WNk%2FRJZza7ojB3jQM1aTg70OoPADsqhMPV6oL6OCs8BEA3foPaSdDq%2FGVZowcqOdQwPKXLiJsZSCdIIeAHJclPHKvmjzjStPBbFouxoLUGcM7twzjafSPxs8ml9u35UdmjA25VtpgGxd7hHtz5XVQyYb4r993YX6kUK%2BYTAGIeXqUkCljKHm%2B06UFaI7a2zkPLLBXUYAyjh%2FvmTk0sla8uhsuRCwqD8FEsBu7zicEk30HGVgy8ww%2Fz0cTbqqbZg4fkT4TM2oVobmwJbFSMq47%2Frp3W7BHK7%2FEo0OJWf%2BsXBrOUrZKiywB5nwDp8iR06G200A1i0IqUb735ebXwE6mNgX60G1m1abwzATXN5vGhvdb%2FXgLJq8XkmHvVNy%2FEWUBlJtqVoSX3fVGaT5V4SudWcO7Co43Uxhshm7j63vjN87q%2F7ArqnGSeEtKpsSvp7la2Th0R7yuTjhwNWTFurx91%2BbgV6H42smaahCGlqRdvc4bMNDvDfBqNDDt7I%2FRBjqkAYAHcxJi8A0pMqQcT3XTNMCsG5Aw1Aq6jeEm007Lz4sCA1vOqP7KxIpSxOZ%2Bl11J9CQl5yKTaKLMZgfMmYM6xrmf%2FfnxQu6DHJGiNyo%2BSOFcLBxkoR5bFDT%2FCFNc0NAvQSsOiSB3gqnWxHGdkBtVjJoRQHrldAy9VqXmRWtsIFrVpDc70UMRPJVBgGRHyO6DXHB2sw9DISgDG0w%2FLfcOqus3voA%2B&X-Amz-Signature=61093b367b5e1676bc96a55c90555298706ffe9a1791762572d777b6d684c3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

