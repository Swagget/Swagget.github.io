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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZQL3ZG%2F20260723%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260723T180504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEDwyScVTuY%2F9GjoEfYtzXLCqNyRTPr5GlhjCoyQaOWXAiBG6Z7Cc2vn2EUJgTKYDA3WgeYSwm6ncck0lwspRP6ueCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQzvbrgRj3jxVwORzKtwDZCbHjpAc6r2qnYRborKqIVNdPtfweQvP5kpikYlbfSNSPxwc12XFuQoG7VUO4Qlyllt5JjLlFFHZbnbVHucLOt1y6OpsqJf5sRUbjVOV7dASvi2%2FuRz4nu1ushRLfNH%2FUmOM6v1TgpsA1%2FrcAASdTjyCpArdhHxYo4G%2FSVUbyZSyAgm0vGIr9WtTFoJO0RbG9WB2mrAsKjtbovpuUS7IMtmBPvN%2FobBg8vCF%2FOibgpVV6dSfKcKjhJceDkYXldezy8hvkJUsNGv3VpSD%2BEH9CUOEooW68yH%2FMdiSp4KJkE%2Bvf7%2FWo0vXw8xESZNPZ4ZISmySN5ddqPLlDcNJJ6u7KR94xjEvAc1cLjFfySAAJMb34sKZRleedJhxaJacsgzw7Dtn31Uek5bbnhsThx6AIyoqSl0X9gwYwdWku6bKprUYENZS4%2FqQgun2oj13WM36mWmaw9FypUpGGFVVTUNn4tIySEfVRAVl2w%2By8o8LOsIGHfioZrlr11Hkx4WP6UFkhQkxXdvT4AEd8b0EsNZDFcDOBtmZEESjTAKdgT%2B%2BneP6Djq4Zyz8GjR1KzpbLBnDpAZISOcpBM0dTSo5P%2FOOSGFsUSYmmhcNSgZwopyh0%2FEWpuNAYw%2ByIN1l6kMwuIqJ0wY6pgGciBFTElF3LCKrkYhT4kx%2F4y1enJlkKhJ0JMvCjdwqbJLhNQe4y%2BkEnkywq9EZCi8EtCzhIB3qvE%2BPkC5Vek%2Fp26G3Q26p2FlHrZ2Ts1wejGGTg1KbFHyN%2BM6cYCSpoaM2xu%2FHDTaZGCdn1T%2Bv3y%2BJUn92sc%2Br%2BgXNQa2WVl9HEM9qviF20%2BQh%2Bk514dHxMrK%2BM%2BcazXYTSOKNAuO69az%2F7zaeZULB&X-Amz-Signature=9baaa27d4443b9cedb303e6007d0b04171206b7473807be522a82cd2296dd2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

