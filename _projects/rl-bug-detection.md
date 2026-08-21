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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQT6DCSV%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T052053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3bcQGXo5PvZpPGokQMJNLCOZWHkji%2BphltufwO4OvhgIgBnstQx6as0Y6lOJOK%2BzKUq5gOWzqaGjR5SIFFBMcePgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNg3OLB9Z5iUiFmityrcA6pS5WTZd1XN0MWeehuti2OkNLj5ENfEnjUAWBvDazmHBLTS4ebcKBPmndXnRm2nRpv%2F0jzpa0tAtBvMyfnhdct5qrfYvbjoEDDmagm5%2FXYo9fUjn11fsDcCwEoG8UOlki9H1rlamW5MKvSfs5l0W7wGF1YPNR2wz6Oy7N7w3Qrb6leWms0ltmH82Gz2%2B4u8FjdpK%2FQ5Fu8sykJaSVCVTXpQ%2FR0ZrMZPuUXwKDvWBt9GMcPLF8Pj8pfwN99RfJkk0ycJ%2FiP7NK2H0ZCTLhzSd%2F9esuw9F09Qgx1Dmolq%2FE%2B6%2BWU3hI7AFZ0tiS5U4lhk%2Fr3fEcb3BRHccb%2B2CFn3GHyuxtNgYpfojgO1oUf4tN%2FDMIgFIZ45mAICa1%2B%2FHd6IHdeuueI8cZHefaN%2BcqBSRasbYs%2BMctGu9qelm30hqyizlUT2NCWrmSm67dFYpFVTRhDR1NR33n3FtuXFRhxXKfe2lvZyGhP5O%2F3mRhci%2BXhmlPJ6YQDnpAnDv%2BFP1XC8%2F4uETCkI8Gfb3mWZafSU%2ByiyKvccwYryQln6UnDSrt5wJmPBEC1b25bKGo2n2rXxGZ4eEczSWorR9sv2DkAvhfb8fqbj6XFNQ6y8DvyMRYNZLx6EA2cxKr1hrWaEMParn9QGOqUBciae0oZma25fpugz9XlFuEsI7kGihPku6%2BE7GJX9bII2VYjMfZfemjURA%2BbMbX2TSy3ETdXXQcDFCQ0TFOYwnd%2FHk1d8Uu7MaLgfK2s1K3x3%2FngCaLdAfjFTrWOJu8VdxE%2B0Dr7nO2k2X4mdAem2GvREG4Dn8UeQyNE3wNTz3umkkuVAV%2BXThm7aLXY6mFs9YtHWGP6YyF2C3ei9sLidDDFivkzG&X-Amz-Signature=b788eb1691dccbbb72414edd3095c9d79367e9387647ba8ec2c0df0131283de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

