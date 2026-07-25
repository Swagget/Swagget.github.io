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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPI4ASPK%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T092413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCICjsTHBpahwvVY3g9GBUVCGr0cGMeVO6lJ05V2vn74%2B2AiEAmLKJwhRcvdlWou85Yq9Tm4WuZR%2Fga42FmIUq5LlNJXIq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDFLj2vr6gS7LxgMWXircA9131MNKvPQBsQNiWmSbmzOWNE0CgcUmzVbEmY1lcrN9keTFYAHNSSL96S3zW3VaZb3X2Kxe%2FIfu7S3cgIPounaaNYEnRZMlxmVxjD%2B6AZILJHYVa0avqxeZ74ITlUYk6IStoDFcyX6PTWlqn6V4HLxx0JA6TBqDegj8eJGv9mRdDoJ2%2FnmZxTSzFAcjUo2XsnZOjvGGwN6gFT%2FDCfDCC2d7SgSYkmQXW6QStBEvTiwqeKg1fQvty5lE45MKRxsCy4qYNoMTd%2FAmhJGgu9%2FQVez8q%2BnlI6eWVIF6JQTfaatZunmHc76d2QOeSKT3gG6YrkYRTcQbiHDpK9q4JZrVXL%2FRdkwIsXaYinfvdz2bs9MgU%2BXLDuSynMiJNt4X9hZtWGXKxgqiLnUuzw3YPFmKRuG9DBMIob2U2pLQSJFg6OAoEPn1iKT%2B5tpxhOFCQ%2Fbg1pZ8KCSVsEW4aFkRPzblwZc4dxnfDAOI%2BvWdONQbIdtuyinsuwhgM7sISKzZl9lWBAKMlNm3eKe7Xoem8tBE%2BL0dXH1NgZAFtPWAAw5vcLj2vxci%2B8KWu6vIfW4qKjH2ZxH2ZaKAz0mWJWHKnfKU%2FiEp4q8J2hIgOnu5q9XLy5WIgotyCG8qE5gi9O%2B0MLrhkdMGOqUB1H3RioeAeXAuomR5cK3YQh3mMw2wANZJWsFJuk5Zu2Ql5LjWqs%2FzltO%2FfwxxogIBsw3CeyuOr0XSlYO2%2FfPAz6Z3z%2FHF%2FCTggnL6CgV6e9vd1qrGTJ0iK2XnwvG%2BOoj6jp6R%2F1NG6fyUT5zYrCEtOZPMTtcXMgnf8%2Fm67jdINbCL9LVvkSUmGRukvhkTbWkdG3TJ0Fm6ozILNAFB4lrBykygglmV&X-Amz-Signature=3b6365e18bb3892b8e232d5be58e6af82fe28d56e509cae91657516148f086d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

