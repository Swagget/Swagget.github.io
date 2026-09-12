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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPABQ7O%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T112006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3TfzxDaDUZ8KEHuriENVxsrZv%2BdNlawqA9DZqfEVnrAiEA6pXKLNaGC%2BLFrqqoUySLY6zf1qvthEzXGpCJvm5XfRUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBSdGUO0%2FtoeYKC%2FircA9FEYBC%2B5ViLlLgCH3PWFA7EkOTVQi5ZoLEYBYLQT3coaE0eMz2ZGCQ8IvIdpyoij5eEFwWeeymlwwVS22Q8fcSaOAMUddsOkFaSOWeS0xUTkbrlirXERXPURBA9BO66sdYlHalrrtQgY6XvH8CMot1brMSdkh1QZYXd5KHmOLGqZYEFIOrfrugQKz9sTJkm5bREdzsUZpjRxz%2BPFpTNyFg1Vu73%2FBKZyT0f1%2FeAuq0ohXYla%2FaKOUMSFINe50J82%2FfYfqBoOZmrSgJ9rv%2BQNvUGZowVb48MNc3qFaFz1PlPY%2BckfKYeZS1%2BcrjbYOjLlE21IFTOlUC2cGM2nA3vuRQaO6LQlifpGnzJWVQ15KL90Xb7%2BxbF8eIJUicfPd3jj5YoqqbdLpQkMVxkBQxDu9s60HfHazTFe8Vyb2EfYwtT1drmuK2NWzSxthf4tvR9rj2PspOd6rbtUzy4S3kL0uuR5G2Y0C9rBMMF5YEF9oZ1O1F290AQJpjt3SWrVBVokTpBtI1Pfo%2FEFmF0WCP3JstHC03NGpHKPXfjro7wULyFQCkXos2r7%2FR4dFYLf3A6eObgHZyfpQ%2FZXnR3ATL2lmSmUx80z5XkanxGUD7%2BL9kSjjUh1IGzyeCDD8dpMP%2FPlNUGOqUBbqSsCiOQ%2BfTwRq9V%2BC8zZZ1Ql6vDD37eCcx9iRYXSSuOWPk00U79shQu%2F33KAWxbX3f49WWoLmJGzQyZ1%2BIeTr%2BrtjZ8CaNgSEbK2DJ5EirJ81zsouv9Yn6qBjpIlbOOYUAzsykvuMac4%2F9MopRWg4ApZEMVupFi7CFIp96kCiz2fuYULmN%2FPhmnCr8eg9RroHiZ0O5KKpSQV0IwEZdWr1oM04oB&X-Amz-Signature=d1c72f88474395460fcf10181c9e30b1025675348d9c22c2c77f7d47868e42e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

