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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOPO54AF%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCrCQJzIJNAVZe0i%2Bqpf79iIguF1Bs9Khv0IdtFZSVBkgIhAJVToPTonRDgKjjtIYypjH5gUGMsazJGsC2oIQTcb%2BijKv8DCCUQABoMNjM3NDIzMTgzODA1Igx2xwQZCjpXI5Wa%2Btkq3ANMSny3XBDpwo1Mi7obm0jNY8teXCUzhUvUcKyi8OAnotX97v7HbQdH6fHWCkKr37rq4M10pQSYlzrbxe9Og3xJaqwauOqt0R9bz86Oa3UdbuUPcQIBl0DBcGDSATxRdMA1OUdefxZQ8KT3U0sggnUsERL8%2BCM51d1kb41U9KcWtqxNywSHC%2B7p7ug2LsDRINYDJ1A%2FkkY%2FDeWvThCxJjY9gFGgCykXFwcyhGLNUhrqKQ4rM7cgsJ4lC2NQgECwKY3eSbsOpSvU7WQ0q0te6C45VP30dvAj5vEukZ7Zfob%2FCqztRC12voI66JyAqQijaKRdpd3WjQtpaHG6Fvc3KpfQ1l%2FAh%2Bj3h%2BRZHleJUbZzcx6ni1dSJepYGYL4d%2B13QJRL7HXAWV5J%2FvEEAU38eXBSy%2BGyrb8hT%2FyhJsA%2FN5rUMGfbnilZAJzx21o3E5JefMrrLR%2F9Yx20g4jlpgjMMcq05Vh%2BByTncCKdTnOksiRURDSX%2FPMNYyg2WFMi4aQP6wB2BARWkOAkTr2ecY5hRtca1ZrSMKhcGCyprJAHcJMHob5b%2BFOuouBPdy6UIOtKqL%2BKWRNt9YSZyZPLxlnYc%2BCQtVisX9x2VmhFaLnlBLJznzonvb%2BA60YEZLTN6DD%2FsbPRBjqkAeK0EuD%2BlQdS1KhZNAE7iFiKZGrhy%2FOua6xmnu6ymTa6%2FA81Nbm2HEkMUzBD4h%2F5NPMePRjOcZaHL6NC8z9ZF7tL3NmS5RXC4o%2BLhdkNIPSeoDRLaPsfDEqKegJMAxZRWpxjpeujEvpnEpTK4Qwr8se5IsXKIJlaSaegKrAHLFKZ00J6k94%2FPOFVNEuN%2Bjxmb3zV5M288UbLQQSbz4Jcl1GO1hsl&X-Amz-Signature=8f0295f775437661366d94e9b1671b562f8b8dcc88323fc2a78bc9c242810df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

