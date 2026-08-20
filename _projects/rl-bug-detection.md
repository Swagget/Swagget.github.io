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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KSXAAJ%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T111503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICILhBK1WZSvySsW7aYfxZ%2BhQUAelzF3oltmUkHcQkqrAiEA9Z5sfWPZfnusYcXRVP622RZ4SKQyJVhS%2BiU6EM9EhWgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDkGJOENqeUN%2F2o7SrcAyKBAFidXc9W3p6tR%2BTwC%2FP1XLZTGp4GYPM%2F7dbr%2BbVRU8nVUYfmoEuVVyMLhnFzgIBMuLHNQdFrIPvKGI61jG%2BhiGS9luG%2BWsS%2B7FFoEZL1bxXTL3XzNgX%2FohR3NWLZnXM7LJ7BZA2XJUajpdVz9fOTuhyUwvN%2Bz58PfQxAeEeO7flr%2BubOp%2FksNM0BUMr4doMMkx9dRIX7%2B7vAfcuAC3JPDaz1Uy7cZFisbnuobPjV3HiEaOrtmbz96gxJpRqJO%2FZ8YFMnjRc7%2F4g%2BxmcnhH%2BTACsgVk1qazbyzx7sl8ti%2FigqAJcUnDwL46j4EKjCBxENxWQ06cHNvURhIrakQyiQX9onvvbdtTJNz7kYxKmSCwbt%2FldoEGmApl218qdZ8uRUyeSDc4uqetTVk0D1hJ2Wa4%2BacPpxZ6WVec7ipHMLECmOZ1sRHhgSk6DkQGLSYRVuEQj6LQfg55AvNK5oh8Aw7aD4gL71sXccDe8%2F7VdpjQGStAXmcmo%2BZN6ekGjU0h26qkf%2BBhGfeXXluZhjEihNo9M%2FYXOXvU1dlBwYdnB6Tu2ixyzijrQI4jYTqpK6%2FCauwaf%2FP7md4oRhAi0Vv4MN1l%2FxX8qRwW49PT3eqEeaXoJnqK7uMGBsM3nOMPyvm9QGOqUBz2ytYEy5IkvlbPaBXJaVi5c7%2FfCGLwH3ZN0R64ZEWceUQtzglqMfz4c%2BweVo2t%2BZqEN4XnqRtdcGT87wePTU2zb%2FE1Dxa1yr0H4flLNj%2B2RI8DwkVd1YpKUKvcGoUZI9x%2BTQw9fXAc8ut8Hn6zZs8NTF7AVnjcraIGKRpvZbNTAhOE5a2tAGjiNtKppBjIj4Q46k0AVVlNhkolVh7OsyLBSpglvC&X-Amz-Signature=157c54b5193bbbf9193319ff1389b862025e34a9b6b76eb7ee9d05f5f5512447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

