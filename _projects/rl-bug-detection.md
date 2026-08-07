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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCB5GQBW%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T183542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQPHIZy8yWu%2B5AEmg2OQjONotuYRYwER2AvTCqDXLNgAiEAveirKUp9d69FnYmSdRa77lNFlX9Qae5yhXuPoftb5F4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDK%2Bv8e4nhw%2F9SraOPCrcA1YMDKZ6LF4VKviaQjV06rQL9tfwE5gQrvhaR6UzrckDCLyYh%2BbjKx2pxsw7UBWnXoZnRwLVHavpI%2Bkysf44yF2K6%2BsZLiovbeiiNZxo62pxteNPTeilWIUIQ8Kt7ByHu0mIPl3Q4%2BncSjBIWkg1snmdVmkIwDBgxU5ryJO%2Bptssl0mHS5zuY9%2BecuL%2FX0E6x8rM%2B9AowxnYlX6x%2BYbH%2FezsEg2x%2BJV6zegwL0dkMGKIdorP7qSGls%2Bx0jpK%2BCCLRnUv1VfgjlKafbGCQmSn0xOiEEYA5eHTAcY6xJrnktq7B55QsT5mlvTnr01%2FjtZt3ZhCZalJ4aqjku0uvaa10cqgdP3PpAiIfOujrWwRdLFs%2BZD4Zo5TLPD4VQSIOeWWStTrumkmlLU8RVjajLyo%2FXWp%2Bya0smHWvxo4bP2DHGZnEPHlrNGGS0uMxPkhXkT0hEPmyQYZPjHf23wA1cw7451R3OSBdQ806QkFc2kt7hukM1R%2BrBrDElmNZJgNP6tzBvg21IyG1wVIHsRvdldJfb0p%2B4rfrGtLV4E5%2FqZeyBE3rN2pXNKExDU1R%2FuQiymgQry%2F8f0jAyJTodGd7Fw1EMqH0GGc5tULWDEluzDiMmHNOaw%2F%2BwYpEuN6%2Frm4MPmW2NMGOqUBg2ciIwvBaclWG7eEqbFsyu%2FFiDtqpHj8TkceUZgOpWjQprLgfIPpmpFvmwR6cSkvI%2FkJ8k0ysr7wyHbQnt8MY9LpHXMBIwdiZAne%2B3pxq1n9s82i%2Bx%2BiQsqnPOCsdfcpdFkvloaVgi%2BpIldI%2BCQLdqtDpn2EVBgacPzb5d9l1hYVfey8ZUjL%2FHUxAZGKzZLitSPYgzF4ppw6fHRDT7G6mk5qFA%2FP&X-Amz-Signature=c0185b4688acd3b8c0ce06f5b3fda17c8425867aabb6bd6a320a39a75419f637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

