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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LBXDRQ5%2F20260605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260605T050730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJm808ewNZxduZ2f31LEcQNVLW4kfXIVKmGbr5lHaa4AiBQHII4Fb235T8ZcWwkwinC5IIhEbnXsVmo%2Fm0EQ5QxACr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMTl0cmu5lgfmgT20uKtwDTDKCfx3tpbYUosXaPWTFmz5VDe2TcvYMsswtA5aQEeKDfmQhSK736WiEBUqsokG%2BNehiUT2eTj%2ByWymliMH439HWJtquNV%2BRyVwkRTivEudnvZxbgnYDd9W%2BDS0g7zo%2F8oPrJYFjPZY%2BFa4lB8O%2FhzN4Szi7mp1ZfIdorRaHm4kogEqHB0SPUlyDX0Wu5dzs9iGWf56QxGCpIG6dyKJ5rLXpxAsFrAA5aTwGTYDYBAmwMhlTt95cHo7XuKz72BodlOX2MH1pQ4RtSHJymwYeWEG17%2Bw98NV6NJRsjP3e0yktnkCuSR2v6HCpFkC0VnMhZQc%2FPvagvAJQzNXuy4nk3Xe0BLdlBy45dkMwxdaGflcvLAw9tGPL0azvsjFuZV4SJdWfiTsyItvywUsxS0r9bfvP6nNAt9tG4Fo6%2BviCcD%2FhprEqU4nzazcTN4otYb5hGyQzbD3xTHZOD%2BS%2BaqHiGs%2FNGz7JYA%2F91AdjdGyEcr3tJIZb6VnPON%2BMzM5INbDSZPup8RC5rZyBnfnqdYSE0tr0rXaGbxXeZtBzAigk%2Bne66UBZiYACFPoxshsKvYmcaezzVlYTc8Zl1p0HvAs0SEUKDIT%2FPGaic%2BguKlWN3PyTtf9yh9VAAjuVKQcwqo%2BJ0QY6pgFOL4gCcGDYsO8ORGLQ0eDJ6zYZPe8u7FoOGh7Ky3teIak1%2BsTlr%2FyHnprEbQFZYwTqP%2Bo89hJ12kZJUSj9wm%2FP96mTT%2BuOczehQznFZJ7aVg%2FQx5Os0ya9t%2FhehIikJ5zweAqhQSNuL2ngfPteL2Db3qBWa1dwhRWUnoE2Wr6Q0rqlfdgN997ddUXlRqFvpGcBP11oK703j5FQK2up18qNiBj6zmxs&X-Amz-Signature=26ec55b3c688ce9dc98e4097e56587332aa84743fcc071423d82f3702e1922ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

