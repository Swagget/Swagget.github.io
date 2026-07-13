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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNPXYCZ%2F20260713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260713T012302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAu2SLDojGO3xgf1QgLcRnW4NAZRnpwykbJ%2FNIf3iFElAiEAuFVy0lJk4XrCsXSApLEHLoYgJ0biC4LLpwPb%2BOQK1JwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3n60413PoG9cvHGyrcAx15dioeYVLk%2B0tLNkorleGUH8IPYpyr07J5BygnVR7b30sICgSmNx78gFEoXO%2BdoeHbTOY5Hs635sWi8XJof7PEspAc%2B5LWo1zjm3Vr69joWdpM9DrXHw2%2FAOc8YX%2FZxh8bZJy0WpAorDOsMMYb8aWEp2BIsqBXs6lPRpkusvLDNL7fg4ZB1OL%2FeTE%2FxfF2oH3EE5AZuRsw72aWLMFUESbMEMRJQ8WlHBHHZSfmxtT%2Fx1U10I7Doo4%2B2u7PMLgzPWu%2Bc4K8bxtEHjs7llS0dpRsDj9zsJjnxWU4aNtrLZl6k2lDAOaVBB2EFAvrjMDFFRiCOhm5WLm6%2FtbBbXJ0qfukQ4k3yUBgx267hD5R5fujaL%2Fe%2B7JkxNq5%2B%2Bq8ly9qnbheblDR3P4mowLSEKCMXBZJ0Zr%2BD59wtvi%2FrRP1vBVu8Dj5gVfOBdpJFz7TJe0d%2FNnDgyC4FA2w35ZMZiGRazbfh1j9EPIzN4ODPsf0C7wCf%2B55G7Z%2F1oohOy6egJzqcdKvt%2FkINhX8VDq7oBoJQVCrK16v8h78IjVSKaCaWUZKd%2BsHLmKRNlkI9jCBVywQFy7FmljR%2Fl12GdwPM0PypCA%2BibzSG6daWcq8u5UvouLm0mPJyzrq2QtL4vkIMPC40NIGOqUBRNXjZmWE3H%2B2W%2BFN8gPE9hzehhNzBPUwQLsLjcAGfHN8inkO2W%2FyXgU9fdSV7TfZaUI%2BJspw6j0nc%2FgWCjKTc0S4YjzjNSmsRU9P9KLSwqOWblawOgSn2Kydo0YR0nnXcpf%2BM3LGQ1%2Fz0ee7GeliEjh11afclyGZabQBJWMlswcEnr7ajTcOi4unPx4BGYNaolYAPLkwyiQSGcWNmFm6nJQL0zfb&X-Amz-Signature=a01a5d7af806f1ad55a10fa5683788311f0539337b687faf0375a4d7302e85db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

