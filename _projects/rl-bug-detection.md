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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHTI4OB%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHvPW2q8ZAIKPEXP8sCSGVw5jDbTiQOe5y%2FA7j1lo11QIgPGhxtwxFCKu4BpZfXKi5oUUyRWxU6FAheGvCLVcWxH0qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOkDCw3LLNShQV8pSrcAz1iP0dfFi81j853qoLGEM4GQDRmZ6tXsT3d1USdCHZ9aER8BsIFG9vPgNlcO5aq1UBHEPe1qIJLw%2F%2FiZT4b6cru2sgLVZZ8dH9aTmqxa8plg4rWPTv%2B%2FrCBmzhxT4BzPE4ZEmKz75Yh%2F7GGEzvlYAHXvUm74CpKdQ%2BreT4wFgnl3pC50LSdpFEHBNYiiHPxk4Y84gWxhg8yN4Nbsy8R2xuKVQCAPKrSdupn1j0W7IJ3bvhdUrOqzU%2B0%2B5BhGD4zYkWjK%2Fe%2BOuTB%2FDL9A1lsqnkZ7G4I24Wr5HIH%2BSQGgUmZcdaBrpmHjT2ymWpFwH5aBWkccbVbrgrSBlTw1h33nbUXCt49fZtRUqcH93AuNFVfSyZJm%2BIFiCfTVBKhT9834DNdz9Y%2B2BJZV7SmA8fkr58%2B88JYkEjujrr75vmtrUL3sAckQLJYOBBlDWEvpU6z4psnQnFdsRri4raGZfCLveev24MNSAEKasAKms8ahcXoIz2rY1MQ8T7R1wbPD5rUp7n5nLLTnjP3iQJ0PhyceCPcMgVtlwH9q4X5ioQsjTv4Vpt6HeZ4ZPRMY2XWoQWsekGYj3MRtjptCbuCQpUwWzSNL7RtFJBmF39n2LlCe%2BjpwJe2t2QVlHTeP%2BLVMOSZs9MGOqUBBkvBcpU7hImWfF7gsXPaedP2j8iM4hMf%2FRVKCe1VEdfrdAlIrgy7O3xGqQKM9je9AvymRMgxw1cT7T3p910kM8h84umR%2BihiDbtmyH%2FIMgR%2BFyKASxqKnhwHC4z9srqkU%2BcCbvWkpk%2FvGmxZf%2BT64OAS9mBMpsEGn1FCkSxt%2BHtayO4lWxjyBabf%2FNBFg%2BA9OA5hR5ffz82i9NJW0RFOJ65Twg5Y&X-Amz-Signature=fa4edc12b815d7667fd9bccfc69397c8dd51d3cde434d902575a76100cc5ede2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

