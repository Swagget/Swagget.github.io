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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MKLCKS%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T001052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC4sKRBPcdIsHzyovl1hDZHKrkGKn2MqnsjMucfHcPobgIgLBrYaUPY8kcqKTqJs%2BoYpaXV9MyjYErFKe74tA0aGTwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJF%2BaKqVLFAx7nmetSrcA%2BXm%2Bt0kDsLOeE7NM8qvdQJGvH5zHwSGhPwjvLgSLVBX1L%2Ftftz6Smm391jdN465HZ%2Bsj%2FZGUcOprcEt8jOIEksJESxl%2F93GIFIcKdeRTaVos4zRK%2B2kv2pxvt84aDGy9%2BRg1%2BH%2FwUoH%2B%2Fw9qCTYqdG5PwKwak0vxMCT1HFQ%2FCjueXkdpX1Mr81XS15CHe8pOgB3XYgWRP9u%2FUCmvNwEzf0CREE7I%2F3OQ5sQEUtS7kzTNxvde7g96yhb72GIqqsGQD9q6SNWvd5xUAOpykSosL6kjEnFY44Y3v%2FffNEhlE7jcguFKX4wBHUiYh%2BH%2FH4yzA%2Fpdrz7IgOJrwjgeldiU%2Bf6j9U7I5UpEmf%2FfLkgXHD8dKk%2FyVAqnSBPsZa8mgHLAktSBuQHXlNMmgjGzxHtPDeTIWbKo1MRhc5dCqhDyOwydYV%2Bt3wgxpmJmqz1EihrEt2rj%2B6QoHS3Jsss2zocAqEtnbJKwXbrxZdx2JM5VJjSuiLZ%2BN8VtX8BoUVQXagcq45GnHGrstIaVVngj51BoJygSVniTw1mbruxOFajxGyyOi0ODjsMD4zrXKZ8AZTewKbrxjGhdV5EDWqS9MmddHsYOh2gQTSpM7Pb%2FmJ%2FYrDuUD45PblGs2jqnOtDMJ6nstEGOqUBQLSSn5mwnGabteiThEykrhFRkFs43%2FsgAlU%2Bg%2BrC7TwU3%2FOJayHw3FTpm5Vw75mBftttNjRBCb4x0Z2XlHYrfvEbu5mPUBdpgqfg6iFOphfbmk%2BDKgH2C%2B5beC0eCsvr%2B16Lj26mv5Qey%2Fs0OFcg%2Fxqfpp%2Bx2qOgLe%2BrL7Oe6btDjieJN1l%2BhJkBaeoIFw%2BaivXVbjLmVfJuCHu3ujbMZXxXU6ii&X-Amz-Signature=11751231d50dc0bd4786c6e146fac634dcd1ece8afe992f3aea46872f7703be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

