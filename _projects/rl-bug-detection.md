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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAZ72WT%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T015644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIBjVR7quaV91XRAUWJZuAjHEokl3MDYACvMSh8RnPuJgAiAbE2QYu0yjkKOqfDJlrd0ck1h81vv0llIQcmK6k8f5VSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMmg1xePPvAlykThXTKtwDDTtESCYNQaV846XmkTm7uhLDitTd3Wi%2FUYQv0sH%2Fu4TdZkWM3tweMsKjGnG3Y8G5A2hXStMzceMWeAf3mR78eNWzXVloHL2mwLFb4OMGKl%2BjcNsjZ%2FU9AFSoFXA28xzaZz6GYL45cGE%2BQzbEeSqWKNcfbeXGI28e%2BG1%2Bsw1MEmZuZ3vQUc3vZsvUx6ZNvTXTUwR8%2B6ulkHD5VWvamtuobffj7v6mTEj8nZQnfPkoXs0fhIn6GLgLlxzvHGABhlsr9Q4hH5BU1PC92K7mq0ZSvB46zEN8Z2f5lnkivTWvU4KBPYTBaGtxUv%2Bj898EdR8bZAXfc3oyVoJbjnC4ayiZRAE%2BLDmzcudI1qWhzvH0YRElVNN8f6kr%2BjRrYSVyMO37W%2Fw3uYg%2Bn0DatRCFD6Azu4AaVV%2F4dSnMXbmIdywuon%2B3zYnmIqUbMJ5xuYVho0FveFOfSUg6DoMIBIFGZ2pjAEXBUs5C9AjG5%2FFIkf8c02Eur%2BosQM7C2Oh8XodbhD8Kqg8iCgBXbHKmKycLw4IlXkHDtmVI63ObJ4mpz5WdurOu8jUJBPyDp3O0PEfqQKEiolku4B6%2BR63q34%2F8EnO%2BWmZQA6JFucU%2B2Gv5zH%2F42G4fsYferDRZt1M2vEUwk9js0QY6pgGYL5yKzHCjBde6hGyw4QIbl2N51ID8u3EQtiHKmsyskLlzQRFSqas5xtbshfvhXD4Kf%2B%2F3s5eyo8vlBdLi7gglpI1iSqZEzDIalH3e52HrqkGlfCl%2F8gG1yE63NaVN5xB%2Fum0Z5HwmdURWBp%2FbqmKtkQUTUwBsW7wITYi7zinsPVVA16oyG3bw7quBtEqBQnlKKlcREl0QC9uEIEZwCOSOf5O72QWN&X-Amz-Signature=d7aa8bdf0560399dbbca4b45f6ce4e1834697e1d00e4571478fb011db47da956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

