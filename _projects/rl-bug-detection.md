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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESJQXC5%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T073251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrdY4KR4MOPoMi%2FNC6E4%2FLuHwvEkvilJ8UDEyQ5Rq2UAiEA0q0g6NmYCJDi5Ac80X%2BL7L%2FpDMvfSRZuaBfG8LIuTO8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPdV7xuCdw2soYwHSrcA3%2B9mm2OWEU8Gd9haRmz9ZquL9j1BdJHdmi3HEBgftIMZ0CZfJziWpf5ZACCuRMhQgL2VXy5%2BaAKMMaq90FM3%2Bcdsy6tQvpFljZ3QcH0eg%2FZuf6QUX1S1AK%2BwpPcCZbqFfxuNZGDWQUCxcPU%2B68ftgsMf1iKrADhcioP61PvP3dQW51tcJwXHiJ%2B5lrcaBq76gP7UjoLixOtXjjma75QeZZffMURYZrtJdeJuW1OYFvWdjiFHT1gsXCVMXyE1qXRAQt7EdywXcLlrNsZn3DCxVjSzlJBzHtqnAHDc6wU8jKaMmZPXfAt5G04jn0yaqwS40h76aZ0W3PShpjsKB5kv%2FiPKNWXM2QIosqZBez41sCCgQdIhNQTqxmesUlSwvu9Vve6qX6DYVvxrnoW9Pwh1MW9qs9QxW3lP7ii2fvnyUEkXSFkMrz5Lh%2B5Fz7TeG2F2lzbL1fH2xzMUiaWuu7xV2TIKvVpptNWpjoXQRMVkU83YnFpV9Xb8t1BVcpLZ8R%2FgHUbXS%2FQTMEzumypMEK3sgsF2gzoLowrii8GrFZKQ62vjlni8kRgRl8HLpAuxdnBeXnvwO6QFyWhQDT3A4KEQCOd%2FT1DGAuWn5qzzFf46LUyhVc0q6RwI%2FPYxUA6MLTpn9QGOqUBAmfNk6yYD5JR5xBrCtEbTiaCU%2BRyQqQDXwggIsKI9F3NCc2jOeZcaaZyW549mFtZ67bq5Qpxr8GQ0gHTQESscrC6gA23vNIYXmfQPfFNzktrl8uOTeZ5wOcy%2BWI3YqrH9451WywYpf4tOq1Nz0uIYdWfUbyVAi1pzcoYgQUmFwAcGn4sdx5ne8XPTEFYcFabF1WqwueMs7fu44c9OZOXnZxecJUH&X-Amz-Signature=23ab84d6a0702ba3941fdb889c4717547920ddd369cfe89b6632e52e17e9c989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

