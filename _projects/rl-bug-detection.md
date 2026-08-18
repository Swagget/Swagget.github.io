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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OP6JLOO%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T002913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDb1gxX1n3GhCqDbxbNgDCCO%2Be8llV0eFEmbacKeYg8CQIhAP2VEhVkpXGJ4wFz5D7oXFsFHK3CNkEKY%2BFZdtGl0RHzKv8DCFAQABoMNjM3NDIzMTgzODA1IgzHyi3JqPr%2FNQBzo8Aq3APbeitAgCXdEiKNyiWgUDgX%2B5FEV71kuGxT3f6ts%2BvmqylvhLcq4mqtiatFmeGbF4%2FdFDergiKsicdZc3C9DEiAa513U6yXLZITKy%2BhMR7MgUArjYZQrB8hIaLg%2F3RRrgaCpKE2edf0%2BEEoCl2ljTV8q8O2yMH8w23DG4ym9LT85Eu5nnH4TqUb2oAPxtRDEBOHQYFnDpfn6u3F6EBDNGt%2Ft2aI%2B4RsDzqAwz0jfK8ZqXO%2BNKOIT7wZQy7GmovObi4AQpOof5tRyoV9pnV5Mx1QE387Xvh%2FdcXehPQWEAKvpWeoK7Ntvfuo7mXhq0zW%2FLeAdqtPWf5VWs%2Ffs%2BFdzmECte0ni0qs2jdSttDPfmIw%2Bd%2FMQp6cy83BNQDRdZPalfpfkQdo%2BbFIC4cb8GdIEwZ9LXAEkoxttvMZeZgPUiuuckvNcoEXwfhdPmf1B9N33Syb9cT2bwgOCdUUQ%2BDoVsLCcXJ%2FPue4IG45GJ5SyawRW2OvMW3eKWpIfGvKSLl0WvAK3oWSiQh%2BUCWP9dNh8WXZsmckNaTEaFfI4DbOy4JjOMGmrCJP%2BnY0eCCgtq7IhnFRFnKhVV%2BNH%2FbKrtN6jOS%2BgbMzpBdIpF0sjhFGZ9nILEH%2Fh4vUeK%2F7qrOpEDDCmo7UBjqkAYqg%2Fk3FbVPbIR7ometdJHU6SYMf9HZZYNIDZ9untCWoSj6p%2FXKxnAJYzlpto6d%2FzfLOOqo4avdYzQ%2F0BzNpAKCjW99yG%2Fqqn%2FLypeIf8AEg1tmobOomf2UgaN3bllXV5kOFbRBWd%2BbUvfoyo%2Fcns55UNQ0YXHKhLa3mRuC8BSscqw%2F932rtWe2JKmNz6YjMexqRGkJdhIPZRjNFKX9G3QYMWuGz&X-Amz-Signature=263a2487289fc5ac554d304b3e74f1f0a528ee1fc3c8a0c851936082183d0e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

