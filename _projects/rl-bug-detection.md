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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7WO75Y3%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T013025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQC1VfX5Y9RYVXMRro1JR%2Fx5p1SRjQqanDnW%2B%2Fq7P%2FeWUQIgOXYQ5a2kdSrL%2BLaycrNLZBtUvkc4PanAbThhu3oJTXMq%2FwMIABAAGgw2Mzc0MjMxODM4MDUiDHsgeRtLGSdA4YVbZSrcA4tdSdB%2BWYPd4T%2F8q60ffs%2BsXyLhwkdF9hn22G%2FsD8swy7fK%2FRFEsVwclTozViHtm%2BIBzv0Ejae6glBLYNgtnUWlEKmKUMo0u1LbeyroEIzbieOPAPfZFik7U%2FV4zNcl%2BdOFLSEEbOIV4VIY397ps%2Fg2E3qHlOSdVXTGvvRqO43DOkug5sSnuGgxLuCLR642R200oIqV%2BhEz88r1IydCUptCzchB7F4bnCVr6oexfUqM5m5srz3bOYWHpZhCBIuYZf8VZmfeWtGvnmrOZMe4TASEL0nqCkrqHJUhDAC823r4gIpm8Cx3%2Bjd7A%2FiJWNYaTvpHPUZ%2BkDxrUxGLwSFhNoR4mIEwl2Vy7qCfFxcCGRuycrgaKKUDoaHp6JVQiVQAsK6E4AdKmPX2frSpqdPz8ihb4u7gbXnfHLSRZoZU13JD64pX0YcoabeYJVAjuLLCTGOighyIKPs7we3g%2FbRs%2BMfWceqnUmMNVzs4p%2BkfjRBeJ4aYfLhYy%2F09Iei8N%2Fuepspa2q%2BhLplUS5XxEhi9jaac0aWLrPwrIP7ZNJx1LWXxjGgIVqn66iSNPvOiFOnHOhmhrCEhCSLvEriPzT5g6MbF4%2BqfE1k3jPBON0v9RF2a%2FmG1t9RZQx3GgfRVMPTSm9IGOqUBBkjT2%2B9UPeJ8K3jjehbIeCXhvxBFvrwbjiIM8UXSz%2BNl4si5hqIaD3fZ2inDfexbQZpv6d0MHZbwhrNisyzy5UpXo%2BRYWL957RjcFncZNkxw0YJUJiNcTLQNi76shcsOhqoB8aYBnoLQwkjzNwqX2TcMoxP0lN8Pl%2BTEz0BgQee%2BRb50Erwv5k7Qy3SRso5pW%2BAaQ%2Bup0BY3gVYGEVMMLv01AzBg&X-Amz-Signature=ed69c7844dda4d1c9eb1e479846620db405971f9f2d972cd0afedd92b60be643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

