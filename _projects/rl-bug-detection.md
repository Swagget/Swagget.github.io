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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NM7PB36%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T221625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FEWqFZFV0NO5KBE8XbQQ0Eb955PVSdFBIWwZG%2FJxuuQIgUh3awQ3f2J8CBMEtdcvByo96GJPF93fYVzPfFlXcnxoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDlqjAVmhEPPcYtg2SrcA%2FnAOPjNBSz6VH0q23IGnqcwwIdlIf6GuqwpcxSNxidAj1tYA1cOFjBG00DkfMQQJokK6x1mU0OSOw7LxzXfUY3m0EC5A3Pvp6E4qRC2i4G5i0dIQ2qW2Wy3CJMKW6cWBZiDWswqNQccufrDICQLT48qVbr1aBeR2%2BVvDSKOU%2FOXG3NUNe96cpdevotzK4q2olaCJfXF%2BVkMQHnhx%2Fvuyco46nm4L29CefiQCWd4Ndp4aNh7P0Fp2fF8aN2QFMiw2O2At1X32JrWeHQqrGiEaxYgr8YyuVSJ6NhBT5GJGiVgx%2BfW5e0eVBAfHc%2FhV%2FhK6rV%2B1R0ZY%2BH8qemJsBpHZl5TEQcTZasw1bYPAmZVJf1cUXAVR%2BFfhG1yLOiTaMymodmZ8%2B%2FlljzqUbkUJvUnk31Bo1aEempVaX2sP290AhKgbRlrlw%2FAwfvKy2exaD1TSfkE3p0phM2o2hDh%2F5Fytz%2BkCwB9A7%2Bmo%2B91kzeAPIGDoTjo4SvbdZuF2%2Bd0fLR%2FMO5rMFKG0YrKX1txCMjgPuyKeDljvHkhG%2F0We5Uz7FoVCIHz9c8bQS%2Fbb7jRtpObfnHrCAFk1%2BEm1bxth8lCNAwPhYXHYY262Vf3FBVDNpWIuncP4pzV9bV%2Bsht6MInL49MGOqUBBQ9U5KuZX%2Bf87sjHBuc0ZO%2F8wJd9Kl2uHWQQU5zwtMCXUEqkHBZ78tk5UKi%2FWunF21DPPbE3dXoYsENgWsIES6frgXE%2B2P9y2R4U3Ff%2Fgle0rb%2BWUkYfITIZK4hyQ67G2vEziQiZcGeT%2BYFF77R8TbXcbp%2B13gUGQMnnB4NBD5wHJuaUK5aWOQZVOa%2BEnECvkUNAz3mQUwBxbXkzFL5ftxa1k4Bg&X-Amz-Signature=753c2fdbfc607e416a6e2200d063f655afac4b2a77c15167aa077bac524264eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

