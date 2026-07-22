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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YP7DGB%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T205153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCHfxx5OTDPiLiu3NF9JIBchvNdDCl6%2FwBwGh3Jztq4tgIhAIIPWaTce4okaGMrp9d%2FmCtrvMqCWI20G16YmDUKOZIPKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo%2BrOYf62mSmaT4x0q3AMdHa5fUawZ2TOQ%2B1I9R3JNck4GlMpvLBYNsLytcxOKz87dvWJT6D1swBAaztn11Z%2FRUuQqGdnszLKjo3PyBmoguoEGWru3TG3i3sbZjcIEhYJog8FBoMncs8Rm%2B7Yns5QWU0lwYyWIwwZCdNjjJtVz530Zk1LPq8NgSOCiiWelzHhDFFJvNLxSW%2F4%2BNJ%2BFvG%2BfHWuV5Is4nvnK7I6fbr6UEiTX4VH8Hlj8PpcF0pU3kSgerUY9lSeMzfLE6mIxaXrjmwDJixa2gnmeaWldjn1SvsnrwCQbOTJ%2Bj9hccSJO%2FU1YxHBxLIFtfVebonZZuu0lHEQ1HbAyna2NoGMrW4brwRXlC36%2BnRaUxBEVZSnA0ZLAj74gCNkicane2Aux2gtrg7oD2P2T8y2Zq%2FGhU%2FvLoSMkET9hNmHI6DHuKGCTLPE6TRSpCXE2Pb%2FjPzq0DXdXgXE1ajFlr0BPTXl2LzwLgUjFdTKnJs5PIUlEfYlqhzAEzQquWpnTzdWfRXC9%2Fx86WFoQRU4BY0YIy2UMLMgZNNSh8Oqv8LI7%2BgbiE%2BTNen7piZrRM66%2BmCJFcvJDKcx%2FGUf5mjFrIe67nrcBTD1DLlx2Fyhub%2B5saCpGC8hJZXZuswfZPaLN4YRO1jDhwoTTBjqkAUhzRfrcqjbch2Llrbfwy7aZikjluptorc3oVh1Scb5NLRo7MjlOPy75qF6bNtZAk69GMe%2BAEeDGVU0vG8RfyQsONuunXxhyd64AS%2FH8lbBWcKUMtoJjRTPH6D43hgweMoM3zEOIcRys0KAAQj84V7X9Unl%2FzSIvs%2Fjo269gB0I87awaROGkoy%2By7%2FRWEhBa4fkM0hFi5DJGOQYVyFYyVeKDM2ER&X-Amz-Signature=de275d3a8a9f675295212ce1239e665aa4bef81a84f97c24f443de083ed4afa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

