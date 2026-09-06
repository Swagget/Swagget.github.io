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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OYQF65V%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD66B7a8unwHnZu6yAK828yqWv64Cx1b1EZJ%2FthnWoFqwIhAMvg9b6fPe8Ko1xzQ5FrZtpUIV7QxYq2%2FDKK2rUc4DvKKv8DCBwQABoMNjM3NDIzMTgzODA1IgzQjiKuy1%2BrMukOYjwq3AMxxA5nQCsYeuUopUZqvPNZpRJM0x0Ggm1n%2BtlzJAJ45WD8U9Uz2%2BCqHVfIBtrml%2FAKXwYzpXmimmX42ioRy4gN6Z389Ta6decTAXSHh4FvzakxvnwEbGnlqqxzi75jNLBVYEeQfW1wrJFjS58cOnsU1Uj9y59QtqVHV6311guyfIiZfgAiEluui1nRI3zonyXzVBOIclpJvJ%2B63QduoPI%2Bd%2FiRp%2BsQngTlSFWoSZl1eLYxgSlekJNQFbeXsAQtZ2NXB55ee%2BNltxAvSfOyE66yciyNiFoHSO34ePpghN5hWcKBHvNsuxdP1SmPmZB95sPMoYFqDzoP%2BoaT4qJn4px19ZDSThKFLuyyOl9qCPnTqzaBz3PnugZ%2FUW4rHo54nc8V6jTOXMZGBNpy0vZTJUjy%2FwKnIehbFgHImG65Q%2FQnAzbOrW1NVlzXSPgIl0igh6d5ppcWNaMdM18XNE7ncabsCcR45tjOpcyipScox9e6zs%2ByKdrxZQdWYLEKGzeLKHdhQpygcacCi019MtmrlEOHk6cgFzw4PGlRYYnm60UD8hZn%2BfrTIWySoXoGCqFelOaf%2BVAbBwGxPLiwyS%2BhQwh4lTMPHG00Sm%2BX%2FRQ7MdwEezBGhXRamMudvhYdgTCtufPUBjqkAZe344qv8aIimXK6nQZQF%2BStSJbbB8k1%2BVWZ263joU5EEKRdvsDy2pJ9VuAq4BmX20FOcuZdqf2TlGWCaxEudD02H%2BTCxcywOO%2BB8U2kjXch0mwFxlmMmEwFR9YwKrVh%2FRGReYJk7%2FE9gpSjQ3KLgrPfRjYvL2%2BG4MbIj2aoJfntkE5o4y1rt39B3ZXhJrN7CUaIXyBAUldC8a%2B8eLrWLWnOHYep&X-Amz-Signature=125ea481cf318c4dec5958d6ea06bc743bc2a752da77b5ced6b643c9b5129140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

