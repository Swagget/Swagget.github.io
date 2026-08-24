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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQVWRLK7%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T231201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQC2pslTkcwJ7tyTISmEIvzPqbHUpQKmDqmZ9XAJgivz%2BAIgaEWoqIKGG3AMXG8n9RFWZHdruLuPl5thU6KiOUTbLlIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjytgFvPqRfM5%2FBlyrcAxpdIUVLSNpopaMYAtiUAHTuBL%2FYvgpXNBPQRR%2BZo6huttZpuULq8Em%2BJImHvj67c0RM6p%2F0MFv%2BIssZImX5RMDVc0DmilwtD%2Bu9OuTgDU0ichWh1%2FEA%2BWQEjC%2B32VC%2BfKAgO41RoKkYuKRNAf9equxTY9RUpzPWi89Vw2iUXIkn3trlb%2BMnywsGSm909iqFUoIKfSeYv8c5uowtAVB6HTW92%2Bc9uOCJCvGr86Jerrcqp4CbSr7QJ7quD3duwEWgJkPAIyzdN%2BxTGWcKB78mrY5MlRE%2FQ37NRMTDujLO2pdSZ9Sn4j5gdBu8%2FFs0c9%2FFBZZ1BTaGY%2Fjn0VikoIXWYVu%2F8f09dVJcfVwnELwhNk0K9vHi18aAx2iC4eU7TMf1r%2Bqy6lOvWEs%2FWde900BYDJrC0lTmYFZO8e6vLcP3pumpJ57nHPnzAqEGKQzflE2AZ%2F2A54Cwz3%2FZuLgzZypPZfSRCf9cdI2Qe8HmKUNlsjYEDtXOexwhKEQ%2FJHKAyuzX6af714ztuS5oD3xvaocA2fHMA7KY3DiduU0jk0GkjdQeLwYcleOD7ULERBFf0rcvjgqCauJ%2BvfsCpk3jQYOedNVylyyc0cDM7vhQF5oW5De7qFqgH5vw5lr%2Bb%2BSPMMuNs9QGOqUBh4cXwlOKTLhWgOiBW9oQgHNuff%2FzFCeEzcXUzmd1SFVUPjhQy9Ed8BD8BORGjLamUB6QMY%2ByPMO3xTfJaA%2BRQv3RphZp8Thq3%2Fgf2KXtWqNrOyy6OBRNvop0QsgkwA%2BD3eT6DKLBJZZCUWpmkTNx8gJnobxXaHNzK2B9kfHBiNPr029xAgyZuVG3bSAMGoAj%2BnzAwv%2F4coqT8q9%2FnB3u37FdcYOZ&X-Amz-Signature=c15a4d701c5fecb920c519c02b051777543104e3d5c464319c3a1bab5e46ba76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

