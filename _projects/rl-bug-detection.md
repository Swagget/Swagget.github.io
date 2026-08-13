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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKQRCZO5%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T085912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIFI0%2BT8tCQTXFV74e08nElt1lXsXAmwIxlKl0zfoAaocAiA74EhFTBTdqdhvanLnuo8QwFcDM3e6J1G%2BAomG8zZ%2BASqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM41RPmKyyDhOInJgOKtwDOpL%2BObaZ3M5Z914JQzp8VsPjEPjPppCB2ROK13hUUnEkt5wTiMgNcQjl3B8vYuE%2Fis8qRGuP9EH%2FRQi5UDfCulLChq1wYdFiKdJ4D3aeYaOfGNg1EwH928YcgKTkbcjvoN5XOBH4ifNZhhxv2z%2BLBd9MKPONKDMUgu5fRv%2FjEEOpRIqwft3N9Kf42tM7ojllpa%2FiCEuhwLNMYQjL1xtQOxYHNlZsePcIPYfN7Ivk%2BncV%2Bz9nbGlH%2FBz3MQ%2Ba%2FWhKnIzHeV8dnSimCmOURLP0r2BlrLq397fcFR4KkIGXyxGbHGVCXOaI7s9MkqN%2Bt8xjVy3wiw6hhQDXQOis6p9H9SjKjWfn1QzIamd6UQUvhITbjOU6vRvCQRiRVb6J3Ov%2Bs%2FA%2FoRYEzxBqzqLAUxFjfiHDmddyomTcjTOf0%2FzcSNkw38Z9HjrmyUjEF8G6%2Fx9bQwFZLzQCiwckFdxqAUCsCgHd7LIhsnECTT858PmZs%2FZOOF3CKm5yQqIl5FVj9Ybu0SEAS9ZoTSqjqjfK9nc4M0ieG2wkn8K2RNejq2w0OpBvoOHFSD9rmWK4DjbW%2FBBoHzpGFn4JnFnGSV64ZExJKWszGZJsJBS0ByHvFkwPQf4J76UCGeAWIBXYXrww8b310wY6pgHgy1qrc0p5M9joOrYAtdVXdTHLdItX3XL960Cv45nG%2F8ahXFsFDonShV0Z9zHzDQC3KVUOBj2dz5pdYFIDGNV4qZIFHJeGFBYDKBSUK70CLT1HKlAR3flABDruOPaZFawQPRYVHeItJW5wXxDil9mnYXMKk1SOJtTSdfYEUBZLi%2FseeQw24lQQVf8QOx78zDogxjXElY1wNhiNpw9fwrdxiBfbrLLf&X-Amz-Signature=1bf7489eadc4a22477f9be911b58996c36fe931e96f855cf78b9d7bc658c783d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

