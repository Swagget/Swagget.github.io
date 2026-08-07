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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5VNZIK%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T163828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYNL5d2OatISEKO%2B5HeG7r7PnfsAwiM8OD8zsixYfonAIgalywqo9JJzRTuFYLqjRryUHByIWvnLo3UgOuJKD2yMQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAmY2WWEshWYYo7d4ircAz9JZfDW02PSkVcQbP0JZi7JxneusflVREIlufH5r5UKCap7PgAesSzEvs7l%2BONGP1iPoEJXq9us5qmVSpF7KKnxTRYxOWMMWWXtR3wko7YDWJeCq128ZYLW1o2HCTCtAi550YOXYjqOJm%2BF6jxVEUtANCl%2Bjc%2FAK4fl0hHKjhqpjErjFEKW9Xep7u%2FnbcM3qsenbERWtrlfHZ204hCFtgOdSqwSH74BFs8Gm7VwUtwi7BACEiYcgxliDYk6JKiJFzu9epQLU7VvXiolBGej%2FdcjQdmYFjNTazsYtGiiMAv3bQe9w69cfffQjZQ6Hys1mwlsYVdP1pPt7H7OtewtmOXus99ulvVcegV1doG5AHPQYsFRlciokRn3qrTjz8lLTCU7dreU9k4VWjSrjWqtlCUuOSsZiCAUE%2BKQFC9pob0NTIpvwNjwVVZ1mGsJ2cyvl7bftIymO38EdorYfl6cZheXu4IucO0UR5JscXM5Plwlv2CAtmqD6Si6t6%2Fby78iFTL%2FsQYmhc0ntiUOGn31O7typ3CofaO3%2B0QUyDbAYAmWVtWOcYP2PjitQuTvfun4V%2FGsAmb6fMN6YxWLGQb%2BewE1My9HTobcxyCJPZ8xP3wgXwkoR4HOwuvFKc1sMIrj19MGOqUB3%2FtMnmeVaKm3Nf%2Fd1RnyARw9WpjWRGgWDUVYFiVs0nqhsnfki8XgF766%2BnUna61yMiWJ9lhScVDgSPSiILnuc2EsoTA0mPKHC1WkZyllh1GzlZfk4kb6kEMCptHDMSCiyev1Cgbi5YBIlyCHBE%2B0qMDsXEJw%2FQhkkUZLCMHFTnwiaX9CEi0WirOHiOvYimDb2qef1GMKzJl%2F4fsGUkLGBNznfnWz&X-Amz-Signature=9a0bf8a41d4e5d07bfadd3dcc77b8782f2929c188d1abe06b5de73d8b87c5fa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

