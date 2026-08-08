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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3Q5OEJU%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T062908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe7P1KwM96%2Folf0MLNE%2F8FZOZjglbCrDf3v0UKgf476gIhAOlFuP0uQ8r1huQyFvKsfNGAAM37T8IBCLbZIN7WLw7qKv8DCGYQABoMNjM3NDIzMTgzODA1Igzg%2BySmaAMe%2F3rUYQcq3AOwvwPce1yFdhZOqMj5RBPfcUwFyUHmpCiRD7W%2Bf18foMZqxGLFypETvSJwuKBg%2BHFwNhCvaeycbPm6f%2BXVEUcnEqx5EUgvDi1G2wB0GkVys4Y05gjpWV8me0JCxb7KgNY9f5RYQwLQfZQ3%2FDqpjMWz35kZ59HoP8ZJuOHAnw%2BrNRmcZdqALtGmalGlO1XvfJIHpl41ptBBUwzzVEB5N%2BrZYvDFHUPu9HorPecqdZkfm9CodCvSwh63YzcT15o8lklTUPOBhzOo5JSoBovGaqhpGt%2FBV399Cq23DBVwGGrcSfdKErMAH9UHRJgKq3288fedhmWwkM8NUH0Vyol1GTgQv%2FcnkujWC0nyk2pZI72tEG%2BrJnc2O7WFKM9lOWy4OdHMlQZ7J2XbnwAb5Yq56Jx8O8k0JnkqrT9%2FfYtzvHkCQZn6mJ4ii4Z2iT9%2FZooowkwI6zK2FlMjJIdY0J1RHDhakw1T5HhQeWkPkXZSChu%2B8ObZ1TINkXyQUSOyLR%2F1VKOThSvirT%2Bw7T7b38I8PTrq%2Fc%2B2HRx%2BHqCrEBovvch0dUUQcO7p%2B1FOj6iqUmbaITnhWbzrVN0aOe3k78%2BLAfsMuXWPMgOnQwN%2BImmWvshNXMwbR%2FCribwlhTAgDTCq79rTBjqkAWGHLdHxerAKmY9W1%2FxxIU020eM3aDYOxWasq%2BR2bhTqqSdzFpt8yAZNRXU5KAb%2Fw8m4dwXzBSUKd0GESLDO%2BBPoxf3I9LC2icIJrJrxBRd%2Bxw%2BaktbacYXToQqGXdqWyUYWHfio%2Ft8MvOrtiBHjpT3HXM9Bs7a1xIMUKss3KT821M0QWPuMBfhSXpcCvypelK8UgZm%2FVDCAdRCdhpDXbjstidvT&X-Amz-Signature=847bbd9eb961cc550398727efc5c363ac01ac1b7f4e39ac0ac7fcad9ebba3ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

