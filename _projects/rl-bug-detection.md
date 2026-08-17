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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNAVESS%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T141511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDxZh7iPgdZctGgxHfBxcxOktzqwl7lPf%2BAt5IMyI0voAIgMXNG%2FfVL0yBWFeZeLRrDlgNIRNsh%2B7JJ2d%2B0HqmyToIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJWx4eLZi1Hijwa4QircAwWajDijw%2Ft46FMG9YwHWdM7Peh2OIBlgvXYY22K%2F1X5aEM4Ja8r2lUZGIhh6z5iDMjWh5PAH8hzjKCL4l%2Fod2ldl%2FQG8Ktdl%2Bdwmg9dv%2B9x7TJrygqwwJd007xUDSjZ52vwFFvGX2JI1eKv6UMiBln%2B5P51PMKJd2tpqULHKfWx01a2I9aY7AXH0aELK06z29kJdz0BebMEh0Fdv4WAie7sQBTWarULwMLuS66AqgR6r%2FScNwz6wE7GLIR2o4yu2C86HXRlI6JyP%2FO00ZL93fCZlTXhvGbdTqJFwV7wWnXRpJWtTm0HW4mm9sn%2BJnoaccCz4rWsaAe9AKQ4KmVXz977lxkhkW6HlmzeM5ysKffDfBbduN3i5IQAImXRmzLhoZlhjnAO5TCJ%2BuYTzqI9On7Uv6whFdl64dDZcNT8LS0UG0ltxnOjUgkkWlsoIBSYFvSc%2Brc1VVFmd%2BcoHBRgTANB7oOwiieRoqZI2bwCFY2KfRZh2mCwyZ0vJuCwlBj2GIG%2B5l4vaoISOIrpr9aNA3W9kDGtR1SmItaemg14LVJn80melH13Jbb2jeXqsD46DaZRC9d1KK5akX3kRGGRLTVHxFA3gRwClMyMRq0s2tJlFwiZmlizx1EypqvTMMD0i9QGOqUBazc4kEz99z7M%2Bi05A7fUj1efFi83gIv2V4Jsq%2BZi4skv7SOqh8ZtAGZCU0UjmB5FutlJFe19GBgC6k7uOYo1RbmGWSRxDbmAnPvlZV%2Fl6UdaBLNOu2La%2FYbMNJD2UOKYksrIwFXaYDaMwz2OAYiWWl4Y6Gcryo8UD9xbSjf%2BfQTnJS6qI8O5oWEatTif73ZmLs5AAWJZystGd6fLbk0ZT8fUOiIA&X-Amz-Signature=1163164c49377b29391e3e938fe026adab7bdc698bda26e23905e8e6f2f8fb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

