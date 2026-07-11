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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBQGBWH%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T203930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCkKqk5i1ZNQivNike7g734XawmrKgHc6c0CTzz83VcoQIhAPldYjwoW6Dczyhf9MxBevXY3%2BsKSLIRkX1NJGn28doYKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRhvbmPfDzOFLubSAq3AOULv%2B%2BXoKloBSqBAXhJpSLDUunngpv%2FhjwKWVFtoO22jn8mAmdIMe7rsFOkzaNoMspYyENHbmxABkybo53Woq%2FjSAuIB8pd5ruxwqzSRFkdu3pMimt1zeFYcpj%2Frf1ruTOjGou46xL0K5H50%2F2CKB2cdn2YrCqSb%2BxndIXIZpIvP%2F0fWP1JcN4R%2FzBrn03w%2BFoidEBLuk53LfG23BSGwn4gWom%2FWl278PbhpkDaoonekaB5w00INRp6enq2X394iYw6KYiR%2BTAelC2FYj94IXgwtwtnRPhQAvSc33bxrNa%2F6EMrsgGdFSozVvTL3RFTJKT58sRuea52vd8kA0k5D1as8BeMrKzm9m5uJobfhExo15SGswkAL7g47O%2F3aB3MuoMRz%2BJka9fbktuKCR3syHsTdg1DCzQ1AaCWcIG%2Bkqu3u0i2KgYdeJImOY9EN0za%2F08JlPmK3GctM0eOAjigFyvkqiAGrhx0syAQK0BIt0bqEB%2BPqgtNt%2FsTryooE6Zqi4UpmxaEjW84QY6C21psUURMmW%2BQCd81zEzu9%2FBzVMFzTUXJfmq8jlekAvuiPXkxYAamEgFCH3TOInfH4gfShAc6aquroLf2NBi7koZ3Y8f2p9iIDIRGPpD4ZmEUjCav8nSBjqkARoR%2FBSM6xuLHvKq7nrAzuID9%2F1zQ0S%2FyZmGGCkT7eV6ftV1bw3K40N06mHCOPakYj2y6TpqkLwExXj5kAvr3Zzm4YdATbbeaADnfEislnp5O85Dl1toxH0IJLSoxitZZELlog%2FhpzhQB2VczlfIYdetQWyTgpDIyoTduwcL5hH%2BYxheYvyUdQh83Lqzdw1Rm0%2BMlIXTJM8rLip1F4XEC1s1f3lt&X-Amz-Signature=520ef04d9803603dee3b130a0eefbea6d2e44cd7ce29cfd98b1472ec89c403d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

