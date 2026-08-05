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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3RPGFL%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T220255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE%2BGwKYWJWeLU5HHTC2QACG8YnGCZUofry6nCBfoYuyXAiB2CMcos0R8owotjQ2DJfxx2A4dkTmVJuAyf%2B%2BF5Y%2BRFSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMrYp6LUnUOLiti3fsKtwDR1J0NsBgStfDS5LHC4RvoHW6tmWDKt8KBBV%2F0Czi9w3Bd760YexCmwgBRquiRi36vzrABJtzxQVhl8lSK02KsR32u5HBWtvHVWmTG92pzOjnot8jhr8fMq4BiSezWNydLgVlUz7oUHnWhSFRRfznrqw6zh2%2BWTOVai1eKm71nAv%2FEc1R4ieNtbgdRdOft0mezP%2FVacFQNEsXESFRHMgL7Ik%2FR9ZeAn5PNXTgJUhQUAlWbribxUiUuSM7DpJlnkQ0LbKj7BuioD4C2RIYKzHkeicT3bSrQTF9s5U5oO6ohoo2jRoUc4kFCeb4jraEkwEM33ts7UXbrP%2BtEkpgJaMYyALjlzBMuoOXyWQHQQHryRyFL5nmTdTzWcV2pYI9%2FFFuGW7UDwfva6YlmDGprvHSbWG%2FxlQek%2FJcglseKXwD2k5SXvM80M3vLhw56cRYlcegg9KWp07qvMgfsRTRmLozLQtkqW9mNxmB3gMLTpTjmSQDZSpcXsmTdsPLIMBUULGTHgPaTzq%2Bbl711sUZfNTrcKbi6%2B9hRj6e0EvjdSjaD6esoHC6OfjAfXHpO4ILV2JCpTs2fsmYf8o1M9M%2FYGeO5G4X%2FaQnXInLIwO0%2F8SWtdvUruiAUflviN4R9U4w89LO0wY6pgFdG%2BDSkpi0J7L6w3zQ6qceS6meKTU1zczXMnlxrnF2ztT0ZpZYVUUYJWwzUs9IFbuNYkWH2S1Q8kkk2V5fdHMdC8eucOo7b5q7KTRSy%2F7GvwPUPHNNhwtCstr3e1Mi93EWC25aZtLPJxeBzae58dDJsbTSQeK51n%2BCdu%2FRsc%2BDM%2F7zFSI5S2lkEqjYwhXXYdzgWl321aVWDwKyo0MzXn%2Fain9%2FqxoP&X-Amz-Signature=51289980c348b6891af1be1262d119b4a988a3a0b40b954d0b6761678087f3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

