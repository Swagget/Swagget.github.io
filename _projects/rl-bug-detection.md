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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627IPSJ3V%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T152032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIG16pcFLRyQyocSnvwYcSUsrlufzMhoXiVIcM9q5VR6oAiEAxRy08M5LsY8115V6%2FJDpdT4z9vWT0JXof2goiikFDhYqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpSGBLT%2BOAFDOLmxCrcA%2BZRBGu98k4h3sFKOeVeSYqhCYQ8EHdJ7Xtuq8zLUdhma%2Be6D8d0%2FsxRyJ7Tlh8bezhOC4Siz%2BjJKwbEYJTu4qwhoR3p3%2FPez6kDV%2Fcqs%2BHOAph8DbAPM39HkX41fz2oIjL80USJ5Q6YbFZm6fFjoxTBDIspV7w6a5Ri1RNwJ3ZPtxVKDYgKeBuJ9U9rLAzZy%2BfO3KNqvzXRwiae6dRgfBOFiOLg62fxeZyBJorgpPCkThWTT6R4XQVjq%2F5NNqDXM8GGjfbA1zAna05%2B1tOWgl2XqMrTFH%2F8%2BaEXvJHMLEYdd6cLPKStAeQIjheBlyV4qeiQ5ck5VUy8ZTAr34M5p%2FgzHmWPaUG11P0NDdQr4iMmKYlFRBEP3nrFzw88qi%2FWkKf5Zi4HH5YtYT6LR4y%2FB3E%2FzVNqAr%2BzzlFy5Y3fTzjQwFMCl6mvGarVfsEhYDkFo2qJjlvW0YsgRv6CxQmDwcYXXebc%2BmH4vWINewsOGSdHZTyZJY90bfmmGRGntYimPSKNLwvLxgr5JZR%2F3CmpK%2FhDzIC5AaRZLuXtrw0iFCHpw68gCJprneP2abYaiMrJ2unuJCcZRw770Xy95HSs8fVwImCEx5%2B0Y3mNs%2BJieABFAHdQhCu6mC3hx1uPMJSf5tQGOqUBv8MbKM5A09XuJWa0t6f9IJPRu5myMhGZ1x6mgNmSELgZc77q97cU2o%2FcpLXrnDu3Bul9MTkGMmXPZyBbz3ZaaAdCsUiYPDx0N3s1MRhrAnPkqOF4jYfX8VhGbJPM8sBLAnigH%2BeQdMyvu2kdiSUm9lTwT1kK%2BRo0MxSA2osWHCgq7edHPSUnh%2BFFTHLTbo9f8BLv3t%2BLmk7TCB60vOcV2kzMoTL3&X-Amz-Signature=38e31552346c9706ac4bd6534e472fa3382b5f9b231fa00cf453a92fc48b3f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

