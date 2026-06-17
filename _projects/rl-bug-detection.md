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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ6J62SX%2F20260617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260617T231412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoZxwQNysL0U%2FsVKmmR%2BaB9%2F%2BNtuj1mba7Q7%2B%2F3rzMfwIhAI%2FcQby9W9T4dnr%2FGy5q1JldOutRS%2Bkww2rHgwaMa2mrKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvVadxkvzLaQY7ARQq3ANGoVyF%2Bz0r3oomBL4gCN7O78E8Ae213gKvhTpyxv8ZEP1%2BE84IrbeVTSHEUyil7wplJGfVDlOZTNvwF2PDOnga%2BhnfI0XQ8e%2FA4QjAF64yaqxNlyLCb2pcZ63LPOJxId7G94RYYKxBIftw9dFKyOYVl7Mh6oH5tpcJif9%2Fwr860wtwHnSDgfzcUWYQQ%2BeWqyzumTV5A0b6Lk6ciaRUg8kagQUx9X39ocr0cULauqGHnuyVXdUrSVuHMHVOWTNcaqFt2oqXypleEkr%2F9JxPh7wz6NWQkPdjCjGT3G%2FJcuJTgNw9Cs85aZgWVqT%2FJXz4qcEjVOpDTwq2Wrv1656k8OmAtM5PLQr%2B3cJm%2FKTawyoN97lkhOgx9IoHGH9S3Tj5TuD2VvYxKgoKQ8aTaf%2BMQgQaso4Wxsd3s3Av37xaSaUuH2RvQBYy0LCczt2F%2BmSmohEwRtSQk4GbApK8u8P3c0bk6a%2F2Rg2UUdpwqiHkRuclyfQgTLTSd2ioGFGw6pkFOlhCl48%2BBXYdGkZDwS%2Brkh25h%2Fk%2BPYsOjWVnaKbOUScQdgobfcatN5I1dxTREmSuA2wNyL4otpxNtOpLgiVvrZvUDcxTBXK0ZZ2TkENcGwbu9zwm2iOevIpE9tJPezDPlMzRBjqkARsi2ROnFvANIeJzkFlu9DpctXFwSIVlUZhWm0icB3sbhhXEqfN1L2HxO2zzdpdyk96EczTyfI7jv%2BAQlRouGV7DDVGqezLWntPN1bcWmqC0arauTyf4ugtCvBTHfRqOwHk5llooKcLdChoDGmaWpt6%2BimQ0SXKZzcqYRxlh9GMq%2BDzCROvmf88Kjq%2FbYtrxd8xuUbWk1fACh9hMq9beqNx8trNo&X-Amz-Signature=37a8b10acebece615ab29a6f213d7b8a41b65ced4bf3b54e6c4a316ddd2a48e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

