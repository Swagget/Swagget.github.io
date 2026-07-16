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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCP63Y3%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T234510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrKlWJL%2B798FaoJnsUOu5VDM%2BFL02hGL7v8xbJ1oZEdAiBp4kaMUI62DTtoqK7jqL4JevjPzLYXHHpxY9fP0KUc0yr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMZ3bPZsYlBlXIP4qDKtwDYUo9y18AfrcpHGKrdBMacd1MXyXNeWa1e7CQhxGeWnowbZisEIs2bbjgBxUBzeXaB1GkQ60fJc4ptvg908u1rh%2F2fFbydu3F71uhh4GUuZd%2BjajpGlF9ZAHNbts187XUxiUKim%2BAHrEAmJ0lJm0mZaRQAVtrnh%2FC7YRgIZtbI6qRtVRWccvRozE9VrcV9oRVn2zZkb6MgHrUkwQheC9NUhp%2B4CjD5Up9MYsUBkYXigGmCZmykRALmegRfkKjim1slTFSRyFCqnNihIz9xSKw7%2FS1fwj3L9W0O7VDa14w%2FR%2BkmzSsgIAvgTkcswzl081z2I%2FmMQGcayN0QsunyoVB3r5bSkj2XNB9xx6zR31A%2FIYrBeykdwHJgO%2BshbgagFOWyez39BuI%2FCyTimEpwcNVKfp3z5YRXvkN63pEHb%2BaMzxKqMATjZtQiX9Xqnr7n373N5Yp2ZEwSGP1inQNDjEKIVISBZu%2B9xkT5g4XdeCLzuZdJxA5AUJemjxjDj%2BEAc2J5fJW1cCf%2BcEHSSeGcqEpCZH9nzAUBDAOTCn2FwsYWD%2F0pjXoAzfzCoWg1MSMkEXCnAd6juVbmi7I%2Fx1O3RZ80c1iKWQGBSIAcG7GakhfrRNrMe9qdcKpbS9e2%2F8w1L3l0gY6pgF58zzxNeWxeJ2A%2FchEr%2FDRPx%2BwKG1op%2BZyOWrbtuACqvLxayScnz%2FhiEb2xU4SvcDGR%2BgIAFEzAHLugDjbbVbCbRcsa4tq8NUu4lCuDkoP45wds3XM%2Fx7qsGQ6dvGyVt4HI%2FC6xOXxXPKcqxZgcKJYPjVXneP5xbEe9XQZIsWFCTDru5IBNirNFJ86G9WpoB30VMXvFKKdgQCVuANdARrj26cum4J6&X-Amz-Signature=d02a8d073fe59245c8710e8b401bb54845ee8f3dc0ae53e1f40042b62d6567c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

