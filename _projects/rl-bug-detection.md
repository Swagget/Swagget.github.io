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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FH2RJC6%2F20260531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260531T112414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHF2sFGQaWl%2B1Qk6QFDujPGSPFLGYrmnT9jzuY4yamwVAiB1aqMeK45%2BOYTUGQkNmfHzum1i%2B1eyRMkl9Zh25T%2FQkSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS3GA%2B8ddBGnyMwg7KtwDxcKtAw0XbBurAZVeSlABzothgEpYwr2zqaB3I0ocMqueDAPC49px5lp9NYXF8LXgjuagEb1%2FFjq8YtGl7dO9VGRCApfVbh029G3mt491j2UpvsRw%2B%2FoPDfUQp9YK5EY04tyqYl7R%2FcavIxOPKie25y5izVluCGM3KX7ME7VhZmGGCS80KO%2FI3Cu2rOyS4owhUEMFRfW9rarTLFJ4uVyw2DO9CrGiQSSSi%2F8XKgKI8BmHCN2J7abaB562XSDXtoqnw1F6DyoIm7zHSYgEt1cMyIGe9mjleTTTXTqoSorVN3THizh9R9YpMoJf7Y8rQz3nMYgYEFQMkyPawti%2F11mULjJvHVphdyTAw8m6oJ%2FAMEvvS8SuImlanQPmAuiLKzaY24ZD%2BfZ1KqbLDhAHsxCCerhaIDGBxhNoSqnyDWT5piTGbtKmw7%2FJ0Fqszn3byeuQ9fMR43krOSBExIx7oX1OivJw4p4Wv%2Fph2CU%2BpJo1U3%2B3EMw4Z%2F4fxlU%2Bnrq9F%2FU%2FS5%2FHFvp9%2F6NBhj0I9wcTM6Lbb0ymgsaBMXuIhtMHNfdysLOScDJ1r%2BEFrUseDqdojjySGaNUJQ7pe0Me8HllWEoms46zN4vWs%2B5uK91JbOnid3u0xe1NgJWw%2FUUw1O7v0AY6pgFR7Ot2T%2FF1uFg9HcspJZH8QaY1%2Fs0ELSIZCEx%2ByV%2FgsgaKX5WEGLEDqoGlfvmivZsFJfixJPN8oFDBc5Wvr5%2FaJ8uw%2B6zgCl8%2BSQF0LLMtrITVwwa9qLTHokWy5diICAlBJ48Alf2pyPj8ig0g0sFl%2FU6ZOhT4YkGfzocTw6w0nZAAAv%2Faqjv%2BBBpSDxxT7jLxrmW9aQhMCY2DlxlEs7eJAZpo2h6j&X-Amz-Signature=92df796a35e95d2a1a3f0b92cdd28cf466b9354ddd9f75339a8b0895c5763015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

