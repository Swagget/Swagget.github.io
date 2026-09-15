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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQMYQU6W%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T010158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIFA6feuEFPUp3PL%2Feb05CIWrOgWthWEDcWQN3Nve0FyJAiEA%2BZhMZee6p5oihc8uESPZU40JXBpWWBc4u%2BdwanPiYAcqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQDFaQPcNP7uMOY0SrcA6vtqi1muKmehyc4RXNDIEod45vYG6aNnHPlj2BjMVtitBmt1cZrxD8sFmm9LS1YFTe0D%2BlE2P8blxbzFBA7h6GgpyiU7mqgsjELEnKsqYe2Zv8wmUPgQ5yP3%2Be37xaQlWamuowvR2jE%2Bk9upRkJEBVo88euhjuLHgSQRLZIOJHyi5zrj%2BDdnWSQbaZS3xYDFE6BjJ%2FB4nnZxSNQqzsKKTV6FqvAiSP6%2F2xxm%2FPGS%2BH%2F53uIwp85tmFcVoce5oQFYvpLxobC7GH12ApYdw2iwHcIhLjKOQo0O%2FXbSMgrIlNP1pMX4G0X0pmnNfcgHRwUt7Ow2Lf3bDWJuO9aWOOCnP2fcaiQkGcM4xkluHmGBuhvuGCOawEpK18mKQaEmdNr09jcJrtiR7wyQZ5vd1aG2nKHH%2F26114FCBErqPqhZJk4LmtibaRkWJuXb8rImHYCg6lhkxnUbhCZiijBTI7EllWbMhSJ466ajVDKUXYMwimPcxYfVNWLySRqwU%2BvXhYouYw91%2FQdDVb4ohX6sLHMwMkFO75wq2QID1DQpgR7RTB4WGuXOwUyE%2FWyWTYe8UrH2p%2FosVQrlcJdPgL3oRokLe9uHCcmzC7HMO%2FbCA9MvuKsHy%2F1QitdjgNBXRQTMLX8odUGOqUB9fT5ygzc9t8Rbg9FznHgRAwTzjUtB7VwG30KLhgYqwyIbj%2Fu%2FQbWai5aZ4DyToGQCPhHRML596uRITPi4a0eIrx4c3X74mBlH43LHGiNllbpZaKCCYIlYQB1TK6VljZ%2FJSANo1kvvlO%2FOLcpkSmnZo%2FR4gE0yxrf9D9xlYD6zs6gPasoDpwuGLDCEJl842EIlLlQhszArgHkH%2FJosr7pMQueuRvq&X-Amz-Signature=4a89ae3859ebc20b85487fed4b3faff33d937558fe9012ee6c413a63f1d66088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

