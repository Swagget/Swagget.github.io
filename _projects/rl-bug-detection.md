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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBKE3KF3%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5Ph89atTFIrDDp2PlMu7S%2BIee%2Bcla9WGfP0o%2BJitg7AiA3QIjdyKiTf8aTIeXuSnH7waxW40CDkZto%2FxOgJ6%2FQXCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsfbMf6S%2F5PqsTWvTKtwDWiqD76gzMUtawNnuhyXawDmS%2FJZR%2BM1PwlAKgWu1Vc5yMl8UFAtpVFu%2BcMIKDsCBVja07ZR4TGjngDWI2bIdVQDPtImyt6WQWBAuqH92A2KeA21sv%2FqZzG%2BwG3VoSF5fhWp6eWpoC1Oh2%2F5Bx1GvBenxokoBmdvNc1PacupyU%2BZkHOoTWD17m7bk%2FD8owqWgmG2mRapXrivtAONycRpW%2Fpt7eRo7ZXQNUq0LaKo%2FbaNYHz9oLk%2FkY53qEutBiI0PB%2B0fuoLOqOnqvjXSCdDOPz62lLVUWP4Mhlk30p1WA9S1NOgVUIqSh9cyaH%2F5Wj4QgENz2SpnbQcP0eXQeuo7DmdQYeIzYgp46NukkczRx%2BGpCikLRE87UqPxAruB06Zon4qPxGwY2eIXyHy8EWY6r1hnKN8Sth4DnIEG0q1CIMBmOYJCl5EkWlny5RDmRkHciDW7dr7N0rX%2FXUBz26rBdFWeQpROcGbaGKHXSOQw9ImeosJI24%2BTs5XDNKYcTuSAbMrZrrcJnN0QQ6ZR11%2F1RI1i%2BQUicrASfgP9SC0LfQY26pu3D6GTLxSJW%2Bd3cqh2LAD6JgeNJP0pz%2BVqoYSKuKKldbi2%2FPnRDNbkLvTomryvlS4uhiZC7dVjXH0wyqjy0gY6pgHotWrJm0aZPYsTGL5sd9IOmyLsXZd4WdL5f6WBH2N2kvULUMl6Crf3LT2N%2BLZFfNYtt1HHGWNRcrvn9%2FD1KvKYZsAxuewOti0Ei8yZB7JwGbrvVziEtMT6pGwbESkWtTTs4AaOflL0NuR%2FyjtiMsv7ct6bWWoWPklKF4s0Yb8yDUJlOd3fxDHJKsRsLIjw3oy8fex9HiHi%2BiZxlOh56L0nFFkGObRV&X-Amz-Signature=565570d5fbe3a7b1d09c5b9e474e652acabe8fa252b671490b7f3bb4b98377d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

