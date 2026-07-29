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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAPILVI%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T224506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCguxhMfir1s3U%2FhulcBeGmNba1Mg4HFFuxOq7ICd0GcAIgTttOxdrvlE7vbcFd64ATQXh%2BNwCc6%2B4KdhkvWMbWICMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIrDom3PwT%2BUOYsEircA9AnQ2oxe4IQkIsm01ZR9d1GYSIY1H2MWkIfHB9lvGCJ52BOhbVB7Hk2L3CGqbFREkE736BwUcLa5aRHWAJNYr0uv2wm0xPbXTSn7voH7dXBN8loUWUXEy8m9Q%2BaY9%2FPdTSspGJ17NTFt3HeXgqhwKdP2eplKPeZPjxfwC%2BOX%2FXYgPMYCxLZtkf0zhn6teQnu3BHcKKjxXlExhkxr%2F%2FS%2B4ejVnLqtD%2Fzu3AjohUYfx6scbE0JCcN3f0jVbiC27lZlTodPFJPvt%2Fe36Epm7rppsbcY6Q9C8Bu%2BtitwVbNgx8aK0CqxWAmFgg%2FRUGRsEXXaGdOayiOrTSCmM4SVO5QzsGN2W4d986P%2BTwB3dOZDFHiCrEu4QVSbh4FMr77CXZq1%2B69H957e7pwBLpt16LDhsn1xu3f2eG0sScJdxEAfxhBoAcjXY1eOHMS3ys3QmfVPLyWr4e52gjKx6zxxKROzaYQybvnU8VUGMczPHLAJfOo1OHUteE9T%2FGCwABRpKLWTdJxz57hr9WPrNmik8ixYgUOenOOfcbjPm5otbg%2BtypbJ4qTaeqJK8%2FlY3JDCQV%2BW6NSO%2Fo2gYw4%2BIvOturBdOh8ZuN%2BqquF22aTYqc4%2BFE3DexM86HoEwF0AkqNMMn%2BqdMGOqUBS%2BYVBO40XeeDaQUIX%2BOrrrcQztUumpFjzEYftjiEh5SlyeTqzQnKkKWGx8sU1hT2C5ny%2FDrX94bIe0pEvt4u2QKLcXYqZyH6HSilaeBuIe0guEfpcKqGPGdXpCsbjwUpw02gxpTVxooXMcoDT7xc%2FcrAvKZGLkyjNk15zlTQCW7SChd4yRmnqMZPD04D6Rmq%2F6vX09qn5QEJJTfRDf1bvIaerYIF&X-Amz-Signature=afcb9744e50d905d5f41f905e9885d88c68e3a165a8ff4cbc27f592b1abb5703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

