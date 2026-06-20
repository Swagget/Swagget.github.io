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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZJ7YIX%2F20260620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260620T065209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCICyqcVIDVxWUcfF9Y2%2BZyH%2FH0B%2Bgqqsa40YF50RBQ9biAiBfiIXctwRO73s%2BbO2Cf5D2zr%2FG9hFz0nUqUvsOOKZekCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy05JgK7iC1rY3sxBKtwDFwQ%2BbW%2FplZ2STcIZB%2BB2yd5H8zP39quPcigOUf7tTv2v6QoS8EkGIb1qT1TDQjEYEMmqEzLqTfUJVC4fyLSKGxOdl9lHFL9L1y4lGuMdHwcIcCQ8m4DWpmt7r0N9%2FH1aeDc80z%2F7PM4gHRJspGknwYp6by9cInfyJB%2BN6bFXWwVKjBUX0fp1Cs2OlpH9pd0lzgSVvl99paTG2bJDwf4%2BtXr5yn%2Bs9%2BgxsiW94s9CvNjktaRWIp6ahCByE0QW9CwFLrkcL5uUREqWzilzPSEuqtNVnlJsN8gRM3E3%2FU%2FpejFjgVbuqt5Lvw8kkNbBJ5WAujGt%2BM795oyDzYkpI6pMclqcLYNPiTwbTk%2BjAnQL%2BlBCdocs32prWn5MQLkjG4RybmpCs1lDNg6hN8m57qPrTrwCbIxnxbYBB5IIQJI4MYNRn7I%2F74EAtzFXDsY0Pbfd2Ce1krKCojscv5T0E9vaphUve8ElLn2b8WQKjSjbgaEprnY562P6kBCZYQuxsnVCw2RmaMzd1DHZPv2I7pQIam2G7PeDpA%2FFRQzxdnTI02%2BuBs8ExeysB8ir5qr39iRjhSjXmwjKvOR3yGRKJ7JnUKHZgOhTvu8hLqQUrtMagqIon4nYL0lKxt1n0xAw4drY0QY6pgFOn7xXX%2BMvFfkpc95IB87shfSBobJAXYSJ%2Bykb5JmAC55sL3xksbeltY68gR03MktSe78ZXSIAunP30dlRYqKGsZUT5Bc3GWZ%2B9nyCm59ao7%2BSukMKbFYT7ofgQO%2FbWuk0QLyOJxGcWfk%2BylrmdmWWdbDFKXdQvvPKltRbxRiynfOR%2FRTDsToOH8W00ClpCaKefI3y4wJG4dbhC1F6c4xZbTrgHfqu&X-Amz-Signature=3fed9b1d885639e3072954f1d20d1340e1fcef98d25230b377caf79478a22d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

