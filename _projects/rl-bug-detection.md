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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJELMPD%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T102622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCEaf4TVBjR9GkH8gP7K%2FHsYgwEYi9AbxUix8PSO5EXywIgL%2Fe3uCxW%2FCCNdORiziYCNJVrrQ1aHWid6nGWteRgBKgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHlIY5fRpdFPXoYWxCrcA6tNGrz5hfCzDPucg2PShuSV4de73x99bHNvOWaxPv%2BSoNy1alhtnRWXBLGyFSmXFP95J2O6ie59OebXzg8T6E1echVgF0zZPowXg8cQyYWMCjz27S%2BXVjzvsX%2F4Sn17NkX7AM%2B4zZUVNG2ki4KOMuoe8qHEQqhCULsD1fGf4XP%2FEaiyphG5evGvDCddzzra9ArjkXlj1BwNCZyFafoArAaLgZwXPbcCjtT3o9PSU0b8vj0aSY96ZgzDtoA8s9ToupE7SMlq4JuiMP3nTp8%2FRNJN9GGwRdY5t5KPPSynBYo3g0NvPIdvBp6f%2FS3c9DwmTJquBNs9vRtD0vAFadfnBWASop7Esgz3HIUmPtLQ7tKdMq9DsHHqFfVyKpXpe4adPcZRk7C4sTjk1LmFPAvGuuo2cuQ%2F5nj1V2iMMMkeW4F1e0Mn%2FqmWZ5N30pcKXOddrgIhi0069owOQiMElUJsa%2FDgf1GnvmMYJUhY9xvm30HJzQSjThwZYpPc2gUG%2BcKcqJlQN2xUHQC9urc9jxnfMBoSB%2BTQiZ4%2BIhlMaJAL4ev59AcxFMjY7WxuxVVuEAzdohm%2BmdDin0hucPo9QUk80jqpRZsL0bm3XSdaSXeIGjv7bds0UsWrOAzv0R29MNWsl9MGOqUBRYwJ0yPwi90S3WafVWyvjsD6MFhjDZXdDqyvNMftfNx264KrR%2BCh2w1oIjXu82K14EM99k6E3Z3Jbk3HiaZW2%2B4WmNUjwOg2Y4Vw2fPVxUdYZVCoIZLm2%2BkNrfFBb67wC0C7dyDb090flUlfBuw0IJ0YRlO8Oh213C0O%2BXwq%2FgC1WFAgLyR99MZRFleHs52hFJepsAdUxnKQ5dkGJiSpm5HTB1RX&X-Amz-Signature=57cd0a5bc41125325aa9019a560a4f70b89097ef32fecfc6d44c087e98399d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

