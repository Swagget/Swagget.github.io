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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJF26IZ%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T225227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdhNYjHLrawMzXN%2BHvMLEZ0dzxzvMYsvwlQWLi3AZqHAiAUOo3psnhTNfDtSOHOWtlrEHWptiVzYGPytIKLScNPOSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ9OYQK4ZXDIkuP5aKtwDPDA1vITBEl12JuDFoJcBwmHNVSkPXskxYJS7%2BnZRmjZb%2FcvsS9ipo8oDjtkV8p7uRMnL6Vc4k4ZK9QfJT75%2F9cuhISi5s6QZ1aU6Z%2FUJZfbFFV5gSGd5lXe7fscxBAy3EyGKDN%2BT%2FMK4qhXE4fbRQObG%2FNyvvCxdSWWGCe4f%2BtcBqstClqPYV9E0MsobEksn%2Bc42SSnHi6D2Ma34Tth%2BXZ8oDjhciQsRr%2B9xtNnZ8M%2BZ9t3sqtlsW5ZCY9Y56bE3J2ZrvMOaL4XF3I7eQzh2NzwwLMqfm7FdG9cYiyLbGEJ8d%2BXzN2akbcbqjFLzo72XiW1NbgDWVN3cYavv0NSj0Q20F4PjNiVmHxpag%2B%2BWCrIQZXPXQNTlz1zpCbTRDVWSU01qAIfAz8XkpiQqYLXmx%2BSYmYh2%2BSGyE%2BzCXggj2eHGGi5BQn3l3O8tpscS1TJKWIyYBjC2qCM4Hyf3TOP0K9FDS3AyEr6MhwJ2XkQTXxbDi4qOgaS2qqK8Xnwu8AWSxIUGXdZFooqTXdrsRAeO43A6aANL3mBpi%2FkPKBE5OUh%2BMNCRHr7PcUCb3gKcMrJiVX%2FLQem6ZcoWNE6kNfmf7i3ty6rd91TrMxhVGV%2BEOB9HnuMI5HdUsknAl3Aw9Jrd1AY6pgHdcf7AInJLtS3dBNnV%2FeUhHh%2BTeScLfc6Rqq5HjTeh5TrNlndmaKcJLLpWARZt6vd%2FjYnBXaACYDF82QQzf4EzGr6pHRoRkSJ308z6DVuB2vUXVPis1%2BwzaojzQujQE92O9WtRz7SttTS99vIeS8bchWO99XPSHoIAk%2F8GwsvwDx%2FCkVndmWwzOA2gaXYd4u5RoOlEQmiCyTY778v5ALbrftmlZlXw&X-Amz-Signature=9e833cd5afd0252a838a83a63d2716f0f3f6eef6d1f3934715500f7c9fdab9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

