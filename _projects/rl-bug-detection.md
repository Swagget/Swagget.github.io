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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQ4EDXG%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T060224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Y4ekf%2Bttmt28zUtCUg78M1EVsNgiQOWG%2BCPSdNEEzQIgb%2BjYUkAiXf4SoXgtnxWabTz51IprjIuCEnZbVcK2pp8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDFjOvrtZbObnt8LggyrcA6lDhcT5DZgYUDU7gYv27hQMkvVOH2Rf18R1WOUGLSLqgh6KsT1xeh6JveOKPWWAvfYUZwLMTse0rGx09VuvKGWlsaqZfReIndgPqi0U%2BUmZZoQYHxtaf%2F7NyD%2B4FPo4XjKSqGDYFPu5SObTPytREX%2BOJOi%2BDUEZ%2BSDQ85HJYLgdag%2BdBpe9FUX%2ByI8PjGQX78oFTH3boLT%2BZds%2BUTEEBIaykZ9NfE%2FvvlrCgXx7rhWFFOeBlsriDr2IUK5NvFqae4XITgjTeq8FWdazYqTS%2FtQDOqcUFRqL4SVndmdorMV%2FlZkIOtTe2kHKX%2F%2FYIdTuTM8fNPbNpYGLUfi%2F7rXJW%2BA29%2B6cQvSPCJ6RkosDw%2BDv1aLw9Qw71LGzI6%2FKIzeNZHmqAg4nr%2F%2FqtQHC0wEULXhxlBjPeZ0Mw5BQyApzIra9X%2BGf1Eih7dBqm%2BfZ4gWqYULdlqcwc9uDCp2ld3z9zsraQPELbwyOSa7J%2B4Lx0T2oG740kJKLjy41cwbIFtTsG5kIMyYyCFj1NKHg1rMduOoGruSK89UX3s8cFfBxgVUSo98oUh1dzaPTTIVFW79QMHIY%2B%2Flt0Y7Goxj1D5O4ubeDED6LlxZdTSfNrWQFc1AB3kboZEm2sT2z%2FvMUMMbO1dMGOqUBPDzSndqnPx7aofTz6s0mIvveD1sHcJnT%2F2W1YqQAv%2FXzxIwxJ%2F7i7etbN8dEiTimYpYnuLyJf821UcCn0FdRAhstc%2BU0%2FC2%2F0G5h4REki7V5ELQbADcT7UAJd6owzI1kIxSRjTo8XJmMLV2mY%2Fh6AfCFAbaJzkS9hl7Ny1N49EwK4NXzAe%2Bt3tPkDDTI0YmL7JPxZwwnAxdD%2BllRZdXOoWQXtt0M&X-Amz-Signature=8ee9e3a0767ccb36c0d022011e8ebcc42eef2fc6a88329371cf4cbb25d3271a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

