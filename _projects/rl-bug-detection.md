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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655F3ZYIQ%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T200235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDif%2BrwXa%2Bpvt25JsXLxQsNMeA%2FMLpGgGTgXVpgKkhJ%2BQIhANgQrpbnJ3bBlHqWOwzEvpJf1dnjMybI6oBZG4K3PoTvKv8DCCwQABoMNjM3NDIzMTgzODA1IgwQhNjc5pkEjp7GXB4q3AOJ6yywKaWfagwsRv0iC%2ByEXPzB%2BAmlRgACq3Vle44AyL78HafXWfvEdNsyRi2Yd2elGPdl44oPCdezz39z17%2ByfN1DqldLlnyaNhVTd7RwqwyrNBz4XK2KzSSU9cc79Ny7U7LadtGkcOJSW%2FjUeSCrqekXtxuzTatFWsANScSLnuhlXHJZpFD4pvO6xqyGVf29HKiiAUbN5rI9gkrDHQX%2BTLuFdLoTccREBE8t%2BrEnJA%2FPDISnLcFLq0EOIxkMtVkj9GcQdyXT0yG7rfrsEKRzEFcOWcEEsPUCyJ8TpSr82TfKDK1Vj4nrR6Xw4tLc0mJvqwYc1ABKMttpnXtQyZ9wka5kqqKSfiWYiwDXumS8cC9qJq%2Fd5TQnHBq3PlauqPn77NmTxXjLnJztaZpEOOeRaJr8JVgR0TSLFpyZzaN3jSP%2BYT4S3w4CV9gHpe32KZHsOwdsG1YtlEp350rYNs8hPTX1WOIxcsnbkZxMBoOUuOAJNvs50Ii2rc1g0rduUrEn1edGszYs%2BmQZBONqrMb6lsZgOikMOxyLNfT0GdnlANzxo42kzEX8Fg9078McmLQK5xBOz4ooTPS36GTJyH1hRQ%2Bot4HZIOVFqOaRHTuIaAC9Iix2uFrlmZgulDDPrqXSBjqkAdMeN%2F7%2BIKb4OSQu0JEiEQamTLg8gqP11VRh0YHh%2Biv4GFcKG8717tVhVfzVEFzy7HXO6uq4hMSy4P4fJLnt3zipCmnuMvkI8hYFJ9TjD844B9cCL0lnQ71quRJmo6QETnfAVhCslz7XBoMl4DblY2pj8i1GtqSPX5oL%2BZJHP1cjFICdxnlQwH89LL4lQxFt%2BesOYIrTWmXqTCQolKeykfwfcjfK&X-Amz-Signature=1959475a54b0df149af2934c88bb18a57b93c9ee12def39271df9f814ed2f093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

