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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J5YS4SU%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T175945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV3tZ3fbtDVOsShIWJbWAIMhQOPE80mCEPNjYVUUvlFAIhANg0nWun0vEqF42I6IgVyHTYUdWmf2VDcuQzTIO%2Bl7raKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9FxmMC7Qq21RmzFQq3AMBfFpXg8G9sxkQZvkTIEBxPxgcg%2BttxjBjyMOu%2FQx3zUS9fzelS23t2nnUt0Jc%2BEnxMufuLgoMegctfLRTETQJ%2FfuPwCcph0gxZ4sWOChCqlFzL%2BmE7ImHVMi3O4To0ES3AX798eckXYp5CmwOnUfKk%2F45NC%2B9TQil7uIttDb0uzAP9dTJ7UoEjXPP544KWeOPGyODdOW6ZsSAQqamO4H439Y8puyS0OKM%2ByTTfGFbTLHPcEgtz9Chs4JzRRsfV10IMIQRy1uBeDRqcXX%2BV%2B0VkBOPvnuZt3xesWRkkm75Uz40r7NS%2BtvXfAYNPF%2BQOSviqy6v4NeX5WUFRL%2FH%2FBP%2B7fUEkqg9zZfJIE958zmhJkD1%2BQm460ZW%2BzQRgipFPn0rzaQI3B4nBnRERXjhdU7LRRJo050AjipLJPfgxPhrju2cvEFLTtnJlf2otET6DK3I4aWqipt7nPYWbamHVTbBDw%2BQADyeILwg8ilM5%2FyQ1PA60n3tpcfZfI2bd0f%2F5SiU6KtdvIvsu7Aq5a%2BP5VqBaWF73URf8h%2BAOMxpg%2BHeTYTgdwvphi12XgGBkXCl4JPVVLFJQFzr1FEXUGzKuz66wykQ1Zok1dk3dp%2BuamZUSf702OdSHWiOiFzkpzCZp5HRBjqkAdQdJqfjdtHyUhUgLt9MEiFfestRbotwcPtQqavzWS8j8RhtMrTcP8xf3X3NZlq24OmCv0dPt%2FuyGtCseLccxuEztT0s3nQCFPArqoH5cbtTXo5ks8gx%2BZ6leQAUki9YbaU8qEn7bWoautra1X9QPN3qbga%2FfnecagkAxTzB8R%2Fntp%2BlHMJJK5lfWP7DImVCUM%2BVfRKzV%2BknYKOvxaJjFcCrdjjl&X-Amz-Signature=2ae6ff2fe1b935b4c6432d7bef2fffb8a9b520d67daf20d311f5742d026cefbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

