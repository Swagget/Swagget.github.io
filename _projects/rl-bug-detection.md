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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AW5O6HF%2F20260603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260603T194001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIE7Vw8GYqe3lisy9bTJiLkVQGiqOIKVak8z3q%2FPKiQbqAiA6gjhOEGI8e721bzcHiygxw10wIA4B7XhvlHMwewKbcyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMyVBbDqp3pxXKoRdgKtwDWICVsT82EoC%2BRud%2BZ%2B0QM9ZPBHcVg6Y7k9UYuBxAROwApJt05GKga1oYIE3baikVsQJw0w4MvioGWPKwFGXc7UrEYOaa0GLDng1315z2KDOUaXzeb6Kff4VDMlhuNAJYKOfGOxlbXaJB0GkCKp2w2ehPAqLhHloNhYSRCm8HuCxvuzjm79PZEaJpQuKCERcOL0bajIh1tcnVBzYN7VY1FQoarMv7gAJsfmidP9n4D8G%2BqnlJkYB2uNggxR8WlKbOStMlFSMKEkSMKXbB8R4dNpW0XSKZjvYq%2F069nDqqSketb7Q4DuYL%2FjYkjNE8yjluRwZL%2B5tz1lsqZ2hefEm0UVrdee9GF5HeuZf7EdUrcffq6iUlrvX6okrFDPWYwvzqTGs%2BozPCRi%2FTAiQV2a19d%2FFgFoRMftv4Tyhy4Y5mMNbeKaxOWHdh0BwiNXq9gu7si%2F6TtrLWHGE5%2FonynadPTg7ajA9e%2Br5OdHCUpJCL1%2BLrDcQhijzU1Mj8m%2BJZOC0YVB9uPDiSIjxXfvHz4xZKqxC%2BL8yxyALqWjuEnMGftOv3prci1K3rFPWSU1ptIEfPeaQwX2jDqutyFhbaDvRIKmKno1lvS3NOlRqGh8uzeWeIJkigoEi73vMol%2B0w9N2B0QY6pgH%2FE4D9WY9iXgBr5Gyn0Yi5Fg%2B7atCbhu0lb%2FAyjglOoy13%2Fpc6KW4uqLF3KwglbWI7ilkJMvaDejTvwlWKikbGk9NYeBCszoHlca4kaiyPs10sb7xTztMDbZnaimqtONUH%2FJWWAJf3z%2BiVLWiGv87MBWwOWdckcW798KkospyCLS5BiHetFkHk4hgn2sPI%2FNzail%2B2C%2BinBsp6cfnJU5MGvgkSU0cc&X-Amz-Signature=af4fa239011b55f5a28d8cd5604926400dfafb1a3eba612be7584fd6576456aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

