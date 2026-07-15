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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVG2YMTI%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T234627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDKnhJHhfGojASLeB6vODryAAl9xftMoFSbaRyoS6mtkAIgY17s034aGXxchm60R6ZmAY9ork9Y1DcEU6oNO8J44xAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDFQkjg8fu2U%2BOFJryrcA4Nw9ib8sQYYX%2B4bDUc4TTG0JQtFtn6KAEtqpg74OOP55AJRCptF5UYd%2FvT8HWK50ohoGBk3kVsrSR%2FWk8IQvc%2FxTJqN81GniXs2EZf%2Bjy5ZfdpTjaFKC8SZUSqm977B1IEKZRJsjf9MduygEV0vhT%2F6ELSlaCuDQCkukeNMmzhavwdk094zh9FRZon2l4XYJ43XTRCJYpoO4L%2FLZ3f5Jouvf6wJiXIgeuRJsAYckWSL4lQMRmmQpGHh6EaRfy4YmMlJ%2BejnxwnW3QWCXNF8s7%2B2QL05nmm5WaMYbDzl2EmGxo%2Fl%2FBAV3iCAf8y%2BEcxa3DD9VSjW%2B7EpC6sk47sLR3ZQdvo9pi7ls9ZP7whT8EYY2AnLQtvxxE2RHbnlZD1%2BBmLhnsuE53M%2Buv7CzRnUkbsi10dZLdWArKFd5nkAXfC505wPnlwiG9gTbkTLvadZ%2Bd8GRs4XCegwavd6nsBsVyFIrcvZzXUGyn9J2euEkoWvzee3OLDluwax4crqYvxhjdiGhrKC8uUuWTvC%2BkxYNcAn3TpX5DLBNYybYGE3t7yRKivySaLDt401bAAnwSGxDHTa4ykG3HB4j8mP1MOKLp%2FnZpnEdvAYjDam2JKuv0MEvB4EsEstiyDfUMGFMJ%2BE4NIGOqUB5Qu3er6uZo%2FvOrveGUlKd59DkOePkfBvST7DgMEQ81%2BRS8vXXSmol1M0WzPW8qob13jsniGtTnQ0V7oxIJKZbqqpvIT%2FFJYDlq2l0c%2FFMuASlHJXgFazksmWaw4ZKYe%2FfbXNZjnVxUvv1FXetfqe6DTTHKFnynIDuykKgSTgd%2BGrSEs2ukqYuC6v%2FJ13sQQRVENbHEliF3%2Fm7QpiSi1SPXkEx4GV&X-Amz-Signature=4df2008839a58a67c2da0678c720a3c8e08c703512cc49e7f759324ae0ba753d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

