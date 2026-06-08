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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWDL6OLV%2F20260608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260608T164150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV%2Flk77OWbECqujUFyv9bLiTV9HzrRWXh774ps0DBHaAiEA%2B7pcr8xzfRlY2%2F9LoA4%2FPNPfptvfoPO0C5vkNMPelekqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ4tzp3yAVKjFDF%2FCrcA4cQL3VJZ9Rkug%2BMEmyEphUTM%2BBBAaifaeLnQFykOn1YNjqNkB5QNiti0mTUM6VCTK%2FtaCJmK%2F6mYEjy90YFfqOE2u%2FJQYABapRUqeQDwacGEvGh9YUwWeDvDScQTwbqOwlU%2Bc%2FDAbL%2FN%2FxpLDmJzhrJpg7zEhTT0uoXgHqkWsoAPI36tGsFXG46bZhYOR3qZIg3wFjrStBDaBqvrnWxy3cUtnND2eDA9pjiJ5yKhcfq8iJEyvwOtPiKriDP%2B0rKXmjpd6EGao5Esl1YuHThowVvmwXzKSGgL6XVcO1is3vr5rLuERTmJtcrWsA535ESaE%2BvJd3%2B1lrxSusckderiY5JpyRj44dGULJFewHo3mXnwt8V6PGVJUAWjlp35dl7UYhKGvB%2Fft7cMxN2VUBzVCBOrOty4ATqb5nj9G8wBPvtWbDz7J2szvNgzLgQKsIL6JC0bEgeI7U5uLVPYWEPa9z6qxGBcxwB8PBZ%2FOqzItouMTNHPWBDCvXkNfVZo0TRNBmdKTfCgL0Jx4gJIRinV20RAR4hSEpiLP%2FPlAujKYeoEQAK%2FoVo2QZw20GaNWlZINlS%2B2WoZOcOaJnuYiS8NyjKwybijvCvUjA4MkvgrdIZ3itHWQEnxSNRVz93MPrZm9EGOqUBTLwZo2JS2M7Qr2U7v3uwg6Pv0fz86GSo6JgUU8pu9CyMi1T4mq3SE0nkQp3jGRNFae5hzyRJ4%2F1gGLnSnV5nLfISy4V%2Bkua%2B%2BSy8HQeJ1gH4LXS09r%2BOCNA76P3iHd%2FnbQqQCfd7xzoKnulsuQpAQ3vgU9898BXnGz0lwnEsjHPkL2YvEOJwaXm1mkkbnPb6p6DKdTfZX9c8cuHSDhYKg6N18lmb&X-Amz-Signature=31fd2586c1f1c1a7b3123213207fcb5a4eba6d2bc234efdf4d82fd07fbee74e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

