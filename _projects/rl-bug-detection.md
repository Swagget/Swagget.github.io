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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKRQ3QJ%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T161653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFqyKGKkwZCD8ccIhHp16nAc6Osne1gO3NMv3F7CHCAgIhANIl8s24ONcUs%2FVl0SwE3wx1RopRjhfgDgxoS2Z6j%2FFzKv8DCHEQABoMNjM3NDIzMTgzODA1Igzwe60BDkGktEUX%2FIwq3AMq%2BNnMT5wuHY7GDAOyG4d1k45%2FSALuEy2AUZMPoP4Z48CdXt4eJhkSxO5Obk1Y4Z1nwS5lh0LBgTtdxwLvAJDZKgYWTAehkbotOPmX4A7pW5eIO43sognfI7qGvB3%2FnToeCJLnVVWt5GtyFHBSxHV0IW7UNSiPNFOsxD0w2KH4TRY7I%2FJuGQyLOBgUbAINaUBDcJpg93MapN8VeW4nv1nhkSNLmkDY68VQat8%2BA9A4kqHq0PP0v6U51c%2BzMy15%2BlUCFPr2u%2BYIpt%2B4RY8OlhbZRFNwPgA1P2JcVD8PgWhsAK0QpIE%2FnoAw%2FdNk93SEsr6jQAzzk7JxO8gx2HFyyCmpx9TnKr2bN1ianR9RfX6PZTOJkVDNdR54Cg1r2Mwat7AC0GY3skO2VJRAHHvygj6%2FUjcWIZh4GqjP2pvZ4EXPgpnUMBE3K5EeKZY%2FDTBXve2%2FEY4%2F1auwlnU7vrDQr%2FqNJme3d%2FuBqZBg0V%2Bjj5QtKwYAkQUwCj1v8c%2FIPB1qIiejVaZWH6tv7Xg0tDf%2FvVYi8hwoasd0Rd2OJl7c4Exm3%2FYYPcPj9XlJBWG19hoMrmwPNhdzgva0VDszmDNogz6xFVOQ3NQ7ooxMzOYfeKe1h4KLIZ2kqJJy58vkazCyn93TBjqkAURMkG2rSLc7WcGI1SEEjvY0lowClSOGpvFgGVxKCjbefqO%2BTqPUYgGBld%2FdQQVq19sWHfSvN9wAXwZvcpglNU%2BsxvsBsC%2BxVILb9ej8waHy6PgpgSP65sKDJCyhgDQrxCzv6q521nuQH4ShEzyV5%2FJE0qTYc3fp0pkwHksPVMZOxxd0gngY9DsoYn6cCfPD60FgilBsJVyQ8nbztrlq%2FZAPXMSu&X-Amz-Signature=2518db5d50748705a70b90e657999538b5bc32b2d1b19d18496d4c7ccd3a6815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

