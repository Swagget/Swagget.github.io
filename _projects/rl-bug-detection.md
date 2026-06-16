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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWK54FN4%2F20260616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260616T165324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSxKLgITQ6vpdyV696%2BpFiqtA6aOnEVqTyAd%2F2xCkSXAiEArw99x3JE6v844jJe%2Fy6ioShxCuPMJBNkIk0f6f50xbsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPBRdZW2HmfxEj7xTCrcAyC0BPVoXJ4Nb%2BLBa3oydC8TRb7XVU%2FEW4cA1MUWyPW9FXnsoP51yeTPPuY5y146oF%2BktERQwoKvFEapGA3i%2FOElAkTEyqRzyQ1pg0RcWLDGj%2B59bwtRlLIYyJhJzPgEcz3XH8%2FcEA7GD5W7EZj6%2FdBSrBCLSdwpTtNc9bogaCiyPdEEuM6ubQCmgNl8F%2B6UHH1sCiEzJH7AdEXZdPLhNCwJ8386S8FUmjLGNLSfMybzJ%2Bs%2BZnbE%2BAbREqKMz1UepR1y0hDt3fAFJPIVkEbhAOJ2UutCvRalNuTScl6b7H0wHHlMQb0pTZ8xLgYNdUT4GDHChJZ2wr7vLfJngJHFPpspkynqUQ496YAW2dhpQlxys2mE0M3iVFVwNsPcIOUvWG2vGAKqna8L87BIn4XX9JnyCCXhzDR%2FZwYstwRNcEWJpyJXaVS2I2J%2FtDggMR0mN%2F3HmSkd4MYCN4tL486F0NExyqoTV85W8l9L2WpOJ1OIdCzBVr6wlJe0TsuugNvfwznWooYLqx6HwgJ1OogM4RilmxXcseBlDJTVmNEm4IaTqDHg12vE0%2BVAKIk%2BZg4WuGTk%2Bx4GHpxRZ5hWl65Cc6JfyGvVzqanfzAGtnhAQc6QrdfvETV2TJhe2V25MNLcxdEGOqUByxkuhI4Omjv%2BT6kuHhTa5RLae9x1zG%2FRIaWKkSB7EXLBT%2FV%2Bn6Y4iaQS1%2FnUqOdFyiOJdwTn3waubws6GrntKAJLyYyGn5%2BJSMSspj%2B7Sad7zhkVZAwgdMYix9%2B2fdzfv25KWDGzWlB%2Bx5V7W3%2BjA%2B4EUiFnneBNCqQGhYqIEu9jKT7qxZ22LurBD0%2BSd9wvTYglkh2x%2F6Obu7FKcqLwMEmZ%2BEEe&X-Amz-Signature=3dc434a4852006754fb49b899a19d5480f5525606349d9bfb8ee40247d9eae26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

