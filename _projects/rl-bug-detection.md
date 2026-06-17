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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5DLLTJ%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T055626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYOovyqetqH4eym1royNR2pZUbIiDnV2X7awQHSCti%2BAiB8tCxNPtR724zeAFmpNi4c9OeY5n5hhpojpyH%2B4KWVPCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWnm%2FDmH%2BSZwEYXGSKtwDjHQB3zAtnZRBIPD9xRTmwXOTGsX3jCTSWggQeRM81%2FqfO7LityLlvEsF5IaMYxfSKo4OEOW%2F7uTwRkokHRzWy42iJ5CkON268vC8KUvgktNFYkbbe7oSPjCRhHkrbq1fv%2FCQ10DXafooKRn3qSDMRMOoa%2BjEUgVfK%2BimfEjT36BdLrvIBAj2vnvz8DXeTX0nxDh9oLLglw8ELbVqu5PJ6ZDeKCfjUDDTYfc%2FNnwWrlgwrIKJE15dPqNVb0GmQQ7RZWZ0%2Bp21Ad9NCpktZS%2BUcyWknnj2Y7t%2B5D36%2F71GPlGibxCmz7pzBDtY0lSYnWqMhT1QPWEJnKNXCm0D18vZNHZNP3JI4GCf%2BNY44%2BFDUgWZiTKV9BNtz0yLX47yChnq545dl8IxFk7ly0CNkgSYmd0%2F3NxHTu1uIdVwtHrawvVp7AnRntJ1MlSv3GhB3iD43c2S3Mhfai%2FYoBtR3vNo1LOz0Tz%2BuE5bQm6dE8ahe%2B37KX1qCwkKWugklavlt3a7eEzhewDr%2FJ5iiQzS5IhOkrhpjZ8iws4sAFWMbExC2epFtE3mwLIMBNt1kpe5SkQLtOAVedLh9IycauliJl5VwH%2BEDDLulYNCiDFSrMmW5ztGkZnt8eytWBB1EJUwgr3I0QY6pgG7p9GwYMlNYB2aVOqE2IT805A1wl9Anup4D4YMKEhNTRiGWI%2F%2F3ELlt3yw2onVwCisS813QwKcUwsZTGsIHUz933htRWkSV9yOE8qiXml6DW93QW1dL2L4Cp498h2MooUZkOxnxakNL71dcj34LmvBerHilWGLmkXxN6bdAiGmqG5TEQ7xhUV%2BWJffYkpvi5%2B%2ByrEcw8aJDRg1LokbxP8wL4geu0eN&X-Amz-Signature=eee14d047c4c4d1c282b1feb1bca08ee8f119c607f6a3873ff2abc5517766126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

