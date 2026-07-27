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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U76AFXS%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHzzO9E%2FeMAEN7K6VD%2F6mLrrxnJ3olVnfm5YAkQuQifBAiBsqRc2ZFoK9gxbp7ypdEag0MrSdX5H9WhUdWXBf%2BCGySr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMe8b1jyji8KERc7bPKtwDqlDUOMbNkJ%2BmfZUUxOVjkfi%2FJKz3KR%2FnRviD8opqqu1NdsM2c3LkDmB4sslkgb1MEZKXfp2t%2BUVXta9aHEkEWXLZfQZ4EFCCSYLxtiwKTe1aPlsk%2Fu7xxbiD1MN7eVstfiP8HiCjoTZCuV2MmVk%2Bjn6PQYY6fIU9dcK5FfMn%2FmzF%2FCm01tyqgg7So89ok9fxHuvPGbJR%2FUw9l4oya3LITMnB71Upxq5Y7IpxXUEW5WScAFxxp2EO6pf6qwuJyK3ltzqBJrvHOscYEx8WI%2B%2F8orZ70ILr0Py9wuG7sJQg4%2FDDjnKlPB15vV%2BqtCZzAauRhmXaBMMxIW7SVCGZbc8%2FEpXrzz2E4E4xyo7vNQENclwc76HZ5zz1M1u6NyTMzq4iiHEANxYrmNH3UXiLB%2Fr%2Fke6kJGDidZ4y%2BO7oANAb1aVUPKJ8isSJzhVijg%2BdgrBG0YxmWMzatQWdGIiJs3QdoyKhpd%2Fs2z95wgBa0V7Gde9nB%2BKD5WxVgEPj0nKqLTCdrBYBLMRebU%2F%2BjPZcuLgQ5Bsd%2FCITmtDxvW7cGFW1I5cg5ZWdksD0i%2Bk9oNbPDx97fvreVJrkd5n%2Fe2EnMY63SxPnnppxiF5Ajpl9xi9wf2Kx%2FmE7%2B2ovvvfnFQQwzMae0wY6pgGIUXi%2BMdnKhHidbtnfrZ41Y2VfLZBFXCN4CpDN8GKdF4bI0V5%2BReLhpScG56c%2Fpa4KFZ76h2eHQvY0COtZHJLwd46E7UQHrr7S0c4HuQafoKzX%2BRvvcaW9K5Pj2recptz31ZhscEtIXYui9R2Cn52BSVmI8Za8XlctlELS7gdf6%2FncDmnudvQBJOojci5EaG0jIjlRk%2FSyvoCW0sTqSCz59VlgjTYT&X-Amz-Signature=d65aa47b11554637a3010b1c9023875647b84117fa12ad7e71d84119ca161f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

