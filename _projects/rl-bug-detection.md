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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEDP63JW%2F20260708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260708T072029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHcUtuXorLtqJtGlwnc%2B5yYjS4DIbrQ5OUfB3Up48Cu1AiEAv3VGv4yDibVNPLBhKq%2FzvSUgkup%2B5drZiXMg6e5DKxoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPwZGabAFqH9wAVDpircA7XiDYp5YI%2BRw0XIC6TevhlqzxueuMkdwFHP%2BC7VT%2BJPSvNZYFl2L7D09N%2FERwsCWzTJ5VQDmsqwU4AyaVqvmWYu9eb6TnDX4131oVydVminpWf8lCH1AvCOtKzFW5UIC9Z%2B70tZkXKrDczIbNFTqXI8x%2FS3SzY0zRqrUpTIx1vFFI4ylELhBbsIpHzUK4390VNbSa4GPOGm1a%2Fm2tSjlT%2BBXk9v%2Fl99CWpyHPbpNoNLM8uwJlbWtkXtzfm%2BOpnQ11Yjs9LC7PExFYFLl5y%2BFRkOExOwxjaMCINv45yAexTwRFc7t7x74wDIv4OOqjyV5%2FbsqH8EeD9C03SmEzv094ahetme1ohMHZrFQTA0CbGjcXKNFfFDE3ogisVFc3QXhAlNopCcftX8ZsABpVI0UegiPwiNfxchKyQGdAPZz7kAx%2BcUzCDGO0dLggzZbM6ETA2RPEEmPD9AvlJF1lAf02fTw5e5cJDELTLYJewb9wBi%2BMNhLP5xGHFpRhuSjhDETrRbIgmWG%2Bh6z6tVNyLzidBwj%2FjoJHfGVyszULyZSDFHLe0Z%2F16JNYucV93D4ISGZ6L4EmmrJQI6CiPrGy2NstVep8RP%2B4A%2BO%2FByw%2Ftm0H2R57wmVuydF%2BH1WUnlMPTNt9IGOqUBijUmZ71LJ1sRVYo5Hj%2Bq3pef3RsPBYS9EQb7IqDJ1ZxDaqovhK8ERbO6AwhrpZ9h6toYRZJJ8BQzrYjIaKGYU2bAF85hMONxNpndAEpyJThp9UO4%2F09opLkrwNHPBIjhxTbGl7i71%2BKE%2BEukxAWIHzs5avjASb%2BtmXpsGYuxUUP3YVZhflfvR8w4aDRQkALiTyJrJbG2ksMEbe8%2FFxGk5DZogan1&X-Amz-Signature=938b338035312a989926ba7fe23ac64bc25bd0929ac87f4adff2961b0986c2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

