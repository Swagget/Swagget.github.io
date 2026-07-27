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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ACJ2ZKB%2F20260727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260727T172629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC93b5ZGqg66xszSwxa%2BaIx57Is3mfrsMfAsmAjeabyXQIhAIJFjPpGUQk8TKMa%2Fi6ntHcpXocFrBQk05jGOzbX7erpKv8DCFIQABoMNjM3NDIzMTgzODA1IgwNwMuH%2FBfRwL90%2Bz0q3AO5krhgVYgaUzAgUKZoblmrdEs%2FtFuZzFUdQCIwCW478DXhojywBy43Nw8GbZ%2FHAe4LkGRqbtjlwYRckH06CRbPpuOyFg3Qdsi2ESh3Z3aTZdQZcPSZm0FxYhoVtRcRm8gkKw7RKcNlN2Q1BjhsRVDWWxQg7VPfiBjqODdhe8QJkdYv1iQBGCG0WGPJjD8MuB2U6prDkU1UXGzUWWIEk3QKmmW4sF12Vy9K7kKhTXO1Oz8tow%2FnFDNFNbH7vhbBaXKnA53xV74NnX%2Faze%2B3tZOm16Ea7Fv5ri6M2EPOuiGQd5MYKnvAsMffkjwGvihCCOATZlE%2Bl5f%2FV4Z5FQjZVXcSkW0lZVVV9fkTEzg0EX%2F7Sq%2Bf9R9BpaCTsWHgdyGUpP%2FGk9U5SGQmlp%2BZhWPSbuVVrk2%2Bn05B%2BajMULy6vN5qemyj3IOWkx0EhJ0HJCP0ZAIdjZhh6t5aXbD8KbEyX15Pesw0%2BsaPhKGxpeaMH8loE%2B7mf4wyEMxNcnJkWXNC9KiGrtsTvwI3MRlUdTkKpIS%2FvcjvzKPQCV6ovmh3Sq8bNriSjEtVxAkNaWgguE3gple3R4AztiPTcwUUGpLNjvSzd%2F1jWvFfz4%2B0Mz%2FXm40l4E6UwhGeW8hdzwnf7zDpop7TBjqkAeeKaSpjOtUMTVReWj%2BJcrYp9trpvNLH4%2F2RhbeclmF1vtJdWA9rVT3nkurC%2FCnc6tz%2Fq0bNjExN49pUzS7M2GR12IcTm36xtu2LF5XjpBb4%2FE3E3hLHihOWdE9EEeTC0c6hZm4syAF7dG8b4M4JfkAN1gSDo5HKhE7DBT26t92gnq3T7LjR3qPA0R1scXvULB9enEBXHh2%2BBoyp8xZ7MFbGwfYb&X-Amz-Signature=4031a1a4fd93284ed84ddd77e9c637ce06fff3f40e565f291de4115b0603c132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

