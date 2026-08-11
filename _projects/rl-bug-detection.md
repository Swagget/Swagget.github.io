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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK4B4UQG%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T174523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGDTE%2BtFd%2FyEAndBh5IzPs27OrM%2BXNO4xj7cCJ5WEs1AiADZ48ImAIonu6mKz90DOSJVjukXWC35iuRwPM2CqzVmCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuTRVrsuhLuS6hodWKtwDG6SWEoCnt1tSxGDRfo8HUezDah8u8OlpBhLzcm1bWfOZSBxflxFmSwgzezUHVRSqZtoG7y4s3xVTSknz278OnXhP1shDmgUihif7AxNo2zimMZoN8uCkJf9vX7B%2BDP2M04evpA%2B6wVGbJ8njG5H%2FMq8Nmy1y%2BaHR4OWx6Gp%2B%2B4PJqa5mmznLYKfLwajAE4SFTyh6pvWdFtZ0PN%2B5lg9%2BoAZG2bb8MQIzQWxAhOCJkPJjNlzJsatYfyFdPsiGlxxJpq6qennRHQ%2FcnPuy08ERZx%2FUbrMK23SOxyZoN18mDJQscrRdPPq0upPHp%2FvxaCSaAzNOAYkW%2FiDaYlRONU436WbW26VHXDRIecUm14euiyN5%2FvAhFSYR4w6BurmhOhXfxhAfqwex%2B2lO9Qz0nxz0yOYmOOCJSn6Qh6kRBoiAUMcld14I6IrIGgc3ZH%2BdsBZUIpd038SoovZgvUkCngQAw3ljnTplQohwaYtpwWsVXI4Qx90KcN03ACX8Bu4YALGrkOFAPFhWVoPvThKADUtNeNcsruij7jUYl0EvIjbxHISYd8Js6AtBaGXupiEozujc8iSlzTuUvt5RDAql5BCKe2QcSzR%2BhJUPSoGEMdwUJ7fIDa7UDoSgv0vDItww1YPt0wY6pgFxeweSOUwOA%2BTgEVxOokzE5WvMab2sIBmowO1rZK1SY5DOi%2FniLnekSPIuj3H3ggbROKsdYIVSbA2T0%2BgUn4Cu%2F85rrcfq8DS%2BoeP%2FqFbS2CmSbYzRpXHpOmpUL8YjO0oO6Y%2FhX42nOk8EAwldqH%2BCmHKJH2NA1v55GhzqJVAVOOFVip5ShWUMifSXW0tz3qtngZy3OtOQdX8ZmqXjRvUsRCDR%2F3Vu&X-Amz-Signature=f670db230a817f7ed03d9c0973920bb2ca6088e4b257e4b51efc21117a810216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

