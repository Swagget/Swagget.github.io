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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SODAH4G%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T123825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjPdOxRjTjmwddfy8OQKH1NbjiyBDgt0iVYXvHfmqu%2BgIhAL40dcdPXP4AM5IsJ655rfAIBV0mxqZOQj%2Fpyx%2BWuhNSKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHECtxN0oeO697h1Yq3AOFJvdDSyexkiyZ4ZyyHm2xGLxXM5KR3fUUybaAEvqgZikqZCFScSjCjT6wnNMsTr7CLMrUP9SA618X9DXAulXNnjCsuQSeUJ8jZQzetffNnWMC09Lv5kFK%2FvN2fp9z2bj77y52kL7bu1dWd%2BOr1egKaPzx33mlz%2BNcxjxrEequxn9rCPXEby0zqYkRVnoNcwmq3j4uW2LZ3PRobVy4ioZz6mtWnOsT3DUMzQXkScN76A4iZf5mMdsJRKYviYxYVpeQtgvNRVUnvnaKmcGi8VFfG3aUhKTrFOZCnhhO8pd9Birpa%2Bem%2FdxeKfgYmawgf7KdxuK6bZM3WeduzZwl7NsqwWlcr3cln3VDn0lGeOC%2BRrH2fl6W3SkRmppIetKVhl3qDnI%2FBvp3nlXWs%2BkNkQ9%2BpJDn3onGuo0td1I5QWfptyfwp6ZlcemIOIFHhgCazpP84vW4cQu5WWtRj3HHr3kYLYICu1K12cBpEczKofCDAByCN45Hd2e2e%2FdKIZm2xUXG26etoJ6A5a%2BpRZ2cn%2FEDCEzmf8eJjL%2B5vehIkKcvHhjSJTlgmEOgz%2F1tP0zDInOWrKXLa9ZaG7PEMJWWohrR%2BoAi4Y2OBonv8Xiaz6TZ3K1hjQw4iZaC2tHh%2FzCt7ebTBjqkAQWINKFFeMx3kUuWGTOcZ5kZovQNFVbPkHB5TrYtQv%2Fq8sD4tWefq7JlwD%2BS990CNOm0GKGoPGAc5pqBrbi0ATE8QiJP4e6iliavjs2CkxLOgh6Gh4mC5NvBvp1V2RXONv45oEjCfjvitfALYpyz5oRvxoUVWhxwBkn6ODAF8Ye9VOzm54ifLzMNf8K9vkUIOU2xOkXA8p1sFvAS3FHoyE1BYfT%2F&X-Amz-Signature=6c451b48ffe5c54c455c650afe1ba357a91b6e040654c833e53438526e50a754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

