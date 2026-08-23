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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOPSK5R%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIEErDPJKUzYkg0O2uEtCWnGk6R8ziwkS3JAQmNrVyD3EAiBIrDpsCD4fsC03ZFo2GJKUHiDhaFsIc0djyKn%2FO1UeAyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyjP40Bw%2Br%2BbWIV6uKtwDkNyRi5DParDx7uN9rGha44SEuTZHAK7zf3giUY63Vz3OYTDpISpWC%2B1vlCR8N836j4mHzKYq2E0GryFIqitmZjTwApMX547DDWqoFFyo69Oyrbn4bKmX%2FMkaiHIocuJepELb90sNPEdq18Vh3f%2F4R0yXwcFaMRYkwaPpGWnW7kBGl%2FKL11rN9ZISvUs9Be6USwZ%2BopNUUZpE9rQbwpTFWr8rmpTzfNc6%2B4bgLv7hrPFgMlyjmtxh7JEPXXinzpjRmSoyOon8YGdMIow7oeou68s5H6WQwcfUI%2Blafiv2eYc2CL4k7wZBSVdOhfE7dSbm851Kq2%2FR4EAURnORfEzLXOgRvV65LPEdqI6OtWUAjkIQu4evEh2OVfzSox2eixjrID6vHl0qE7Sj2CTn2Br8DURlFSiOJPvE3V%2FYnVntZs1j8JDfafgT2vVpVsXt2w01ffaBPh%2BRFb7p71DHuEwoZ6PEMq6Atpv7rvlLcdYMLMyHUf9gOxRx7js8QRB52%2F8A22Kl0V4hzzLN0R5%2Fcn84mT0ybWrMPlu44iFoccTKR%2B%2BEk7MlDTpo3EmQQnWB5WOIqwYnfBAHflA8ksG%2BjkrjjbanQhVnFnk3pVTYG0%2BC1O41Vai9ZUF6941YXBMw7%2FWr1AY6pgGAFAgtuVn3nXhJhJSKdj1GQJHpS%2B0UegztSmROwRqj7qqs1A%2Fck4UrIpJWnorWb8wGFx4uCRuwjy8Jc1vFYuC7YVR6ROrFX0%2BSVZBAD9D4WuK0oJJ87SiT1eANjGNmPLOUizsaK1U4u%2BcRN5o49DliXi9JXEpFe30XzcIVYsU3%2F7LFO4QzikP4GOsSGu0sL1t51vuNuGEQSrffShsnmDur76AXFx8n&X-Amz-Signature=6c6c8685ba450d72a3cd47851af7f3d5883d845924d7fbc7c15b3c1e28723154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

