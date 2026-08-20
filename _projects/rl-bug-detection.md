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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT2SYVPI%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T221342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlgZJ6Scb0UwSmOts6zEYPwpPCMELcfmxGr7q3l%2B%2FWqAiArPGBbQd%2FlGBL1dh0Vi5LoFbloiZkzqBwuoKaC8DSw7SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM77PKl9gXZwYsyRm5KtwDpOo11bHqPVm1SRApfy%2FxbfprHf0TqJhoNKpLAr03HxTrV0d%2FIUxs5dSftmx3HHbxhWmSU3syGjd9eHv5Xc6rTDs2q1BqOflEI3gYL5FLoc0VIUjLjtAqZ5tc3qGDLHoiClwATTxQzfNgLqfqkUZcqINzimT%2F34UsHb992c6CgkcgY07J%2FBY%2BbiDWgkEI35RvEOiiJhAPDp4fxPo92c7PQIASLNOQlmOJfvkuykJqQxP9f9BqpoCivWY7EXfMe0YH5%2FSoDeOsqrH4JpGJA6zhLgkfxERlmYmTqQGXiyHCfTO5sodX%2F1CYEZKU%2BsyIWzvSEFytw1Dp76aBVX8WnQ1W6x%2BY%2Bf4d20RuDEtBFwcRLFt7nNcu3cEoAANHxEJK25txn3dEtg7fSYzEi47h8zIDF2LBsxy9tnKgBMIEajTE5irOEeL%2FfNRbIW9hQM60hGIYCqRsWdpy5d8%2Fz7K%2B4sxmYTVMfEjRD5KwLSVVm1I44NuWdw33oCIydE0qJuMX7Ob%2FU4NXmMzVkLn2zB0wN2O5t3CSrSSAXGQXO%2FEipcx67BHSI3%2FFiJ8caSzsJbL7NhzJF8xBw4yJIKIv6%2BEWPKzxjqY405%2Ba5rQakotFkyUQpkx%2Bv6VL8ZOuKeAzi2gwwvWd1AY6pgEmi5Yo7uVIB7hHR0bXl9mwRsG1YXwVdDZplCNg1mwrK8Arv3Ggp2lmouOQGLvDFOGj9nO4QXH190Kf5VcRfWnhKMLSkWF0C%2FRZ0mKtcauESlwH35rIN6lcDFSnm0%2BqiPYd%2FrZwTblVapk4r3FcQVdC6UkKYGx2Msrze25p%2B%2BB4Q7qFQMsejEjEP2VpBIUVax3Nn14VGvO%2BZ7oA%2Fj%2FrySseue65nvFl&X-Amz-Signature=d46472b2fe2a9a5d74a2961dcfe1b902785eba773b6f18b488304d38d3302b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

