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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVUE52D%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T225135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGoTMak%2FGlmAkElfcxjww9gRE1u%2FUpVhRZAbmyjekcAGAiEAtyqhEQKxc9ZlzAaMIGRHmzMjtS4sONDCTLe175uCF6kq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAZIK2RQZnIxYBOHmCrcA8S6SoVdcEsxt2Ckxunpn%2BuiCKWxSETxpIf2ziPLnK0ZjVnzAFdA%2F2Hx9Q6Rht7ME3VbvR4%2Bn6sATU1wuDasp%2BGxD5gcKHRceME2Tim1dC3e6uP%2BuZbi6KG5sa5lGPGMbkKDNrgbrwfULb21rdtYi2U3QDU4z4e9Bu8ios03iVhM%2BBNBALsOyvm79Dowvw6csKJBfdO9FQpHABMl4idxXJx05%2FTHpu0rntWJsL6jGLALcoTnS0AqVEafSFTCugVC0qpyGoVf5cTGGxIx3q3pEntZcWyvWR9%2BT9rEErUlRveIEx%2BVLR6XBaM5qY9t2kGGVLyuMlURoTQIRhIeyEdi55cQMYP7thXNoHEtqH5tLCL8MAtg0NP7evmp1XqkYDfi2POylMWzBlypEo8K61DOmiEEqy04POVWTFk%2FlPq%2FRVlfP1CAhO6eojPE6zLMeIgCCBeQ9nFcvYXdxJYV0M5ymmonPk6JhJHTQbBcQJ12K5AL2mH4nOxe9VFI3TrIwCYq3fg079JHt34lMM8%2B6aL0s0HQHbxvB5K5h%2FXuLPb%2BwFRKxO9Uc8mJlQwb0DA57sDZRXOyjKhVFRTq9NyIepQkoXifKYHKemrmncqeGls43n%2B1VKwKMkcgF%2FPO7PtjMKPjoNIGOqUBnmEt6ZIovFqEpsmpVvxpZLOtQQ1v%2BytF%2F07Yr3i59VtvrGiF3JIYhfrN2dNkSYOkpeHE3qYcSwGi7eo0eMASPKUXz7kNY1nY0YojokA9359lVdcXEXtdj53GVMfl149ze8Wz9E2%2Bts07ddy6SmPTKNy0kXQRHmey8NHpdxHFdJwmtFucdBeuhrbgEOv6ir%2Fqmvf6UllsV661nsx8t3aaLBkEUtcQ&X-Amz-Signature=00f7438fd1d7040b30cf76d84709f3c46815b0935126cc3af5d2498081a64609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

