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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S4N4C4Q%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T121014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIFp6yWTjS4hSKYIiUtuP9ATeEPiNKEVsabP4a6ojNwJ1AiEA8bZqgDIhPN4riPn2K3zPA3c66n3UppfjxCsgq7g9EKkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgJgNZAN0z2rynl4SrcA3Ctgh0S64IvBdXkZHqV4IUZj6ASB18c1KRI9rxPPSBgoRG2WpA5niY02ewTuV6tItR1g5rFMmTEZHUIVyELCyOHOxNDgAKAsKzRYHfk5UQVPem6KmFbRpllrClGYU8Dfo2BOSDEGRwt4e9Qo8ouWUpDKjAIrjZuCy8xHHDoLxWpKSuQu5Nvdc8qNzAG9nEZGTZ%2FLT13jrwszhInqkIJGRruAqhBJoKZaGVtEpW45Fs0Oxi5GUevGdSSe7P%2B8u6VtBf0IKesimrvSJUgKn1BwXeN1OIQ2Qznmsjg7iKOCRtkmql6MV4wRbQHkn9nYKRQ7J5VCGNhvNL8y1TSObzkb9MY2PZ6Y9ERbyhL5zspgcpR%2BwziNWOmQcyEoDZN7Ktc4prUY5NE5a%2FgkCxAxxOQZuStYL2etZA1RHkcTWgSq6bZv815Bt2%2BIpLaTWUrh0biJppvN7BVYqTrbq4bm6nmQr7CeqLtMP2M%2F0NNrfzCBQBqw1D38iP141tDXtaCN0jwqYJizc%2Ffd79hMVWm11ZaTEhOwL%2F6sfL7dqvuxxSVYxLVSHmF3KywcmDG7nJsYjXoO5%2BlV2lgg7P0cDwsSnPwatLZyTW25Cbg8m6z%2Fvwi3Z6v%2B6b6thB13HTQc882MIz%2BwdMGOqUBPC24%2FQBKcNDX1pMPSy1CeFCbGf806LlaapObFSGYYBo6rRnaPW2vjOgAisNxu1RZ9vNBnstLmT8jmPFQ1XUoQjRhEQ6YAlkec8cIsPHjEoZbeQxt%2FKxDaF%2Fcfs2HQbwK%2BeYAi6WmJ6S6S9vwTQf4KZTp0omR6yYLlgSyxyIornLq7yJU0B8JMugMu6ktfOu%2Bhqjw0yIzrK%2BUgfHVbuuWHBFBPXQA&X-Amz-Signature=f5ddee1043015869f6cc05be908f4b82e864657d3287f4036711da10a7e12d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

