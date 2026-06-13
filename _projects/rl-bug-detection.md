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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5VGWBW%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T110704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEr9JtakZpiznQyCZH0I6688u9U1JBoGoTyxo8GXmIbnAiEA71lboep0KhSLVtjv3Pf4gqBcjHPasypEI9srhaTSdBkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLQRli6PZxpwToOoIircA3oeHKibNLqHYtc2QzcPlS0tO0XqwvVW2rSie8aLz11bEmEM3mQ%2FP547sKzCsHA%2B2zjEABnMJDB1sXDVENVF6q996ewbTlm5nstw8JVdKTQghhRE9BKFOSwNRoD5PsqaE4CVcGumVVDpeaDRSnGpWvx5Xzmlm44x6ApJs%2B2ocAo6lesxLpU9AEDu%2FyJcCgUwLmRrSgcdHbIKDdhuiTBMQatYJEyX70I0%2F99RtczISekJFxzyNRS6kLn2Kw2m9QptXi37B07Ec7hjJhCCuOuADAEIgQgVcGTWuOxZklva3dEUARnCj0kRYdMRmmghr3txLsBWDYqLv4dML3P%2BRwDGGdK0v91tAz0jJrKvI2Kh5H%2BiVotIFoI%2BpQH9TUXhjNml7lLb6lBdnhTN7QyLg43IjoKfaLE933GV5ogzFgcSQdUqALGio2s9ysX%2Bs0b4CK2V2%2F8osQlDV3gVTGms4qh1337yU46wo0EIRNvUeaWVRaDsr9XFw%2BBCaZAuVRD98lcby5VS4qWkMt1pdNJwRhwtQlMpQ4FPPb36856K2azClgxm9sfSFrEEsRR5ED5mfEg2LeciQbxPggo9%2FPJ52bm3y6vPQ4hUJwHPO6kPVarouq8K8QXhr%2B1U7SCrGmFyMIWutNEGOqUBHMUx5yQMkZPggGcYQ5jKVRQ908qou8tyPofzToUonRIZhabM%2Bq5uaMzuO54kNCBgHY1p9yz%2Fc%2BieQskw7gI3kShd3%2Fv4qkjkhzAYUd8k%2BeI7WfAd%2Bu1ueTytX%2B4n1VdsrMOixn%2FoTetTjBW3nGSBNYfNpVXEQxQ7XIvcYqBH524pZAxfR4RZMuqDALFbp8TrZgifVywIM0lRAvJcJTiCAuUVqy10&X-Amz-Signature=5dd65c49ec8dde2011749db48a6a40eeed3683fab8af70b5cba5bdceff9a9a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

