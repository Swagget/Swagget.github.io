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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MYDGJPP%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENrcDv272NBDsUWlyvat8k%2F3sssR83LvLoFTXO5BNehAiAkDoZzeI%2FwPYK3WgsZA%2FU%2F0mRkx%2FTf8Q2VWXit9VF4Dir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMRG0BEWmTWhrc6ykdKtwD4Aty6n3UFkcGF6nWHRjY%2F7uideZu20uyTItNFDoWRvvGuJYtnl4EPyjUCjLekAtGDUZUAEO4tC1bLbAoNjpoZnXchm2XtFxbBNwAnRwjvvndJHmGtpDf7gQxS4Fb%2BDTkHjKKj586Ztf8UNbXMEUr4SUHRhprCAk3k9lnp9hQVL11xGyJCeQhB%2FeqDQfyw3RPOPWdR%2BQc0a6XYw8Hh2dcFjpksicbwgGK95XNsTaRK3m2AvC4BvW0w%2FDmEOoxHnqSWEThGNYwV7icYSNAp2Un1fB4pZ1VCVN%2FXC38lIM8onVXF2uNVlWzuZ%2FMCc4xhCG0nDwlBbRXoccA3FibBpXeMtVEpJtFNis%2Fdc0NvpmGoMGWXSfJ%2BhdaxVN2NF0OZXpfmoPpKXfPgCDOLAZ7H%2BF8h1LEij9CP67EPYF1ZG7PiHQ8MuaoZfM5zEPOBWm4R3Y7E%2BXGHzrvpcHANCXfuVMQDhBtwGlJhrHTQAb9sP4CxguGHzrDCHc91tEHzcq8pz%2F0Q36e%2FqQJa6ie7vy1sc7U%2BhbiXbeNlKVZcM60ogl5YP8tsXdvbVPrZnPmGML3ik76BP6jR%2B%2BsTYcAYanB%2BkG8KCFjr13Y7XfIy8HeVD3AuB5Oklqf%2FOVAxf6D6kEwpL%2BS1AY6pgGpD%2F%2FSICv0b5AJaUHm9eq%2FIoznH%2B8AbEojzD7lwuPr7UsbWl8paTNoL4jvbK%2FbOBPAwGv%2Bfk3jIgksB5HAoRAO3HJEA%2F%2F9SyeoPwg11qyGvfrCLel92J8YFeF%2B%2FtOmIybV%2B9KeZwc%2FbLkXKD9pIbOwOw6%2BkiY5aRiDKUNBvXhZw8FcH1xWCBFEOFORCIraBo2iQlV7El5gEV%2BLD1zYgSh%2B7hqnqVcg&X-Amz-Signature=33a6535e8d8418977d627460a96dfd8ff069ce019acec87c9787863389254c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

