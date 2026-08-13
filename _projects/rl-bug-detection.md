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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGDTOKSJ%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T100244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAKCc8p55dn5Zfphnww6sjKkQO0ci0Gh%2BtHKA0ACqaP0AiAVvlpOFjXoh20%2BfZf18Z5nvYGV9iyjFnJkkuboe0a8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVbosKGAy%2BImPv%2FUjKtwDwagw4sEmwNUyueXQnYOuSuOq0eJ8rCBa0AbYO1q9whbNqB2KiFR6utD50egxzTh1pco6tcOtEVqMZAP2UIkAojUy4QR5c6zvjt4LVAMEaPo7nKGVRQ9yEUF0w5MPg226xKM35pgwd8n0I0Sw9A4PDDneXd0qEbHCzwDRDeZCjuSeYfSkOaHwDjvzw8ZkPUg6Ly9RWbybD6YLNry%2B3d%2BMnEqACZ%2Bo1Yo5MvM1CekWSmGjBGIpzPFIdDVYw9gnZZocSP7P73lIvWaS0H29a6IY5XiJIuGdD2NegKJOy6wVtnZ%2B0LDtgHYn5%2FVWrosGEZxYoY0yJppNPiujRHZRIgTY7%2F%2F5MPyruME7dH6A3H4d7XOAH6o6s%2F0vhSIUAgF%2BmTbN9HKaZJQYu6UwlcpEd0T1xxzuoQHTxOJGK8y%2BaOVfyikjXB%2BAAqeWZs1R3ndEY5Q8MDsVBG5JGsGKvjmcqsVDCSQ8cDgaCzM4EI%2BCFGZmw%2BDlkl7wo%2FKmRr%2Bhsf%2Bkb9eYkvRVCBjNH42%2F17jw9IJOgu96cFsp06pFaNDjL4jfS9mVl0IaSTEO%2B6KGarcKKkiGQHgDTTGHdOljKibAxfI4vQl0GZH8d3AF9Wnu3m7lXdkngpaEJ2STVO2nUpgwzpv20wY6pgH2e5r451rsH6KtbwKXT379AJfWpX5PNovkGfDiBSSv%2Bt1BTZ%2FdICjuC5Ro1V%2BlvSxpuAOnAoeyju3onD3S7yzcjkZ2RzvDkCi9ZBJtGCHYyMh1xdTXzH9P1lIoypO5D2a0g1JStGZcFF2QxEby03pvZF0vQuQjts4GiU0x%2BtHBWZ7owJ3jXssB0gAU2E5%2BO8o0m1QviJyr%2Bs2uMT3v4KtmF1pljG2S&X-Amz-Signature=2ccc29bc391b9e2854ea2dc58f6350ddd3cb95f697f055fb867346d926bbff83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

