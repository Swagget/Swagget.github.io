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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD66F3D4%2F20260704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260704T132444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD%2Bs%2Bst2suKa3Uy74f9J84zv%2Fk5J98jgqrgxKC%2FMGtGqAIgGkNCPyUsrq0%2BAZ379PLH%2FVLceEXG28XvocWQJUIcctYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBOhErf4xFF%2Bbf880SrcA%2F%2F%2BdlqvjFn38awooTDAcnm%2FGiW%2BCi0WhnyZBvkk7dTnxJwnrLLRTJ7vIRkXAS81zGXO68OixWWcbpiXTxImmTGN5DauUT31FV4uEGtKNjyoKGADWP2YfWCtXLiqUr0GKAxYu1hDdDmpscDUxUrV8x7qSkLXXVrnlaSIYxpJqdVy3Qyfa5OO8Qrknq5ogy3tyEkAEjZMSfv0qeAIRyz75UbFBt%2BuarBtjwFXDrSHl8fLnUfHdbdjfipcXN9xgOzRgmvkjagX6lu%2B5sJIOc6bcLqBYMV%2BuLLV3When5lxzOOSGBzHtBWLWW53gBdDN535nHGbRvjr9z8fMKMokebI4vN4bKM5SeJ5ESscvKOUpvffyn3rscQYu3iXoCfMZjaaYfmBJvRG6ITjGSNCGx54Z9j8qyO%2F1x7ugGdjkeOA3GD5HKv7GP8eK1ZA%2BDLqFsnD%2BaUCJQsCo3KOltOis7mWq8o7zRBYR28PdC98APehudWXYrSFMjXzs5UQWkW3qPW52HldWeVp5ombUkDbwJutENy8jUlTSm3FZZ1rMYfpAOU%2BQ2Jp0CrlZqx4ATuGSqEMavWMyZlO%2BIBtbkVzrZMcKFeGepvNKvqpw110EoZQh1zPKrp5YmBhaXco5HjaMKOio9IGOqUB6oxMJ%2F7IszJkJPVenpgM5XEvT%2FK9jOzcnb77cNRCuuEFkB%2FylTkG1Xx93u4ujKzo1JY2ikQFO%2BP8FKoG%2BhXXwxDenGgahv%2BmOlwCXYGMALQdQEnUr4FGFhNKTgw7WFUK3TuTUHmNoxKj3zj4AKKH18PoLyftoeNlEsuDzFoDO5H6H3%2BGzHuzVxgXfPqSKpYJ602Q3CjqXoELHtu8dtjTE6WUdKSO&X-Amz-Signature=57ca11833ba091f93b43643b7f5ceb6003a8510947d146bce088d63a3af09b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

