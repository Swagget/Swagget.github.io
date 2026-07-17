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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NYQSAYS%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T045018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnD0n9TOxqdbXo6UVSBy3gnLZO2BG2xFp2s4%2BGQwKK3AIgLiKRkgLDXLt%2FTKlRZElQ77jW2jeXN1uZ59OJ7BZLpIsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAM3QrQXzHcBgXpfqSrcA2M0OGiVKMHKEEizW2mP84sjkG4VLGsK87RTrEuLdrXvcDaIERlDtq0OMn5O96bygMyNXFlF7KqQDnRKgdbVSGr46NBZL9mVPMTWocCc78QoA9b%2FSfcO8y0Z%2FmhBDCMKp8FYknnPlK4Xj894FYK9ttl%2FUq%2F5kZfNRk7kpXn4P14hyqwhifOmgQOAUMjk0ywFzSCzzCRXxEhEf2%2BO%2FFvtMt3ywLtnL9Bteb9Eg9tTVOEKib6tRbk9cHL9K5hb6c3QUtWug8kVn6FioS1vcvSs7SlVqEILUyQDkigtOlMvPdL1nXy7K9shgq0BD4T%2FbvPm5APzoK0FgFTguUEoub6KRNEvTSIs72g39ifVeVMDrKmkWd7XRBq3o9iIydWTZ3LUgDDp0%2FsNAcyXZUoPtAypRt7Cw7n051KWpiSgfpfyybXFbXDZzq4sOPRKdHJ0eUISDoHI3I6K1IXn76OASqkOTs3vwC29FPN7EFW3a0LII1XPqwa7d4uwJJECFRhhW%2BFRjOvUkIfD2%2F0YwGa9KZ8MsffB2XvtJ8PtIUkvjwsXG4Nk0I1NcItUHNuy9fNXnCy%2F3MMCjOI1pIyBK%2FHHNCaBzyZKdao%2FNlb9AeRx2aRAGNMEOI1dflZSkcml9YU4MOLa5tIGOqUBP1jsXlFGLcqtY8CWWMS83WoULy8qaaZe5OAmy1eqAgeLwADiO1uf%2B3H1b6G6SBAJjI50dEcqr5lHg0gWmupGJQLyqKu2wJ4cw%2B6GoxuZzuyG4iSmg5l1XjYMai%2F%2B11xQ4e%2FTwj4pjQl2SUgPFxf10k3Fe05s%2FFsFQ6hzbhBM3Fb0lIyVUx%2FJugNMRwxdtb%2FpydXri28ufz9UFGt6opZeCC8UUP41&X-Amz-Signature=5590f5e42d76950d56aac76c3d64ad70c8a651e39ce33661134234b9522b73c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

