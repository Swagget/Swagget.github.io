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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJOYA3I7%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T120853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCICQPWWYJc2VtNDS6BMeJv%2FLveXXMteSMeGAhs%2FgSFof8AiBhtAHk6SMAMxGAYkIhcwsEVJxrx4As6knpdOxWnGmNtir%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMdGYSb70yqj51me4jKtwD0SnASgh7l0Y4HuanpnqNVXBNb3NyWT1a9hZqZkQ6Dt3wTA%2B0WGPRc8QIkr9fjc%2Bi3jQ33kFqVdP%2B1tsT%2FzZyykAYlDlvcbSHjeH0pEudNFivZJZ9RZIhHAEL9BRQtNncGDCeoScY68dB%2F6HfPJvyLXlz23vy0pI85IOVqSizYoysXodIMXwnQkekOvUDx525FBFkKIWjBBun%2FKk8nbcl4X9PjJZ4PU6FDRi8j%2F9GhFDqdTe5ZqIY7zvaBG%2Fm6ixuvM4QsQrsN%2FFi9Q9kcq0%2BkqPu1pxrG9H4MSvuPTO3ZNnS4uA2OJjjIxzfNKk2KoPYoLNd1e2crnrzjxyl59m6KJ7Jn8qdX0qnjZkqdBbkPrz9M7GZLQ%2FRJ7L6e90X9Dt8YthGkW36I%2FkB0ZEH%2BesN4dM9X87QLkRJyt7Glin%2BD%2BCik431JfZ0OQV6GHml1UdobswQu0f%2B08t6QfwE8l4nfsH59YUn7AUdlCwGgMNyMhapBDcsiamfSh6cjib7qPS834Ic%2BPXJxUl8Ur9zzsD2%2BI24LO8XHvUSpz7RCeOTHiZ%2FS911uwCksPZmeQhNJ1xNbUTuaiuHA0Q6tBU823FlyEqLLlYuG98%2F0WbClLZt46yTln7Q39XtL0Mm0Pkwlvyn0gY6pgGcma48H1OmgVb8%2BHNlX9dPu7x8NJlCyU6A%2BPJpLTma0lK1aSZFEpAM%2BZ63Sl4mAU%2FmWu8U1KtRWGn2XJVEduBDKgq4EgyoSTK4ZG%2BigpEvjY%2BuSsx9JF5e3t6%2Bqp0aKI%2BZA0VwEd44CvUsvyXD3IYQuy5vMZyzjcFUUpa8xiqKtI3Kp062GqS1zK7ymw%2FQmcW41UCZDOX9S1DfIlUesTNPvOnWQZ5e&X-Amz-Signature=9ecb28c319919cd0eb2e52b6c6ca555aafb322fbbf9956a078b0f663c8a14441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

