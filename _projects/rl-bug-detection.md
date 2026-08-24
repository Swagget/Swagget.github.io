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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKSNM2P%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T211646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIHQl2ocd2vBoYHz7ATga8Lp6oyPzOmreWMwHhtL%2F4mB5AiAYrflh2YqxWF2QdjFLz9Sx1tcFIRYjgxnE7v50zexzMCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM62RBB4kgAaHI%2FL8MKtwDEbIgWtSukTs9NBSbh%2FeSJNIdFv1A%2F0XF6%2B0AI0qxYyKqyXxDcB5GtpwlQ%2FDd7OPHzT6u%2BpH49UZVcCYNTi4wH8BwsNyivTDI7MR4Xdszcl%2FlK3L4tZu9NZuK2bNlgunmp34YIU%2Flb8LKYftPQVtmpf2g0HEQATMxPFQ6qJOGh5XardT4wfP9%2FBqWGvlF4keYSUfw4ys7SGQl14kYt2jhn0yzBuiFwuCYUAhM6sEtYUw7ilomBKpWEfPzttJHuDk2hjx1pOlNXii56ppu8pMuZjrfhvj9BsgLzVdFfDXZxCUBalrSgieBDtvS2%2B%2FebDnkSluiPjBn1gdn3JvCzUB57tzjVwMIFW8NFMXfeW3yl5rteU6fEz5cY%2FH10u80Hl7za9nFmX4c%2BA5xKZ9Uxed%2FU8ZG9qfe9MBenSKNH2bI35QUUP5fcgGbHlwCV%2FY4zFZ1Kvk194aUnq8%2BKkHa4wi7W2t7PQnXY9k1SZ%2BgTK5gjlkSpfisTKp%2B398NdqWjxBPBb4qtbqV5tNqMvvojL%2Bg6IQ8TRVuUtAXSfFrZ6AHtyuUsWY4qfEDNPTMFDg7m5NfJGQKbSmiRTLC9T4YeshpCleAXdBzhHKYu57p2kLoVqG8Bb7HD%2B%2BEQyaZ%2B2tEw78Oy1AY6pgFuFFPmCkiTDLLA2n1B6ZaVZYvDEPlhCY3J5%2B6trj2flX3IbiAio9d4EFVwtG203Tgqvqfqntx3JGnVxVNuXpfRyGAld9k7m708abedAEClrIcFiG5HmPPpe1qyA2pulXquF%2BrWKKz7qQcWyhWna%2BlU4yjE6nXPpfOK41GcOqQoI%2Bn%2Fmq%2BcFOnfMOYjyLAGhOuZPNnccLoqzFDYgtVFUopzaqqd2BwJ&X-Amz-Signature=7e264466aaa32339d4527c1fcecc340cc473bafb437bbc30b9ded904fa856747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

