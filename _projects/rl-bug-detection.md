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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G6KFFMY%2F20260819%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260819T101534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK6tZLSkgBB6plVECKwLDDsPkMJOO9b50lnWtw8w0dBQIhAL%2BGbE%2BNIki11%2BxR48bGGQCSWpvAJIW6fqj4ZMPmDAdtKv8DCHIQABoMNjM3NDIzMTgzODA1IgwQgHVJAbGKAphZA1kq3AO344TAmLecyNOjcDCj%2FhiPEBbf5GryMa3A%2BH74ARJzbmNyKnP3pgJNW8hqheUUSwIFC9p2l7umrD5%2FtuiLOOo4cgP5Q%2B6BS2Inx9SEggYv0GeGw83MMFuf%2BWwhfYN5wszXzskkdwxjzPBx%2FI7mtBttBEa0YulnGPDXkltt1h0NJKdXi4zuqWBae2Lp51tgkWTMUzHYUFSATMl8RwJ9H7CMwDIMRTORl06ZgBPCQEwN3O5jcCNIaIK%2FJTHI%2FTqi7QuL7QcXt4PWFFJexC2Te9qQ2qhSGzj1dPrYWHBmVRJxMhEUfwr4EHwpYLNh2USqSxLfXRpWM8YAspmxCxTwz%2FTI4joaGEhp%2F3IlpK3OOm66PEmti5dLtAy%2BRLamGhKfDJdNorlimXJsaKx%2FafvM4MXmAwrjX71DaSaDJ16iuez5S9kbtQga%2FSPMJAzzCE%2B4z17TAxM3jgIcbjsPRYNh5OuEcJuF1pHBmbywWPfNQf1V%2BTBjzYN4ZmItiAFneqa%2BkOl5lefv4meO2dIWkiVJLFGib7h2ui2hxaszgXhForg%2FNBglv%2BQBjiljYJ%2FZw3mmYNuQmGdaj%2BixZFC0PAysDdK8%2FD5BxnoOPZtwwvIlw6s%2FH09P5yVy30pgrYl%2FCDCM45XUBjqkAYsJIo1mFJuttgadVgHKMPoZgGOapQTSWn5VHMOaaoNflbRK16RdhkmWluOGypjOHfb3Bu1jhbXMvO4L%2FvkwOecGNoqWYkPMAUL2cPyf%2B47jpHrfhtil1CcHyFiFABn0matyCO3X1FbofBZXuJ0lSq8AOGcvkpXIb%2BWpk0m7eelT9citp9hqIV439j8bUaqzYFk5FDfTpNqW7T094jVJi6Ngu9hR&X-Amz-Signature=06673003eb0dbf3a8d6d2f63e95919d6f5f905613408dca6d4fda7ce6e77dbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

