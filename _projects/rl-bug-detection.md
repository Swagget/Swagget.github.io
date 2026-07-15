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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HE5RJY%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T094622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID%2BGrUW2JzYZVEc1thA43m5m1wPqi%2BvyL0nD%2Fu%2FGE2wYAiEA6cExlKm3ZpPdypG8dCH%2FRBB1W5ZxXPexqiLDDALUzoAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ9dH%2FtFnqhHdGs8rSrcA67WYt6KLq5HoAitcmTZTKvfDwxmNot7CwX09RR%2F%2FSeXwSnxC2zC6GHEbTbCRDgDctFBPlz7sgQ2x2bYlvGiKXMYL%2BZwSWzYuD2o4Y1Kfle86Tb53v7WnATbazqXLwfewPBHSTTSjLNST%2FpVRiDAkBuvakTbB4ij4QFxEaf9uWsBLGp97sbUPSl%2FSSuzsuD7FU1cQnUBD8%2Bi1vRcCcISz6owr7YPFc%2FKM84rBqw%2BadBUPa0w2GCExYUC4jFdCOJ1KzMFYyePnjGgEeNbDXPQCwbdPuOZf4ak6tw7DZhKt0xqwV7N%2BwCCfdupBKBKAXzFtV%2B7%2FWacP0JILT4ICzRttbbQykREFBFUCw2djERxKTFNYb9Hb%2FF%2FP5EAaq5YFnyrVyeOHBSAZ7uNsbco4ycF90IM8yRHq2ypi3X7DJb3j%2FDb%2F6qbBpumXQgIvAkqQKNNS6V3E23nnfshCaE6aHTUdWW6gvMGhSf7WNK6fFx5DFzK7gzH88rc%2F5GW2fUXcXS83byPMc8b1M5b9jfSzKq8wEWpRxv4F5HZgTOgeagDCR9TwoAzqTb9ysO5sDEeOdzYQIFVS%2BnWkKs0ofcoAy5FxUvx49SiYEV1T3avIQP7t7OprI3RrHWbCWx6WZj9MMqQ3dIGOqUBjOX%2FxVpe1YOXNCLVBgFRNoBxWX6sUbAbTGUCbVRQHrlM5M5j3%2Fn1BbT996F%2BGQOjHGl1umBam7wPnZg%2FNxAlzetDDNZiMWTScXqDB05XnEfyYlxJPIFNrMoTwngyFPAvBcXmcC2hjz19IED%2F1SBNNtUJWhnKYMF8EYlwLratAyRFP2pEPH5E5CMOvmxHspcoC%2Fc4ejeZwNhvdT5gcEx1mg6G8jmY&X-Amz-Signature=1bc5b4ddad6e3c45e0e3b73bea5879f79755d25e30aee9fbb67d448fa9c1e71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

