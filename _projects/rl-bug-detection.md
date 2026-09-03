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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MVLEWVB%2F20260903%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260903T185627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCuDtY4qK2yaLz%2FghtjWfpHdKQAUWKNSxeMIWVZshBsygIhANiWD1ucryN2VR91BQTi6swdPD6sS10z7F3yhJl05v5qKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4HlbNsZgkxlzbuq4q3AOnzvv3g%2BlSVWjck9TpskwzKMTSoe%2FixD1gVemSexickSa9CgTgqpaO4Niu52wHjLrRSX6duwB4a43tPdTDsR6iT27a75g4mThquWjfhz1PkB56FatHKO1uubJD5PTjfKegzsT7MiGRcm2VFyOpOegr0H%2B34eMLujZZY1AbMdc%2BWSaG%2FdHSbSVu0l17ExuB8LgzmDnSj5PYJ%2Fm4MOwn%2F9D0KBgsWmytwRtu2UvMU1XGsJqFFc2Vv7BfQz1YuWcv6W8RNQ1RNFWXUKQ9j5F15evCutOZeY5LOHXgnSLckOX6aUHmUMiCZgV6s2QS5HuUMkO4l5HBmsNcd7QieQCz9mHx0Hmb%2BLHZUzC93Aio196uXeg1v1WZtXAZUsLu%2Bay17h7NHJsJ8TTg5VoMpQEeYNYq5zWx%2FnMTqo41jqr7b34dRALAph6b7GIQTzIJVuXy6rA9E1xI1oRRVYpq7yO1d%2B0T1ZOjaHRO3%2BzHs%2FwikPHO1cj7kSFrR5H0FSl8TzKgAdtPSwxfcIIMj%2B2cmD7ikQSlPURFJHK%2BxwRDi5IXjB7%2BCFCqBIgRyMXgZfQgagpi3IJgJe4jrLx699amrKLy4WKUjFy1xW8KzH2%2FHkj6tYR5lqFnwQXBFPSaB6%2BLZDDw6ObUBjqkAf2DsSnxTBWNcnwe2IJBow1wNigrO2gQce3WlfzG8HBfJZy6MqGJkigwFFzqv6485zhJgL6nJV8cLteJIeQ5OV7OGaIc6hDPlf3whVLntn2oR2fsAaoYobcI9oQyB5shDu1bXUM6Jhij2ZX9EwsUiJtZxCNaH5vjmq57lOZ9QzgR5eFGQ1IunISx2xvxFPC9ERYo%2BIBA51OqcDXKiNFdia786sl6&X-Amz-Signature=6c64224f1084ecbc805411482da234bd448e22db34cc2b51435d8884972e6c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

