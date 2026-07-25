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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKUI4EA%2F20260725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260725T045300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIEWe9FsNuKsJYNPYfqqTX8E0pU%2BQKlBNFxegD9H6%2BPDTAiAC22V7yzDZYvgoLI7a%2FzDOsShhhbNA7opiGyAwSLmySCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMZ0bBP09wqDNMHHyXKtwDgLWGKUcr%2BfTkV4aT94ZZmR89LTSvVCNa8NFVEyNxns78b%2B5e5eMVPNiHGh2%2FvqPmXVpAPUlLyYfhD5zAl1OIeD5ykRtbvNSuwz%2Bk26S4%2BkXDGeaC1GlY1RjgeFHqMHOkXjgbbvnTLSG5BJ4IB8UFFV1lhI3gpvpRdple5vsbpvu3RA2esDZMtfvObdhmtz9ViMvODaGwC8Lln4HR6E%2BgxFq95oNe8vFjA%2BWHGuhTVSyVQIpjWj9qTfGEuNZWC6iNxnnPYpq45l660s3WZZgpOCKLBIaPlcBB8LzF17TEkfEAAM4QmeIpNrp6jTs8asPW9dazzEzUTEN25BbnBicLBC%2FjF19sZPksGh%2Bheu2TfmtQZgHnaNreBWYzG4jkSfdwrtzG1%2FQNPD0QbQvqBYDOrPHTs4ZaoPqXKSA6yS%2FscQIE6WNhzSrThgZpGY4X2%2B8SFps8yGaqtbxrjq7JDNYmayjG3O1G739RwFE3B23%2FHsVwGU7OR84oJt93WHqOQ%2FgvrqNoo65soCGDudGDQNa5%2FSNyUlz3KSZIxrwBocmgglCG76x1GwLQC3x3RG6rGFUNUNF4%2FDgN4zXU2%2F3Rbzd1sqH8YN0ZxIjnCvomxAnbAmTXe7HRzgEjuqIQY6AwlvaQ0wY6pgGIjic9aT%2BFiRJh%2FQCMKN%2FRm%2BoTmziVnJMrao1looyVpxg0ONo8JPwX9rcd4ok2woCQ0hglf0SiVNwO8AINywi3x2Fuxs%2BaGfwfnKxqRhZ%2B1krCKPO8HxVk%2BZYsEMN5G2Gv34Ll2S%2F6s9dPPEhu0R7SmlWfoucrnqS7CofoNuQdaGUnaWgBw9K7a90TVpWEEMOnBSGfXfegmRqKe0ffAbJf20o12RaT&X-Amz-Signature=627fd42356ff2947d98a829be5f91c003879139b48f7a3ffacd1fbeaf523f2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

