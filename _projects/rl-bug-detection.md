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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHWAC6KW%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T162406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn82ckgRQePZvfr2rdCvlxPLC8fgQmOw756zsCvtB75gIhAIhZZOmSDHbDUhsFiyBGLss81AYcdHkdYU1zd1T5IoC3KogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3ddSsGYpCnfXLb0Iq3AMYOsazOpqtUO2%2Bt8De13yJA9DdsL6gvMH3iouhx9TZuwMB%2FaTkEipTVfW%2FpWBcuJXv0eXlW9TJzjXsy9Ep1uVulBelkGgQjKuHfjWOj69KDb1%2BZuTlSaUHzvXGptSAaFoVybQz03cXwRT87dpLjhXjcc3JZ8IVQMO%2Fog8JgZvGumgG8lisGOqqnWjW1LzM%2BVwjWdVz5W%2F8CK4vs9fuDX0iRwOd0eliCGSZFYRxRlhfr9eiFZaOAvOqHIoVXkTAISlmatOH%2BzCG2wAQtgbqpNg7NumuqpfDj8QcYZcjoasNCyiDW3xN6yXC9nbSdOSWIZpHcDeyCaxyC5996IhwG4g8AvUTcBN4a8qMefQEtuWAQiMlun%2ByEzHIYE8Ohwu3kQeZEzNMOSJL5jZ5ILcUJvVRg3y%2BO827BmomvBUdS6pgXmfeKDuSHeTqOEiF%2BX7NORZRArP%2BcGNg6tq%2BQffJ5qEdjqNcEjwEWv4TosBOf7BNyqdxYTukqR8sZDT7z82%2BQtCzv36QC9OPqH%2FoXriP6fTFDe47KADlctcM1GqUI7lHhi1RyqNOEXCKW2%2B5sWkVcEyVMfFyNQ6DH2GfKIrDJG33ZqcRFp%2F1U6C16NHjx1t9rahguM94mfUoO6QBXTCo563TBjqkAYtWHTP5pxJFbnYP8TkGJCm5%2BEA0im6Mle9J6tyUlAU1Gb9TfFsB8TLSUdKrTN0U06mIgNuMzFDGvJ%2BMSJ7tUc2y%2BHA9vCe5rWdHYKgb1IQqBjqNi6myYX6bU8vLBBXzUm0Cv2snQn0Q8jiF6eWPnLEqMml02Ehz3ruAqRLw20iBtXzq1vNQVB4WDtEEbztK6Toe5kXh8UTArxDY060cSQCP3iex&X-Amz-Signature=f356456ebb69d64839a8c933de0af61552e09d9fcb2679ec31a8e9d30172c354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

