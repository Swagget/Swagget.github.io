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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLDHJZB%2F20260908%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260908T014041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F98rMM2mL5Qs8o6XU9MetoAy9aaPdmtaLzrZJ1UfJyAIhALSJjsghgO8iuCeo4YPo5SkSlAm0YcV35mSLnl4CtvkRKv8DCEkQABoMNjM3NDIzMTgzODA1Igy3i65gY2CUrLOW%2BZcq3AO78sCgQnHi6HWy0THgw%2FhS6VssaPHMFN4TRaC9Kjb1cqy6eIY0BAoHa9HZ71iMjzNIawydC5fxTd4yWhfYTdDB5C5HmBI02nKnXIy5XAI3Ncd7YRw%2BkzrRttA3wp51X%2Fdu2KIjAtYux8AjZqlSlmVtUgLCxKTpN5wVVt53%2BWhL5U95d5KI7cpY2Th8cXszAUwYi3hPsvTIm4SKWid8T2OCRUIeyzXUw02cGxvdOUF0Ga3BoSFxhiAwZD8KI39hNPXEZAAqhuQXHN1a%2BKx3lk2RhzBNR3tETvK74BjMq57USurFqG5re4MepKgMwgTKtLV6XTMIZ8eUOXYLhXRCTsCrYAr8aM40ww%2Bgp0n%2FPp59lq5bWYZmWZImdetabQymNlqvZYSe0H9xCzGm3LylUUGuMrK5W4PgAK0V08LmL0I1oxzYx2aQaJf9XQttdmaEQEEKeRWv6kB179qzaK1pKJTj7KCP3rfDrRGClUZQmlBSbrCtNC7MnqEKrohTZf2DQZmxjydgS%2BCHWBCU9x%2BM7nqpLPzSoo2rGLy3kljp7CrPwZu3qkkaD6CdZda67Y8nVfcBOC5xtHdx5YrBdkadSuEOPdH4f1dPFvWvBUFH4xAR6BsM85Ps2H0fbCWUeTDLpf3UBjqkASJdhCL38fhqFCLx9x8JygIlWWX0JaSyGRb3kp1%2BSnl8pY6s%2F61kVhNCmKeVy9Lr2PUCpI5V83FUt3OJK53jBbKLSdNJPjOVf50XaW8eVwhc5IJiY%2F4vhXSySOIS2hblgNp48ooaLbgCh%2BE4NanconCSa%2FCbD9WCtKNIV84g%2BC%2FS%2BBhml5VBjSZr2orjv7qOLQ2JOIgGoQk930jy2Hf7YPN0xQeP&X-Amz-Signature=9177df9388680eb41ada2753425c1c4d59553721cefe72807b2c8d56687089de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

