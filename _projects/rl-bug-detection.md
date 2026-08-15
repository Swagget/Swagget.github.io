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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWXLRXKW%2F20260815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260815T032750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIQD2GyyztHFwVCNMqqfOsRd3kwOCujzIHVOejEjEmR8W7wIfUoILwshJrRMlW%2FuVcDDmVEvD5Lp%2FlsZpMk8aPuWtGSr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMMxXl1hMK4aMpOf0iKtwDad5UCbtqh4KjW%2B3Lj80bKPQGcT3GEi5iPa%2FuZiUVlZgWjkGng52QVykbY%2FTSBYv9gV4poDeNMiGui2jZmukLHiK2ssZ28zccmWaJehDSrCCOzlPdYJwqIWCUqBVkMsIXOXyahuC2TyfW1qofAqSCrFfMe60M7quagX100erijKLEYsY6ydFLWNL7u%2Fli5udJKYil4%2BlowJsn8lpXq3M3tAUnV3gZnt9bsrQQkDWEPGi5Wa13ocgnesz2SinrA9DUthkNguOmqPd%2FMe%2FQdK5y0CniIFDNAYzDniL70opdmT8JApVecv8vm8Ygi4twEcWcAI06J4xIQCDAZuzh3EqWOAoLnubmNZJUioG5EnpvP%2BqJ642eZHhGp%2BHP6A1iPOuDWpc2CRF0lewqciuV%2BD4bWj7TL1glYuD4DpC3%2B3j3GAyGzZDpVZyWmYnAJydejkjKMnwMgqXSDsSwpyDM79LRGw3%2FeM%2BFrCJjoyr%2FC1PF2x0L5KxSYjWdP1k%2FGBj2lHZeuwW7o315OCLAGxwukK1PWalsj%2BSxzpx0%2F8QewdI%2FtXeLeIoPARkWGmZQ85PUjHrc%2BqfRB4FE2%2BMS9hD2qyS0XdZWb%2FExmdFPt6KvHoQbEEGLIJY2hZ%2B8Hr6wuFUw2P%2F%2B0wY6pgE0OaXr7N1e%2FgXtcVCJ44ZOd89w%2BxN6OXJKRXlBMVdtP750wxNYJz%2BTM2IVAZRVuYQ35fSW4JMdnm3V%2BF%2BkOmacpJKKh%2BrsKhd%2B8EW1vlXdWzsPaWNfJj2GCPwpBiGbXBvTS3lLG3VaOIXFx%2FVcVU1sWnC6zt1j0TdPQmhiyvRsgX41mi0bPidisgf9XLUPgq8sSu8FTWKp%2Fhc7nSeiP6Uan9UeXB9s&X-Amz-Signature=fe715a232be56aa8699a3e8a2a44d098af572d9da1c0d8b6ecf6fb7f8058ef6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

