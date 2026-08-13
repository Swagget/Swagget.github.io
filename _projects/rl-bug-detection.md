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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB43FOTS%2F20260813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260813T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDW4%2BJLCKOwE3z2zv8TueqQ9fH%2BTq5Iv5M2db0ksCRGTAiEA%2Fv6sW%2FUNBJ59k3EvV9zQn%2BWnRO7QSKauQuWm03DjExMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeJlFFWJBs7y%2Bje5SrcAxCvhyJLBCHZPH0SKmQ8LqD4IjvFN22GuEU4t%2Fi%2FN%2BFphBOgM6puCKOGbKcy0ZJqsxKF7g2xwhhlm%2FxesEd90bTNyGViiNHtsRaCNyfXURUlQfcp31mGhbyKQzMCTgTD9y3l0T%2FE%2BTkDf72zB5%2B3lomDB3bubhhj0aYgT9FimdYfr8%2FIfclGCSl%2BGsVWPaj%2BQT2XxZa4QtFNAm8mjPTKrmWEzCw0chxvSwqpO0PZuY61HBdpX6cb84yQhexi5JiufbT70tDCbhQZtwZ3KhFc8zzVxvfyM%2BZOJK7Wn3DFiIAxtzIcxqij2NO%2FfEhdJLOJqnYL2okkfUO4dmHQBxoqhKoticK0IvvH%2Fzmp7PqwuCWvBvTr%2Beg4FejUM0%2FggdtZAuXQEIS%2Fui3I0V7%2BAp%2Beep9Jz46%2B11IRGpggU2m5YH9w8kjY19qdeqyo43ldZKcmOhwA0m46OYm05Ss9efSIqQ2LYFdlZA1ml0ojy7yB%2FjgegOpmUj6gHl9efzPwJAAY1%2FlbuBvur4RcbLTV4G6m8ifsZazHvGD5WDUPbV7JalQ9%2F6MJx0FoKrpVE%2B92qBvX1R6bjHDykkKdqF75f1q%2FW44IBQqv5Ai%2BEfRII2kwEF%2B7hXqoZafjTud7iDSqMObF9NMGOqUBYDIj4NKcgNkfawBOrlZw65HtKfFlxv9lCgjpGTss7U0ceXLDrFCmH8wX80%2FS97CzdIiI9Qmsa%2F7sJYY3M7PWG37hxUjEB3tu1TYMzjkVYdPpUUP1oghunGms0sNyRsV5ZGykoBt8DlgUwdH53a2mykZ8wZk%2BpIiRwzn6%2FRxc7PJfbB%2BXjAaqKlqSZauPlI1ANFTRgFXNJykybhPR%2B975G7B6rUp%2B&X-Amz-Signature=2bdd5bddb2a03d8e0a032b033a45cf2171e3bee89e3163ba41f413ef5daea20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

