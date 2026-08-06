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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRH6MJA%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T150346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICRBY5PLoFkdeQMUcBC3X9YZSfHzljdikGR0IHtfESGyAiEAki2YrXRSG1xliwyR2QJSTxp9%2FPw6%2F0ZsqOhkNtL2XdUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLP%2B7RqJnNCmsV0%2FDCrcA2JEfNkxwwstMAya%2FppoQQbLigkro%2FiwI3NxR4g1vbfoKQ8W3TPTQ9T%2B9EqpAZVyCuwTEDrRIfxXIStc9cGqT4M5tafy%2FMtgXaiH6DENMIwNpqgxLUo%2BEKuqmYfA8cKIiiQeSiC35A7l8Vc5G9dWTtOQyGzU%2FYQAtRvWWPXw54bD0vzAFbhioTxniKg%2F56zx0bkGd9je5AChhUG5GE7ME6%2FyI1PkCWTTmNSS0SRDQw7wx%2BlXepyVbOYXOmB7Pf9IKFO6flr0zlFXNLu0Rg%2BETQ6UaUk%2FvAFa8ScA7LHat8nAOB3xgLeeg1xpHk76u%2Fz4JATkWfJyQSNjHMy2jYURvNTla9xoFdv9gIo99YoUSKT0lv%2FrChOShHqB8K4cUj4wX33heE0l3Yz2rwKxEBTG6%2F4rmLroJwy6hgrsaEZ6O%2F6rKs0eEP6XtpxG4%2BpCZgpvlQAyQQruwwGwfNDPYYGIGMfCEHEUt4Zy%2FwWQAvd%2FceO6%2BL3ItdT1tzUcCoYqEAyIUVtkdTR8rWEu175g1HE5Lp%2Bu0lEZrufAej31RgivjReqqOpMBuDBQzYFk5sKkCLncgvqU%2Fy7LmAVsryL8s6%2Bt7VAl%2Bet44HC0ITW1a0dHzP8kaIe4CIA6qne2InsMJGs0tMGOqUBoGe29pM0zqOpxxiX%2FHDxpTZlDaAuv3DrzMNwTQaDs%2FRwhfd8%2FGlSfyT0E2by%2BXnu4%2F4TwA8I6dmV%2Fiq3sO9%2FM61aOwMHiwA8Z2%2FBcMChzrgYCPx7azmKZLkQq5BJb%2Fd8JKfN%2Bs5Wg8%2BkldNUEG%2Bz7MXr%2B6deKphjTm5aKQjq8%2FPQyp5yTONoOtP84yVey222rEqsRX%2BabqMCoP8mf4q4Y3G4sPY0&X-Amz-Signature=fe4fdc6d03db6d45e62acc05cd9567e7090faf32a7b12c7b50f6dbb17788af83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

