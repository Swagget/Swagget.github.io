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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQOSKF75%2F20260718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260718T065107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHIs%2FRzVrpkDLGBi4MTfFUCRBaejUUJzY%2B4YlqUspCjwIhAIyYjTNcAXLUfnQuUttTfLqmnjMDN3TVoeEbF92ImrrmKv8DCHAQABoMNjM3NDIzMTgzODA1IgzXGzdmIMACjfezp%2FMq3AMon8ZpFp37Ua6HceZibNvi1aRgA6JPRkh5IWNMuWuw274UExxoDflFuF1omucOhokWH2S2n8D0WEvYPhZs8W7zDdL9CbflIgUnncwBV7EZyx2B60h8fu9D%2BVWdTBV2vTjntktlDumZlZg3ABAoCyo1tRUeAAc17jKtZroeEtHdGfWb7hSjHvKaEnhlNuzeIzLALgqQFosTmJ9Aj5jsmJEIPnnJMgpYWpit3LX7ymQBi%2B8T3FRJkxH6QkAKc9I994ZbairE3%2FTdQr3DHfA9PagLr6%2FlTXmuMbZyMckRPWUS600vKYzmTbrfwNmVsam71peH2N9jkQLC9fW0nqk0tOpeOGHVd4lD2CnEW3ZmMMVjHvRSe2gaZF6nltGK%2BcxSakvhNeTW2kM0%2BuhnCSIZA8ofV%2FoggTiJcou5GiabOejMYFX908UjrFa%2BMMnNwbqYV8yepwRYyxEwLAZUxIDfAOoS%2FM7qIbVuT0X6UWZULxLKvs6eKCROBGJPkhbcMg1iS2GK01m%2FslrYIlNbiCdCMFX%2Frla1yXPE1AyD7mhblLSiUFqZ60kvX6sDaI8MMbxe9O7ep9LlGA%2FfyKYyomyXhSp6ldnkVQVZ0P6u0RC1kQJOPU7ZUvwDrq8YcmZwIDDYwuzSBjqkAdrlHszNi9Fs4DjrTIQZkR5pIZrCnj9Tq2G7V2yCd%2B5wTWqimspU%2FMfvNbi7qlXjrkw7KC%2BhZv78IDNfrEODGKVc4bDgs9vcgqArbFQtxRIAudY0nt0EgNBBMX%2Bco8ts7f6ZvEjA2nhGGzgfm2fOZVyYFDueT%2BQKrHEs8CAKkWyLM4RP%2Ft8A4fAQj%2BpdX3a1jtzyT%2BQUBjTPnNDpDjY6sDq77ibx&X-Amz-Signature=d44ee3771bc6a5feb1ccd6839e7855192886abb2ce3f02b7b381049f34c5b665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

