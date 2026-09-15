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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QDPON2L%2F20260915%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260915T172059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCXRWtTveP9EpSwKxvbNKK5CEgqpSZtYhEGhICNcJqoTAIhAPDTACTBR2u7If%2F9ZkMOzLX%2F6XOckRkg5O%2F80XS7fp%2BjKv8DCAEQABoMNjM3NDIzMTgzODA1IgwLmcUWl3BjmfWLmzkq3AN2XzLJNcqGADZ%2BUh%2BC9GlMytwpzmimZTR%2BeZWmTLqARYypkLa1mYuqGpMIZ8eGw5YO8kQnbSVO2w2rbqvqLpE7ZaLg%2FKKK9XPXvhuMlA6Bcb4li41NowyOv802Mbk6vFfla%2BA%2BotdsKX8WeEwE1zz2ze8WkWE05Zwqid1dBIEKXevd2IvIno1Hm%2BcbkXjwCa5x3v2hYLmFbx0Ik8DHOm4P20c1IFHJfSfuEc5CTSmfORM%2FZWxmBFmzkfS3C%2FpZKvq%2BCU%2BdfCU6jpC7ygcIVf1ALV3slWHqH9bV79gBj7sQm%2BYe91cUYcEsYGrzXd65Qs%2FmHoOkIC9orXi1v1oSxwTux%2FWBsSX2F5lmDC7tFkczJiYQxk9c4KzNc4TrHfDRB%2BnmtCr9MmX7x48rla7i1Qz8xgMT3Rx%2BJtykopMm490DdErjg%2BSwxEdDL2m%2B1qD9eO0a4HTjz8h1MnUVQkc16oXVpXVJjasVfY5uHbAGy%2BWQGfLfWIRjXrcdRRVfESV0w33P3yGBuGGf2%2FmYG77141OFTpiLY4G%2Fz6sGXnUVPLDWFAhZpxjPTkl1xx%2B11q9gcSTue3seMn8yx0Tw6S7Gpi%2FMOMR4%2FL6N0To%2F%2FesPyPZivvd9AZuz5JHntA9CUDDRz6XVBjqkAfGaoqFVpRWvfFIGlJW2u2jCl4r1s4SQ%2BCTvGLI%2BK2ysCqrLY5xnGepJxFggabu9izPsuPifmqWFmZQogk8qfYareCCRKAMNm0jSasHksKg%2B6XmOslOQ3cjDWYAG5KyEWlnwgO4IHlz9xhtQIHHxkyaqcyWMqlPSRSZY2kHfxI%2Bxt0tf%2BmL5SnLF2f9iWYKrqAUE7PO8%2Fz3QD3s6DT0BEBkVJNdY&X-Amz-Signature=9b95f3cac5e7cc0b3b94bdd8243e39122b97c5eb639a9a7f9584e7d9c050f05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

