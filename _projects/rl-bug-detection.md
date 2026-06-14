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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DGL56Z2%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQC8yar10%2Flz0l5vhZqiMIcSrFfXOFlfnsIV40vTdO2pFgIgHMImHqizwsZxJ4Ra0hUzqYINTaz1cyl5jmCakKGMSAEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPK%2BFC9uDUS3KTZaNyrcA3rXU%2Ff45KYRuz0KHHl1CCoP%2FRpBR3wA3bQ81xW3YOflVtpCaxgmgKBuEcTad0zzAnTAYSyWQ8%2FQyymox5UWZjcnRX2anjg9lT2eYZd%2FHCAu4oKmFLiLFLtlSTPWcqacrBGWe6BH3KiXdLK6HMRWDaELJlpFAJssorbxneN7z9ak3ULof1SFGe5nTIuQpcuEHIJWcEMXhVdsvbT%2B6pmzFPSX5bqU8lWetQGBr7SRlEjYa7usZNkqVF%2FcfbjqyEQMj%2FZqmMEEjN3Azy0YO4FuqbWm39y3fUQTlUDaiTviL4tAjx%2FF%2F1CPPEPfMo9kGtjA8U4gX3kLoIasmKYisrz8DbBU%2BLcEKJ1EHMxJ4AWj2SvqZNpysLUBnIM%2BmbrAKn0Nx1CzUt%2Bwt04hTX4pwaTR8RHy8LoWljoBXOY2H%2BSxpLh7gZhG4CW%2FGC%2BljRIC2Xfu6xo9csUheHKk3s%2BkjxgbTXjPoHzqDdXq1WJwLPjRiVW3LFa3gD3bjhYPmHz%2BI6bVQ53BO0DAkFfW4GHADGOSAHyTPnrZ74%2FJDyMBAmYPjxls3ZvNzXDY%2BhK35yvging0k9iF7R1xLt0HAzEbwfa6hiF2E9tQhO4%2Bh6uSlIWSj6Ns1qdnhfvPiUg6riQZMNi%2FutEGOqUBhK4L%2Fao9%2F0CUWxOaGeA40VzWiYEoA3QpnVkTYx60OIVe7xpQXZQ2c2cvIbOcVVlapF25bVxLDsMabKmKmfI7ezz%2BVu673edf%2FNpnV6Z0jDOANO4D038Yxas8im0VQzsNniiTBMfQlX2OouF8L6Eg0VglWG5I4lnVO8GN2l79QWdAWWdMExCMwskTwmUrLLJmt2AUzLodznC%2B71AB8SUgxyspbLoh&X-Amz-Signature=1cd215050bb4b2b1ede741120f75b1971eb297f6170cc69c1b1aeca3d9452320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

