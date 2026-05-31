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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCWJW4X%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T064458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCkHlRtDG3rtlfFvLxBzTu6Qsw%2FyxxeaooxVVg6r9ipPAIhAKYfQ86yfkYS%2FpGduHcuH%2FPLQTl6wSUpeMs%2BrGNf7f%2BbKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMjokwPlaDNiZPmoMq3AP0FAp%2FOuNfEfD%2FOOho%2BHQSPFTmb1MUQJEtTZqRwyOzh8RE%2F6B8MjDW9g%2F5isrwU2HuzSVtp7UEyQQ8ZasGb2viyxqbGaVof3MMf1xDCKlxwdNqX11HRsw6V80mHetRegztdZZBX%2FrsLoNuZQq6BzK7RuJyjJVkF87HaXhdD3QYGuu74%2BhC4WeL5Sb6MLCMa8OGUJtx7Ktp6C%2FPpDLqmLJAMhGg%2FBdcVWP2sP0N3PeGE039bKJgNsPuiBG8dUSCgd9A7tV0GXHXDYwABTFkwvHqYjmrkAPF3mSbDdNiNxspIeJsCIKjde81%2BSM1iiDgr7QCflUVOTxZk2Gh2WntetlVoyMpr1Qi2NBVFdGkL22p%2BAKGFRKbgNBoMCAOenhfiOPsLMu%2BSFQKNyHCqU%2FHmp8rqHDRspJGEpM0MRnWDFBWvR%2FRNfzVqZoN9kl5Rp%2Flff%2FnaNXlr25V2q2aSyyGEs%2FkE1xdKTEx0kzEBTS6IsGGp4tOm8DY6T6jsJyGvaZQ2yAKO1GqznJBm0V3r%2FZgVUpsyxpfBI%2Bs3f90J%2FNAgl8HxeoQL%2F8VEhsX30s8b4aTH8ixy4AvEHbfx04csdZNO2%2F5z38TkdpMmexIuiOITSUE0u3T65oieF6C5WxVATDtjO%2FQBjqkAdq1UumcqmMpFjeHR3rNJR3%2FhDpSsgErWdfTtTxW9mfFIH4dEI6fI%2F16Bd1PJw5QgsuLZ%2FCvMHyPYJPmZgjypg%2FENum0YXPYnFI5hV2SOHRRFe2RQnjyYRfHpKsAQk1Fa3tpVPf2IXV7VRigSpCdTsibCW0b1DZD%2BeuWYxWyBwyksCNHmlwBfiBkSWr8M7UKVq6fmb1O6%2F24Rm7HiUvXTVQkUddW&X-Amz-Signature=987eab09680bab6c0ab91cb79bb0ca44981fd6bb875c7d8346bbaecebd6fc60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

