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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHIBVIFO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T171037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCThvUiFvPc9LVy0ap7JPchOhGxIEZ%2FluPgwmOmne1gGQIhAJ%2FT8dOBGitrz0G%2FK1Uyru%2Bawrwa0AjJl5MSxga9icfeKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS8%2BbDoxDkKE%2F6UjYq3APIgX2t%2FDNu5JaqHcxE4jsPt9gYgX5SliQXmPWwWz93WwI2c3kZ5xvbNldYqPvqzkcx9GZn%2BfiXOOWw7o8wLZlSVlEG4B3ZE9SJ7D4J1zLr3lgDlC7jT%2Bf%2F1KiUsn%2BEO0jfu1bHIRwNNj%2BPcJU6LRVbKr5soffBUMHrY6chjul%2B8Rys5ZtG5RYnEP9A9rCUvDrO7Vg6fPbCz5BISp11j%2BKJYB4WnL8iFWeeTReG7mBccEjtwcmy9WryQZhIvZ0cuh8fXFjwzrguhRSfS8c9JwI49QqJ4M01lzSmv2gNACB10UAiJKwikeXWVpO%2BL%2BkGmXK0%2FZPdWjqt%2BbLJ3KvO2sJifaIn4LT7TwI6Q2lcx607%2BXSKxklvoJ594nBzMfY3v22P0P5w1vIJoswDu1h%2B8mF3YaSK%2BrqEaXk1MEFP11W2G6FLXix6bu5U%2FM1DacMnD2q%2FDZL9cK5BOeVfhuqaW2ry3pEmqf3uBk%2FQfBJLyxmBVYZpjJElQS2xV4x8dAm1GD6zw0RcYg05AB1DPg9Mw3HMMDrojPr6hu0wwG2HYOlaqgiHdy8z0hJKgtDYnutpX1OisRxWY%2FUAlz2JkWZObaYo8jJc4%2FdyCBh70ysVTMyEXJKCe7lMKq1CHGiksTDT%2F6vUBjqkAfI2sewjS13DLjudWS7EGofdkx1%2BY6F4PXO%2F%2FCHucmnuPcYTg5VBqvYrDQ%2B8IzK%2FCUeo9rtYw1hiAbansN80hvl43Hz37ba7Jn9YC%2FnfPBpx%2FEaUVpbKU2NVB4to5uklBYASgVPYowqjFb8tGQRqz0dohxEwmdoB8NXv7S1%2FlvbMUdPh7Zvm0Q3uK6LyGSF72onJznistvHsJD998%2BU1qlz%2Flbgl&X-Amz-Signature=9b5aa278d4087ba4785b9260093a99bab17440b394269dc9c23ecef3346c8913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

