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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TB2DDT4%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T215322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCASSwHE54fSKYraFg7MRstPNPEE34vN7BILO0bWgJ1%2FgIgNE8FQWGdPPMRzMfoNGKikR6jHaE6Qa%2BCV6CfT27V2OEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9NOFhwq80P9AgJZyrcA3RUVH7Vk43I2lS5kebbTrBkK90eucGLBt%2FMys5Cpz72AFkXUHM7OMayQPokFaIVWLiGfgohejZdjHm%2FTPPZzuMTrDM7C%2Ff43Xc47FErlESk4cLMw%2FR9Spc6vBKX%2FoJ9F9N4CW6hQ%2FT7Sn%2BmywB4N%2BZvXEwxG0JlCIUuGxEBaZQlJTsbNW0AsJnxoAHaU4ZSg%2BkpflpRYbNs8XqLAbhKdZjlWESrgXjfQ2XfFNorQd1yjga7OdPyvDw26%2BvZTmD9y1k0M5DCZoaOV39In1M49IfAnzGY8Cj36aoZI%2FI0bzj6H2Pg9f%2BTN09eBDJGW5wp4xhw5bSD7Oy9yAkU9dfnBX9x%2B35HnCZAwl8iP6udOnerGEvtiHiOgty9dl0%2BKXRFJSBkUe2McrHVW3%2FcQKHkSxrzTT5NtLId5t%2FkIUxC94BzCN8KBUsEBcFYkww1TdV4JZAIuYbuah8TCfwIBhLEo9bwOpXW1Db6HiADMuhWUgmd9A9rABH1%2BGHPGdMuV2H51Fnj991kULADRaxBG1QBelO31IczPzAcsfvxEM871EsVBnkGoZgVWdjLT2DX0q4sg9cVlbr%2FOn2CiUxx518JgEdUXsEdY0dfDA7ECBaaBKsthlsBmeNjLVI3phBbMM2IktEGOqUBPc%2BrvKkBfoq7cwGPWd%2FHFMO5QWUJM%2BFAEUlREQuOOGMC7fz%2FV8lRtR%2B0j5jc4a9O2NdaQlkQTfSxsfI9zMyTsgoEgcfIhEjAPJgwOXTWymFW8yV8roYo1rgC6fl6iGwmiivJsPWAqt1F6XRMO5Xx0NWupLbXs%2FgY6HGeps6dSCd%2BxMIWz1K4s8nOLVtdbbtG1zmKhFO8gXOl%2BrIjdnpVQaOZHrdY&X-Amz-Signature=b2fc7550af8109c666221e3723bbc32b8b9ea65618523de68e92ef58ab59f051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

