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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIKHULJO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T204951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwWbySZsZT36iz7Rf9V86%2Ba1zP9StS0O5lJlTO0Kg9QwIhAI7haWfOfkjfH8KXt65EmYE6gn4D%2Frtzk5aOINXGQzLtKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2Ghp6dlgf70eWYFcq3AP%2F%2FQq5FCefw7oXezE8lJ4PsK9wSmVMEex2RS7RBCbQO%2BFjK7Pazs46o%2FXzsFhZqst0GqD%2FPy3Gt4mzkMAizm7X3ayC4wjPM%2BwTehm3k7PgBAtLiaOeRa8mxCuAkQb1lWUvfi%2FMF0bmTtH2tJGeNucXqvOrGBEH0XPjG3XTMaDY5Vpa9KzjtdhSctSWaKG3B6q3N4xG24Fte1zHRZo9FwzAVtkJ4ba1Mc0Ywn72ukrn5GXcPibZCR5In%2F4uj4Q7PzLCRGpAh7i7QF2c6uLVR4DCW4tDtwzEL58lTlJRLQbBblf3AvTyaSzlt9v%2BicRocarcSNY4qOI1iCs95N8awMYz3dd0fCWl6h%2FfBleZUq7U1uuqysRGOpe2HmJpjkxF4nk5ab12F4I8szxI%2BGnbrsnvn9RCxjJkjfjXxAFppgH5CaOj2feqy6hmaKjgABUwr2kkyCDbnzCJqryHjTI%2BvCZ2iUydKVG7vNhFYIlM35fhpeQEEBdXnTCPYeGzmTaK39%2BlCHZtWqNOBfvdXfHQ5GDhCcFF3LRGEO6SrHnhRoWWcV%2BtjznESyzXeJpxGnxEFDUbmL%2FwtXybP0Zpc3Rwd1G0ic%2Fqtd3HQmEiXQalbROTnrEKUxNiI%2Bwv6PkHeTCpmbPTBjqkAaI%2BSsIY44tO0WJlZZ%2FKoDp7W5aOMLdMvhrRvG%2BcrofteD%2Bo51St5jxDeLbATzayjxKfj4WMJYvNMlvv6IP7187bnrEjgxvXasUcQtQ0mPisTK1WurH21IBUFHgP29TQUEucB0FF7rPAEZ4AGAr7DYse98fJeYOx9GYweGXy82zXvvPs3Nfj7PkiD5GUFaZ5Sq6129EsrIRsWB5Y9jwEBQXsjjMG&X-Amz-Signature=1105d3561c73021221be4582b5dfe5c2f6332c34e433da8c6c50c8a6c8b5f781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

