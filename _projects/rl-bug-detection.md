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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGMIKPE%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T215605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoGaAU288XZnAevs8PItauRzPILmk%2BHpV7PfbitThHhQIgVt5UQN7PDJygQjce8yy0ac9FCL%2FLEukWADTxMek7%2BHUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaf0KMriXtn9WL0WCrcA%2BZMS7fSkQnog%2Fqr1KCAI6vAyYwhotBlcHhLa6yTDiXZ%2F%2B0zA9d6l310fleFbcfN3Gm65rWlFgntFVtoCM%2BgTdgRVchRIOn1uPw6AtRxEWvLWXFiC5G%2FzTqJAoJ4AfeCAyXIk40NeG28C0mFoU%2FfrvByihskI08tluE4ivcoBOvLShBhZGmov7nAsv7WaBUaswRHCykDvuiGBMVjdth4bhOk74zJu8qVIdmkXAhCUFJ4HYdUeOyDvN0S3yt4QYp1ws3u5ijRPgvQPbgw1GRp9DeUpZQrwSD67URR6btnAoX83bbFCGsHdhrWRiJ%2B7pMn9tV%2F%2BBiZIi0%2F2uON5bnkwMOVmalu3%2FSkMBLR9%2Fu0KBMfRSQTaOpdwiN4Q3Mh%2B419ZnMWyYeIMw%2FxkYvXNqApG1kAV1eRsrXWUmz09YbrONyuah16%2BVAcXILFyhBN32Sb%2FVy0V3rE5Bk0a38boIlN7GJx9YNilQey7VD4X5ztaHoVZnyyh4VXPoPB4UtBxNkYTudt3qyHdTwe9dqYdZSIiVGKA1rabM%2FM7nuQ9qrfS1LsPofS4Nwk4IS5LihOO9b%2Fhj%2BihVQjTVrv2ZGRNbe1Zpg8LJnaZ1wDWSSnA3WpQHP7XFzB9k%2F837LI2LUcMLSCr9MGOqUB8zCY2of7ww5O8JxzbnobshZpBJPDt2wUs4Xi18dRBxhddoTqZdffHTuMFJEzUqXgB8KT6RGYYQQwa4iDtkhYHSoR3t2gvs1pMpsGy8%2FWCFSk2kXF4IQFpOx9l0YFfF7gU4xQRAF334dlGiiY28Or5Xos6ZzdOLHi9e16EFc0E%2F3wWY780sBeHfmi05EbWyr2tBFp0kS9fMtVYY4iCp3LWASqS2tn&X-Amz-Signature=d932f2e7cc9edea969d723e7344c37ec4df73b069523579da3329522a11a729e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

