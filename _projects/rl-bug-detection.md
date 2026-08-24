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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVVBRNI%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T111558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHDUtzI0tNn0fkMF4A4W0Xq2zcXJHzAijh%2Fgqb%2B%2BOiNtAiEAh8Bw%2B0mKsX5YWbsa3j6TRVX56V8nrE4m8GWqwjgX5j8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL90NtgdF7MnQ2JqHSrcA%2B7u%2Bc8pxQssmvJCgxGct8whyfL1tgqvFAZX%2FczTThlUN7Fz3CAU1FXHldvtd2Zdt96wNX0ySPKy1NGRXV5jsBYNmEhcIt4AtxWjPC%2BC%2FmTVcCHTkH8xqaB3qboDrYoVkUsubiPLuhnQYUGqR84Ni5USp1qmik%2Fo2WLMuxhsDj0dHSHPdQGtC9g4TK6dnPmUwLrEOPkQrgMqQ5FZTTJqH3b6aDcT5alkadHThnmx2%2BG0OkrqH8%2FYtwAAXK1VpRe9GbfjQAh82Un4p5f3mtbP6sAD7Fi3IvA2Sb1f6RzwC6CYKNkcQ0GquIEus9Ssjpw5TsmLCEZ1f%2Fu8se458bFDa90gZ8NPiWsAJwShOVuSrTJMJBSyQpJhOhJ9SQh3tvXv56vUVW5PpRQQrIpbmn4z0asg2IN8A5qkOe05vDmgLkhlwMGmJo8zWXz3h3zsF2mNuzZTvR1GGp5kteDyw4RCWgw7Eb%2Fa1EP1uu7i%2B6NWi5MkabqajpCI3ZM5XAqWomzjCsimIJrgBpUTlpJlb74XMPVKRU0CjZ%2BKbgPCIZ9gqpR5ei3LuPwyCVYvBkSFrtYzzSUUhe0VdJVFo0JmJ9gUYrz3K1p06pE3ItgZEe0TSrUp6H8w4rVtNZZ93va3MIuesNQGOqUBxJAI4tsmLPhaWSKRBbp32OCstp5nBTGzFhOa0S%2B%2FUhKegGhbGwQXIUEqrBL9X3hF4ti2xx6YUkce2V5pC1mVT1pZMH2X2SbSZRL9DSKelrsjnXW8uMxGJTl3ahAhptqzswnivF6Q7j5k5L2cgmPj80T5P%2BmbEdb0mUSY%2FzxfLHVCa99rHtZes1Aps2PAG2TMKKmaM%2FhS0Ba5tKCebtcMve%2Fl1Eec&X-Amz-Signature=79cbb68887ecf813a9c87ba281d17d5d6176641c5df9d881e8444a283921d779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

