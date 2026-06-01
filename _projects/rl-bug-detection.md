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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBBSVWQ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T194930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC62TSooqdRCYXb5muGptpKKlysnC5aYLJJwKt835pG9gIgZWMnI00WUmKEvY2HFFXqiC6L8E603wO%2FUCb778VPNGIq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIYQwpLUwCFwGuWEOircA7pdhVa3irECQDyFATszzlLZHgIht9fskD%2FWNSSjHE6xnFXXZFYYD3pxGBleIHsQMjAhu5eR%2BfTnvqQjlhj0ZPebCbn1q53baR5UAC5agWUysiPsPYGOanz89rP%2BzcjgIIEjOSL%2FdsjXuDgMuQc5wsFITm6zOfEbS1PotLyhZbAzw22TkUMqXWepMRPn%2BuBH26AsEzUOFnidjmvRvdqQEOhulb90ZNsfHIuA%2BInDnO8vdOxZUPhvgscJTPhNkFzw9XFYJK7ZRT7sJdZMD32Sp49XSF6Dg%2BF0abOVwgW2mMszYdPbmQx4wWpG0r7yfwAqRGujebppI8QcmxpjQ4leNgWHpo3RGjxiXmzN5gqa7%2BP1GqB4QnStybwVgdz0PEIEMW%2FFruu5IknauF8jGnWI4Heae57S8PWlmZRaQIXCZqdzeF7h9Gh6s7ctUSzZHaUhxlf5QJN9XH%2B0x53z4vXNHbMTTaOKrM27g2s66QSv%2BFIlPmlHqknPyOJ0e%2BJhdHLRmrHL3pb2A6AbpqM3BohV7uM2sDaBSFL5JlhqFRbcWgGiaTPLB19JB3f%2BQwt1LgfjuL9niG2abHISZSjpKQICP7F709MhOdj%2BtAyTypmDsf0fhUYrSpZjQ3Jzxeo5ML3C99AGOqUB2v%2BTbQhCo48UpnwNYMwhdWnW3RXkKabaP%2F%2BXKWXOQf%2FwC5FGTtT3Nea8Pmsyr%2BW98sNbhTr51ksLVTBs5E5XSuubMfjVAFRheipAjrxTUu43Xqg0gJ5mFag9SMgnQByJJYa3x9LTVfEhHd%2FK%2FTOYY%2FL7XutAhngotOvMqDKOnZU%2BDIKKlOYgk0nF5OPGdOGLIR4sFlT9t2bT0v4cnnNmofVMUvwX&X-Amz-Signature=e69e9796d1e659d78667e1c3569e77a65c038e331eaa69b6d84451d577c3e438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

