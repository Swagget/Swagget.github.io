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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ADD2SV%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T042410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJ05Xl9o%2FyJ6a5ADqFs6sVr3D0jkpYjHxzMM8S%2F007jAiBqPQw9OHAEe44hYYZBMiI9jn2quoWZclTgz8XYPH9GsCr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM9%2FisbTuwRFSLu5jOKtwDUm3UFvQUymBfLU6SV0qlWkty6WOCJFUMUYhzS06pD1h4OImHuEGTFNwNN5XuwpnHbDP0MMUl3lo7dnwQU%2F5EQFYPKa7y7jgXWYx4Jl9XQ5SBGIAzT1DLWFCdl2ArPsaSMm9FS7NsbA%2F%2BeBQCbGlmeDB6WJqY92WpceLLfZ9utmrMMvnk13DG8dAQjjnmNuXfWWz76CKate5xDer%2B0o9jNMoVl0DXJlxzrV3viopliku7LHruxY1xlJA35H5FPRVeFRNd%2FQPehlDpzeKsUN0BnSvlLmafk%2FAeDmzfPaD9YlYKbwpxyeec5qZHHe%2F5bQ7zTiohRFFjssoHbkDhF8grr9eFtsv21LGMeo%2F0omuL4X%2FXo9F229sckXy6gJAuzMTB3or5wX1rYoHeh5MEwyXXRyrby3%2Bzmar5OizDYalfzqeCh9q5rOZpAClaQ9B6NbXbU1iBfzGcVNwcYuvuikZiAT45mM9AptBXJQB3q%2B8TKp%2Bcez0Wxfqknstyt5adgxb59vvYls7%2FdTKQDP3LpJZZSkRalIX8qPAKv%2B2s7a4PEbiTbDPs8prMAKynMPd9VM7%2BmL7Y71FCOHerE%2FEUTyXVGlkzP8e0rgj2wwDI5o%2B1Zb%2FGWyQguvLQ7VJKZ3Qw0ZyU1AY6pgGUiuSt6jg9Cx2nDd3Hxwu2gaelvEwPoAFqyuLqd8igYqTVfW94UjF8RDL6U2%2B2bBBF9XaLN9eELH4cx0z0l5OtHBFECru0JuiyF7gz9z6l0ucmI2n5hgEJ4muFg8LStd%2FPeKLSITsNh%2BQ%2FhTfwrwLfMjv7gk%2BRrRW4QtJI%2BCkoGFlFHQ3mdeF9nGnjlguefOUFT6eRlBX6d8NYBTd2CNMuak%2FUiTpD&X-Amz-Signature=b8c0964fdf64ba87343cb8fb89d5bae8ba643a78b632f71b525903768c9dd691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

