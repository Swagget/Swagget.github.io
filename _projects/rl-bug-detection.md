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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYJXOUW%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T062251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIAerpbr2wODS9J1PoiS1q49A%2F%2BwhG7FOhCJuHkFNJQ%2BWAiEAtoCjJ6HqnMPCGcyGLvn4P6Bj99s95B9dnwUrqDKgrfwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSXUeHbxj6w5n9APircA6zEfsJmSA%2BBGvf5dBKIl2JOabR7KdzLuLYlZmf5G88c%2FWuCZyTPp27rkmEmkhoDu0EeuIfzZCRtQ4op57kucCYLIzTzyjUs0YiR1HiTQQh2Ac7jyCFnQy64QkaCCw8Wi%2BweN4H0VXo09tUbTdU2tVc1FRbWVjf8BxWlQ4z22t381dptJe4H4uppUf95rAQZrDXzIet26T536Lh5UpJR%2Bp3HU8cg6jRqdlIDiNhCfpPp9jHmCoesG7nXAWzPTd8tvoN%2FcQzd6surnIA0%2BWecaxXpHOIB1vBdgVSKd8kApI%2BRQ%2B3u7Mk2LVaVG6Z4kn2YL%2B%2BjaGNv0y%2FheMFS0Go02HTRGSbwNoXWZtbnhTB9wq8uq8NqQ60DSRLgXhaBUrvKOcHuV0PQR%2B%2BQ6SuZqfjkFYh5S3DX%2F25a1woBk8upIb01%2BBmA9uHkQO7K4hkO3f5peXA5MREdC2GQfFM5bgJV5aOiKUQ2JaWC8WJdhYOJPwAA%2F5fo4eYAKvxshxRjq6eDzHRq06WtI6Fadx5QIUJRm%2FaLTfb%2BHkxpsBN3rHKOktd8jmJBIGGcS0qa3FO4ZOnMEwNmt%2Bx8IbOKpBogHX048KRRv5XQwBy06plwPxicvxj0N1G43g%2Fx3RgCd7O2MPPLtNQGOqUBDyXJahtnL9xpkga5FxrmU4M2F%2FEGgMOOknpMWcalu0W5jAGyt0VTT%2FYZow8MeW0to5RMTXFgiJv1zsPQjLgHnp%2B%2FbymxheHLrtrdzs1B9Mu%2F9B6AsZ2pGuwdjKvBLFBZw1hEIKOKPziTCsmg4Kvf3G9AVmkEy1RQ0N9aalYE%2F3cWyiLQyvmtKRROMeqYlAqkHEjVV%2BUNiyj%2FvnZJldg70sKZ20XT&X-Amz-Signature=519570920d8faaeef63f2df11bd165de626eeeedaa59f072b2dbfb641d0b87d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

