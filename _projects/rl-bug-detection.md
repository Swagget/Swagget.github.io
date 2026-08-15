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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625O3UGC3%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDk6bS9x0RuGHf0LSkhm0PlW5WmC3IPvOsFLv0K99BdsAIhANZMDy0C4%2Fvpxf0ke60enENeMTEj9ACgY8G0REbRvnX3Kv8DCBEQABoMNjM3NDIzMTgzODA1IgwJhyaXMYK7oCkrQ%2Bgq3AMXAWZlsKRn%2FFNHUU%2FIG6pd%2FNq1UItFMd51l8abZzpU1jv5oJKIymLM9YirkQbpFxmDrPiLB0poBfwJredmLYJ9d%2FBjcQdynm05dzu5BwML3zMUNQxqSv2Hr3kqMM1Fl8NBBDxLlY207kjCGzBXlYPs4Bj3NIqfgVWqt6HAWXrcJ%2FZz5%2FfPBLekv8z%2FCa7x%2FhC5FFNSzqFLGCa8FnK9eNtw4%2BqsXtEZepgQXKxGASP4%2BcW9%2BOFlPw85bjPPzhiYYbJlg2MAadm1mS3DXDfItW3VCYGHfZyQ1tPdDhyd4H%2BSK8%2B%2BQZ8hzwP%2BPNNw64%2BTRG%2FF6CVaHr2TBP5ryS8ymivjmH2Y68noaAw%2FZ0d5Qm1FS2X%2FwkwRsvxkMGIno%2BPUQXuV3Mu1IMUNoE%2BdRADCvAOl0uElGCo7tXhFaYlQAfXMdPw1mGOND4oVyzl%2BZdhnrsQSZ9N3kKIUpNvJAlGiGgS5gptyy4%2Bcavxlu9zUocyRLjkkiWp6h%2F0%2BscGkjpSKV0TbOEQnDnUCdFSbVy2m79K05vTcuUH%2FJYlc64l0DYG%2FoOJBnLB1cjV7867rzmHgbNJ7q5DrE9BjtBHX5zwet3Qthfnvcrc%2B3x9I0osWPF8uajk8xTEWes1219pW0zDFtYDUBjqkAemFRdFsi4456BelFDbZcG6IDDgpg77KDvXEVD80Hr6pvf9Ghl%2FyrzbxnaJwun5HcXf8X%2FsMX%2FRqtREPgBVEOv%2BPEDLCvX8PpGBHYBsqpX4YqMSt08Tbr4zsvNPTDKoXbjnIsXg9pria44xY4hzwXtdob8zoMENyxcrwv4COMXcvkZ4hyMCFjFfiHWyoYJhX7GkeQBgO95w5ls6cVCssUqPV9zQD&X-Amz-Signature=8d2432be24aeb9bd6ce97392ff78f2882867442c9e07f1cc3cb62808a2449948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

