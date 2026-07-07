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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NQ7WLA%2F20260707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260707T224903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsiSCs1TC89SRrhr803Nq2Aj5GQV8tiu5N%2B2IjfwebVAiEAlN191W5GuBP0wyCjC2wQ3%2FLHlTaZbVSBC4JX18xYArkq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIWENkN4MsJzt6oiFCrcA9NI6b8VixToZfTCTSiR4Pcp9a28UsrIjuzVPMHn0ID5oJmXUwWDsWoxtyxJbvSVSXuNi1nFLnT5rp%2BgRz3hxO1XFadAuFB5r2u3lS9gONHIdvciPWEh7Q3q8ilMVKBLNLPn%2FKzqsQj0GMydmGDKoM%2F%2Fbiq9fj4S7UDJahyNXfk16qoiYr9QW%2FR5T0s9gT3x6NWGWI%2FQ67sxtn0%2FVhth8vGBCJl1XVOmVUcIuNLYmMLMQP0H93xkSMhyT1qkUmxj0UyiwcJWuouTUtqtWfRWpLsfpJ6AEHmZEmvrF4epfuEj38fPcJ1xJOmDI4BsvTUDZn9gbPR%2BE8z6b0TDt%2FlKCsTPTPOgHAZ4HkpR%2BkacEPb%2Ba67%2FXi%2F1u0yOfd%2BzVj3lQiEtRdj1fca5%2F7wT%2FpzBS6QPtXuC398dixXxNpqh5Q2HZpM%2BUWIuBKggsDwxdfitL9a8cVHzhGbVUjh4KEks3%2Bu4mrfXOg9NB7aXQYFP0gHFzTk3mDs6n7EAior9gAYMjjlvEb1QbDHv2u7Ncfay8pNvymUtFoSyBzx7w73jWFGjM987Bn77C4ZMCCIf6BKDEQGasCaK50HaLzlXCHImwoElsK2mXbnpQvQNT1rTqio6s1bA8OGqhwRhfc0HMNvRtdIGOqUBgybeOgYID5LTeR%2Fiua8o4jpkky9Tjl1iA8P5nuy9zhD3liLj%2B425h%2BCbrsHraH%2BAaZZ0hJH%2B8ZTdun7mZgjn6xkcbi0QHhU9gHc5Wyw%2F9EBHKOo1GXhQbIPtr5OQroJzU2F%2Fmpa0lShR852JouSyWYANch45Nh6xi7uIATp742h2BJtAiZAvolYzSUQhy9eoSI0md99Q9vhbW8LaxcMzNwohZDNz&X-Amz-Signature=ba6288319bad4bacebde3fc65b7a4efb6544ceb4c269fbebcc079682eb89a792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

