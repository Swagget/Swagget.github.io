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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWUCANYM%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T072603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFM%2F2TaLB4hlVWAxq2q1MSObXEWbu6BVDhZhDXmgj%2BWwAiEA4BjP9W8HDijWp0tIi5vRjdUR7kYW5j5R3Tx4HAh5qu0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwoZfr8GPWr%2FM6GpircA1QbCeqqlc8NiC6jkIoUnZlo9TQHhfeAq19ihMJNVOJ448ksPs21%2FMxtDdzN2dpMtJ770QeGFQSE%2BQ99AyKV9r%2BtNz303ywwwuqYJbSqmrzoReUo9%2BGwW76TGU%2Bdd7HE4%2FSMmD6kfju2XoNV1yNILJ%2B5%2BPPEvGRHO%2Fi2oAhdhRQ5%2Bp6CDPBzRCRFK%2BNTgkVGJ%2B4rYqcXIzmMqCPQjDqtxpOFotKjxBI2IAQyQasBqVWvniWvFYXLzLd4OUA%2BG2gAKCm16UWVziCgEWy9RpOt6F1laiYMPTD8oYEL%2BaLuoxFPTm5qcYNTvC69FPCLgfQ5AKDVpMWc63EZR0JH%2B0qXe8hjW1I0YHTlr2%2FfsJTeG4QlIvQ0D%2B1eOh5FavFJDbCxpeBdraUkpGIfovEoF125hOrXREBPEaSeb1jjntLEp569yFQd5uoMU7u8Gmg17y2tuxEL3CPc9OXPJdorMsxdgzguE0dn73Z31rD5mdfsw4McFEQuoKMmFq7Jbv5w9bslWgLP3Bn9PIgOq10peC782aT1l5B5uDpfsDLx2n7fOFbzF6iWKCp%2Btzz639shj7M5wsDeMwlcceSklJd4szKzdtNOIAdntod8zr4EzQehzwJm9Y6KP%2FFa%2FEDW49bBMID8i9MGOqUBOQOyv55sAwht6NjcfIFe3VJ8i2MXBX3m18rIfOk2m80H44sjvhgDM2cZWiwF2mZ7kRMuMuVVKjUroi76W%2FONxTnqRANsG6mwLiH1%2FEjmeTglf5XWuychDIso7LMmebKSVrdee2PefVsF5tSj7NqXuJOKD3YPxyMwZr4TYx3C8WyTqafHovwAmrL5ArIbs0VMoMVPvcSq%2F0qiRvRxEJkMa9i9L59G&X-Amz-Signature=99390824dd5b41b40272768ba0506510240cca9d06266211d962451957143ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

