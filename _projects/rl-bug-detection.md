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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TA26G6X%2F20260630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260630T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLSJtJmjVexEsaDPoh9Ssann9O86BdSJRG%2FMj1VIoFjgIhANGGcHw1PzFVO%2BlbzpyNnuTwDF1w407%2FcQZ6wVCHhTfRKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8mSP0fKik5e26lFkq3AP0LqH0L2Mfsh%2BWdskKuGm2m9KLatfSg6sTg6GDF94LV78R0nggK7PaqO0NYTkDIjYQVaa%2BEhxAY2%2BzNI9TA7yIaKnxu9%2BkqPerHmgOkkc1LeLDtRZ4a%2BJppMhRssLUjIOxR4CYEpEwmLwZTC7e5jlA12jot95ufBA7FI0OP6xQH2pJUrRxBmT5wanFWkM7JIfgwN0uU%2Fu43fekv3ADFPTPla3kvi5PuHQHXe48GgpT0ZqGQBLI80ZxKg4fRNkZQCcmelvpYKyxytbMlvoTQiXHbW%2BubMUiFFAQPHKv%2BAFsNBiJaGo5t%2BBcQjJNgWxTwNUqF4Xz2jx8vH1B%2FNUwvcej7hJTy0J9SL7FTqOKvTjW6ZYrKUslV%2FDOWgk1fntzieuTOobtA0OabjAenOG4QbJFE%2FxIm6lMpuL%2FCaS1Vbx4%2BYS1vFZZsW18jiuxyZdRnGw%2FE8E1ou2P1KM3eNElpNncRT9ZcmPjLeB03V8gs1dREG%2BYNM6tCeX6rL9VqCyOGs5H86bulCptMCqc1enVOmTK%2FLgON3Lsdcb8GGZZXrW6RrrVyDGAUY3ceu%2F2kG%2Fj9JNtrmiVPH8Imc%2Fnau2b9YP%2FBOkjkcO4HiRaEHGNzg8X8lTBCeWt75mjdrqHSjCItI7SBjqkAVxrBPAql9wO72okyb7TcoY3kjkJFdGk%2BaVVn4MtPnXVKb25fy6rEcPJ5z4iA6c7JNdEPioIAtA6KKKTnFrYQKrFmHJHGttw3Krgmax2bKsmRFdIh4Uh0NtkrV5Z2jDfsdnS%2BLv%2BI0H541FjnxSVutLNWpwrqRC%2BT%2FkzYZpxsuvaY4%2F%2FTzXRFzBg1g5VKQkWl%2FyXCjQeztThBff2uxTb%2B3IRBKYX&X-Amz-Signature=8912a60d33e9026f525bc5be823649bbd68fc6409af516ac44e95f615e55659d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

