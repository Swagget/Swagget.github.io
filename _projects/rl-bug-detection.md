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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VOTDKXB%2F20260619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260619T205850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDC5OaexjhMI4BxVNhgIrzrWCkXceya0D9BKr7f4WKRQIgESR6J9Ih2kjBPgbtFPmLAzDgQYvhCkuJjRSP5pC0wQEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA4gDz%2FIdjtHx4BaCrcA%2Fxqttiyrc2A3ekWIJ83ThV0bLA0umR9rkm5uuZZJK2PZ9xsHk3z3N4G3DkkzGuLv29NA%2BFVNxuuZkPKcdAlPjOqK4fZ8XBTx8rm7ZhidASFfdRGhvjeMc5zsjU%2FGHjh%2BlhKeOl4D%2BKOVrWNbeDnTJHJ5pth%2BBjz0JwKKafn5bJPxa9OfHZWffJhu%2FdBw7Db4zF4W6zL3%2B5YDJe5BPzXgE6ciEkrtIoohyEVlMz2VYyXGMNJrcuzlIzLE%2FwhHGXhk5%2BpX6TxRftLxz0Y1sx9Sfv0nkSOJpALj0wpz%2FxF4rAc2yaD4o%2BROV%2FHLg6JdMHLRRQom5wq%2FEezi6EGP0nO0sH%2Fq1tJvGlqWCC6QTuq80PGX3gqeDa%2BfVBfpzuOxtmx9wyfxMFieVk%2B7OuEyIglozFOIc1NtV1%2FQpQV%2Bzuh%2BEpCylYG3aKHnwxG5WjvH2XGljkl2ybKiIrZdqmA1d6rOOkA7W3vJiyYXVwE3W%2FARZ5OJXvNIzNYoGf6AHq900gEwRzen%2Fd%2BOesJ1maBlcNJPF3ThKgbeTs5lAX4YqOe37kkcRtHcnOHDsA3ngulA9U0s7LyBLrit9ZJeP69RQbfIivWRg0%2BRkDLE0hovmZFDQuovG9cnhhsyTq1BQMOMIbK1tEGOqUByql4lnY2OHeAuQ8Psa60oumovou195BsLznhMU305NwHrF59QzHVv7uj3utiSGufMSoo1SA8KLghoO%2F03J5NCQZOsBlTU20omVqfW1sM38gbKSiuZ6vneLzOMKj1UzDfuQfvZqCF5caXkbRgX5USXRDzTRAQQKdZiCqpIC5lYL0VXkKMtOKgp8TPCdjJ3soNQqC2Fk5H3HUSkp%2BAju7IYuhyAsvZ&X-Amz-Signature=7c3a58eda1c7a48264345bc8a77f8a5fe7253c21b1a1b32ad3bba9c1e661efa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

