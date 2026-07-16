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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7UV4ZX%2F20260716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260716T180605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDqeA4svHTxB9tNcKThngKSrt81S9yGjVns3T36t6JJdAIgZtiaPNNPivOQLfbHzN%2BBB9Q5WJFz8S1r1zsav%2FAQTIUq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDI6aL0ngdn%2BFTSg95yrcAwS5vcWI71lc2skO%2FJxX31h%2BIj0zuH78RIV3PUi07Z4ma0YZNdnFasFkI2%2BJTfqsU%2Ba4xAo2Q6TIRCwbhYf71zIDUIQlbTug6%2BHb5QP4tzkUGumWCj8dFzlqaeWaASJ9%2Bc2kYkOxgBZO%2Bc%2BO2VRqUBanBM1MWfsvd9%2Bu5Jnt7b7NuaPMXlaz0Dy%2BVWbzbFlznlmVoaGJs%2B%2B4QYfGIPwHnZO0uGoBXWU%2BjoMdulAN5HeK7n8teK847d6a9LiRZMuhWWFjTypfHD1nvrt1Y32O4zB8Iu1EFMHZTckT33TGSiPt53nlC8zfQn3hb2ej7I1PF9Be33Pi7rQaKCtZ3f%2FnfA3e4ZKQnmtXxq64nCQrvVX3OQ8S2lFUmvNZoonYvEk6P4AekTMdxBVCFV2gVQImsfHeX37oly8DUcIMA4DEW%2BWmg4Sm8pmqQVoEUy2fr%2Bz7GVkz6wEz9YYoR25nGWWVW70POXzCpJypu3v562Aj5ouYjAmqqohbMjz857Q94hJ9iSQ0GvFxzicsDKsHHgUpkaw50bSaovpBoDRVGPP9enFdE4%2BVQyV6S%2FPtfxGgLRk7V6vT2toq4yUXhyxJONrJXhF7N3JHZIC%2FXDt%2FaCocSF9RY7HocclQgmgf5grOMKfD49IGOqUBOIJGRPIRflCqZsPDhGzx6zCyJYYpvq4xcgwI3EtqeLl9xiaIznXvLswC%2FmcYAr%2BEDUhxDWbiMxmI9N4vxJW5L7MPaDfarjVuaxQoq7DKKaV4IO5bjUM96QAXfeidYVnIA7sizllh40rnRgNFGI8A5ReQeF1BzfLNkkniO1jw9Yu0fw%2FUGA2GiT3Vud50IGvM3%2B1kC3mH7rPPgiBH%2FLxmlILnKXM8&X-Amz-Signature=44366f57859457d6cd0ba8428a0c54bb975e32e08a1acd299210fcbb3ba66ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

