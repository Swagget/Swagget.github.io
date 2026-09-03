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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYS44XY%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T014335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG3xqWUC03IkCWsGbMK7uSfvdsB43ovYvH0jQI0be%2FrYAiEAvPzsfkj8AhvAJxREicA8axrI549df%2Fya6WYSunl%2BCt4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9TzA09UhV0t7xfCircA4d2KTTM2uROgamf1QTK8W78TQ96IVgcxR05gjM3MX05NOBvUQMIyF7pJsidKJn0uYj9%2FJLn74cvOhup3HFZ%2FRsjiJ%2FLzE9IVei2LVmmU%2FXmFglyWySuJEkGD7gUvpH56obtZot9ikj7s9dl5wg9famrIvt%2BqVKZcVg7IsqgEPEdTlcGssjnHvEAzGPdKSfsDOqSfd5Ga35BMwkXbIYEgkpNf%2Bv1ClHQqyVeZ35xIikGGnqmR2UWbptO1sks3YkPJqGfnoYdw8bG38TO8m0mk5iCLb2s9a2FvkYLAFY1kLfBv9MgwsdPdN2x3zwB37d8w3f48CKMHgQH2SbwKETD%2FJvjWVlhJLk5YcAwYXFXmgwGZXFv7zy12WhLEi9fuXUime7FFS1sGaPSMYjTYBlTZ%2F%2BOaWdVEDJAWClW2x6BS%2Bq7dMkHwWmwSOuCxGb%2B1QYesrVj9YRw2726S5A9nhAKynFw3ZaIOHAeWgHJX0S7OS%2F4t8nf%2F5UVKNG9MAwJViOpDQBD1K6CrFa8%2FeyXQRji6rFPt4%2FPvmPreb9GUrezDlXDedSdg4UIAf1apMfOGsuJOnqYhaFANkJE62K%2BAmzLTQxgDwNXEXg%2B2kvG4mg1DPFZjxjT5FvNErjq4sB%2BMJzI4tQGOqUB%2BuSBGTDpBshlo3DPihPRNuoVb5%2BjnDPlUunKxhfdHOsNdX6Ogzqrv2yRGlWmXXzDQbL9OOeA9VpyCDiDEMfpehqKoxCsQKd3XGADgX%2FocVQsa1zsvwHJQFKD%2FMDwQOdl5fOITrrOtubnPmlQSYITiMtFIS%2FUFaRtKrWx3my%2B4CLxeLc6nvLEsO98w7oYjqPPDdaPmsmx%2FhA5Qsz6P%2By28CoGIJ97&X-Amz-Signature=2e544db88b86384929832c9b0faf548bfda7bcdf368ccc3200ce95fad8a392e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

