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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743HLDAI%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T062653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCL4ahMS99t1ZTipLs29QVUpdJQq4MG%2BKsQ%2FRtO29FJTQIhANyqUlqPYja9A%2BvtuF8q8OGCjShUJX%2FXUsx3FLbmwvBHKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2BDyy6%2Fx%2F9CYaii2Qq3AOhIP8swxU09BTdLZUMamhBDhIqEDXdvGCAMxTD94SCX7t3VCYjUUK%2FRh8B5E1FgnfRYorOTe0uRrCzgk9jxp9zLy0g6glLPgmXORWPLxklKptzTb1gK2OyOFE9EoCQNmIEU15Kr7r9lOr0lZ7MlMI0ALyxD3g78SyR2rmc9Bk94zvTTN10Hl6poudperMJl5tE0lilufds6aZyU5%2FQNag3X24gbySOgrvN4xS7QpyqAeXn2xkjutLzpad%2BARhiv4hETW1MhC5P5SBUbTVAWcI%2FncTBrKy0qm1fBw%2BcV6tG%2BHXfd2Dj4dIEcYXAphNOR3382waf2dyESks2bJgauc8b5pa9t6soiwp6zmi9%2Bp6zdW4srXMzIzlrPVvQ9X8dUGp%2Bg3tXc0x%2Fb0aLJ44pl31DuiMaKfC4ivZ29ppxPaOrQFKxLif8xhCjpspBbPnpSfEeY16V6QWWdz0qA4xT%2FWxI44Hmjk7Wj8MN16N8lVXSmghrjYUcDWKikUO706TYe%2By8skEKLM8IKavTbXc4MSbuyCSEfZPGzA7bZwjzwFSFjKXKH8e0DOSaRzG5UBinSTXHe3LZVPeC3WYS7aAbz%2FsS%2Fz%2Bmau%2BpvQpUwSlQehQj45MtfTO2lnmQNOEkWTD5zYrUBjqkAfgOpwvEGgwzCVR1%2F1DkGnjXE3CSWTgVpVKa2E2gx9ujd1BFC8hI4YrsOnyO00EY4OLzAy%2Fvnl9Zy1O8itoFV5jHNFeDZRZ8qVV1Md4zQw3ODvTpPEVLFVgagEUfzQ0ObQNwYarTN0Np%2BFA9g5JvOTjWolZD1dmZWmqDkwz1S538wpbKihfUafCTcZJ8vNJDz2QBDSGXCATvQv8vMFezGlbXP6E6&X-Amz-Signature=7e3ad4765dc8763570b472c1080fe7f3dc1bf10b43982982347c4cdff8256226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

