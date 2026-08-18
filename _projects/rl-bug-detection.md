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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQQGUJV%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T072717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNaeYkR%2Bl%2BuMnEV9ezxxdVP9Vd5s1Ypp5AwJ7tfbbHVAIgZTPs3EfyLKRE%2FVLud6a6%2FeY5l%2Bfft0wja%2BFVG7om7h4q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJYD03FF6Ksv32o44SrcA94mVLS%2F2eX5yd8sg8hgeWH%2FTRchfs%2FdITuTyoioU8OnRAGBhQ9fOsqvtw0pzqWcO0WlRUQq%2BDre3T2HFCC606tNb5y%2BffK4qCUQ1YtTPaCuYDz3K2BJhJ8hFsjDo6658ytN5tIXeE0xZMFfzwm8WoNumjDVcQJn4l8CXfgEsTjXu4dR%2BAi7mf0Vu1zSpgxKCjhHdWd1OcyxXzQkAyGOgGpuFbAfBCB7L56%2BB99KuKa8X1fu5SpdCuwtNpz68CPXq%2BigtlVtJiYzAs1L3mMgUH94CvPL0njV%2FX4KBSYxAjJM0MbTt7C%2BBuHU%2BsGNA9iPN6Us6VOnxmbrKRHPCrpfKceF9lqWFqkQyU1VEYL8q6HHBrc3ZqMp8mUa87uPX%2F7j5AgRdnY3c%2Blnc5hFLI3nrNSR8fbYnCe5uZtpP3fbphadIzpgk120Tavxy3X9f8pb3eV0TaexPRk6yMHSrKOhGx7vZ86urmg%2FfaOrnh%2F65H1Mta0veAtnNOHY0%2Bkqlv%2B9moMkR3zLbgSXO%2BtiRWjEbY9eRbjHXzv2CwO9c20fPuALraVTkpShfwvxVnqi27kc3Y%2F1ii%2Fqbi3Csts0yTBFT%2Bkgwek6tgRQNDDf55RhWrWakc8uouc06YO44KSgMNqAkNQGOqUB9CNKmPBE%2BfQod43nCCOBomlcjUK2yDwbS4miGPd1YAywdLde8rfn%2Blr%2Fh%2Bu0jLiFMLjWqijuEnWip094cn1sl3i5LrNwneNIBhoS7ce63KG8euNtxHyViL3osNHsErL9hLwmjCYfPT0uUsepSEXeqR4GpzaxfIWwzn6FgW64OoUesyhkXW9Vwj6LBXFKhmQdhZBefrMpfpcijYbd0r54zTIPmzen&X-Amz-Signature=30ef78704f9eeb462f086425ab41cd5b9935f7afa181a681b92df9e8e45c47b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

