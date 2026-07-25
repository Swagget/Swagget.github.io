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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4XXVEL%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T012227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDAcAsBceUmvDVeF%2BIrimKFRv6GsrUwxhCdbHjmUP5pfQIgXo%2FPs%2FzFHavGyMLa7gT5%2FV5z9lTIkn9EvGy3%2B774qyUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHzcQ2EDzSoh%2F55v%2BSrcA93XdQVlUQoKVRkVPnnA0bvrTkFhkp5bgCHA%2BflnOl%2FTgtF%2BlwKfPNGf9WJe4%2FC4hFNjFL8CqG6nyqdG%2F2qHVPqvSSQAGQFrjI7oryvj7tZTzTjcvv0rekG6SMZYNt7tejzqCJ8tK%2Bbcaed2XrzqcpAl8c9XmpMCulgDrDomAzbrI6mbJCr6UqhV1wPeYVWKsl61kAo68T6pHgeh%2Bv5SotAO11Fxa7EOvlNj7JtAoKBCe2Y9VfHO23EzFnTzyMfnZVf6iq270HwxH2c1OsnaXFEuoIxgt9F9Hw6%2FkfwJH8dgeMu3Z19ibW0pN8p%2FC%2BnVdNDVW7dFfaCbD4MgXF57E2XPBri%2Frf1ICnJ5J3WhMDvELzG4C%2FBoXhA%2FlR4DVNOTt97WDot%2BheX%2BIwFth9SZ21NXZHckE5fNUSgBX2tIE4Phgxm5GgsXTxWlev5HHVKQ9iIZvqZyf6gyiFP9aCYR6TywhExfEEVvWfYb4qOYT6ghsCUqeBXCghdttzTKp9pueisrO8NTF8WrVF08XeJHGgZx19jPLqhO1FyQbPzpMsj3xIHi2k82wfONUDlTfDLQpNdAlxhWK7t%2FSLoKBnRxcBZ5xgUMW5lL3mk%2B77IB9BrHr%2F7zvLWY4oxplbfUMO3nj9MGOqUBYXr%2BODLTbu1KI66B9NR6RhCdiLC2enUUCoptafG108oVZaRcpU%2B%2F5w3VKQa4tY%2BE4QoV%2BeSATdn3ovrCpPZ5qTYHR3meFqH7lMyCbbHHeJCNGmzQ2Qc6aObXxPvL96gQ6ziRnpJmwFYB8kxyzVotNnBYZCHXPRxNaji9fpvL0LY%2Bruzq5T%2BVFZNaFFR5kf%2BOZsxM6pO6zNUJrlAC33EWzaE8V06O&X-Amz-Signature=a9de267d4b69a2e8a0f2481c679f075a953fe7b15cfd49d859fba98a979cf619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

