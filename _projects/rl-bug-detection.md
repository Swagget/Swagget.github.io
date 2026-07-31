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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TD2U7N%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T224731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFazVuv9NqvFWt0pHBbDfcYFlRc34u%2Bf0PfJV9yL5FFaAiEAloHgHfxaAWHeUpaN0%2Bg%2FnCtLityqfBodiVeZRL1VHFEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWirn7QF4dwFFfL5ircAzbwMuiClqJhrjYM3iw8xm0X7WrAsc6ODMXYRnKhXjMi65M1BDPckehS2MLunUMN4q%2BjN3ilV6p90dR9p225VygN9KSIkWUs1oJV8kMYCILVJPwPz1mdj%2BuLKzDRxH3%2FDygT2%2FmjJij4q79sLNeZjbUAQ3u%2B9UM5FEM1nqSDte3fC7q7jT4cq1xu9yiAc7hnqDCdubvm6JjcSe%2BC1MPjj2tqVcGsgJKsmTKxqcfcHbH%2FrSGi0%2BHWqvubvTSp8rJrt1UhAAeRRS1vJWjpdlRGuhQSzU%2BOw3ynE%2BubHJuwhJHb6Pf9aOKAjDZD4fkS1u4IGYAPC0pYFB9dhiF%2BI5RxaHN6GQ2BIKsq7OPtVBq6u150qqDisBQqhVfdodlebjKtQJ8rrYVDRl980ZQUoqEItGck0RTfvnu%2FpQo0nfxLSVKdM5fzP%2BHILfBF8i22yCExj1YIJiRcxFeiuJdQJoYR6HrbRDi0rGKn2sjdsENdnMUXyCBhxI%2BBg0UPNSC1AU%2FmFFdlcgRZejEPeneDrE%2FOqs13COi1f50Mmj4Bw8VB%2BjxDKPPAO6P1cIsWsFaZVY33Zn2muELIJUoGT39XlMJxX0JuUQxwf6kf2DIWXwypCvgo%2FsTMQEe0HvCzahgaMPS6tNMGOqUBn5NJcjaPoAswCf8Em4l1LTeRwOkS7YQyjt%2BAzaj9c1M%2BkCoP1HB4naSEiVofTfWmiXc2dVTDl2KhXvxyylMBX77stn7SkadlpExUXUYGL4J7E1QvEgBlMlBLMLMHFdZX4JjoF%2FhSt4O13RUJ3DpSwb44TFGlQQkO8BmFdouOH%2BLMxfIjUL9%2BCD2y0zyxEszHKE622HTKWU9xGaaVTbmVvPC7vTIv&X-Amz-Signature=74d205bb1a12738561d47e8a367f659b9e1bf819fb71413836276352731d635d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

