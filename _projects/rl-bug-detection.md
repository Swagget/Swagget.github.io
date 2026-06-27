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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z7HAF7O%2F20260627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260627T015549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUdaORUTmq7Rhvk9r99j1xRyKCqw4DPZHf5%2BwEgap41AIhAPcixc70xEJgTSwkVxNhttTNSPkv09WQAVonPuaBdvubKv8DCHMQABoMNjM3NDIzMTgzODA1Igxoze6CX53l1JGwDg8q3AMgKkWZSUWhmTdzs3V5A53yEoIYUc7MtfNjwdKV5Z%2BAX6vNiS5yuHSHTvZJ0je0yAbBChBCMC3C7Vcg12obSNf%2FjH6b98WkT2%2BFMaoz5Yt5WrHl47jgul6LrowtuGF4UQ1pk1544gCc%2F5LRfPXqAcLRQwU9mbvIprvZaCVyJ%2BvUCL74D5HWBVBd16GX98PSMsOCYeLg5ENL0%2B3i9nCmgPuDgsZ10RZBp31%2FYZSILYrs2XsbRkV%2FWGvC0Hr5%2FKgOgXp0zFnUpfrFd459aHHysLu0RTldAPenT52TaQdT7FTtCbIxr3vGBHmKWjfF0aUKGk95es8oT4ykS0mSxngB%2FfMRvLvjyPFYBmrGpmGaP0h%2B%2FZiqUJU3BsdqSaaRw3jfz6d09pLTrpmht1KqcAIIHGsWpT%2BiaVYVCxLWQ2mloBqnOD%2BJqQMLbr0DcYuUf%2FRkHmTlk0g5ZiX8df7YhjzaBy%2F1wYsfcVqvElAZk6d3YSnx9yZ%2B58tnENAPZfR4CgHZM05WzZDQV18%2FKoyEggAtA0Y5bGKI%2Bb3mRZHAhaBXBINhFE6%2BMHRVU9hJdIn%2BBhK2s%2BG6dBJbIf1FcDWSLfX3LzKPS7ft3wHy88XKt86qyeGu0cIdmGTrqGgDZFt6VTDt1PzRBjqkAYJtuUlpmYhv16uFhWEmGKZUf6YJgtHJeRrc6vUAZ%2Ff7Kd3X0W6ityX1CCP%2FDpWI0IBfvbT9c2bD%2BWfA9bwBYNbIW6lLDCofKQh8O9HbN5vUPnnnsPMwIIa%2BQGvRBRPCEjk8c85D6FNTkWVMT9vDUdHW2T0fOkCD47Vu20dPXRFrRcLwt0%2BVJ5eULNoqTqm4NcMDpQ7De7DrOrrl0K8NLNLN%2FIyM&X-Amz-Signature=6b438f68e640578b87338f2840325146f0bfd141937aef4f9319519117a753f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

