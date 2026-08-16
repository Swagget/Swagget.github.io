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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLH2ZGC2%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T072034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDUrAsN7KIKTiROAibqykn3F9MroT3Z5fkaPvYpwhpS9gIhAN29wgh5y2wH%2FNA09WOnoQZYbBt1BzNcHsmVIp2m9WhMKv8DCCYQABoMNjM3NDIzMTgzODA1IgzP9bm9%2B4fc6M%2FVHmEq3APDqZ98eWECCnGXakOj3lNSgXZ4vIqbzyqjtXgpi%2BQk6%2FMIcjBPdg9SQLN8Vaf5d4EWFwFENyLWNhPTdVhYfzr%2Fbj1URJAsmmS0N5bFp2ot2YHuTkOzB0oT9ZEPCwMHlqc7HoaQP%2F8YLcWHayIIpTrKKYMGre2bqGoct7J3cbCa8YaJeFNhSzvoT%2BzOR1pV7s%2FGbOJN3oAbgNqipgmBmSset4F5qnM%2BKYYmsCZqYM4JYJrNJ5BKQCTQyjttuuWygGEQSv%2BLzfcUJi8imL5doUUM4IK3L9K4rKC9%2FTiaYSKYSaHStoJBgtJOTyKNvUDxuFip9LCReJvDIOXYbMfIyZyL4MKkViwf9iTsJQCSghm2ldNMZFwdshhkPvMd6XNn9VqWJWvGNLc0uybHb6U52tzT6v8KgjSvVgCCljpd0XdD5Qffc%2BuKjvz2EZM3X8psoYGksSMooxgdVQB5btbifYDUhu5N2YYjEXs4%2FLbSFPA5n2k%2FDQniwwqpAyJ3otXygVQwEbPrq%2Bm4u%2BJ6OzO5vRCyVFxwAus1X6go5miyfz8K0xKsHk214RY5rwp501If6dsUyiggTBcy9CXwOE8qZydAYEi6GDHtVdHm06QQLEKa8S80ZGeBjlE97%2B6eaTDggIXUBjqkAVMMTzML0dMjLI%2BPhHxAIDhpGqkJ80G4XnYK0LGZ%2BOM08xBWuxY45ucfYm33mptbJoMo%2B%2FTVOS5CPM4XAOqdAvxFsYN7IZxCMELQSlGLo5H9w1izpvXW4brJ1pnAl7X%2F6NqqXxc6VPj9JZ9gGUgrWrOeunbNx%2FXqZ%2BtX5niJigfc3AK4mo6aNQQQi4OwvjkHvCHktNj3Hcto3lL3GLlHgabcLFnM&X-Amz-Signature=4a1af5dccec90767ff6ed3ca0b87cce4ca8ebe4753a59338f6b8614ce50ee84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

