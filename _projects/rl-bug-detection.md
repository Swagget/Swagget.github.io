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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZS4G2Y%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T111755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFt%2BKE4GHtUypb02M4xf8iST0PALUC6uxtWKwZTR%2BN43AiEAqwUh6KRsXhO5fW8lR1gAAJIWFM7r4IwDsPW5qCxzFrgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZMsrOmPBiMt29LGSrcA8slnpKKIYlYJ2Gif1lDBYlgSfYxugOs%2F8NQGOIvTeme%2BK%2FLv4QxovUjcE0S3y4Pa6xEmWt3Az7f2izplg0ykqoygRANCJivu0JX1WeZojuzvPAEg7v1XgDMA332%2FoxTGm0PR8hTfWXmAGN4duaS5pwumz7QEHzoV7GWL3SdNG2Yed9hX7qEIb2hv6sM7KMOqO9n02i11m0KBkvD7Ylqw4agDEpnfIJ5WsOSOqYwmEsVj%2Fd7zAvmIUy%2F6ohw5sp8oPi1p0E%2BPXP2Hk4nyBiFVtOvvtnOE%2Fq%2F3gaNGzEghmnoDlBOKDh0tVY2eRMRr1xZnCtaT15QN5wwtMp7D3Mc4eQd36cpUeM5ccYkGfgaSISurUzLtEV24IKkj1IUCiru%2FkWkn%2BJGr8i2W7b5kwkk%2ByOy7mbukBkOx8W161FHLdWN5P4XgXUkou1Z2F9awBlDXsEdOPZyq2Fp6yU9gzBsCeAku4I3x2u2tixAQN3vsxUdEiH4gXfIrcVzF3BhMmbcJLs1y4FXIMYRyL3B5bx%2Bmwo5AnAZfoo0nYSDfs6LwFjsZ6ul30V%2Fe8E4dSeS65vVu73d8O4bz%2FrOwwI2R3YVQKB7c5DjAnSkQpkIyaLdKOanOhb4BP%2B06xaztqg6MLyi4dMGOqUBQror%2BNW2AEY%2BrYgJv8zAdtLOgxwhSPqZJctci64r172EgZkx6PLrD3UppPns8d4Uo8%2B64fNXdDVMhUPyH6za8mVWR99yqj3zaP22LrsY2sYAqOnfpayCmS2Tv8G%2Bvj96a7r97a01hMj6CfdWuQzoXw47hs7eANAlllggXb%2BoTW9NwIcnoqI4RslIOXE65eUAMplrUX8nlmwHAYH4nfypYy7tvQ5w&X-Amz-Signature=3817a0888833b0d05dcb9832e62c04608d9bde03bac1d2c189178f2315f7abd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

