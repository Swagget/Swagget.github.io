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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FITOVWC%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T082809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkRRzSj%2BdzBxwjv4R1XeDfHNGIlGD9Rddn21UXvEoXGAiBe5w9WLPEYyRUj89Lh0SPtlzK7j7VQ%2B4AXbBTwJrJMNyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRIAJvlmwkG6fkW%2F%2BKtwDEn31iAF1wUyRHhJLNrphC7rJRUKfzmUh7noKsD%2B8IFul9hitHshOzPjiItWeG9XJ7nSqxNF9Hg2ETezzJ9EG4jfqUqvztydDq6bIFpW4ofCnAwbFJsAaJp2yHyqAhy2uiJmMlrhN7wmu3E1sYl%2F4A8cgAOy8U8Gl9OqLmlHooAJL5itavCm1jU8Uva6Ofa6eH4ROoYDucU9RuqCJsppplBM%2B1fiHmFvqHEcOkzI07ntzlTEhavWGDlwGNIWF6aQ6g4YgJtDrTTqdU71BN1dB9PDpUskvOdsAptSCtpLUIykERH8azVS5tXyEwC4cPPpYal%2BfPhMBy%2FqRXVHK3dBkSz2N5FxCVXiMztj0spLP4ctlJAS5n51F19aUQKdfk71La2t4o2P%2BkuSXWbB7bpnyE68nNbZgQp7k7AuFrUGngALRrHp7gE5L5%2FKTGX%2BbgsD66lZws002S8OEY7s40jLIHac7aJQPqxAsv79o6RlVyT65KAz7Sv4XZKwK80Vh%2BV7sT3xlpHSUlGX%2BYmuzFJ9Rc%2FIQP%2FLseVqJ3lrMutHkTDd1DjAy7NI9NWdHwXuXHT8xv6VH%2Bih5iFzUmVzEnIsVPWdchTL0NUirRQcuddHmMKtKiJU%2F47E238707U4wobex0wY6pgGSXFgxCA2tPF1Cw8ezcmbonI2RZ31cJuNt%2Bu5AzsbLRIDD1JyCPt%2BYOT8%2FRlDOPGJvHfb7XC7%2FLqNW0Q%2BMluAwsj7%2BgXWKK5HKWkYeit8keqUxj2Ze9VaZxpN35RnnnRgPNzBx3eWuqwzKaJS8vdlXIDbECEbV2kxYSZI0Rg9sIoXUig70%2B8kL1hKmVkRLOjjl3Gg2W3NXgXQlaeHzUxtTOZSf%2FXNk&X-Amz-Signature=de89af64eff83085aac6d7f1fe7fb6c0c39c9444cf3aa5de6836ef7820379243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

