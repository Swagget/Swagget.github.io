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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YCMOZZM%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T235420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDdFdNF0gOmWZuda40MrYOrg23uptPhmIqhYU5hU5NWyQIgGUnNW7hVlpB1fyOAX53f6QB86Rc6fq%2FrpQuQ0Fw%2FdI4q%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDCCA9%2BosIoSfMOr%2FryrcA%2BPxBGyAPV9BOrEBKJkNrgvMnFy2o%2FYLVknVl%2B%2FKaFvUIsLi51pb%2F45PVx7cGz2rEO694ToT3WRRdja2DYXATSSA6Wm9lP8NbEfLBrjLIiqei1%2BxZx2j7MmLC478GSGIOYaFMQ9%2B6mQ8cGnpoOf4YFKRGuUEGP0Uix4xtZWXCwOZKo1z1tfM2KRTne2N0fhRTvY09M4TFawZiQfL0WY1Gv5ydZxCo%2FCNtfHgLEAbiJ4KX3xUf%2Fs1qEWD2vz2ZH5BMCajV2f9GTdO9aV%2F8pnOodtVFlMdgp0fr9Lj02nYvmBpll7PyHpwaIAv46e0EQJ728X8QSDtFzvXhBM9ZFXJ4aOANGPVn7IRtti%2FgfiT9n2IAnQjQQxVzZojZk6d2BDQFcNNq4V6JNlBwugUAx5r0AOjRwFZZRk%2BEn9d2t68xggQ0UjDlFE0gV6tBHY4%2Ftg52dvQ%2Fv3K%2Fha2iY1f2IiVs1jvfo3tUBdlhmCRW06AZDwe%2Fa1EfeOInzejFfymXxtbalhr6gKdco9BJKj94Sp8WPf%2FbAuWaSIvtscducc0NIXCNAmp1rmBLuevF79dX%2Bzv9h7P13c43%2BSKHqLNlvrIqHghTwL61IlV2cFVzmWXe3BgJIz0VAvYO1cM%2BB5HMOOH89AGOqUBWPXQhbxxjp0pZVwNJ5vKVfaPAjxj4ZUa%2F8bWxl1f6Z8ad5vUR%2BTXTiVvtZgCXtyPDxAsnI9ea29QV%2FWxFNRUot6fUvEd6ireBxs8nt6BGJEnZBpw7NrCTRR8sn%2BtRLAiawH5A6xHwutJYPrJ2OBBlP5l6vN8NhYYKKluraQ5Pna0bD7930vg3soAFrWv8nlRNLNF8AsnuLWWtZQRdTcZAReP5oEz&X-Amz-Signature=3f58d94e53bcb69c0530ef114a666e2fd1ded7c965ca91bcc9772b98fcf854bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

