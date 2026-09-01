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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VRKDAQV%2F20260901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260901T201327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLN%2Btrdeibm2lPKVmuAbAO308x559qGoTYFCAIBANYwQIhANrhibvBIW4me0rCLqfh2yyWAQsl4SFOtOFUAD%2F2ILT8KogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqXFURMJUBx0yCGE0q3APpSXA5doxzLiP%2BhdkV8h7%2Fjzde5GbT8sUsmg26jKYl%2FnVxmgqMzPfWuO6RgEcjpgF9FxbF4fto5vHWJz%2F12AEmz0IuxZJaHO84DTtRhlCC4isGEFn9LwbIpYGoqiULWr4N6mWAH7S6ZqBwAp9pcvXQmBPkVq6YHbcfIuwCpw3X8uMFEJIIyMckojQ5cc1trIFAWgO%2FtNMYdVYOgzxNSzmcgcd6%2F1x3Tb0FyhMsHK4bwRaupgroaE9q7lu2iSgV3vEJpv4RF08ep8j3ZmuVBi8MwGk%2BtvBc5mAuJP9vdvToZDyK%2Fjcfg328s7haqKMZPJDRWW68LKRzOB2GshL%2BW4a8IYNDL%2F7duofv70%2FKzHe3V5klfnmln6ZCdKDxDLxfVNeDmMv8PUVEtWVd7cYd6CqDeZd3X17ecs1Avy0krltJ2xLRytxF0ciAy%2BhN9M%2FkB7l1WPbNCMfeCJwRNusvpr455GlVs33BP%2FeLfxeFF26jppyQnakB0ZXs51Z2AQasfXT7WrD8QFKTzs07Adp2ju2bI9YxJ15V9rtAylXzDbTffy7458ZIvQ2wIqsdg9t8ZqqvFi57DUBiRVvaywX1RW3T74UFC6CX%2FIeGw4GnykO50hQ665UkbP%2B2hmjHUDDN2tzUBjqkARv7RXLYdrUzHsdh%2BhPNs25W24Zg1OBy95TfWrzWgue64DOEkwg8FSncqr2cdMnTO%2B0rrMs6qf7GZLspjGcfk6mzmUKQ2XAWp6Cmrh%2FSdxhyAfU1xXkcIEjQBpGq1NneHKCx5pTErHz5CT%2BBwJXS5vc7FdTnW%2BLNos%2FjAIUPPyzgF34fKmIr3lEksa44KS1yA7qC8L%2FUp81RuapAYAlTMsxXheS%2F&X-Amz-Signature=2727a5372677ad1f93f1dd42685ad590a12b9f660f903ac87598514530de0115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

