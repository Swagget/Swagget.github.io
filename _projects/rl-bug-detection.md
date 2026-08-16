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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EWO7P6R%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T042320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD1Ykf2i53MLU3l2FzjSfyBNSzgNg5UskdwyAW98%2BDtrAIhAI0bHu7rboP4%2BfJ6UBxEiwFvmOTcfUU%2BRj3lFLJotToCKv8DCCEQABoMNjM3NDIzMTgzODA1Igwcd%2F3LYRL69TyD7B8q3AOeP5MdZLiRgCOv8%2FSLCPQj55asriDMr2ftg%2FEHKWU7RU6RZMosbk7ZhICGnv%2BWEgMad5Jn1z%2FB7p2496%2FAXS%2F1xut2EP%2BifR0ga1vJOxhuhOnHWHFJ0pzYgsGRo2jtWOD1ZCXnuBhb9uB2O%2BC3c3PgWkE6ovlPL45sq991PLkeQKWrf9LmeGD1CQkoI12dljJm2bLpyJXFmb0om%2BzeUx1y72ROm1VDaM%2B8VeXKnc7yofhHWGpplD4TobJ5Bvzy%2B6mdFmzdodt5LmNPEv2uPt0We6nzHvjl5d2wk%2FNkGmgWl5wgutEfeXN8EGq00TxgW0rW3cQ5Gzg1gfvK%2FW8CWc6ICbd7FUvsh2FSeZcRDCvMucMr7g%2BUnC%2FUFa4EI1%2Fl3HWMRvzFrbXtl%2FKVBwnzXbVbn6HkY7jXvgfLH0x3r2aZqhO%2BGzM0LnV4A56Njhzr4%2FRWE7RX36K1ucPV0QKaYIGe%2FDaRAvAxByjTDoRskMtKDBep3aVrCAvWacJfV3ghq%2BL3MNnvoxN3LMTsJneF0TSWA6rU1F5TlkE5lqeg43Hu8miPkJ0rjsk67tl6Xaome1ZR6w5qqNb1qdZzndDFUXFzW3ogomU6Con%2FwsJaV3TKqbYbbmBf%2Fry8aDGU5jCK64PUBjqkAUS%2F27pXi0IENYpSQwrFF0I1tJj17nlEANKHXG94HzG9LXgrS69cUyBaHoQ6DKp1UJVgj2TkdhOjZXXBqSjciye7ceRiIfBs1u3rW5JK9CZ1oou%2FHz2%2Bs8mvusv0JnvRKmXYUjcci2iQQYQozOu29469XLscNfnpAZ%2Fe0g%2BVdx%2FajDUbaJnAqsYZ4vINPp1tMD086ZB%2BM4AI6JmBFjRlGC%2FMSPVe&X-Amz-Signature=a252643bdc2970eab8e09b76838519c5e546912d4449f821f8c8285897a95b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

