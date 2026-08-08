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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X7QHOXS%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T191940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwzSQ3eFFTQ%2FAGJvxQYN3RWWxSphVA3xMTQf5z7YWADAiEAi%2FAVomzA6EV7pV7U3685idPGrT9q0ebSeAivI9%2FAL9Qq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCXOx6h1dm1Cx%2F3pSCrcA0iSu5JSKBWidygav5ni0VK00mokUKztUzwsQvEsu56IuOAn66lYL3bXaA8L4EwiqH%2FdYRQ8TzgdxjYapJu6QQCWCGy24xMXXACtcYjCG5lqwyqqi5EzVDcniXsFvrY9U4Ub2uX7fcgl5OJnD90DIYqNptBKRUw64j1F5qKBOkEs3ogvhStoPcJf1H0idmTR8O5wZbX56%2BOwsBt7240OWi0D9kH1jg%2BpC8IBjlkrEke%2BkeDd%2B1uhsMHD%2FXCquqnViEM9fvkU%2FfTePUgxLgg%2BEhk9MDksoFIQyhQ4s%2BHqJ3WQe%2FtFzZO5FI%2FzUiN%2BZRddpgWhJmCHxu2P3WzX%2BQHUk9HhNq0HSHaHcgnLvtFMn7H7KVr5SsFMMoFoxvgNV9a6BXYNLFXxYyzkYzLgPtHBEtBp6JnhnuU1DY7%2FkZpGOL1YnCeIxJSHcM1ZY%2BZtaSjoDC644EVVhFACvbymjOlo%2ButrNiKR95sKx%2B9%2Fmj%2B59%2B5VJSecI7JAG7n%2BJwCZL1UcBrYhDoWwkb4tvSYmNN1vQby17MAOQtsV2kLt%2Bj40ewuWopAw0ed9UWtVeSRCrzr815eTl2BMdOt%2BFwW0w2KJjEfcy8THl%2BI79hOQs6JuVPDanJ3i8eSXcF38B8ZuMO%2FU3dMGOqUBj7JXNVOWMLdpEvySv43Walo0QQtHa14FuiMzLvZS3Ni7biiJsPP8LSrwkHhar0XDFlfp6X88QdzbXi7zR3WN6AXF4JhBf2chNun7kHVqXqd74hxdS4Qq0CfMgh%2Fp7IS07LClYx4mjN%2FyhDKlZJVJNYw3x7lJeT7xKC1h26AM9eBdkHg%2F1VqMaBtub0HHt3QiICDjscdmTrm8UrfzzOGNTvZorD0E&X-Amz-Signature=917bdc9e214ea815c50411882d93a0ed305670146f0f993b35360c72d5e3e63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

