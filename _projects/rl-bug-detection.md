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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE3IXVIY%2F20260715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260715T195920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDcFMkEskpwEQdDNkquhyHQJ%2BrdHGhaAARMfWQHYELslwIhAPD31r%2FTrJ2L3HDSHHQbU6o3S%2BLhaLKHilRWua0DIm7EKv8DCDMQABoMNjM3NDIzMTgzODA1Igz2XPTzfD%2F90GI9Fcgq3ANvaKmGp91xk4tyzvrQhECrhYR1gs4PVNGKxqafabAGxJ7cwxifYgMdGVKh4XVIqtOnCrlYAMlfAWgw8KUkK%2FaIyoscEAxT%2BusvA63448f2BtjhH4Jj%2FpzeQ18AmZVp%2FqgZ9fkQg9kdY4aRQpeThsm3NBsA3twR3tp49cCR3r6Uj1X24%2B3qs4MRgkVO7g2D38BciGuZmgSdzrKiFnNPQuy7WU6P%2Bm0EFmM7vNS1Xo1697%2FL4efMPJpSbmyESYuiqc05UF%2FaYKv03u1i%2Fadd7nuvRvtpxb8nB%2B4Y6m1HeYh3k2vpN9s%2BB00tq20pf5Og1rjUTZymor4pjYPSdzBEHDFgwkY0KJxrTZvZy9MkP3tydMR1DQpFlk6QAX6yCWDCbc7a5AThDmunO%2FSIC6i6VFvL3qSCVcHZ2allavqG3mcu53ZxwL910obrmyVNQeoh0s0zmeHKRH2alPRreIQwiCL9UHEBnJn7YZRcTR784cHFaLp6qWIXJtDw6VvZMs55pcsZyAt5i%2FcIggKsV1zFVTlk1uXn340f%2FgKxV93%2BEtHKWF4KOxMscTGzUw4%2FMptiGm91g%2BLyd5hTq74%2FYwJeHg2wjpoHs5qRA5AO2bcDWAbfxJ67rTuh%2BNP0AVBcvTCbm9%2FSBjqkAV8AOltsv3v6MjNtgtn3me07kWNfYUROt%2B6abMewrfXswmQRpRs49feZcqELKlazlLFg9oEBPJg5wmA6hRe9jmfUXKNiMrFaa%2BmJ98dzxyzwBAT4KQePLN14K%2B1gjnOemVNz5e7oMNqLhvfYY636WYMsZePgOPEVVOt4o%2FTWZrjm48JWHUM1u3A3akLOibbW4%2FaqleB9DcSKk6QVcqx82LW1IH2F&X-Amz-Signature=af7331ab68ba1d1fe9d7eb25d5e559f255bd59f6594ce963b482870ab2f3fc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

