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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7GWYHHJ%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T133529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3GWVG2y%2F6JXA5NDiB2b2T5FyTJSfReIN0d2%2Bhe51LygIhAKbZ%2BEbsrHPjrZHEQJ2%2BRBlvsJ6eH26Wbdkv6zKKWx7bKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCQwLO7VMjDrweT6oq3ANzPNj0w4jnIDBVBnZkUcg%2BcIfisWq8Dsi0dVee4IdLsL2GWcBcnabWOJ3A97bhJtxcFL8CMnSTT%2FCRcihQv3Cn1k5UGn9pa5PpFN0ZMAvnj9I7YseDLoGalMhhhRSIvAhev%2F6OXHkKPgCjkoAzqx22JCVLpGOpwo6nSScTPHyZZXwd%2FGt%2FunkvyMPsR8%2BM5yHGuvv3KuxIe7g81nJkJgBMrFb8%2FtpsJ2Sz6HFJ7dORA3gmuCvxspUfpW5DdfvEIw5%2FBoVChVhLaZU8oY0fYhz6AZWsMkvqdXvH79SnrW8OagA95t6llUmKz%2BCdsntaD%2BvWbyj%2FlKneacUU6KPVx7CnARUJVwou5TyZYmD2zddxj21ws5xIHCdRZYwedSAPuXiFC%2B5C3rbcdcdwD1rQ5tWpfrSxMT0ATI6xlcaCpURwkWmrmrZDN2x5pSrOxNMXFjNSWLYc6EgApIi8nJ9ch5qzNyumx9V%2BJ1YSqQpSva98pkAHsRPdhXCJX%2FZx%2BQ9f%2BxgEeq5RH2dEtpUpiGyaraq0vUfvKidbAm1yRqh6NCSqShjmAXwV08zIScAMNPbQR5CNSprdyFtWmtWCzhII0nFYxj7IBTRcAQol2zov3nmGNW15ptwX3HnU4li9ADCOjKHUBjqkASmKQ9PQno5Ldqsku5d1t7WH5MIDJfakfeo9dzoLKA5wLQ9Yd4GCj9patAUtXRO0p0IQ9lMSi%2FvG0o2KJ%2FqGNdidqtfBtqeuIAcaoFsHUk031I5K7T%2BqrXXYZypg6JBXxnOARd8g9K%2FIHiM4p%2BLO8nfZRXbTpMB2zDGqtezQ30cDk3914ves3vym6wdO7661hBlF72UWQK95ShpQVAE%2BvrJyRJHK&X-Amz-Signature=f542e17668caeedead8c7bfd17ebfba69ddb02b8d0187d3c4e03ae50e4b807c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

