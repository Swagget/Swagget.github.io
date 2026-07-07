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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QEFCKN%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T153807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgA0QBMkWIlbFQWwh280GZCVKBIwqXhUDziOVWfLMoOAiBfLx1Fg7L1a6Xi23vrt1FCGBkwVl92iU%2BGKzK62e7JNSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCCa7c2sk1VTAVwumKtwDyEesUMOC%2FLCpwH3btWeOeWDsZuQzPrRav95lQoUk6B%2FZvNz%2BO5aHoU%2BWtoiKj301WmXt4C6I1g7CBdWfy6BPNDrAlK9XMp%2F9a%2FBbFxS3EHXvdxlUzJEmEHr0ge6P9gkk86l1kNP6brSznLMdP9AbuGgvHDrAdltPLQJkGjBPDNEBkrEOIuAh8DGxkPjATBZ2Biv%2FdB1tZj5cu78geKjBNSoWfsbC7IXHQ3tlqSxqSaWm%2FRNTA5JCvsgOEsewnfiqRwXW1IwX56xTNYLJs1vdMdhMtmdAZjNjw%2FYwEvUOrHTWGg8gxdY0HigQgdE6HChfHYi8J7NOUnhhXIKD1akbH4xKxsbK8%2F10uAkSV9iKdc6q0jlVrABkndh%2B0K07OzLUOdD720BxESMKqN2Pl7RDTfGAvgaP8QlgtItzHz89cSQNhHdq8DQrDspaybm3CpidmF6wOKxUX99Q0oNun%2F%2BqLB%2FEbJrislP71HIlE%2B60vRJUNhvwEZQBEIVqrIQ5M5PS8VQuvEutWKBG%2BVaRoMOoC0SvOTg2VHeQpyZLvl9t2V%2FVW7cuvaSvRDAqWydrLn%2BFd%2FRfVeW2S877tSxLBomH1R8D7V%2FtzznqMquIsRprZPu1sRDXL6vMACErXq8wq6%2B00gY6pgGUpUecunA6Bd1XY%2Fm3J%2Bo%2FRtY6CXMOuy3ktPT0R1Twr2KYVhrCd65qHPtXfUQ%2BRAHVzw0K5sLMu1njQIYlHxNWyJ27Y2ENwRW67OWhxdiVC9uaKy18iWL82ms8gxG3pWskAUhvs7smLzC7m6ebBrmcXHb09YvppOSHjPk6NIwdF7BbbWUMMaW%2BDY1HdofyC5tY13p704BBJjYwTuSYGGTOp7uKkRmf&X-Amz-Signature=5805cf57a100673d8dcb4d14eb7596ca36203904bd5dde79cdbd65a720abd5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

