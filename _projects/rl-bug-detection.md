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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNR5Z2Z%2F20260724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260724T012148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCy6hkr0lJT90v1IncxDKmozC1bEM%2Bp5RxpA1LrVFpxoAIgc0CdgQHPpRKsJrhTH2fRmalIbev38mtuIkGAp6%2FhJTUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMul4pauE5eG%2F3wg1yrcA441EO0563nllgF0TTmv5avNfFetFxKFGzmSoT%2FTDOv7sWPpSzHD1SOcxa6pARxRChGDqVW1DItNNUgS7qgn1gE6MNlAZ92FO5GcJhNy4IQ63x%2BBKq27pPVvaQWXnse23QGLR0LFzxNzS6xzH2QBnnRmfKiTnNPfkjqATXBDN6rS9IKjllVSH6xOfjaihmo0CB0x%2Fcc%2BudUHxgHrwxxKwj8CE63vQwKTAEDZR8f9UFkovB82DQ2GGLfJHMtMta3RTkHipEGcUkp6NCCP9kwyXTbUQBgg2EWXldDhvKwQmkYaeVXOJbQI51idAU6Zf%2FUGNMJ76TBni301YJnaeX6lFFckwXxPY%2FSQh4YiWOIClUnod3n7bTw%2B8HUBLgN24RxSMuO6J0MsQUYPSqgm0ixRzfiunJnZnwWEdF5W3JYBwwFPi8iDUAXH76A4Krvr3LutGiwWGTYjRAu7IT9OGeE6r5LdGfbPNsOO0TCWhGCCEl92%2BWVkFKjQY8ezCIxFWiae5JVITU0BJzulPquxuMVHlO3O8lvinibkLV6%2FQB54PxMq2u7VBV%2F5eoUdw3b58nD%2FCxnaArkXf9et2NO1%2FQCGZY2Szffd4HHKf7LJR4SHdt1Z3WkVLh3FEGAfBgsIMIbtitMGOqUBl14la4%2Fhghya97tDdhB5RN5nQ4V4BJw9I8wk2EFoFLxF%2BcvDemapfhvEEeqmt4EqIZjwBkkAErCV19FRLLNR3j5gs7EUYOM4GhqT9CQosu1s827J%2BN5o%2F70NeqtNgi%2Bhx5C2%2BQ6RBfQB%2BjMrRAr0SLgRWyyI7BKl7Omry9qEnrTdB1E0Q6ILMUX7TVE4O38ZvQte81W3smqk%2BVsS6a%2B60wSd3Q4p&X-Amz-Signature=39dbbef0859998adacaa1c9f427d656891439b7640310e85ef02eba52b1adb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

