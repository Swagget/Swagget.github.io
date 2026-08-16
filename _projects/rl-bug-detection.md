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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBSS6MF%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T003103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHu%2FV2IoxbPegZyqOw%2FeBTN4ehnqq03%2FhG%2B8jaN12tnlAiEA%2BZEQl4vO9Gnl0SilKgrh0OcX8jvxadudEhGPuqwLesoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAj1MXVyVVEHlbglJircAw1HEEtx0THrQ0xmhnybAYpvU5OByOn1QOaJPaHe3u0l3A29Vd9%2Bd1fibQW4lPZLkr%2FQvHDkQ65AxyAUX6x%2Fa%2FVwTGAiVnKMFJCufXzhuRD1%2FkNhW0DvhSt0JMFWVajs5I36MJwLvcx5XpnUnGHHfpuas8CI49a9LXjTOhvsWPPYkd%2BY%2BmszbpDeqSGv3olO6TATcB476bMtde86zbhmfDqeyWf4OnXXzt8C7jJQe0dJBz70jaxkJaQ%2FWZ97Hy3RY20fBfVejJO10S3uKC93bj9w6WZa2XyuhbMbHb6vjs7Sy%2FBsChgfpRH2DBtoZ6l%2FFzwFzPI%2Bm4J%2Bz77xfhjc9Zt9czu2%2FHZd2H%2FqWfLTnq82WNahqhu2ueHJJH%2BMv1Rrgk7xJD9Ff3ByULhZctKGo22XTcY%2BpS6vAKZhtbFRo5SqmHstZ4yNKRFPYqWXAjk%2FaxV2PHsX8x08MGh0xTyRPdFyWDd8MtjGw%2F%2FeekJLuN%2B7hw2wrWp%2Fjlx2zdyQx%2F1vgFoh3PWpbuiizpr55wjJxvRGiabVEkBj07xiFBZ54906b4BCKNbwDYZBv12zeemyiTSKhY8UzIoO0jOAMTtMtIJ2blwdj%2BgMxB8Gj5%2BEODYixYQHfIK0wyT108vzMK3rg9QGOqUBao%2FOivjzaX892mBhrze424xbNLwNfMKgd2MHZnfSNZEF7mgP6FuDPgTr1hl0I%2FMK6GDwfnsfiY4VMAAbITjvpMw%2Bec4MCcbfleeTBoK8yEtt1I4GBbuQRMbKqCYYY9QCpNq6YcPe6oWWQ%2FcBGRE1SjCEOWiqMgfmLiLvcPj9QJUyRF%2FcjD6VJU4W5i%2B%2BPA2Qu5GhXHD%2BPiFBPlQb4Zq7NAD8hBBs&X-Amz-Signature=eaa5ec6b6d5a50dd02fa705f37c20e041ea801b7713aaa911c776229b133016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

