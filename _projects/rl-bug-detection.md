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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4LUATL%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T061610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQC9r9ZVfsmceVCXmGGlxv%2FKZnis481R6aCxH9tji7P4hQIgV1GuOmO65upr3sQkRXvE3NIYMQ79SdH3fZnCv94tb5oq%2FwMIDxAAGgw2Mzc0MjMxODM4MDUiDNcRL2zzANnqT97C0SrcA%2BK5MnHljUTyMFGZGmjxIlOH3EII%2BNNk%2B5e6BHr%2BMQxFUXKHKPRf2AmSb8WRk51av%2Fy6XM51ZO5fMuaQY7dKEGG%2BLWyOgWF1r4ua2YQR%2FQbbju16dEXxmuV%2Btdxpeu7NM32fFPXuAuBksU3w%2BCbUHskr2tajiH1a7Tp6XzeikF3%2B9NqmnSCgebL%2FGfbjvBmjZppqXpUFnpjbm1ugTpWPgwh2IrewxNrZsfRfw8FvpD79SzqJTbWIrvP2LnqrejLcGtmTX5YTq%2FoA17ekRrS3QELprwS%2F5vPUtNcnZCmZahS%2BNhXtd6YiAfH4oWaZg1xE1%2BfYkq3kEXgvuymHqrlecJVuY8yvKWTCKurw%2Ff31RQOpKf6Qil0RdEpCSAMTWJ0vcA%2BPougscvqf5r5dpwqqPc0bM8BlkM0x8vBboAFG1GbQz9NYNVj83aOc4qX2%2FgVoXMwDxP1EsmCOQiBlvnzHXZHumCx2O6Pesm316R7ZxXoL0aLa4lWTiVLcfVJHLZuMZqidcMRh9yeKbTVSj4P52WC1NDH6WXufORhbKkodePFG2p%2FMzifoGI1jh5yLLWRzveRDqGxsELvmNOp7x3iOYqsTqctKmS1rOEzWMrNltqix%2BhgMQjpMotkBcIXHMO%2F%2B%2F9MGOqUBicx9nzcJpLVvHHp1bKYqSD62vKJc29agCru9G4KPrcSGWADenYPn6qlMewNis9ytxfLTowGoQ3RCKU7%2FxX4C%2FJ4BbnO%2BCMhxy24kfYrEBGd%2FpBfHPu0AjvhcCGr2paPMRfiXzuAjTM%2BkvXuHRL9B%2Fp6GzpyU%2FM5%2Byw%2BGEm71EfvGmfnoR4WeNxAlGppkkLde%2FLlJTqToZek1L%2BNCVOBJhu7ELr3%2B&X-Amz-Signature=94bc0ecf608d5f7f483fb60fc4e70a7996e7b37832040f68be94bba8f41c8beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

