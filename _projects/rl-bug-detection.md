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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV24RENA%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T150833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCCdPsjcRLVIr7ndAe3HCYSpcU4gJGt8Aa%2FB%2BUD651eHgIhAI1MDQsPdNGl7s%2BBf3KP9k01rXLc6nry%2FAu9PsGAA2PIKv8DCBUQABoMNjM3NDIzMTgzODA1Igwx3pk07rsb1mWCrlgq3AOwen6zgSXkMBaR1GukjtI8hJpRazaolyNBNUZ5xTrbN%2BLKeHzATy1VBDEnwfzA2PO05OOULFzloGrIdB02n94cHTZl%2Fm0eakqkuFQYb3FdOap0juU4rxjLipGUtsuZGwtunVLfnXX68ICk8V3iddj8cKpAk9X45qukgDrecQp936aKq18Z65kqNeofd%2BCsjnBw9D2yEToUMaHB7Gm%2BnE1ph%2BDNOXQEkXLtmJ0XA4uvlir8i%2Bl3ifelVdGWCeUhWOb%2F1gS%2Fdpr28HlS9f6UxKBcBL5GI6X%2FZ7PyivjSqboxIjp1utCmvXm9M0EmWEVus50PkrQx%2FbtjjhC57cBC4Q%2BAqBH4VmE0051Cx86vdoFC9GNi06geiHJ4tzYvkAuMs14aDvLnUgmd00cMgMAjVQxLV0Tw%2BFeXlgjSbb8nP7R9l8TD3Zx8kAZxZ1u5e0Rn1VpNEIMSFGPvu0rfldayBSRELXKNDuzuP3w4T%2FnEPCRxv%2FmYnlzcKng4P84%2Brp15oTtMCpjUeECjsk42eu3%2FiE2%2Buji65HPa9iJ6SaBZgzdJROERBIejK1smehFs3EBcWY8fPHTqPkiG4NBJA3pcMpMooHM3fwAaky8ORs4DyBPa60HOfNO5%2B5D1a7L0%2FTCRnYHUBjqkAT62JacbILWyzTel2FxcBpjJM%2FjSrpBzur48NOLWd41sc6P3n7HKraGMnsqej6GdWuGWhKO9WdYc%2Fx1cmmP361LwuUEK6YGD68dGUXaF5apgjKYPxTS9BT4OsAS6vD%2FLuI9GU1%2FqoK5y%2FWcviiu%2FFN8tl3kpNnQMJOvQ4neL2z6eUtAbUdghJo0%2BL9bGRobA1AUPSBI7Lpwgy5At0lmKNz7Y5R5%2B&X-Amz-Signature=a0af6feb1aa2233cb524186b7ebe167b8d235707a62d86f35e6baf14a7cba5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

