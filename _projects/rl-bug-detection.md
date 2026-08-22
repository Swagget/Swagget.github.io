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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSSWVEIK%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T170941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHx%2BjzCWjroyC1WXVO0eESk1DpR%2BMPGwCHyc%2FLmQ0puAiEAxufAnZ9YTLUEViwXrS9EdDHAZmHcySc1yBVBkPXGQrIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9skEXg8kjKJ4KHJSrcA%2FwMzhRCVQgiGFhR2CrvkbhdYdhDnc3G7ab5usfsC5r3uxV4KIPWsniohzHaOLydyDNPLu0%2BguZWkZOLvuF127FQMGeDh9OWfLz%2BXMlpXcj2siCD8F8BlomdtmvdGpQ525TmROP3fPogUAI8PwTYs3dS7gXpztvBfLONnu2JPFoUUISNpQSgxXdlw3VJhEnSweI86sXc7geky8P7YZEbCmqUh0rpbjCylEYzp9kONKvqtDSp4keGxnMP2BMZt%2Ftw6Q90LfnoP9LuZkaBBZc7QRAq%2FseBYmu3p7xc1ZJ2xLo0Yfmgx755QGSwmA1QH1W5W425W2Ugp6zgbu%2BQ1GVy0pXx%2B%2BibFrO4IZLVeIzPO5iRTWyPG1VRj%2BMmr22Y8WVtVuAyUdrphdblBiKFcnB5tbt3QW%2FtZQfZCBfjYm46L7dn1P1hjVpXrciyIq5uoxJznYUVOkBqioxka52iEg8fVp2lieszIW3SnALjq6SXECJ%2BQOiTuvjhY4MAhY%2FiFyqZEVQPI2H1QqOHMsNCYuVdhp7CBDMFJcVG8Aq%2B1dl%2FA56OfkCqMNn1jyavvj%2FF%2FErvCyw8L2IfBKJiFKW4Mhf3Fx%2BR1LtRbCkWwr3UDDbwP2fv8%2BTIrXBm6MDJCj0WMP7zptQGOqUBvITSJJta0GLdXh%2FRckOwVbDx5%2BZPtiRZSYuCHJtEgTc6GgNqJCo1i7fZX5XGxZm8fEbOIJdOHG6IFiGTs3FoTG9yvymu%2FAONaYj8yAFX2IPfvC2yc%2BbfcZJ8IOpMgRHQgNEWrf4xd2TEBK6yqibAZ3isU%2F0NpiNCZbX4YRScZu9zEpq8fY0kTCAF2OjPY1EigppaePKXwQVnFt9k%2BclqnhXRe7Fn&X-Amz-Signature=049ba86fe0de6df7509e6eee851a5f69796db9739f89bba49e9500b19be1b0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

