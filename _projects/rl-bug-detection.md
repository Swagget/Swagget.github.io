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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZS2ALG%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T102230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICgL0ckY9gcPGJM0uUUkDgNvAAipxM2ZkAhK9gs6SIIkAiEAsk%2Bk8UttK3PfOFZvG0kFxfkfjwmxo%2Bh73xUfdwmOkgMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBL67kEU1zNLYD8KqCrcA%2Bq5cxWadBQMzuc4hXxRi%2BvPpjjn9SuOR3PB2aQk8dYu07ipafYIcM5weeJtOsMMMLrPi2OW9E7fB3gROCd%2FAhapwz9gn2Zp6fT2r4s6iH8uiQoBvUvt5qsHRnaKq9ycqpc9tY1APz5DQw90%2BEUG%2B%2Bi6MaDzw91C6xUPHN%2FbgNKu%2FNT7Ie8TNm9HsEN2qOcbg7Qw5UvImSd91pJeZw2FlNfBy92if5QLML5egObs6S2KjYndD%2B5DSED%2FQIGnnX4yWKEmcm%2F1ssLh%2FnPrH5kQ4UzoJSZKs4vrHa0yHGcH7w9BFNwvuLaPpGcf3OXb85WwhCsQvD9yy5%2BCAnxGixhvtFoKiCc2ZWURQW36fcPDZ2ttdZ6uPSEuoe3SE0SfoMW6aG6FSCKMxa4pss5oXPUCtNtVTKqBcA18VwIznVhYHSwEiOyh33%2Fk757cWocV79%2FjqrVPVs3IfgjfOkCNwaWj2WgKvArlz%2B0SM8Sx1G%2FOEp0r5R6FC6ioX1pWN%2BKYv82iDELPc2Hmi4ziPu3CT69u0yuHJ2zC7B4ofWtntqS3lwu5uebxRyKNftV7Cy476RlyC65iHVVDXFXkurgS2Xdlmoy3SXoQHNIz5WJ6X24Vb1G0oiwcwhp2jWkIe3fYMKii0dMGOqUBpEzYTKOu1iOcQn%2B0MmHoThaXGeQvvw70mLH37ocUnPseknjSUJzVO%2BScJQZt%2BIDHzIhWGwG%2FM0qKiHZ8OTzxSjVHv0btQzOKvyRLw2eobqqVS6ZWmxjSUbW8bqTkHqj9ym%2BAqe5QvI0DhkxKlO%2FRDFTo8nxxQyeKSQ5d0Tq4Wc%2B3jBIKtfS7dZYNgbwIfCDi1rKiBdTYmdcAJoLloFs65XFvv%2BPm&X-Amz-Signature=cd2a9cb432680eaa83fa5dfb055d665d9b2e44219b97286487f04539a3d0fca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

