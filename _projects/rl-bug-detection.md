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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UY674XT%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T045650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDVSnUOn%2FNd0%2FMXTTuuFI5NoReppLO6b1pypva9GoCo9QIgKsHuIns7KAU1L5dCcAp19gojkwFH%2Fb7QwbRRpFXP6h8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWvEaCLV5604KMFnyrcA4fl%2FCKC0c%2B2C17YzGGybP37Fd0BBMTOmudxudhqeeuEmqSx0ZGNUV4q6VNf9zJ4mjn%2BvDawW187ItGfWDZNIF46vdjs1pRsYXeW%2BvO%2BqSKIbz2Xi9UNVuaeWsscoHkCQeIKc05WkgdqnOPqZPcYQIVf7NUvXn%2B00728eFvRKuEfSpHu4OcUhhob0LNsBagIPbQ2fl6Rp6%2B7atNzs7PjpAowpfcXlIRpej03uSFCNv4k7XlsLt0H8ix89qFymUzmv2EE5uegTs%2F6FNsE4tYJVO7pULFY79dQupT2nmb0Yzpye9eyTVbYD3970qoeLNA47doWbXuKao1jhIu0vKG7M6Qczz6dw9RCVjwkj2C2914BLlURGjumP5w90NznDDv7%2B7MM%2BJBzbvjIeovrenAvM5XL0ZTmhnUuVWc3E%2Bq5cTek%2Fsj1LEgvgh4RxX8faGhpIxVDUE3obUhPB5ouTiM06l%2FN9HoRq2Cl9jydcRfFj9RQB03mUMGsKVtLTZosPhQDvh7VHBl%2BHWgnnpHBuAgfJ1ECT9BVtkvhE8YxS2vtJ789KB620gGnYU5A3NMT0GJp3xhOpNUzD79HEIl2FTtvr5j69WsdC1MLwOs%2BsnHUhw8WbVhp8VE7D6t7aCvVMNvJi9MGOqUBFtKHgVRKg5ERRV%2BZS4bEGiMJ%2FoxPRqtQ4Td5kDT%2FDzX%2BYHcJ4iuTg9QWLP3d2jnJh3RLhJzo7xLf0hYE57yY%2BqOemlUNNJsqufFXe4AbNhxVG4O6q74M2uOzEUcO0V0%2BN%2B%2F8tB6D7SqgRADzGrs5J0k1AoBMHw6n33X1ktS%2Bs0oq1S1nvS2C2Yletb15IDlOt%2FKaIhOYqgGaMrcLj1UIgzuRwISA&X-Amz-Signature=1c6f43c3df69ff70dc871eec2d8893b782e177d74a86d3be566d91280942bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

