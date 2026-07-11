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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTGLP3TK%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T163941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCMwTosGThiYYYfT%2FOvAEm%2BFuNGY0PgcN9n4DdDowPKfwIhAPTTyzvS3%2FtYp%2BDTjudEDQdT7g2WJDCLY8qZcMDqV11OKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy17SjUG%2BoNzQWewdMq3APdLu04cJ2zFsxSA%2FTPsvSVy0tT%2BhXZxofrswAdI9GU7%2BvQkfoquWKgtuVmf5HAt0WLbyMZigI6Itt3T9iDB8MgyW8G8IsDVXXOwOqkbC9c8a5lDvVncPQen74ApMYZ%2F%2FIX1d7eeRDRoTrO4BcJ747yQo6wMB2Yob8mZcVGA6z6%2BhiRJU%2BeFKgu00S02yczhaynSwvSShGMbaR9OEZZYx0Ml%2FrXJAnBDTZiXgyeMiHfbWNVlg4Pc85%2FHGxNRMS2s%2BKvQSrj%2B6jqCavqEHZbvMcpOBZXk0wsfFbBhlxLPI4rt5cDBsIGe05YbLEgPeU4Puvd047ltwbxOZQ%2BN6YsBIqG42wWlxkGIq35BBvbYSII9yf3zRzbkNMSihzR%2BgC4cdvFGV%2F0XTt6bUtvD%2FttoUfoyNtBb7RmAoCI17YxdD35VTaGAyW7EoXug%2FWtpItwRyfNXbDpXBpBFex1xHTieeRrqztALK%2BXAibqC5j17wjnbrqh6hpy04uJxT5bopKkkRE6CbvYwDOK92snVbt7Jo1MRonaroyqqG6bqoyvPbemjbT8L4FIiyZiVRDczVy8lCQ2xBNEFRC7yjmjVmLZ6LbvlUiL3HXu9DgvZgk8B6ToQpTh%2FeXiKGUYdHuoXDDFwcnSBjqkAZBH0hJercPnTyCga4BD06FCANTNaNsCQs6ZQiFMeCa%2BP%2FBOBHOLwjzOFLCiy9QFTmcfLdlYdIniK18ICHo9SCEic%2F026ab2cmMCDvJtFOOtTKcJP6SBPIYrTLE%2FUT61QBOQ3w7U4CXiVER9FJZePNAQKThT5cxhyWoA9fGzYwTND5qgQSm%2FQDGjJV1VovB73jT0RnTeINu3dAf%2B%2Fl2xiuAuorau&X-Amz-Signature=cf7b6268cf97375a7c7acab48618e95d520934729b56d237aa076f15a16eb112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

