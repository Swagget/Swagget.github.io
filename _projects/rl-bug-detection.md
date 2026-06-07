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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHM2YTK%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T114108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBOrXxYN4LLXAwiTclmPYR62ZQLaIi%2BSp%2BVHq%2FsrZO8AiBCmrouRpICURbmL6dilWFWxruRtHtzLdEjTG88K4CBSSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxX27%2BC9r5IIJmLQwKtwDpWPQHBZVnG4hzZzbeCFIqMYolvPH4ljRAntFiwbn%2F7TBJrxRqqOqORViuw%2FloCYOAPTgC%2FW6L3h%2FeWn3yoH68EX1TTLGfpHe5Cr38zcCBk2m3WedLRANaTqgYgu%2FomsagiRnzCRiNwLXsxLZGDUJx74ntAkme7u7zYmiHvGuJFzT0XEBeDK0%2FpEnmqAArIGbtg3ounVJ2Ls4P5D8N%2BhvDBrF4iWGJ45cAlEmHZY9TIHr1lD6m2MK7yP99VGfpzK0GSJyzgrISEler%2F0HG1SQ0wSwABoqGpJz5o%2B12UZZ6Jat2TQtpYhFf1Epy5BSdNXcY43SdZtLwf1K5xv8Da27orifFRDYRdjTtNqIR3Y1RyriG1lPWVltJ6eYkdeWvZP4%2FjwiwjEdj9YTIooEtNak%2BfpIA1%2B3Kx8r2bD%2FzQweQC6GnXXmJx4KRTlRvJPNZJkPS3H%2FWaw1SVMMp1VR8TiX3I%2BVmMVMVb5jK6UQbWWYmyxSY%2BDd67ufA0s5vkt6DmqwhbLuKtJfNUl%2B0X1vA6USnvMXoiohr7mczsHsN560k5FZC4PEPN5ITBXO1GyH0AviQohYOMrr%2BSONROlkQQb2vRnhi71BA7E1nKdz4K8ResRdVOEag8JQtC6xCxEw44%2BV0QY6pgGVVxy%2BI0X3DF2GcaQvh0XDPKOBQyqgtjuvi6h7pTcyRML0yNSeEivQ1ab8d19CKJwWgI0%2B2%2Brzrj%2BMf6xbai21ncnSgWEkSZVZVEcE8kVvCZzg%2B35efGUsXWxvuPAriAM7zC4BgjpgRDakPJEY6A197qdrd2i3Jlo3P6WyL%2FEC%2FaIy%2BxJ9wRwYu7wDSBbczUAd1KvVRGRe4CWPohqYZjCu17MH%2BAva&X-Amz-Signature=85f1b6bfac5aa15eb5b722febedb7e89c030f3d7c1b92f36fe50ce992d929c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

