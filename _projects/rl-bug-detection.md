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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YBEYHLR%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMc2kqAa8w3OrOwFU%2BFos%2B3gkjWX3xqHS7G9KXUjxxVQIgUB3PDPxAZmeBShTRmOFlolvln7U4HF8EKIWRpIRIXtIq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDHSMOVb2vYHRH8bzDyrcA3ifmR%2FbBAJR2nW7tt27qTtSbtYkIqORgekwp9DOc8JkG9GHwP0OQN3a7zayZCqLQU937ijP1xXE2Bl39r%2FGS9kOO48G4lCfFiru3mX%2Fo3MHwYTmMXrq7BYFHT%2FkY%2BPsaMpCIGACIJspvNQFPje9aX56WkxeYadj7P0NCrHwdYzYguEvdoKSjrSKZa5cpfjCsdJrmPw0eLpPrXmPTaV%2FDoXOFolg7z4oVfwj6p%2F8zm%2BsxEBhm2iz7IAT6zNbjKgJtXwXdarKi7BDKry7lpsuIFpnd72uEYzt5mnpvEAdH0g9fmhz%2B948z9EiZ%2BJJKFyph%2Fm3JP7z6Nbh9zipGVSxOTlu2eie84XTq4gJWHMt6kLfBJ1alI84sO2s9azyM%2FdkYNtDqyWhCkYm14QyRa8vkHHFJB6Cpl0JsmmJr4DrLTLBg0A%2BF5f86PQEKvimMfEuqSB3DiJg856eANb%2FK037LU8UoPkk1RDJ%2BvPqqAVVo5tZbDRt4aHZ9M2xH%2BQO1a1%2FP4xZkf01V3suvtGwnFu%2F%2FyFmwe%2BsYsGV7HLbw0LW%2Fs2NKSFjwxYdsHfV6E2xWxB4dyLfkO5Wx2GIEX%2F9sYSjRJ5YfICEmjkKtLdUTrX6kttAKSo0bZ9NdWbd4mG8MOCu2tMGOqUB5e5ZlQid%2FH2egt2htx%2F22550i4W9mVAYjDHeaxRoAs0lwcws98Dd5d%2FRYrJ7z%2BJ8W6lxoNhOCGqob7c4skPS%2FcWap3VfwcSBSZ5r8zi38q%2BteXHdX43vklUfnm5K9xWF6ZfYFr3cpvn4u26JWHKTr74LZ9yw4A9AwXCHtLawKEl%2FaM1W4l%2FnaDhqC%2F%2BQLbCFabOcpWURphb5QNJs3Ti84R9UyIc9&X-Amz-Signature=94ddfc98c4a7ae274c097104bb5e41c6cc58a5094713cf744755a6821a709070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

