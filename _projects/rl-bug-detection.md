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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CO7YEK7%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T000048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIEaWye4%2Bmznml167Xp2wFe52WzLeFJh8BdYBiguvw4o6AiBmvgvuMDuYTZ2GDODbbtKW%2BCyIhiiDaIq50WpbXtJ%2FQCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcK%2BF6ytqHP%2F7Gsl9KtwDEkBIZ4IVOgMsmXWexACEwU%2BZ3%2FIUkY5A552aB0egePl3ccKXdbVpqiusOU01Hc86PJ5dpRSREIoywDq8VyJ9zYVoSYfqna0PXuvkyjxZDUeAv%2B8L84L8FW9IAyhCDGX1feuSrtl8UrQaSS%2BKNvK10K%2BP%2FVCRj%2FQLwGJNN%2BEkgmnbxBjWBsCnDTlRKD4BrqaHqie1BSdfpc0b9FNTr63fnOvw%2BpiLl2Okw5oJg4lVl%2B5YhAqvtyt7DCfej2IYGHTBAtTyWwvPrCgPrtysiI%2B3V7MYjQdkvep1AD5UdP%2FeEfQkidMAuRfahNnALq4%2BMnJiT0lBfnWCm8e0LLcvWDTuPyIAHbcFS3G2%2B%2FwDoL6WrQguxPmiy3qAa7xaHTYTzgJBBqFzVWKmrvlbOwW%2FRJuUXQk5NOF1fJuPimuhzCd61vv2wYBynURKo0Ak84kJL29PurUvOUt9j2tynmeyIre5KgsArXx8iPINffR0I5ljyOQ5UNRV%2FcbXZ854zhNcHfeLhp%2F%2FKsRjZyN%2BVQmHDaYoblL9SXt5OhEW4q%2BHK5%2Fm4syCzcgqz%2FjWk9JQYoEuU8A2MGGSYgiI7FrxwvuAG5RxVsngZPBqw6%2BH%2BH8PO6%2FsMXiaY1n%2FwGbfinxqGN8wjq3o0AY6pgGAwPr4NiAC7rKW5TZeFXghIaMgUYwGwn3J8%2F4GyphkGgspVQkkDyGdxd9tAVTr%2FxWJZefYD5zoPoKdVa01Um%2BaOO7RSzbDk%2BqNBsjYbgTivIZfThKjxqfJYEXj5hnzMEz4Qk5dp4dwJXhcb54fQLXmPUoc0Uc6eRK6%2FvQt%2FUef62YzkohgCBuJiG8qDSOQ5ZUkvDp8XqHil%2FQo6uLOeyMT8qfG9rUf&X-Amz-Signature=4ff0ddbf033ec568cf668ac11e137a21444da1c099146c9e26ead47e6d4fddc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

