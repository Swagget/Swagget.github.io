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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3I65FNU%2F20260728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260728T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCT4FTCRMOYgceQEuC3%2BrrlRl5SsO5RXyppqvAyTW2qgIgAIxTtDJLp0mls0DfDqPepb4y7hs%2ByBWy%2BQd%2Bf%2Bsc4Vcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDFcOFP1A%2FDQs%2FzMW1SrcA8RRpv7po46viL2%2B%2F7NOzuJ0crtxnqI3aa6PhC52WbV9GAe3L%2F2BFJEiOg2quRFnBqeJrPOT41oIvIgVWox2PRKv%2Fnd%2B4enoMhxJ%2B4fJbSypDUDKprKiRK36zT2MALLZlWsf%2BtOO5KIZ9TmXqHvxu3%2FWXKaZ%2BNps2Jz9xXESzbIkCLIcMhc6D6l7bPWoTYPvIl7wXf6e2TE53e1VnwA%2BY7yan2OuD6YyHiW3IpVjWSWPnjgV317JBx9RqsxR6PW6ZThMmUqGAmP2%2BZDf1ogY3AFSqwFqLppZp1OHkwF4NXbViaOVbiHNDqH4SDt%2BJR2uBe05W7%2FeyRtUb8HsqFZ1Umu%2BWtWKhPdBmfd3C8PFMWdt10rNVetfwjwIdHKHh3m27672ZVyxSqQMqhUNGwh2jClpYqY2Nnko1q2ufma%2F%2FMvggvPNelxk2ODVedJR9n1UHB%2ByIdNvr9htGQa64ChxCu%2BWi7z05Rk1R83Q661KAJ37Gk0nrDa3E4bJ5r0fUT2t34TODfZpzjT1kZ4dw8SkD6akxohOJ9pLQRG1MoGha33HERG53fWlHMr5KtfxtnweC2LX7q5PE8eQygl94jqNc2j6KL%2BeQxbBVevVa3zlDQBubRTDH0qhj1asSXJZMI3yotMGOqUBm97A%2BTNbzbS9J5fNYP5F%2BiSm7lbicdxSzJBJOFtrISTnr7Zqa%2FlMdtoYFxqMLUqgFJojSmKizyG8I46TrhzMTvH35HtlMXcxYYme81cRDA9aMFWWY0OhdfsPcep0c0AgP9kjo2OUhf8Ej60GvgO86v%2Fj27Er1XvCCDxUN0CYAtjzVA5URnlU9Lzn%2Fhpx7pWbpnW3tbcZvHaRURc5BgYRKSySmnyj&X-Amz-Signature=b3859bdce3c1b996e9299d8057afe957bdc4c698a7fb791fa0d4e985bda0241e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

