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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSBBWPM%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T095814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHgPMtxSMWDQCtCs1FH27V2ylBhePyVCC%2FGI97uQCLGAiBIaIMpsn%2FtV1Tu4c%2FxnmGb%2Fqa90Q06dwuEi3dhW8sCUiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXJArzA0C%2FGlPiYTIKtwDw%2FIUWnIJP5yHK5IOQhLETREqls9V6BilKe5OgfHpre8v%2FWTmnY2Ra6QFm7gw5uYufwQS%2Byux%2FtDv%2FxsFOh%2BQUr51VE8%2FfSJi0vaPHFfDIzDrvdiyYtZhvemTdlaxmisIdRS2PktepR0PkZra%2F6jlzRlXJrZVqDxOLy86z%2BhW26UJbKC7rC5Li324EkSvqsBCOHAkxjpMoZ%2FUtkIK71WwAx4R7UbBnZF4pH6tLLIrdm%2Fujf%2BQswyliRMxYW2suwtvmS4DERwRDqNfX96TmgN990Thn46xNODAsUFkP55ztShCTovAK%2BH6%2Fazz7DphlSXb40QXKGBj2jgHSwQNETaBh8x4ymWr3ayARt1PsgiGY6OBurEBmVREytpBF3twCzO4k8ppgIQxoklzFY1ZlcOApwTLaPJ9ZUKJolFVRMQzJodbVZHJcy%2FI19%2BdN%2FDKRJa1Djq0BAMQmk6vJZt4gU02DobyGILUqopeTBdxNWyglsVsVieEfsZ4qEuH7%2FmE8XTnc4EGcSiWaqYXE3sjho7hwHoJuw7U7Jpo30%2FRp93Xos6t8Oe4XmQ2iYmKIRpzsDwo81Qi9Mbc56kOnK51P8rp2F4qc2KZw9gDyUgud5v8ousT1L7gYLc4uZi0FF0woZ7g0AY6pgE50CpKq%2BcOErjXMqQuQqDzSUVxDu8DShXoHsRpAcXKAvRmvADgtcn9bWBN8tMqHHHUuWCSJm%2Fp24eFz85QsgFge0r%2B6WlKeG3pLez2PTBK2Wee5j3%2F6HYAUIHw5N4GE4xFQxde17mKfOJ5Y40SeMRAzyDYukY5NzRArsYtFXZAsOwOzGgvjDZijb3HgjJe8hrIqq0LyF6YCSfg%2FMuBnTWBIXRHF2t1&X-Amz-Signature=7cfb4cb11e2fa5be8570829549468dc7e42ef82466bdce9780a496bd9bdae918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

