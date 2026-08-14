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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWSCVUQ%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T220956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCmWVKuRnM%2F7X4C1y9IBYTT2JsQQwNymzw7kOmTSMeX1QIgUxXMB%2B%2BUp6ZIt9J9PACDz%2B8Rf5uat%2F7DFsOqmTn8PU4q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPrApNaLKG8mUHE5tCrcA6qj5yQTnhbpF%2B5ahfdKb4sm7O%2B6nBvDe8nuFZ%2F%2BubZqoDAlbEkUVU%2FJISLDnYjLpaWuv9blkkIqfp%2B2z7plTYkxjOQWGu3%2BaisK0CtNPfZwdq8ugloZ0iA1X%2BJo1l3b8hRheggyqRu4KJ%2F4xqQgwGwzT3EJJzBq9p%2BNyOeUvXu0wjJZ4cJd%2BpXntukyih2Oi4V0FPka4QedBiTtmKGXbYQeuTz8%2BrTTW8V6eadCPESWfuIGRcibeF014xk0zW1JvIYTBW2hCvWMvsuMMugQeGYGI%2BCtfn%2BFFnpiXU1dH4JiPhk74dagq58E0%2FBxf3ri%2FZICATYFZJkCSaQf3kXT%2BW118mRGNt95fQsaZHb6FVnxL7cjqKsHQrtbbYT6zK3jM3W%2FRIWq5kEe4uW82f%2FYewTOlNPTDrXCcTqH7W64QhNw%2FMs1UMib6O17SrHGGs4eQDNeSvkKDfn6V0JzHOYGxsXheLJmKoqqDhiJ%2B8Q6hD4%2BtMflx5htJwiEeH7p7OrbuTMp5lIKvk3J9rxbj6njkIyW7xwN7jHjYRtQ8fVvqDVnYITW4pwC31BQHtvgy82LzCXIOG8jUUOEkqO%2BvavMw3d7xZi8CHDS33qCI9KvLXpLVm7%2FDKMx6e7XniyVMLXv%2FdMGOqUBjwga8NiFRVG0WalIlpp9KhU9Tg7wYd2o6LURAYtGARA%2BSe7mZd8CPiNrKYN6QCEnWKmwie7jxwjmVSGpLonauutvbFNn00c%2FpvcX5aJtaNr0zaYq13KN38lDRzdpaGQzj8YLYePjGRMmxEbBfqm6UYOnMofkeiQPaVCxy0TQi2z9dsb4pjbzNuDQGKDldza1GGVEIJGIR5vro2g%2BmT3CiL3%2B%2FbkG&X-Amz-Signature=1b4c10811b451421332449f496541306547aa52d0c05e4ea452f501f512287db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

