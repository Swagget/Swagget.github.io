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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GEOUVD5%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T143223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCcXkRElAWjrK0b3Ul6TwJJkCRGeMezOh7vlY4l9f3liAIhAOieWQ3JE4MKKnHuPqJ6y2T7qfygPvhrH8dj72rXMQe3Kv8DCAUQABoMNjM3NDIzMTgzODA1Igxg2fj8gz9pCSqSi3Iq3AMaZdYOQzTscFGGAue6I88h4Tx3VatyV%2BHjB0kaa2ud0esr4HBNed5RPFraj5jH47HQZq%2BUZN6VavUoL15%2FhfTz4GWtzrev2ECZZvzmx0UXNkC75CUctylTvurW%2FUd2fgG1LNfy%2BvTyc0GlqmSnqlzpoDEhkzxW9vR85wzg7ZQPdsfWQWur%2BJ%2BYEQcMu6wNLg1j0Fp3VlLHHPhH%2FyUTjnDPLvT%2FFTgUPQ7OnBFv0x88IdatMWJqdUhiqu5ynD5Ribf0CfGGM3m9jTpuzMZrwMM49upTski%2FXUpy%2FdqyolSPmvVbC%2BiAJRJvqf%2FsIXPkB%2FoK%2BgaMbNYrORPj%2BGHvAZjhYkn3lM5JS97ymLnuMXZqN41D%2BYFpqEiuT1clBphbV7K8F1gI%2BOvWRS7ibhuXisOMmutKvrDqHQc9GK7pIH3u1w0xURgF7JBoxbFXBhljQIhD6FPRsaZkLeDESGSbikmavM095us4GTKhwrkiWXYeaazoyHoJq0efJ047SZvJ0gecsIWWseLcdR5uUhJztQr20K1w%2F0MFCSq26fP%2FK7as0Vjl%2BzelNlksBNEBz%2F2ezmHWp5zPmu3bJiopM2WQ3njOmfcGwnWP17uJY%2BNeqsbajnat2gkR5rjzEgj5AzDXjbbUBjqkAQcjmYJHntyENHSZam0gtDAHnVHoGo%2Fx2HqkOZ4ZqRBXRLOOb2lsvjFIPcLF%2B3AwlX1bYGZbfxZ8OYqvWjfqzUD%2FM7G5opkXlTZsiwlzI9KBvaxPRTnYHNYNlDumGBXjYYr3YcKd9%2BDxFUppiOdzzfBWSgQiWLoL%2B9%2F0X2auOx0E7iri%2FNe%2F5j3ycf84lCWFal%2BiRyFZgVf54%2BWaAZbuuQ97%2FyPm&X-Amz-Signature=44df9ca4ac4734df6806ab78388d69f73bad455632e845b550f20bcaf4d7e28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

