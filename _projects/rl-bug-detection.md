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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHEXRTH%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T163719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDzQk7XGhCyF56BwIuqiATVlOpoC2F1PXBxojdF2DQrtgIhAPgbB0Vp5zDA6Obl9ZDHQkO5PjwOXDen0j45JdmPiFFDKv8DCAEQABoMNjM3NDIzMTgzODA1IgxxCdZ7hxkx5IboD7sq3APspdwboGH%2BLvpp5vQKGJ27cunvjGlsLVGmVR3y8Upw0YO5Iq0zxsrOMB9KudMnxrOlFEvdON4EQPd7u5qgqI882cO%2F8V0eFRpR3gnDUEqshn2p8Lq%2F7ey3yPEyjM61hqVDsEcD2HL0%2FBKRXEcTreheTBikISmoA6KQSbAKja5iIC1q29i2Jms0CNdA74%2FZ%2BZLEMBRhK%2B0UyMNz97WUXFckjp65kWF82FDkFInajlFS7n7UtSwn9eequrS1BdAXjsuWXWfuXpv6JvdjVS2pMH%2FOBXYwlGaHWU%2FvNY7NVSh8mzhVLu65yY2gnnwMGcGTaiTkD2H9FwczsPlUUGmBt2fBnOdnIIVtdEMrbqqq0KK1zzZKsMRUR8iHYXDVHFNvpMcr6%2BmklHd7IRxjNTbohoF%2F49khtYSA3kD8meyzRFG5WM2XLw0sEAb2fwZHx6iRqX7IFMh4BcMHd%2FBKYmXdntnSIB9VWJQsEkp9zgOFuWVFohjpm1mi7zPOzoFW5Y%2BJJ%2BjRhQ%2Bzevgfx6e3fFkLV%2FEUnC3YyM3be3gn0yy1rgzsvUcXLTzcTbwbeq31XhWJvWRZRPw55UJwtmY4N5qv0pKL%2FKxuguc2XWJmScVeaio%2BGVG8eEq7yWIldgLIzDCK%2BfzTBjqkAe4muDta2PHYCrilXtZo2Uf1U5aZsjH6mtbNjZaIzZiI00z5AQX3CnNjal6k2cgarUPsHRK3iHIV8oO2rCnmKaf2SLVJpTUQEPsahb6fl0z%2Ff8M8%2Fx93dUUANaAajWObzkwMx1mEdSKxKSc2mmEFLttKbSbz0run%2F0woBpIaN50Iv0ttjI4pFRYUxffNQhU3mN%2BS6eVssXwVzB4P9ZnNpO56AWUC&X-Amz-Signature=f9a5cf3924036acce137569de1ffaf9d4a7fa522e02f8861f5dba7d12d6ce323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

