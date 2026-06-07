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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6UY4ADC%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T095521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBk4IEt1VZo9VarZOekDKQKoifBVLkI9FhM7u4fHQrttAiAr%2FsbnuLNFn6kIMFx%2BEX%2FVf9dFERJUVioJK4XYgEyJkyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqnWKJnKTqUjMUCcAKtwD98P7LlkGDCRVL8dAb68%2BRB6jzW5JZTYYymH0m7Y6xk7wNOHeTm9W4wXA2lqUNeuNa39cjbQLWTUhdiGeB8c21PgsVETDnUriWPs6g4dLp1z4jUPx%2F%2FEjllx51tqVl%2Fs3ZvW8YJYthF%2Bde5LJOx3KPhjErMhwlSihyxkimMRt2GNmVa15npiD%2FpX6ej3%2Be9hmB9thhlee23sQpvdhLscZCGXYYSSiO1T%2BQHYPM9XREtxakpXdIUB3bOAv0nIybNSEAEpZxqQgKyc48l3LdTM51F9t4%2BtvT4HRZb7RaSl0akz%2BK75a3C6%2FbCbnfBuxnt1gcKkOqUcdXX42PeuVHRdYwIT9a8vZgKD2%2BHjZnrI%2FasHNv%2Fgo1jjCIiC15O9TobjHoFI3CAgPnIzKO1qQTDCfveJbeLOyQwVNtSSl%2Bu9lzUccyQqX%2BX7s8Z087bztARhdbYpjfJmmk%2BfvUQft4VoMpge2lqHYjm94somjJKPsQ7a7%2Fnw8XNP%2BlCxEomWs88Tq8rx9soh2PgP1sR82BMa8K9V4MzZ1fN4UHaerThJ%2FU0zfMf6iZVUI4rN%2FbjdJ8VIa%2BXjMTm4FjYJd%2BoMqYdlVyU4L4w6Iow%2BQsh%2BcR1XxfGpzN7Tn%2B874qV4XCPcwtd2U0QY6pgGuf7TFGIobVMW4VQfUx1j1XM2QcWFEl59Is7m%2FDPH%2Fpqazw%2FeCslDb2zCfsRKCwkRIzP%2FADowaDcngafOLx1883UI6epRZQMiVZWlClMyn5bF7CSbbKjCvjqrGTItBPoJIkBrWhXHqvDhY0xXzaJtj9vezgyKJgZiTyHyUVkcYFqybVeewL6NJueK0U0hPFpDTQoNfIV00ciMW4C%2FF44R%2F4q%2FkfGG%2B&X-Amz-Signature=cb45c78681c9e75172b9f4ecc3a5a49f5b828dbd64192131e5af10b207b5ff3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

