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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQ3GVWE%2F20260626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260626T000214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7%2BpvKxfTz4E3tbRxr6XaD85iYK2On23gPIhw3vSGyEQIhAJnXrnRkQrgAOGv%2FtQIDwsSJyLp%2B1aNqFUoZ9BWhxIp5Kv8DCFgQABoMNjM3NDIzMTgzODA1IgzZ6yB6Qxz8Z2zaOOwq3AOLH%2FBUKjmem20n2%2F7YstVVp4kuY%2FBsY%2BYGAJ9gIrcC7JDrQb0AuawC%2FzZrs7E207vDwmKqznKy9cbgdUwNMMvizut0NS1Zw50Bto4aGKJOGujNSQq2YVsoSKlJbsa31Sm8%2FkUR930m4j2v5MSyr5M7juYg%2FXxztFWOSNKyic%2BX%2FHq6SMCFd%2FsGH%2Bqry5HeImIClcg0wXyA6RVntvp19FRHspZf5f5SsVQXRuC%2FxdqbjgoHpE%2FIsUGO9weUa0Ak8JMNz34UBfHnoJAQg6ziB0CAc2EASI%2Bg3Ss1SnegDBhwwzVCMJXw%2BdcJkzZelb%2FQhMHZsO7LrdfN7rh%2FPKiBaKiy%2B4fLqK3iZwS6YYDaN%2FuApX%2FbHvCsefNHQswo0Tyt2s6uAb5atgcmOtA5OsOBrXIYW8pf3IXFSY0MDcE8ORv33Kjsrkt4cqvNeSg2Vz1eWgGmplmbjSFGu8BRz0XNf%2B0T%2Bch0BtKEMxNlXoaOAx%2FTWwe2kwDdHOj31qHvjbnU%2FF%2B8BknGkiPGlzqVruWxYzrZqgR4aJgAiFRMHY%2B69428neGbR2AglXUeTbVNtjVSIcP4kH5QuCXlgM8Fwvm0NldLqwJJcIl4sFwE%2F%2B6izG3ZqNq12ewZTd%2F2OwQGJDDY7fbRBjqkAXV9FAkXCdHawaMm%2BaCwVWO1F%2BeU1sQQPSt%2BscwntqA15%2Fc3y8QIQdtuZASiDw3L8%2FWe1sk%2Bhmem6yDMjhqg8V17%2BTsV98FSykjY1qa6tJV06o7t%2BtMqE6ZMm9cLQqCfgdo3hi9DqGhmdiHVAodS2V2VRRB%2Fu1W3esySxJipees%2FDnTfVluiEN1FV9JacMnusef2an%2FCJxCCX86cG0JKwX57lAnb&X-Amz-Signature=84687b9a455a6be19609f3d9948262e503cf842225ee28b90af66c37f78e355c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

