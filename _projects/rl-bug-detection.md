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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNIJ6CEZ%2F20260709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260709T101606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKtsOZIXX6nBffMjdW9GRFqC83TWNe36JDJS2cXkUlLQIgREYSm1f%2BInPmJ05FFzIGrh%2Fcz7%2FFrYtImsA9UaxfavcqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtb%2B%2FN4KcOd5QxNYircA4jD8wej%2BvelzR0sBvz3qrdrO2TVBuJMwHfSN65GqdiiTX0fVIqXUqqY%2F5aw%2B9Z%2FBXU5dZvQj%2FBDoUgJJewKSRa23jw2SwhsZVCGBmmddNaiMTEQluFBbqbov3pnD2Q%2FwUqmZFVpQl19GD%2BtWxJXiZfjSFOVP8Mb9xeIm34DX3QMSSCoMdBtjGSZ00mvXfHg1DL99L3nePZ3E%2FbwH5yVS%2FpnypOjjoY%2B3AElrJRu6s1nEH3sVnIjknerpHubA4%2B9%2BZd3Lr7o1XopPxpKWOEtUk4%2B8qYVOUibE6aPeGv%2FBrDrZ%2Beh0y7zKDrcCZfp0rH%2BChYxSzh%2FjkSJgXXps0G8eIz4iVxR4V9X8KpzasG7Nka5k9acoQlhqE9ld7D%2B7xiMEbVtgWPQWrCgB2u3UJFhYc5Rb2K3zX3rMemL2Y8SyEFBbmHutRM7VrYM64ahzEgVjUpgoUm4IeTIR6HK2daW6ofPPWjEMp5IpExaAziVfc%2F%2FhP8fjjXxtE0RfH5y2UhuKQaQ4tFyBhK%2BdoNpQOO8VU5TMBm7eSa2lb%2BFDSCPkArGflJxBMp5VF2EZRDE2m1rflPxPXIQQy7Fzn9Y71bLi5xLcrSnllPDTMCEm%2FXZaAeVzjhj5z3RZZp0%2F3p9MKPTvdIGOqUBoJ7swPzJGMQyDdagT42viuGKzn%2BoahOd%2FGqs%2FQ%2FUjTXByZfB0re1la4xltpDnYzJ1E7QzMNzHugra%2B9IjEmRw60b1SOsq5oCJ%2FeNNCZFicJJjPt2GY3fuPrkrxL%2F9vjNmzvu4bJPgtpqkBSUj0a7IZ%2BUnbfm5R%2BsNcBrgmzuf3AdBj89sgDqQ8tiSH%2FE7KXUNgDzFngS6HuuB6G%2B%2Frgez46I%2FXSM&X-Amz-Signature=ced7e547e46314dfee235e6c4adff9a2908171642013db3706a5a57be385e5ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

