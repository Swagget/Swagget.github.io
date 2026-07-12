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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VQSHBHK%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T223525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCZIkCN54Vv63tp59bvOIgGMAl1sJVBYQ9cDqHwepHdJwIhAOYd4u7YbRP7Xr6jlM5uKXJt06YLSLL59wWlDYKHwGV5KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhDWfF624ZlS1fK8cq3AOQhz7tInemsXleeeJ5zsU%2BWdW6nr6bNk75IyjR%2FZHDPO8X36kOrG%2BVpoiMefegbOHFcBgLGjoPcTmbkAq5rqevLexGa2gIB4wkYyLD6UYaOoTj4pGiUkWsG6xqnkfjoBnL9MYDsmZQ2bZkZYCQdAwmacvcdiFj%2B7mobfLnQyVrH14wTRfFhVUWNzX4Uaf7SnZvblkfy8DexTpckc0ETSpp3n%2BRSDmfXyjN4OtywOd2MxR5Pcsl1U73jC5CG%2FXyXKuVN5U%2FvwcVBohCSoxplTsaR9TRxAG%2FeB4EPiluJbLCos18yU9%2B9ThBXKw8gLh600%2BDU2%2BqT6qlYqRR7Hs6bxsjSl3LP%2BNcRS8%2BhtZm0ohpCmRGbYRLnh9a0d8pOdq4ai9WNjb3X5xJez%2FqPkAK7XINct6AHZTdXu5ZijyKy%2B%2BdEjNrae9bdGsjhYM%2FWU%2BU1UMP4FA9dC%2B0MmseJGClCfGrNhSNAnNGRITbww0pLo122J%2FgFHjz3%2FdKcNfEv0TrNbb720j%2FKtZIUW5Htl%2BOOIcXXdCmO2qEQeIIAyifyfriHFsK8xsy2cgPVej2soeeTTQVP53aOvP0cE2Mr0L%2BACBeyH6jgXrROghJ%2BBEfq9nJYZoyzWypY6cgTW2zVTCa8s%2FSBjqkAVtZn6pknsQqhH%2FKUn1qyaWrvZIUMyp3vZItMOYjNQiWu4x2MdwDxBOxe1RyqgW9Zm7RhRNIQAq69XGojEVDRLowJQv%2FJSZam0fnYehBtBCOw8XkpAw7tRcgc5m0gbH4LlFFNUv0xuIe%2BZmf4D0ir7v7X3NBmGX9zt8V6uZc5dh2EezrzoLk5mmlrZszZWJgsDYq5YvBUYMOzcQ8qfSlEXTmvd8u&X-Amz-Signature=6a96b1ddbd4713c671f53c57047337144cade5ae79ff27b5a6cabe2bb3a72357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

