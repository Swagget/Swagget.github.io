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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JLKXQRQ%2F20260911%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260911T152141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGwB4H3d2xxlOWrdJxUwfgA%2FKooe%2B9fWCoppCqvaRE6AiAjli63lowyh3eNMTkx8TsAecLxIhm6JHfpK8%2FqrXL2FSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2F7%2Bla7QpVfd9lJWKtwD%2BG2LLMAADY%2BZ8Nj2p6%2FNbXZVSnlHFPA28dlCp2mUyLwzZjiRWaiKxbbmoqRo3O8EZQ%2FGQtlBiGYWlANNsdmDw7UEmhoUAsMJbYhIKA5WRBk4z7wbzPko%2FX7cpOSRoDASANjW3UtMQVOf3%2Bez2aCiCMJ2Jq1iXJ6sKxpAfQCl%2BfTspwunI%2FfSywgVDvx8xzjYgyxtQzKHwgGHLn9jsw%2Bz%2BFEEYoC%2FBfmMS%2FXRrkvx%2BwXo5RhDdhAk4MPcLF8aXi50nA8bhuD%2FYWaQYNmoD2f713myb06mEhzB9MazfavjLxrjCdfE%2Bj8vPnCh2pDTB%2BUcKT2D093D3ghsTwJUY4MEu2amhsA31hj3pBtnOE1B81MP7SZVl%2FqV05RO19944BDldapr2Kn6fIEoflmudB%2Bjo9EvyIiWcNOobybgpkQWE7xhNuoGRg7BQZk4k%2BIC9npEnnmPy2GU%2B5b%2FJxL5ia8%2FHTJ1RQ9k6KPsZT%2BYUs%2B5OCbrYge4UY3vFMv0%2FjDB2TwNs%2BxQrgLAssmIB%2Bv88X9WgZidjHZr6nop9r9QAyiw%2FWWAkBxoiQLsRrvR4gP06UYmbaczjOXKfCnfQHfLD7AMRNY19fQVvp%2FyXDRrWFiWItJsc6YixI8%2B%2Buw1Q08wzbyP1QY6pgEWyoKztXV0TRgAZ2L2N9nCu5MlWHadq8%2BK9ZzlKYrene%2BJ1imcCAD%2FxLcDje5b7q9HVyDZ9ytBfM76f107H3%2Bk%2B98iHoxCgC0HlKg8eH6x1fQMBZJZb9HoeFayHuv%2B8DKUgG%2BQQaFhrgaEhfyouQwBUI%2F4YALyzju8KpOcWRQywzZLRGIVCd7sSlxqok%2Br7RicAUcbVl3HCaWrXBLf1pvNC8S%2BtWUG&X-Amz-Signature=22fbafce5cc61eaedb5fa82395398a8072edffe927e19e07a240adcedae04e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

