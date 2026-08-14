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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SNWXWUF%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T123457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCK2mjCw439SiuyF%2Br5XD2IxG%2F4T3EVkdBE2SYyk9%2FkCAIgS7ABxT12o05xCt1X63mZk%2BM0e%2FMW5MCxg0h0r86DoDwqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBecj1N5%2BabjVRMN4CrcA0XvhZGBbnbk%2Fyr4oG4fefcF0udAQJf3FlWhKw6vr4rU%2B9wbzVRmtKqzhr85ZMUUNMYbJ4KBMjEgzsChU%2FV3tN8fVIBCG%2BMeTKj5bh7Vlw2E9JTaKiulW3o%2FS8rciGF663h6n6%2BwlviefwOZHugFspNE%2FO2Vq9%2FEZ0hyy2nvMIXpF5fvJ5j2nbiwxVq6WADCy41L8PMTBUdUPPYeO9Y4UUqjxakjfom5Z3d5cOrH5xFp5DvD1oZ%2FBIqWoPS%2F9T6CJhY1cBJChjgiScsQs6jb7RgKynJp%2BTO%2FSswff%2FqW1vjzqHUaDcXaouiXd0JzcLcWiwgQFm6%2BnDUezVCpS9KEGw0Ky8PjbD1iNykSpkynoUPtnvDKvR0IHLkSO6DGXf6sdbao2V40I4%2BFc%2BiB%2F%2B3QUVw0HJvEIFRoTz%2BOcDZpStR%2BCo7KRCIabLM1NjeeQ%2Bkqhih3S7fzoZS5c1slWmqJ68JQR4TNhM7Kj3LgMTAHqXlEKDCKcDwqD9P6tLRRQ67jZe5x7WtV6jKBbl0p98hHNrK5lB9FB%2FIMcbBS27XE6gcGNq8ZsrGrfnYhZdrrjl%2FZeYSUPhAyF4L6dI1PIapJ2bTcQ%2FQqtcLfU7wwSYrvnlgD0x%2Fhiwnm%2Fzo0yruLMOTt%2B9MGOqUBNMip%2BAFsNvbkS2w2w9ZscVQ%2Blf4%2B6or4Up9Fr2WRFYEaHeuI%2F2bQV8%2FMrPIDXDFRZsJ0F94YE0LxufQv8ApF7oE9I4o7aYOzWu8Q8xioRzfHN8ByI6YOV8RhHbh%2FVDKTE%2BZ8rWI35Uov1LRkKq5IeLgvTQw%2FGuxozNLAT33XjUqO0VHeXrVmbqQwrZIWeFe%2F6fUBR3zYuDzmtkJTMnxdSsCf%2BlGf&X-Amz-Signature=dc2b4a5829bda71df16cdf9d5ece0d22d7216d57c9f0717f229f2a875ae78bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

