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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KAZCIWA%2F20260602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260602T095741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIBK%2F5yDD1uJVHK1wnn3U2BkwbjF8585bLiVvln7%2Feh6pAiBPQyHDzCXs7lxKCn0sfZh9Zb%2FhKxQ8TYKa0uNlWdcxGSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMrDioe64raZCydH5qKtwDHhzw7nrrJCnaKl5DmS0dXRizwhCaYu15uT8rcCm1lFg7BLBpLTEvkkW6ozgnlUBjKv2r%2F4SK4ji8LxS5F5M2iV%2Bz1HBqZFYtXqWiS69TSHV3iJAOSLKdN9kcrOprLygdU96Fvs2iiRDgG2rPnw%2FHTguK3EkDAr%2Fyl%2B0TlcftmSI%2FfRSP6pOYEtwRGRDvryGtoguhZJ87JEc%2B0luLPrgyZJa46g%2BsbI9k92ZRahYOgmJfL%2Bnox6DUhSLK3I5PujuV8rgIKm%2BvGd0CTJNleYHNgDUGJ51P36EyejuJWmWvYr7cw1SRyGrihV%2FJvC3L2pYd47IpTwc32IykYgZxjwL1xh%2FwDDzYgtegSjaSf81D4VNlaldF52VU7RqjxE9oo7lrR84FWvv1rIpEYj4CX%2FeBIy8QX9Ek0poQpQi5s%2BZdL2qd3M3C4gM29wbbH0Ca0MX8jq6ccVm%2BFkN7aRgqkqc2JZaFMHhIInqFbiYV0GbLs2QvUBlFUdjJBjwXR3x%2F9tAcwJsYA4IvsudEbSzzNkUR3XfyumjJTQskVfWDJUvjGV%2BoPbbr6uoyV%2FKHs1UbIVlgfWLyJQQmf6iSewaP30BeaQ7thBaqXXIUKpItIeWMV9JUTKXs72XDFQWtIh8wycL60AY6pgFUDNkNng40uDdJ7WyIvY12OtRtBpHtQFlqCoJdNvI21InlRV7BTp089EHYbfozimVKi8zTzROEqhi0w62sgPFS1u%2FXsIqC9BI75wHF51P2iIWv1mmB7Z6kzKdslOT%2FBtQgnDsvSpGyYXIZhDLekiq8t%2F5Q0m2Qym1WHkn9H7RFDLOMHgXbqtixcBtH6bnVB1dHrpZWpkh6%2F%2FMwMPewW1%2BsSg891RGB&X-Amz-Signature=c8e2097e8d7404ce3d17303a81405083131fda88a5555932985cba15fbdf9451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

