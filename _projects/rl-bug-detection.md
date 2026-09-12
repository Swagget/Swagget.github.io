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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYTB3EKC%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T063620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAWfMnQuBhwdcsLaIs5UWlstmJV84sBfl16cIhLBKaQAIgWakz41E7zfjxqXdEB4x5NUYcR20TkxQ1T9vcVYweCtIqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHA7fFNiqc4AbuvCnCrcAxEq2WkpmLufZjiW3W%2BfhI%2F3g7tamKzJthrdNZZwPosaBscvBWs3nmSqdoU%2FEL4GEjuNSLXxQhRCh9AzmCDQ9fr4iIdfgK9Te9fIzidmIljRT59Ajih22%2BtWt3wWrXkId0qbB8h8wvHY%2BSdGQPARk8dVquZ9ahsgrbdEm8LyNsf3mleWeTkmrvFzpA9Id2pK8rmVHodoWE035P0ArzOor1PL3gj2mWsVzBx98G6XlS%2FVK5jtNyfO2WocCaC31QAv3VDISGleK%2B1v0cll2XjkXOWYl%2F%2FJynKEB1htN%2B0kb%2BIQB2lw79c07NfWLk5f8A2qIbEUmS%2BHvVDoTquVg6umxJnNEGLAPmBHlUMSKGdCrIYHA4FMF5YYLtyPWbVNj%2BD8%2F7YPh%2BbIimdOBrSLIG0M5d2MLDgWFKUko37eiQm7NIUQ%2BhBEbZYOCltEWhBwbFIBKDPAsSxIzgRqC9ANECbfTujj4DOS4WLugfG3QgjJieWjocj2rjv8Gd4LbvaBnOxTImxywprCHnq7sbciIh4WQxX0%2BnENl2m3LnnvdtuNP0tgDCeFYydd9uEJzPhc9b%2FYhD%2Bd7MXG05RFHapSO%2BP%2BMHGzln4Am029svicyAfGglMtBTmazY44SH%2B007K1MKGzk9UGOqUBulSCJz3aGEN2tyvTkBo8GBKqw8E1Tz78jIqmhZReSXDdnJCyckWPncD8NPVontvtd50nh2%2F%2Bt8tIuYhSQjdEg7C7ndHc7%2B5Exr9jlpOMKVMWFaK%2Bv4qbJAMINvHaEmSQoru4BhUBHJlbITrdxB%2BiVglP1tKYDCRU5Q8%2Fs%2F3rlCKpAt5aTyGU%2BPndBa5gaXhzrMEqMljUdkb2AA4sCscktRok%2F98v&X-Amz-Signature=7a08521cbd1e93fdf628397b5e77399b75440b1f88c2b1e6055addc69c8bd159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

