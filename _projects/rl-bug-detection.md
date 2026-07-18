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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIG5T5F%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T233940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZQ2gKry%2FeOoj6xhTQ8Mzwu6m3GM3NpG7N%2B5eSSaRHdAiEA9kSqOdDreSCqV1RRVTi4bUQ5dDLr0asBM0aUfKDqdRUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCN%2B6G%2FN17VM2ALygCrcAwllwhVTGtcy70FWSywBvSipudoCZYzQgP3bJgm3gqeP2yhBYKiFAv%2FaFRJwkELVbjIghRlk3QwmRM9%2FsD%2FzPl%2BuUDFKCMb7gHCPKDX2wNiNNPBX9E%2F9SQEfTYXkF53eYDSX%2FphjECSzgvgSbRQ1%2B7ZJAVO0C7IdET6WY3%2BFVCZBCqcdAlq7bvjckDRlt60V0LJ0sdFQ0jhjd7%2FxjBSp6N2KxSJ%2Fxa3F3oulpx8hmel731d4beXIidx%2Bldz1s2TnJSJGDkSG%2Fr9%2FrzpYP3ACvm3rBw9zHiS2bk1UZeo81n9YBRdOBDfRUBHcAcJkOscRyXCXN0o0vL%2FaB0EHkYdHy9KhShlVbt3bElq9iHtNZK90GVsa1o1uabZ%2BiBmYccVTt1x58dw1CwCP4z%2Bi85aHjZZKBGzwGq8cTV%2FHcOR3bGOsl7%2Bjus92eFOZA2eGuFRJvs0q36pYkidjTPo24jrvBoWtBnMymj0Utf3yy7U2nx81kYK5nYPFC4yZ2koWx3uSdBsJOG8klc29EgQJqHnFRRpVwUmqvkwf3ntBzGZ5D6XstGeSJL8aSgAWtBB1DU5bx%2BdxX5cSnfGK2Dvk0Su8r7Hkb9VwJ2aaojSgZYTaj%2FziDH0neiSOcrmny%2BBVMPj479IGOqUBWFyotSHqp2xVD29%2BS5hvWFjEg414v%2FsW63ebLZJjaya%2FdzWgFFsDm%2FhTERBhegxP5xpRmdTLxw9SgbKukwvTyv2IF8B%2F8HcBpMFlVu4zBXw90gYNgdqyNXmyOzr4Z9b8R9AQJ%2FM4vs3C8sHHZZ5pUQ6%2B7x1%2Fe%2FxAOWoUsYn7X%2Bb2j%2BGU4wfehicJsC9%2B9%2B%2B2IT%2FQNb%2FMkjg9ndp8iIxYDxTuCg%2BA&X-Amz-Signature=0eec20febcc2227b5f3e5f2a748bff5b147f19f706034cbfa6d1556fc9bfb5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

