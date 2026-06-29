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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIVEIDZF%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T071909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BG1fAl5caxi2%2Fk2a5jCwddlzn%2FUOvFelaOu658jYajgIhANbDKAur0VGe4XnbJJYDuhzyHmCk0BPd5AzxBpne75emKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysWmYhmf0OCviCOUUq3APzDu8DxoJrM3ctrmXoFs68DThbRyux7BFWzYIyMuNU5XH26v3YIKx0esPPLajDFDYKLHtEcf%2Bu%2B0%2BQ7iGBeh0bOmtCqNcotrQ9pqD2oSUmC2GDZYGkvgR8izpGoWRuMZPzmT1NxPV6DUj7q%2BQmrWPrFCWZDBgEsKi4M9ptqiMuLyjjZWRgRKL19SHRWRigQvMYJFMWjIwDeYlOCqKEKwqMQp7DCVvOJWfaCXnPzuK2NGZ0e%2FByLwg7aiDf80XP2WkLSka2zmSuTHZe4jOetnx3dgprBc3NXpo%2BIQ%2BeSGAHwK7Rf%2FvPxJ5eo99WluZ7o9WldMhjuFHt7jPK3vGYgxvPt%2B%2B6KNv6IXMxdQv6mTIE5wAvYY8px49vhYiV%2FXnSObywFFP4HfJkSKuEeiG6e6WOGgr1rCAc64PXJJr72qkMv5VgojlNFTOmth%2BOEuSqiERcLQYy1rFYem9dN6IPnVOckCaL4%2BkzeCYYlbJxgoJFUCaY%2B7lcvpEIyvgN7KEkGnTK%2BzDkwa%2BEGJ5nEM%2B6Gq5EfL6bN%2B9prxm%2BGx8Isn4mu%2BaX6cTrPj93FxxDWTbm%2F38uii%2F%2BClVttLqP8PQxCCeuqhbyDAu%2BTBZmbGfegqBZU4H4y8LvxtAxzOPqLTDvoIjSBjqkAeagMg%2B7A8rTbhESkwhecEMRowrUlZcfgbn0cujVpwOZtUqpTdGQhXCbDNXqqmyw1ORJexzp%2FnySZowq6LDe72lVUQix%2FRD4eQUly1zhbwSTwnydtQvWvMHkljw%2FaXBjdFqUe0KtyKo8XQ8e2fC%2BGpjoInSWeprilK%2BZkj68AK6j57vkWcbId2O5RTjNiXSTDkBTA9BwJ5HRK9VRPuqa%2BXD04giS&X-Amz-Signature=a4db67a4446b7f41041dbfe1444b317f43a408fc5ff183ee20d21152d49f51f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

