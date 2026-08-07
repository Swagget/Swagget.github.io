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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PTGSMOY%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T212558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2F3Cs80b4WFEZegdDBSp144XW3nR6USnMyKfbtJhZGgAiBZJsJ1coHi7PTXpQ5QCVexYqCKptUs3hIj4XvgTmyv0ir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM9aDe9JGBSSNM59CHKtwDnR3XrbKuSWPImLBEFdpGHSdXIoVCz3Xr%2FUsmHbFfsOn96NOQ8briQtKl8TfPkpQz74P78YcMF3l3EPxsEZT14tc9D%2B5AGxebBngw7FCF7HtodeDzy4FLZf3pbLUx147JZJ2PedN7D8l%2BHju1ksQLzMIdrydQBQx%2Fabo4AxqcB%2FbG%2FZ1SoeeUK%2FR6SDMwOFJwlqNIMVgB3QP16p8TySwErISwudgJEbyTCmc624Vq91%2FQcWB0ARhzgUZGxSkb4zTTKoozDBjB9mmWcJDG4nQVrI%2FK9%2FvZKFdPKappCdvnGDgst5wAy2GKiqqB8RBGJVJ9uqxsE7gv8nnwZ1k1AwCmN43ez2dcqfqKDSfMauCFmSX%2Fp7zhBUuCsFK2%2F3LlKOYuzhkmde6mrfSilPQC5rcA3Cw7tPVBHE5vxcFewJzxKQF7avA%2FDaDz6dcqoemmcId3e%2BsA3VD%2BZnQzCGLm0trjEFaf9FKbXgGcopk7cUERJIjIpm0guclS7XM7XFt59CzEZLfGdVAXjksEQD56OcLy4g5zmlqmYnEVVLR0XdgNmIPbM2p5zbjW58b5t%2FJATfddymtHL7II%2BgqU9zZiVljb20OGC8qkHPhvEDGAUh57xTzDwBNY5LwLrxpYuGYw9%2FjY0wY6pgETr%2FmQRLW7cEVcXbjZHiEsaofRt6dcx%2FzGdVGbAvcAQ2k8KI8gRSkJSe3qPgf%2FQpUKT4biWSh%2BqKeNtHH3mhBLn1cOqrSkiUepXU5LJv2JJDDdeqiBXuSUVpn0j15ZLnJhmfaF8%2FLMoajn2xKfH%2FWng8emYLO4AAoiZrMxP%2B4KM7HcHVk0%2Ft1i468z1%2FdanX5x1fPMm0cYvnCROCX2ocfaRXPzYORS&X-Amz-Signature=df560c09150dec596a7a6853a20a5683d56262f1040b88be0fc3d1752b72e319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

