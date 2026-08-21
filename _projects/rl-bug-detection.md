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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHI444X%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T231130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEOhUc8VfpAP3PPB1MNS9oMGgFwrJA%2By2UXSkNtZtEqQIgXwEmq7Q%2B0Hstq00Lk2n%2B%2FdBIqnXn7R%2BG7imgAbga5EcqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgndCNojmTs5Xnw%2FyrcA5CvTygGlw5aAiUu4v3HHw4LZ2ESgLEsJvEivdOpFMTh3fzjtKmDWRrD184NU39eAi65HICehVHzn8E824NvjnzdKBt7WI%2BMK4EIcoIF5KFccdJ58k6oI30ucoOmT4Gw5sciILxWM2oeiaZoIdXoaqn7zujx58xVGe%2Fd7oRQn%2Ff0YE3EjcJTcVrj8ypfLYBjhHaPtzhTwzYDQnAmz1zwmspUhku6cBkgqUkGVvQVR1vIbECX9LPUBNOZeANbO2wsNN5FdV6M6dnx9KxCEIl%2FDUjxaq14D%2FW9Xyy61KqoDATEVZWRtw%2FuI22ZCe5FvVsOkLhEVXMULpsO%2B426j97uZrHKcVuDpDlHT2lWqobOrzvLhDFlBAl65EcgaL63t6F4DQsaHDsfE3ELHmAssZN2f6mwpT3E8B%2Bp2kQRPdRjd%2BBAT0%2BjVCmRXeoQrbYEt9xjTaBs7OkHQvL9JF4NGuAkBrLg6tPhJYVNXFKLJD0ty7Zp2qpLcJjeA4jqHq3ojmjkNqNOkjIZv41sxeghZpROuNmgXBHlgyzs1Eygq%2BsAmDA3HXaBueRbo%2F3X0K2zDMzPCZiB6qGBETL7azTQRa7kAIlc4RC%2BoNr50o8rieIJsBfDjCiQ3jHDebAzbyskMKCEo9QGOqUB1ncOLn6UDKfE%2FnNxJq1aSXGp719G6UidW4qDVGaG49m56tU%2FG4OzQS3AFFqexEjz%2FP4HCgXop7lVl%2B1mIg5k8Ifc41PM5t4Cdpy7RVL5%2BLrQAFK85TowBUuGlmiRhdOIKCKf%2Fivrbq8%2BR1prW0b3YrePNZy9B8i3yYlG4lMA%2BHH7223nHucJck64%2FOZAl87MlpEcpdaroUf7TwHxqm32hZv%2BsZ0h&X-Amz-Signature=ab657638ff3601867be9ba7654590712fc6f0a13bc2da78ca316e3d57d134ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

