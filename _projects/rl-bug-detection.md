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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HE4W3QM%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T194508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzcN%2BJBtceVm08dl8Zpb6%2FQ9YZM5PVBP7yb8%2BTshHUMCIAH1J3cf0%2FpBRI3wVAsGk2lFTBdgGGvlkjEmqDRkFkVQKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdCJMsrU3gEkHQtzYq3AM%2FRIOt79GcJET%2BSA1II0AuA8Dznh5txlDJyFKoQtJKTALVeTllqFaTPcQ8L7Ac9mZsjo2Lqm%2FdPLgq9zzhC%2BVnnFFm5Iti0K9HvVLCMJeL26frZVvQ77%2FewDxuUmowEhqt9lGdQPJowZiCGSGwB4D%2FzL4TAit3BqUgcnXmPR%2B%2BxQB8Ia3JGhBMi5qw0g%2FqUQezbqYqUY0wSQH9q1SuOuGxnGc8iM7vCWVJ1azgU1GE5M88R5dPpH5BrwM1wlPlNVN3%2BdrdV8avgra1Qw6jHnIj4DRpec%2FlxeYB1j6tyJp%2BB8ZP%2FHspZLk5zWNFunpQqVcTvwTgg3gJ4zHqQ%2BTuDvAnrPgxmHqdDbZfOP88h%2BsjKiyTr0ILC49WfsemzowdxyjSbU0MTvrKLx%2F9sFXC0Fg07oTqnl5YaVeKPZimUZ65iwsJvlj98jbbQajarM3DSc%2FWKGMGNwaCfY1kHXwJQb9y%2FWM00ghjNEYeoSkOC4li%2BqOja9gLa4o1AIun1%2FgAVFSdDYr5BGXc5JwdWajOB6eNrrt7hGMvosXUWJINPSHRVcz8kvh34FtztuQ%2B6yi4Gub96awer%2BzGM3RnXqTXZ2D%2B4sT3pa12QzAZ1rqPWqUWke1SXyu1DUV5KWk1DzDHyZbVBjqnAQTNTSSHghIW2GiepACJR0KKwVLV5ShtqKl%2BgWVnyIEtNhPy%2BXrqHvwZ%2FZFIpGBs6b9C8RPv2BcDUiKtHo%2BThhXYHBCwv7a1fNavSmLl3nP6n9Zt8UPBGsHX8aS8%2FxZ3QvRaW7iKwFSB5VKRjl%2BTf22I8rnWM9gal%2BQg4DpqEz7ebLH5nueCDTa1dCOPIMJf9i%2F97m03xiCOJRI6O%2FQ1ZHcXuT69WGjm&X-Amz-Signature=8c64869ee49270cd0665f66113904c7f3d2f20834546da86b0c3e7f61e8176d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

