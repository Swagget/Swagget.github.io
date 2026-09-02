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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QNYEV6%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T144622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDx6O%2BkYwBeaHW0vzCMuoBHpBCmtVa80tr3cSnJZ%2FNbaAiEA%2BX1zT7sHzAxJCtLMQ%2BFBj5xxJuF6hAv7DgsorCAU0bYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgsSNxCnlzYjbxNWCrcAw1clkr3sckNmT9eE7NdiGP4XHY7InsgO6DgB2DFStwkYkcpofgeZOnJj5e9X12hF95XgciTJFzZtF3QeXeAhfffJAWbjsFCqX3cS%2FnlWgfUgvEg%2BRQRzhcYYiVYl9QdcbVPMus%2B1HpcoyrNouCvhvIjX27%2B%2Fteh6Bdufxl74G0WPGQBW%2BGdJ%2BHUHhr6AS3f5niftwjRi8net7j%2B%2Fb49IXjuWoyaPOVv0r5RRmw9my0p58e1C%2BJKqJlungYsQVYmJRCsYWsr8pR31TK99wVati7e%2FyvieD5r7Dsi69xrP088u%2FFDEeXTgZh%2FR7BhP4w%2Be98dRQ4XlHbYHSwV7hUNBmqEv59lIe8WvfcLWdf3X9faoqi%2BQgYHZlJsqMVzV8pGCQuNTc1DkmLpfUVYY3kngWqS98Qo44hH457JNar6TLyrLouxER5xjiXGC3laEVRwUmdtZb8aGaRGKQuV8wLhYyrTZ%2FVbgZbMSYGK%2FqxHQagd%2BAdPeX%2BTVSpiB4cAVprizjVQmdbRlUHsz2t8C2Hyws0x5HlFnWHpfMi6xk4JPGnX51bGy9YquARF5Pxs3IvYlyYDt6kTbsGpqw0BI8Ja5sgb7PZbZ1j4iy9IDoIZNfVWCqjRCJeCQsf%2BaJkDMLS04NQGOqUBxXc0EfS2Yo83GEmC6XOfFymA7DZ6yY2qpoW3Pb%2B%2BgZyShVttR6CAgSpmHOOkDEpeK4LHUWqp5I1Cgkh7sMJYgfwIGhGX%2BC7W%2BlE7znFu%2BpdYz03Vf1sBy8CWeb2Jf8IGwn0LTfz4Lki37rrv3Nn%2B3SJZY%2B9WPyE40%2FVJKVs5E4nIE%2Fn9rp%2FzTxruGOAnb0oOkO7BcTCvBf9Hu9UfOFLFAn1wAUmD&X-Amz-Signature=2fef8021f59a2c2f6ad8f0d7b24972563b4db20e52ddf0068a225c54c17da234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

