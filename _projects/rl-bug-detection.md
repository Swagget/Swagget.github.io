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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXS6KJYC%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T173652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCtewXHKtsKDthRipDhYCS8oOyOj%2FJZt%2FHKP6asWRtOnQIhALua%2FloEJprg1vdxoYFK8mngFJJ52yJ5L8WObqPkJ%2F1aKv8DCAIQABoMNjM3NDIzMTgzODA1IgzTyOvVEYqr9y3yUl8q3AN8eavxagAGkAuOSB2Zbl%2BRCchlWzc45m3WGJnWWodJro%2FV55i9R4fnWlVlVOkevRt3vLdmpgQtiioVQ2COB3hRNNqVLWGCmGIkswkvtHqY0oHJNNIwtPUnobQvFtB%2FXlkIuGiUiypK%2FkWKSkxjuHAiu9OcrEfPjVxkBiE%2FzjXZi%2FHqPSQT%2F%2Bg0kh%2BkYqveWqXpPjGcaYw7unv4vHN5%2BS7VVLsm6NIkKuBsOG4LDrxpKUzj2zqf4f0RhP7YWCtCeXfNmWzNzr3ZW2I0PG47w0aVenhsK3vfIDQl8SxBCLAls%2BUvqQtOCynUteMaorg1T5xeShRnB80DfJUMnupmKNOOBNBBHr1BhGAKmEoMCxJLkK0nknWFFbAoFuhBcnew7xuGxkawBULhOo4RKNLplZrhuYtqmGFKY05ATdRCYaKSVGd6mTndiqlBaqwYKTXEEuDmOk1Iplg8qUTSbANUyFVam6WoaZSD7wdPA4iZUSs1YGw4T%2BKsbfcXdK6JnkJDSEc8Hrvadv%2Bw8zVm%2FzdM%2BWdKDh2WCOD70%2BxdB1CW0JQNAgAWNhz0QxFj3Tu7WoV%2FIJfKOISbdWRbQZUInjh8lOPMTeSEfXl58UpciLZA7SOMBzK4jTAYYbDo9kvjUzDHzavRBjqkAS1LzaDSkBZJG7oJri70RSZ%2FOhh4RkmTexca9wgZyCBDVcAvr4zCctZ%2F8XFhvTdyxrwLV76kmiWvLyX6zod6vpN2Eiu4x9Qv0orjrWAj5D1TadPa7lTI26hSrIx6WRZIhtDHXYJ4POCGGe6u6x6AnQWvMRBoeK0SU1dUeZdIYw8BmGIjZyAvrjVtoia0wFq3bbadDoJqTALr8rXnh4ifTrCp00qz&X-Amz-Signature=964dd0bcb5c0ed6bdb2db44b44b2255c998b9093d1f8e21d9c8fbb2ced5f6031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

