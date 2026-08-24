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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7JYPT5%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T201542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDaT3%2FrEP6PelW9sfDfeR7MJHtJqfBZEJPBrcSxyOLLsgIhANvqsL7yWBx8jnmfT4KY6rlooZAS9g3Tif%2FoVYmr2qvAKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOcR5xmyC9YLt3jCIq3AMv11MQczbg0nSy9W5npBDU5pn92SXthn1P0AVqyHVJkjPa0A1P4eACuLevkg%2Fa9jWghde0mMI8MsbfE9jbtk32t12sd1zvR2GAUXVnwe6hsMcCsz6n3KG5IZdF27xs%2BpOTQTJQlO1ezDrdC%2B07UCbnu0Tcq2kl2ymrRKEE6EcrL%2Bd52M7cURJYXLm5i7QCCVXPc5zvh%2Fdjghc2Dr9mVaVbcE96dJ%2BpQm6kwLtlY0Ju2ecM5eYDRkUi8CbRuRpHH2w8qIVeEkGimFXGzpepxgZGsYMFJX6RMmq6%2FdZNREJNghS6SrTvo0pDNR%2FSX1KAbZO7AKjsDCePXf4iYm%2FSrM6owUvU8IclGB%2FJgW%2F%2BJxWRoPV%2FFMglSuYY8UNviy02kzDXqtPOPctrbYxFV%2FmPK9rV%2F4nwgGGKpYx%2BDiGPoE99KIJ6kRC4zzQ48IFu4gXK2Punmaf1gp8PSSuOK95%2Fp4l52Oe9ecUwU%2BG2ST7SshZYf4nNhvEASTaW6y2LuEG3Iy1L%2BC%2B%2FR5ogeII3ETKI3ivTfjrbn7r%2FB%2F27eW0%2BmAtpqyp8BAAix%2BigJ7MeNTlDUbr3r3LjUT3Uq4SJCyHCrTC5HZQvezHjAQBy%2FnT7Tjs1mbcwTOuUaWefio0UYDCDxLLUBjqkATQEOBp9%2Fd8SEPyP%2B2OSyfXWZe%2FjUoYQG%2Fc%2F%2BBsQyvJWAo4E5felFTxQWJWjFVsTD6rdKMJU9MS1sM34emsJSy1ISFvwguGtlSNqGs5Tb50%2Fl1KKRs05piwS4kc5sKW68zYkV4hXDrA8i6sVMdzs6IX7Z8GCmICjbory3URR5m%2BPPLpfDsgcXQRvwkI8nPldIZkqUgYTXjbYScSmEUew%2FxzbP7Gi&X-Amz-Signature=148e08e43529aceee0800a22e461753510ef9670367c576898c58c8d8a1a3679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

