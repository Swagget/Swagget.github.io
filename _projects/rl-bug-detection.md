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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCBQVG4Y%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T230609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9oulV7if3AsA9CspcTKMDz%2BLwCWqogkgzkBdYfY1WLAiBz0uwx1GXEm%2Fatu7nnMQReQUTGkX9icc08ctorMQrkryr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMvz9ndDEp25gtyC4tKtwDSBmOJ58nPYRcKaj1LhwjSzUgOl1%2FGa4I%2FK9x3DpYST1jjOt1Y%2B%2B2qhivezQISjS8mw6bFuq4rlGj2Amqq13iEHOs0uojD2sRWOgNrsNcBpGgl1h9%2F8zmdIhPnjFSOGXJAN%2BSD9%2Bxic6SRKbLQ9NdJcbBX1xxoBHalLqUG4%2BTGwgjO8wq73nWCgQhfu7F36Dv89fkmQFEm7SVXq7IrQN%2B%2BlLAiiCT1xt46dc4TGEU5e6AGJyQLRb%2FjUpygK2sCsCkXrjicpq%2Ft%2F6z8YJGHYkWSfbn8qBlhtBQerUZjc8s01ock%2FH84YClRqqpXWdRIQBp0ViEqsNZMxlhi9hor7Sa9vnoyXeXUfUMB8dleYIx6a3vwOme5xINfWmnEyRn6DrohIdLOet44QfOB1OrbO%2B3ffoel8RU6fwdbk1YTtlKY9Mj%2F%2F8PWSVQn8IutZfxRMi00M5OeWRHwqRrTur5gVvzwT9iuLHOri6xJIH8Ckhw3%2BShNCSpeVN1Mx%2Br%2Blt6%2B763UsqrW12nOhg400OAIhW3fs%2FojjUmqjibMqQd1JS85kZhmBgmZPEdryVFv0t8vc%2FMOmcjhBhioJXkH%2FJxMrSivPmt5ic17s5ZXCZ9mV3IoQFrVx%2BpOnHWjRL62TQwhtD70QY6pgHfo77WfLeQNKgoL9wGFZm2pj9Q6%2FVUdW8jyUsIOPrV9itNIoX7Wi8PXGWxMYzepGPhbbELiSsC5UvYdYzHHerYubmCOsg2jyS%2BmH94Ch2LwiGTByyd%2B3GVCifpyWjsE0NJeIPV8m3l8R6aQXWzbJBF4MSJ3i8u5W8cPF7hLykKDB3bbSSKr7TuSaTv9%2FL9b8zBZYM1mAtwMoIQbaF950DcpBqk2AhE&X-Amz-Signature=4a4122f608dddbad6fad75a543b3272b357643e1be9efb14f4c9b2d6ccc811b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

