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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XES7HO2%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T105612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQD8M2AOMuP0Un3y58UTHtDL3AsN%2Fxskc%2BV0q0fvuwMBDgIhAKZe%2FqSXXULAAANBC5wv05xR2HHmnvadz77mobWG2KNMKv8DCDgQABoMNjM3NDIzMTgzODA1Igz9Tndx2j%2BiHuE%2Bzq8q3AM3IwXmcqiR6ZoN1EndQBZseEAmq3qtpwA9lfAuuCcryin9jG1GiXiGcgbxVh4oWy%2BNKInayNxptaTELEpkgDEEXfyam3ie0Q0OJbeqisk6LlySp56YkD2Z0JSHy2a2AqEENxAi4ZZ2Y0JYDVlusSpJAulKCbxbhe3vzFw%2FQJ9gf0ShzhvNta%2F3yBonuN457uUC7pOsY%2BZk1wEIGR%2FpzCOElqoAr5G%2B9%2Fm6quPuLZ7X8A5pwMfWYJ5r5FNicQqsOR87sjEGNxJVf7Bilsqi1VFxk63h0nS21NXsu%2Fukiw4bCv341Gc%2B3vYypIoeKF0536Zd14Gmak%2B0NgEBV%2Bh9MsoDqo03wzNeV149u8ygguYj%2Bz3eWeky98DPSr0G%2B%2BQxZtJoNkP8hjYtWK8QdrpJ92fK9IdrDXHRRj2VMpjO%2Bo6kiyUmXCH0yJR4W4m9tV4ol39CZjwEbZlZikg9li%2BBHH86zdG8n5dX7tS1EJXPz5ADdxfqaNFhHBv4EihJGJ0%2BFPtECEe1o4GO6Gw%2FCWBQ%2FfTjloOX%2F11X3lLHKtv7oCcBIdGebvidIrV5HKtExIAcfHP0iNpkw%2B7JVqyI9KmHWKvvt4PB%2Ft6nE8cGs3UTSFdSTS3pjdrbSF%2BknSp4YDCW%2FKfSBjqkAcMAAkFoj8AoQ1Z4Fv9lO2BRzOyly7UkZHKKBW%2B3OI7qp0eI5DVrS7ugzyoDj%2F0I3sFDTa4Xa5EMab1o%2FmV6d3pOm2Tgj2k1y72eIactvK0OgLbCdA2hct8midWIhqr7yppA%2B6VzUpvwOMdHFSkfnVo%2BILxyZMG4Go2Sq9xaGBik6qhBGCEF7kYCXGgGxomXKmKP8PHOVDKokwLrOQFTvyDU2dOY&X-Amz-Signature=fbf371f343484926792f634999f665d16e2e7ff0f2bccdda0c3506c7544c4081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

