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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFFVG4Y%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T053306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXHQPvNEqQWr5hmjZ824cRaFxFa1VZmlGzvzrDhvTSRQIhALMpbD%2BUzGQixt0CPVFGziTIPHjpJ5l5xvbuF3fQbuSZKv8DCGYQABoMNjM3NDIzMTgzODA1Igwl8xByl4dj8LgR9NIq3AMAedBjVsiOJWcxIk1Hwx%2FsrIvLvTib4nPR0Fi02zGGrjyAk5njZAvt5RjAFc%2BJgZHs5eDmlgIvsXneF3gtYzKGjK4tBtkrzI0PVTgs2DK7B4O4Vt4AyykL2emNHneoBV72nx4kDG%2FByHIL%2BmINEagCEJKqj2Usw3bEEZdDrFNpTLJA0hWTf9lHm%2FAc61UpNbnQy%2FzuCo9ujVMLlGpfE5dTZRaNhGRSPd7xiCRhYRJYktnz3aHuzKPcGDg93Xu0bNk5LT%2B%2BshWhjjmsWmZYWtkx5onUyBNU%2BwjfEdCaOWzMsUs3tL%2BZmHHY%2BdPt5%2FK%2FggXrWrfmffRwMEvg%2BOhKbzyR4WdvUgQUGk4uGhoCZCLwv6zQ4a8eLE2uxqsath9hM4gke3%2F6nt%2BQcRc6VILKUYbX0O%2Bc9EoNIzZPhpyWr4fJmBuGoTKOrz7LUq%2BrYp8SwNdjfcZJEJD54%2B1CYuPVpRdUDLpNeatDNmj2KX%2B3KpwSIFo1w44LyBoUp1C3kKxtDYkKbVBTcGoblFbE%2BHgvvIdQ5hfl45uQP3MSRLqr%2F3Rr7Urm23RA3YgqKVEWVmaIyxsaIhIXtZjavfRAk5l%2FDXfV7P%2BCwaqly6Fbtcm9UC0vyzS5hx28Q%2FiPv7iTnzDD79rTBjqkAbsweWIYc3o1aJxdbatiUVai7qb3ByryftuN9tfmpzYiXcntyfGUqIgRKgR6utpNizKvirpLlDsRflYZJHu657Ngw%2FGK1uGNboJ%2B9iOnTDmE3xQJS6AmJfQ4Z5tyBb5KqKIpdKg9cPr9iPRwzw3CwK6DgmbY6J8LYw6kF2VwDQaglOAic6MikYELd5GYLJejKd4yEx03VTAgygkgmX7DuX8swzEG&X-Amz-Signature=21ef4976db16f87ef023be5c32a31270e8828d1d419f9e5539fd0bddcde7769e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

