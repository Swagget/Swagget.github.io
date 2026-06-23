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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FNXDW3C%2F20260623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260623T221310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDibgkziCfv1NuL8XzIzuiW5ht1MKXmQd%2B9fKXlWuao%2FgIhAJwYFtcdg8yXjWeS4hZ51PFpmwBII4SelUWNjde2sgERKv8DCCYQABoMNjM3NDIzMTgzODA1IgwwjBOAF4IYx3Cv29Yq3ANbNvbp3XZnEoOSj0gLdaX8Sddu6goXOJeyC1lRTTEf4dEbzCrnCnoWaUXlpeqfiab6ObBKLnzhPkNBZTxzqoAXccpDpzl7XF51CTnDFqzo6OmlTQuuoyiw5L9SKcZLgRmUaeelm9EI3HHApTgqy7jezP6kdO%2FIDlQbWh2P60VFNpdZY4YZn1v3r7b95ehgnqJSg7ZQVvJHLkFF5qirz3hr30FDzldXiCjkEu7TpuU0ZL3P%2BYVvEZQqHRYwh%2F9wjHSZz7EAvS2s7cli8yAOltz9QIqZqtIDXm7OAWgwg4xcbEjSmgmn8M2IqFX0XK1gOBJlqFDNIuOTeMEovpp9FwyfPf9QPoKIirPQUOh0v%2BfktntZu%2FHINuKqcPnn4c5YR3QNydohLG2%2Fjo9%2FWrXRxBADx%2BQ3vZEi%2FgYjDR9HjKuiLFLe%2Brkvuq%2FY0LE9afFKM3zksluz7Z7snhPa5dVKrvaBwlSJDLPabx%2BfyGQ8EbqwXNDQyT33xaXpO8w1G%2Bp2omJ%2BXeZtf4Nx9cAZvpVZ3Ro6u65w8vkziCB9%2BJMAD1BWgLwilzWP%2B5F9YVA68741qIbfLri4QdNt0yywgivPx3pOoQ04z23gAWmpMwai%2B7gS%2BlBGAfpSqdPVRfj%2BmDDN7uvRBjqkAacaLiY8ZD53zXq%2BoqjgFxsm2bP%2BrvAYmHhGOhncIZDFYymsFhzc18UjGbOahOLSzymk%2BcF0Nmk8Wu%2F2gLLQdkV%2FT6kJO3ceClRQvJHa1lOCtMRwdjoC28scYCOkFNEgP%2Bd4N%2By5dWEGNOnjL8yAlREo%2FplWYpLEJ7cebFeDB%2Fm%2BvDMj3oOQOlcFUr9RjhXr1D%2FcgLV%2BwehOL39q%2FvsIHt4Uc7cF&X-Amz-Signature=f8c826ed699cbc4c5848a44b2846d07760d775ad69b80798e567567f202005c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

