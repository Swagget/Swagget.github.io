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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IGI7DK%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T020928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAz9WiSSbgGsiIBi5dn7nVp9MUV6p8G5y142f0C%2FnZEAiAwCO1CcFE%2BKynPMdJknXylzMMf6aGX4mAcWKe%2B%2FvwcHCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYWMcKz0tnTt7lBWXKtwDGGMRS646A9NpcCYWtEiS7roB6pg5dgrYgaytFhJACgknEEeFIW9MgEegdZxLsUtujD%2Bs2xNlALrjpmkdewPUZNMq%2FcxhyQyS58hYyFKwT1Z4SmkESGDjWhHLZNdaZEuAAjkAWAtmC18obo3pM7%2F%2BGKDpTUfwAL%2B4JVh6l6mW0kW9Vx0eY%2FM4heudRnkbnR5DhostLPyvq7sh3rzDCpyfG0lpDXe%2FX0hiG1w6VwVWAtYpWvuxZb%2F%2F33JVs342%2Bq2eSAIqZD%2FrhRRE3cG6suvq2yidtldJzQRu7fE4uBJO9%2BzXqN6nv1jlXhqyXEPcyHCbd%2B%2BCQaayfz1fnb6HoHpDtpIh4g4v8HuNmoTJIZQexAGRUvRhKyYNvl9dtpO6oQ0UYis6tUcCZvE8epP6Gqt9SC%2BTO7g%2BG%2BIu7KE3sxkwaP8BDSv%2B02A%2FPBzmD%2FhD8JKrVtSK9HHXRnJ19%2FfNKbJmlQGuIgemnIlOON5PYsj1MvAF0nDbo20sSBJq2dv6PejnrkKEvc3epdaaON4KGpbSHA99iS5l6CENny%2F9kFxVXHKgQHTga9vUoJowWgoaU%2Bakp7aPEQLYvqIDH20P2IqiH48tNdU47G94xsQbDO46d%2F2iV2XG9md57iYvKCkwo46T0QY6pgFDpF1JC8On6723c%2Bct47b1kWAq3CWFITYpip3h03LKJRWneOaJVychvq1sVZplHPe7qN72GV%2F268fYYm3l5tPNvy6TfuGL2kZUWu3i80d%2BDXMxTqxkQS9kvj3N4KgWm7l1z%2BymxIEYu1X6ellamgUAVeB4SbJS3tYjxouiLRT7r%2B4zMbp84cOjtCJcinxG4N3zCB%2B0piCPJKH3s%2BMSKxmo%2F5lMFYjP&X-Amz-Signature=8f09a045de440e6b9852cc4f2ff7f0b840289f9eafa04a7d2f9f5c78ceb903f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

