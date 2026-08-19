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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7CEDFLU%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T201203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0%2BtKS0LqNdluPxmaQke5WePYGfuPS2DBHop%2Fw8g4dsgIhALg9QnubrtvEU%2FbsUOWO%2FXhrNvfxmt1o6LizyF65YQuAKv8DCHsQABoMNjM3NDIzMTgzODA1IgxCvfxN1lBq5WvFXWIq3ANoGVksZZ7TyNrMQBdFxeWYRdcc8Vfi9vzRbkgT7BE9d98OChCnH1cFFLxaEhOEI2gBeJ1Vlja9Qq6bM4zAzOTJjUMufX10pTMq89Jzl5T8OqDAAWf6MWSjhPft4dUshGonjgi2r9MOoomRUkUT13R1CXrWzIGIO6wiAYx2fSDr9V5KCQsmahNntHfiBuW08DOluoEto8Z%2BOAmkOEsyGJDAprEpeaok%2BZBOYtbf5ONRHD8d5LFqGfUpRb%2BS%2Bp1qI8L%2FlKHkgWhcNDFUSVswz5BzCycGm6UGLpSHTtgKmWizJ18h64jKzC8lij9C4OXZiGMryUMswz9TfePwAK9oBoeb4ZCh9ANzD4%2B6H8zM2B15M4DhIRl9AuxoSI9wZaKr0PvE17vmgAMrIB03j9XzqYZjXOJVY1z1yE1kvH5nDTFYDCaY2i2R3zKOxfSGp8HSTw8HMUbLDuOycM0LjVty%2Fg2mZLTGM82cXtVj7CxVmd8WFuzGTOzEUlTPOhQARIX4Ys1KsQbmv8dZNLlJIpi6PNqHk2uzdnPfLj2yHJ6UJSca9LPdWDICcMZOFwkWLQ4ukrfqeWEjmfUsNxbVgN4Fy%2BydhN1902IUfhn%2BwtcnkWPxvWXGSedQ6QV9GXgm6zCU0pfUBjqkAdNmrqa2obsus4Wl%2ByoBMSNLl2cQKj%2FdBpHfFQaTJEVIZMFolHb5El9AOpyH5FocPEgiwIOsmtIFwItPRUa00zmElvJlS401%2BMe54Q9SGA6B2srG0zUYXCMXRuCAWB9Ukf1DprS4mj%2FVSNx9DLm0ghqh3L2%2FoOIoOvI7t6O0ZpPjPXY%2FvoP5ManbxJc%2FEh7YQjPWXkkcuPJrYHT4EN4XPI3DCG1z&X-Amz-Signature=eec6879edda5a43f52b516835bda807f75b44483d60e4a9cc5a503c6dbb326d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

