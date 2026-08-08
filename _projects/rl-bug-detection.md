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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLNU4BKO%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T122035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfcr%2BzVpn9KxmLUkMBw1TY%2BMUg1mdYI92BmWJB2r%2FWsAIhALBXP1zA1mZAE3iYGx%2B3VrIze1Pusc%2FtRywka77BNeqaKv8DCGoQABoMNjM3NDIzMTgzODA1Igwu7Rea43Ui7z092Mkq3APOtDoD8SqXp8fRQR4QC6YviEJjXwYQ2OT4M9mO14Oh4rcmeqWE4Sd%2Bdorb%2BGd0Ji8I59bAV8dhf2jcpMNLGy1C6cd8088TcskuyUoDDfp9C34yIuwZA%2BDNytnRfqYvUIEaxQLvUzzspJrzOsNpFxMaZ6S25jU0wpha1DO3Dx7gM7UcOC0vA7TpnAUo2k1spWW%2Fl6CUQXhz1ryOdqZkkamrVYcLM%2F0zV%2B7VgMI0zEXMkNAQ3uoe9sofZdSgIsGdwP8GHNspJ18wO0lWw7X%2FwqkRxEqRnljMIzxLK7QgUhtUyh09c6DjREhv8XvmqmLIBi7GXEAJL9OkxH2EwE0IM2VpDr%2BUnzabFsLnlgaCYqIsccjaxZdGmUWeixUUAn3E6km1IaKCSO2ifkuJZSN3BrvYEINOhlcm4Rp23ypoU5q%2BzhjrQ3s8KNIUrYse1UzBwBwndcn%2FyFlpFfKdRirlOqK3m23Tux6Cryso6OUWCVyrWsEatP1%2BXqsPowNI%2BbftoptVaA9xJOjAk2%2F9h7INzYXSbNvN%2B%2BDc2txh3xwtnl9Czm1Wtx%2Bu3cXmespQmy5yIg%2BgP5j%2FuSLOcy8uxm3IpN6zYK%2FpxVuX8qkDia1BwDje2WTd%2FXvbT0Wko6rWeDCA1dvTBjqkAfM8uqc%2BrGIFaVAYWFYVNCPGuddxPdKahMynOeJHG2M5kXuLcCptMSm3vYV85%2B9h4DBhM4hcwECJ9OdsuugrZszhLwutcbkP0nV0sVwxILO7NFVKTjE39gyMWkMB7iEg1cKoR6Bsknaa3JZ5%2BhbWjZPTBZGwGzQu6r0NThYfCu9Mr4CBT5o9aw1W9FF90xZejj8o%2BmrOco6wqDtt8ifETVETWDBD&X-Amz-Signature=f7ba5fa907ba61b995dd4ea2c06cfbd9e703dfa1ad3d4fb06388fe79e3299e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

