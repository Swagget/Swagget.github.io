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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEGDJ5UZ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T221104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcakiO%2F%2BQu2bFVnVU%2B67lMJH1kyNTW1Mzh%2F%2F0KqoCiWAiEA%2BCYHCbq7HiUlqX9fVsflUdRnFOJw1cTg6QCTFcT0Tkgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGtYwCxKJNEIMLYuRyrcA6ZQaZV1X7uwILWOYUAAhLUbJvhLZ5LEjxjjQR7oXHUVDsSxeEILvEN1ap0BXWFKsH39klY40L%2Bv636X0lU%2BdbczV2BlmAqp87hZlwmSozDd4xH7gReqM%2FzYt7ZWAA7Zy3QoowxBSVouw6gPOCloHI7TaEJMxRyOWwMisuXge76vXJM3Q7%2B9ftkoh%2BYnRRk1cySMlN6W1F4%2BeXM%2Bco4Ecff%2F1W%2B7RmFzl0%2BOMGXZMXW9HSpM89tsyoDEcqgnNsqfHaq89QKUMZFLPpGZ7vjj4K5nmbOTOPc1xOACJhT6jtij9CKhot0P67y0%2FjC9js1Iqo4dtqi4%2BjszvhbpMbX3lPnkra2VZt3bg%2FtvJuLyA4FlrRamtSGm5qTR3pRdtIRecbuvaI68rD678LSXlJiD64O7iBbyrs1mmiXcN4wAY6EtM1iZZ9rFOTqQgf%2F5qgSUmPOOVV7HjJHaaiAfuuDZtWktnKOF0eDnGApMXVgIaHPAjOeSimBvrxgglhlq9nu6MzVKUqwYqmjCBbaMcAgRSGWTxMu%2FkV6w7VmWDySbdEIkwC5IfamS%2Fu1RzNWiA5YS29ymvalyv8RxjkybmJCU44bMdgCCPHsXTxr5NJ%2FZdb6fPUr7rP%2BktVfpJZh0MPHujdQGOqUBCd4rlzJpnxvnaiYnT6yseR9kWnplLjjU41L%2FK1nUQiiSMOtzxstPRGJA8rPch9Mc0M3l%2Br2HuW68vwubIvu8CbXVctvwOD9QPpn09Y27puAefx%2BwmjwP57v1QAGQ8JGLDdD4u2SV7uj5tYqbLl8B%2FVcA7XnXtGfAR1NS6dogAM29ZOkxhURTP9iX%2BV19zlIMKkTrsKw0j%2B7Lb8huX%2F%2FRa506Btpo&X-Amz-Signature=e53191c68b573314398c147505acb7abe9ab8328a3a9bfd1deb07a20339f2805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

