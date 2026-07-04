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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IKS44AR%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T081734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCT1Lk6bWHWH2H73r484mv9V610kA4udrPN83TYHPqwQgIhALJclJqxHUCcS%2B4frxOaQ52cAu1VtDQYppV9UiVRnrzxKv8DCCEQABoMNjM3NDIzMTgzODA1IgzAHgenq7ev8Zs23tsq3AMC9soguqq7Zi90DEvEMD%2B8v2dwueooinj3xZTcgLbFfPsWT%2FNMlfA1SK5BZapMPcQ%2FMTr5EgozFHA5cEtA53ZEYM7jDA07tm6XEHtruXI7vvBUGhsXfzEHpxaSPDeNOo3tN1WmW8VN4ttnp8sMJbYx4TCqNjaRosiFHKhcae21f%2BnuwibtL5Eu9UobhVu0PR5HTXhgn7cn07DRu0V7H86vHG4oRhudBM23PST4BJKXspDdSRhIIJOqUfpjfBzLWK8qp2ZqlbFLZW32F6pzs6GYnGZ4nuel4mddqffapsiAjuhX3swi9Ohr%2BxsfaIvGi%2FmVz6Boja5zmS6iCOE9HYoJJzrBU7dWabfAdItiQgmTy0OFWaudG%2FxDuHxr%2F1F4B9YDri0CAp62BF92jqsn9fpTdIGDCaPk6Fr2qAkSv%2FfAwy9dfETlzycFGusZKbN4WbtNymGUKlts1muULETRSrZ5UdFWB5JDBM5myyeCPTiUC%2FV75q7E149DOA0Ls9sUsuXhhSHxXdbCJWt5wFbAkkp2BW2SX1UjtpkGiWw1DSSIx6E8NcHVqsNokpXmvzlXpJPkC3GkrImBWCf9n5IuQHgTGT%2B0zSW0ttb5kVXRKuk38PU6yTGS9HQNMvc1jDCJ86LSBjqkAQtfqtZ%2F%2FEVaIf%2FMej1Ml%2FKlTcHVfe9UWPoJRIqVSkUxQX24rwgxwUhk1Hk20UP0m%2F7Ci2DuG9%2BdrT6Pi9VZLl7I3w%2BhUz4PGQ8ChR2xBG69iBCnYJQAGR8gmSy8bRCmEWAQOzEjPD9T%2Fy8CJl7fEGFzMmA5mFr3BHVabYTDpjKrPjp7QXxRa9aKvtjZULth3hCz5HRLrlj3RqaRLfSCdB7qWbqU&X-Amz-Signature=f07038988c8280e23a21f070dbc2b2a00c1390c23e2d6b660bd0fc24a6209ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

