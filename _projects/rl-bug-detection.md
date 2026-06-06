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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4G5LGVW%2F20260606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260606T111400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyshhx3wfyHDMvNwzM%2Bkk3uIsbkjBQAaIhb9KBWTl7NAiEAlsd6JhiyUtsSEtHdmb%2B6PZGh0czmq0xXGjz43juJxykqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCJYgTuPcrOcKhrlircA77pNCzLbOCBzqyyMiboPUVXru%2FVV5oBolsrjmYXTikj7Z84l4POwmKFd%2BLRt0e8GD7WqdCtNRDUKMMzD7vBEooaJtZXLhXRsSOOIr5hhh%2BmGPQHcK8ElmLRoKCI3Vvnju%2FLRIKsZgt9lXuAAEZJziHBrWwjQ29%2FT50oVKSeL2uNgzoA9WgYueS9LW2uy93ZCtikjadE4fsYQ0AgmNikkvQ2byXU0i8Z6gyYvkGBpAg4nZq4KOM6J%2BDl%2FBdRaXwjCUnyl0WDgZU7X5Jah6aqmhEPnMNGGUfreljBQZfED4RN94qlXK3O5Ogrb%2BUxveYGLD3hBhVGLcit7yqcSuJ7QUFOhshlVt8P2lgUe1ORDm1Veaz239u7kxejy6gK%2BQXyWcT%2BtmHtZCTTOdIoR61zI7pnYW9iyOUz636K%2BHPDhKiKZ0QaqU89scHo%2B9FTPx%2FP9IZf9As1Qtq2yeTYtw8GU6v33H3KfWvGJ2KPh8nqb2BQerjUkVkmKE3cBaDfXeSYhvZDjc8DvOR33zB64ENKb7FOV7%2BIOSL6d4K2lBJn40ZLQXHjIOpznYYgyxS07mRNtajBFmt6w5RdN65rD2ci%2BAI4Z54FzkQPbD4dMZAQkqIg16iY2OqWDVlFZL9tMJLvj9EGOqUBMULqCKHn7FEmMtkWesLVoFOrmRLsrTQYwE6sJWJPEVDfDQiZUJE%2FaNNlO3pxNkrUkiIVuCMvcea%2BQWfbgnkeR6mIe016k60pYdxvQq4kBWfKST1IPdYpdM4PtUAaFzMsT87R4Z84Kc8N07kOnaQCptnBz8CgLudNLrfiNB%2BWx3Hn%2B5w0Ty4aLZBVzu%2FoxgfGS2NxatQ%2FSomqNM5KbJnqE1XjM4qw&X-Amz-Signature=1daa22928ecb067c5f02b1f416e10b649878f34bffa83a4b7c53f8e7754741da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

