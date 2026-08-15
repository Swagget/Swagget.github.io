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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZYWO6Y%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T071950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIA9hzSuWQJqB3Oreu4keeNs2NKFutQvRr3M4OWSZoKd7AiAq%2BnDjxWqen8ZbEKvL4HkXqeM84wtcG%2BFOsadGtj%2FFeSr%2FAwgPEAAaDDYzNzQyMzE4MzgwNSIMmeCz%2BY2t3F0tcklTKtwDnPGiJtWR28HNf61yguFmwa3cW%2B7TDd%2FniEYKnWvFBP02jOEfrV5q0u10ClK0EA48Bgzr5%2BN8G5hqZiR1lAzPpjON9ggf2HFZiMWbGNGIOmqnzXiE4lrUf1og%2B4zqmdYm7wAXFT1qptemkiguy6VymPRzVynzLDgWDuz8MTd2X%2BGN%2FEYTWZ7jcAds6l01MTycbdv1k2%2BXG%2BdcDzAKiLxIPansKWSBLzv0YUPQlTRb77zSXicGm89VbmRkJy4zIuV72IEUk4B6tiEYn%2BooynPlqbXd%2FQfiUKpa6eRdICdwts49RzLvOBFD9wj2x9z%2BYGgSFnfdwWm3Nje2m0uRoI4wR5TLorRw1GPwzBEOavScIiUp3ukREcsDLcZQVnlZYIApu2T1FzZ9qmDXtqR76bCvPAAQshfpUvbbWnRdZbwGnSNsVWEUNYcEdX%2FTC873%2FF3H%2F5h8%2F4yGhslM%2Bit7DPik3kBAm2gQStseJmPKIOtuZLgbG4bUl%2FnUhkzTtzGBHJPzpZrT2SeC%2B5Gj2etTdH33rXg6HLgihv9CbYWzZra%2Bw%2B6zlHPAO1N8TEYKCJsvXYw9FTcGY5p7kCvdHumhniU1Yp3D4a4EdtaWB0JOGuSjRscsmWEF3EylYM5shJ4wgICA1AY6pgGCMDtiSvUdtQ6Al7bOebGsiHpykfq%2FgI7y%2BJTbR2ILRvz1%2B0uFghZvAYHzZm7DoxKsZPA%2Bv4%2BHLDDeOySERm513PtFTA0JBhBfUUek7vckMLggpgLSLRGMZXrqp4%2BSDCZMOWWIx47sltuceEPIU2EppwpWRcOe%2B4eRAaHVw6t4ojTH%2FZirX%2BRckjK45z01t7%2F716HuxsJscq88V5tBNAwDNyz6ueMI&X-Amz-Signature=da2637fc4ccd363b5d72d2356767796e02f76238980fa431a0ff9becc29c6f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

