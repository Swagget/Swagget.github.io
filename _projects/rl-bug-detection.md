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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXXBYVDO%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T075733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDabRlOny7aLWsLmgxWvI0Iy0fD7NXe9KjeAgLF6RzH6wIgBeKrz2lVXM2yvmIAx0CSc6PY8oPVos4AKuOU6QscsQ4qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARl%2FiRojYS9IJyg6CrcA8X8gmdMnlmSknvONm39088NnNUU45t%2F3yYX4dDbGF4jdSngxG4viVin992uDbTBSpRB7ji7mCnnn9kacG8U00EJQVWsO9zrRbmEsmkvOZNWppzwORlqlBi175s6TLMe14e9OC%2BecLS0k1IqC1fr66IMJX0wodz1ZEHrMgN0YsmtAZeqIr9SFBCOEyRNjD4Jl%2FW15vV%2BSkElz4LNnx%2FsO99fTvyfHTXIoTPyUIIv3GF2SoCNfSIyCUyhGKs9WxGvtK5VlUYRIR0eRSotAFeS6RKX2itZhJ3V6MmFpPNYGYIfckmUUfIg3vD5WAvNy42HiqBwoW1QPboerAq9G5wOEohlm%2F%2BLTPbeMnv9oQDY%2BQodk1RtzNIw8SnjRBIW%2FlasMyYA4nWnWUoN3r1aNzgR4W3CYzPjwhB3uqBp6Lh5s%2FHtYRstr10F%2Bh7zK%2F9njK7w7RD80WgeXivB8NEEfBNjDaAlRCPVvxkEJpChCdeoq%2BbpSECTK7tDJB0sLg1%2Fjmo94n%2BRbkp6EYYFkZpL7C36bQ8G%2Feii%2FH%2FOKutpl8VBsG3uU37%2F5iYwCa%2FBbnNj6s%2FWOOejv58E9Tuzf16rxcfc08qpkgOs%2BLlzXn7oadtryU0r5KKxIwTO6A%2BhVtGuMKaxttMGOqUBbA4zKRce3jbeQNqETh63rkDQblvvz6paX1PGTF%2FrtaUosS5ktjvq9vzxSa1d4uJgv4P7Sn1l0IGR71NpLsCFFUBIqpvyeHAwtEJNRTIiJy0wZQs6QA906eeoLA1GIoPt68NGnzMFuWTnnecakaBZ%2B0IWNXT201KMmo5VolN3uUsqd6%2FEFTosn1YKyUs40mr%2FKbmRedlu0c%2Fp%2Fid2wa92IJ3Oy9tV&X-Amz-Signature=72fd7b58ef75db37239fac6bbf60d7ce77942d29923bf710f9c5c727a6312774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

