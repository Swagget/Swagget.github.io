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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4BFS5XN%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T152703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFJXGTjE%2FZnAljcYzdnb%2FrCRRe1JKjw59R48Iet8vqDmAiEA%2BmhxLbMsYYxmHJRx8UTsybuK%2BuW7KyaOYlMiMfJ%2FqNwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGe1HUEpwVltd5zVBCrcAzcnUtuhAm8oHvQQOkqMffhTirXBDDhDrsy%2BiZlwOcKqlutlQNBkdQilFkd8vZwJcOpMzXrak9aTe5sp5valjrLS1gOLARczm4BHLa9%2BQxhsibJr3kyHctQSV43BHf%2FjZjO4KAOxCw4ZjJVmSufukrpR%2FSYu3HC5wFrMnMg4iBj9EDSPPerZQ3kwxrjq491%2FvTytnP8ZWgYQsWjtMXnpZJhhQF3J2J2uAs7dvtHhvbVbUaqvshsc6RrnKfpwyrcZtczadXDtcZ6p8xQDil5jljnlBWLShUpHiQ722XC5F6wfwsiO0JTZmOMGkmhUNBG6KKXfhis3SszMfFDIoWAzdnzrbjjz0wMSTtd30KCMBWT281PGRWcK0DMdhMQT3dW0z98UtikT7mPO1CHRJV%2Bw30GMkL9u7fGu2KX0loemFrzNXEi3IoxFc1RhlgOWLzTt2LZZEhU0bVKliEsy7%2FBfTSrkoaFLcEuowZD7qi74L%2FPyU3CFyHK%2B6T7E1zCUd9DZtA53SdCxr2JdjXZp55jcUzrdnh4pcJFmaY4lhuacnMXwxPWZc5l9NsmhSFlC%2BSb3HoWbdm1p3JqWBWcxUqSHVkmUmuupLSjWCjONMtp8hCvNe90g1IvCov5wbcsAMIrS2dEGOqUBMgo6TWKAfcIiBBheXtEBZgAHeRb6ZdCQSNwp8TaELHLmqhNneb5QQIxkXI4L5RoUabFsZWZhC6FHApq9jVZ5mKkzEU5BnXC%2BFzGskHGTwDtmBvXbVywn6WJIZYbutrMO8Ym0SeTAHSJoeAIZsj%2FsRGesRNmgWGeYyi8SbTtXzSz2bAvJQ6LjkQ%2Fo6LpMBoGnkCXYeZLdnTSbdtbx7V73uWz2OmcT&X-Amz-Signature=63b9fbcc20ef2c67106ee19c349391b6ca47fc6cd685c9768eada52a4a6ac1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

