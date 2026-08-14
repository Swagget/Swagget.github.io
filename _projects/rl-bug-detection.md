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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQPMPJ2%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T194004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICAdG4Pg%2FpD%2Fa0XXyMUxF6SQXO9mutf9ZyN1wJfFaHDgAiEAvmVIQjgD%2F1yIj8EgkhNN2G4gVyZ0LTnd3EkBalIvQKMq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDEmeoYwPJlRViAaISrcA9SjHYGs3zneUZc%2FIkUOB9FEokedRkOS%2BhhQpxRTcS0hkC3UyLiIvNC0oVHr0Sl%2BLH5sBkCcKvSz%2F6mXXU3obngnQtNxx9a%2FBzkuZmymnAzl4nUwO5dTOUg9DP8PkUYY2ce%2BhugoVphoPpomByMSeNs7QXBAwkAk0iEeV%2FynPgpWsMboxfRdlc4Ly7L6%2BJ3Sx%2FE5SJvgefFs00IHh4Xq40HuIOZQJ%2BDLV8XjYdhhnZqSws3pctoiuJoUdFMM9DYklWpYrWjxWxIEZo%2Fe33%2Bu6I%2FOKyhkiua4gVg1DZSsMll09oFpJceS7FoePZMfv5OC8msoUP7%2B5rs3zlXxWNX8yGVU9JikouVqnf40JTWLTosQAGD0%2Fv04melpTKS80RLAR6%2BepibvukyIpGS%2FdpsoH4QKyF0B78dwQTnT%2FfLcZD2rzRTCG%2FP%2FB3p9wH2vVRaHbz0Pauami6uJ0Aji3zOqz6qY8iDAB4e38zRjx1cVl7MFzTdYpVjHe3FaiZ1UYZtiq1UMhn%2BCNoJXtdkCIjx13QHKKFCnCVeoovqfj9UlTqepklzb63oRvvMK9uPYvgn9TLfd%2FDqgTiYNp91r5lWuK46StKbfft3DduylHc2NWImXYDTcG063ngyLA%2BiHMNm2%2FdMGOqUBzpkGTkiEd8gdcRrPCmC1CXOzVcx%2FUGZJytnLV0mcmVao11Vx6OfHtHP4uo0gXUy8x%2FvhWGzm3RkBPLQU5YM%2BYK2%2BJvgmXTi3AcLkaQklYJidC0BWyqc3owjfdW5rUeMSCYW5fBPGWeUg1cMhz5mL%2BRDo6u3pYKRX5oL4CGYioWatms4q2CvscQpsKrvumTKucELKndIX7ljfSvW6oSQ6Cg3vN13%2F&X-Amz-Signature=c4fd11f405ecd7c0ba85b8caac017717d8b3d9bb977f803ee3a6a9018abae582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

