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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGF52BS%2F20260905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260905T183814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDwloT0VxQoy0xRiAtIbWoT69is9HKbDck6IOApWDrc6wIhALZo1O1F5zOlNBi1O0zH5%2BlTCnrEz71REDBJ49tdrlgVKv8DCBMQABoMNjM3NDIzMTgzODA1Igyk7BDJfkDAWoSRYhAq3AOy1S%2FqbLzZlSAdnutyiZ4Ku28p5AUxyQozFLAnpcSRxiPpFjcKdoGTLACuO92fU3mFHzb8WVES5IWGrixP8IjWUDUlbLlRSSXjbQBj5971askEFZgpO6PYN75u9tVZdjVAVNPqytvOSoB7v3syUqiVOWK0CZJo3ttb%2Fqjb07EhkN8gqbMN2%2F3IszeJSGGadFZ5qAoIdcgxoZ%2FSjMP4uUSpotRIcPNrULbPjYMefi%2B0EyKPBtKAQktAzMxmQwCv%2Bv6P6WsmDTbvyf3J%2FT34o%2BeE5CdDqg1%2BWc7%2FnvEg3%2FMSdOmZCH8El8KhHspcdhzLwO1F9avpL4O9Uz0KXa4a5R1JmCKLPpsC86KcLdh6jrz5FjXlkqWyW9i2L1EtUF2KBPJzo6ugVJq6PW0bIxNnGobcJqSJkZ023iFY4XuHa5Waq9LWSyHi%2F9SQ96GqlDeu6z%2BIIBU8UOVp0Z268W0j%2BM6TREOtEV2mj%2B%2B4023lnxLKrFgcCyy4TBmC1gvtq%2Bq02lBlzwOZW70h5Mo6JrvcXVRk4DZD6jOMHhaQPIK2fRZTzt0yClapv9WcyATBNObAjFbKF%2B2Tz%2Fm8Aj1Ou8PULtk5%2FViRCrGFN7cCs1u7H7CjQaRKtb%2Bqmf5bz4p5azC3tvHUBjqkAXft%2FEoWpfIeI168qRjNCBzcoM6lsa%2B%2B3KKWoyH3SRyqhc8t7mQ8vrSYg%2BMZdaHintYYhX%2FClwIyVNFNrrxOdfn3%2BoF0El3X7y%2FXnLZA6u9naEz1wOVrKmL1SlzpuGOXh5DzsLt4RTKKxWlIkkO4EiG7Vpa5x93iBHvhhC0zv8GIEwyq4ksiqx5NgRkr5YA%2BAEJhzzNdf8qeYts29z1kBC0tauCH&X-Amz-Signature=8387edc0e1a39f66535f4015885e0f05f22dbc808acbd8738ae9e5dcc7b2e198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

