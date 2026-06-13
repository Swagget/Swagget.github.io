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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5HQTVKY%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T084310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICXPlb4q0PZC4uNhzsT9I8j3mMZgKJmriPmxw1HUjtETAiEAhPm%2BAVrCJc3in2LMbcWqFy6svDs5gd8vVW9K2p%2Fl0hYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJgDouw60%2FqGU0ZrEyrcA9lvzDV0Qbty%2BaVcGM%2B0BnJ520gATzKzH%2Fan9IMUWYIFiA46PyMkeuaW3tZd%2B7cXSNR9WtwzogoILO57fKhjlZHViDYm8YzIjxxePOP6QK1yWtzi%2BzCzBSdRKJVCl%2BxdbWiGyyCf8wkgj%2BH2QxpFHMBowlmdzkzAQvgKwaVOqTCn49DZi10d6mo4vt%2FcSXYGIai%2BhIo9ZKvpasK0TGEXy8%2BXo%2B3NcvpCaVxMFGFNCvNEtbFlIA0v2CXB3ZPFQf%2BlW0AdJqrI964e5DGbW7ESjqRQbn0NZfxa78SvG2FxAosJXfNcG9ypoRiGvbiuKzVmKLKUQ5zLrKf5vc%2BusCRJakRtUMTQeHJ%2BHmFOpxA64WgNAsccaxUNwOGqZvevjjXVjqlbcRkycFR11VYI5pUUbi15ERoxX7hCOZzbV3Nz%2Bx%2BJMiFXttgINv7rlji%2FqEOQMMZ%2FlrH9l4gLKNpMnHdm325NNexDCQK%2FplC%2BOlZXMS%2FaCV9%2B4XQGoIokJep2qSAO20cS7Wcgdf5irFxqCtQ9I%2BGavMcnuu%2FW2jCTWXRTJSmpyifsO83Gb9oHvhhn%2FQCI5YfO4TMA2neIu4DUQDkY3b8CXIWm%2Fd0Drgf2JNU4%2F9cQ7LnG71Ae0WdvyVrnMMettNEGOqUBn179xpWDF3TtCSpRREHEAGi7PCoP6dvp3d%2BxPotfgY%2FA20zOJVL9snVroo8JZseGubDmcm4ivvQ0OPUgsYAKNTbNOb5buFLIRb6YysdzsqL69AbPA40AEIYhPu21f2Wt9IGU3%2FiI1fzZCr%2BECCET8PdAu15Mnumvn7hR5wjoMCKbo7UfuzFH9KxLNsmGcOMTfH48yiK9J70JK4w0RB%2FhhN083Jik&X-Amz-Signature=d183a63bccd00e5b54e27ef793bb088d7df125156becfb3bc354a06cc2b4c997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

