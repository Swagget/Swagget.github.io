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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQD3RNWI%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T062030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjjOUf2QoO0RzZha57eN2gvzIRUEiJRCmewupYJwITeAiBM91EAhu9PRbDG88ee29I9cEn2U0XZXnNxDNDp5nt0dSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMcHe2c3Jx8DTPC4dHKtwDY7HQWdFcnh40ESL1qxHtt8iYA3ux4AXoh9GFyBVYP1i5eIaNgVb3QCnUpuNAuwrn6%2Ftaxglp%2FHRz%2BUg5y4%2BMEAfv5Us0BN%2FJOfhIChv%2FW5K05leGC2NsC7FN%2FDQGDeRo%2Fpxs37THqGgodvzwJEc6dF60%2B6HQFjR6t84QnMbbPx3xsGTUSv8RvihGjqa8Hjj4Z1gB3Nzc3LnLGL5YFz7HnFQcAijvH7z3Sh8rBEFqp85Eo45lc%2FGo4NHbQ86voXnfWdAotWNw2Bp7IvLjEAqXIcxZDbuiSH3Gz6eTVgKMeuuBgQgBqgzTkymzPZCVrR%2BAEIOEif%2F9m1ckagWUK0Mxd4%2FS5YHXUAGrq8HgQ%2FHITA0LUgA3Fzm9CVr2PkYDM8efLAgG0r0CSigo9ANfW113iA9d6V%2FjBI%2Ft2VgikVaE1at7fdYiPPzL1qkyAwNyrPxjxrFvsX2uBI2LxQxH%2B%2FgohMVocR9F31St1mBirfFEKyPV2%2FgQ8ivcteWGHD8XPKBCYbyPjnynwPbFZWoU8rVUH0jhv1sXgLy3JxCrETfOIlHsWdCrkWXqLOOI931HAVlKuEE5%2BNg3Nn%2FIT4qQD9rP9c9%2B1lhSRU2LjXk9dEGVrgwyh6MY0OLnh3xgR8Uwk7OP1AY6pgE2iEtCtPsmEqIsnvWi4i5nYgntySdHgA22%2FEr%2BjnXI0xkBgXpHkrybOwpQSU%2FWDdeH2D15sXSxFA%2F4pmYb%2FG%2B6zaS0qi%2Fow8kh3Kv8dCyEfnr7QRZaWEFNrRUC5xabvecQFhvGpOJtva5Ii%2F1y6KDcz1wVhYXh24JCi%2F2yNMvl47cRm6k49AVhHhwK%2BMh0MGqapZU0oNdscD6PnQ9xzsBRJhzt6iOr&X-Amz-Signature=8ea6500008922c6f40527c50ad95976ec47961991b8d9ce7b8844eecd0becba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

