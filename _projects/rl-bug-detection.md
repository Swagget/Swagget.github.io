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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWLX7MQL%2F20260714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260714T185731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD%2FTyLiPRYA07rWI5vXyzEmXOKPesERWJI2iQXC%2F1nivQIhAOQ2DYgOZBAzgZ7w%2F5Nm7VHVYu%2FsvqGHHxDkjLq2kbZNKv8DCBsQABoMNjM3NDIzMTgzODA1Igy%2BfFlIiaXDnvQn3S4q3AP2XVoZKpViesXrsySQHjznBflkThm3ExfzKXr5m%2B5IX7iAgiyLatkHDGKhSVYyMbH9pVIgXNt3CLD1Y7qAiAlIJdtNTGnFE9ryltXhpBKrZeGPj6fV22ajdnN2nTcmJ44ahARzxuTCtcKWW%2BrqvnOT8hwfvTzVZMLCXR94ncxmytuzgcD%2F5wIgaftCyH%2BTw%2Fla8SsVfB8S1olNwtKaGuaMiRbp9GwQhAiRnDMYkzhdvWVMjoYzoYlg6SEyyOCTf2isQtK5IALJQzTf3YljrPGc%2Fj%2BHVHX%2FEl1eoh%2BLoSQc4J8T63Sr4qiBHZqCb975lPlv2mLJFVeZN8iSXJPg9CeblARpnxgVBQAtZIJrNiih8E6KwSsaXfL%2FuT1v3LDCxlCVrtyEf%2BcI%2B%2B9xCXp7hHi5Kvj8zf63hmk0mygn1oEVCYlsK4bm6qHUGdY58isggSNJ4XUR4XWSXNtWzyef1dwTKgtlGHwSztmF38Z67jh5nQJL36iog6NVFLieHd1Tr1N4v7LCGQzQA%2BMBPWfbq9J9FeSyzzOiD5NYyDDo7cctlKGpiHHQiZ%2BWOG%2Bj5KGWRyHCDHyCww%2BXNJjfYOJjXBFv0NgCXMdkgoZOXURvV2FnE9pvCctL%2FJr8okUONjDu5NnSBjqkAbjvH%2FrdEWP%2BUMqoJDvayB09INFgTPxsu4RNEiqafhRLogJUfurCX21eYFMkg7vMQqIve1331bDfW13ODSFJ%2BGW38wqz0B3jUO8%2BEmYWD0VcFpAZ06TS4k6Bbhej4gcj5cfL0VIPqCokxe%2FMI3MvdQz%2FubueZTkWtUE3AzNegvrdQHiC4JUQ6gRIR3hfrb1uVnCEYdyK3QUUd%2FBzURuckU%2FZ8LAF&X-Amz-Signature=75f8450a5f9b1bfb8bf6124b13233a5e35a0eaeb66538c2faf6a06217c70ec2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

