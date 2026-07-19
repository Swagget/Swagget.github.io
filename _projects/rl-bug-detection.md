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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NZH5WJ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T174622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGN8plXh4odozZps8CsD6Oz7MppOtVBm6jCFVbBdm1H9AiEAtOIW1SmfS91Lfnwxt5zKc1LqKfTtUqdQPUr0jA46gmEqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0I8Uv8I%2Bx3gZRkxSrcA5KAkyZlqqq%2F5cp2mjiL4hTXWIJjW6t7Yj0dE78NINmq7l8ZQ6bmYQpwR3jj6EHKtGSTT%2Fkqb766bikG52cgodbuAXIp%2FbYwHTrEfKwfnNmiWxOgtd3ptYZlGhRgMwEPPGpDZANqIKXYv%2FZarnnc1z7gn%2FoonHYT1yJyb5C8YAB1b%2BflsHDTa1kfACikbENrlrv2rnWT1uNoXpW0Zp88v7U%2FbYYb335d9mCVv7zJUjnxDAYXbVNYv2pmMDX2aEeB%2B5ESr9AJSoU6%2FGu1sToyUZ3Jpu9dtZVJqGbEUZ9roUV5AmZ8y%2Fvn7iJhjjs7VxZnzGT07BOCpOi4Sy2fQPt2lUE%2BCGfRVi7H23%2FNqXTnvRegNeGSA%2B6oD%2FL0OlB7d%2BfOZW%2FdphnAvSoMVf7yUK%2B6riGV%2F9daLWtXDWqXKoNHuU%2FZv2tr6KzJ0Php9VDEPdgdojCwl4i3zlfm6MTxwrfA1biTNw484aiUW1hp3A%2BBj4HgdRMqVc2cKpR0Z%2BRwubPLxKktZem4WOig8IEpMeEs9YaLY5jGvar4IFoWPWeSYXMJ88yoIZtIq%2F%2Fwvear2Ycq21sn1pwVWsRCuqcQq7Zko6Hh%2Bk2aYnfK5QxzhqObXtdu6uW%2FjWxYqGsyOpSgML6I9NIGOqUBcwwzZI5MJVVUHqgFNeYwjKEf2qquBXn1Hl7phZbBjODTrWHNQ8EuGasqeJWE2TRedChUhUYNka3xNC%2BrY9ZIWJ6U7mnwiLNIta%2Fzy1UVhwo0n83DFj7%2FiSbVV1m5URJX9KQtWcJuU7rXif%2BF0EKLuYpoJKMbviTERP2i6HK6f4JGTxG1pD7YQEUEa%2BJRCHbbnTJe4L3OKheeY5Ut9qTPu3m8gOc5&X-Amz-Signature=e818219c9439ae7a0b2b52e65bf398fe564c69eaea31f01e4a5e0446f3f136e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

