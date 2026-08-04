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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RLQCYYE%2F20260804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260804T151330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAoTFZ0HjpapBKBH%2BxBRpH0Rbiqawq1nkf4Ef130%2BJ4qAiAuhtF99oBL2bLlL5VNbdw9CgoKEE4Us6zQVzqgGUwo2yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMeKUH4vZE3pPaiPsuKtwDr0l%2FpdM4GCcT3KQ2gp2dtj9DbNNtB%2Ft1NPpFJmG0fpBOVau1qDSet9HBm6P5nU%2FxUKExvzbxVajrmMXWXkeSg77I1Dg4%2Fe15SygrkOJ2R2rK%2BeBsbxrfPVd89w0T8N%2Bb18gzL6GaqE0fQZIWEzlkI%2FgKGgisMsAxNQ0A4okOOleovINi84DCXHSPDVe46ZLVx8axXEr5N0TWrN9gAt5QUkNH1yfK06V2QeM0PrNDco12DDMhlBmiV4%2B79KvCMcPw0o5LNQYQzX12%2Byq3kqttJKfdPNDOarVTkgfCmlhRAhnIE15A9PO%2FxkAuPJ56XAKWcXueXEzcNjS%2BXIPOlFIO2KhuRKpmBo0pYN30xreXDkdFDNeasrdkZomZc8LUFFNCXgslVvD%2FclyD%2Bb3bKb61ihmNl7atDfHYq6UQXSi7%2FRuWpbkmRvnkfGVjinm%2Bs2ehLjg9hVIQ46YUCcGhk0TgsYW83%2BwKJNeHW%2BX0EPhlHqT7F5RR7DZORgDbE25zx9RMzDoaOOF31V3jHKGOtziUx87YBBp6a0mPQAWIlnYIE9FONiM4TrM%2Fo%2BszTgFcazNkE6zpRhvkRj3Fhh56yT8x1uorj06bQD0VR0TqaXhEbEuXvM97UmAF%2FzJ4A1MwlOzH0wY6pgHw9Cli3j8JR3RRapIqs%2BDhTtak5KlGuL4dzXbzecEoqW8UZs6Aq7MVAxdM568F%2BpdYRC7fRuVEo%2BCrKmj7nNL4LNwKMjXJPUSHytGN%2FKo2YrNrm1O%2BFgZLTOM9lolP%2BtWVdKrJVhBglzBcg9e8mZOVRT7Z7qrjyi4483EmZ8w8lQB83dOwvdcNVhsovWXSGGy0ssJYP7ygloZ0oqhUMMAivNJUiMi8&X-Amz-Signature=3ed72064299667e4a1617f3f40dc304508444a0c25709d45d0341520c27f1117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

