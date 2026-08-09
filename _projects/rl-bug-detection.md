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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7MZUEGN%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T171926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqOI%2FyQ4ASwNgNysUxx3tu7Xx9BotwMrqzo%2FiRxvzX0AiA%2BCftyhWTNarBocowi8Qf%2FQ1qLNg85VpdmduXch2OV0CqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDUpCGhx%2FSe1ZTxscKtwDbwnjIbGpBc%2FFTW%2BmDeR6yq2rF5qgXQ1Jo%2FZeUJk6SUFYpXJnXrlVlwWX37n43nS4sZuaNS48%2FDUF8R5CBJZc3ejpQk7GSUJGZRLNONBSoMqd3OL4jqcznqXAPP%2BRPYviEsLclLAiT8gE0O9g4wSylY1DLHUxPMwm63WPu7kL3oQ%2FJ2aTvO1ukNwTtjwkDtSecnwaVTVaVQjgjTXck9FwTeLIE6EP68SraYltSJ5M8qpa59wWA4ZbrCge2f13pyEDSw3hrG9NdJ0DgXY23tctON1P9dj70OZByin63Od4%2FNeQHBthZLkrsixHw5UxQ55V4PFCruDvGfxevk%2BxfuEuig5WeALpeBnsiwhImDfN2Wr4mdg2azmPZUaIAO73PADxqvXlUyxMO72UavnXXwRcrAz35N1ViNKhbRFRQvstjdhJuUZuk6bcNY1vAHwDN6jEF9mazuXCMNJmGQIOLyJkSzfEbKtZL07jNiCHMqkEgTIbJciVCyICx0jxada9AacVGDZySKu6UG1bp3vxeClZepiVb2kcb80ccRTxC1PGuwfOxszRN0eOk4WVtdiX54CBcMTkVSIZRNKtsQbH1Ez2imOmnJPkxZCgY6vshoDMcXboHTzHW9ZoTbDqZI8wu9ji0wY6pgFUDPkZJJya%2B8GzVq%2B6W1iy16bTmSu1Lt2960GAjdyZu4BEgnGCL1SrZEZjLT4ssTE5qM13AXh8btvXaF5tgpBRhx%2B2n%2Fb0kq1O%2BfUdDJ1tCCYyxItBIKiezgK36Ss7yOYemYEhac7H2tCcSIBwnt69tLbOHlOKV%2BHLHA5Uh7J0khon%2FPLCENAVCpRQuwr%2BJ%2B2rfL4kA261N3jvvLPuUHbbK3KlQb4h&X-Amz-Signature=3fb0649393c02400ce0ae25df7d005beab69b4c1f4acc45be0585925273f4488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

