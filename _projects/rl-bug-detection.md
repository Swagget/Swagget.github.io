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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYBIR4E%2F20260811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260811T080020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfJSdcM5%2B8cBzCk%2B3bM4NkSk7pKpr%2FrfZXEUGSl3b2iwIhAJuCJ6tvnINR%2BrXE99weWJ4qspbFH%2FyqlH%2Bb3iMgS1LaKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvGvOqPlmLieeAbuUq3AM8fgZLTW4vUbKtNNmgXo0ZLurb1CKBA5zIRqNE%2FEVO8So3CsezUjFYbPXU81882dVdZ6DuWZbYXHc9P0uRzESR5%2FOF%2BBEX9oO7hlIZxuRoztLd%2BFVuivQgUJLu6%2BQGxKOJvfwSXCZoyYFLGtxRV9FSk%2Fz3SUU15Eh2mQy64zcrNMi2KBO70meIFuutA4mCABSUx1FZgkHwPw4%2FWqt7YauYXzDoIHnmClYBCpYV0FpEqiKFeapmT5p9trQn7QbCj2jEegUnB3mXRdOoMLQfkMHdGmenu2Us%2Bn5fw5WQWUnJtjKQZG3ArnAjsKPKnm4K%2Buc14lvgjgwtyRqIHovqzawPXjiNeuGXSeeRik9syv5B37UpWZqfxwTlsHXdZk4kwVUvkQqJo7bC%2Fj3KFARhVEVd%2Bje602KwPqt9v2bi3t9iVJFW8bpQzTdq8OHge%2F7WSpqHxRKVHuooqpESZnwtwVhA1EZk73z9o3bHdMANfSdBuTo%2FiInQtl2JjLW%2F4DLAkGifhRg8ng15xakSHnMBT2VX%2Bc%2FipMSvI0WIQdDi%2F91O92yEX7YnFxjln9ewbE3ORYT22aXN63VjnBQSt5enLjb%2BRIXNH%2BcongEK9NKwc9TqIUT%2B%2FUlWXcbMx%2Bhv4DCNk%2BvTBjqkAbyDPqvJpXh4JoIcZ59UnLEyBjH4Ak%2FpHQctBHiO%2Bt9UTjsuqZAm%2FPOzVmOGVKTTiX6JTBunKHzY%2Fj0qr%2FN06i5DRg2URDVjeI4Vgt5Ico%2FUaJLI573axR13P1%2F27lqjssjs7yBXnIiKI%2BWnZNdMFs9P7%2F%2FNSFqttpZ5081kGiLZAcAvgIuKDU6ek643O7CKmddrGnh6w3RFB8J%2F0Ha9pZ3ANucZ&X-Amz-Signature=0f8f11e5f69bf71874e49adb90d043c3304bba3f2d96db3fd4803c99476acd5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

