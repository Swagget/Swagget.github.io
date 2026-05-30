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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIHZK37S%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T224433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIC%2Ffx0N7d0U8g4WepuXIA2qID41%2BZ%2BFgGAgDPcWmZ3zjAiEA3BDqcLrMcjvNCvo4e23ttf1H1Ftsf%2BrLMiWfGkz%2BD64qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFWjFFw2SFHgswhEPSrcA6gSqih58tTnlvfYTnspS87o3mRJHpwyc55O2wtGPHB4yjq7iMjNqtaRf5i6ArukTUCJ%2FRYjyEdBhgJm6H74HRAfwCN5uJQxwvpBJetL4dVCSBxTer%2F4u6Uan0I5htBu1fY4Cu8BGgkB7dC%2BtjVUkwQ%2BweoDuea81z85jaoZibOgmop76LcYigaeEdANbam96St5dFtGepdxeXEZSnnMmKA4he3ITGHlyr02hQnSvusPlV1TAvOQVEn2laHVzhF0VjCyY%2Fn1cwbIBBhPyHpto%2BHI95qrlwV94JToPDq86K3wBVuzNZNJTS7vRtB6MyL6FShQ9VW9fPSivTSCoBjiXSQyMjIhpYV6YlO6lMJn5H1vHrj%2BWmEgc%2BM9h7de1aq1wQACG64RXKGLAXASPFr3XIVxS9sDtG6i6FdjGf0MoF8%2FOsz07k5uBSwJilhiAA7cFMLVotQ6Paiqb5ECy0remZq%2BTjjUY%2FLFtD53uj9qV56pOacYP9NOkfPhgqfu7IUSa9M9ttoSzyRAS0KwpgAivZ8pTvUAkBK4eAZ21ELYAnxkN4VN%2BNC0eS5u9zjihJ2p4JHPgjOMNZs22cUi1oCRXB7XWN9Gu1q942tKFfNNnzbQq%2F5kbsHohBBe8frCMI2u7dAGOqUB5pYYegwZr3jlD5wPi3RCZRbJhxguvDpxD3ne9l9dSh28cus4ejaTxNuhleEn6k72tcCzDC6b1cKf0OB2OKGzh4clyvSNMaZFFAwy6KlZVgqIXkDp9BhJoAfW417CLJEq9GVuDisW05%2FwWv7h4HRbwBzfKblOu1itUEnln0SMOKRFeQEjwumGN8NM8hUHKsgS9YUE79qcdkAlFZlQLoA6pDnpS%2FgX&X-Amz-Signature=b847dd4f12cbf514124819d1cbcae21f28cef9c8f5941d59fe66e13f8efbf111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

