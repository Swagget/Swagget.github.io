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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNUKAWU3%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T214150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCJ8pD42zTE96nSFezNokOKxyZQj%2F7a1N%2B2b4g5Coyk8wIhAIqS7zECtA7b5vPHyQVctQBkAsGf4TX0ZdaftIzNS6igKv8DCAUQABoMNjM3NDIzMTgzODA1IgyrOILcAe2Ki9OUPjQq3AP6DHxYMMFyX6OaUrCivqmvDfOXIfhv1XC8kMOztvrMqcB8mw4MbiDn4ReM2LJJhK810pBZwjFq2QOh1z59z4P0bbpBdp%2BPQgmrzfhY5OQCQPcLWO51qHegjBT1bhdAPxoqER0e91bHlldwEwr1q6qRTFpawMoVaKUJYJRFwl2P5euZQeONcbtcu2cLvfiUEqdLwtRvOe%2B3QOJBSzcwg9WMtu148ZvXORMAEc%2BHvUZe4dkfYYDN0OnIX0%2BXEucc03e9oqbzdWHWqv4x9vhcmLrrsouAqLxIIqYQvkVSN4PkT8b77t%2FTr70LyMsjmmXlQ6xJq5hf%2FlggPHfzUNFPuUNJ%2F0u6REpEkjTq9cbug0fYaqWZQKKHG63FyV35TSCI6qGDcYjxVEDd3Qfm99HJJQ3uSvTqd7fornkPasIKFEbNMuyVL5RjFUzwBk943KhZIDPaDfkoNmWkkQt0WSjuF%2Fn%2BBig9jo8GuE%2F1nMuBFsB%2BPWvb3NztjSC1aAdHaFOnRmse8Rniapi1Ezcd4ll5ruioRKUvBY83ISXSSl8veE5FZCN4RFlyc6oaFui7rXWbO9MF4TZJBX2Hna11qix491BNZikmdfiSjvyKkVNARsOAbrHtlXCwOaxsk4n8BTCzhdXSBjqkARCPn%2FmF110K4xYCBcn4L9LOXuLzmmBH3BIcSpgKpqWIP6gVXQEzDBFda%2Fb7baTXDXxj4G48p43SHfQpbTBqr21N6cl2PiUr8g22BUDLcGWt3ZhFaqjr29%2B19WFRhQLQyIelpI9Cf3SBktSUsjglL%2FtYkK6fWmnUSYFoKInPrm3LlCHCliyqLiJi6bRa7IVwvcyXUXG9dvr2%2B8DblQPJudStS3CF&X-Amz-Signature=54d466a8f2e1843a7394b650241fe779f771084bef2ac006f5be1dc29dd1758b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

