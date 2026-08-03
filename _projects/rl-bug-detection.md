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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE2SOMTB%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T224939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHUDwWc%2F6rNKWahPOVSn5S%2FRuhjkDQ2y5XPJiCTLHbD6AiBSqTf9DJ7dp5pKMwfMBRNV4NSNAu0iZeod%2BizFHbDo%2BCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9%2F6zoqmcJlEU5qSmKtwDogl0%2F2sTi%2BHRnA5kQsk3L%2F9PIXeHTTpDKBct6vR853fZhEo8IAV%2BYRcVTQdjL7uS9MkKoPoMXKyollhofhXCF6DpiH97Q6AcG3pi0zWd4FItYVHO5aIYYZ%2FoCcp9dMVt55wONuwiaLnXOtdjD6Wme%2FkvpC51ZDpU4PIBc%2FAN4Y8rUrru1wa0u8hETYfANxbB2yzJRD9kA%2FU%2BlbnTRXSFX0GnXxaRBHr19TsM6GX68Mu3xDXB1PKcQKtNTguLVzYvgwWSVWn9nVTm5hkt2v7rKM7hFczC5G3hCIEb9v6Qlt4rqiRj19pDkJP7QWb%2FGk8mhmG6CL%2FGH13gFPRqr6dmkArZF8UClJg%2F4xuGNBg3FuMD8sQCVF1YXF8%2FcweMjuY8rphJVF%2FKKI%2FZEnIjcAODg9YBhtdcKbfCnSM2mdllgUh20p4txEgLLHpI03jTCvnmYxR3YO1ScVYoHI8Uh4OVU7MOWuLQwqaxz6zIi8u%2F%2F9nw%2BD5sojSqWuY0r7DRtIUXJHA5pj5oUZMorVdqfx8imdcIAXZo6EoAve7gGvHjPB9V5KESK8wvFmfozFZdgl3FsZMOyZNXw6hifDfqjWkBqCT%2F6KPGtqtm6SA7lKn%2Bl%2Frs6v9AfWp5fmNipj4ww43E0wY6pgFURPN%2BS7nJWRKdRY4rqJghMyR4hd3jrJiu4UdV5OigDT64UoPhB%2F4FLykqoQKmbNZjuplZuCMS1BLxZ9yvMecaFt%2Bh8Z62nCz%2Bvmhn4A57SteUOZgH%2Frrhg6nIAmNh6vuL%2B3mC0O7i9sE1tyH5Ank9GK8LLMMCduLyxaqWHmoiFviqZtqrfFwwt4uDHJ7XRm%2Fj16ebGRZw6nmYwMSbGprYHOl1MZr9&X-Amz-Signature=a65d8a232aaa171c4c74b658badc319a60c32036a5f5028b99e733c215358c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

