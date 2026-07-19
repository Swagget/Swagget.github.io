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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDPICKYR%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T234343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHmaNUaMU%2B1mm2%2B11gGOKTO2Q3Su2R3tm4JDGvo%2BPLfCAiAHZo%2FmtF85LQOcmzqWORh2pzblXTtP4k9sMhdOhwJXbCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQH1XYvcx%2F2HjwthHKtwDWhw6TEP7DCn1mosMmS2rGyvRimpRaSxPyh5RvO7pXlFy9sPACdUIx0iDMJHkOrGJHqdDSEBxQ5Hi%2FmYEzGQunJyEcnywr6AU0d6AEzrewlWFCiFIk7ULgeV3fwst1bLXSfVZki7t3eAyM0icdvF28CTVYJLKz2dAclsspX9B634a05c6l4pfaqfEgqu%2BjeSPbjDEACK%2F7U3KJ5bBjaRzOD3ZCDcYPRE0FKiCJn3xMZHHFjPhDoJqRL%2Fd99qch3JccJ6SmcmfGyyDfRjzWgU1zcI8Ghmmokk%2BH%2F%2Bc7CUcA5SM8xhd035mSr1S%2B54U6UURKGu8IwmFO4mAcFUfTJh8x70V4pWRwwB7RZplPvvKvqkZz6X%2BSolYP6t9U9o7xZXbtQhHGcd3P%2BLodvaR593yxbHtujcdYgdVllaeBn6rxN1Ts%2FZGtUeHeguxV4pGAewsvMj%2BsXm1QZ17R9Vf4rVVWz9GLcPhjVNQ1phoLVB0wDjd3e%2Bvr7g8dABUu8rDOYURcV%2Bf2INTpKkJq3iE1XtBrDVK91QYBPa8zRRTQ%2FhzcJ%2Bb84CbvQqqWlKc4k7cGjLo%2BnXl1UVAkHsEzwwVqMw9TBOWONddrpiAJM0KbR4zkqdpLkKYlvhZXN9MKcEw3K710gY6pgEk1Dd84UWoQhdK9BFhePQRHFkHqO5Ilu1tjdbcUtXr0xn3u8tZwXQjI8pH%2FItjbd3oxkMQEbZQ%2FxCNfu%2FFfoWcn5DhNIXoAYZrRFCRSDF%2BUM7R3NpnwqdOl7M6JnbpMayKJDrHu7hr1Im9BNQzT964BCewjYivZBLEciG7ze8wdEsDnLwRyWyTAK4BXa9U4N9Wou88VwDp5iqw5tnuVXMpnuQ%2BMVHO&X-Amz-Signature=3735442212c32373508365f3e023175e4ef20fdd543ee5bca767a10f480ed0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

