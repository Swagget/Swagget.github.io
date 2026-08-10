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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYJ37FRB%2F20260810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260810T212930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcNCAxthoBdkBbUB2MZtNph%2B2rdhNO3fG3DBiVkjZffgIgYP%2Bfe6NWzGqLfG706oTtNDcShn3tsycYDb8%2FrCjKpMAqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnmroXXPRbj3NIA4yrcAzAVdxpwIUGMjbxZtEtS9WlJqZeTk0gFM5pwPgnsp10yXIuDWaVphElpoB%2B0lFBdee5V7oOGX%2BWcXleXqAzK7yvGf7yhFV24Yl4mpRpXn6vlP5IGk6k%2F2yZjvqWwjDQ1kO8gKZ5hXuZGnnVZF5QylzgaT%2FwgOolpTuBwbo%2BaACZRTveaZ9CI9FlumYKI6%2BcPpV1fst5%2FG5jkd%2FCERM%2BQ3qXTa14RDog1Qs7lT4NW%2FMRK6qgaeJcxXfsAN3gdGnIvNmL%2BZ07nl1jN0KryYcdGsbF38%2BgFR3K8VxdPkUWEMzI7ymf0tZIobhufLutfJT2bMajTnJ6EuEaMAT98wTDb2B6aXBUdxgdpwkJqvRPK30LjUHnnBCnUKi1f6GjEs6royblzgLxdq4rqahPnOrmIezVxoJCF%2Bo0uIW5GV6ZaGRN0bHLGFiu%2Fclb1W7xh1goAoPRr7PlopWRYmv5TbHROF0nFfJ0fdFH0LLtdA2PvSExM1%2BqtJfdhQJ9VflzL%2F1D5vWrFGPfVA9z6YDmoNRSOhFA9mynL%2FqT4ipPig0FSYXlmczTJHxhR2LGsmsepLsX3DfbqSRMOcA6K1pbYiootun4PoWbkgCyeKQxVgWlaf4ZThi7HhCFYwHXvr2klML326NMGOqUB4LR10hxj8gmIrEjQsGILmlinCp5D90lz7TMA6FZAki3KqrOT9NFtItedqH0qtnfcQEyrcP3LOq3%2B9ZOUQx83qSG7p76zWoxh8vrQQQDcTiWRLDheb6n5ard7lcNagelttxXFEG5SDSILnCaI%2FShLa1Du0DaM0DuXJFlIsQdiny%2BT5hyg9xRYTXw8u0qrLtuBZCZGNfGnJQXMCmFOoBO%2FcY1V2NiO&X-Amz-Signature=f44d05364446d435059ba0da1348e9923558984eda9d156b1b0740cb47fa7173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

