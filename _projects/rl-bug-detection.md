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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SDPC4NH%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T215940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYFjJwfymBKMITFgiSq%2B6jE4Ic%2Fp1wxJcozqd63EeW5AiBriQRf4nz1ACJzBLgwiKosGsEuUNOSQLdwciS%2BaPseASr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM1ZA5n5sYp6GSq6FMKtwDs6Nf57jCsLi0zhgJI%2F%2B1mRolL0e7pSpdKEbyu6m1MAAXzpzqSzohxIOyHzJ8x%2F7CTWkalCk2fFTp6Wy7YTtBAMsfPwhFAiS6EEx44WSwxC4xovI1NASwnLF8yhe3VKJHdOU8%2FRe%2F2WuBiaNB4tZ1%2BgtadmxGenOPo69aV13xuG3hyF%2B8JM3NDXL86c5Q256Nqcgpb%2Fedkz6ROIe2p8k%2B%2FCHU1NawgwjRNqh0TJEuh%2BiQzlQNe2WiRcPPcvIlm65FsJQVZUVSswqcVNIX3Fa8qT4rLh76%2FFTL53wxRwVnf7zmj3fWu%2Bpxpo3A5Ouv36hIdIXEy%2B4uo%2BkPuqpNjCTKadxvcplbx4zjdK7y0mKBEfJwv%2FJ5aWyqxw2IWxk8MS0j3G2%2F31v6vH7vSEw0E1olfmkJYn3RILx60kNk5oK0Cz2XzmnX%2BPXPruJgMfV0vHtLKKVxwa7EqtmpfrLz0iL0E26MZ%2BUJfY0Vodi2AMUvbs5ZlRVsaRuONQ%2FAV%2BOCP81kObkd05QbEKmPkNJUVWAIiNSgyyF4yFbWW2keHb9ou%2F0b%2F8QOkFBFi3Q907rWkV%2BtSw4T%2BIHZAE7hjsiWTVRCKKtOep8a9fXnBvUay6%2BR%2FgWxXfRiipWbs%2FrbumMw0Mz70QY6pgE0oJU4js21NvPZle2KMtN29t5Q9asvPDBL7%2BirB9sA2LETHEfrh%2BigMPUv3W0L0ya02XC9yrOdsuIIptKdNj9wF%2FVfsNryCw%2Ff55mHqBPYQsXKTE174txjR%2FCbxrBhveQ%2FJYsDR%2FMEKYTxH%2Fa0q%2BdJPwnsBqJr6UZTvdt6QG%2Fzs4FAlQWPrYE%2FgBpl1jsAGBRD3Jg9jqO2aefCOtfgHx3vfwKCgL5c&X-Amz-Signature=fe10e0d916ab568eb712e0975bfd0ee86100c6029874bdaf2085ba7368883775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

