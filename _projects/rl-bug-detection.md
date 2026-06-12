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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKX2RA77%2F20260612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260612T095218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkQLvONTdpLuRqf4NQ6593D9eiyhsEFVBYlTNBq2swTQIgFz2STdeJUjKkS%2FVrpjtnbJBg8jR573bIGWmaCfunIOEq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDK1dAFbcbrWGpPtcfyrcA1%2Bl5V5dXuGEHuZvYACxBZjL5M%2FA9rZMxqxFdViI%2BlILWoTzWyVqcfWWYsWEwj5WTksnGMd9wyvD2sXggVj2aEEow0rAMg7IEiKYt5n5NqeFTkPXWts10Sq4x7DGqn8Qq07HP2Y%2BNyiTtfYSY3kmx%2FczxSsjg0xJgK7Xjb%2BsJodkHt%2F%2F%2F7KfEMGDBU9qjKmcmxwvn8%2BNatJTZuVLupPpWW9kyELcurm9Gb8U04XdcN8Z1SU6mNajh6N1fYY3D3lLisDSXzrzTBhh%2BupIOv6837NxSSBZs%2F0SLiy3QPDCqBjGCnnFi59igdSmM98ZwgGuCTWj0yjQvioUwgdiYwjtF2%2BF6foHJlSeh54F9cbCffCA8M%2B6%2FK3nfkKUwMVjIl21I7WqAqQId9Zw7BOr%2FIbLI7%2B3ML1aB8lbWMGLNXS07urWcVz70bgaXNcUinS7VNE1iwC%2FCLzaUBs8G3JLHAoLK8g7MrPJTAADbdxiJT3mVZWFeVutSF6oK%2FJdRouCM%2B8Fsi28Ag37n%2Bb%2BGlWSjMHf0hXzCDKJDQiWOUS6FI30smU9MErtCjTHJ5hx07gfLDw%2BMdgezZLo0nrgrYrlfCuxJQhy1q87JDKXhZ7gG%2B9hW8ZCTFF0DlRJ4iWTB7u5MLb%2FrtEGOqUBD7LYohyJnIx9mhPw0THGsd%2F42PZbhl0v58MsBhQ%2FBYCv1PRLjdABQQcZT1f1U%2F3TfCwfXTFstLEZEFgMUhxr4cgDa5%2BoOJ%2FZy4B6ybUg%2FzzaoLTqyo%2BuhzSkwEBz2J9jNBxXXhpvjEs342GxsHZsiVTk4RhrHJXBO9j%2Fx5U%2Bm3ScKXNv%2BQNbFPRTSpwHtkcHG4rVeD4401s8hDTJ2edIfzIr1R%2FQ&X-Amz-Signature=53a8688200821991ef38790c9cf2cd31c57721c93bd7ce5c256f2b6315bbf0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

