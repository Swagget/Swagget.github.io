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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRYXE7EL%2F20260712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260712T154522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIH%2FtAf92UYY7KIU2YFeFNDR1oiV0fmFk2DFQWpBWL1bxAiB7I7b%2BQ7%2FylhbVxX7W%2FI0KZPhomqOktp09GIU6axzN4CqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiCFVjQMZR2oWHeLbKtwDBxl6BcSf8gRRez5H0pcZHU7GzPYycOR0J9%2BVJeJk%2BfB%2BjDm23hDQ1pxi0KGYqeCUJREpDxZYQQJaFPSdFb8NWnMqC1XzirF2aZAvdH4Au7N0SqyZpk9kYVnt%2BDAMKJuskCf2vp%2FRpQvWP37mblajdYQHbh7%2FoR2e%2F%2BdPR6Od4PTqbQjW%2BgA7bNUFbzq%2FrbWMMv9WhDyT98bd1NGsiRmfcX3ddxCtYtAxNxhee8wB9iWCnAlSOLodCYhNSUXf7HkA1TQwsm9y8kuF6VweTMBHHpXHzx7Zj0r2H%2BblLio7cZX5tk2fliyUQxZzoDwS%2Bm0DvFzne1eoChHt2uWd446s%2FgxTA8sxi4mgQ5qACK0umN63Eq12l3fbIBjjyZ4hnOeU0a74wjC0RWMvvcinm7jlbW1%2B9eiWU87y0UKgDCZt7wscRzp3DSZ5nJAfNY4nwqKCXwye9hi2xXNeLQsStXkLQItX0nAnQ7ZurthwTEE1bn2yFH9cSwOyTbOSTerj6BLoaRStBJ%2B7GdIGU5hJo2f86jZEdvPhGfbfZR3jOLVLif2RbSni%2BdNUTDHA3%2FUenkKQzoO1IaU1N70%2F3pWatjojYWkVDhTZKV30MlL1cEOfJPrBm%2BMy9vlcGCNBTWYwjIDO0gY6pgFjygCCBLFLCI9xFlpuCe7tuZI7qR%2FXCGDBp2IzpmRiual4PXMAJd2zjBalOyu8hrSjRvDwMZueb267yqOzPIIwOUHf7sNKG0y3yRQmg7xS3GXwaGfeK4EFLDIIrX%2B5Vo9YdLhttAUpMY17SpWdPVUPshFJhxqoss%2FC1teYBmdsvHajdNDmQsp0125RVbn26Zy5mzNxE3Z22v9KW8jadNm%2FLf9wSnzp&X-Amz-Signature=207bcb0716297ff8d777e332bb27fb084c83264a05d1bdb9c5e5ed90da648a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

