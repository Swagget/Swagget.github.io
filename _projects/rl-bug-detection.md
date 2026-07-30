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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MDX7RSG%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T225515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD46wPNMQSjUoeXrda35FzHbbW4Ej6wq4Ty%2Fdlrb2SaMAIhAMfBBwyW%2FEnxS49h7zcRngDFztwE1TDr7osXsAHvHrypKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXlRuE6lQ1BUzO4uoq3APzuVx40YmPBWc4HiLeEMFH4RsNh5N5ZFDgb7hrUU9pWcXoEb%2B2lsG0OJcsULeQBWbDkZKa%2BsBMI9E7k2hbKlWPUwkTP9tv047DxDya%2BP%2FLn2EmalAbCg6Rxa7N%2FmUEmAL7hS59MbMGPYswhhCjfrx5bSeW9iOuz%2BUkjt%2BKh%2BtLnIX8lMwAxhxCGkfroCpOH3BYL2QyeYfwmdPbkGXdwTuMm2jYc5YFLrb1j3YnrHEnRu9tXw4%2BY0pag3X8cRb5HoPjAmbMl7yCtMv74qXYUdWPUPoS9w8gIDA6GqM9A1drQi4WJSvRRfGZLfDkmR8jq3Xt9GkInKezwQwEAZj8Sg8cHauaB9jYxLubMpw5sRXk7hJEDAvcGq%2FZZNDZ33WGoM4xbj7amoR7q%2FZa0wN9Lk6ZimYP9RCU%2FlxS5Xa57Zu96KdyGo9eGqOvspdhN9mVed3EFvw0UCQqSRFA%2BAHpy6GNHig8d8Q%2FWhi%2BRBVfAre0iFz00jn6U4a8Um49uaY76Gmz%2BmevRATi0ZTfU3dN4fJW0GvPsvbrViSroT580dubmXgNpK6puaLhzVtmHkSqtMbV%2BC0V1idTnt%2F2oRlgWgVs%2FeBjkZnHfkMrvXJtfWdGWkOwN2ksv4mgiVOaXjD6oq%2FTBjqkARSUXCxCR%2BQ8Aai5zpcvnJR0tmvhmmYH3LIbwZgU1X8uyATnqp2Pd6OZdE2g3euirFeh7aicSK%2FesP6bNsoHmSFz0Tbv1VXfyckMwWN8hLRcQi2vmR8KeFxjOaSk8DV4PEpuAGfR0J3I%2FS8d52gtvyRn3GhKQrE3R0cTUeUmUKKfSd4%2BEqN4nE8BFiliQeAQc0S9PRSIXbTEsAlKkgEg7%2BNPGWFZ&X-Amz-Signature=85e0c0ffd2297978f807dd8e8b6b0d3533dbbde58c2c859ed58682566e8f4cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

