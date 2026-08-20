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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HPE7APE%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T020839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlPw5SASKcl2zFkBLJhV%2FKOo2oBmtZ5UdrFY965P2ehQIhAP8GeiBX9mmlbifvpwdBrlykOKMco6xUTcnk1EcgPAAxKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyghPPpDhF7lsD37O8q3AOCZq9QiNIHrhZcccn6sh0F5RHpkL5HXUsGvyR6VpIbopTTYfx%2Bm1oikZW8B2GaCQ2zenbSoEO1WM%2FeoN054WedrJQCUC9IdqZbgvjjoDCkN0vziTBsXxzA5Tn7TjQeu%2BTB2DnPi3ey0mRAaDQsma980ttnVZ63y3r0%2FCo4dbG3nDnGum%2BLoUTWovCWDdPslTeLbx%2Fs1yLAaM%2BSzVUQDozC5N15pQhOo3i9Y0yRIgN3tlIppBx2ovuNVcvfo5%2B8ALEObEj3z1wH2QSwd62xVm%2B%2BdJ7sSlvIrphkdGyh2xatDNM9uK%2FksNNUpjNGVrDvGTM2VwCTJgumhaiZWyUsqGl7MCl%2BDYDUCrQB27Zw9PuQdd4fM1V0lpCc9J9AiU192LefcpdAiplq7nnf8Lj8TUtvuT1GjTyWlrhSWOSLAhfXbwmJ5eF37i7OHq3MxDDzw8Jk1ISSwq95woivRYI63eV3%2BlTaEJEdu9pssl6Y1NonsdsU%2FGD4gTF%2FnscRDBXT9U1yT%2FOm%2FzgJp4fUkQ520FXy%2BsgKV9I0RrMuD%2FPOvNs3NZdkRcybi4I9CvSwpq%2BBcV3qUzqA1DRgE7XULD8tF4LgdsXPDVxf7XFPHCBYQgswgqU3ugq6ErD%2B5vDlwTDL65jUBjqkAfvwekIfwnFBIBUkunlQ%2FnVhf8Letrc0j0Tu9alaD2Gg7Xb1WBvov7yx7mQf23uDdNwnPafuRvcSPngWtFo4jF1xnFd319eeMdVJBWOMmpUMo4w%2F2Yih6sMvqP7FyNhgNesiy3Fod1GOe4gy4qlfJhDtMWAc62owRhzk00pAyeCR%2BGDaXrTo%2F56YtQKpYT03UZ0XSTpFVyNtpuCG%2BEbmwVgq2m0t&X-Amz-Signature=d928cb1467099691ab39bf9eb5ddcd4615167f195a5ea73ecdabbcb6692489b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

