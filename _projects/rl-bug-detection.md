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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VYUI5QQ%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWBVRNSfCpO%2BuY7N7nlnqjzfyQxSZHqZi%2Fi35WlZQOxwIhAJruH2vzXCSfI9W1vOgzqFCa1UjUbuxz5kb4mIxnxfjyKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwlt34015YA2NrA9qcq3AN3PhUNFNVaEPWGedxmMdCJf31Rb9%2B7PqTtGu5B%2FE%2FvmYKpco2TdsaxgDOFGDPh5IxFMDnxlazXOgGzmg6znk4ccCS5APZgKtueGcWqpZb4hWAJFeauC8WhO%2Fixcbb%2FQYvNqS1TwhsuiNg6nhPfxajILcUGyirMeeNcw7YIdcg4d3nwcMYJ%2FzAs42b%2FlGqiqmXszo8ZDJX6z1y0KvJvAazUpHYnb1HHHMe%2FJnmIVNOpQjFlCp8nmBepRcBXVIX%2Boc%2BqMWZW6RSFYjGAYFJqv6sGZXugm7pJs1C6g8v8pD3ujM2Qu3Wjfmc7yiYy3jPKpu4p%2FlPtZ%2F93F0sonx4O9C3a%2BJN%2BnqaWVGXekuq2%2FXG4kbbr7zoqsQEsfVIohrJlvyA4sL4GqmCqoOkSdaLH5vr%2FN4Audhdf8pFLihIP%2Bqn%2FFDkJTiHzPxTw6%2F%2BZuDIKH6bBl7BE4ZIPzQrKXvQ5gB5P9LhUrJk%2FkIzeZCRq1fvDqIPARemxo0jpqfb87ZTQsC0rvMBBepFuuoSvij3r%2FB31S%2BUlA54BAMzlxn3lhzwwF9XtI4qfCJmx5gT6c2IhxDDxUg6KOKDUDQ%2BHCIHZBgkSRMgDdSe%2FnaW0DpUoEVBwFWsoyw%2FO0A4cdaqsTTCT%2BrbTBjqkAVAyKyv1Jk3%2BQ5EfdjjKStqRkxYB4FNi6kmWj3rYdlAOHPAAIplhHLvwn6%2Bq3wRWVKwT9ukIJLTUozG4tlYe92yAhsi6t7ILHa13QjBRTAct9AMgWXs12PKEtT%2ByVZISR%2FcK0uLDwMYMByMahlC%2FtAbf%2FQxeyA67Q0sBzOZnNdPomluGqnSBhCk8Poa6y78DSIZfqvQ6%2BuxOUtBGAvlgf38ljWzW&X-Amz-Signature=2ec3bdd421235feb8c8c88a9683465393bca019c65d16b9d9f34905a42420e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

