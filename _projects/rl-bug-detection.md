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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUS6SLP7%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T235705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAMq652dpOGDAcxzY21IGk3g3dZq9Q6fwfgxHVzOsPhlAiAkjsXUBIy6jHYp8nJTmwVF2GVAO9XoLKjoGmhjkieIPyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJe72bpokVLs4Z6xiKtwDhf624U%2BEsdI5kQVRpc%2FMmXXtYtDj22Yv2HFNGb1VJTtcd2luus9Fi%2FWPYkuX99Pc6kjeg3aEcjm0xkqyaZzLuYz2wQdHKTYB1rSZXn5Rl5c7vylRg6b%2F%2BbxgrnODq9i%2FZl7WMiK4jelxX1FEH7AjgWjhXBzF%2FbqXdWeg8L931eN4FJPQHCE1ViGFuJi13eNSxHD9mZauR8GfWx9lRCQnB7tExV2K1RL%2FQJR8TNCiR15PFraO8ukw45guDn6JfPIsLEpG5bqegZVTDYufpcxk7ny4ACU8%2FclrfW0smTsb1MtbqfBhoi%2FOUO6qvFXxOw%2FA12%2FnPhODXpUSR3vm4QsuJPIsbFl0uBeyRuwALOyG4rRJQcOw4TqwP3w2Ej1GMctuJCgGvj0nJJxLA%2F%2FSMfkfPQ4gq6sJawMXocaNrGG4w17fVaeDR5FMzXmlc%2BzfrPoQ7fiN8o8atvjGggzlbH9GgwP53iu1BatNj%2B73G7%2FQdLgTj1r7hpGeHRzQiBvfWDbiwKiJrOm9EE2OOSbFfEZXbUalYiT5W%2FXGWZIwirDsfECgsa6PLtDhI%2Fmq1fEXN9qrBOCW7zXHaZsw0DBDo2iaDwULm5uedyy4C1ePR207y%2BbMGIYThrVNkaUI3GMw9o3E0wY6pgFbvIJtDTBlWtTKcCmlQBGvCZ1Evk%2FV4U6HYp6z98Tqe16PriPdiOOFC%2F3D0BKi6YVOXn%2BhSnDMxvQo8%2FDGjNaQ9QPKUbGJcuYs5CbulP1TLyIgmqEj1qAWz5hkO9ltxtTviuQnAKNQiEF39yzUnWkSm1NACGbJJO%2FON11BATy9OqwS%2BeJ8PsyPgAV5GJU89SvkYxUR7aEJnKROOkqxeLjF7tV%2BKrp6&X-Amz-Signature=d5eec9015d510aff6e38b56ad5568b416fc17f7d8abf79d79f509fdcf93cbb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

