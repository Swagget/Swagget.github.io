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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AVIP4E%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T154924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAtBAOuBaswPjIuUfbD5NevC8nXqLmQolPmDaFHQObFAiEAilgA2LFzKOE3KVtRPsKa%2FK7kilNXlHH6shN849nIDO4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgJKhundf050sOPNCrcAwGcJTiL3cHe04uj2MVed1UAXviCMK62VaulvcVcVrg1kMZ4XLJVMP1DT%2FHHZStXJ7p8bZZF0k3QY1%2F45rbWcqE%2FlRxKA7YVqvFJyee33ZmLwa2I5DfwHsN6yA%2BVjrCHU5TtbViomtzdvL7oSnZ8RPaJftwZum8vO8wZS8s0oBzqmvyj66KgaKhh%2FqIJpLL9v6k1uHoaM%2FU505n8raguu8VmxizrmtwZE6WYSQb45YIaIAb%2F6c%2Fl%2FTbnv0VqgF6UN7vTjj1nl%2BKrRl%2BNjF2IfhdKOXr0JLOQaXvP7FJh7Z50PUmEHOuQbvwQip9LcrxwwxMPahvgz4kt6hfuo%2BALnFjVDNmsdn2mUdOtDCa8EGKOMDE7DmoqaggsRIMXySEak1zqVblPSYrJAOYegmGJ6OPdATDXoOZ9LjHnuEOlWxImzd1sATCJDxpCtslPPFJPfxiwEHgrYejZI798Uu%2Bsp5a%2BQzxTu5i0MLuJfmLfsBQvm760e5qpvZ0ybDKfz69TYlubqslYRrpi1Qe3%2F68dEuzS8MBuTBZwr1umxwRLBucmOVSXtBiTqdduWlQ3mtSgJ3V9ubmkR%2BKYHUYgmwDAhx%2FFYLhkIB6ReUOuIcYtZeqUCjIpyOc9nG3ezZ3oMOyVuNMGOqUBjAaUFZyBfJ31qqxfdIG4yrUN%2Fv6gMqO%2BLYPiMcvI0dRTaB1JihA73M8tQT940cyCuIDmxIVUQ0SXA1IX%2FSccr8I8BBwLhsXh5apFwuXUPY0Vc3Onsqso%2Bwam9fv3H7MfH5eLjVs%2FZch%2Bg5t6CVQZ4F6uXx1373lwRf0VdF1YsvKjdWV0T%2BpzhGh6r8xI1Sb2uoiJnwfCKJ9E0r8ajsV4bDLIhXZc&X-Amz-Signature=1247fd13e3349fdc45b5e4a190b1b909b47d3ab424539a27b584b5b406d184a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

