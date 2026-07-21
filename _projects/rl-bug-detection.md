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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH55L54O%2F20260721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260721T234458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvttIdZCtufNbA6FoItOLY1VOlENu9ARQGZ5%2F1KN4qqAiAZ1QQAkJ6rbQ2dQFlWYFXGA3iU0YE4cxVrh3YfHu3vbyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYaRhQzOxRLEfOJ1%2BKtwDI%2FdSgo9kXgqidOpcwbD%2BwJyYKB1sF0BimJLqPyWkpTEDAlnbXt4%2BzuS9evjLL7JYZ5BiFW74ZEATO8aK8mjGGxL1tbNGC6w5QnQHLbkXGm1AkARryxbYlGH79I88jjwuZV%2BQgAPge0peCT71IiC1fEhB6eIwL3cqZbc5rqwUjyo50H%2F%2BciY0RZ6TB5R1FSm5Y%2Fn1Jv0mWBZMCoFcgyatnPPXkOLLwJfKLUxdk9y8RJyovOeGAp3y8xzFuvrDE6bYgP6O8lZA%2B9Q9fZTivcjE4XNaSP4%2B0qvxkJYTbUrBE7zCaLXuSy%2B5gI0P%2FgTgYEJBtdxTU0ackLCzfq%2Fk7zbD65gzi4KmOvSqMRejleGmnnNnrTPt1A80qVV3k87h1F%2FpTMd4ZwAlOyHrimVqxePNjDHO1gl%2FeiSgSHTcBHcVyOAOOz0kEB6VG285F9jjSp%2B%2FuEv9ai2IhxShHsAQIyGHf38CRSmmVlJ5hZfAtTaX2qJaTPUfhfr1mCYnJ00UbPcv5t%2FcHScHuuO2lqybbd7e4XUGICUnFsN%2BtEdRtp8WAQRg2ih0xRODIdJo%2BMwvvl6E0idLqKA0FLqGxq0JLiagc%2BfGC8oXODQ4BuZe1RO6I5kzR40IRnsFjXHGpBEwm7r%2F0gY6pgERCN61rc5zXf0nGG1HmH3U5KfeVDzcgKPetl5N8UBzvdIwSDRDVkmgcZbO9Fv4fFktKxlTUo7pU1gkuI%2FU%2FDFVMnJL59lIDPlPC0BwCbgpJ%2FngT%2B9DHu3vIAZ6KSujyTSJFetQioB%2BocLpv1znifMDF1bSU6VyWD2gfO0OTPbtRwIAUHrThDzrG4CSgtKJWE%2Fv5Oa4TvSrgIK15x1MkI987%2FE%2BEXW1&X-Amz-Signature=2726d1db2dd36de94f77502d12df291bdec33e6a8d1ef4f6dfdf0272a1a03388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

