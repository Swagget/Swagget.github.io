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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPB5XQU%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T053955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIGo01dN8TOZeoarxViIdve2BU2PzIeL9%2BGaeiUcB%2FSqsAiB6YXbluKj71mQ94Yfr%2BOuZovRUGM22c7dNUKM04X3wrSr%2FAwgHEAAaDDYzNzQyMzE4MzgwNSIMfpGoQJSccmkp3BwYKtwDJRHZdf%2F%2BDOmeYznwAPABFAqLJWaAy7NLnOrlnu98sRwQ%2FV%2FNgDc9UCaZ94Jx1WJk%2FeewNLgn0VY%2FbCJsIMw%2Bl6jTmGyZSIdDZr0BX0ig8uk2T%2FYSK2oLw7WShFn%2BTkFMvBrP0%2B4ZzenFN79NehlhHGu7gfp8WC21%2FeEoaIObpJw94qEc4TmjJwClUBXx2AIQl%2Fxx6IGqhCoOLUWT2AEe0pDbhztFiO6LEQQABCQMqR0VMDU2PX%2BiXNVc%2FlA0hz68e4Z3%2F1yAOltxu4oGEXEjNo%2BxUGgwXHy3v6OsFJ6vutKYTzmJZR4kRMTvXVBWB9A59v0LK8g%2BaU2RYIapq5fZRcVWW3DGNwWdTO6TLGeuj%2FhfVAEOGcb10%2ByX2RQcAvvPKyVnPvw8gj8NP8c42GZt0fik0fhL3Fx%2BD6O2mazc4S8%2BcgOEgRldnJN6Qh5PdLO%2BMskYAElXqkOI59eXsZQdvnkMVrMDySTNuDrKb%2B5%2F9RIe7ws7SNCRgdVay6huZLM%2BMcUpKvNDHvb%2BvanCHMPXnhia2caejsGjwP9SQfB1NlnvnwBQwl51s13NhrdPQpDCEiowg%2BY%2FIj6fu5q9uSxqlY%2BZvuTcKCpM74m%2BhiGJPZ3UaXNET5gN4zFgUwUwipOd0gY6pgHbebGtM7D9b%2FLBX6m88n7EqzlglAzvPJDzGaIHyoQ5SuuUXxGQtxkArXfWeoD6DG%2BN84%2B%2BTBpXixFRWHL3Lyt1jSXFZCwl6fSVqI57WbbkXPHuI8HcfsFkVEgWBnTR%2FitdZVHaXfgscqfXunERhsWDjVvOcgZFWm7l8WGwFb%2F6H%2BF89245bAoCK9i%2FUq8W%2F09fRbKu63jiwzDTPnWK2sqgubgcNN9Z&X-Amz-Signature=c03253b824fe0246793bfa4dde0c3b45d31d69195ce11661dc2c8a6912abdfb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

