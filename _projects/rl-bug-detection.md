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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIN34YZT%2F20260912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260912T172909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEViVr4qPNurjlcOlvGsgpFXKELFnxgSOgeVOxqtdya8AiA70VbogpZ2phpQ%2FWQtZVgRTn9tDzgSFx5AukSxAbCsMSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaz6jqJgZvL5gNyG6KtwDWe47FmfDyc9rp9SMqQPBkekesez4I2EkIrgt7jOZvKwXhdrHznzWacPcVlJJ6eGcQ9k3Liou1Hh7rzSG%2BUSX5kQrEKQ314%2B6rmYIMry0IOylhzNejxDP6CmJ7cwBRKojDivEBJxKmqmrrwWgHzTVzsI0rqOUaSJ%2BKu9cUjrhlU3gN4wQhsAUwyZBBK4ITtNZvOhmOvdbyMCRNsF7a5NALeWIuDzveQHbSz2vS9IakDGl9WXUvtNeIpjHWlWft1PP0B9mOyMr6qIOILpQ8UskWZhzMRZoVzcKz4oI6jQKpmdeEwp6eeHall%2BukWLN1UBRsJJGY%2FwQscEvLpK7A2poqZqLLg0dxD%2BQ32d%2FRuULd7L934BEuR7rijMnEKyHSBMFdHKBOKETOefHlFsv4cejRAx0h9%2F9%2BjF2ZMZvoWM1iIi2AxPBoiuXNSGGV7IgAh62AITg9RUy5W%2BDzp7G6a9%2F7LHZ4IuWaPNrK2jehxYI%2B87r6JvtJtTGx6LDcL7aWoHrWenuvigwD5b%2BJuWPb0ozpe8U5OKVohThf8NpjmQLrgwqAWE3rlM7mCV%2BFKG79zvFyIAXI5NLQD9b3DTdOpZpA1x1VSAm5sAuQaPgVACF59Jf6fXtUZ0Z4KjRWJEwpZWW1QY6pgG%2Bks35Lap3ZCkNdT98eLONUDlUbfEE%2Fr7AKZppcJdfU2G0SHhLSvZN4ndwxZkm2ZtZlXLx4lzCl12p%2B8eKYHqnhsRmVMfdgvw%2F0NCJv6kbLuID0kMSBgIO%2FYLlA0oMjbhgTnd8ZFcVm4s3pkRRsGeCh3JycKhxVWAEkjbgt1MAeZFPkmDyKuTF8SOO7avW%2Bn%2BsuoRgNrHnyYmW7zELa0Lt3yFgkc3S&X-Amz-Signature=139dec23c8ca611fe0f8609fc56ac5d6e34f66bf3877bb0dee98700c3f68ee7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

