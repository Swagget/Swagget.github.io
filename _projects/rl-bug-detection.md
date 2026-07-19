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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW4AIFCI%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T200000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGviSoSrivs8gVY9V72DMsbYqqWOa8HEuN2HcBgmK0SXAiEA3kkIhr1AjrR3JJnAM2bbOlCFnfcObYH6eXf2A%2BdeMe0qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrjiH2WqSHVL17KEyrcA2KxUL6ygoNQ4NpVX56%2BOWjGuv%2BtjsEot6TyKIperWOD9ZjV3RNQOCJJCxDbrzC6TwTPumkdTEncknANsG5dBs7UYNB9TITgFiRmgDg8yxuLdDTtRBiXxxB%2FOLzviRE9eHuSB3zpoNfcy6w5U70cK4L4D4RhIYjqeqfeLLfJ5JThfbOkd8ICrS4eB%2FaK286dIBX%2B4plcR%2BJNsfYHcCuxx32z%2F4wjafU64bsq9Ym%2BaXXkdH4FNAug0DUFzaMsmCS1%2B4lbnoLgnlcn9%2FPJU%2BzFOwCAsW4VJa580alIIN8weQMCUmQztiR9jyVLowkWGpG1G8xI3FQJRIkj%2BnBeCZV3E7b0K9JGDs%2BQB5Dz4MZgWs3h4ooCmF78lgRZz2Uvx07I38BCJ9GwSncesjGuodNIz86%2BbMvp4pm%2B%2Fvh0aBeK5gR5bgJcTexiG9%2Ba9v%2BFC%2BXAeYSGKw0%2FGmAm8vijfpOYunjcW21%2Fft0Vb6ftRTGP4H6abjyLwqCp3vG%2BYT8qAQ7Z0Q2tKwXgLiWQuIyHezqM2wi%2BCP1OS0b1uyJd%2FcGNLevN3VR80zAyyZj1%2F%2BNphV%2Fa8R0iHA9PHkUs7rt1sSF2vbnqKPaFpYJePx3iJWowMyNeSvdL%2FPGaHPxoEGn%2FMMfD9NIGOqUBLJmql73GJDVJ5KlUNni9r4Da8oAdpaoZfN5t644ZyToG4cxTR3RKy1jlwtBTjrQmxoPITZUbQejOum0PNRXgwoaHX4MuBkXWgrh8XBHxypuKcVHn%2F%2BuTYXaXzKcIakYqtVh8%2F1hVg3KzHLsejYM3B0N7r9v260tDSEs%2BMi2LeAcSPPfT5Mm%2BH%2Fn3G1ox3qKjOTcJYO05RxGazmuI%2BK09IlbegSn7&X-Amz-Signature=4a85effb361376de4d7f0d84d1acf89e688ff374c87788853284242a37275d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

