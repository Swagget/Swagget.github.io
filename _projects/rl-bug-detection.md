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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6VPGU7%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAwobjm6Oc%2FOfqIquTtmPUkBkCIdpHknfnU6MD5z2KgIgSJ0AB%2FNCktAQK6tfbE4xBn5xnqE%2BCVPEVlY0%2FCxNhCgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCPEYJSwXl66jXfqtSrcA8X8S60W1eTXDGKFI3e21bDuN6Rk6UwMeH70GzoMHab7%2BgT7SybQ69hxIxiq3D%2FcEJIg0LS9VzAwpPJWZMBJvkjIGhSpd%2BLGaz4eykUqKCOVsmTeOnI9YTVWqMSlevB9iInsEOMi9u%2Bz49%2Frh838lw2B13KIo3dgGCI952Ke1gGPR7Kf9%2Bxr5tSWja7Po1RU%2FqDeFg2z%2B79wDEDkw1gY4%2Fg5ecM81jEd2%2FMLe3cbmW8GM9uA78hIx2dWS5%2FwYMZLlMzVXXHbUH%2FIQfbGiPelAwK1b2xX8HMgDRyQPunoMUGvQBxqkU%2F6u2D8rUT4e6XtM4A1TFRnM1JFcicop1TXxKPb8IbDqCcFllojrd7In3HLgTndrVx0L6EjrfSomI2hi08KSkO1rJRfYgHdDvBykF101HruFjq6%2BJOHXtVBMcUnwfgRrWU%2BBie83UcVyhFm1WcDajE2PmgkaOMIU0sf%2FhRTgy1w8Rg8I8LAETTxehglxMDZa8f5mUWLF985%2FqFRvaIuhUqfi1Gsmwbe4I0D%2FEfXFGrsB0ArHphreW53vlvxvHy%2FLZx9r19q9KoJEs5dmRnTguei0PpkLnYzCyQdq2cenn1NmgyEupwVNZYrvlYUtss%2Bar9bRurIE%2FVmMOqhw9IGOqUBf19%2Fv4oz3PsiQZCVYewBRsiN7%2F1AtbDsaWKAePnzfNHeVpqeV7Lwx76B0SIW3njzM9V7tqlcNLqi4kBznU7MZNMcexGQs0C1uJ%2Fp8Z2nspG3zgGU1pocoh223sqgpOspnqLpxNk6gT4jC8Lk%2BRYJQDLbzn01XHEGullwgjJsjuHtlKu4o0TTgnyT7U%2FnXKP7R19bwWnBmoKkCKrvffYUXmdK3Tm3&X-Amz-Signature=23a7541b6d656408ab5dee33e01b089e2013b2b62ab24e190a53520863ceb987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

