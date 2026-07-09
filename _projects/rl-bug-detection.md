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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH4GCFDF%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T221101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOWP7BEgSIjdd48z3WSK3YKp%2BnaV6x6YuC3nnJxHbwlAiEAwsCVPapEAnR6hmYmuxDLqNwXvrCoBser237aLOGOg8IqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEjDeGX9gBhOHZKiyrcAyvTX9uMu7dQiqu8pE56pzwZ8onhkxOG1c2Pe7Rok5kLmNbKnOWi8ZQIzWZEO01SW73anp6abjyi3QnJfNZYtpuHlLeh9kZdjzZqnOTfPA8IIXN5M2Fw4jqIJeYog3HJqtreJhSR%2FCOd%2FQWIMto%2BDuaR3y8BUTa1lHfM91tSoAyibPQOuuXpnIbIT%2FkthWe%2FR4i92Z1AR23PIF2JeuXKCPa84T8QALJgj97LyPRyTqQ%2B6Cm%2BVgMAjZprokM8zakR4GRCPGMW7VS9Mbnr2lw%2BHLQwmE4qA1aOkPOM8%2BHeG1bzxtY91j3dAHnIQJ4JzAbHKwwfVWtOFQVOB5H%2F7uOzoovSfELnmZpgcR3FX0vk49eNDxaAEosvKPrYHG%2FHKavD0BQxSp0Vvax4ywM%2FskO5ecKtAneB1PkYKsbOtiPnxr39YRlBxgzWqmN%2FmnBfUmvoE7eky8yKcjMOCTngD%2Fa64pIVO7RheXZG%2B0g0xJu3NigRv2Gf1VJ44syAkmy1yfbLKcy197T9JvSnSTYwaX1HhPP3kZyMf0hjNJH16dvdgYcAJ5w6RhKr49PjSck%2FowatAeeheCxQnKZFRYS1mAFdQxdS39cJjrFftqAfMQ1fmgXpJcYeiLWlGDT0DNtfMMeOwNIGOqUBGYdYEjjq9h7FgPOxxjGi1OizhLSHqPJyRKtxDOi16%2BPol0o%2B%2FUCK4tNmQ6htDQay%2F88%2BR6fWrRh38rDJlW%2FhsFlWPq04cXqHbJahmETQaX679%2Fc9eKFJmJvS9UIfLkDzFyfCHfTRK5f80glqEhEv6muZS%2Bn6CLFN1uLqusrwIzbFD6EjE4YZjHiAUCy%2B%2FPXLaJd0MceLOtk%2BL4WBeKKJk35VifDP&X-Amz-Signature=9cedf3d192dd68d363182cca6d6014613f104d7ed604abd72ef2d162a9e9abc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

