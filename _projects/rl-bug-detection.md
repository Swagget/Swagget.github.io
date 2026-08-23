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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BISXDQI%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T141116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBttFTa1mgw6Gz7fr6VW39w2o7%2BQJEyzZJgfFIyNB162AiEA7%2Bh%2FVrTF08ilGKfEzSv%2By0EdRETGxa%2BY8pvCQBRCC2kqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHk6lk1IA94dB33TBircA53bN221524y3B%2F0wF3TcJklLVB7H68psPuugHFLhN3GUTowvU%2FjnpqGlUOvHNhjTf2xYDmEfUJoQf1VKAiFcPdNyLLuA%2FFXF%2FetOjePgwBazlnovrog%2BLf7%2FIU9uiJlKjs%2B3SGC3dwZ7Gs2tyAChHdcgJACMBkWMq%2BZ6rOlMhf4RDqR0J436XgIGAN0JBEbSL8k2n43DHKF6t3WHyXsLv%2BVV4TrZ2%2FIfyHFxAD5Bl96z3Nsfi4h%2FVddI%2F%2FavaMpkOeBWYmsNO0IpO4ztiWTDyDRiR4MFMqGelkwfS54KaRBdm0NXDoNko2MEd3wSMH37Zb%2BcQh2WvrX%2FtUsCWdH91TGAG%2BJOFDypXpYJOXii3PFdRTokibkJg7LLPn%2BcYIJg7%2Bph9jSAaxRBhWS8QwaHGi7OJLE6GD1CadiZqoZ7pHXWIgY%2BZnnAGZ%2BBeK9c2qugbVjMJ24wdu6WE1uAGcpZOgPuRKIRkkixbmetdsl6ADDkHkMWwoED%2BR53%2BcDDCIL8ixkkMhvTAyb%2FXaTxnYb3oVEjqj93bTnL6KkZjTwCWz06jQWeNfjQLz3jvSnKnGY%2B2js6IxZnqDo3rQ%2B4uL7wn0J3P%2BqTY4VuHXmd5jJWcdOddFzD%2FZYMS7vuzAyMNHYqtQGOqUBerGvU3OSURqpDPcAtqUdAtQ5Qz0cRweM9vubcXSkn0mAIrDqOOXDQa269qLg3psFZHLLzGNlBekFO22h57zcLCQP4LwRznuPH364IYoqBpHkEepixCbx7l%2FuO1MPkfljaxSFAbmJBdfVbj5gzlHns%2B%2BEaShKYm%2B82w1qwQEDXI4%2BZ%2BvoUiR4ICJxWXey5jNeIQzhD1W9FNREEt0EmHfk6eOEfiRR&X-Amz-Signature=b5d1a66be2283405adffc0dbc1eb937c7491d25ee8797688381a7aefebbb300c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

