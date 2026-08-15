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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CBGZCT3%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T230904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCZx4tvT%2FjDenCKI7HMeulsyf4%2FbaYz%2FCqGn7ildvi5RQIgYu4qjCHgsfIXB6G1%2B%2FNaJw9acdh4AwC2ebK%2BAPRwAFEq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDOX76ZV0l9CwT8wS%2BircA42LOgdNMI11mJy9Z0WbwFkYYvBo6fN1iWBSB0qDtLCJtqxgg2NxBGYXG5E5xBAYauPOEpY4W%2BI3YJ46Bq2ohMVhBjC9DLPnh48MSsbpY6miJr9D7OU%2FNf8Ha6SAXySK3RRt5lkffM3ep%2ByxDoyErgtFAKHs8Ji43SBz0rC3uSRf6ReGx9znO0yGwLotsfEGgPILNCGE4kNEDwklndImu0tBiNLmVZu50pk%2BFzbpygv1iVU42hrpLNSyZ9FHwqyPJWe0kZb5LjcBOBIFuw4Sy%2FpVuko0z8oPAfnlgjTfmX63n%2F%2Fx0d6F6okMJCAqp2P8I%2FHI8XokNXCVxVxRWZ1sf8w7Y%2BdvHAZxRf7K6QE34TH3jHDyzCmW%2FaZ%2BmJi3nyIh%2F5u5B5b%2FBT7O6IJ%2FLhHOlMTxs9Y9NzLjZ6FCnZX6NTKvHPatneNA%2BA75YKKE%2F1JO8F%2FaGqpALmubsmvMMA2n8q96Wy6jp5FZdhrBMmvu7hw1Olnv%2Bv4cQeAv%2BkgG9fCkYKz4MTGfvO199Zbw6lrMBpvJcX3Sx%2Bd4GlGs8VW31HNWKchZT1XD1rDAmZ7fHraMqv0I3JdZZiDwH7ON1o%2BGBNiNDLzCsXvLg7KsMoUEX5%2FBWqMLafhh6zlnzhfWMI68g9QGOqUB57Ye45M1HDjJDvpr7wuywUfp30LpeYYKVLbqGeOpVlVdSb83bsz0hG%2FRH133ktzL9gZINagkdBJHjAhdDU6y5bXxoiUL0%2F9qTFNeslGhT%2F1tgmq2srZtpjKQpbdPGooWXiKROHQTJ6gLc2SXWzscoJeaP18P9PaSl84RbWn8jBZiuODKXdGgZY7IpLI6Q3GNUomifAGE9ACYRwN1uAXhbD4UZkpy&X-Amz-Signature=2f2a9cde1f79451b5380999531de1fab96bf1cd4a60ea9ef90179249fb7cea08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

