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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPW4GARL%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T141215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHvNQIMC%2BGe0ifYVM5SRiMQ2tEZxkSTdhlmvpjWFFOb0AiB7bJYnYW0qV%2BAPZDjzDy8DUpn9CAoreRcYzrHd%2FmQigiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlxE8zc8CLkoKeQ2TKtwDge44%2Bb2xbE%2Fb8JbB66sFKV%2F4xpm1Q5%2FN%2FUKHf6OTSU1C0cwsYQmXDQQ%2F%2FwYzwHZ0KifJOoIEh4ZvgnWYTVJHcMS%2BlUjWUczQVxZw5GniFSpWs5BYvnym2KGUDrZDGYgVC5i1Y77DYMXMaLcxxa%2Fs8B7k49rM8OlFCIhMF9cEhER2sviPDT%2F7RgSNjDT4XMfIo1G%2B%2FuxSX%2Fq2DRXdccR3z33zalOghP3Cda2%2BT0DyKPnaX5b7OuXnpOfugHd%2FconePu%2BIREwoqMHaiHYgww0NT16PNWReH5HAvSNwUYtKisSQV39OeM3sReRsBqMdm2jKtxlD%2B37uO6qWkAabNmZWQuBv2zfwlsVi%2BOXm6gzl7qKDF2pnQdw54VIJTQpSkxmQIweJSjFUpX1V5IsbEPVI5ZKTTpw1BlIvz%2FcTQ1kEtobhrJS%2FlSPLbvEcPwbaqiNdxqGma0oljWGKx5dP6MBgYiOVPb1fdKj5hzEPGyNbh8pUTB1D3cxu6QVw6FqVGzCnpHmYGGN5tDB%2Fp8pPADpV2zYVh%2BALWpCU2Oq2fa6gLIlcg814dIrcT741bDmKRavaxYAqK4sFm4OIs2WbpxJCWhxDWX%2FKkW7MQahZWtyNQDqPjaU4FppnHF3ILDkwqJv30wY6pgFe%2Bo5plp4rRhHdGeGfPaF4D%2FYT8xVP6l0qKSmHmkTqaLqd5bjEvBuElxbZtrGINB36zRm5zCOIXO23F7A%2BTZuVyUY0cO%2FRVyM0pwX5ql9J8ROms%2FVB7ua2qqqwdQ4ogOSLidhBReCbiSeDD03htaLvh%2F6JdNKl%2FtjG3fG%2FBn0iTpWipBnrfJ5I7V9KQzKQhUFE8HhqfWKlf%2FUZgINyTQb50OSvVT11&X-Amz-Signature=73b943bd6db868675d1590db8a2694e9d3870b9e1bf1a9f098b0ed9ad520fab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

