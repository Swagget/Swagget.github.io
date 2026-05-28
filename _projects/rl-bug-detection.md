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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHPOFYYI%2F20260528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260528T014720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbOPH7DJq0I1O%2BqAYP9P48wbUzG0L1cVSwguDgAiLuFAiEAoI8RFyNpGGZbvQXvw9G1iEzOo5nQYUHYp4tkeh7fJFkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYVb%2FwgGZfopwEw3yrcAzmdxrfCzW1q2T7Y1ccLihvR2xc%2FQycK1VpQ069k8yD8fwFgLr8HljNYU0WFetvykDDNaUkzsyHn5xCS4yjaWDlDQOQq%2FuA6awr90zddUtNpDJ%2FYzd37hrNnldQ73sNWqmh5IAFNzbYpidvebAhCOv5J8ejKe7Y58tdtbJOUndXkxOQePwqII3sZwEvxtXr05caw4otSD3WatrW%2B1bPVLPacBK7L1kdb6U%2BjAuYIiIEgOiQ84ungSyGd7iRiOmX9vq08nRaCWrcJumG99yrL9Yw7GCZYQCZOQDTklNJyMERyf8HLkOKM4u8CMZk51l5bTkWKPxD2l3zK%2BTVL38tD81J1J%2FMqeamBPv19c6djwt6nAR9x0CpS1GwtXwXAzzFPEftC0hhd%2FEb6ZZcXDFN7xataY%2F8UDmU93eZD5Ag4zngVZ1hEDxmLJp%2BWTuKFfcJAz4uSSwr7GbUFIige098ggM3MX7t46%2BKwGcOgpwbaJnF%2BmxB0nKFGn6OQecO9SCv%2B9mt7Wf2DmgmilWuezJ%2FLUemdkfbFqNZr1gEBc7wWLge7IOqiRNg7skHX9GJ1iZeN5nJos3UC9wHmU9V3qmO%2F19Y2kKo5waOwbQ9viVPhabXFIG4gbxMiGgOCbgEBMN6f3tAGOqUB7GiGNvTgbvPqzViAWC648MLPU4odQQtcOA8QyNj1awHxjMWOkSpVe9YiLnMa7tQxaGBOZw5z1yxQjdAj%2BBXXkPmuMynQx7dDtam5Bog82jFk6Mg6GSLr2bQHesFkGdN8Tg6sGfIcaO66anV2om9YUIMRGbG9ANHA%2FvUJzDwAhxLtW%2FqlYo1EvSTkZ0tOAD4C98l41v2VT2EhzABFx%2BiqDut2Z9uz&X-Amz-Signature=cef23b0a230486f1c0d1a6debf78cd83aa95a24813dc5334fd9e9fcb3df6d74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

