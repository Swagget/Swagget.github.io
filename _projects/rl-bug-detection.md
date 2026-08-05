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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PQPREKP%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T102046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIG0Llj%2Fv%2F8As4Jc7C7n3OBEDpm4M%2FES2CqIohUc2u6xDAiEAuHTXNqrBp083eBoGH6As283B88Blp6TVk8%2BqgxQSBAYq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDL7O8rudLWkg9JkJ%2ByrcA6WpEpfMt8oisP%2Frwa0nOfiLzRuePTGS%2FU4SOVFdLN3XNqEXW2CdV71O5gv5n9br0s4MBdopX5nrt9AlW89aQe6kX4gO7gUl8BCVswxlFEsgs3pMtkWLXTwFBs9SqfEpmXvop5lnRuf%2Fdw66y7l6DeilNTk1OavctQXiHW5HKQbk4dmagGpuhHZZ8Q6o%2B1TWsvE8B0xMAC8Dk1zlXESQcOCURBfq22DboE5MEXRY2MEzvIlmcr1fKKvw3O%2FNzq6PEJGyL6XyUkWhqC7GzhADv3d5MUjpqvxQrnjicY74kL6JaAuBalVWARMv4JySVBGr%2FilAZ8yyJilkJoVhWdj4m5OtVLN6xC9p6YQB8lW3Lw8YMr1n36sikBA3DSk3uSqJhGTtMqH9HU%2BkOth3Jup4tK%2FCQrsi8xG7DGuHlxb7siK4GJYYhPqlEWV6VFPnbfEPp3m2io1IqlTxKzmuTk9VTTlbpuYKZB8cuxa8c82YTeuIbtpzYQR6IgQ%2BDyiVttF%2FU%2FfqoxcwX0nykexFeU9pLLwQpG3xhQ8MmkGI%2F0bkJVV1JcAl6Dqywuy520Q1slCGm8oQXh0WbXi88JZfalI0x6N7XUN0bz0wLhh8vYeWTOJHLDFwedk%2Fi4KHWYR%2BMJ6MzNMGOqUB99qkHKMQ%2FQ0YqThF%2F9zN0YSBE5D0%2BNS6sJ09STxW7l8kNN9JttSdBQOPG5O50wyOsf%2Fdm4mTsiAFR9JFLwPUtNuFeRoGyvw7lX3kdVXFxj6IO9evmFbbHN1ywW%2FNZy2ZlXuJcK%2B%2BVHPtg2b8Nk9X3OA087rD41L4mtZMsngSQQptdGJSJRirMhWGHT93nCwzZ2EnFCEmWqTPPdsDroZ9EkyO3YbL&X-Amz-Signature=7448ccb7ba78e381a2cb880e87218a609f71227ba81e339dd0d625de9a449a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

