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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSI6LOBA%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T011833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIEbcTP5V3IIbEibTnwqYHMVs0J5p7tCYMaqbMMp%2B6nFQAiBga91Nvcy5KuS93bjRqa3jRPNxLNBtkp4fNjnZ08kouyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM3%2FmxOQujaIJfUOGtKtwDkeghmERpVtAjcdpMPFvAlQ9UOfJWBsP%2FREw%2Bt3qMJ9HOx7PzOzZjtu%2FxKixYOmGh2MnBM24F3wcjTImmxlfOhpFlHwyBZkUe0MKeFoe3JkxZfaUpmUZ0cZcgGAVW6n90bMXhBTZlqi66JyG%2BCuacRaNRne3JIt4FOAvwnLKzu%2FHxXMrN0kvccgEpiiIvw0zL3kAMvi2WQ89WWt4Ui2qGqkFs7%2BaBuO70t2U6OmIdVQlbygevWP0aj6qEAbIiPVQI%2B4o9cCdF%2FVIt%2F1sIl0Qqbdxx03jn6mEf3VPlY270zfO2tf8VPTWYPaHu4G52d9QiaMFaM4YTouXLcUcuXgWycZsmLZcBuSqTet%2BcnQiWuxOyDqxPRCzHp8sZ6eRS2X6xRInrmQrd3nZq4c%2FrL0OrXf29BIPPAe7VcbE0uqBPklmAd3VgdefXJkFtQm5%2BDACBY0jtugax0cEcs53bJ7qmeC1RLQSfnt4ChU4K4rOhku3hMbvKMmom2cDi%2FanFuf%2FqFvC%2Bpl77iXg4deOqQ8mNgrLloGhnSGPjqjUVfxlRYOeUUKEzqmfcE6FnwZM1lXxPx8Kfv1wuYg9cdirn1FKpwmDUVKjbvCSombe75VUu3wRyK7HV7EebX39wu3swoZTK0wY6pgGqZ4sqYGr19v1XEeTclj1sTND2VK22ngk%2B1p8%2FWhwcgkm6YhIF%2B87PzZkTt3XyQ9yktNWQ0BJjrNGzUvQuJd6dwgWK%2FhqNFElkwJQd%2FPXFZPnBO1hIpxwLF9tx5jOh2EP2HFfbemvqpwXR3LW3XBYCqKSdJWDrEnClyH%2BXEowC%2BkmxACvVv7jYfEPal%2FiQysUL1qdmZGUscCk0oTc%2BFoGoeObX2OR2&X-Amz-Signature=e873010751d6d863cdc56f8053ab7355800f478e01ac7851db29fd576cbac5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

