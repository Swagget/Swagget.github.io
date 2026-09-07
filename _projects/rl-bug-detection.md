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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVI5NGBG%2F20260907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260907T052128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDf6zvqFZnLsdFjKeAa3qOY%2FwIiPB%2Fng8vg9Wt1kDZ5RgIgXKRsN%2BVv22YrvaPYVz%2FZzJnNl0Ac8x0DYQv9i4liUi8q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDIPeykd3jG8ILWjMWircA3pVaB%2Bjc9VDI1lD8QbopWbsdQmJW8WW37Ono5FBCFpWZnoWh8zBi8c65erzW0%2BvxmfqRQ3cTrymeNmV2yESrmLSxT1e1f9ztMEQj8M%2Fvi5B0lpMKNSC5sse2uuANQ6fWvZGOpnHaj8ZnW%2FlNWr7m3lvR5x9tMKqxMRsdej2BIMPXz2THwkAFkiTV0sJJdSiCqOAT57L5ayKtgBIoqonCjSEKp2LEWAxRU3nOYPmWoga6PLe6gLRlmaffaTQh3tUourF676jE6hdyxmSC28NHp4VVCc8VAFxIP5j6TPGdpciURkPFvG2YFqiFgA5cFE1iyCJ5ZNYneqLEbhtiIWlG3e5gOAnumDgqgpuUyXHZkKyks%2B6Mo2wJ55bvdFKyGh46FrK%2BF21SR3dB%2FaorS3X11ZwGCqREjfLQo5UdPzWhIQQ9C70tdjfsZhYAKlo25fV3iJz7pJslYyAjYRziD6fesSGwUc4Si4kGFxW31LH68vYOruMGiZSb5DGdlFF2Ict1e45kA87oBVlFokm4BdCXz1oQW%2F%2Bwnzpul4DSa%2B6rzn7UOY%2FPAWZMYOdqkDwrBSc3W63dUeiMHgKVMdglKyORx6K%2FHb9aTnQhB0mjsR0CPck8KYtwtFRRwewJEcsMMv5%2BNQGOqUBYN2huWu%2BgT3OxN9skEUi%2FR0Gp4wPzPmJbWUSxBvMVVX8OA6y7BM3UeRqbCeVpR8LeO72CcWcpO4P%2BEJ03I0FN%2BFr0ueo0W%2BRV89scslgHC5JQicY19ZDqnKzZlZGR2Y1Kj4AVQAI0Yci9CzX29uLTaJkv%2BW8vuhYJx55A%2BjY9sTA4GGliEIFtjkQi60NTQ4Lt%2Fsgf3GEGP5O7MAgfdSBPYuM4zLo&X-Amz-Signature=d9ac01e91d7a20c76310f949516bbf2302dd5fa4c2b499a6d3ab6285c75debf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

