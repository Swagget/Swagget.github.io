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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT4HZLJ7%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1CceaCwu8CmGowfGoey%2BgZGa3y1lB04MqU20UBWMggIhAIIDqqAFcFkDfiK5oqMS6nPjHfCRuvjtrnEBvvnDgB1HKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwquPdKhHvFabMy9qwq3APai%2FFtMYVs1BnNbaxSn2DO3wsHWU%2FSryWpLw8zh5Gr5XDdWPmRIa8dETFx16bHyU1%2BxXBv%2FgnMddiAFmEjiF%2Bz6Sw%2BNOWC6A0%2BqGM5xtu%2BOvAHZbFa5o6sABHUyVQe%2By9jGtRUkpPLI1LmvbpSIM3VqlD%2BgtF7N2Mu9F8u5%2FurjYr1FwApjYtnp5BywFtL90TlQDrjd0b%2Fl8FV%2B0cnei7uPBBgKYPuMnFuLNXchvRS9I%2B1kS7DuFy6bRzWteOZy%2BIOuD6JgOpo%2Bew1%2Fp2jqVnXpq30YIgKqFpW4euazuYDsaxvs1bDzo%2FpeljX3TNzM5bBSH7St5S4jde7KJAMRJfzcuKYrIDZ%2BFhot18MnQfrton45zEr2weTfZ3B3xKaSnRYijSy08ber%2F%2F8YZfEQPJbitqVVWlkGkp2Xg0MWDeBzXTfYaeaBEa9A6Q3Uu8P6vNvvu92jeNGw%2B9SDTy5A%2BFv%2FCH2a3lgVnlyKFB2%2F6EL8Bc%2FMu8pv4SxB1PoFrhskElkS9AFvzgXmUU2eo3kJD5LE7j766RnWsBOXxSe6VhZjAMzYYTdTFTqwxmZePQ6oulXxRtx9YwN8qetd4KVJ3OtUNleOZt4ZqVxAS7YfAUT75SOJd25vgcU89HdPjC686bUBjqkAXfYyfmGDDVKF6K0c7lLUojil%2BAX1TGe2%2FXeqdAqNE9BknfrAKWWIdWgNfPpjon7N2eSfHgBOa%2B2tHztFRftvhJfSDEE6Sm4cnnnxWwd%2BERCQEBA3u5FFdC9xVIcAaf4jfiL0EhPNPEPdM7tzeK3GULDGfyeBn2emB6JMQNNm34J5U28Rt%2B7bBF9fp8Yf0G9JvejhC0soFoDtCapKd5uTcMhJzp6&X-Amz-Signature=d142b53595aac1754801604193641e5f0b4e7323f2d457afa473918e06a246a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

