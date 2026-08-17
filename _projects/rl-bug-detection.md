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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYRYQJT%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICKQqGimdxsVVn8BTBxiqmafgJ%2B7it1r49POrzHz3CntAiAazkyLJhsrnlFxptb0QrjubwawU6WPRFfr4W72fRrA3Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMvdtGkCNsaiBtne0zKtwD5MtmhaAu8Q5UV5zVu%2FUTa5pFvpSAX3C2%2BEmSbdawEmD834dUaDo4E2FreFqs9KW63%2ByiyG2LTvnrDDLjgRx2QiMkFwC815pSnJs9GnXwTQ3V6z0D4ooOrB%2FVSkdboxjJi%2Fc2EQ4OsoZyQi21Yga7zlGMTs5EDsjZXk92Mf2pj1YnZCTmPzonWLeGU6OhcptowoaB37cWKZSKgqKUYcg0qlIZRqzcXxBAUeVycdNovLC9yXYyp%2Fq9ApxNGo3YymIwmmtK61sEM5FFjh6aTfaHW%2BbTAZAEz37ZXKJ264QGjU7EKj9T1KoEVZTGtaF4tfUsrncWbloEcIRxmWsmY2Wt5ASO0W3QLgL6m1zY2a9Sa39oOgIiyeIa0PdaHM1MT7xojPZgAXTX6Zisoe1bcCcwGoRcfq%2B3NAVL1mOb8W7F6%2BUb55uGmFwvitQvwSrgW%2FowYT%2F5nA9GzQSAsxSKWa7GF3rcX3Q%2FRiogFquwOoMIj8g%2FItiR2g86t8dlORA7T3AjTEb6iRiy5ZMfYX9srO9j3tbO7Yos1eeNLIfufLwoptRdM3R6CHCm2OsVl%2FUxahOs5WR5EmGVXUGlxjViJzN%2FHO2uXzczUbkIhcWatzii9%2FQnIJAW0OIFpkfA%2BWYwzq6J1AY6pgEO4SSLNp7UO%2FHhIxr66hgfCu5DcKDBjB4guztihklSfhJezeSggM6avMHlpASPWkRNyr4jJWkhab02O6blJ4vZ0mTuqUv2HWaJifexcv6TX5BSwDg8NsvS%2BR95sWvHR1pyUssNWD4RiUBB%2B8l4PLZnXaZzddmicinj6WbXah6EwenrJ97cgmR8hITdvG8WYQIK8NLRrIjhGIyxy3fWJ0IT7UvbCmGI&X-Amz-Signature=09637cf3de5ffec90fc031f2967413788350a0313dea304d2bdc754f93923aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

