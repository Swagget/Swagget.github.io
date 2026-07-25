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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SY44NZ3%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T120140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDqxc6RVpX11Ik1sWrJKTLGudbuGMW%2BTkO8oGr67V06WQIgN9JM5QYY1xBg8gS0aON8AekmiEbVhzUSn4v5bBqe8BUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDIuaJnEW1qm35%2FnvHyrcA0zbn%2Ff6U9PG1Fp%2Feb58Z5XWd8G1hX0l%2Bt1JZ0uwsFxm7AkZYBVKRLOqy3MkcO%2Bvdvo%2B%2FcolaXaFmOMljE1VtS%2FIP5vivPICNnEojcoxYgnxVIddWE3zby2qPil4lpBV5wTfXNU4gnFgo5ApCxXN7RX1xdUmBYYr6Pq1Zq8X%2FUr8nQV4VG27lCa5OnxnUO%2FMtUQT%2FWDkSBomtTNXvSQEG%2F7GIQHApGFtrORmz%2FmYy2galWOZDpm8xSAvTu0VwuvH812xfaSMU2Iqn6c27o3hqer5bOA2Ev5EXCxfmYnhHwCoTzj5VVYkjRfy5l%2B4Z3UiXlX1q5WTMos3sCXu0BelcyuUpZR6ddNhGyFw4RfeoXWWfKZsT7GV1QTHhmVB83OHOuED2Z4udJ1wd2Ap50Gr%2BLcoxbQntFNn72i%2F3vHm3r8Gk4UyLeBU6fcYLADrjj8%2BODM44oLjZde7uotviZk1PppIWJiQh6FQbLDZCD3%2FyK3msmPM2ORS4vorlGMnyE9RiGIcm7NuT6KVCqs7Q%2Fb3gnbfXr%2FqAsMd%2Ft10WuW0z9JM5X7MDpa%2BMaBvElQR9zvCWAIrTQD%2BqzoOlf43Ttk9Jx4KpQ7cbA6mJH%2FTG0jpwabwuQV363VX3qLIuAP6MLaektMGOqUBHQelsUv8U20kVLs0SxA%2Fr3BNvu9DMvusAoeZ6oAoRD0BAQdxDBtz0x6fQaxiOPy%2BwIIz39R9YWbxsg4u5Yjm66C2V71ebJfMDCZRMqHzUaXxnq7VS9BIMZmGCCG9ak39obEM4FEpR7pqF2LaafoXN0%2BZx6ZW41fIDE000r1cqTVy93Xg4H5RO%2BN8cDHijpPZDuChdiFf0wapY9cMBR9NPpCZfoIl&X-Amz-Signature=44ad339b6efbdc55e17725ccfcfd89c7387868e15be9a88cd63e005772463b46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

