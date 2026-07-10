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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HDJRTG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T055720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpC08OcZXV7RybM6EyePJK%2FR6JdIxhefNHDJj1US06pwIhAOdZEGCTVsleh44mXZxlxi96gfJNQ4RZben6ZgR5w1p2KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBX5OOm7QOOtM%2B%2F%2F8q3AM7Uhn9GM1UDHW89zYFLcRcmqalMehXecCO10hppMHxCqvTqpImUoyW0U%2BVNubt6n3ozlGnc9KOAbom09tFYkFPsCbdrn7G0InxHAECi7ScAlMtGWm%2FwYnUU90Cavyd%2FIGevAVoUm2ckd0%2BFrDYPVLp%2FmFFJW8x3CXJdOoxVHN5nFVmE1gequ5Rovm9v7BoY%2BxTh940iJweDepzwvQspxvP11dF92LuiPr0VmkgHyhpuY2HoB3fkU%2F7UFZyu%2FYn2o3CZHivPojVnE8sM8JNr9jKxpUY7qFfnNUjcJGLISqofqWMlYETqA6CsVXXkoss42jFTRntUd9eAodelMGka6KW19BdrQ%2FrjIsn8Nl8YzRp%2FUFT82fBaj8tPO4F7P5mrn2Dtlz8wC8prltiIAkYsOh8bsdF0nC1ua2OnNvKkKVgn39%2BInfTBSHLe%2Bh9yNYeVwliCp%2Fx34IvgxhohqqtHKmt4BuzZSUQXEOVXwgLz86HiLQl1D3kl8dPTc7PoZtZczt%2BsSbngxDv13riC%2FViEyTo5PKfAXydRaxYSbnPao%2Bjzl4t2%2BldMEKCAkzXgl1k6hQQUufiqXcJQ8fKI2vGezTeD6jMLALU75BhKVdjN%2FjzNX49Gwyz1HLb3iaFuTDN68HSBjqkAaidn9lkh0aKhGJaNDrtrbIqg0OAcdNtEVmqGmulCdxzWr8KPreCGYjxN1mUz%2FQEkIB2CdWhCw%2B2a%2FK1n88zuUJJC%2BLG%2FmQJNxJRSnSo%2Fb1hGq8AENg6aXKkN0oIiWMuTqDlKzYiF6iQzq1%2FxHH%2Fz2HTW6FXPJ6bUD1NtHV7LCEJTfOw8pXcc9xAYqHqpOHZFpPmp6JkMHscJjGcY6SwydFPdQOE&X-Amz-Signature=286a038685ccac9982fec5cfd5613e09f4da832d799a4c93566c48009e27551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

