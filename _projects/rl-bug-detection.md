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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBMYMSED%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T051747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDnZgaUDMnLLgGbuqZcj3QUPrdzkRSpwyMAejCB81exXAiAbWoOmCDh9mT7Jo6hR%2FroFLEO%2BI14BgnPBSA0d6j4vNCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRGTG1tLvNQvvnSN0KtwDZwLj%2BYZ41CfjxaxAUHGuMBsQDsY0QcFHyfv%2FEZqpYL%2F9XkVEQXuDSFGe%2Bc3dXPOmby%2FWJD04Z0qyeyyl6z0Ka6qJObbV%2BuP0aXXdqyes6RvbwxJGmYqeCKE5xb6fA34XqOoP%2B1%2BnTowQw44EELLSAqEX%2F8IyMSI6xQ3nQVINqyNeSsnra5iZ58VtbPHMUDir239t%2BK2OgDkntT7R6l%2Bv3HFN6JiFDeBTfBCe9sz1o%2Fm%2BBxPg9bv4eFcRAp%2Bv7v%2BMtUWYrRVMCqlax2IcyZ1Ql%2Fu4HZMnUirK68GMr1HaBcr5GW872GwuYbchQWw5eTX5XlY0orqiDXMnBYZIa9CpdC7jbaZbRLuX9nmA%2FBpBulYpVEOUM9M1ggxEzJwrdXD076h%2FoPpZyjF4x5UOvS9hWQM4ZIVxFJVN8cnY%2BBqfTKmSdbPWyzi6k197ccGVQqfMhpJIah1CpHS7eY7qYkbWXY6DZDV93godqJPXppeVNP5YwgbhnGweB3Po4tHHIOSlBIjfmiUu13XiuSoRpfr6Eq4uNt0aJhMLRL8Ciw6MsD7onSCXBzzakebXmLYqdC2HjK%2Frnhjjdg9TYw7qcvpQzTNMiinyU3VsPNpqWanvhoBbxmjYmYdLI0vBRbIwy7Wp1AY6pgHZy3oSDOMpw4tpw50zSaWGTNzfCYny42xrR0R3VvO5T5%2FBqOJEX2G5Plk3D8iVVJe3nboMLYuFlSDLG%2BICcxU3xMkvgHg5MiTFmABRlBz%2BsEGD6ljFzSjv6%2F663tGrwhVhssRfVZXxDrZPMT0J%2Bghvlmih2wF67NKy7UmbumoR46peqSsb6l%2FX70GRy6Q07Ndv3bA4%2BcdX716KBWnjGQbdu1YNRqcG&X-Amz-Signature=52d8339f11a4f0e37e4541aac2669a719727b5293bef4c49a98822dbd7a61b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

