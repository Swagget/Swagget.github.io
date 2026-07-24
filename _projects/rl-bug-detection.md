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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7PB3P7%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDts7A7za%2FYUMIfxu3UA1jo9LRKlJYtig%2FvcWPqsbW2vAiEAuDSEVvx12vPPtYU1WPySRnnFgn8ZoyhV9KMPaXrDp5Iq%2FwMICxAAGgw2Mzc0MjMxODM4MDUiDMszM97GLOLViTmCDSrcA6EN63WVONlV7U9ySTc6sR%2FXuv5k1ZA74%2FZJvRbmnXBbrZscsGgd2XtJ%2F%2F%2FTnrQSpmUeZo4YXVxUsQyrqA12TUrMsREtZWPc0UwINyzXeb0OMKyOGxR6UBwOGHOV2tfdBgE7pcVXRmyy%2B03v2GsQkMmEEDVFs3YVmS%2BxwCk9nWSDmoY%2BOaQeoHnsLqEBn%2Bk8vqMiIheohQF%2FeRl4Fs2CBlVzC5RIOH%2FYayLJu6330PFEi4bRFoXYIQ0yfVoaRDfbDcD%2BemvZIKazN8FX%2BPTyoMeJ%2BMQesLDZvHS6aTsyUtd7IrqjU64amYRav1EDFKGzphSvkYIP7L1fb8QbpcRwFfwSjZ8m4zlLv404Hk1ysu5n7UMChjIB97ccafTZbLHrCq4EGNlGa6ZxlpoQ0YouAABZA7wWbC7Pxyzx2bQgj%2BMfuheibStlxtm%2FLko87J4uybTT1o%2BTwS20iPIVhihxovpXTDoEZqFm%2F3OPty97jH65LFdb2FpxymmT57xmIZPw170eBGcXgHDU2yZ%2FaOassZcsAnh7KP1XPDmar2Ju9eqw6W4n4jy53I56XqgAi7cwJ4YDqegJkoL5cYOch8a1hxxgCbqxgIb5lPaSrYKnMmf6%2BnHVRKSWwANcfwvlMPPZjtMGOqUBY3qa08TwaFhYk4UGGA1EqgoH0gn4geX7PSC%2BnPOO9OgTwGqaj2onDkKBHWUUren5PWNlVLZkG4sv%2Be0P1IXnMoNEyiRz7EQKVmcv0BCwOylNYSOkLrGaur35SeFriPrsepao%2Fvkn5OghvbXEMogTgfN9SjgmaMjPWUbbdnbD6qGAQpPAv3b%2BkxjYdw5QvG%2F9Er2fo7aPqfItyLz2cH3Kiul1pHtl&X-Amz-Signature=cbd0cbaf481818426284ba569a8149115a54551b9f5f718841d1cf3980448fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

