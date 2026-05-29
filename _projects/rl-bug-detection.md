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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWC7ZPQ5%2F20260529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260529T143319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoUxM9ESHsXzciE0HfaeNJ549ZmPLmfBUC2nIGYp7ciwIgdgn86n8yxq6hFqRUPQrMyjt4epWLN9XzjqviNdyYJzMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQpQ6zZgFNG3LCsWCrcA7H%2F%2FHnCAhBLyNCLEPhWS4AU2h22FrfN%2BqEczfbgoctiw0RIs%2B2zZ1%2B6DcGvI%2FDZoBdkdKvXZ7zAOnwy6di75s7TTA8wcvNi2feoWmhcFFTWRdxP65bNR5xipWapo1lCBejguAYYAwq%2B3TjaZoWnpfDjyovxM1pt6eEiyLnHIxEh9qfkAnQvH9NugbXHPwwkRDUUuNUzEeHJ6qnW1OUezZ%2Fkbx0i6JT7E2tqEfYG4Zut48iCTuun36XgWPxzmFCWSvXsph2iusr5QueylGry7jc8q%2BvvVmE0zV83uBdJTiYQeWTIMOWygDm6eYYjEXRj8L0x8aJIu474YW804bRgGLufX99r0bGvYzVZvjszl8KkgoIyh2Rq%2BkU0lONrvOcVwYK5Ab%2FQWUBw7zH7Tfva%2BUDUVAJBCnVQNdqcTkJ%2FH4OR67e%2FjUCmZ%2Fsn%2BHpsKlU0UQMqiNrfUfadd%2Bw%2BJnbtYcXmINpuxdcVBta39QrwILjxkVGz9r%2FjWT2Xt6FY3cQ2adPIyKk31KXAvz41KvjhG%2FFJMddM0HsPWtEHRXh7ZfhR8CKQPeFkNB9oa2gP%2BxAf2TjR7%2Ffdcu6%2FtbSEjoLcPazWT4GgIeD%2F7QbcRonvhtasqIWrgKzLoWmJNg2XMOu55tAGOqUBsYrVLjbVqI82Fj3omqrdMVeR8Wj7TSSrrWKJEHacJveC30sbVG4a5tfs%2FPfG2L%2FrFvv3DwSOmQaLJwPUtkjQ%2FTlhPp1UnqhpJcsRLR6CCq8naJm0%2F%2BT0A4TjLZSje4BGyzhIik7ZmhGkupsQC%2ByMhGDuo%2Bxs6DPBZq8XDWfGDiFbdFe4d6SfHzaSzQDP%2BPTHBQfnbYR5Ymtwqy1CFCMF9dn%2BIMZZ&X-Amz-Signature=38ba09c313e48df7f18113a888064c40caf0303e4b902298ffcba34677beb204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

