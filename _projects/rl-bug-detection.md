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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q25WFL7%2F20260826%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260826T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQC1VQ7A9NyGPUE3mDXveugOTpHGfRAralho76pupwk1cQIgS3u0VOvDBd1%2B3gPVw%2B6hc4dHt4p%2F25SMviStJLAa6FYq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJsQ%2BlaHHuHjHGqDgyrcA7m2dQT65nXUG2xjQTacmc78aB7XmzTPrpDIOiUjGGPTlqy0u%2FRjR9zITkiSMIMZMzHL2YPfP6mkY7csYnWfPjvDQYH%2FQX%2BTKGd1i98Y86WJLQwXYG9VPy%2BJCLdWxGNqjyfNvqkrpJMbhjtXFdZSqwmEMDiWdOelzMCZ01wJZ77WkN2xDVMoahlK4sHTGr61Fb7BA6WhNLheNVKexlog%2Fe%2FeKcoIBSfCQN0oOecKMEa5oxnEz1or2dhkn2170ixnijcrVGlkb20rse7GdMw2Q38xeiGsn9cRH9nG4l2E7g2MzRgMFTZR9xVC4JPGJxHw9ZTVRS57ooDUSetHm%2BmLiQrUIgJ%2FTTFa3Hhjw8IiUkB2he8mzS%2B%2BMLULuBbVJ3QG867ISox049rl4wByIQ8iOfMC0k0TgeCxh6iN1ZZYjWY4F8mxsZNFRhlVJu6%2BE1AMCVRzrLUgdIh2AqoI8FWS33uSdcYqKWS%2F370ZKsINMYgq4q8o94OeWMhTlHVXWnwQgbBfJAMpvnnSnGAjtg4%2B226EwRI7%2Flo9pw3iuq5ve8eY8nXrcuNRTWAUYDrHSTC7PR7aNlS4zXhRXwPskHJ3x%2BiRauezHRPM3yq33kGS6igepHrFcnIskUTHT7j2MNuTudQGOqUBQlrauH%2BKhq88IT5sUOxKXVdgqQsqE7Lr3S9yYfYH6HdG0uYBzTE%2FbB3GXSwj8lkThBPH%2B%2F67Rs4Tvi%2BW9%2F40E7%2BlNcNFXGpH%2FclCxG%2BbnYz0GoFoy96NfCxNbDCZPVbW9dVZ8QThJNk3BF50wiOGYd%2BqP73K68QdnXzs2w8u0ZEEhhZnyYggbHSZycYiAvz9JqNpU%2B%2FYleJhSl%2FDk9pHJGAtmrgM&X-Amz-Signature=0c28afc01d1b120a0eefb984e8e6ee2095b8e2178ca0053f36cdd5af1eded5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

