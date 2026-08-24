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


[RL_for_bug_detection.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/42c70dfb-afaa-4271-a38c-1a1ef2a6ff4f/a8870c5b-1161-4a22-8c69-b9f0fd794ee6/RL_for_bug_detection.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLWJ3BJ%2F20260824%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260824T043302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIE28W8BNWTnOWgqf8nWUP%2FfyNbxf%2BHNoFKDlTXbyclc%2BAiAycOGaJJlzGWp%2FaGBPShkewYNcYeLxETKhZeuaTQ29hSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAtzXnTDr%2BodGPIcwKtwDS7N7m3D%2Fqeno7C7w1Cd1mgmwk%2F3k5YjShKxHP7o8pz%2F8lRJFEUE%2BRECPISUzkgp0L%2FdfNlCIT4y3%2BARB6wVz4oK4wbAjAyI%2BEmG25r9mjVLqRHfyo3PMbJRqHVL7z0OVdNhIL44oh3zcL7E66b4Gjm7o64D0lIY6bULSv4C8B%2FE%2BhZJi6%2F99mAjczOTaHY8eU0btO4I2S7AxGgWapYSkiyfOV9PKkZJHXFGjaYpeZDE6t7qkd5CtgWdTUgSGsSmBSJFGiFUS2a%2FQIu3IUCeX%2Bag1bAlw%2FD27CDETmCa1mimPPRatQbT7FlWse5501nDCT1nG12fLDVI3JeNkPrMX7%2Ft888w3kzV%2BQyzKuEnqXiG1bBnjg8vQy1mw2R%2B7ttTCncJDa0UoPptgbXpF40v0bW4foChfA6kClNQVIf7Tee8iFz56ZTleSlraL%2BJXOjspljmYLSGTJPHE%2FMG%2Fqu2e0IoE4zig%2BkJnTgVAJBNdxEvOHO27q9JQqkLnG51z%2BbNLSDL5PWUVUzzK4oywiO%2F2IfGur6wKli6g9b8sHSWG68Inu5m7AO2aQAwqgOQWbfma9ifWIo5zBjbARnKnBBylCOYN1cImANXeVBVOJcTg%2BGxAtme7nkA6poUFtNcw9O6u1AY6pgF%2Fmu10XR3Kbp8Fgt0ct%2F3uepX5zx%2FT1f%2Fa5DaHq3oFfcc2cwV9AeDz55XF%2Bcpsd9PrRN3UIK0x%2FJMlrr3%2FerYzHfBH496huP0QqfKOUSx84BbuvcEPXrkXyQxTP9O2GkjC982lgwV7FV14EMJybxc6bKs%2FCyu5tqzgzFlI28BR184j9Q%2BSGqeBTHvgEuIb%2FlN9kUGTHxnhstARkN%2FnW41HUKAHrY%2FC&X-Amz-Signature=adc7b100a6525599b7a5955919e424ca4c4c8feef906133b8bcfa392c05e613d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

