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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJGH6TU6%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T151836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLxLu8J82Ms4WOeBeRCVcEk6HK7EQEGyseOvT2oiMP0AiEA6sd%2FJM1NKnaJJC5DgpbDe6ZRpgANk%2FP1IWTUMUYXZGYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpqtC%2FseAWjeP%2F7dCrcAzc8X5QEq4O91Ohu%2BBhKhdPDs2vQ%2Bij11kwRGuImdsnqwST%2FhPyw8jYhNbrJjAwz7BuOFVY1yfC6ZW8JBcCv%2F8mMfeNtja%2B3pLFV7zDILThBAopTnlzD6m2vdPRqO6Tcjkth0ZP8wsfl51K%2F2%2F5GJFYhRX2DmCrlp4mF%2F%2F8mIIZfVTLneoSOpd5P4BE3AlYY2rY5WnkQMyd0J%2BpaDDyY1MdrxqD4ag79GPNCgf%2FBhfek9sEd63Rg4OJA7W5jhIFvXwM1bKZ8t9rXqD%2F9NHUOl07qdAZ6hSwamrXrnWpl%2FJXuK1NwjKuX0uGe7JJ5Gb2Cw8LXnVaHmhmXf9NfuQZQ%2Fpl3ZwzjxOYaIMyvs3Ax8pmy5YDBKq8NCa3dSxBYUQjCLw41SxPprG%2FN9VixncWOP3kSduArC3TeyrxC3cW5K7PJr%2Bzl99BwWhaiIA%2BlJWKkuCD18Qu8P1avjIMfzpvOPueyFzPR0Y%2BSlhrbu5zdii1flVg0TUeYfURfD1eKKgPEqyJuzZcVmVHGwQ3tE%2FlCpE%2BWxBdZq2hGKbQKOKnW2Apq60CBrt59KT2P0AjJGoenFI45S26Y9GDSJBDem%2BTrvohlgbZCVk%2BJybZ%2B9vSyFXUrBU7IQC1XsDxii2ZDML2i4dMGOqUB8BBo75NDemtGOdEZ8GsT%2FIWJ0khLaQXBxQqicOs1YhUHmPGaUVIgtYBn5wvBlApCTFj%2Fyjm80fD9tl0LxckW5nW3qeHBR%2F8y6pBV%2BxZxG%2F%2BfCeJR3esTUFIcJw2FUhQmv%2BGaeyxs5F5KArDfGWdnga4LHXzv%2Ba9jXycjt0opWxJu01IaiuiocXUFo7BFMuUUK1x68KL01oM56%2B9z7Gjl6Bj%2BPKRg&X-Amz-Signature=0dbbc3454fc756e2b00140d417ccab66d7b05fb7a0616acd2b33a24bdc107ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

