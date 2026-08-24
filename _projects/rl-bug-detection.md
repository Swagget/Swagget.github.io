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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHVUPLSB%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T162106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIDrtAworsw6X7YPxGcKEHBrl%2FyPWcmYLnmrS7wfwL5RJAiAlRJaBDipianU9UoLGEXqyKsA9eJcRKq77%2BXs6GsHF2yqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXp2zawHfs3u%2FbdrVKtwDrZj018uNFNlk%2BPm6UHzsE4jFpG30csKr91L7jbyQ0vZqfhZZLUeR5utopo4Q7b%2Bi%2BCiHLNQGC45pCWHYhcApZySX34ExxhYAmmJt%2BV6H7uKfmkzNZqzgGEAZHHPDFzy1yZijno89oCDVH%2FmtpOCakHg9QRWJvFi1WchJcWj0kXiXVwM9%2B6l1O4Buv220dw5mBnVcqCUqIJ2rQ3APBwwbEOdYPvPkfrflNE8Enxh2sOK6VTh9W61O8FPa%2BmNVIhterqrb5Gf0YbaIV43uW12bmNci4SsNlFkBud%2FoC0XaA5V3%2FoL7nGsUUKpqnhsXgFvnEM9Nt8P%2Fgo75QPoQsaSg0LT31Cayw%2FTN1hztJVACjnvAP462sCAW0cz8K2D1l7bikgqx9pO2URDG5m1tLjl5oX5cm0vKZYFNkHlXfiL4mulW7k%2Bu%2Fx4Rv6vt3dgF4uXnVFQzmzDc0O3NaBvcG9jUV8P0SOvWUjdxAFwGso96f2gdpvwLew6CJZbkszL%2B9dltq3mwBmZRiE15iFJFEafyoV%2Bp17K4oxwbhOWRObgEQRWW1z%2BDcUynuCD6Hi4ckD4WOSaq8JrfTL%2FQrGY0jyXhk%2F3ZPTa9rdfJjSn%2Fy%2FFmVrZ55sdLu3cAWbsPSVAwuKWx1AY6pgG4ZVH8feDGGFwGGeRyKy7wqh36aifKZJM06Cij8k%2BMa41QMkgiRb4pejVE76KKM92BAO1y2GccSftJCzg6RZwXkZKEJRaYttz1ffiCn017kyXfoPcI%2B1Kro9NDQiIrTokx1OLjRrlXRHD6kcPsG4SK3mVXAoZte3GV09Z%2FfAkkjmZRAtn%2BUAZOKWrUruccPV8vKEuIltIYPZjWVZ1NB7VHs9vEu2b%2F&X-Amz-Signature=3eca99e9e19c90f2e987e4c46b5a4c8c26a38ee8de9e42219a717e1c2bff4c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

