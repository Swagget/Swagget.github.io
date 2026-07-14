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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Y6CTYG%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T111454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQD1V8JUQMUInkN2amD%2BDWn%2BHnES9Lo5ZSzVt7kfsB0ZKAIgIDRl24fHIVaPmrIYPce3cUaGhthV8JWM18WBdeZ6oxYq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNaPJ4TVOh02QRchtCrcA29GLNjZIev5QPWFhJD3spRA2u9Isn0hEqB0DdJP3VgRtvX8OVqk0bNnESSW2x%2BG4o7nNVR5Y%2BTSjoNyRoDv4bFFRAvTXThmLXMfG4ClvKh8Hew1NswpO2QeJuv31xTwM%2F4QzTQmDRvv9kk01jVivNlldLQVUPHFX1RYJsR840qjS3bEELe3N21EJbbKp9YP5hxTnN2DqTmg8uU7nL%2B4NRP0cDbpBbfIc%2BH6G6gyi3jrj6m9JqXad10LpR1mexCbxAAbp7ZroVSBPL5hYhJhqieRbY94jAz4ZDyctCl7MqynhLBtWL4PK7SeYaTCC%2F1n8vKCFc%2BgcHCDJ1EUMTxvAYeQICiyejotnmVyORuR0isisxd0aRVkmKGorooI6zA73EsA7vXMpE5zYun22aVJwVO5j7Uq4f%2Bve%2F50ptI%2F%2FuA0okTMxGwzP%2B7x5%2B%2FbZtHhn%2BcJz6GIj5pS3kHTT8RqzvSa1IQAVcQdJwxBBDQcMDOFobNgOBs%2FmtafEE4Gw0d8VHLZ%2B9LP8bOqRABLfaEjZmO4MMAGDu%2F%2BWTg6rU%2F6pE%2FUcYJWSNDFHm577gGKWy%2BxRpKwNYlPtz5AqPCDVb6MzqMKDBF5SLulVPb8Y3lvQf2HR6N11EHi0NFZ7z62MObJ19IGOqUBgljujqozAqKkotHCxkWpWLpqnbzRhqh6sU2IVqGeKyIAReP5jmDUDJFh1VdbIXYDaZjQitalpPC1jIlm3znWnV2%2Fvgy0Sn0vTJJH%2FrQ%2By5fYV7%2FMRJDSf1LRzJDBZ947GQ2GGBxWOFj6VKc%2FkZ0dvg%2F03vc7nEEsRS2Ie%2BG2%2FgzI1EsAbDb1tMVBUlCH2LYFvhzNtJ1x53oz0L63nOjNRavrn0RL&X-Amz-Signature=bdee708646e6a7fb8beb7d3258f610726eb237624a734c978a234fa4a009920d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

