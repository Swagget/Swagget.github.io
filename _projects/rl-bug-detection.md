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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CPGDGFI%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T132151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIC6RmFyulRdCVvWd1rM63y%2FXiXk%2B17xTCUKKKKIq1Jt1AiAviGVidneYtPfEPZSJwutvzMvhdDWV0LivbtgSf4FMTir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMt3vqLtur%2FINlb939KtwDoShiOUCiDnE635OqPiXGxhFYrCjErNLwiFJob%2FBFAfL8M9FucFmimJzauZP86lz0DoYkzGFNq7CA7JNAm%2BCJ6baxbMxUfjQygVgcmhS2oGVuQMP%2BA0iVwrqfATLiQuC1whNIfb7hUZ3jh1S08nlUCRHpeFZnEpUKBK97fDNI4rvHC0pjLl37Nsmv%2BWO4C0RI9ZNXRM3oR02pyZUy5HfNxBaeRi7DYGlW6TGznLSACjes4hSIO5R69Fe50gDEffkVnJExaNnbcIzr4iSSeB6at5kTprssPtiA47qe47Tzr9PFd1iwcRLqQwV8aDj6P71kReoYKyZuNdkpkY%2BJ0LX9gBpW1QXpJTe70LZF8tsK32CnVbd1Gtd3ASbheBuu9hD2SZtXSYSZpsMjne9yiUMcltCF9GJGMeaymJbvB07QbwmEY8Xf%2Bq%2FpYulG1J%2BDSDYhAZhcre2wTqo7gQ3d2LZS8ScJTQWHrVIwqucOt5GBQtEEfXHNl95ZsI5Sibm0w6K65%2BpkNIIxpr0FuB1KcHzF%2Fs61ZXV35sEmismqplzTZ2RQykfYqMhFZcFWhzWx11IMC5uNJwZft9q0bvt876kTPgCOElWnFJp2hwz6EyNuLfCV8tpj3K8D7DUmDsIw5qSG1AY6pgF2ske%2BHouetqk1dI7mO8dWrn13s8hhNzQz6bLza94fVDDEaUg%2FMR1cy91xxwVOZNu73n61PuQGkowIIkLZtBl1YTQFycWeJlBwUiO0cgvZiot6ZeLQfMVMw8CWrDS5tHlG2%2Bbh49UG1560vLmODjT1%2FVFEjlJRhzlXOE2j2TcuNc7lfwW1qb4xNxWtSGt65BFLINionl%2FhWbe3SZBj7Dye8BbM3qiz&X-Amz-Signature=8ce663caf2fc3d88bfc4e4e5e17af4e923638a4ac0113507301bdfe8e740ec10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

