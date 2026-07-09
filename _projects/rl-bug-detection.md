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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IKPVAXK%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T134040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw5uNZLsWvUrtI3Lz48baoocjY%2BulPFH7HwUJailtEFgIhAIKJGKLmr%2FvTypyTrfeCxy05%2FmGQV%2FfotFAo3aMC3JcMKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX0bh2snkhhEfxs9Eq3APIw3YFGJXndNDtC%2FfGWWNQGiccoCNtJAAZ5WCsEWR8y2CUzlbqF71RF%2BEuzibU1nTOtIYVloECdSq8Y8ZVkPLwoVTvwoJNTivxUriTXnPPPeMF4KlmyRzYpqmmVSwNeeE4TTDiGrzeTCzvma5tCsgQ6OFgBTBRMySwFKG3w%2Buin2lqfVe%2F54MwIR1C9lywFmoOWxCGRTUP57EaxIxE0t1hMBFmsJanq%2FW6tc3hwOhHpIHK%2FYK%2B9yKKDCIR4QI1Zi3BS%2F6By0svGCnUOwEdj54CJAj34wndTgoxpiJH2urTo%2FEjEy9xGSb4XImXWo4BgBbCx5XAZSh2DN08cJm4aBmjKglc0BTgfsgcyv924e1HGC1PbrWSqHTtk7dHqznoyQMTnb%2FIUeFuA5Owwiob5YEJhVsJeWKJfyHo0YmYvcOzzYslPYKUVh27VEh0f1hq%2FHRR3Az6yGELbBqeZhExCZ49JK7EO8lOsgBzbK3I3jv4kBX79WeovsxKiraSvIsv4VOMU0ZxgsljOfyGHveGc1Ut%2Bz0CroVtYEQhtzmg3tj0ie%2BxRurPUEcgV4wrrHZZDQKj%2BCZiEFJT7AdPUVsjpcXVqapX4BX7vsA4uuHYzeR0Vstjb74sblYUa8x41jDGu77SBjqkAb%2BvWjyp2rQ2j3vhpJUlHIrjU4or%2FVZcllAs%2BeG4aECtbIpjs1jgv9bCx97nW8pww1%2BC4CHCeRxt8Az9ZnxFS9n6ZLF1qUnHvD9pXrCBZyw%2B3UjMPyBrat5U1R4SwVWPAaxhAcmRR1wCxxUapZiPeqs7s%2F6EMssK3X2olW8VcwnfnIgGulyiuCjXz%2BrVd1W3j0SD74kbft34gQjntNFBGPMoGOM%2F&X-Amz-Signature=c5fff1b0b01f773f208284088ee56493620eb491247fc622f1225e79dd01aa26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

