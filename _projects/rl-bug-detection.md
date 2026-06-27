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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHHL6IS%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T155718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLDFPslIxGAUsQQ1KRCLRFuRcPAgEMKEqz59xXft6yegIgYg6LZzQqEmXaq30lbt2NEkMAhpgDpauIUId1kdSaZrIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHE%2FwkmUvm2TMwsb3ircA9k7bRfSaa5OnS3nxNJej%2BAMuy%2FJRQP3utdgWPUlmb4qaIeQhoSoR3d7h9icEgoLRO4wNV0EagoFt4J4smLZrl2viMrUQcytBzPJJfURk%2FKqVX3AqQfKlqHetZGWS%2FQnJTkcqYczfakRk0vbJmjUyA4LFDQZXwLljE93gQWG%2FZXcqCobwdTq67YE%2FmLCXYsLmUw2uHJbdFjy6i8HGDZl6fbN2M6CvpSaaygtJKDfOckn9HL7Xy5kxJ3hB3MG9IhNiIge6WVU143MW0KvhdCHeRsP9eD59REdXERrnJ1J8eRo4GQmmrFxA5ZZsN%2BKyeBWEs947F9eRu7UBOwLqbHYXsFAnL6%2Bo%2BH%2BlIQhnl2M%2BupU96v1eVnR2MHw9v5nl3FBVsV5AOdBBI0Wgnsa0P6C3Kf3s%2B2pHyYqSuojuxRw8CJBEmbPNlTpycCiwLpiu3G%2BIpq9tAq9LBUIfSdufabbhPgEOGIdjwHlY%2BRqoFZSKqy%2BtDx6xRDAH4NIMVXScFSJEp9LUj8Zhp2EDNn65CgsVFs%2B4bb0JbcKyg7Bfk9tuWwelUullc7YjRRXGr6HSAMQZN8b5aSWF8iL1aknxLN%2F3EczMNK6WsK3Yj%2BLjacS1tOfyKuo1VMmO6xw2hOmMMPU%2F9EGOqUBI4EC0ll2PbcxWY3i2DPRUwuZ0Pxns76Pv3C%2FS0LEnxjTfLmXVXKALQVMmWHsk3kBpcp8gLKs2O71sx2ZC6JWj3tLmiZI1MwMvF%2F9JzRtPrvqLzfeN%2F5BTmA%2FxdldCaGfX1Re6Jjj3pIVAisIsnWsRUBWec%2BcuA4nt%2Ff7VUJoZDl5SaZbFKj8iQIKTlQsSsqf5Kz28zXn8BofVbJ94YuW7avCByRI&X-Amz-Signature=9d3fd44f79e9d7aaae0b477c75454fe476d687bdafa3675ce451df76b219bd7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

