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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4U2SMEM%2F20260828%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260828T071834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIFTrOWq9afzn798MrzbXMtScwFnOxlZEvjzuPdx7gLGTAiEAyqRDC0JLDknCJ0GEC2OsIAhm8c9uZgvQAmyorKapM1Qq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDG9btcqVjLCihLU9PSrcAzsdoKllNjZRujfpYREv4R29nchQsIsp9CC9nItA6MK2CNl%2BXTlz3KAQgmyVmLT2Bz9hf%2BrIwsHbMwS%2FrErfb042s%2F4UJACtpPTeA1Z0PDJPpcNqltVGN%2BS4Gp27XO7svihRZL%2FbhRS3wRtkogJblr9Xwjn4N%2BNZqg48MxtNQnzVo%2BenYqYujorOK5NsnGCsR6eHcnU%2BnLH5JPyhciUVsBDrYNVsk03XAKMCw5UqKewR7XQ%2BxDNnkl4%2FmdFOMakE0uxT65%2F4ytcuPAVt%2FA0UewECx%2Bi%2BAaoWIVfb3NYio77TYa8qNAv772DWZS%2BTAqDtJDoCP4bpOC94TsTOPiicautWKaUzeB%2Bp0SkwJZrngfMjvzG1O%2BVgvyIZ3ZqIAYflDK20KWd1Gzx5VkRBFXJVyjGCmWUtJUUHlVtXD%2FufzABuADyactk%2BlvAweY6QzVQZwuKEgNz2nabd0dwJWgGO1j8%2BrUvfd55TidyKvJNUEuH5d8NzaW92UtfxBrxMdQGIUzuKbnnrB5L%2FKiy07iSs1Al4ThCdQXLH6zvGruosmKe08S5RJz7GA1pR%2FbIHEYIEjpq91Gbco7yJgE3JElj8NQkB539wxdANhZivoszyj3LGTKNkcNXTq1GU%2Fc8tMJ%2F6w9QGOqUBBVOA6T9OK67xD9vwMg4W9u2aez58INPFDdCfTVd8RcBLAILCvxHsXDjzDJqTbQwBRRL7QQVYHBMjCPDnXq2Url3mP4nMi1o7RRjLJyD2G%2F67sO8O6xiKS1N2fsY1mXvUljAzJCaRoY6zsiW5RZb1zUdX%2Fscf2I9XTDTAhaGtOIjk2sSIjGADJUNWUw6AXO0s%2B908ezEMibRKmpPtWJqXRdCKuqeq&X-Amz-Signature=4dffc0f001e30fefc6da38e14294cb986dac97360b980d906d8d0a96ceb40d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

