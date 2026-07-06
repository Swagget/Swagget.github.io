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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRIHYN5%2F20260706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260706T235515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9K5qLju%2BoC9w5eyXdNOYjUf5G8Lp820H%2FDBPXDOSQ7AiEA0ehJSJqMkljvleVOedBMUGRrt%2F4Hg57q4DwgOtAnCkQq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDEmvZX3YIvJHwwDIiircA%2BvPnWDxOrfZN%2B1Zd2TormgqT6w8to4FYlmT2QdUjY%2F1%2BkKtAnG2iNUOkx88o8VZ%2B7EeaBJhLclacEbdoHJ4u7OeNRQXU8rT6BckRViEJOc8%2FRhorSm2uiuOsVqyy2%2FpBOilwPF%2FR5kzQIMnBPa9qkqHoRsHFD0DtJG93kdQuP5IwwJJMZBBw6bxoQoa4uRgMsXgSA9jHqYOv%2FVugMhpcrkQmSkPVPgIHLvBfSeZTVf%2BkKE3tQzEv%2BbnImnFtJlYtYrVh0wtLWkWtt49YHDn%2F%2F3SXJyCMBnE0pRNJiPBUNgrQGFxzD6LCGEhDmTssJgcB26rv8kkOcTx4JQa9Hr4MaMz64UUTmkzZhjtqN3pt1nHSIpBtuDw6p8wz71cjmCxRRcMzBuZNYk46b505ftsyQICPEb37L8uPBrc4Zuwc6jFR8IJqC7TdYE%2BfWqpqEYs%2F1MjMAEijkvbIbbL8FBDZ808%2FtpX5waPtV085ebPAbmN21hzax1ycngWSLKkbXmoqkMjyGKq8Z9aHesg53RLsY%2BhXC1QU9xT6kqpTUb1aETjMso5WYRK74GY%2B5qYCvRE%2Ful3d1BCmaMVKrn%2FX0N%2B6nYMH8OzSuEtzuPuxXwmNNAl5%2Fav9pY2DI6mAzdsMNOusNIGOqUBQ3CvOVVYSNOdmqgdzkLvFQfRwYR%2F3HAct%2FsR5yK7h7DQwgBd885uTk3pH%2FwuOmuBhqwm3blMGSbkIhZkim9y0dOl8mh55SvaUuDODWIJrtm7cCr8Fqwaq0B9hl2loiVBPPZpAnwPw6lAqKxrGTwelajSrUt6V7Oo33mgQnPZA4lkVJZLVFULyVSonVtPcdeozdIm9i5uB6GpNJ7lZJ%2FZAfumh1Ov&X-Amz-Signature=cdd8ce861d2e3e79bf8fa52f708e442411adccb31ad7a9296bf92f3b0092a1f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

