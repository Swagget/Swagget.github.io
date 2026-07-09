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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M7QR4R2%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T184431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbCeUvgZ5NBZzvDL1475E0IbsuxnQ4jxNxvmrBhLNsiAiEAsKBtICAq4TYLhvTcUugdqWDm1OU1PR44CqSEkPYd%2FioqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbrOq6Fvl%2Fg7%2BGPESrcA4juHkBHiy02v5lpLNAEeCgD2ryFcf%2FeBRMOCHo3%2B3eb8WYDLqqA2oKrVPsrWVyn8TQK0gYGcy6emUATmYDF9cLG3mWqcTfsaqIFjMesOjuUOsGl6PBbLB99npZdI5YMSkP3NscJDCixRXoVR32YjwBjCCJ6VIJNpKkpaUd2RipyAPj1IPIFwJ9QCuOzT6Q8YZelSH7xh%2BaTXbXRJoGWEvcyTzRPZHBpIEz8v0yXQOkf0vXHyDA0IyGTzIMcc9kv8wOt1FDu47kgtnAXWksycdJYR99%2FFJunhkO0bwZSdvPg1QGFUXPJDuIMO%2FqeE2tmcMEFEZhixM3kmUK1qypxLeA6n7byJ6txJ3bZW54f2Xf2NPnMyPChhTVKYQJn70OmnZJHQooNGFNma8ZM4K0S5rZwT7kbduD5lmDYzG%2BmPrAqgfIHC%2BWKRfkWuDhRfcprb5ZVdRQMoioPDvMDAbBESBNWbk3qjDqPzYqsiU4dj%2BV3FDUtzakyCmYeYJx8cMFlNBzT5ppy%2Bgm3%2BYCJCyNfQClccXzVAmBLjb1ERuUp4PKhP5emBDueu%2FRCE9Sz%2FQ8ulzbipKJ1e8Ag5Xa0j%2B%2F6otZa4Kx7uSkThKuAqA9mHOMLMSwztq%2FmscrKUe1xMNbWv9IGOqUBEvFzIXMFYCe7r1%2FsomM6hPv3OWn2TdnZ6YrQcNJa%2F1xRNrgGHQOtvg%2Fbv7EwnQhhYUxDKkFyMHqGtcISfzlUagBNC%2FdPpLcTzCWWea7ShDO%2Fsx%2BeQRBBQceW0VyKn2qsF3BoQVmDkzSBQEXCWQLOhnKXFQ%2BH1Fcm2siPRkfvFBsE8I%2Ff0tA5xCNaqGQmK4EjPWxY1KhFeBH2cUwKcIVi3w%2BLLOt%2B&X-Amz-Signature=1916c205673fac71a33c534521e95cfbb8f81a7ed5be7bd426d9b6eec802ac01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

