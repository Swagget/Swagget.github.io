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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3ST3XW%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T171230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQChFJSSOc2jXEbmCYlerAQ%2BZfzldSshXjiY9wwkJhgbVgIgIyqlU9zCPhc7Q2TUR5vSx6eRLKSvbZX%2BpjXLVGkzqr4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDuOGVZCVsPtGntjCrcA4Z8WmVdhLpbYa0TWShceSKAhItYahuAKAazelWd4Al223zuG5%2FNDSm1J%2FCojZtXmVvcrdzoAUfwaKviCSrt5UMHqqFXj6wqVpG3W5Xnng2lTXHUl%2FRHEu7seA75R4MjMwXyn748lW%2FDZym5k5x2CvAalZKnduW41esMR3hfJ6IW01rhoIEMZAMvZgI6W%2FSQLtz6exKmqhBz8j3xeKZD3u%2FrVytVQyRMbCvVq9eS%2BK8sc7xqQnWDsbGGWdwR2MNiLgGN9VsNx4XL5zfxvEl9sAgSJ8WtggAl5TIoxqNQd%2B9q5o%2FDphkTYkA1lWhH63ylTCQiOoZlEbnqmKfqLxhzrAxklw9gjpeuP16PsoD2OAii%2B7GHVB8oFfenpic91d53hm%2FqKKedzcYNrBSRPpmNvK%2BxaSm%2BciDb0zme4enoGjJYh0qtWjEUQHUaaQYnL%2BQSGdJo4tsns1ZgM%2FMSLbF5CsWY0Tx1iwIxAAAmZCe%2BVg%2Fp0JIuXG%2FsXeJOOBe%2Bg6%2BeJaSlfwOIRPekrK2Lo%2B7fiJ6NEdR2jub0SBIffzwRQ8pqr3uF7ERKK0WxzoVQCaWrv0fCtq3XaHGs2K16BnpTPTsUnLKTzeQ3qYhe%2BK%2Bmv2Qh87jJ%2BNf8nMHtfryMMLD42tEGOqUB%2FQUfZmMcPYXHSecD6TBkMNnWY70aWpflYKXtkxCBbooqW4JCdEcjmTOWEFlUsX96%2BfIwxKlbVJs%2FDdGGdHRVmRK5I0qCE8sNiqRvXGMr%2Fhnpfbvxr9PZ9J3BIJ%2FdEIDpq6u1GulNrAHBCmw%2FSivNwxbd8JqI9YNyHjltv%2F6QHppffiwBq%2FlrKaFU7qHdYxZbJp8RRB%2BUZNHIcfUNTqy79mv99QKG&X-Amz-Signature=d082fa6441353adba1fbc20de30c9f5270f0ab176aadf38bf206bf3fd49c99a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

