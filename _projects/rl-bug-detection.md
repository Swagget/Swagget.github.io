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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXUKID76%2F20260729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260729T011922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpQnKYhIY%2BmHm0lhgQHs01Y1ZfRLRPdxXC2gwUOZ04gAiAiZgJY5zE0qF01gfMyl2sczyYic6xC3Zu6o%2Bxr1XFqJSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMhp3IvdOXjo8BodpvKtwD6p0cNh7CYPMiVbgtRUY8OfbnRtvmMBMM4r6L2JAtRWxWIuIo9rdQYXe9foYM2P1KoVT2k7gMlqy%2B5YWhdFZTAT7aaez5OFLb1kL4h1pyLH%2FD%2FdTj50vv2fwjU1X%2ByfQe58QzhXQ57ZneDArB9agMod7KKkUkpIsShKAjgsdWd0yD6eKaoEEvidxkP7E6hlMiBX2rIu2F9y8jNUyr9jD88t9WJnnzZV4F7QlpsFeJu1KqRh2RxBe4HSe3mvUiQ50HHvaiY2eGManF%2BMNUvtlX9emPlH%2FLbj34wxDhQ%2FNyKmuYroNPU32fgyylX6Q%2BdT0HjhHOdJ9Ji8VawS1jsTRG32Fggjcek3nr09OyS1Nsqwpk2c7%2Br%2FTTc6U61NXZbkhpHWYseb89MEJTBlFoYmIuKZaUwjlioLPkiX4cCPMLa028Y%2BeHEh4%2FKOdlpWo%2FEbkTBonvT7CsVh%2F6HS9xw3ldI1wiyuAswPsjfTT%2Fq9DKv%2Fplodw9KUdFY9hjx1yQXk4B4Fth7UDlIwOuWH4peVLEA%2BjiEviir1vDC7ppueaPVPDPbfg8Z5BQlA1tTscdVKwM%2BSXGctaSSyZHvSbX0tYByaalzIplX6DPo6frc2B3UBy2wnO6Ksw1SxXyrYQwkqKl0wY6pgE1cGKhIgKY6OTOtMZzQqIAokUymd5Xi%2Fy9yqEU69yjAPLBU0khyMQYP7zcHIXVvixrb%2B3kVHr19bxWcH42pmLAcDER0P%2BFMs2m294Ai6DzP47K1s8VJWhQ0%2FelbaVmVjmQrZ1P%2BK4a2feffse%2Filem82gDiPC0cqR2Yf4m%2Ftl4aMxcUT24I19W5AlIpTa4U3dO7DKiPNe6dQwrK4JOD2%2BVZA0f4hvX&X-Amz-Signature=128d18cf08a8afc833b1b3111181da8e6f261d58e1294236763b394f5969e648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

