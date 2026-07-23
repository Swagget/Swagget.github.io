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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KK2HN4%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T145826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICuI3IpjArGTxLvHpBqJTohRxVQa7M6EVPr59KTXRl2LAiAucZTftKwoq1CbpGXDJJgSKSRbubB0mEEheLta9N9DoyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGGjvJF73yShxj2a5KtwD5RWQA%2BjaWCAK4ubvI4bOABayMdsL2jEyMHEu%2FegrUxfU%2F6AM3QdocIyeRWjsl%2BOX3F94VZxI%2Fy8usyzV%2Fmesc01%2Bqgb8ySf8hPfrqHarBRFpN9oBtyXNeo%2BSj0iiE7mXKOf%2FgBYKx08sb9qkiS5MQ2UowbQp%2B%2Bc9GxIBvDKA4JvS%2F7boH6e8k7sRCEuIP9fbnyeWV2z6PASf32U8S2YW%2BN63isBYRp2IGcmfdqOv6KJcRSSEkGyDv3nizZY2pckXVwtd1ptzuI7PnaPvnGHumWTV8pqG6TW87gXPzhobCk7vV1jHu0y4xgzZjI19znK1DQq3qSH6TVDI0ZJ0ZQVE4JD5StAoqaPysF%2FcM07euilyKmtNM04wlaXvo70eh%2FiObvlz7VHtdGwMs5LP0eRZmhWA11TNqYbKtjqGOppkr7vLWkM8G%2Fux9E9G%2Ba5%2FBJf7rBJRteA1mulH3m1KaIt4JjIJb1Lfdnq%2Ba5%2BUm%2Bw37aWtyB60Qs%2BoYjEKHNKB6NnoendMF%2F9A5ooYyVhiw5ceRrnqegNqjnwq5Jb53c3LaE4ZEElchcYolKVmD5Wp1IZZYoqC2cbijBFwX5FgF9ETh2daoIH18mojgy1XjoennT0eMbhfH0ZlwxlXhDMwmtaI0wY6pgHGBq%2ByT4W0QFK8f1KmQ%2FTjrkt8FDcVNnbh5R3dXx5eLetnK8pQ8GjcaRP9gJjkZzfx7msfT1AeRGfryiZLQkCFvaVYYcWJWwTodc3wWtFl%2FUtiCNXNGd6s%2BVVx5RAFp%2FZ0kRU0RJlmrgM1z9RoXvwQp0Sw1riijnM0PPUFpkmAzmXFDGvDrlj8i1EV70DW9RWZTwKSLJH5x1FwZdrw4qMGT9bz4AVo&X-Amz-Signature=aff3c07299493e4e15cd4a0cd251a79ae557fb599a8e743a55017855d3427145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

