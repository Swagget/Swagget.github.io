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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZJTK6A%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIG8ZvvXenV8xCfEPM52ciARrSZlsq%2Fli4PppNifypj%2FZAiEAzLRVrm1bPoP4dhd4lfnJmvhP%2BhFLHo%2FLbO2oRmCM0wEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDL%2BrFxAA2tQmEkO31ircA2q6jCgmV7MGYYr3kzb8dVAXes1oHBxzBJO%2B5pMvfbzrFakxtmeZ%2BIAzea0A5eofA9KO0Yox7VmtUchvanno66kZoQtu%2BDrSIJBOy7k6wiTWTZhRV0eNdbiJMcIJaCYFfl55ExZss0Jtc6cKPuFGOulAXcjhUdihXxTf%2BFq1DOsC7J95FiB%2FWnFOG%2BwY6BzsIO2xSt3WPP4YzUH6b5PK5YfefmykgqtbS40Yiu56NjuNTIi3FwtHP08qT2LMZM05SG4sxQA3Q6Yo3nYqw585mFDQpDIXYbJupiocTTWblZkIihKxGzmYOoAfp5lcmq5yMMGx%2Ff5Uev2QnXM%2FQHU7S%2FJut7Ow5ngo6KIuNo5u27CpJF%2Bo1%2BGeQJTU86ROXTpLABnDT%2BqrrMFzp2TmdkHYcbZV9cuGXnUNPxItGxka%2BFKn2AJIEU1qQ0CEzyM6wYqRiQkzTQoBaZ7P7ZhdE7WnGXvQyi3AejI%2BIZeaQAU86KULArHFVoiMPWgyoFjBD%2FD%2BmzfXRL2O3N%2B6cDcdWcMnZP4tvUvWXtptRr%2B%2BsPakBJ985GOzwp3Plq3hwNUFHMlIWkekqdatG80hMQrq%2F0CTjn%2FK9nEzVDFOq7paBUIccMLSYNTvNVDXtlxJMs3TMNmmkdMGOqUBuVienq2dhkzLhROVVbCoSEWHlQ08GA21Z0k5HHhi1GXijR8uLgg7QoURj6pZpaTSLp0TUk1w6AB5YYdyAE3b7U4t79x19ukoS%2BG5dirgL7jd1IqueUEZwMWcAtNIUl9O4lZPdNZeuwYD4taTsuRfUNzkAnPciHszMvc4hDPFIMf4EYuY1zh91Tv8rdzcJzBAhcM6Nq3s2TQQTwEcTlm%2FGcSrpw1s&X-Amz-Signature=9dcd36dbeb6ffafabf15950d70abd9ee03b381fbefd786be974ef9bc3c1c2d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

