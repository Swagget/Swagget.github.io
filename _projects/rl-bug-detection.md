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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEASUER%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T161719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGccSQA1F3ve7jWdlRbc6K%2BBkFSj8tLiEPMH75%2FHoGgIhAMfGc8QG2u0mBaGXgLYiljiRpiwNFPAg8SNcNnDO3sgBKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXRDSBD2Ekb3cYJuIq3AMCjADB%2B5YzfP3bJEyubkrbUL9tGdONDtT1Jb0%2FLUCW2sF2qN1JPSM%2BWihmBvQ%2B1kIk%2B%2BbiktYqtub9E%2BbRc%2BYOeqBHALYvH9IBocIj00U7wEVa0yoX2UvddUKeTjwbnqjKLyn5412tbg%2BMwkWFTaIIMrbJloey9PQA7%2BhU%2FTG5bqRTsXCnLdnIQjeruULGa3t47CkVqtPv2hkLdvRTf%2BcuuAGew3MehBUB3DJ2i0rTjaZoR2taU0Zx3mWPb9gpTSwUNslm6JxxyZwhZnRm0PIGy54ZqUeg88My2Swp%2Bv4%2Br%2FkmFk%2FI7pgbAEnpJpMfe1U6yInzSUTWpDW2e9hSPX9YzS8EfS6SgM7xORaKw2eUkEeFVMWsIXeaw%2BSDFDYVPMfhzpUTZCKzKUv06p9N4pHsRpCWGKIJgb3hVNAW6ycgigoWenTChvxvYGkmD3aWu8bcn%2FZnneRTDa3N%2Bwi1XDPa2hJjnSLAhgQGNiJfPOT%2BC5jWKfAFyskxyXJ14r6gl1fM%2B9IxoGJKMzlreKiLb4f02AS6WC%2FtHG0Wcuq4OILG%2FRlfS56B1N3BAN1IW9Vo4NShTFBW6v6eojM6o0tbiJZeEU9SODwxAlo%2FnTMntogQUBsyo2rotZlPD67bPDDBxKHUBjqkAfMzsS3vv3URhDts%2BcRROrEMIupJUsAoJVPGCqW8thkZRdfDIOiI8e4nViKWbP7SppXX95yT0qXc%2F3WDA4J7lVfYpVzb%2FDfKjX5lnmHSV6fR3LAISPljTnOUaRG1Ado%2FHSHdo5W9LwXqVaDW6RP7pN%2FiFrGJt%2F19epCyZKP7tguldrRx9i0xj8m5jApBazKjJraaYZO8q4h6ofRZblMKtYB5Ua1a&X-Amz-Signature=3d54f68ac3c1238121e96f8748e629f847aa31dbbf7ec9cbbcfe18f09634c541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

