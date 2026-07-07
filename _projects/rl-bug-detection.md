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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTGCLHJ%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T121935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy5%2FTWRqWwvNUXRq70XmCIMc8dssAUcHj6VTg78kXe%2FAiAsm456d38MEBazz7zE7pEFlIUy%2Fkxbo0sEhI%2BvBQdh%2Byr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM65y6%2F2E8hoIzKXhiKtwDytSLgHeyKA5geOKoCu4kPJG2NQ4D%2BTIzcyOrCDnuyRcdwXKQz257MP7TfbvUF1xbdXCKxnTRqNviEX3jOkbMVyLF9fU5JJTwNCh7G1TrHLPyTTOvm0mHMH5sxo1%2FvmvJ5QcBB65om0qEJeYaxzY1x86LkJFBcUSZT5rwPkskO0P5ib3zpfUvfWDOLxgFnGoHvHsF%2BLOpuVxxRNzaCyzNr%2BPgt0LEZK%2Fz4s%2F14yy9%2FbxwwjwL8mdm%2F2bNi8fdZz2S2cpM%2B6tNy8WiPuCobv60smRGbt6%2BhGAUSgWJasUkAkv3cxEOQti1jjA2kyhNq4cfnOZrJi7PrOkhC7lOKPiDqeLMDEC12uoLz%2B%2Fy4%2BGlIRPOK7nYmBWSlOPJXm331JWDy1e8X14WeuGrN5D0iaF5qVNhr7CA8hukBUou97lVqnOgT4DsK1dQYNc1jYBzivYq1%2B9FgSp9EkhlCiwZ8CWUwvNxqKAH3tBmoTyqson8bXzSucgeeY4wK4N8iwED5oDwyjVwpXJje5GekD6M4hdlDC3GqJ2orWHYryQgbxnDB4i6yMSkV7QJhdoH8eCSxLtP6%2B0YmHIvsmWUGNoFfthosq5euupHyic8hAh8qSHrU3bdcW%2BUdv2p6fzHVFcw%2B7ez0gY6pgHuM%2B84n81bwGE4qJaFwQsYcXD%2Bgj7oe%2BV3jPFkDiQB5bTvmuI1eF7AZBDhtxtkWtNq%2Bvg%2FVDGcZ5ZKTM%2B0ZqJvGPBI3omf7A1yDecSDEMx6I6kxpJ1SJLQXawhxIfaqei1eQZQRXdeyg5fJlh6bucG%2B5VbFfGK3pMw7Qt8YnFdQKiG9QF%2B6FuuA8VGifRiBCFZyWScod9%2F0yfdjLWL9uEKSLtTN32E&X-Amz-Signature=1d055fd6fe64dffeb1df07f4c5f276ddd87634c031a1dc7bf3ae13bb697aac1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

