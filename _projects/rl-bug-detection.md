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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMZULMM%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T235831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCugdTqqR1hd6hFVbdZaDnMUYAFf5rq41ClcWep9gmABAIgEBtiO8qdycOCzVtv0y5JUeNAEJeJcmRpV8%2FNj%2B%2BXvOoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDEqNwKiqJsALFi%2FaVyrcA1OGtmaRpmW4uRbnrcQ4%2FWjj%2FKZYa%2Bxu1ifaPRQB07p9kqEUKH2SNE9HDiU%2BSB5KQgdLml1i%2BFxSep9JyXlDxNvNLwd4xj98%2BDOi7LImfbqorjL91vlmNCV21WxWjj0rqO3hIhJSvO6H5p7GMpo%2F7%2FHmU4Ybxk8sY%2F2RQf84%2F5SB04lAE0XLrXrzlLWk8ks1fEqZmHp5%2BuhlJ%2FaJJ1AXsveulIATJo2h7UWAxKMP4vQqHvd2wePteyLeWDyOQHyT3jDqlrOFoaAQkm9yWMGVEkSMRncINpu6smtGGIadOp1lOQQT2vHbCWG7S1C%2FeXT587Tpi%2FtckrkTv%2FP1ls4t57DqctiKDlSgN0JF8jBkVXQgp6WPhWI%2BTSbFhJNxkRopu85h7Zxm%2BBglg%2BwaPqYYQ28ivVKHe0Wqi3%2B20jaiTFXvn6oXSHWs%2BQV0Iz9QS%2BHulO7UPA41prpCNVPznaoUuTi1CHfaf45B7KaJLG93UBeYOKZac%2BjGUwrPfAfYnuqAMBt804Qx8lQ4coYy%2FzygYGNR4aDOX%2FWQwXfSLKwMdTSe4evD8Wuj1E4KE%2FxWBIVsthFv5N0aLUGjTk5evpAed6XIh189jn9U5xMRF3yUNbkplu0udNX71mxxYrFGMMXpvNEGOqUBpZkjOnUN1F2OIb8IakfYcjSt4xnZEu4B4a%2BIvMhIin8aEVenW4epRSGb1JK8doFePjQxJkNfzDXXtFJgAnktw7SX3M49gsc5T55MbkHfdsRcdE9spsVVDKXX9iKzkr1D0mbnzlIjdDRJhpYrVtzfNpGeFvc9HqXT7iGZGPsVKY01Fejca%2FwPdykk4lV2aUNCUcc5EPgrQXNUKissaPfxdxdCek%2FO&X-Amz-Signature=5cadecdc8590a87286b25177211dfa9e3ee33e7c434c1b95f1001326cd788e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

