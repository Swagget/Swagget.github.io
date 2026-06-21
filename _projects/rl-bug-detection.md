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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVKFBFT%2F20260621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260621T225728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIBt8Az8kSzpbTWGtawwdmvjkZ8pR9FONTB1pZkt9VPbwAiB8btg1eHWX9nrH5k5IJt5L%2F%2BibBm%2FcNuTrDkaJ2HmDPCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM6zQJM5c189mTivRKtwD2XTyAIzzJrpQLcvHW4BSAh7BI6tujBh8VNZ1rzmDOHsle%2BE0a3IbEgOtjcyHiC87%2FbQVqrFwNHeqIuPU01ooVqok1bp9Z1QISHjr%2BW8MXTfqLqhDwb4DyydycqGMCe0vFpV5JxnKC%2BGM0cRLHbDmOzG8UVqLfXNa2u%2BxI5RGovJhgtzwpViCvN9rXgxPk9NY%2FeWOOK9UzXQMoZiZLwmtxGw3czzUIBgY0PiU1JHlLdzCYtZO3cY%2BW6fhZGLwbEjZMz4VgRokaB4hqMk%2FeKQ2vWcymabQbDuWDZ0oOZUkHT1o1v%2F1iA0M9j%2BI1FHnGVhcQ2zPsyYzv%2FpnlbbtcEBTh0JXun2Z4ig43EoubykN70tezb0pnCiKR%2B1Ue%2B6lHRkLZEQ2EQkmR%2BwF8czxj8gM%2FPJjltCZLIzAeTv0KTg6Hs7aoC5A2nGSvMfEY%2BKvWBdHwa4m9H99eYQQVebUQnejJJ%2B0eOmzzXYYiZJKuBWzbiKx0dZjV2dnSlHT7TxcfPHlPIrwj9NPbJxXEhIgtwB8UxTAJzD%2Fmtp0oXigqU3qzZ6CWWMB%2BRBY5q5gHyHT%2BAouzYiWDY3IaofY9te4pKspskuaihh5ZfHIQ6f%2FFcvmbMAavh4cm5AzE2hjseQw%2F9Lh0QY6pgHVqeHn54JngWUTo5x2xyzHvW6L7xu7Hi5YT%2FeM5Axq9811g40VVyunMipfS3CcqM8q5dZPh04hHOYBZPd4PeHea1ufMRniEGkwnN%2FMPrnQ6z17aJO0c5LuUE4%2BaefODXZKMk6pORuIoLg8rVQLMTgEpz0ZALQuYfvGip8fYaKs1BmYVfcdJIlq6m8jODoLCsAycVFB0ztmSgAh0bzIIOeBTTylj6ss&X-Amz-Signature=f6681db5ebb6c5a89a01a62622fa774abbe332bab22ddad581fe2c022713ec52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

