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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZGL5ZLH%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T202612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKCgu51RHT8TWQMGhRi7jSr6Qr6JEBpqozBMCjnMeCMQIhAOhosbmymdQMokZwWn5TLlzW8oe0D%2FuRdHwCPf2aoT0rKv8DCF0QABoMNjM3NDIzMTgzODA1IgzWLHeM8eFuV%2FeJGxUq3AObkLDIc13U04AhxP%2BosERtJal5rIqEB5F4o3ZNyqWk2lXyctAfBiiHo7MIUKUYLYly%2Fhk6I4cTbD%2BdzoUoZtnlk23YX3qBPtMTM8FBfTuTGJa10O4cMNVXLM%2FnuPIU5AkuD%2Bgu1eB7vHPVfbYXqGjgepmNGxKZWlk8sonR4f3XL56xZYtAVZnqN1P6Af8rVQ9heL0bNinevDCdcvfCAtoALwT6thyI%2BJy0t7lf9vl%2BrAAkobBbe35IuuPysT3%2B3iI5iKuX03kGuZRsv6yLUFLxFJT8OvGdC62v3m8op6PUvUfh3yOz%2BZ2SzlvVeP%2FYUT%2F9XU6dfFN9QruoA%2B6yJTrCxsUp1uxn%2BV9U3NZV2r7Z3u6575CSPh%2FlFsmMQ%2BMN06%2FXFccI%2BRO%2FZzIcqExJjI%2B2qoZWMj81Yx%2FUJ2yib3Z5tBKAdanbVV5W9zo39AZY7w7wUn9UoEchKh0rviy1R31OlZOEaF%2FVmTOB56hl7gQCgqKctEOKQX5lzgzGBa1sXcG0wo7%2BdwoN4MgEtNnXfFzfoQCunqSEaZaT9Vmbn4NX7cTRHzn5vbaMYqiQLGg2T5iQZQNmkQw2%2BYWLur9i5UunnzaCQ5iWkd0q4tqrGap0mqwhcoD0PkDbdpd1%2BTD7%2BtjTBjqkATyMUKYUeu4AljtA3WA1CX6iu3vSM8h8oshRas0pXuZF73KVEfhGh09x2Id461WjbeZGXyTz6QUll2CWZUNoO1qOWPZ9a06rD84VTewb%2FQLqIq4ZCEtZ1v9gwEUFvmI9lgvF4szSyX6XwKYzVPjEmf7R0KxFmW%2BqpifPDr1xe5k8WihrMyXguVjXDhX7ioRXeUSZNp8m6vxvlZCw1n3ueaHXGNYw&X-Amz-Signature=d75c74402f2374db7d659dcb1caadea83ffb968392f43e061dd07e2b1b68188a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

