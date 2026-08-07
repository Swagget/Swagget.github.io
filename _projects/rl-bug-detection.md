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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX4GSAQE%2F20260807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260807T080322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcUPbzeGCatuhodIXIqZhmHseczKzQ4ylzzdV6ktxXxAiEAlnNwvHnj6fq6SDzHno1ovUTbHdCuwXHELpeHWF8Lk4sq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDLYwW1RniQAQGLoxTyrcA1CZygiPecCZgq7n5KpWpwhl8hdHMQjuN96qXzs8yPAoK7SmNcKI7AdcEIxNHpmua5eac3Dlf035Jefoa63hfgt%2F%2FiOhkriIE%2FkjcrP2LxCixu0wuL7hhQkvv3ldRwY7P22ORiGQM75912bz1iWP9rkv14N0d3SP5H%2FV89Yj5wJjYl1%2Bly8xwtTmrVja5g1fSkhBOUbIFX%2BKhw%2BRPAZWJiX7WK4JEEYQKfR5G81LqEesSVAjD2f%2B9HiU6tkOFMe3%2FWQGbK4hIjUyBQ3ePqBg0qpO4EasICb%2Fj9i8gJloCyDrNYjEa325VgSy5qw%2B%2BT7zG1cdfFAtABd3S5qyBG%2BgERc2A6cxirx68mTHStehd6uUCNmmxgnzn%2Bg0OOmKkEbAOoI90J6CBjZ0GYj1OPp2ztfUwTXcoOavortTDtFBXolxioYI%2BxLBCCzyCp5xFIF4wucQNf379AQeo5XVZ9KpZ7Nc%2B%2BEfDU5lqf3sOB%2BjP0IO98h3enp8AQ6%2FMZsOatYx1At7FtWL0VaoxUqG4tkTmPuyL%2F%2BgRviQZfl5MdambT2eIwoKHXfUYicwsPoSg1vHMakw4LKp0BGLK67vm3Plg2HFPx00F5jc%2BM%2FrajNxQ%2BrHOp%2B0arMpYRQWAWgRMNqO1tMGOqUBma6rSKnsdzZXTuJuwOQHGIFnJ9NPBs%2BncFbCQWkK4YCJUjgDQJlOS1aHAKOfYt%2BKP25UKlQpXrI1ul2ZRm%2F%2Bpef1wcX6r7KSH3XBeuE1QC7F0bPJ%2B%2F%2BO3NeU3glL1b%2BglLKiOP9u42spGvg3QFLHRUuUpQMPe8YzKGgPplW%2Bn5HnCmmFfEX%2FzkxGs6ddfogaIqlmBJYdaC%2B9qyuvCZAAOIhVZ%2BTN&X-Amz-Signature=4ad1f582c790befd09104d85f62eac24986ef553313289c1cedd07fc516452ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

