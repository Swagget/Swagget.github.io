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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMTTC2EF%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T051445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICu%2FDhfTnUo74o2v1Y%2BDlEvpuEl99X7t%2F%2BZqsk76B5g%2FAiEArCZ9cY%2BQrt%2FkaLYEbURak3tNDWo%2BpRMVWFXvqPZlvnsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDP3zE4AdXmTyLFVjCrcA2xAqrQXYTH3rMVtngf13K1eU84j8AZnelUbA14HmdwYbuyCW5sjOAaCHjy1T5GIY2vCYVjY9HaM131wtFuz7w0Ti7%2BsMK8P%2Fi0rm%2B%2BOwdVTOAJI7AMb1gw3SgLOgbPqK%2FrpxrBLCewp7RGAoFVpU9hDUYifistgcbhvtk14Sx9deRcJ7Tbka3NnbI9WiY6az0snmujzv5Wrr6qzt%2Bmb6y%2F50DWBsZ6ZdJ1msjhegXNi%2Fp9fD9evbIMvYjl4uo7SeVcJCEp2XkTVC0SKdm9rJTLBW%2Bh29%2BPgUAKngQyFPSQiEb4rIkwViiC6gBDL8eothT%2FQIEBxL%2B2QqTL1edAQBkYjsUfvo%2BFlLsoSPPbgf5EP3LqbdIvPZMrFRKgxhOA9HLvpRX74XOzOdXPTA4PPaC0py229OxUsu9YwsQ2uDYr8KLzLljTvc%2BxGgl3IJzzeN7fiCZ3ghyK8%2BlbJIM%2B1Z4jlQ1LxWqSYacQqM8qV0j3GOShuchysTPlrA%2BsS5Ezrwi9ee62BluVFUuloS%2F0W%2BXqFWGw35i5LmUGxzWQrfrVNtSv1GwORpY%2B95UvlOm3aUpn3ikcJ76Aa3FkrvwoMvwW1XaAitP4zdifBLotNqdd%2BCyeutTPC0%2FzZLAk%2BMMHAutMGOqUBdzkz3bGo7mGCFCNdc%2BKEXpD5ZV1MwV5k3V7r1epoL7P2NSoc04Cqn43uQeDUhq%2F9dO6oatiVqIq1cBcTAdrgvHNQqO%2By6wpJRaUjG4hRJWin5wrx0l0p7eChbdZlt1J%2FYsbRCYFzT%2BHpz4iTFRwYzNhMi9drHUzSr3uyskoHrzYQzlVAGov3YQMd02v3jpID6iIjbhw1p7NbtotlSq7wtZtO4310&X-Amz-Signature=d0ccfa439220c6d89841b7bfdfd8f4f7f4a30d911e1f7c7084ed107c633da2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

