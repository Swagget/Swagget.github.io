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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJMR65O%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T173827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChxKZ%2B6SXPO0HfjKSmAA2KnRv9eXCm9UrcXl3ZaXSkOwIgffXLUrpBZGXeuQPq8htnclUKM3TfPMYCkJCerXuNFucqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzlQfN6GzXE0mtuQyrcA%2F2vvQJFCZZtBhkwdIRoZz9Oiem8jmYZXNjP5gpU0xE1dTccwGW%2BQYBvQGcITxbCpN86tsyY536oDpDGLR2MIqKWRa1yU2wseeCJvMU5S54f3VJByEsBLuEp6SuYfaXMWMij6tu8mF0%2By8EHO0VCgwTNE6zmmY2AymxAY3pHGyjzgyb6fKBL7vNc8cIZo1b3REbhOX0%2F0NV%2FQ7AenkKtxRfpESx8Y%2BoZqOt%2FJB6R0Uvi4h%2FLxDcOJ7UjwVKZNU9C5pjOfqL%2FU0AHLHZV0zYx%2FGxNz1bDIIKHiWJzxSNepD1wxC6zJ1o75eQSOaOhfbVjh%2BM%2BWQn6lGMj553qAuJpJ3noZn0jNmtcDdjkYAqAu1or5aXVSLqimS3eooXl%2BqX0KSP8cjBByK6zu1v91cQ%2BlV1N9WhMilvbbIHWdlcZETeypigVji9R0vkBaYF1991a25oZoeO%2FWFn4VQ4CedrziG8DYm8GYWqUwNfTuPJrVJKz1CWuCE40DlmUkUsXzVq5VzPqYWKENiIhLEYwZEzFpIs%2B27UYRTa6ozcPQjXP7IxTumvCJD3%2Bapzbbl5EsdqBDCdpNAi8ZIRuMMtCFmtxzrbbjlgLHZdecuUFd%2Bqwzky0DBezuhtciJmBPdXWMM%2B8xNIGOqUB5uwZsLbafN%2F06%2BEAIwPzLTIA2e42l5GRPeB%2BIKxVjUBhQuT60RXDPUO%2Bkd0fpc6j6%2B2HFHWj2MToIi%2BQ6gyeIj8UFVY7Kb46Z7w86%2BA9o4awSUpRlrCJDs6LYQCfiqzKlTL8odoHYlPgcj%2BO%2FjXVoWHCEbSWYvsMXuJ31F1R0To%2FnstTR0OV4qMnXmMq7mJZvRGh1yqrTwXRVq%2BCNcTaBlfJdB6s&X-Amz-Signature=feb0f914531ecfc775126c344e9215673289b3a8ae3ca3c616b5701fcd4ad594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

