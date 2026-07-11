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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q43JIJSR%2F20260711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260711T234014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC2mUrL2lS1BuuRVTQGKnuQ5shh1u9CXImnNHip2YkZMAIhAP%2Bp%2FSEcaHM2fV1eo71fWHWwmfwp1Aeqcl7dlisU35u5KogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNQDuoAgt7HU%2F%2FBsIq3AM7Ake9VfFawTLJso6WX8xjTVISELa1rMqAMkb5pOrrjWWGjbquWuy7I94broTPnj4FctpyRjF1Esa2M3G%2FrAaRVj65p7ZVlpHO%2FFtbGynGI0MsHi9V3%2FoTf06zMXE5dlUeipBXmJpEJWgDIIwrqdZ1AgtHWg1pDWJ0JqsxRJff3wAYl7uMDr8PvJM2XQ9RCQ5aYtg2Wq6H1BIdUaeCidDYJfQzURwjV4xWmgGyYPKxmxmUcKBUQeCbT2Sx6bRHhA2Ev4P%2FiaYDn99cOZkFimTWTK6pLWCHv99J65daDpItOB0DQmtikJwGJyNqbhLY12l%2BvPaGHc2IzyRqF7nVv4La%2F2gSAlqzY%2Fta5gpTfLXEzOGdGetFx663LY%2FosgvOE%2Ffx1eITQXcCNgvG%2BbhdfgbL6814WCcAAByoWvWVNSqkh6z8VytV%2BdxHE17ftUn6C2m8jCSp5wadK0PVOnI%2BcmuNOzCXlEJX6t3jPKgHcqs3Cfe%2BYG10K%2BGrm6JntdDPrbmfZGpieE74OUWvqx4QHAXbtd8HaEQNjO4j4yRqGgaLSB1Q9Nb0Pe91c5PynJ470GXhEen%2BNB1AtJXrxFNzYQVpIrPdqMuxO3iL%2FMSVnTXgIz7qWgJi1PsroEcpkTCT6MrSBjqkARwdo8c%2ByLTpZnXwku%2BtAP5pt1hpHxavEDxJVm1N9T0Zp7zNC9GFrF9ydFrJku5Vs%2FIkFk5Tg5BPEW5iUWHxW4KQpj%2B5ZqXk43obg4gN4HMyxekjeciGrSbSmp2xEUNUZ0JjLlkez7UYDlZIjm%2FGvBwqYBgxOqb%2BYamB9tO%2F65tRqpGt7xssnKUPVGsqCHHwGoUKuDOS6xKntXyOTb2byT%2FSJBFu&X-Amz-Signature=fa7191bd13f066cd00e51028e1a2c5bae40e46cf567ccaf5b9438c386d3e0596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

