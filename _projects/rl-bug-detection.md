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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSHCR7X%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T002219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCj5hUXUPrunPZaYicSvXFmv9IFQE1gQua7mOQAUHs7xgIgek0rpoJz0MKoFdwGwoYSmG4MEkLQwq%2F3sEKvUUc%2FI9kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDOVr%2BZmDhL7F19xlyrcA1aeM%2Bacb8BhEN5OTW94RDY%2FddoGaGpKVnw7qfBM0EmKscxEO3ZegtS8%2FtRsTjoruZtTx3%2FBStAZe0AfVjBOVYUCL9WELQdCXIXa%2BIqUeIOji5UkOtnxTE%2BI%2F9i0O%2B4IF4k9RanVwUbVNEw21K%2FN3SAoU7uDfz4clCcraTnO1hodHyl8U60UtjDEthxDKd2o%2FNGjyKOy%2FAahK2BbT%2BRWF25TKXSYX%2F1CamimotI0Z54uQAZDHN%2BsseFveK3%2BshJhFcr%2Bxbg%2BTMRQHZUYuOlzxYuosssbn83pD01ud%2BqhlSZkF58pJs75FHuHS14rdX7x1j1EYWji8cnTVepnPq9K7kIgwgZdbMWw4lrlWunIXpCO9pS3CWq4AwIhO7%2FR3rb0K3qS46nPfGh%2F7njafvRSJDYcIsMq7Nasp08VyV59N4%2B%2FSl8Crtwjiq%2BnsEGSHiUTIzd2i%2BtCLNb85mqV3BSUa7KSG9dtXpgpOHVN%2BvLda9br96KHbX%2FNCSYEK5iF8A9QktAdnK75sHS%2BmD1RvWwBcW%2B5fMlgMU%2FZsyQUcA0sN7FGOtA%2FMpUwlvwwfd3u%2FTW%2BvUyoZ5oXCZGUxdDQhpESKEoo2p8ypqAkOD%2B0MJcJvDjJz4rtVT6KecZi4dd7MNzQ%2FdAGOqUB4jnfotQV1H7YpVO2VCguJLv1i1R%2FcglOHhlxq1fhBE%2BJvK%2BZi1UgUnvbd2PG1HKcb1agv3lESEQhGPpX2rjYRSb8gJLhYeFVT25NwUkY1%2F9y5IEcXTfcj6jUZGmAMkgdmLWw%2Fgx%2FR3FuaZxr0HnpjCCsNjMrVsxb3GNheQvg4aQ40fei7fZ%2BS6BOkuCCo%2Fk4sf6lseqlp7jnEITjCMMMCexh2MJZ&X-Amz-Signature=990d9942379d87122f4f0688401b41315ac65de4497e63c56c0965fb7b85a5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

