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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YALE4NY%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T234535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG8RUD2vzqaFk2f7ttRDUOZbPXdnCk9iC1qwTf8wV6mBAiEAngM4BLouM5PyEjThhEwAcE2T7X7fS7qAUp19QOXNbZoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjG6wyEKb7Ozm0LHircA4ofM%2B6FXn8GSO8VXPiD7t0fC7lLvLW5SIf8%2BFIhj7Oymm7MVyuTrx6lCkPYZ5si7riUjtr%2BJqQJBP8OChNz%2FLs2YSdPTGPlwjMNcZ4b5K9qC2UYa0E7spb3ZhgE4v5EDXF9IcC1LCd1jpt2QO0QSgZFVKd43nprASyR%2B%2FGSodwSP6fYrZxGE20a1%2B2y%2F8UL63mFNN3YCyIv9L6U9HG2C9nGodnK2vY0F379235kZt2saAwXDaYwLIk9FXszvyIsMqvxjUFrEbi8co0%2BTej2WRWDkMfwDsY5UJpWGNlnKlUYcAB9pXESdNQSPanxFFm4XrNQWmLkXqO49TsA1nTEzPaaB%2BXO4UycG56m3lopAjkjXcyURmQMYMG7UtrVrwZ5JkauvMNOwIVbvaKTh9ofomKSRm%2BK%2F0k98tcDDATomHcJE3CsHHHyrT%2F0YP3ylLnOfPq2SuWu1e1fpjNndFI9DyBcK53MJzmI8UG4LXT3CBNeRQZsTNLNuRLJH%2F45A2pMY5Ep47FvAhjpQVeOYar3kt%2BPDQCld%2B6VZ5B1%2FiAr%2Boxv8MVRCEn0lenXDMR2em2qiuUNSWze2fBlF8HMpXHjWJpTx5wZYESZoQ0dBo7PWipPvNYUKs4n2rotFuFdMOa2itMGOqUBpVObTZPuTVAYV4WCEb9sZ%2FzHZo5lIKTpU2hRnahfhVXBQ6SdiB%2BMl6j71Nteq%2BpG4i2ZnzA%2Bq%2Bj0EfUNYvr%2BDqHS1FXHTBnXKS07ibENeYVOtLDhI9JugFUauSeQ5WDg%2FxK5SW4%2BoTmEGSx%2Fs7d3T50v9Dwppr5JEJFmxauyGzMIdXiSgew1fSA%2FDym3b1vndz7fWfRWx7NpA%2Fzsj41v3s3H3QRp&X-Amz-Signature=a6d15c8b258290ffece361e512db1c47f71801654c8bc8d5af58f0bb3d3463a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

