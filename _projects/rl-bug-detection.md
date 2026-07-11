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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOPBWQE3%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T070318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVdEx2jJ43xfp2ROo51plVFvKnCvoLxNKpHPYKSwzjAAIgJO1MsKfAbE9HTBF16DVCnsOiaGcbsQKOHAoq6qrGy%2BwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcyZTLLVvl%2B3gDVWSrcAwR0L4hc4Ll6adrNeOoOaMXdm9RaqAz5AJKWReaRIodVqN9IvIa4nM%2BYDBx%2FpcRiTsl%2B6ILE2Uc0qOaJ2EKTnATs6AnpsmSnZTejxyraQlh6uvye8obe%2FH6YA0y4Q97gz9b9eMu1HSoleKf3Hef3d7uIT6QVrs%2F7tUufrYflNFuQSXZp2KCRp1k%2BNZKUenbjKYa7pRkKOF%2Fbjoe6V3EOOv6fxwxKJySBl6qtdz5bMYE7q%2Fj1jl9MPlhxMA2p48qEUucm1q3KZrGKdA%2F1Js9mp%2FoKnN8nFcIgs9yHdAqZTKM6PeBtih8%2F6gl922%2B%2B2h8td7LtQqyCx%2FnBtBd%2FsXBMoFM62Qrw2jgEgmiZujJW3IvE1%2BSm1pNhudMeBst9h1bq0xhb1B9aCaa9LC9dv%2FdiJ1QSgoG2okneatWtRcXjdlR902nCcz6i2FXjO0TW23HlQUqz4MhcYSktIe%2F9NM5srOVkhuHAHyQ%2BuC47NYdSWWBZ%2B0DcQTYt%2BVkBWY9u%2Fkjrgbawb64Koye%2Bm%2FnSWWzY7qw1x7Apso4gp96ZLiRzm7MOr6WDJMqvJwc2GT1c4uvns6lAq0PhW3LcCh%2FQlLHwOaGuPm1SCB1yI%2F%2FhhOOyZRJIeYKIHlyUo0evwy08MInBx9IGOqUBJgUvRKnWqT9RWXr8QMooK7hnN85t5KvFh1HL%2Bfz4TH1sggSbo8T7B%2BnhYAon7%2F2XeMFrCawK14QzYAA0fY0mM2la12xqDqITx6BIl%2FRZyH23vVfdP5ZDNdm18HvUUqNzWlSD%2BCjUU2FQvOTJNfGyqfThwcU2bUrHoX%2F2y8a0RULGZ35Pyg6ydr5K1Axw8LhAW5v8kzb7%2FNIdpKeKtngU4I6I4lpe&X-Amz-Signature=2326ec423313cb46093f564f95f5fe9c88c36f0a7ad8052ea3229031851840f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

