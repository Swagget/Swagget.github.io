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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3VXKUFH%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T195406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIDydcSzV%2FFtwC6HXC1H%2FLIGLiDBibuvCpFx5TcnbcmQAAiEAkWg6WZsDNZhX%2FU94iE5ERvOSdoOxtwIRJOdNBs6ky7gqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBk55QKVCg0o9MqDHCrcA278ng3lAiqQd%2BpmBfwzJtXWMATh5VL4xuuQdTdDC6BRP1q%2BOQqDLHaKvecXDJBadqDl9JB92ok55rHEwGopSGto8QR6h3hQRjZmo7eXE%2FhbSxPQEZ1YQ6K5lLtwckFBpSdkE%2F9wUPyKXP80dIypkfWeeePYKBHK5x5j9iHRkScjntzq6X5%2BUHwW%2BVOv4yLDVhUViRCyo07yXnTQU1gUmHVLveyUzrfEY%2FWvTkOexVEbBaMCpecqX1ziCdtOSPmCUnevgHewwBSwEPMKTrR8FEWMEXjKJMQ7W%2BupmayETC7s9Cm22jcijeGKK4266XDblvf9tgp942jevLgMKnvPjwz%2BDP8YvpE3DxKbxdb1uExW76b9Rsy0%2BAc9tYVxE6lSbbx553jyU5v%2FVcjaEUAcfjMRgjtEacQlBe%2B9GPVYd%2FU4qU9p5LabBbYh9Unj4sq47Rapo0FI622i6cyYvR5wcQpJb4eTr%2FOLzJgUOM3LLbEfQI51wDG6tWiJiKAtD6vxBTJ2vGmqw5Oj9NnoEbilS5i6HkOwBDUM9v56u3A0dVnrGTVhgLdnyiPXtruBBDX6aAn%2BOrXquM556Go7f%2BlW8EUTf0gyTf1EaNTwxqnYonVI1O2i91RkYGtZ4PclMKuG89MGOqUBcvho0xWx8YeDWNUOtvCwkG6Q%2FB%2FKklLVLS1Bfz1uGsBTYmlDtVEDwJ3TPpjMDgMXkTiXnRyFfKdYuSMPhYwRhEhfPEYgWc%2FHHxqkkl1O3WcnmGLUsq6nCs6gsA5LiZEtEx8P2U8upXFn1bcb8RlGkTzYCHxwte0cnBWIcg8kxcB1vfk%2FVC%2FAXR2NV0ASQIvVeOLgKf3ZpuUn%2Fqj7CcFAdUIKtzDq&X-Amz-Signature=ac614f2316ae1e378ac9b888353da930498d6216e60b7bb9eb8cc56f7ce09832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

