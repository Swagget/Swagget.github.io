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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YROQAVAV%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T021013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCtzBq6DE3fsLe00p4tOgImdVKNGZK9%2B1x0eIv%2Bb2e1bQIhAKg0MYDkhbTEeOCBIrT89r5VZnGVdU3Z6hprC1Y6h9GYKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAcOaToVSKb0oitqEq3APE4URjxB5tsz5h5RfQUe4gzgHaKlw0T6ly0Z%2FM3KOyae1fuhgsKJfviZIxCmWQ3Wio9lj4Q%2F8tekY6DQ5WDCNjs5mIatxXBwRRke1GsDgiU7FjJFH2%2B62OHGWLWC422jdY4drKxG3GCsX2zBRoEgUe6i5oOXkEo1CjNC3iRr%2FFSPmN0%2BM1hBlk9SkuUPwJaj1NTq6t8Upu5fSREgA2vLw3Fx3ZCyAClCEMfDK%2B3vMFGxw8Mk7iHkkCZutNpstFPdc8y%2FDRMHTXPSJgFlOhY%2BxXQRY3%2BSDd659xvnFdAVfuRlggUB0mpU1A1QsrB%2FcSZS%2FHpSO4E2b4vlTZbXHgiBykEbCkWnGEKfMyngu3zZbQM8OcJzD1FpE7oYuQE5XCq7%2BBQISMYihqpRbrpl7OWmT2n8LJ%2BzvaYaArt%2FkLuae7V1VDm6TBpVEwJRP%2FISoNI2ovbMvkQWqVCL4vFftyd1qelA6l2uSVVyWCRok8LvpODHB0QowtnsMRo7IXuny85MguiEebEsE5%2B70KbTbtsi62fRhrlFaRLVdZ6OFDV3j2FRsgtv1OXZvoBBA0Rrxcs8dW1%2BtGE24aBYuznMR8MZi5jbGP2lvLOAqkfdnTwQWs9hkNV2rgesXVQ7LJazDC0bPUBjqkASCgyrDz8QIr9Q%2BHgDV%2BkDkYba4mIpAvL98LZLpG8ARU6N0J%2FmeaGJthOk%2BPFPSD%2FNz2PFHgmhb5g15OrbbLBZdMO8NWShJ52rGMyMIyE2vi0WRjXfe3s1%2FvJt7CSZ4uuJE4LPhhmoJ%2FjODWlMwM2irFRTaO4pQWjoA6UGrpksVF6dqKBMQH%2Fw0arNhEURd3RauLhSPDAVu5K9jLk%2BShPGhz6UDX&X-Amz-Signature=ff805b0eee4f33bdb370ebdb547594874b4a42e2e96e5760fadf3617e0820809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

