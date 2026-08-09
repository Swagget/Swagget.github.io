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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UIZ4TCH%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T025440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7WmzdputVcG%2BvycE%2BGYPH9BRBu2Aj%2FXae%2Bi6tXYZlNAiAZzxjtPMKv1c7ivr3AvvrJDHkT16JjEeXf%2BfkkWq0Yair%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMThqAJ54LXxmvGkfAKtwDfKELgSNuIKriK%2B9taM0kzTXkoMzrw02Hpto3eb0oKKbXYv%2BAlHkNRt1HVmrtEYbsLwecLEeA2FDnichzQB1%2Fuf1rbSurI5m6urcyarL3FS79XKAcBMy3oyHteVpkWGbVRR1SXshKiTnZO7l2G6L%2B1p%2Bh88riasGSntgs3COWUlSVAsvfas8mugWuHWcShzKuJiFRdeUf5FEE1iuPjpGkFCWv%2BqS0cTnzR7jOZLAuupOc4K3UC11kyzXQl8q%2F2LlW4713BeGO773ZZqczHX7X4yFORfdLUGaJC1BiauVI9GGWNpbsSgmCJvSClhHS6IhD22xoXQqUyc%2BpcfKWlfMzi5wFp%2F2kqjr7zVQg48A2l8Z%2Bcd5ZBRpPs8TafeSd1MtsUbCWMF5HJYHTtl92GVyh68B3MAHw5kIoy4oSrLxMDpyWJJDQdJ3KW96RThiDbaq95oDKf9Tr517tSg33cF661HHEoKyIIqnkMRBWq5PZhsH8YIjA7Qzq21V2qT2oDS1YgNU2S7fxx%2BaIPmJ4GaTwIEAkyIh5fpFBpGnd5IjUwEdEvLr78Vv3YD1Nkojki%2BBvuKX7zZgS%2BI%2BV37HlgjQ77CAhidII%2BI%2BiMANZICEVh3HDKTF0PIseKxy49mMwotXe0wY6pgHPx2dDJ4d9PQpZ1MqBzPrvlt9SxVZVw0O5UAfh%2B5BmI1YsTjB1B1VDTnk0Y5MaOEMMMLYaytEiqIc16%2Fv2yGMPlKZ6kIByAuYDMIXmnMFpwTVT8mfADaxAJha6ZwLVOcPI1jXRH6FYZjIhlYfpJZcgjcqTqrjwcjEX9sLJwUji6jfistBD%2BrtyExrym9w%2F%2FEoNBcLocmeP2NgA5uyD2EtAPD%2FtrDLN&X-Amz-Signature=e8400c032e12d0ba93d3b12fa0f23481b829a60f6df1bc538c616df0b14efa09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

