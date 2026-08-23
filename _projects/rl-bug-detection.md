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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDY7NFKH%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIESuVnySJUL6Jsgn1jNpX7NEQ8XSs2nisZKgx9niEAEsAiEAsmRQ%2F3JSAUvOZL2XaU9UabryTjglfagAHewb0lL%2FWAsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8qsdgxJU6dV%2BxXZyrcA8i0ii%2B2pZYE2F71bz3rnEvIQ8EBhVCUud0%2B4IjbJX5%2F6uNgJDgcP0aIqzm3SJazhgnKW28O4bQmjbVsgwQyW1AAvGSl%2B0%2F3zwlTDctA99V6S%2BDb84EQC8wVBrz83Ca66K36yzL8GEZ1FmnseRFCq%2BhTcnjLP%2BdaYdQSptjBzkIssi6B5cWE0TLfX877YFEJeRKr%2FOzQRD7B8HhNQGt4MSdWzsZGIAL27kZlD5758GS3oLWa%2F4a9xqkJcuOnKEBgn9hWRR3GNMKO9popQ5NHh8IEauAKGhKO9TNwDkhYSYEpN9oW60i9sPjHiSOUgPobheO176bI2UAgqgu%2FUgngaKIZTUK4owvejA95wqSPBETf4uDh5Z1XUlCDEBKZqLqnzMJL3F%2B%2FncCg3I1Rk546F%2FVzia9cjiFc1MVXK5F%2FPuGzygZWJjW0NCyTTfj%2BxTPkyJ40iQRkx3JH7Fh06akhVXab5VuHC4umDa78V%2BTOz49znTGOG03XgN21HAAnq7FWK4%2BfxCFe9uNYPwBk0XlnGYztUdUYtd%2FbN%2BKyHqgNHtrgCYiWqKYFhZTb1rh22iBU6Q5vvFRSpSNM8WC8CiJayUyo0j%2FXM2DcdYOl68JoduZ6tkFsVn3NpsXVejsVMMe1qdQGOqUBVJsJ0b%2BCFZmaikv7lGNwA0dCSVsDSc6UK3Iz21clhgpdSLxO%2FdT1xOxuCm7F6fDsYLsL%2BAmUEiQiVkgKVAk05s5L9yvjFHqiuGRiiy%2B2yKrCdlqknuMcaAXkGi1Q4jVpmAuY%2Bw%2BCeXPxb4d%2F2ZgWcIH%2Blk1tYZz6Q9zvfzxV7oop68jhRTVP2nyLk2JvZTOA9hA4Rc%2BGqEVx5o8%2ByD24G3bSL%2FXQ&X-Amz-Signature=efe4a92dd9066556eab48fb846d143bd0f9f7359f402b0422ec3cf343b4da805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

