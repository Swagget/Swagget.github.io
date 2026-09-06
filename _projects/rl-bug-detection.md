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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXJSAXKN%2F20260906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260906T222953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCR2moUfK4sXwcnw%2Fp3Wo4TMjJC7dY9mYOHhvrIjfNhRAIgFXl3e1pnfvGDe67S2viTPLO2%2FZ58amcKPFBSmfEmJxYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHKhyNdFdlK4U0uUiSrcA4jHLbT0GEbbvjBaLH1EY7btshHRCt6a%2BQlJJpfILxefel4GUtinEaJE11gUsh%2Fcyt0Gq%2Bz0Yhu6iDZVrr71s4ZJXeedspltBjrf7R2wyXpxMv9J59woJrfrUDIHJX7ZlTZM7xTRbnpOOSyVIOD0h4jkVndXkV4ZDT3fUF2S%2F1zWH%2BVp6M5iXXxGeNpj4cdw4uT%2BoRizKfX%2BbhOelGBGx7Wt09Yi1JdO2t0IDCD2AUOMINWipIf9MEP03ISX1nLWsHR%2BPssIJ4u1LecIR0bz3kHibSTGuUNavFCJv2FVBK7cwKJPZnP1UDmS9FmkBkD%2F7Vyfw9ItSj77dYA7F0jC4gPOhoDx2Vmm%2BUU9%2BoAl1Qc5oG7OzCaPXN3p%2FNqeSK4gvDmxxNSUc%2B%2BsKuXYubVBa3IWISdEUeiLayoBP%2BCw6Q9jm9SVFSfoeZykjirIkEViA261BoKaypYjcKkKUgW4ZB2I1iUzpKzjLANyPXADudhdu%2F%2FRTPy0S6x0boqOZFIm6tbCm5r2lxLKXH3ApCLwJsgXLYpmo2SRhG9FSuIi3cJ7miWMVxGl6PXZdBHSLS8zQp791DsZxDicLqyJyZyH7RHnVGFzG6cWx%2BHlWHKxl0%2F%2BJobkm2MRlpYm9RfhMMui99QGOqUBmo4yFwW20vjL5MnwJhffGBPHAUbtSg7nwKrM59eibrudR9BEEKLHh4aAf5ZdpSZY%2F9j5zQaOyVZAwib3foqZB23N2L3CG%2Bp9oBCc%2BstWAqH7Vgqbl%2FUUZCgUAxqtnvedHs2ioDmobYeRqCgJ4ne6aT%2FHwH2zWiSHSJ8USuexsVBoffne8ATv4PHLxCE8%2B1jc9v4kSkSqe2z9UfhzDTSOdclanbHU&X-Amz-Signature=b18d22b80f445d27befaf378ea604e425522c64d130f7607bed31f7997e95ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

