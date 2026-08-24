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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W67BIKMH%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T074708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBV6I32AtAUoPn%2BS5jqXW0ropvLLLlRGaJQo2A0DXK2nAiAZ719v8xwbh7LU98pjRwhmW9Mf9NI%2FoqqfIJuWJuqn4SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD0k1s9okUAfQ1FpsKtwDRSJSGn3%2BIjzlo5PLbbx5DoxpD5QuEDQxOAH3NZs6z3wkQJqKfn0eHleZ8h%2F6FEHn6nJIIOG4SOCKC5YgqDONyXUGXuqZFeotc%2F2llSDUQxiUsSCAojFq9jOzCH48lnEzw1ZdBPnCuGOlfuxsiJ4YNHh1lERnSc8O5JxGgJPb5oeZfSmvzsgzEBG8Ytf1Ecz%2FYPPa1PUhArJu%2BNkiMby85hForMmWrHlspOdvtuOu9MkOV4D8pbVLcj1UJx7bgRqUVF3o%2Ba5xR9YduJ7MenweIfyIJNjvoJaMfOHyI%2BGP0abdYuIIJ9VKiK1uPDkcaQDn%2FaVw25LseQX%2FcFzhCCagTU0q85kURZeKNd9oR1pcQj0K3Owf8xw94QyMMXfSYRLIbDRxBBRXA2Ply2BubB%2F92eWwVzbsS0kvc93jIXWrwvStsiCIaA90ZWqKh9dbmZbI8PYeljR6WOQ%2F%2FqA7Beaz9vpDF%2F8i44Slejn3KxfexK1YfBVaSU0ViVfhgjIzyP4XRT%2BNbLU2A0%2BtqOoTPloFtJrM8cEvLMAW2VGkg1Fg%2FP6xKn56byY8FL3xgx653%2B2QdudUGB5yAq2bd6zn3H4gHXMzZTY%2BUqonkhaNNOkxnPkV%2BIOH9nmvlGcDO5IwzOWv1AY6pgFRKwUoLVUaIJhO0kvnXxhh0IxEXY7ecu%2FigFhkDG2W5PQ9MKqTM3ViUt22nKCJ0mqFZI6T65e7mXcgBQpVs%2BZKWTPf6Lv5bRMhqY2WHwuXcqKiZSv42hipCQ3qjGlzRWvXK2WOcHxsYKr%2FQG6%2FrPTGL1axmC5xuveLk1CQ%2FUCc2rd%2FqXk0IT7a2nZ6E%2BwwP6ZTUO%2Bkq%2Fni5YNw9mhbykrkOIKRTsmA&X-Amz-Signature=16f808083b98f94ce7edb26e5fc6b6b7f47f58e60eb84228305a7db135c5e496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

