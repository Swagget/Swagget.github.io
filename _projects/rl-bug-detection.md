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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEIRK6LC%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T211318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDsh4auz8bRopCMKQ%2Bd1RK6MDbhFnp9ZCcm%2FwYkfCYxqAIgbTbIZguaoHTwrO9Ff04xd8qtqBsLKqSQAdmkecj15m8q%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJODA8xJYlFEnMZu1SrcA7cJlkgNieL0X39kqESZc1DVzTMq2lQvG%2B7skqJ7UrPbCB5O8gem34F5uSm21QWpRquP7guL865%2Buq73%2BTI69IhPRxQI5S6lpNU1PnT9i%2B439rPvl887gL4ZdqIzryFnP0zwDYhShXzVSZejcj2CqrYUFt2FalZ2jZhT6NtNPL46M23qrdyVoQhu1MrCvYKlKT8s7tNS188NLxCsyc0JVOU2hXIXTka2VcwbLzRO%2FGehykASZIOiJ%2BpukLDmbFAHogTMqkisozu7xEiYGxVLGA%2FiHmyDHSWaLWtkKqOvwVy4wjZwL8zYCvsOKF%2B%2BqyLwvdohWdoD%2FMLNnuBPmNRneb%2BK4CNNXJDA6CaDQBAlLzAfZlel1ZDZnBo1bfnH73Mfu9A13k0eogZd4ixDiPaj6gEFcrkDe1iY%2BF74UP%2FoKL4g41QYC%2FEQhaDGWhGN7vi3XpMWeIhrn%2Fm24NLjOoDnb2%2B%2FmkQ8gw4IpX3KflQ5%2B2ZDhzdWzkNIOP%2F63JPSZFN6sCoPo7Dw6lJgX0Lob6xRCeoFb0ZraCD24PAIO%2FO4orP22jrOdXpUhNtZMcqy%2BNnG3BBJGYF2Q4PGMhuF2%2FsLCHGdv9TWkzFY6ofxDGJ7Uiv44pXU4DwB3hgK4CCkMJ3y%2FdMGOqUBc2EgWqA5pD%2Fl%2BTkwT5OFvhhnlN7O%2FiBz6bdwBkbqBXAFMLqV67ljZv6WufhXHyKikeUseuSThgJz6vWh%2FoOel13JBI9%2Be2zDipl5X5XROL7Jwa4zjHVAx1dGHKp6OOLqSP7x7w5dqWNEMfI2LNrz1lbuBIKVAcciUBvci2N%2BPBWzpgTRfsQgE4IpD9TMfppfPoKFA1t5HERy4oXy5gdRILnMgGcK&X-Amz-Signature=f1b122c2814a666e2cf2af5c51273fb99585b590751054395272e72f3441642e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

