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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5HYB7EI%2F20260604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260604T053048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTP8U0zGtc7HkmoOULj4J%2FJWxqAU4q3PO22fqhYwyzEgIgYMBjHNcy0toEZHkFwajMF0f08KOtDx31V%2B8hF%2F0TKroq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGfF7GOJgWJoZCcO%2FircA12QtDkg8YZvb8RFZuor%2BvVTRHXCOBhdwH%2BmU7ISpklJBkj%2BLDJfnuk2oOYXevmxdaAU%2FCsGMR7Txiwv1min%2B3o3loAYoMHXbaLobXibkl4KqCL95d6CBfMa2%2Fm31PYVp4EqA9pbhjMK7umT1rW8G8B5Kv9PCwYN8nVLXRdpFx8wm7psyuNp0x7yatsRNPIzK1%2FR6wZToAU0yD2iTxrxtBVecKBtOsCbMIBehHCK1rUz7cAWK19h5XLjuJkCgFUzhKSJfTGBYWx9QwqxQA%2BRVpbwAQU%2F3nVGe2cQrm7mf4jp14CFOUicADqjYG5qw7RcvDH2pKwf%2B%2Bnbw3S%2FLghJrWfUTtspPOGMDMYkX5kNP6gDUw5ASbtp6Y83%2FQ%2BFPpgTTJcYxch6cAiXtpAI3iBhibQtOZsoqBFF%2B5qHDDd3xO3ta4dMK7BNJfs2xtXBvKPfmgynZjlne7Y5udUL3CbmSQLupKViY0Y3WfmiyaPYmfbvAjZ4YyPXG4BIZD67uRNceIlZeoo%2FVfvEKv2Ph46EUh2QEVsFtrwlYSPSTyrqrGggUqQCkqNsZrtG62DCK8ul1e8%2F60gxa9rTGUVLiGYphq1QN1o%2FSexA3m2C%2B4NnD5UuWWTdoptsrFcrCXPrMPmQhNEGOqUBqIyt4K2Uu35oVBgEQTvt1UmlYqpke17A63cfmbFpBVhRuj7Brv%2BbkOy4QctqKPe3JRwM6skiwoqO8nxDnA3owE8sn1RtfNyj%2FrX9TCOeOmMPlQk2otFU9HI7K6KQ%2FocNGE9gSI2FxTdOP%2FLrWPutQjXZSaLX23lGuq41SwPr4O4x998Smm0W5nT%2FNRGtqsC27jdvn3RYmanUdBt276QrU17r1FlN&X-Amz-Signature=9a6176e443a6a6aebc4682a898b496e696c0188ea28d0be30972563abab2cfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

