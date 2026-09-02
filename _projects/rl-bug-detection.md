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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVJ32XD%2F20260902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260902T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGVIAUnPkcDCRZmJ7U57bX4tezLZJ20YPQN3MTayOFAAiBCfylOPbFWHvq%2B3G0txO2keMEZpyIlbFcQ47JntMSe0yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkG1muElbu7vT5RGKtwD0oqyP75t8WywIrxuxWu98%2FG23vWVlP93%2BEIPhIF7aiMTjLtLEte9UdRavrCwUhRryTtGdBhPKJFeBh88dvT%2FG%2FpsTU%2BV1J2meQzZ195fu%2Ft1LNeYIF8RPORxmVZv8ZvYo49o9d71PTzWhgzc21qNjYgGK%2FMfjZ0qQxNBxtRbYGb0%2B1M57Ufd2D4G96py4imTV6UDEfUz%2FMZTBNHU8Ln1m%2FvGH%2FknRoSgb6ZE%2FqecHu%2FyfZ6dc6fw%2BRXNBtIu0DLhZTfamSXQZptJgi3beUmH8a7zENTXDBvqAMEcCc%2FrSXBLCl6MbWJydZiZTJs7bovhHeLK%2F3ke98D2%2FfQACANo34Aa9xhteqIy%2BQT3Hs6MfI0UpfGHJDYQIxVNO9P%2B1CexbdSTFUOf4f2ycCN%2FPknxDFhXlsYg%2FMkjuWbMnLbVTTJpOW2Q40yKv7o12h5jiD%2BKE1UxxT4G6DlLQbNFyyhEQG4g6vIuX2JK0ylNmazkvE0OWt%2FPa6nPIJyE3E3JQ0fDiWoSC%2FOFD8GsiJxbis7ssK%2FRmxHLwRkQdB5V48CpOVUZK0LWZzUmgFyPKAd6EYrU5ifMsUDfIg3w%2F35mhzIm2P8aaoyQhe7%2BlmZewmPxdDUt79gWjXU8UVQFm2gwkKve1AY6pgHf5hn8Vdiad9WD%2BFUvdLejHAM52VjiETz8Fr4PADNPTWnba8e1%2B0W8jHQQActjKIrpbJ2bncRLjHzsK0zzvQ8YNINFDDbyO6BOv6CmvyK1T%2B89FxXjHNXVcInQIBspvpu1U5YiztT%2F3bczwkWpKODtRIIv7KvMx59yrKWOYabV8DUl7J1Y8vDvmWnlYd3W63beRgrkAI2p5LhYB0dEsX%2FRSeD5UHWD&X-Amz-Signature=d41bd8e42dc220b2380f04aac1d7949c0f4c75e586c472e193ea024daaa84185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

