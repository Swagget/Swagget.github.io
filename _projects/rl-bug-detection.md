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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TQBTKFO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T132453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4kEEK22VD6NsH0pRU9ypisB7KWnx3tzQgVHVqZ7CQaAIhAMdu7HPbmJqOpR%2BO09h7SO7nH4%2FcNhQ3QGVkwp6KSNhmKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQaWw4DIfcDd8D8Uwq3AO6KTJlPgdScmMZOhuKuvxOMv3aizQEDqJJRBWAlKTiEARM3YnbWHArC6ONtyPPFKHsNMBYBSDr5o8WTEZQOv5XgrubZ1aLdWQp7yJLpw5HHLPBmZiAGX78gb%2FT25JY4oKcUtfNtsQNCHBB3uIdrbWnTGybDRD4XrYUgHtU6iVUwBKntC8x4FotdpFDITm4rU5xT8jJHlc%2Bk0SMYqm0nLQV7r8OHuMmzLdwGcCu%2FEhasxlnQK8yXHROatpLtCOKioRzd7HhphIoYwVf4VAcwvP8qcd5ZWcv2KnskWehvZChjUoW7%2B2S0aOKsGchCVr9DJR0VvY8MjlS5od%2BMSxI%2BQa8L%2FRNqZsaoxlPV6HiwH79inIBZJSLBGbjWbagsEy3pjtOFNkhN9Bfg0%2FUZMmF0QDYTY4PFZ1i5gtDHtF%2Bxxk1IHLXEpZX0%2BjiVk0nmpBS0G8aaSXJ%2BeKjtZL4i5QFJf88fUFJ1sPJWl0F8UuVdbtyPA6N17foxhfJ4uurks6ZnlrbfAgKBLNQz0B23qqkipmdw5KiXeJarpxZwOC7Mr1aIFzrwTHpCJvje4xBhNcIm9vhrG%2FiUc26AbldXhxSxBY%2B91Z8RX7y5p32KVzhVsCYzt8mL2PUmrWdKboTxzD8pbLTBjqkAfWKAvXJmtduXWK2i%2Fb3Dwr3Up6sEfaVabAa%2BeqWZ0CpYHs9uspQUvi%2FveZSsnwFr8M0ibQ0cJLRoi458qupXJDRJeMoMdHcd2S%2FVo%2Bqse12RSpHGyLK9hrnnTqRowVaBvXOXMIo8vfdmAGJTIBlWwqE%2Bid2Q03OyPaHrWeMdQgVdrvFrm2NFWqMiaPK9n7YaF74EiGdLwaNzbW%2BzApEqPlxombo&X-Amz-Signature=ce334e29091d7911628ed08ece3b9617ec730e843e3cc81699fa53320b069076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

