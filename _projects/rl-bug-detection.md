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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2EEKKA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T082303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxoOddJ56DV%2FboElI0mKGSwuyOc3WBSzs8AkPxuNquyAiA7zPv3HmYkwXTuLg%2BuLP9WOfqPUYE7JdLXxqCGkL%2BtmSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkffoQ6o63SfccjtUKtwDNopKQM5t5ghqQlSK7redyV8Ecz93wzvEW2dpstM%2FsOaQAS4LO34SQuvcQr6bcRY3iy8tWOrKCtyTHrPimax%2FQbz0j5xUMEaTrCDgs3zpXZleTA0WI%2BMwLvkiVcM%2F43Im%2BX9T5B6p%2FeZzhegim129z3kJ%2FacpZkf0R77WVYQXoT4Nm3UNyom82tV2slzeTs8wpJiRGloQbx0HCa4o5w0WU7YSX6nsUzBhq6uVvmr9mCd9jgIwiKAkVVndpyQloPnbXJMt1GVAOk48mekyAAZrnJk81mGK4iU5lZn%2FdcJXf8W4nnC%2F0H1OKRLvA2cSQs%2Bu5LmHlOgd3IdydUVjm%2BlNYGeh0l0ruptaQUSbgjjXnTP%2BRoqiwxEVLIeh6Rwz5iSE28dv5oHycJ%2FNKb9nLeshoveTINXbk06v0QdEyMrCRQ10jZGGMuqlwUzaq0bF%2BcRjT4pNydT7kNJUfVmR9GY8T%2BFZkEzQuJS2V18fsY5VG32GJgtcmCnYBn2hUDWSPT%2FgRV4JhzK6QzfVehBYClsTZPVhSJzkRbQvbccDdTCuJuYBMMi4mIoTvva8o09bTpmdbEqRTyEdqradUq1og1jXt4EFQw%2FhDFOc1nk3luJ3ihdUKRA%2BBl4c1C7EQYYwwOyf1AY6pgEDcUtCE%2Bt5xQq07jLnX3j7ImF%2Fj6X5VCmBk3CGKF9YFszsUe8bWa%2BOQn6Pdad98vyWrYTcfaOUUrCUO5ZJiHnZdh3eKyo8s8HuW0dmtPJ2fjHVNC6MfJi41VUMk%2FReTpMdrydL4KWjPOhfuyzBBcWHxK%2Bbjnjtm2q%2BVfQwq%2FTpCeZTgX7bstysWbWtWve%2FiL9Zgj%2FXbSvzRPeCLh632%2FOPnUF8GF%2Fy&X-Amz-Signature=ee04dd0abb5daa5a9d0537e353f8d07ad1ade0799b2b8d1723cd5036448ab2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

