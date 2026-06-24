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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIWCZMHT%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T093034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHpzueGup6SzNS5CVD6btB2gS00nqdXK9ShEmF9Uv5ZJAiB2Zb2r0j8%2BDC3VHktmOBTDgy0ACdq2WcF0Cn3WC2Cu%2FSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1Mu6XozxZ8OHFLAzKtwDKx97XDV%2FhyHCupsxnGEthkuYYj3fY%2BR2F2RUCh5QhMhcyQg%2BV%2BA8Jl0Oopid7QP9UaygX5HhslONGAJD6SaIG6U9E2MvsFy5IlhmGLwwx6shzbY8J%2BW4gUdtAL1OqfDcksErss96WVPV%2FQPjYXPa3QbGBTZc0lfjiCWRbhy1WIbHr%2FuQtdMulryrsXIAaGsDHQ%2BEnK72%2BEcmp3auhlcEepWRpkKhVYWXgIIwX06u6rcRJW4w9F3aILrlLvqpd9DZdEqv6M2clh6oh9VFXySiu7s9x693I9XEVQ13g3K1phC3M%2BcQzAlvlKtgttOxb2kwjYgKp8Ir1m0d2oYwMBZwMsGSPsN9MRySyzFPevxFhxhdWigIk5V4xxHr3iuemSbLEIdIt334N4xFl9AVae2qtk33QPeJlIihC%2FnpnuIm7tNhB5tn1kVCYZwknyqYFBokM87uF6Y8B2ZlgQR3kMHi4OJBdxxPr%2Bkw0p57TDSp6YM6GlpZKI9fwrDdHzDFLtkTztRfHzZ%2Bl2z0PVQ7MgIH%2FhCW2cYecaMVWUZ6QBFdYkPZHynDk8GCL1mKCt0kCXceYpPff2nJb3Duv9j9LDl%2FHDMtVmuan99KK2oNYcj7nOcWy3YNfKCw9GOqvtow0qbu0QY6pgFviu7KP%2B6PUcSsYkmmg9hnM6LxXpA3G6UPWtkTNreKEH2pnFgc93w1KN%2FdxbGBLZdt9AXuOIAIEG%2B6BwM1ewsUOV749O3adeCFgcUYUMNv1Kn6ZJAzEfxs%2BsGK7WsO3Q5kCMtUwb8xc0pNeh9dEEZHuQO%2FPUHxeP6%2FwM%2FxWWhCoK7eUnB%2FZs72SOLD45Z21Iv2al%2FwshTQKJtyO2kRjyNT6Ha%2BkRc0&X-Amz-Signature=e84b17ec056420415d063386b6a77986c9352d13293b4d6e3c6ae5acb66811a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

