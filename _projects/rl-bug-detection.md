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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W24UOBCC%2F20260820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260820T092100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtsO8tDZ7L2d0oZsNqWIYGuBH7fUchQM8ck8A%2BJffrkAiEAqJ%2FfOzXujq06LSQbjPTPSJgUj1tiU5u2Uynlve6LArsqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7Wu6P%2F%2FkdYlQyBUSrcA%2F4vHkhf1Hk9YRAnUr36FUpGdEf4PKjHtbLN83YJjC6zLwRzgOnV%2B7A%2BgE%2FiRFKVsDfvDjPVtlAY9L%2FB5zcSHtG6Hm9cMkOWMNbwiG7MRbaAv74vjwdeOC%2Bk71LI7dOAfRVFQ80%2BUhj2cUh2Jtx7gNck5y%2B4zekeiU0yWs3DNYekOQiRXSMjLp17q2zUAi6UmUDhfkJegFAldjR3ggvaaMJ3bF4OTEJqSDhuMArQclEaJ6hRakMPsjlQVkzsCYDdE6B68VSe%2Bdblx8Mpk2ZjeTRVt6zRgtvbav2Hy1cfdIlTm7sv0zC9BRcLBJkGdSM211RwCkJvv5nNcUwjMvJW0B84yoSusZBmErBI6R1IKw6UUqix4RwwH1lsMzsa0gnb0rvQiXXWZ1IBenzW%2F0ugERSJkURqNUteDVB02uLLhkZB5OkSUJgraU8g8s43kliRpKpD2dyqJakPN8ugDxGBDjUJgxWbon8tsxvz6XE%2BId7fraDxQ4QxMhSHfWXczmK%2BIyNxerbd0H2qQmnfpM%2BD9H4%2BGuFFtKcMeXIV18h%2BdH05Xz71XWlL9ik5y%2BXAfGeqynym8A8a8%2BzItPL92QpS7dvDyQ2xLw8zbF5G3MFlhMT7Us3c6aYc2mKBgdWkMPPumtQGOqUByyS3rQU1oNTYDbm4mfPxxXv%2B9DLQp6hft93CH6lQNKbXkBRO37y6jh3B9sXtjzTS1QhBJqKddJJQe7jyqfK7eK6TiI3iVsN1Qt%2BqHko762mqYyIrO%2B61Y5VSy6Kp%2FRkhg51Aaa5x4mmOJU5aaDYAVVNdYFtwHEIZsjEHnMJ38UFRjsvYlLGiiYXxxJOxqiMx%2BMO2090gLocZGPj9ckOHTnggq%2BqO&X-Amz-Signature=fe5f495533e8143e5c8c39af40a31396b3c96bc6889e3c2f5645a0c996f88b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

