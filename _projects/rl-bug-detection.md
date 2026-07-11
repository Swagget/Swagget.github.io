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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466745IVOXI%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T091319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDeV%2BS%2FSY%2BHGBKCs4u6%2BWmt3SVnEgowChmxCennuAc3yQIgBcP0EIIccKY1xXao2Kycvu%2B8rcd0EvEfzH2VO2PaajUqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDm7NnEr15oDD9vVircAxOjllV1rS87XyT0UOGvgllMxTj0AcfRW2GBLhQK%2Bolxy0xgJ8yszk1niB5jtpbY%2FMoKw0MK7siUuO1ANKGnVWIkL0j%2FJo9vumeF5gRY%2BMS%2F%2F4Uh1MXexb%2Fbsln6Cl42cs2clLW9mOcfNjh5q9Sxa9Uus5LKJn1%2F%2FhIA%2F4LXHYK%2BTgs5xF8J0%2FibEMXC5MnoQWnDPucoRvGVRH0cbbyZ5wZkGlVbfAvui4PZ8o83e5AKYWquCmf%2BqphZppM7s5cXWemiuxCF5CFtXrewe%2BVb%2F7QkJxxVEco5CRJgyTKssDh71NSVARf9tl3A%2BihVb4NT7vlF7A5QpWK0Rw7MbMWIBC5lC8zI24C0omtd8TMyFBhkeBUZAh3yJv31dtF%2Ff0zGD7%2FbCXVPdc9fUyWhr%2BUTFpQFnKaUGgIf28jOEhsdahlvY9q3IuSAP%2FD6%2F5UlF6cCdFz4hgwtiRArrTFEq%2BjU3cqXdJCBnkQRySwU2%2BoaITZrmRvijt%2BnHs5T0ifcsdJQUXtzmCjxBfjIePwYtehYp3h2nH9T7k%2BM%2B9tjdQIE4Tb%2BuLLeKyWgw8y0hCe0A1ZqWCovHoQGxihcOQrpSNU7hCkb59WTCH4PHM9AnioFstZhKmQ8e4818o0mnEUmMMr%2Fx9IGOqUBu3OphjUIavVtA%2BNfk1AmPXy9AxVxewvgA%2FupgdO0TOtY9Y7He8TQ5bhxudJcIYrfWeBSv4adctgGIGA9xBbKAt4wk6Vq90Up%2B9XNZWp9Ie2zPPDUj1%2Fg2Y9ovoikJkJbBmZdR2F6%2FNd1bEYs%2FxA0QppFxAVxEBGxKCps5wgPv%2Bp1gxKRfCEJh%2FlWhM07Legd6fwYwKlleO2OIW8vnNZONvfwGZKQ&X-Amz-Signature=781a603f1bfa69a50e106e826d34c74612cf7ce994576cb3bfff6a7210813874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

