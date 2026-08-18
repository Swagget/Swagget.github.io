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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PYGQXH%2F20260818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260818T151839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpGsmTJf6MvC5xzs1nCi0R34YEsDWb5UxZLcJCXz57QAiEA9qaCjGulXx7pNcibeM5zM%2FsFgjKWzKdElfUddL0fdVYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDEhmUGXj0Zo2X%2BHgxCrcAzrAmsXRbS3BosVP2oFaiyZVhG%2Bv2LRxfqPlQMLIHbGC2Z263jFMhlOEpiR53vyo8OLzwhMamEDZPz16OmFKLtZVealh782HmemTrJn3UBPqzTeDVEgcy2bXw2bofnnaKBCRLUWbgbYa%2FxLwMcuQyC8Lk8cR7AuLwX%2FwMDo2WBgdBK0%2FrU5EX0yDZkHgDEWlle9rJMlWYcDtkKwpD%2FovLoSu8sajkhNzcfGmDAgRzF7OTfk%2FS3qAApY88EnZQU3BzqnoTe2862JJHgMvXmeXiLyIhHYFjj3HOY23rzthcAhYW6GKnihkyvYhfheKbgM2XqqmrrOnd3OP27IzpdsEsn5coxBI7%2BforrZXnxDh3hQhjGc7wSoPMuJXfD7rjX5xioSW8dJ04DFkSM6yEALDTjEHn763jIqzIF2nljOeumm62lsb0EyMkc0wBhLQaaUyt26qgzQ%2Bkf4ZaO5tvml2RbOZPWAOlA1q%2FVu%2Bd2S9uw7OUcF6wjHzdV%2F7WQLY8JgzRGa5%2BbHVH4%2F%2FOVO5nQUWqc5wgU3xwgX17Rip2ICxGcZ2Nodj%2FKSWfilmFWW2iA5bxDwEsekcXKY%2FUnXB94kutAfzromvpT9gz605Q%2FyLdSVFMojQI6BvZ%2BuvYFxsMKW3kdQGOqUBWzieIz1fs7KRQnBUkIK3sLU0k8IMTkNFMnzG9MiYY8xLeCAUmrSdDCTw%2BtplXhhfvAdztdbk%2BlL00ufxAA1Un2UZaY%2F9w32r%2BhxNsGFrttrWW98rrYS3%2Bju1HdtBXyy6Vo1uq0QzKHn0tnZyZYBv4JNEHmxyX4IQCLnQHxtWO7ODKE%2FE2Vf9S4r%2FXzwMg91Ve8I4QxcXNjI3rNF0x43dXEbU5VN8&X-Amz-Signature=4c283576e8d703ec2edf069afb52fd369dad44a3691e93cb49610473f8c123a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

